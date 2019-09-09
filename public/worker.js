// const staticCacheName = 'site-static-v6'
// const dynamicCacheName = 'site-dynamic-v6'

// const assets = [
//   '/',
//   'https://fonts.googleapis.com/icon?family=Material+Icons',
//   'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
//   'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
// ]

// // install event
// self.addEventListener('install', evt => {
//   //console.log('service worker installed')
//   evt.waitUntil(
//     caches.open(staticCacheName).then(cache => {
//       console.log('caching shell assets')
//       cache.addAll(assets)
//     })
//   )
// })

// // activate event
// self.addEventListener('activate', evt => {
//   //console.log('service worker activated')
//   evt.waitUntil(
//     caches.keys().then(keys => {
//       //console.log(keys)
//       return Promise.all(keys
//         .filter(key => key !== staticCacheName && key !== dynamicCacheName)
//         .map(key => caches.delete(key))
//       )
//     })
//   )
// })

// // fetch event
// self.self.addEventListener('fetch', evt => {
//   if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
//     evt.respondWith(
//       caches.match(evt.request).then(cacheRes => {
//         return cacheRes || fetch(evt.request).then(fetchRes => {
//           return caches.open(dynamicCacheName).then(cache => {
//             cache.put(evt.request.url, fetchRes.clone()).catch(err => console.log(err))
//             return fetchRes
//           })
//         })
//       })
//     )
//   }
// })