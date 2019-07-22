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
      { text: "Issues/Bugs", link: "/" }
    ],
    sidebar: {
      "/guide/": ["", "frontend", "backend"],
      "/scripts/": ["", "print-wristband-adt", "print-otx"]
    }
  }
};
