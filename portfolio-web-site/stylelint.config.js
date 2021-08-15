// https://toragramming.com/programming/nuxt-js/nuxt-stylelint-prettier-vscode-format-scss-on-save/
module.exports = {
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: ['**/node_modules/**'],
  extends: [
    // Google や Airbnb のスタイルガイドなどが含まれた一般的なスタイル規則
    'stylelint-config-standard',
    // SCSS 用ルールセット
    'stylelint-config-recommended-scss',
    // stylelint-config-で適応したルールとprettierが競合するルールを後ろからオフにする
    // そのためstylelint-prettier/recommendedは必ず最後に記述する
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-colon-newline-after': null,
    'declaration-block-trailing-semicolon': null,
    'value-list-comma-newline-after': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
