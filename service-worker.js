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
    "revision": "f940413a13016565e82469a817c6b698"
  },
  {
    "url": "assets/css/0.styles.cdf0afbf.css",
    "revision": "58d205a626a6975477acf9fe0645409c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.322d9212.js",
    "revision": "c3bb3d90ba81988b6694bfd8a76fb440"
  },
  {
    "url": "assets/js/11.bcf34719.js",
    "revision": "137205fc170edc7ddfdf72ab6a2e9264"
  },
  {
    "url": "assets/js/12.6db417f1.js",
    "revision": "309c0a3fdc1e8adf7c8ce73a96b6b431"
  },
  {
    "url": "assets/js/13.f2c06f26.js",
    "revision": "5173512d96eeec40a60b17c05733659c"
  },
  {
    "url": "assets/js/14.df5420b9.js",
    "revision": "33f3512220761f2d028e5f8fb4aff036"
  },
  {
    "url": "assets/js/15.47e69eb4.js",
    "revision": "f6310ba2a906ccbf5ff7b6707e694db5"
  },
  {
    "url": "assets/js/16.17078596.js",
    "revision": "5cc37ce615948ae7f0d8e3a7332a75c1"
  },
  {
    "url": "assets/js/17.a001a4f8.js",
    "revision": "5be74d9463302a14c5d35d9d4f23697f"
  },
  {
    "url": "assets/js/18.831d26a1.js",
    "revision": "37b580292d7911355f6bb742b18e6c6f"
  },
  {
    "url": "assets/js/19.f2efc9e4.js",
    "revision": "e00c8ee2d3cd546561e9c295dee3d8d6"
  },
  {
    "url": "assets/js/2.24412eae.js",
    "revision": "f67bba09a028000339137bafafc7752d"
  },
  {
    "url": "assets/js/20.ef5189c0.js",
    "revision": "2530d7d55e028127ccb87eb50e06386e"
  },
  {
    "url": "assets/js/21.b05d3d33.js",
    "revision": "c9c5048461da2a2d301ba65a2c90f73c"
  },
  {
    "url": "assets/js/22.dfa067ef.js",
    "revision": "7fd928579b3455c9bff79d89f00957ae"
  },
  {
    "url": "assets/js/23.b2c0dba7.js",
    "revision": "2fc5f49bcefaa7e6bc4909d78bcf4c63"
  },
  {
    "url": "assets/js/24.02089499.js",
    "revision": "5d2d868a158a0a13b2baf815afe12aed"
  },
  {
    "url": "assets/js/25.f871f42e.js",
    "revision": "80716e9cb7f4ab2a950ec1a95562cb11"
  },
  {
    "url": "assets/js/26.63809e17.js",
    "revision": "5ee7a4d6ddd88262d969d185ef822525"
  },
  {
    "url": "assets/js/27.be6db5d8.js",
    "revision": "4537417a94929a86911af4bfca7f549a"
  },
  {
    "url": "assets/js/28.66f46a16.js",
    "revision": "1bc260239cf5cbcb81c0bec64365c5c9"
  },
  {
    "url": "assets/js/29.71299080.js",
    "revision": "77f8c41dd1aede20dc908957127bc41b"
  },
  {
    "url": "assets/js/3.8d0edb2a.js",
    "revision": "7a21cf91a95d1d60455698f5b7703468"
  },
  {
    "url": "assets/js/30.f16b0538.js",
    "revision": "4f74662f96b156c2014f5908ba0ec924"
  },
  {
    "url": "assets/js/31.24300a6b.js",
    "revision": "2fafaa3f4b612e98571d31106fae821e"
  },
  {
    "url": "assets/js/4.e92c8338.js",
    "revision": "187940a0469e2bec8b9219b93e0849b5"
  },
  {
    "url": "assets/js/5.230adf41.js",
    "revision": "2119c0811a27abbc51611808785d6634"
  },
  {
    "url": "assets/js/6.7dda8cf8.js",
    "revision": "8e4cb5f22a77210699a6874b56247342"
  },
  {
    "url": "assets/js/7.e3665751.js",
    "revision": "82ab3d846d087c083e6db14a6041540c"
  },
  {
    "url": "assets/js/8.0655d318.js",
    "revision": "7c88f428239caaca18404b19a3b4930d"
  },
  {
    "url": "assets/js/9.15ce706e.js",
    "revision": "d0e752422e2d3734fcb163c04c8b0560"
  },
  {
    "url": "assets/js/app.97e242fe.js",
    "revision": "e9bc0941319ae4cda2be156bac34e3f9"
  },
  {
    "url": "Back/bigdecimal.html",
    "revision": "19cfb0a2351b2becfd51d6dae1a5549d"
  },
  {
    "url": "Back/java.html",
    "revision": "95e924ee7d830ab7177215c3a893331c"
  },
  {
    "url": "dev-tool/git.html",
    "revision": "e0f0cfdb05f839c3d3a296c01aa6815b"
  },
  {
    "url": "dev-tool/idea.html",
    "revision": "a90ddf32f5bd09f57b3e268a10c54277"
  },
  {
    "url": "dev-tool/vs-code.html",
    "revision": "82b32d011086f563b5b0f024df6c9790"
  },
  {
    "url": "front/angular.html",
    "revision": "17a6346a5015023906c4b480b49db099"
  },
  {
    "url": "front/index.html",
    "revision": "54e7e0a8a9b2ed16df62acc05ca0fb10"
  },
  {
    "url": "front/react.html",
    "revision": "6bfe2742a530db14f6793833733214e7"
  },
  {
    "url": "front/vue.html",
    "revision": "9e99a4411f4505257a74ea2890144675"
  },
  {
    "url": "guide/css.html",
    "revision": "a090f444239c9148bf4747041f156f55"
  },
  {
    "url": "guide/css2.html",
    "revision": "948e952d5609c974c27c2611f5a7a008"
  },
  {
    "url": "guide/index.html",
    "revision": "1cf4c339dc45006880e40cb83064c122"
  },
  {
    "url": "guide/java/index.html",
    "revision": "a7ba68be1cc884935c353f4c04ef9e5e"
  },
  {
    "url": "guide/start.html",
    "revision": "bc8242160efdd371710545c04c444368"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "img/git-command.jpg",
    "revision": "7d2c016cebcb5c654da6a2d4ed1e91db"
  },
  {
    "url": "img/git-process.png",
    "revision": "96f3b65c091a906ce2d083a0b08204fd"
  },
  {
    "url": "img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "5b7b2feb3597f72dece793b402d2ebf6"
  },
  {
    "url": "library/element.html",
    "revision": "41f04d4e67143308fc6ee2ad75faa801"
  },
  {
    "url": "more/personal-bug.html",
    "revision": "f64cdc1ae62c83e376b8f852db1241c2"
  },
  {
    "url": "plug/aplayer.html",
    "revision": "05f9401897c7ca009190843e9c173230"
  },
  {
    "url": "plug/docker.html",
    "revision": "69946af302793c1e790193f5734150db"
  },
  {
    "url": "plug/index.html",
    "revision": "4707304baea03455dcf030454fd107fc"
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
