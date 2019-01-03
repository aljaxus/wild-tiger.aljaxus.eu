importScripts("/precache-manifest.b8e0e4df3851a3d61964c83213993fec.js", "/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v3.6.3"});
/* eslint-disable no-console */
console.log('Service worker script was loaded.');

self.addEventListener('message', (e) => {
    if (!e.data) {
      return;
    }
  
    switch (e.data) {
      case 'skipWaiting':
        self.skipWaiting();
        break;
      default:
        // NOOP
        break;
    }
  });
  
  workbox.clientsClaim();                                               // eslint-disable-line
  
  // The precaching code provided by Workbox.
  self.__precacheManifest = [].concat(self.__precacheManifest || []);   // eslint-disable-line
  workbox.precaching.suppressWarnings();                                // eslint-disable-line
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});     // eslint-disable-line
  
