'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8c9ca1cb89d8468bcfa5257a412399f2",
"index.html": "9b4e002344cd2f430ab755d101330c3b",
"/": "9b4e002344cd2f430ab755d101330c3b",
"main.dart.js": "ce94f655e7f0b0fdf4df22983d7744c4",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"favicon.png": "de4980a9f864b2238427ba2a3f1e357d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "494acd109060b5d08de0398248da24f8",
"assets/AssetManifest.json": "11498b87c9a7e781bf0eb132533ed1c7",
"assets/NOTICES": "c8bb3d9aece5e1596502a6bbad1a2079",
"assets/FontManifest.json": "fcb9e94cc2e38e2f1ac7e5627c40ff06",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/expandable_widgets/assets/background.png": "f1f2b9f95d2c2bb481acc14f4fad8196",
"assets/packages/toast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/toast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/errorImage.jpg": "1168ad2249004c7d9921e2e96a634c47",
"assets/assets/googleLogin.png": "6283a0d0b9f95ea24a19d9f9e59e57d8",
"assets/assets/kakaoLogin.png": "5908259919fe52dd000ed7acd4963cb9",
"assets/assets/loadingScreen.jpg": "b6dab5653e5c1b7068490b3a32f74f60",
"assets/assets/icons/%25EC%2584%25A4%25EC%25A0%2595.svg": "4120adca26f362019afb51ff39707361",
"assets/assets/icons/%25EC%259C%25A0%25EC%25A0%2580%2520%25EA%25B8%25B0%25EB%25B3%25B8%2520%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580.svg": "bfa3f31acaa6cedfb6c28bc3386d02b2",
"assets/assets/icons/%25EC%259D%258C%25EC%2595%2585%2520%25EB%25A9%2588%25EC%25B6%25A4.svg": "e19319f87e02d66f6ef812cc77c92277",
"assets/assets/icons/%25EC%2586%258C%25EC%259E%25A5%25ED%2592%2588%2520%25EA%25B0%2580%25EC%25A0%25B8%25EC%2598%25A4%25EA%25B8%25B0.svg": "bde554cb5f69c4714b7b438fb35b6c88",
"assets/assets/icons/%25EC%2584%25B8%25EA%25B3%2584%25EA%25B4%2580.svg": "a1c142f79f3d7144a8d22f33b116a481",
"assets/assets/icons/%25ED%2596%2584%25EB%25B2%2584%25EA%25B1%25B0%25EB%25B2%2584%25ED%258A%25BC.svg": "2d2739f24f1a2917bf6d0ddee8dc23f7",
"assets/assets/icons/%25EC%259D%25BC%25EA%25B8%25B0%2520%25EC%258B%259C%25EA%25B3%2584.svg": "a8f7a1075cc4e55be651d4049d95fce9",
"assets/assets/icons/%25EC%259C%2584%25EC%25B9%2598.svg": "5480ab8f0194447afda8d127da011f25",
"assets/assets/icons/%25EA%25B5%25AC%25EB%25A6%2584.svg": "4d1e1020c6a4e514369ba6781b500a67",
"assets/assets/icons/%25ED%2588%25AC%25EB%25AA%2585%25EB%258F%2584%2520%25EC%25A1%25B0%25EC%25A0%2588.svg": "6278ef9765b6b20ac86987401a959f1b",
"assets/assets/icons/%25EC%25A0%259C%25EB%25AA%25A9.svg": "b8f2207baf8292fecd799c68e450ca9e",
"assets/assets/icons/Vector.svg": "3f81db9e023d230152ea914e56664e68",
"assets/assets/icons/dream.svg": "a4176f3646ac3bdb4e61ce85f21eecdb",
"assets/assets/icons/%25EC%259D%25BC%25EA%25B8%25B0.svg": "a29fe014125353c86f19907059fafd39",
"assets/assets/icons/%25EC%25B2%25B4%25ED%2581%25AC%25EB%25B0%2595%25EC%258A%25A4.svg": "95dabdd74f8642f942bf7261b5372673",
"assets/assets/icons/t-log%2520%25EA%25B8%25B0%25EB%25B3%25B8.svg": "4aecff0fd0976d8dd428536c07d6b8a5",
"assets/assets/icons/%25EC%25B2%25B4%25ED%2581%25AC%25EB%25B0%2595%25EC%258A%25A4(%25EC%25B2%25B4%25ED%2581%25ACo).svg": "e836e93bbbfafd86005ed8033e18b06a",
"assets/assets/icons/%25EB%2582%2598%25EA%25B0%2580%25EA%25B8%25B0(x).svg": "7be246d45cf0b8f3d9db2ce66e3c26b2",
"assets/assets/icons/%25EB%258C%2580%25EB%258C%2593%25EA%25B8%2580.svg": "512fbc5d6c9a3cd624c073587455a802",
"assets/assets/icons/%25EC%25A0%2595%25EC%2582%25B0%25EC%2586%258C(%25EA%25B5%25AC%25EB%25A6%2584%2520%25EB%25B2%2584%25ED%258A%25BC,%2520%25EA%25B5%25AC%25EB%25A5%25B4%25EB%25B0%258D%2520%25EB%258B%25A8%25EC%259C%2584).svg": "0b6dcf7d1f14e51c65e1d73ea2a9cbb7",
"assets/assets/icons/%25EB%25A7%2581%25ED%2581%25AC.svg": "4d32e0f94c0d45f6263c024e3e14a7b7",
"assets/assets/icons/%25EC%25A0%259C%25EB%25AA%25A9%2520%25EC%259D%25B8%25ED%258A%25B8%25EB%25A1%259C.svg": "c776bc737a1d63bb0effaa22a894ca16",
"assets/assets/icons/bgm%2520%25EA%25B3%25A0%25EB%25A5%25B4%25EB%258A%2594%25EA%25B3%25B3%2520%25EC%259E%25AC%25EC%2583%259D.svg": "a75a0643c6dce8310a75e679c99f6c89",
"assets/assets/icons/%25EA%25B7%2580O.svg": "1888d73fffd876f0749910b59ccf665e",
"assets/assets/icons/%25EA%25B7%2580X.svg": "ea16d57574d88eb35a9c5e9a77a817d0",
"assets/assets/icons/%25EB%2582%2598%25EC%259D%2598%2520%25EA%25B0%25A4%25EB%259F%25AC%25EB%25A6%25AC.svg": "e30b1ef66f097a2e769f49f6bd525c04",
"assets/assets/icons/%25EC%2584%25B8%25EA%25B3%2584%2520%25EB%2582%2598%25EA%25B0%2580%25EA%25B8%25B0.svg": "406a9acc73bd42f0d76337a2342322c1",
"assets/assets/icons/%25ED%2583%2580%25EC%259E%2584%25EB%259D%25BC%25EC%259D%25B8,%2520%25EC%259D%25BC%25EA%25B8%25B0%2520%25EC%258B%259C%25EA%25B3%2584.svg": "2d88ccb42e65506ed1c08bd4f84bf100",
"assets/assets/icons/%25EC%25B4%2588%25EB%258C%2580.svg": "a8012ab2f0bd5379afeef0ad8f6edf6c",
"assets/assets/icons/t-log%2520%25EB%25A7%2590%25ED%2592%258D%25EC%2584%25A0.svg": "c5a0fa170c1bec9aab13921079eab082",
"assets/assets/icons/%25ED%2595%2580%25EC%2595%2584%25EC%259D%25B4%25EC%25BD%2598.svg": "9c38778f82f12ae139904f5c847d6ee9",
"assets/assets/icons/%25EA%25B8%25B0%25EB%25B3%25B8%2520%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580.svg": "9acbda3eeda1109c18f99b092ea19e79",
"assets/assets/icons/%25EC%25BB%25A4%25EB%25AE%25A4%25EB%258B%2588%25ED%258B%25B0.svg": "092e50046360c9dff7e77249caf5a9f2",
"assets/assets/icons/%25EA%25B8%2580%25EA%25BC%25B4(%25EC%2584%25B8%25EA%25B3%2584%2520%25EC%259D%25B8%25ED%258A%25B8%25EB%25A1%259C%2520%25EB%25A7%258C%25EB%2593%25A4%25EA%25B8%25B0).svg": "e292676ca384c45121e53dd315b22066",
"assets/assets/icons/%25EC%2597%25B0%25ED%2595%2584.svg": "46ffd29fa3736edd7456064c931c0150",
"assets/assets/icons/%25EC%2597%25B0%25ED%2595%2584(t-log,%2520%25EA%25B3%25B5%25EC%25A7%2580%2520%25EC%259E%2591%25EC%2584%25B1%2520%25EB%2593%25B1).svg": "7a364c89f55cf9a9b7bb68fcadf97649",
"assets/assets/icons/t-log%2520%25EA%25B3%25A0%25EC%25A0%2595.svg": "4cc713f54bde657cbd6bb9dda366439b",
"assets/assets/icons/%25EC%2584%25B8%25EA%25B3%2584%2520%25EB%25A9%2594%25EC%259D%25B8%25EC%2582%25AC%25EC%25A7%2584.svg": "163e52e6db29848e740b4d64aa027328",
"assets/assets/icons/%25EB%25B0%2595%25EC%258A%25A4%2520%25ED%2581%25AC%25EA%25B8%25B0%2520%25ED%2582%25A4%25EC%259A%25B0%25EA%25B8%25B0.svg": "632be8c35fd0ff8d94bea843741be97b",
"assets/assets/icons/%25EC%259D%25B8%25ED%258A%25B8%25EB%25A1%259C.svg": "c33716f041dc574ef648924537daa06e",
"assets/assets/icons/%25EB%258B%25AC%25EA%25B5%25AC%25EB%25A6%2584.svg": "452ebe0d524288308d707bc431ef6620",
"assets/assets/icons/%25EC%2593%25B0%25EB%25A0%2588%25EA%25B8%25B0%25ED%2586%25B5.svg": "96d3a5a2f76ddf2eafaeb18d8a22cc51",
"assets/assets/icons/%25ED%2583%2580%25EC%259E%2584%25EB%259D%25BC%25EC%259D%25B8%2520%25EC%258B%259C%25EA%25B3%2584.svg": "a8f7a1075cc4e55be651d4049d95fce9",
"assets/assets/icons/%25EC%2582%25AC%25EC%25A7%2584.svg": "65309ffe74117e9103faa1dd954ee920",
"assets/assets/icons/%25EB%2593%25B1%25EC%259E%25A5%25EC%259D%25B8%25EB%25AC%25BC.svg": "e1fa093105a3473c70e3bae14a3a9cb1",
"assets/assets/icons/%25EC%2586%258C%25EC%2584%25A4%2520%25EA%25B8%25B0%25EB%25B3%25B8%2520%25EC%259D%25B4%25EB%25AF%25B8%25EC%25A7%2580.svg": "50c90c3aca86a4d14ca3dcef095c01f9",
"assets/assets/icons/%25EC%258B%25A0%25EA%25B3%25A0.svg": "1a5dad27528914462fdf7f466c40c668",
"assets/assets/icons/%25EA%25B8%2580%25EA%25BC%25B4.svg": "0e8a1cf2865df1081113c4efec901dae",
"assets/assets/icons/%25EC%2595%2584%25EC%259D%25B4%25ED%2585%259C.svg": "95578865c8e1f941e880a3e0bf742476",
"assets/assets/icons/%25EC%2586%258C%25EC%259E%25A5%25ED%2592%2588.svg": "63f0e9561d00389dbf961f05c930b946",
"assets/assets/icons/%25EC%2584%25B8%25EA%25B3%2584%25EB%25A9%2594%25EC%259D%25B8%2520%25EC%25A0%2595%25EC%2582%25B0%25EC%2586%258C.svg": "fea390ac3bf172f16c86a03e3e78bd41",
"assets/assets/kakaoLogo.png": "81e679d82393c5fc42c5a9c9f8ed66e8",
"assets/assets/BGM/7.mp3": "8fcdac3885770c1e7a08c17ca9e7d872",
"assets/assets/BGM/6.mp3": "c4ad6d3cf8bc3d4f88183ab66dfe0611",
"assets/assets/BGM/4.mp3": "9fffcb319855774824be429d2c4b2525",
"assets/assets/BGM/5.mp3": "87c1d1aa537911c21f3cc4ac12cdf7b1",
"assets/assets/BGM/1.mp3": "08b9296c0fe3070e049d3fec5afa31a5",
"assets/assets/BGM/0.mp3": "454c5afc0f37780c7b540643e6d859ef",
"assets/assets/BGM/2.mp3": "ee131750d297d6257e529902d0266425",
"assets/assets/BGM/3.mp3": "5362ee7d4335f2689258f835a0e54cd0",
"assets/assets/BGM/22.mp3": "a60f6b286a8bceb7236c0a1b229a0442",
"assets/assets/BGM/23.mp3": "dc1cc5134a2de7ef0b71508cb61b9620",
"assets/assets/BGM/21.mp3": "00fa3a9ad203278f4181be441175cc19",
"assets/assets/BGM/20.mp3": "f0b2ea6395fbfb9c5ff8f80fbc2fa4cd",
"assets/assets/BGM/24.mp3": "0c24c126f8f4ec1849c20dcea0a21c74",
"assets/assets/BGM/18.mp3": "1e49507cdef378ec8fccbfbfda36b3f2",
"assets/assets/BGM/19.mp3": "c5c631aebf5b88bcd912deea6fe07f9b",
"assets/assets/BGM/25.mp3": "273cf0e394c6c535af7773caf15bc398",
"assets/assets/BGM/27.mp3": "3c619f29f77791f04c907406ca9cf374",
"assets/assets/BGM/26.mp3": "81344008dfc2a98937b392141ca95ceb",
"assets/assets/BGM/17.mp3": "800939d275573520d363994d405271bf",
"assets/assets/BGM/16.mp3": "6317d707c9ae248f1dcf0bf6c2c5ab47",
"assets/assets/BGM/14.mp3": "3e507bd92433c965699336b166962c85",
"assets/assets/BGM/15.mp3": "d01fe96b60b7d3cf8fd1a0b58219c258",
"assets/assets/BGM/11.mp3": "4118220b4761b1551089f0c105684701",
"assets/assets/BGM/10.mp3": "ed38c26a9b2a1c3effe4d056925b361e",
"assets/assets/BGM/12.mp3": "9f367b0a086eb21c574ebb2c6777825c",
"assets/assets/BGM/13.mp3": "5291e75adc6b3737dca4810eb8bee02a",
"assets/assets/BGM/8.mp3": "ac2a5c49eb723ff9d8ca67136aaa2bf2",
"assets/assets/BGM/9.mp3": "5f2eb1c5ee7b9eecf24ecdeef205899c",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-Black.otf": "6bc3f501ba4e736b706074a29826ec0a",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-Light.otf": "aef3dc5f5592a0a9bfd7e8de7abdc2c5",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-ExtraBold.otf": "dac19e30ed93b7aed171830c38cda6a2",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-Thin.otf": "0b09a12c024a6380cd40dbfaf2fd79cd",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-ExtraLight.otf": "23002daa2dee07f8a652bb0ab06af079",
"assets/assets/fonts/Pretendard-1.3.3/public/static/Pretendard-SemiBold.otf": "d9d912f2630bae445757f4769271c35c",
"assets/assets/fonts/UhBee%2520QUEEN%2520J.ttf": "d03fa599b7a285d8a62f910aa6d5187a",
"assets/assets/fonts/selectable/PyeongChangPeace-Light.otf": "189e25fe47a3aae915a7a93de2566ca1",
"assets/assets/fonts/selectable/Cafe24Dangdanghae.ttf": "6c999a5400eed9427d6b2dd2287b52d7",
"assets/assets/fonts/selectable/Cafe24Danjunghae.ttf": "781424903060cfedd30654656cb06ee2",
"assets/assets/fonts/selectable/PyeongChang-Bold.otf": "b6f4d996d822113497dcc594872c7f8c",
"assets/assets/fonts/selectable/JSArirang.otf": "b4a328c4cd4864c906cd4313adf0e9bd",
"assets/assets/fonts/selectable/HS%25EB%25B4%2584%25EB%25B0%2594%25EB%259E%258C%25EC%25B2%25B42.0.otf": "bd156e9447f98f4554a2896b59ec2253",
"assets/assets/fonts/selectable/HS%25EB%2591%2590%25EA%25BA%25BC%25EB%25B9%2584%25EC%25B2%25B4.ttf": "4a1812602f0ccb90fb98964c20b3682a",
"assets/assets/fonts/selectable/Cafe24Oneprettynight.ttf": "0c124b4702c8886c14c61efad64989de",
"assets/assets/fonts/selectable/Galmuri9.ttf": "632c65a7cded94bf31851bda21d7b45e",
"assets/assets/fonts/selectable/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/selectable/HSBombaram3.0_Regular.otf": "4fd01e1e95e69e7e8313adfe971bb8f8",
"assets/assets/fonts/selectable/Cafe24Simplehae.ttf": "5e7b43383163fde3bce21d95ad75e5ec",
"assets/assets/fonts/selectable/OK%2520CHAN.otf": "f046494a985420a56fb85a9ad1a21f81",
"assets/assets/fonts/selectable/NotoSerifKR-Bold.otf": "790998e5388ede69acee3517b0d6413a",
"assets/assets/fonts/selectable/PyeongChangPeace-Bold.otf": "e75cb1e2efce7419d14b75dfc5a11f23",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
