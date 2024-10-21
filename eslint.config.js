import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // Add Jest globals
        global: 'readonly', // Add global as readonly
      },
    },
  },
  pluginJs.configs.recommended,
];
