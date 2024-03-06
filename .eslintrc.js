module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        'react/require-default-props': 'off',
        'react/button-has-type': 'off',
        'no-shadow': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-tabs': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
        'max-len': [2, { ignoreComments: true, code: 100 }],
        'no-trailing-spaces': 'off',
        'no-console': 'off',
        'no-multiple-empty-lines': [2, { max: 99999, maxEOF: 0 }],
        'eol-last': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
