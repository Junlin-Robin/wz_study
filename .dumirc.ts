import { defineConfig } from 'dumi';

import favicon from './src/assets/favicon';

export default defineConfig({
  themeConfig: {
    name: '学狂',
    footer: 'Just Crazy | 学完狂干三碗大米饭<br/>Copyright © <a href="https://github.com/Junlin-Robin" target="_blank">Robin</a> and <a href="https://github.com/Geistesblitz7" target="_blank">Geistesblitz</a> 2025-present',
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/Junlin-Robin/wz_study',
    }
  },
  base: '/wz_study/',
  publicPath: '/wz_study/',
  favicons: [favicon],
  extraRehypePlugins: ['rehype-katex'],
  extraRemarkPlugins: ['remark-math', 'remark-mermaid-dataurl'],
});
