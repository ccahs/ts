module.exports = {
  plugins: ["@vuepress/back-to-top"],
  title: "Connect Care",
  description: "TDR Test Scripts",
  themeConfig: {
    lastUpdated: "Last Updated",
    logo: "/images/ahs_logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Scripts", link: "/scripts/" },
      { text: "Issues/Bugs", link: "https://github.com/ccahs/ts/issues/new" }
    ],
    sidebar: {
      "/guide/": ["", "style"],
      "/scripts/": ["", "print-wristband-adt", "print-otx"]
    }
  }
};
