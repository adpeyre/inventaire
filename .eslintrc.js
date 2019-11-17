module.exports =  {
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".ts"]
            }
        }
    },
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'airbnb-base'
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
    },
    rules:  {
        "@typescript-eslint/no-inferrable-types": "off",
        "padded-blocks": ["error", "never"],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }],
        "no-console": "off",
        "class-methods-use-this": "off",
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }]
    },
};
