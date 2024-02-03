/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a12b7a283f7f40842f2ae03a75efd24"
  },
  {
    "url": "agenda.html",
    "revision": "757544044565914135fbaf8f8e7e7b08"
  },
  {
    "url": "android/android-launchericon-144-144.png",
    "revision": "b9c1c9a190f9674c314719e863741df2"
  },
  {
    "url": "android/android-launchericon-192-192.png",
    "revision": "e100e4c3f80ba5c948a47382c42a2bc7"
  },
  {
    "url": "android/android-launchericon-48-48.png",
    "revision": "c1bee8fde41c3108b43007501c3db8f2"
  },
  {
    "url": "android/android-launchericon-512-512.png",
    "revision": "6bcc247ab4917c01fcdb824a66b9ffc2"
  },
  {
    "url": "android/android-launchericon-72-72.png",
    "revision": "82f0cb74fac28ab67cef1264d8e8206d"
  },
  {
    "url": "android/android-launchericon-96-96.png",
    "revision": "f5184d89f7aea60bbc6ca50ff738fa55"
  },
  {
    "url": "assets/css/0.styles.3747a1da.css",
    "revision": "d8b1a0d9f7f6ed285eaf7a16a335203f"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.f10819c0.jpg",
    "revision": "f10819c04fb1d9c895c681472dfed5e6"
  },
  {
    "url": "assets/js/1.4a8bb4ed.js",
    "revision": "4f36a3b85f34afb90dcfe7385c54c62d"
  },
  {
    "url": "assets/js/10.61b05896.js",
    "revision": "2a4c424e565135f0bca37ec718b92144"
  },
  {
    "url": "assets/js/11.e2a86a31.js",
    "revision": "f7d9e011298679fa8a20f1759b04a002"
  },
  {
    "url": "assets/js/12.a5b3f2ae.js",
    "revision": "9231ca56ef14c7e66b3765db0625425d"
  },
  {
    "url": "assets/js/13.88a25c88.js",
    "revision": "8b5b18d5a6274463b71d73516ac2b59b"
  },
  {
    "url": "assets/js/14.a87d4e93.js",
    "revision": "4c87b303c37a5a73c43b84a1085b9aae"
  },
  {
    "url": "assets/js/15.0a374b17.js",
    "revision": "f5b27eabab8e747e10b6c2ba1075576c"
  },
  {
    "url": "assets/js/16.1d35a945.js",
    "revision": "aae42a26af9ffbf94a1db12c2410eda9"
  },
  {
    "url": "assets/js/17.6e11efc6.js",
    "revision": "883e3dcd95200f052bfc079a7dc68e05"
  },
  {
    "url": "assets/js/3.0ecb1609.js",
    "revision": "a99d4864bfc2394e7232fcf4511ffbcb"
  },
  {
    "url": "assets/js/4.b7a32dfc.js",
    "revision": "00ac4a8b9aa3b4dc8c51a6230ab00fe3"
  },
  {
    "url": "assets/js/5.4ec37370.js",
    "revision": "78be1db19cea3cd2953bae3ea293d8ce"
  },
  {
    "url": "assets/js/6.860137e1.js",
    "revision": "62858f951d7445882be373c449396856"
  },
  {
    "url": "assets/js/7.f7444dd8.js",
    "revision": "17fbadd8ab7bc979c720243111568042"
  },
  {
    "url": "assets/js/8.10f24aec.js",
    "revision": "71887e8c121e0c02900674967d62ff0f"
  },
  {
    "url": "assets/js/9.5fe4da46.js",
    "revision": "61d9428d37ec83bd141d85faf2b9afaf"
  },
  {
    "url": "assets/js/app.3ae9daed.js",
    "revision": "545d969fa8ff878d7aca36f5bbb977e3"
  },
  {
    "url": "banner.png",
    "revision": "029e593c668815bcdd9a192492177dd8"
  },
  {
    "url": "categories/index.html",
    "revision": "ecfc7923af882d0836f11fd5ddaacc81"
  },
  {
    "url": "center_logo.png",
    "revision": "a393553e646a53e1aa399fa7ca283ed2"
  },
  {
    "url": "Chen-Ran.jpg",
    "revision": "5037c5c3f2a634825f2e444ab70bb378"
  },
  {
    "url": "Christoph Anacker.jpeg",
    "revision": "027bcb3ea9071437d702e874e4ef157d"
  },
  {
    "url": "faq.html",
    "revision": "383507de9f58bd385003c5e917378974"
  },
  {
    "url": "fudan_logo_rec.svg",
    "revision": "568b158871a5cfd869e343ffbb32775a"
  },
  {
    "url": "fudan_logo.svg",
    "revision": "2d25981cdfc553f2f0b537d9cc28392a"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "8a07b0f4ec5ac5eea02c8896fbef21aa"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "1b451929752b24e8612161341b911217"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "c0ce476781c1bfa4f5756ef48c7247a8"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "2fe5186289e2d3c021291837117a48ae"
  },
  {
    "url": "index.html",
    "revision": "572c8d45d34eebc72f04212677ec6986"
  },
  {
    "url": "inper_logo.png",
    "revision": "b28c590587437140c2edb5d7b285b3c3"
  },
  {
    "url": "iobs_logo.png",
    "revision": "b4c88e47c37347d47510b2313536a3e9"
  },
  {
    "url": "ios/100.png",
    "revision": "6fdd72043e4207a5f0f42439fc21dab0"
  },
  {
    "url": "ios/1024.png",
    "revision": "172e6a7798b46d89555c02faab834ca0"
  },
  {
    "url": "ios/114.png",
    "revision": "5553e9cdaa729f10e54f45654779642d"
  },
  {
    "url": "ios/120.png",
    "revision": "52ef6a047697afca0602ee57f54f164e"
  },
  {
    "url": "ios/128.png",
    "revision": "9e03b308f88e19203940585d9a4ae247"
  },
  {
    "url": "ios/144.png",
    "revision": "566aa133d900e8309150c4c2046d9864"
  },
  {
    "url": "ios/152.png",
    "revision": "a203cd5c686ca0a59e2dd108a779abcc"
  },
  {
    "url": "ios/16.png",
    "revision": "008df9dab9b84465b4572145bc0862b3"
  },
  {
    "url": "ios/167.png",
    "revision": "5ce384096c69400fa8a32312bf8714d1"
  },
  {
    "url": "ios/180.png",
    "revision": "e79d090cf1db3d5913c51d3784667e24"
  },
  {
    "url": "ios/192.png",
    "revision": "0ec625b7c408339e34becde0eaa88771"
  },
  {
    "url": "ios/20.png",
    "revision": "4e12da4650226840ae97e06778f9ea77"
  },
  {
    "url": "ios/256.png",
    "revision": "999c0cbbb3641976b9f2ddf3f6d86332"
  },
  {
    "url": "ios/29.png",
    "revision": "6f8192b306f2694f1b96d1957d269308"
  },
  {
    "url": "ios/32.png",
    "revision": "1e41433bd9c7c1806f273812961d55e3"
  },
  {
    "url": "ios/40.png",
    "revision": "e7238c062a42cd64369349623e7f2908"
  },
  {
    "url": "ios/50.png",
    "revision": "7b758a54e6b4cb7570bdcac703b994bc"
  },
  {
    "url": "ios/512.png",
    "revision": "700b6552234fe668d37c82ce149abffa"
  },
  {
    "url": "ios/57.png",
    "revision": "3ef46997c050e4a86245ef9751fb1fb5"
  },
  {
    "url": "ios/58.png",
    "revision": "279d04dcf7f386ee1092514443a15e7c"
  },
  {
    "url": "ios/60.png",
    "revision": "58c1a6e4424aa50035d8e40d98f0ee6a"
  },
  {
    "url": "ios/64.png",
    "revision": "43398baea922609abb4ab11ac3622720"
  },
  {
    "url": "ios/72.png",
    "revision": "2cf785896e5e8237d39cce44e20a75e9"
  },
  {
    "url": "ios/76.png",
    "revision": "292ed2f30b5a4e728c830beda562ecb2"
  },
  {
    "url": "ios/80.png",
    "revision": "352b9aa40b73ea6575e935817b78ef0d"
  },
  {
    "url": "ios/87.png",
    "revision": "4d7df1afc5b5f339697d75ed5db01c86"
  },
  {
    "url": "ircbc_logo.png",
    "revision": "cdb1d64f633b57c9db26cbeddcd418f1"
  },
  {
    "url": "KedouBC_logo.svg",
    "revision": "71d5fff80df5a495bca46ed848342045"
  },
  {
    "url": "map.png",
    "revision": "4c947d305d037cbcee40fff51dace0d4"
  },
  {
    "url": "Mohiuddin Ahmad.jpg",
    "revision": "4508656420d99225c778e57855d89113"
  },
  {
    "url": "Nashat Abumaria.jpg",
    "revision": "872c3034249368d9e2101af254aabebb"
  },
  {
    "url": "organizer.html",
    "revision": "7a5e4fde8a693545817dcb2bcf5ede9a"
  },
  {
    "url": "pbc_logo.jpg",
    "revision": "9c1322a106881fcf36042f52778103fa"
  },
  {
    "url": "plexon_logo.svg",
    "revision": "af0fcd24fc3be843668c737a418c8a71"
  },
  {
    "url": "QR_code.jpg",
    "revision": "a4ad78af93a8f2ca7da8db962347a4c6"
  },
  {
    "url": "skl_logo.png",
    "revision": "11504acdf6c9715b4ce70921c4db05af"
  },
  {
    "url": "speakers.html",
    "revision": "bcf4421d9a8f43893c57aa1788759962"
  },
  {
    "url": "sponsors.html",
    "revision": "73b80132d011e6dd1e264ea42977c4d4"
  },
  {
    "url": "stryker-fac_0.jpg",
    "revision": "44e4d28896693344a7e659085aaa42b9"
  },
  {
    "url": "Tabrez Jamal  Siddiqui.jpg",
    "revision": "3e67b194ad31e16507f1af36249ba369"
  },
  {
    "url": "tag/index.html",
    "revision": "b32db6a33d28eecdfa4e8d15c3b0e703"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fee6ddd485035c3ad2dde96ce7045e2"
  },
  {
    "url": "wechat.jpg",
    "revision": "eab14ded1491c8a6249dc91f79e76777"
  },
  {
    "url": "windows11/LargeTile.scale-100.png",
    "revision": "ae78093b606743aee11d0583a7e0b040"
  },
  {
    "url": "windows11/LargeTile.scale-125.png",
    "revision": "dd6750fc52c388f00bb9ac4b723b8432"
  },
  {
    "url": "windows11/LargeTile.scale-150.png",
    "revision": "da09103177a774d460850baf3c4f34df"
  },
  {
    "url": "windows11/LargeTile.scale-200.png",
    "revision": "7c89381a15605c7c53b98921b22fd0a1"
  },
  {
    "url": "windows11/LargeTile.scale-400.png",
    "revision": "1d34498c7c0a3b2fcf64974650d29493"
  },
  {
    "url": "windows11/SmallTile.scale-100.png",
    "revision": "cfe5713498d0e57953974f90f72f6e2a"
  },
  {
    "url": "windows11/SmallTile.scale-125.png",
    "revision": "915c86d80df1ee2dc3d36d1b892efa3b"
  },
  {
    "url": "windows11/SmallTile.scale-150.png",
    "revision": "2a3d02caad3ab4528d260ca7b0a3b532"
  },
  {
    "url": "windows11/SmallTile.scale-200.png",
    "revision": "be7d159c020ca72f2e74140c2591ba95"
  },
  {
    "url": "windows11/SmallTile.scale-400.png",
    "revision": "1b131ca55c564fd20f1137ecab2aad70"
  },
  {
    "url": "windows11/SplashScreen.scale-100.png",
    "revision": "7fb075db517eeae99413a50065217dd9"
  },
  {
    "url": "windows11/SplashScreen.scale-125.png",
    "revision": "80f6f48920d3e1f4a1ef818318e72cf5"
  },
  {
    "url": "windows11/SplashScreen.scale-150.png",
    "revision": "31f67f697bb9adee2a5a6031d7247f11"
  },
  {
    "url": "windows11/SplashScreen.scale-200.png",
    "revision": "e89398e1771dafedd70b61c4ceb37009"
  },
  {
    "url": "windows11/SplashScreen.scale-400.png",
    "revision": "f350b55ad0fde9ab939ecb9461390280"
  },
  {
    "url": "windows11/Square150x150Logo.scale-100.png",
    "revision": "919e3890fd1109dfb4975b28fe0c9acf"
  },
  {
    "url": "windows11/Square150x150Logo.scale-125.png",
    "revision": "da2d8e60f3df190e02566e010e934195"
  },
  {
    "url": "windows11/Square150x150Logo.scale-150.png",
    "revision": "55d5759c4df27a9f4513fc6e38f14d70"
  },
  {
    "url": "windows11/Square150x150Logo.scale-200.png",
    "revision": "0e8ce7e66af6baa077549d2ec6da6203"
  },
  {
    "url": "windows11/Square150x150Logo.scale-400.png",
    "revision": "79ee3cf3a6a49c363ed0824b7a345931"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "revision": "6b7e17cb4011d203ad3a29e19afc117e"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "revision": "59318f02aaddbd93d118bb1427b743f9"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "revision": "158f9661b93271751eaa7122d99610f1"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "revision": "3e469c400fea985b82f80efd50812897"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "revision": "bd860a6ea451fbc8e3ec1b6e37ba06bf"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "revision": "f1a97e04205cf1b2e9bc015fb833240a"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "revision": "861956dad6ff69eee70c2ffa28586c69"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "revision": "5408dc6c431a6a09ca8057eee5a65e1e"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "revision": "d158f089e89b029addc054df1eec7097"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "revision": "9255ac02e9d9d3d12a1219dd6d84ea32"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "revision": "8acb2d49ca699bf0e9fea76f525aa8b0"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "revision": "f9c0b2545d0eeb69830b4e92d147b9af"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "revision": "e82d94ff441ac2fabf46fe94b890ddfd"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "revision": "c752baaa4952c2121be236217172887d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "revision": "45a929c2fa8c5954a220aea64691c5f2"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    "revision": "6b7e17cb4011d203ad3a29e19afc117e"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    "revision": "59318f02aaddbd93d118bb1427b743f9"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    "revision": "158f9661b93271751eaa7122d99610f1"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    "revision": "3e469c400fea985b82f80efd50812897"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    "revision": "bd860a6ea451fbc8e3ec1b6e37ba06bf"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    "revision": "f1a97e04205cf1b2e9bc015fb833240a"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    "revision": "861956dad6ff69eee70c2ffa28586c69"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    "revision": "5408dc6c431a6a09ca8057eee5a65e1e"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    "revision": "d158f089e89b029addc054df1eec7097"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    "revision": "9255ac02e9d9d3d12a1219dd6d84ea32"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    "revision": "8acb2d49ca699bf0e9fea76f525aa8b0"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    "revision": "f9c0b2545d0eeb69830b4e92d147b9af"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    "revision": "e82d94ff441ac2fabf46fe94b890ddfd"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    "revision": "c752baaa4952c2121be236217172887d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    "revision": "45a929c2fa8c5954a220aea64691c5f2"
  },
  {
    "url": "windows11/Square44x44Logo.scale-100.png",
    "revision": "d158f089e89b029addc054df1eec7097"
  },
  {
    "url": "windows11/Square44x44Logo.scale-125.png",
    "revision": "53c3584043e8bc2ccece0cffe07ee6fd"
  },
  {
    "url": "windows11/Square44x44Logo.scale-150.png",
    "revision": "3ade336b18478e13f7102211ebabb330"
  },
  {
    "url": "windows11/Square44x44Logo.scale-200.png",
    "revision": "c16d3506fd5b5403546310e0d8098f26"
  },
  {
    "url": "windows11/Square44x44Logo.scale-400.png",
    "revision": "ea90b492261d72a9781776ada943c58c"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-16.png",
    "revision": "6b7e17cb4011d203ad3a29e19afc117e"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-20.png",
    "revision": "59318f02aaddbd93d118bb1427b743f9"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-24.png",
    "revision": "158f9661b93271751eaa7122d99610f1"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-256.png",
    "revision": "3e469c400fea985b82f80efd50812897"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-30.png",
    "revision": "bd860a6ea451fbc8e3ec1b6e37ba06bf"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-32.png",
    "revision": "f1a97e04205cf1b2e9bc015fb833240a"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-36.png",
    "revision": "861956dad6ff69eee70c2ffa28586c69"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-40.png",
    "revision": "5408dc6c431a6a09ca8057eee5a65e1e"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-44.png",
    "revision": "d158f089e89b029addc054df1eec7097"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-48.png",
    "revision": "9255ac02e9d9d3d12a1219dd6d84ea32"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-60.png",
    "revision": "8acb2d49ca699bf0e9fea76f525aa8b0"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-64.png",
    "revision": "f9c0b2545d0eeb69830b4e92d147b9af"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-72.png",
    "revision": "e82d94ff441ac2fabf46fe94b890ddfd"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-80.png",
    "revision": "c752baaa4952c2121be236217172887d"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-96.png",
    "revision": "45a929c2fa8c5954a220aea64691c5f2"
  },
  {
    "url": "windows11/StoreLogo.scale-100.png",
    "revision": "e09f5d0b53b8599629f61d5de299c358"
  },
  {
    "url": "windows11/StoreLogo.scale-125.png",
    "revision": "8a2d61a4548c70878c50b1625f6dc2c1"
  },
  {
    "url": "windows11/StoreLogo.scale-150.png",
    "revision": "8ffa2f9340263660f6dd3bca4638a1f2"
  },
  {
    "url": "windows11/StoreLogo.scale-200.png",
    "revision": "1626bb99f11220a30375e04d883b8fdc"
  },
  {
    "url": "windows11/StoreLogo.scale-400.png",
    "revision": "92209b342809fd2291c5185cb68fa6af"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-100.png",
    "revision": "76441fe357486503dba8c7a1cc54eaa8"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-125.png",
    "revision": "0ccdc62686efeae6e2991886b363699f"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-150.png",
    "revision": "05c41d209c1bf2ecb44859aafaa9afd7"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-200.png",
    "revision": "7fb075db517eeae99413a50065217dd9"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-400.png",
    "revision": "e89398e1771dafedd70b61c4ceb37009"
  },
  {
    "url": "何凯雯.jpeg",
    "revision": "186f552bd6635fb76d58715fdf782d78"
  },
  {
    "url": "张嘉漪.png",
    "revision": "f646d01c468a26809fa20ea066af350a"
  },
  {
    "url": "李亚东.jpg",
    "revision": "b28ef18b5c67c5b04ba48ce8d901dd96"
  },
  {
    "url": "禹永春.jpg",
    "revision": "11d2cdec13898737cdc320aba50d7502"
  },
  {
    "url": "袁逖飞.jpg",
    "revision": "0bdc394a084b7d77f84b8375c226dc1e"
  },
  {
    "url": "赵昕宇.jpg",
    "revision": "9905b472b52b60e02769c30a1acabb82"
  },
  {
    "url": "郭雅图.jpg",
    "revision": "ff44caf591727967684f941e15e0da25"
  },
  {
    "url": "陈椰林.jpg",
    "revision": "43f9608878ac219c867a202dd0273a6b"
  },
  {
    "url": "顾宇.png",
    "revision": "ab7bf4da05bcfdf11c542c1cd5f1b567"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
