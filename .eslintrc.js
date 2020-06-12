module.exports={
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
        "globals": {
            "Page":true,
            "App":true
        },
        'no-empty-function':[
            "error",{
                 "allow": [
                 "functions",
                 "arrowFunctions" ,
                 "generatorFunctions" ,
                 "methods" ,
                 "generatorMethods" ,
                 "getters",
                 "setters" ,
                 "constructors" ]
                }
        ]
      

 }
}