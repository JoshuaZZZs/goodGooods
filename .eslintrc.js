module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "env": {
        "node": true,
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },

    "rules": {
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],

        'no-empty-function': [
            "off", {
                "allow": [
                    "functions",
                    "arrowFunctions",
                    "generatorFunctions",
                    "methods",
                    "generatorMethods",

                ]
            }
        ]


    }
}