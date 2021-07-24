##
## 暗号化
##

### dev
# 暗号化
env.encrypt.local:
	@make _env.encrypt KEY=$(KEY) INPUT=./env/decrypt/env.dev.js OUTPUT=./env/encrypt/env.dev
# 復号
env.decrypt.local:
	@make _env.decrypt KEY=$(KEY) INPUT=./env/encrypt/env.dev OUTPUT=./env/decrypt/env.dev.js

### pro
## 暗号化
env.encrypt.pro:
	@make _env.encrypt KEY=$(KEY) INPUT=./env/decrypt/env.pro.js OUTPUT=./env/encrypt/env.pro
## 復号
env.decrypt.pro:
	@make _env.decrypt KEY=$(KEY) INPUT=./env/encrypt/env.pro OUTPUT=./env/decrypt/env.pro.js

##
## 暗号化関数
##

_env.encrypt:
	@if [ -n "$(KEY)" ]; then\
		openssl aes-256-cbc -e -in $(INPUT) -pass pass:$(KEY) | base64 > $(OUTPUT);\
		echo $(OUTPUT);\
	else\
		echo "you need define KEY.\nyou need read README.md.";\
	fi

_env.decrypt:
	@if [ -n "$(KEY)" ]; then\
		cat $(INPUT) | base64 -d | openssl aes-256-cbc -d -out $(OUTPUT) -pass pass:$(KEY);\
		echo $(OUTPUT);\
	else\
		echo "you need define KEY.\nyou need read README.md.";\
	fi
