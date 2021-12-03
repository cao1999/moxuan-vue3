// vitepress配置文件

module.exports = {
  title: "MOXUAN",
  description: "A component library for vue3",
  // 配置网站icon
  head: [["link", { rel: "icon", href: "/img/logo.svg" }]],
  base: "/",
  themeConfig: {
    smoothScroll: true,

    // 顶部菜单栏
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/button/" },
      { text: "关于", link: "/about/" },
      { text: "github", link: "https://github.com/cao1999/advanced-js" },
    ],

    // 左侧菜单栏，可配置指定页面的sidebar。可在md文件中单独设置是否显示
    sidebar: {
      // 指南页
      "/guide": [{ text: "安装", link: "/guide/install/" }],

      // 组件页
      "/components": [
        {
          text: "组件",
          // 配置子菜单
          children: [
            { text: "Button", link: "/components/button/" },
            { text: "Scrollbar", link: "/components/scroll-bar/" },
          ],
        },
      ],
    },
  },
};
