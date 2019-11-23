module.exports = {
  plugins: ["@vuepress/back-to-top"],
  title: "Connect Care",
  description: "TDR Test Scripts",
  themeConfig: {
    lastUpdated: "Last Updated",
    logo: "/images/td-logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Scripts", link: "/scripts/" },
      { text: "Issues/Bugs", link: "https://github.com/ccahs/ts/issues/new" }
    ],
    markdown: {
      lineNumbers: true
    },
    sidebar: {
      "/guide/": ["", "style"],
      "/scripts/": [
        "",
        "print-wristband-adt",
        "print-otx-asap",
        "print-otx-inpatient",
        "reschedule-appt",
        "test-doc-scan"
      ]
    }
  }
};
