// .vitepress/config.ts
import { defineConfig } from 'vitepress';
import { set_sidebar } from "../.vitepress/auto-sidebar.mjs";	
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    base:"/liampage/",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    title: "Liam's Homepage",
    description: "Liam's Homepage",
    markdown: {
      math: true,
    },
    themeConfig: {
      outlineTitle: "Outline",
      outline: [2, 6],
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Projects', link: '/projects/NCCP.md' },
        { text: 'Resume', link: '/resume/resume.md' },
        { text: 'Blog', link: '/blogs/0-start.md' },
      ],
      sidebar: {
        "/examples": set_sidebar("/examples"),
        "/resume": set_sidebar("resume"),
        '/blogs': set_sidebar('/blogs'),
        '/projects': set_sidebar('/projects'),
      },
      aside: "left",
      socialLinks: [
        { icon: 'github', link: 'https://github.com/Lidamn/liampage' },
      ],
      footer: {
        copyright: "Copyright@ 2025 Tianlai Li",
      },
      search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "Search",
            },
            modal: {
              noResultsText: "No such result",
              resetButtonTitle: "Clear search",
              footer: {
                selectText: "Choose",
                navigateText: "Switch",
              },
            },
          },
        },
      },
    },

    locales: {
      root: {
        label: 'English',
        lang: 'en',
      },
      zh: {
        label: '简体中文',
        lang: 'zh',
        themeConfig: {
          outlineTitle: "目录",
          nav: [
            { text: '首页', link: '/zh/' },
            { text: '项目', link: '/zh/projects/NCCP.md' },
            { text: '简历', link: '/zh/resume/resume.md' },
            { text: '博客', link: '/zh/blogs/start.md' },
          ],
          sidebar: {
            "/zh/examples": set_sidebar("/zh/examples"),
            "/zh/resume": set_sidebar("/zh/resume"),
            '/zh/blogs': set_sidebar('/zh/blogs'),
            '/zh/projects': set_sidebar('/zh/projects'),
          },
          search: {
            provider: "local",
            options: {
              translations: {
                button: {
                  buttonText: "搜索",
                  buttonAriaLabel: "搜索",
                },
                modal: {
                  noResultsText: "未找到结果",
                  resetButtonTitle: "清除搜索",
                  footer: {
                    selectText: "选择",
                    navigateText: "切换",
                  },
                },
              },
            },
          },
        },
      },
    },

    mermaid: {
      theme: 'default',
    },
    mermaidPlugin: {
      class: 'mermaid my-class',
    },
  })
);