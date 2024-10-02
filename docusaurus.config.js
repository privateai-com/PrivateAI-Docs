// // @ts-check
// // `@type` JSDoc annotations allow editor autocompletion and type checking
// // (when paired with `@ts-check`).
// // There are various equivalent ways to declare your Docusaurus config.
// // See: https://docusaurus.io/docs/api/docusaurus-config

// import { themes as prismThemes } from "prism-react-renderer";

// /** @type {import('@docusaurus/types').Config} */
// const config = {
//   title: "PrivateAI Docs",
//   tagline: "PrivateAI Docs",
//   favicon: "assets_new/favicon.ico",

//   // Set the production url of your site here
//   url: "https://privateai-com.github.io/",
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: "/PrivateAI-Docs/",

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: "PrivateAI", // Usually your GitHub org/user name.
//   projectName: "PrivateAI Docs", // Usually your repo name.

//   onBrokenLinks: "throw",
//   onBrokenMarkdownLinks: "warn",

//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   // i18n: {
//   //   defaultLocale: "en",
//   //   locales: ["en"],
//   // },

//   presets: [
//     [
//       "classic",
//       /** @type {import('@docusaurus/preset-classic').Options} */
//       ({
//         docs: {
//           sidebarPath: "./sidebars.js",
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           // editUrl:
//           //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
//         },
//         // blog: {
//         //   showReadingTime: true,
//         //   feedOptions: {
//         //     type: ["rss", "atom"],
//         //     xslt: true,
//         //   },
//         //   // Please change this to your repo.
//         //   // Remove this to remove the "edit this page" links.
//         //   editUrl:
//         //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
//         //   // Useful options to enforce blogging best practices
//         //   onInlineTags: "warn",
//         //   onInlineAuthors: "warn",
//         //   onUntruncatedBlogPosts: "warn",
//         // },
//         theme: {
//           customCss: "./src/css/custom.css",
//         },
//       }),
//     ],
//   ],

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       // Replace with your project's social card
//       image: "assets_new/privateai.avif",
//       navbar: {
//         title: "PrivateAI.com",
//         logo: {
//           alt: "PrivateAI Logo",
//           src: "assets_new/privateai.avif",
//         },
//         items: [
//           {
//             type: "docSidebar",
//             sidebarId: "docsSidebar",
//             position: "left",
//             label: "Docs",
//           },
//           // { to: "/blog", label: "Blog", position: "left" },
//           // {
//           //   href: "https://github.com/facebook/docusaurus",
//           //   label: "GitHub",
//           //   position: "right",
//           // },
//         ],
//       },
//       // footer: {
//       //   style: "dark",
//       //   links: [
//       //     {
//       //       title: "Docs",
//       //       items: [
//       //         {
//       //           label: "Tutorial",
//       //           to: "/docs/intro",
//       //         },
//       //       ],
//       //     },
//       //     {
//       //       title: "Community",
//       //       items: [
//       //         {
//       //           label: "Stack Overflow",
//       //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
//       //         },
//       //         {
//       //           label: "Discord",
//       //           href: "https://discordapp.com/invite/docusaurus",
//       //         },
//       //         {
//       //           label: "Twitter",
//       //           href: "https://twitter.com/docusaurus",
//       //         },
//       //       ],
//       //     },
//       //     {
//       //       title: "More",
//       //       items: [
//       //         {
//       //           label: "Blog",
//       //           to: "/blog",
//       //         },
//       //         {
//       //           label: "GitHub",
//       //           href: "https://github.com/facebook/docusaurus",
//       //         },
//       //       ],
//       //     },
//       //   ],
//       //   // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
//       // },
//       prism: {
//         theme: prismThemes.github,
//         darkTheme: prismThemes.dracula,
//       },
//     }),
// };

// export default config;

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PrivateAI Docs",
  tagline: "PrivateAI Docs",
  favicon: "assets_new/favicon.ico",
  url: "https://docs.privateai.com/",
  // url: "",
  // baseUrl: "/",
  baseUrl: "/",
  // baseUrl: "/",
  organizationName: "PrivateAI",
  projectName: "PrivateAI Docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // themes: ["@docusaurus/theme-search-algolia"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/", // Set /docs to be accessible at /
          // mdxLayouts: {
          //   default: "@theme/MDXLayout", // Register your custom layout here
          // },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "assets_new/logo.svg",
    navbar: {
      title: "PrivateAI.com",
      logo: {
        alt: "PrivateAI Logo",
        src: "assets_new/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
      ],
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // default theme metadata
    metadata: [
      {
        name: "description",
        content:
          "The AI-powered data governance with privacy by design. Privacy-by-design, encryption and anonymization of data transfers, full ability to manage, export and delete data, federated learning",
      },
      { name: "keywords", content: "PrivateAI, documentation, AI, privacy" },
      { property: "og:title", content: "PrivateAI.com | Say Hello to $PGPT" },
      {
        property: "og:description",
        content:
          "The AI-powered data governance with privacy by design. Privacy-by-design, encryption and anonymization of data transfers, full ability to manage, export and delete data, federated learning",
      },
      {
        property: "og:image",
        content: "https://docs.privateai.com/assets_new/meta.png",
      },
      { property: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:image",
        content: "https://docs.privateai.com/assets_new/meta.png",
      },
    ],

    // footer: {
    //   logo: {
    //     alt: "Meta Open Source Logo",
    //     src: "img/meta_oss_logo.png",
    //     href: "https://opensource.fb.com",
    //     width: 160,
    //     height: 51,
    //   },
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: "YOUR_APP_ID",

    //   // Public API key: it is safe to commit it
    //   apiKey: "YOUR_SEARCH_API_KEY",

    //   indexName: "YOUR_INDEX_NAME",

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: "external\\.com|domain\\.com",

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: "/docs/", // or as RegExp: /\/docs\//
    //     to: "/",
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: "search",

    //   // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    //   insights: false,

    //   //... other Algolia params
    // },
    // algolia: {
    //   contextualSearch: true,
    //   appId: "5ZR69Q9P52",
    //   apiKey: "62bcfc8b8eeb6d592b6ca312b2da6cf4",
    // },
  },
};

export default config;
