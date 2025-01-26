import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';


const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  // useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  manualSortFileNameByPriority: ['引言.md','开服.md'],
  excludePattern: ['Api-*.md','Markdown-*.md', '**/README.md'],
};


// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar({
  title: "MC server plugin exp",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aprdeci' },
      { icon: 'wordpress', link: 'https://www.aprdec.top'},
      { icon: 'minetest', link: 'http://mcmap.126386.xyz:8880' },
    ],
    search:{
      provider: 'local'
    }
  }
},vitePressSidebarOptions))
