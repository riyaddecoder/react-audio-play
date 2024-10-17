import { defineConfig } from "vitepress";

const basePath = "/react-audio-play";
const ogDescription =
  "React-audio-play is a simple, lightweight and customizable audio player npm package for React applications";
const ogImage = `${basePath}/android-chrome-192x192.png`;
const ogTitle = "React Audio Play | A Simple Audio Player Package For ReactJS";
const ogUrl = "https://riyaddecoder.github.io/react-audio-play";

export default defineConfig({
  base: `${basePath}/`,
  title: `React Audio Play`,
  description:
    "react-audio-play is a simple, lightweight and customizable audio player npm package for React applications. It provides an easy-to-use interface to play audio files in your React components with minimal setup.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${basePath}/favicon-16x16.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${basePath}/favicon-32x32.png`,
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `${basePath}/apple-touch-icon.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: `${basePath}/android-chrome-192x192.png`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: `${basePath}/android-chrome-512x512.png`,
      },
    ],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    ],
    [
      "link",
      {
        rel: "preload",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap",
        as: "style",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "reactJs, React Package, React Audio Player, Audio Player For React, Simple Audio Player, Audio Player NPM, riyaddecoder",
      },
    ],
    [
      "meta",
      { name: "author", content: "Shahidul Alam Riyad aka riyaddecoder" },
    ],

    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:type", content: "npmPakcage" }],
    ["meta", { property: "og:site_name", content: "react-audio-play" }],
    ["meta", { name: "twitter:card", content: "REACT AUDIO PLAY" }],
    ["meta", { name: "twitter:site", content: "@riyaddecoder" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "React Audio Play | A Simple Audio Player Package For ReactJS",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "react-audio-play is a simple, lightweight and customizable audio player npm package for React applications.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: `${basePath}/android-chrome-192x192.png`,
      },
    ],
    [
      "script",
      {
        src: `${basePath}/clarity.js`,
        defer: "",
      },
    ],
  ],

  themeConfig: {
    logo: `/apple-touch-icon.png`,

    editLink: {
      pattern:
        "https://github.com/riyaddecoder/react-audio-play/edit/master/documentation/docs/:path",
      text: "Suggest changes to this page",
    },

    socialLinks: [
      { icon: "npm", link: "https://www.npmjs.com/package/react-audio-play" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/riyaddecoder/" },
      { icon: "discord", link: "https://discord.gg/5THusG85" },
      {
        icon: "github",
        link: "https://github.com/riyaddecoder/react-audio-play",
      },
    ],

    footer: {
      message: `Released under the MIT License`,
      copyright:
        "Copyright © 2022-present <a href='https://github.com/riyaddecoder' target='_blank'>Shahidul Alam Riyad</a>",
    },

    nav: [
      { text: "Examples", link: "/examples/", activeMatch: "/examples" },
      { text: "Sponsors", link: "/sponsors/", activeMatch: "/sponsors" },
    ],

    sidebar: {
      "/sponsors": [],
      "/": [
        {
          // text: "Guide",
          items: [
            {
              text: "Getting Started",
              link: "/",
            },
            {
              text: "Examples",
              link: "/examples",
            },
          ],
        },
      ],
    },

    outline: {
      level: [2, 3],
    },
  },
  transformPageData(pageData) {
    const canonicalUrl = `${ogUrl}/${pageData.relativePath}`
      .replace(/\/index\.md$/, "/")
      .replace(/\.md$/, "/");
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.unshift(
      ["link", { rel: "canonical", href: canonicalUrl }],
      ["meta", { property: "og:title", content: pageData.title }]
    );
    return pageData;
  },
});
