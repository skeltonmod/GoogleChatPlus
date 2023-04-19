import App from './Content.svelte.js';

console.info('chrome-ext template-svelte-js content script');

function injectCSS(cssFileURL) {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = cssFileURL;
    document.head.appendChild(linkElement);
}

function injectJS(jsFileURL) {
    const scriptElement = document.createElement('script');
    scriptElement.src = jsFileURL;
    document.head.appendChild(scriptElement);
}

// Mount the Svelte app to the empty body
const app = new App({
  target: document.body,
});

export { app as default };
