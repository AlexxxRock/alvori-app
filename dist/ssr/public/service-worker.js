if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,n,o)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(n.map(i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}})).then(e=>{const i=o(...e);return r.default||(r.default=i),r})}))}}define("./service-worker.js",["./workbox-b098ada2"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/../index.html",revision:"894e88b09475c2cedd7dfbf299aad545"},{url:"/css/app.2ec041a1.css",revision:"b6b1d646ec169f4025d68f934ebb0f02"},{url:"/favicon/android-chrome-192x192.png",revision:"3dff37e7b064ad3d0c705cabcccbd081"},{url:"/favicon/android-chrome-512x512.png",revision:"25c1482324e958b6d87dd1d5daff00c5"},{url:"/favicon/apple-touch-icon.png",revision:"d1beaafd3441ed104505f7722c061aad"},{url:"/favicon/browserconfig.xml",revision:"316cbced34b68586d665479137ff0db5"},{url:"/favicon/favicon-16x16.png",revision:"a711e2093b24c9800424fd9458396e05"},{url:"/favicon/favicon-32x32.png",revision:"5963587f065acd868c35c101ead084a1"},{url:"/favicon/favicon.ico",revision:"6d2e583072e5ba3ffc5c309051d4157a"},{url:"/favicon/mstile-150x150.png",revision:"13d9970c9b7b509797af2123c9b83ad5"},{url:"/favicon/safari-pinned-tab.svg",revision:"3d81d84db3c595ea46ee722d221aa871"},{url:"/img/logo.png",revision:"74eb999500e5521063e3138d3e7833af"},{url:"/js/71.js",revision:"3d10afc3b0e2f64a20b662456523095f"},{url:"/js/about.js",revision:"132ad1ea6612a6e4eb9daf06c599b976"},{url:"/js/app.js",revision:"b2b24765c0946bc1024dc7ff92b65d59"},{url:"/js/chunk-vendors.js",revision:"4bd39e8a63479d8a4695fca0bdb0de45"},{url:"/js/home.js",revision:"2350eb3710e0e265a995c191eb7a719f"},{url:"/manifest.json",revision:"39155c170d4f98b835abacd520d98771"}],{}),e.registerRoute(/(.*)/g,new e.NetworkFirst,"GET")}));
