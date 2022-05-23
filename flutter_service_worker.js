'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3d76919590f5f03ee91dd91a2241916e",
"index.html": "7347d66cc04d15cb1cfcc6161bf49914",
"/": "7347d66cc04d15cb1cfcc6161bf49914",
"main.dart.js": "08d8850002bc5461c3210cfb028175f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/paillettes.jpg": "2578fd68bc2ae8eb55ab369ba4198dc4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e823350a6439273261cdacd645fe538c",
".git/config": "d3caeb43c3b012896e15cf4bef891ca9",
".git/objects/0d/9972751aee12202a11713d1dd40ad8cf95c1d7": "be22f2241c2e5999417608c057fb08b7",
".git/objects/0c/eeee78ff95f7e2015d9145f00ef2c5ea329e14": "ea62a2b07a6e0234c1f7e20b06f6ee80",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/9392b2de8649b8bd7b761ff619b6779f6f9b19": "603cda4e6c9235f5f350f2f14079cabd",
".git/objects/51/b2f6c3113b63b43a76106f39152ecee193b829": "0c7f89513de827cbe6a6a2efaad2804a",
".git/objects/3d/cb5946bbc86069cf8efea761156b4a86452afb": "bbae05cf67242a52de83433d1804c9e6",
".git/objects/94/de774aefe6d2c1c7686f70fdfef5ab8e1bb630": "399658ef987de18d774efa453ab87715",
".git/objects/33/bc9a310462ddc01a9f05751fae727162ea70b3": "e0e195bde820179416ae2cc1cf2b6807",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/a2/d5e2bf7b41a18eae153ff245815b4f05552607": "2bb0c524c5b77bd8b48d83b6a712d899",
".git/objects/a5/bcabe8f8b8633c1f831bf5bad2d7b0eae96523": "1e3a44d6f4391c69dba1ce51fa88858e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/d8/b5866144d967c7e966e7f98fee7aa4b8e8f250": "238bdddc482ed3801a4c8da140d9507e",
".git/objects/e5/7d4b87d2efb8efc5ddfefd9dc4a1587d696e62": "15ff5f2e12fb6806ccad461a579961ea",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/5cc81051df5ac4cc7807a7a4e4a5c7a396cb05": "3672a32c702ae6bff1e891e66a6e94a6",
".git/objects/eb/e0363f6f908e816bdc6b0368e324c96ef14e72": "7efa8f7fd1ac10f7d5ab1dcd5833e45e",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fb/367516d4162715192db2d7a6686dce98268867": "96bb956a1d4681d5be5dd8fe9423a6b2",
".git/objects/ec/c8d62659e5e664879dffed48ea21b0045e26ee": "d97486c1637f3fc65405b0ef48688017",
".git/objects/4e/5eed6924a2fa01b3a1bbd554b892ec8f6f61be": "d60f4863bbb2a8f5f87dd263b42ec0b3",
".git/objects/27/740afb4af4e3b2b9a130000627fe36ae9b15da": "0d541b48197b5dc5f833befa562f006b",
".git/objects/11/daecf7a116416bf46b96e1088425d5c851bcc1": "3ffaa09ffee0fa99bcec6f5fe36c89c7",
".git/objects/7d/b77a54434de2a5548563db4238b4e456297bca": "42ed74b0a0f98611c9c7a52b159d5848",
".git/objects/7c/18d145158858702caefe1e6e917c69597e519a": "c6f286c5aa1c511877ce3bf6ede68dda",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/d4b2294cce095dd0b654defe267f6745244d24": "95d0ea1f4e6f54d9c6beab15dc8a3b49",
".git/objects/81/ce344c380cd4ec5ffeb8d57070079798af1f6b": "ea347bd0c413f142b429ba1c0e831bc7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/acace9cf680a877ca81eb783a61499b3110314": "d2afc059f441f83d051d293399b35aca",
".git/objects/07/9ce94717f38d4b6ac23c0e76fc235dae4054f6": "754ad0a7a5022413af09c3dd1b785212",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5d/3caade841f67ee8322c8e5cff6f3a05a31246c": "1ec48092f2da88dcb1715df3e7fb2bc9",
".git/objects/91/542f3b050d9948d36ed0dda361389dbec48398": "2bbf6e03f491c663b971d4cdc4fc22bb",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/5e/cd5e64730580e8667c6e9c9baa4ae8f6decf57": "9e5b20931dfa4dbb4e631f588ed0ba02",
".git/objects/37/cc2a4e3b89a6e8faa4e61e763f7b2da139692c": "15eedb722a5a91571e5166c7e975b738",
".git/objects/6d/b257440e471076090f84de7fa03ffa051425cc": "262c512bd1eb06e403af1719a08ae47f",
".git/objects/0f/03cb759cba56b347ff67334d7059c93784c2c6": "c733ec24f0333c524d44797af63feef7",
".git/objects/0a/cb5da7a2d0d443a2ec43eca0be097f49082567": "eabee432cfbe8af3f27c0afe4ae39a42",
".git/objects/d4/248a714e43a4e40a5b198ec0e507f9d7e5ae2e": "7bf7bd166209c6a71301acdfcbd33892",
".git/objects/b6/c4bb76b7a6cc930a72b99a5abe716bc0f43264": "8c54fa9b3cc91dd8d5289b0231bff8ac",
".git/objects/b7/39783c1496f2fdee3ab681c763e8c0adf6a4d7": "93e6ac8a849bab21ddbc014fb40ca394",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/263238d137c87110047cf34f770272b21f835d": "4ba6b280984e66d0fd005e413e2b0b8d",
".git/objects/c3/b565baedff802a9a5a1855077fe4106118a4bb": "80acfc1d0487d48556f0922f3c9f2e15",
".git/objects/f7/b30545f7cecccfa23784501a43c5ca27414fbe": "c9ed6a16566840566936108308e1668e",
".git/objects/e8/3788168a810cb5f9069e1d064d3ed339247a57": "e29f9f02060c7c928208532db591a307",
".git/objects/fa/0d7240deeb99b47dbd1eb3b05cf0cd270a5c4c": "1952ab81105b1ef7b23946246a7c9ad8",
".git/objects/c5/2da59c1ea26e4003bb20a27f1e7d070c498d4f": "3499a5e2df8252a42b332748ad2f6eba",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/b33dd8310e744b01c6265649996fd9994cbdb6": "a41f0d09a30b8bb9af57dbc1875a6fd3",
".git/objects/8c/4315df53ad64a5ccf2b79f4856249c91be9d79": "673fcf33cad36c08de7223233bbe784d",
".git/objects/82/21f7cafffc2c87163f400cecc4090229b31e46": "55156625524ab634581f722b138c62fc",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/e0e043e5c324101b681647114072ca38dd8e9f": "164b7df402ac462426cbab62927a9cd3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b70200d77112525908be5e3e8bd26c2a",
".git/logs/refs/heads/main": "0ec68e8c6e5b95a6132cff5b309068a0",
".git/logs/refs/remotes/originweb/main": "200f1196f7fc5ad3a00c1c8f5df732f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "7582a2d24f87a66bea7010d8190bf590",
".git/refs/remotes/originweb/main": "7582a2d24f87a66bea7010d8190bf590",
".git/index": "8aef323b1455cca3ec17556fb17b8952",
".git/COMMIT_EDITMSG": "24e5e32622a46f83c7082eba6911be16",
"assets/AssetManifest.json": "684b056c45f476759433cb1f7b71f0b5",
"assets/NOTICES": "ced03068ba81374a7ca1269f629efa16",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/icons/paillettes.jpg": "2578fd68bc2ae8eb55ab369ba4198dc4",
"assets/paillettes.jpg": "2578fd68bc2ae8eb55ab369ba4198dc4",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
