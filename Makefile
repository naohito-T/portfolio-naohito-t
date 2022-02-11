# ---------------------------------------------------------------#
#	  											Variables		 											     #
# ---------------------------------------------------------------#

# Makefileでの := は simply expanded variable といって一度しか展開されない。
# = は参照するたびに展開される
# コマンドの実行を変数に入れるためには
# @see https://www.nooozui.com/entry/20200129/1580277274
# debug → $(warning CFLAGS1 = $(FROM_DEPLOY_BRANCH))

# ログの色
R := \e[31m
G := \e[32m
B := \e[34m
N := \e[0m

# .envrc書き込みパス
DECODING_FRONT_PATH := dotenv ./env/decrypt/.env.

# deploy config branch
ONLY_DEPLOY_BRANCH := * main
FROM_DEPLOY_BRANCH := $$(git branch | head -n 1)

# ---------------------------------------------------------------#
#  												setup make 													 	 #
# ---------------------------------------------------------------#

# 暗号化
# Usage (make env.encrypt ENV=xxx KEY=xxx)
.PHONY: env.encrypt
env.encrypt:
	@make _env.encrypt KEY=$(KEY) INPUT=./env/decrypt/.env.$(ENV) OUTPUT=./env/encrypt/.env.$(ENV)

# 復号
.PHONY: env.decrypt
env.decrypt:
	@make _env.decrypt KEY=$(KEY) INPUT=./env/encrypt/.env.$(ENV) OUTPUT=./env/decrypt/.env.$(ENV)

# .envrc 作成
# Usage (make envrc.create ENV=xxx)
.PHONY: envrc.create
envrc.create:
	@make _env.makerc ENVIRONMENT=$(ENV)

# ---------------------------------------------------------------#
#  												Develop make 													 #
# ---------------------------------------------------------------#

.PHONY: emulate
emulate:
	@cd ./portfolio-ui; npx firebase emulators:start;

# ---------------------------------------------------------------#
#  												Deploy make 													 #
# ---------------------------------------------------------------#

.PHONY: deploy
deploy:
	@make _deploy.hosting


# ---------------------------------------------------------------#
#  												Project clean 											 	 #
# ---------------------------------------------------------------#

# projectで使用していないpackageを確認できる(これで削除すればいい。)
.PHONY: confirm.package
confirm.package:
	@cd ./portfolio-ui; npx depcheck -y

# ---------------------------------------------------------------#
#  												make method 													 #
# ---------------------------------------------------------------#

# 暗号化 method
_env.encrypt:
	@if [ -n "$(KEY)" ]; then\
		openssl aes-256-cbc -e -in $(INPUT) -pass pass:$(KEY) | base64 > $(OUTPUT);\
		printf '${B}%s\n' "# 鍵を暗号化し配置しました。→→$(OUTPUT)";\
	else\
		printf '${R}%s\n' "# you need define KEY.\nyou need read README.md.";\
	fi

# 復号化 method
_env.decrypt:
	@if [ -n "$(KEY)" ]; then\
		cat $(INPUT) | base64 -d | openssl aes-256-cbc -d -out $(OUTPUT) -pass pass:$(KEY);\
		printf '${B}%s\n' "# 鍵を復号化し配置しました。→→$(OUTPUT)";\
	else\
		printf '${R}%s\n' "# you need define KEY.\nyou need read README.md.";\
	fi

# .envrc 作成method
# 最初の > で.envrcを必ず上書きします。
_env.makerc:
	@if [ -n "$(ENVIRONMENT)" ]; then\
		printf '${B}%s\n' "# envを.envrcに記載";\
		echo ${DECODING_FRONT_PATH}$(ENVIRONMENT) > .envrc;\
		direnv allow;\
		printf '${B}%s\n' "# $(ENVIRONMENT)用の.envrcを作成。\n.envrc done";\
	else\
		printf '${R}%s\n' "# you need define ENVIRONMENT.\nyou need read README.md.";\
	fi

# deploy method
_deploy.hosting:
	@if [ "${ONLY_DEPLOY_BRANCH}" = "${FROM_DEPLOY_BRANCH}" ]; then\
		printf '${B}%s\n' "# Hosting Start";\
		cd ./portfolio-ui;\
		yarn generate;\
		firebase deploy --only hosting;\
	else\
		printf '${B}%s\n' "# Cannot start hosting, please move to main branch.";\
	fi
