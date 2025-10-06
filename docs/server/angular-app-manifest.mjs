
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/shipping-tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/shipping-tracker"
  },
  {
    "renderMode": 2,
    "route": "/shipping-tracker/update"
  },
  {
    "renderMode": 2,
    "route": "/shipping-tracker/track"
  },
  {
    "renderMode": 2,
    "redirectTo": "/shipping-tracker",
    "route": "/shipping-tracker/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 457, hash: 'ab1ba54ec60a0bf76cac0b4a1227d6c1d99d3e34efbfcf25d750cdaf0799d699', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: 'c2f4cffb854713a1794d72feadc629c1dceca14d4aac024cb128a6d9d9d310e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8502, hash: '9ae80360697c67285f0122a77b1e6acf69174aa492e892d0088f54ff7f3715e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'update/index.html': {size: 7711, hash: '5a78ad76f0677fee25faa7f880eb52965bd2c3010ef04e0336ba0043ad7ec149', text: () => import('./assets-chunks/update_index_html.mjs').then(m => m.default)},
    'track/index.html': {size: 8490, hash: 'e5ca5f4e797554dae6ff43537f2efe7e90ac63b21982add7dfbbd21a33f08b5d', text: () => import('./assets-chunks/track_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
