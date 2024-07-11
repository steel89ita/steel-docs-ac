import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const organizationName = "steel89ita"
const projectName = "steel-docs-ac"



const config: Config = {
  title: "Steel AC",
  tagline: "Assetto Corsa Modding Tools made simple.",
  favicon: "img/steeldocs_logo.png",

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docs-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "SteelRacing AC",
      logo: {
        alt: "SteelRacing Documentations",
        src: "img/steeldocs_logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/steel89ita/steel-docs-ac",
          label: "GitHub",
          position: "right",
          className: "header-github-link",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/HNC7HMqndH",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/steel.simracing",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/steel.simracing",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Patreon",
              href: "https://www.patreon.com/steelracing",
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} SteelRacing under <a href="https://choosealicense.com/licenses/gpl-3.0/" target="_blank">GNU license.</a> Built with ❤️ with Docusaurus and React.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["json", "ini"],
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-color-1",
          line: "color-block-1",
          block: { start: "color-block-1-start", end: "color-block-1-end" },
        },
        {
          className: "code-block-color-2",
          line: "color-block-2",
          block: { start: "color-block-2-start", end: "color-block-2-end" },
        },
        {
          className: "code-block-color-3",
          line: "color-block-3",
          block: { start: "color-block-3-start", end: "color-block-3-end" },
        },
        {
          className: "code-block-color-4",
          line: "color-block-4",
          block: { start: "color-block-4-start", end: "color-block-4-end" },
        },
        {
          className: "code-block-color-5",
          line: "color-block-5",
          block: { start: "color-block-5-start", end: "color-block-5-end" },
        },
        {
          className: "code-block-color-6",
          line: "color-block-6",
          block: { start: "color-block-6-start", end: "color-block-6-end" },
        },
        {
          className: "code-block-color-7",
          line: "color-block-7",
          block: { start: "color-block-7-start", end: "color-block-7-end" },
        },
        {
          className: "code-block-color-8",
          line: "color-block-8",
          block: { start: "color-block-8-start", end: "color-block-8-end" },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
}

export default config;
