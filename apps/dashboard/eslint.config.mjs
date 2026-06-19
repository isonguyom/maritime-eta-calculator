import { defineConfig, globalIgnores } from 'eslint/config';
import nextJs from 'eslint-config-next/core-web-vitals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  // Next.js recommended config (ARRAY SPREAD, NOT FUNCTION)
  ...nextJs,

  // TypeScript rules
  ...tseslint.configs.recommended,

  // Prettier conflict resolver
  prettier,

  // Ignore build files
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),

  // Custom Naviscope rules
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
]);
