import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jquery,
            },
        },
        rules: {
            "no-unused-vars": [
                'error',
                {
                    // グローバルorローカルのどの範囲の変数をチェックするかを指定(デフォルトはall)
                    vars: 'all',
                    // 名前付き引数をどこまでチェックするかを指定(デフォルトはafter-used)
                    args: 'all',
                    // チェックしない例外パターンを指定（ここではアンダースコアで書けば無視)
                    argsIgnorePattern: '^_'
                },
            ],
            "indent": [
                "warn",
                4,
                {
                    "SwitchCase": 1
                }
            ],
            "linebreak-style": [
                "warn",
                "unix"
            ],
            "semi": [
                "error",
                "always"
            ],
            "no-console": "warn",
        },
    },
    pluginJs.configs.recommended,
];