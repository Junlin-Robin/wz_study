import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '学狂',
    headScripts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js',
        onload: `
          mermaid.initialize({ startOnLoad: false });
          // 手动触发渲染（关键！）
          document.querySelectorAll('.mermaid').forEach(el => {
            mermaid.render(el.id, el.dataset.mermaid, el);
          });
        `,
      },
    ],
    footer: '学完狂干三碗大米饭<br/>项目搭建 | 技术支持 <a href="https://github.com/Junlin-Robin" target="_blank">@Robin</a><br />文档编写 | 协助开发  <a href="https://github.com/Geistesblitz7" target="_blank">@Geistesblitz</a>'
  },
  base: '/wz_study/',
  publicPath: '/wz_study/',
  extraRehypePlugins: ['rehype-katex'],
  extraRemarkPlugins: ['remark-math', 'remark-mermaid-dataurl'],
});
