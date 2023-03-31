
import App from './Content.svelte';
console.info('chrome-ext template-svelte-js content script')

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

// Remove the existing DOM content

document.body.innerHTML = '';
(() => {
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"], style');
  
  for (const stylesheet of stylesheets) {
    stylesheet.remove();
  }
})();

injectCSS(chrome.runtime.getURL('daisyui.css'));
injectCSS(chrome.runtime.getURL('tailwind.css'));
// Mount the Svelte app to the empty body
const app = new App({
  target: document.body,
});



export default app;