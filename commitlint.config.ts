import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Allow the extra 'content' type on top of conventional defaults
    'type-enum': [
      2,
      'always',
      [
        'content', // new article, project entry, or other site content
        'feat',    // new page, feature, or component
        'fix',     // bug fix
        'style',   // visual / CSS-only changes
        'refactor',
        'perf',
        'test',
        'chore',   // deps, tooling, config
        'ci',      // Cloudflare / GitHub Actions config
        'revert',
      ],
    ],
    'subject-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 100],
  },
};

export default config;
