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
    "TeePublic": "https://www.teepublic.com/user/chriskirknielsen",
    "RedBubble": "https://www.redbubble.com/people/ckirknielsen/shop"
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
    stylesFolder: "assets/css",
    globalStyles: "assets/css/global.css",
    fontFaceFolder: "assets/fonts",
    fontFaceStyles: "assets/css/font-face.css",
  },
  cloudinary: {
    url: 'https://res.cloudinary.com/chriskirknielsen',
    logo: 'ckn_logo',
    image: 'ckn_post_bg',
    font: 'MarvinVisionsBigBold.otf'
  }
}
