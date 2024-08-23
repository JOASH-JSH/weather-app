import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    pluginJs.configs.recommended,
    {
        rules: {
            semi: 'error',
            eqeqeq: 'error',
            indent: ['warn', 4],
            quotes: ['warn', 'single', { allowTemplateLiterals: true }],
            curly: 'error'
        }
    },
    eslintConfigPrettier
];
