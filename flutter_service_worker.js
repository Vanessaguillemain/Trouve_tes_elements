'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3d76919590f5f03ee91dd91a2241916e",
"index.html": "79fe9e3cbce2af65b24f786241f9388d",
"/": "79fe9e3cbce2af65b24f786241f9388d",
"main.dart.js": "76a3e533e41fe27f63ffa04acb29b42c",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/paillettes.jpg": "2578fd68bc2ae8eb55ab369ba4198dc4",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e823350a6439273261cdacd645fe538c",
".git/config": "0e4f4ed9f351c90b4743613c6e36d3c5",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/6f/1ff738b1781995b56f734a6620990e167b6fee": "ee0610b86dc71a1f929d3b6045e44ab4",
".git/objects/03/6f54439a6ac5e8d417db855529a777cbf74ceb": "8785214394a72a4b92dc8bb7761dd3bf",
".git/objects/9b/0e83d314e11336c86807165d10c0365eeac1f6": "91eaaf8c7ec56e3d38bc531869a36610",
".git/objects/04/ff91573e544e224367d5d9185ccfc77174626d": "80b7adda36fa7f467934022d1908b176",
".git/objects/3d/8fe30cf58427b2a8830243b098486c6cf60a74": "54cff7ff97aed82f41b0894e77f9a8b9",
".git/objects/3d/85e5510458f069acba83605ed449d0963d013a": "a0679527f14450e7dcff365a14bbb5d3",
".git/objects/3d/ab977efbb82ca3ce08f11febf6eb811b9e5587": "7a77d628b40df73c4cd016a13d5029fd",
".git/objects/94/32e81f37fa56b913c880547e3c3a3a559a6450": "7f6fc87a64f2d5008202471405c6b68c",
".git/objects/9c/37a55239765a85529f3619d169c0bcee398f28": "10af075bcb89473a993fecfe9893ab8e",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b2/91f788cb01fa854935bba6f1d5aa1927c65e1c": "b3b902092eb89b3051628d23bdea6906",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ac/5ddab9e363676cb7a8ec185eb100a4fae62500": "574c5ca304c333b522b03afcd8072c6b",
".git/objects/ad/8ac4967c0eb8c20b5bd25c826a54ef1d557f69": "1c31033107dfd51638d2ffefae64e2d5",
".git/objects/b3/b61c84eaa1b767fefe7ee8e2a1e9033e16e898": "8e73678c4d5829e1951453f01118bfd7",
".git/objects/df/c12a593b35edea38642ffd748d2e65c62c594e": "e9e67cea20a59c285fbd13dfcf7398d7",
".git/objects/a5/bcabe8f8b8633c1f831bf5bad2d7b0eae96523": "1e3a44d6f4391c69dba1ce51fa88858e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/0976ae2a7ff616272588d029f14117a6315363": "76acf51a0590417b1177e1f2260e66dc",
".git/objects/fe/edf3e10272313e82f5be98343c8ede2f3b4aaf": "94271a4a87b24f0d5495f481f7ab3dad",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/fb/367516d4162715192db2d7a6686dce98268867": "96bb956a1d4681d5be5dd8fe9423a6b2",
".git/objects/ed/36a36c1826c01ed857138483958ad14ddddfe1": "f482cd88acedc8edfd48d58a2b57a64d",
".git/objects/c1/0374b55567fcceefcee47d7bb206ac31be7f06": "051925d6d1a25567d0b3ec164762a879",
".git/objects/c1/a0bafc6601359a444c3839327a54432f35c137": "658cec3f31c29b4b3ce92cce2225e4f5",
".git/objects/c6/1772a12592ab1200adf9cbaf6f979522b02d89": "1f4f3f9316a372a4a988a9fa17ff244f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/3253ae23ac0616dd4019e9ebb9d1d72cba60c7": "916cd85ab06c17209cd7d40e232f4214",
".git/objects/7d/1e968f0f45d7e7df961a0086b6318e2031380b": "1c25f37ad807f7fc1ca5a49595a9f135",
".git/objects/16/75813a5ed2e9b5d500bfff8f0bed5b3405ebbb": "1ac3cc1fbd2a1f294353c4e597ceb863",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/8d048a14dbbf85d5b828885381ef6cb1fb5331": "f9076db52bcfecbbc837c6e793d7439a",
".git/objects/21/3d2a2c7b05fa9ac443b58541b6197d485c224c": "3a62e1e329b358840221b13e8a06aec0",
".git/objects/81/1c8b01fd56ef743e050462cabf198e32675b19": "a7f6dbb99d6f851484644a92ba6706a1",
".git/objects/72/9efae113297fd484cf68dc2f84c2065d7e3e43": "2f0b90e46f856ee9d3c60a7669c08195",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/50868d3df927a5ba34f801e4401fa8dca4eea1": "4619cca47c3ede0b3e7e84fabfec3525",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/09/52b4f4272a3a6dc210f3107bed09ab4b96736b": "e1fd29dd35e0e91368ba7bf65913e643",
".git/objects/65/936e6c8238b527884cb8b1dd189c152b1d8df2": "6728f39c4ee97f81f5f76161b98ba101",
".git/objects/3a/368ff9bd5ed50def9cc3243877718f12d00554": "016cff51f670beeec149b12ba09027a1",
".git/objects/54/aaa2c5ea2cded2390d5acb81b6eb6264c1bd0a": "f0b8b4f71ea71ce355945c6887d862f4",
".git/objects/5e/099cfc1c1dc24bee557ecfbc22a63628f0556f": "ac379e29abe03b85967014b6a8894f95",
".git/objects/5b/0c636ac6afd0de204a2c332aa4317a69b0cb25": "902ec1b41c2336290125944788d64d15",
".git/objects/37/cc2a4e3b89a6e8faa4e61e763f7b2da139692c": "15eedb722a5a91571e5166c7e975b738",
".git/objects/08/d1171d65b3438e8115a36f77673f0c630b66b8": "274d890d9984971255539d240961a885",
".git/objects/6d/5c3eb843546f77e928039f6cd94e319bc1922d": "43e9ba2d46f5a2396a11244b3c14c589",
".git/objects/39/068a90ad788147284c4a79736e53d569cf4870": "a64ad736b38b076b38c50585534e965e",
".git/objects/39/1cebfcdd1885ecbffc4a517135f5d468e00cfa": "4c29a77f94a1b460516edf041d21c790",
".git/objects/0f/03cb759cba56b347ff67334d7059c93784c2c6": "c733ec24f0333c524d44797af63feef7",
".git/objects/0f/e1dab2ccbea7ff7130237045b31159fcfe5c26": "0333a5b6d447a61eeebf2240ad085fb9",
".git/objects/0a/cb5da7a2d0d443a2ec43eca0be097f49082567": "eabee432cfbe8af3f27c0afe4ae39a42",
".git/objects/a7/c06c308626d810b717084d691e6ed1e6b4dbd2": "1948e84c89f653329d6c0a4913f8e6a7",
".git/objects/b6/c4bb76b7a6cc930a72b99a5abe716bc0f43264": "8c54fa9b3cc91dd8d5289b0231bff8ac",
".git/objects/b6/27b9932a161fe014721db37b1d0724906a80d7": "a263fe320b80ae3e0a77541d9e118a11",
".git/objects/a9/b72b425dbcb72327b7521228966ae50da37a3b": "7dde9b09f48a9328807bf7206abe5d6b",
".git/objects/b7/ef808dd163b683f6e159263660b5bfb9406b98": "c43bd7e07937189020792243b21a7424",
".git/objects/b7/ce4cd0d0ccfd116994effab78213ce286bf1b8": "6a04b2ff633da2be3c7ab932e084e1df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/618c40def5f800260c9afa1f36dcbdf67321e9": "7c24ee439558567ce28e32f1fd510f76",
".git/objects/a8/be95ad430256276bbc4bf64a584d93339ec368": "768c400bc5f2e82c8a787f927be26cf7",
".git/objects/a8/ad4a0c5e8adfafadfb0dc12234ad49e2c655fd": "2eff5c34a5240b6217de15567dfe4535",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ff/f3b14ed6bdeccd66d8a5c3622260be063936dd": "43d2786680e5d9d1f82bfbc0789140a6",
".git/objects/ff/33d13081dd751adae002c88059ebd6e49e11bf": "ae3b49ec797eaac5d80e1f1cc4e53e9c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/0999735263b0ed422a34d385819b985d9c9c9f": "d5b4a349dbca46137bd18cbd9cc192aa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/284168009c66aa9e7f7b71b1ba51c161dffbbf": "28e8f7a8acb193035548613e3d8cf78f",
".git/objects/41/aa6b8767199ee69d4d1388faed95fcce7e5a77": "0f60ceb223a1905c009f20e1e4274c36",
".git/objects/77/e1416e734e7ebe010317cee08c85458c8a30ef": "5e5386f288801e19f0e4e1eedc7772db",
".git/objects/70/b76809268f58d6b393f195f45f3abd39e2dd93": "5a80c82e6ed54e61ab69a65ee5e43dba",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/f695f3abcd0a7b46489d52a379be51a9173439": "a6d842f969904e8482e7cd9c0a85094a",
".git/objects/4f/cbd909fcfdeb88229351f012c7e7eb39e1eeaf": "2ecb8d19fbb317aca82eec49d36042c7",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/21f7cafffc2c87163f400cecc4090229b31e46": "55156625524ab634581f722b138c62fc",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/7a/0fdeb0b725d3c8a163ddc9b98e5f9d325693af": "f933b07a5e994c9672c1927f4cefb66a",
".git/HEAD": "8ef6ba716720341b260b28cf66bccbeb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "56d869220f8cb23ed6336381805fe950",
".git/logs/refs/heads/weblocal": "c6015e3a15186e588ba6afbf817927f3",
".git/logs/refs/remotes/webremote/weblocal": "9d986eb497be2d9e616ecc687a26da58",
".git/logs/refs/remotes/stephremote/weblocal": "39346741449da66c85ab821a9f074dc9",
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
".git/refs/heads/weblocal": "fbc64de985b9c911cb1dfc61db631746",
".git/refs/remotes/webremote/weblocal": "b331f30a897e0552af52a65597d05d03",
".git/refs/remotes/stephremote/weblocal": "fbc64de985b9c911cb1dfc61db631746",
".git/index": "65daa823ff6715fa11dbd8b109e07bb5",
".git/COMMIT_EDITMSG": "b26307f195382b031983efdadc97e0d6",
"assets/AssetManifest.json": "d59286954f87b86ad439d3e7630656ac",
"assets/NOTICES": "c30f683b46484c764c75c59a269a46ee",
"assets/FontManifest.json": "cfff5c48903d710ac6434e3e4792f1ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/fusee.png": "8e7aad1437cd64d5fe0d575830745010",
"assets/assets/icons/marche.png": "d818598474c970d3219e84ef9d442466",
"assets/assets/icons/elemFeu.jpg": "ed75c08aeaf00cfe1c042e312481e462",
"assets/assets/icons/sylphesylphide.jpg": "195ab5673c26a8d39dc5a7ffdaf982b4",
"assets/assets/icons/bateau.png": "3452eb2e86f25acea494a804044c9e53",
"assets/assets/icons/moto.png": "2a931437184e3e13d9ca6641abf86526",
"assets/assets/icons/elemAir.jpg": "d266ca64187aa00d63f13711e05208fe",
"assets/assets/icons/elemTerre.jpg": "2ea9ce54dedd0a5c306948a4f38ead25",
"assets/assets/icons/alien.jpg": "e9d8d2cf4d5e7f6c35f1c2b7e0e7678c",
"assets/assets/icons/ondine.jpg": "462bd1b5f814d35c7e1b5dbf31e600a7",
"assets/assets/icons/salamandre.png": "ba6ccacdfc6e40e71a86d7e8fa682385",
"assets/assets/icons/elemEspace.jpg": "7b34247d824cdcd91af7cf455dab8516",
"assets/assets/icons/lutin.jpg": "7b23ac4715e718be3744d742d7aa1e2e",
"assets/assets/icons/avion.png": "d0d266fd62d48418086e5809e321b61b",
"assets/assets/icons/paillettes1.jpeg": "006047baffba27dbd907de8bcfd1708b",
"assets/assets/icons/elemEau.jpg": "0aa0619e23e4cc98b4703a36db0a6b51",
"assets/assets/fonts/rakesly-lt.ttf": "91ed1fed1e8d8639de3a5f89ea0f3c6b",
"assets/assets/fonts/SourceSansPro-Light.ttf": "e7208e0bdca1887f658b9ac66c988a95",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
