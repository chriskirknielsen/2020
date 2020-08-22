module.exports = {
  title: "chriskirknielsen",
  url: "https://chriskirknielsen.com",
  repo: "https://github.com/chriskirknielsen/2020",
  author: {
    name: "Christopher Kirk-Nielsen",
    email: "chriskirknielsen@gmail.com",
    twitter: "https://twitter.com/ckirknielsen",
  },
  copyrightStart: 2019,
  currentYear: (new Date()).getFullYear(),
  primaryLanguage: "en",
  languages: {
    "en": {
      label: "English",
      path: "/",
      root: "",
    },
    "fr": {
      label: "Français",
      path: "/fr",
      root: "fr/",
    }
  },
  assetUrl: {
    manifest: "manifest.json",
    icons: {
      faviconPng: "assets/img/icon.png",
      faviconSvg: "assets/img/favicon.svg",
      maskIcon: "assets/img/mask-icon.svg",
      appleTouchIcon: "assets/img/apple-touch-icon.png",
      googleIcon: "assets/img/google-touch-icon.png",
    },
    globalStyles: "assets/css/global.css",
    fontFaceStyles: "assets/css/font-face.css",
  }
};