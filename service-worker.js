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
    "revision": "0e6574f749e3e2d4c901cdb0bbe8cff6"
  },
  {
    "url": "about.html",
    "revision": "aabc9049263666df97656e196485da36"
  },
  {
    "url": "assets/css/0.styles.1eca0408.css",
    "revision": "9748131aa7136e8acad50d7f991f2380"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tongji.jpg",
    "revision": "caae4c0bb4ee9233b962569b411036ce"
  },
  {
    "url": "assets/js/10.7d7e226b.js",
    "revision": "6f52b7a3ea9976877cd1aa8c3f2c8c9f"
  },
  {
    "url": "assets/js/11.292c8746.js",
    "revision": "10d003cc6d51251d314710770441f9e8"
  },
  {
    "url": "assets/js/12.27cd905b.js",
    "revision": "c3adcd1b171ee0cd2efeb7e9cf053bfe"
  },
  {
    "url": "assets/js/13.df995fbb.js",
    "revision": "5556ad81b57335f86ead064dd173cd9a"
  },
  {
    "url": "assets/js/14.83e7b946.js",
    "revision": "2d084f6dd522329be30c493bb1c5ce08"
  },
  {
    "url": "assets/js/15.5bc608f4.js",
    "revision": "a13fdc373d0c7a45826bfce51fa0beb7"
  },
  {
    "url": "assets/js/16.708f4ab3.js",
    "revision": "fd26cbbaaca5f7abb8b8110ff4166187"
  },
  {
    "url": "assets/js/2.7b5324e6.js",
    "revision": "255f5640c441f99831560af44b34a5df"
  },
  {
    "url": "assets/js/3.9f27ef98.js",
    "revision": "318a75141bfeff7df692664836c71b50"
  },
  {
    "url": "assets/js/4.e07d09ea.js",
    "revision": "e433980a180c90e395bf4a0b4723f43a"
  },
  {
    "url": "assets/js/5.7da8044c.js",
    "revision": "4f1b97edcc38b1fac7b65f9836081298"
  },
  {
    "url": "assets/js/6.353c480d.js",
    "revision": "8865429b5c2e0de450055b08c5686a5b"
  },
  {
    "url": "assets/js/7.6838e55f.js",
    "revision": "0fed862df9ad20d5528856fd21df8403"
  },
  {
    "url": "assets/js/8.9d40231f.js",
    "revision": "54fb0f00b64e94d07869c946317bc7bd"
  },
  {
    "url": "assets/js/9.d133f37d.js",
    "revision": "67fb9677f238c37fbe49da712b7bc8ae"
  },
  {
    "url": "assets/js/app.68a5d10b.js",
    "revision": "2aaf027fb4520cdc33908b9e340886a0"
  },
  {
    "url": "css/index.html",
    "revision": "890ec8fd1b808243289fd6338f71c70b"
  },
  {
    "url": "css/poems1.html",
    "revision": "9e3f846366b1010f7897d156f576e17c"
  },
  {
    "url": "css/poems2.html",
    "revision": "2e6d0e9d38894b4d3e7950da3160c1e6"
  },
  {
    "url": "index.html",
    "revision": "3758de31ceaa642b647193b59406c06e"
  },
  {
    "url": "javascript/index.html",
    "revision": "e59d769776d21bfb165b0acdf5353910"
  },
  {
    "url": "javascript/philosophy1.html",
    "revision": "97ef2426dc7f5355d1d4cc45ac295584"
  },
  {
    "url": "javascript/philosophy2.html",
    "revision": "076f838f3e4a4893f5db6af33fa9c795"
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
