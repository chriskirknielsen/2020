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
  navSet: ["home", "blog", "about"],
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
  merch: {
    "TeePublic": "https://www.teepublic.com/user/chriskirknielsen/albums/113954-web-development",
    "RedBubble": "https://www.redbubble.com/people/ckirknielsen/shop",
    "Society6": "https://society6.com/chriskirknielsen/prints"
  },
  support: {
    "kofi": "https://ko-fi.com/chriskirknielsen"
  },
  assetUrl: {
    manifest: "manifest.json",
    authorAvatar: "assets/img/avatar.png",
    icons: {
      faviconPng: "assets/img/icon.png",
      faviconSvg: "assets/img/favicon.svg",
      maskIcon: "assets/img/mask-icon.svg",
      appleTouchIcon: "assets/img/apple-touch-icon.png",
      googleIcon: "assets/img/google-touch-icon.png",
    },
    fonts: {
      heading: "assets/fonts/MarvinVisionsBig-Bold.woff2"
    },
    scriptsFolder: "assets/jsmin",
    stylesFolder: "assets/css",
    allStyles: "assets/css/style.css",
    inlineStyles: "assets/css/inline.css",
    globalStyles: "assets/css/global.css",
    fontFaceFolder: "assets/fonts",
    fontFaceStyles: "assets/css/font-face.css",
  },
  cloudinary: {
    url: 'https://res.cloudinary.com/chriskirknielsen',
    logo: 'ckn_logo',
    image: 'ckn_post_bg',
    font: 'MarvinVisionsBigBold.otf'
  },
  showPostAuthor: false
}
