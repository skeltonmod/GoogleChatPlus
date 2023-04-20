import{S,i as T,s as k,e as N,a as I,n as m,d as A,o as H}from"./chunk-4e37d9ad.js";function M(u){let r;return{c(){r=N("div")},m(a,s){I(a,r,s)},p:m,i:m,o:m,d(a){a&&A(r)}}}function O(u){let r,a,s;const p=n=>n.replace(/\. \d+ (Replies|Reply)\./,"").replace(/\. [^\.]*\d+\:\d+( (A|P)M)?/,"").replace(/. Last updated.*$/,"").replace(/\. Now$/,"").replace(/\. \d+ mins?$/,"").replace(/\n.*/gm,"").replace(/。.*/gm,"").replace(/\*([^(\*)]+)\*/g,"$1"),b=()=>{const n=document.getElementById("thread-heading");n&&(n.style.display="none")},f=n=>{const e=document.getElementById("thread-heading");if(e){const t=n.textContent.split(".");t.length>0&&t[0].indexOf("Unread")>-1&&t.shift(),t.shift(),t.length>0&&t[0].indexOf("Space Manager")>-1&&t.shift(),e.textContent=p(t.join(".")),e.style.display="block",typeof s=="number"&&clearTimeout(s),s=setTimeout(b,1e3)}},w=()=>{const n=document.getElementById("thread-selector");if(n){let e=n.selectedIndex;if(e>=2){e-=2;let t=a[e].nextElementSibling;for(;t&&!t.querySelector('[role="button"]');)t=t.nextElementSibling;if(t){let i;const l=()=>{typeof i=="number"&&clearTimeout(i),i=setTimeout(()=>{window.removeEventListener("scroll",l,!0);let o=r.firstChild;for(;o&&o.scrollTop==0;)o=o.nextElementSibling;o&&(o.scrollTop+=80)},100)};window.addEventListener("scroll",l,!0),t.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}),f(a[e])}else console.log("thread container element not found.")}else if(e==1){let t=a[0];t&&t.scrollIntoView({behavior:"auto",block:"start",inline:"nearest"})}n.selectedIndex=0}else console.log("#thread-selector not found.")},x=()=>{if(r=document.body.querySelector('[role="main"]'),!r)return null;const n=r.querySelectorAll('[role="heading"][aria-label]');if(a=Array.from(n),a.length==0)return null;const e=a.map(h=>{const c=document.createElement("option");c.className="thread-list-item";const d=h.textContent.split(".");return d.length>0&&d[0].indexOf("Unread")>-1&&(c.className=c.className+" thread-unread",d.shift()),d.shift(),d.length>0&&d[0].indexOf("Space Manager")>-1&&d.shift(),c.textContent=p(d.join(".")),c}),t=document.createElement("select");t.id="thread-selector",t.onchange=w;let i;i=document.createElement("option"),i.hidden=!0,i.disabled=!0,i.className="thread-list-header",i.textContent="Go to Thread",t.appendChild(i),i=document.createElement("option"),i.className="thread-list-fetch",i.textContent="Upper end (to fetch more topics)",t.appendChild(i),e.forEach(h=>t.appendChild(h)),t.selectedIndex=0;const l=document.createElement("div");l.id="thread-heading",l.style.display="block";const o=document.createElement("div");return o.id="thread-switcher",o.appendChild(t),o.appendChild(l),o},y=()=>{const n=x();if(n){const e=r.nextElementSibling;e&&e.id=="thread-switcher"?(n.replaceChild(e.childNodes[1],n.childNodes[1]),r.parentNode.replaceChild(n,e)):r.parentNode.insertBefore(n,e)}else{const e=document.getElementById("thread-switcher");e&&e.parentNode.removeChild(e)}},v=()=>{const n=document.createElement("style");n.innerHTML=`
    #thread-switcher {
    }
    #thread-selector {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 9em;
      z-index: 950;
      align-items: center;
      display: inline-flex;
      justify-content: center;
      outline: none;
      -webkit-font-smoothing: antialiased;
      font-family: "Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
      font-size: .875rem;
      letter-spacing: .25px;
      background: none;
      border-radius: 4px;
      box-sizing: border-box;
      color: #5f6368;
      cursor: pointer;
      font-weight: 500;
      height: 36px;
      min-width: 80px;
      outline: none;
      padding: 0 16px;
      box-shadow: inset 0 0 0 1px #dadce0;
      border: 1px solid #dadce0;
      -webkit-border-radius: 18px;
      border-radius: 18px;
      -webkit-box-shadow: none;
      box-shadow: none;
      display: inline-block;
      height: 36px;
      margin-bottom: 4px;
      margin-right: 12px;
      min-width: unset;
      overflow: hidden;
      padding-bottom: 4px;
      padding-left: 8px;
      padding-right: 8px;
      text-shadow: none;
      vertical-align: bottom;
      margin-top: 10px;
    }
    #thread-heading {
      position: absolute;
      top: 0px;
      left: 0px;
      background: pink;
    }
    .thread-list-header {}
    .thread-list-fetch { color: #2d76e5; }
    .thread-list-item {}
    .thread-unread { font-weight: bold; }
  `,document.body.appendChild(n)},g=()=>{y(),document.location.href},E=n=>{if(console.log(n.target.value),window.getSelection().toString())return;let e=n.target;switch(e.tagName){case"svg":case"path":case"INPUT":return}for(;e;){for(;e.previousElementSibling;){e=e.previousElementSibling;const t=e.getAttribute("role"),i=e.getAttribute("aria-label");if(t=="heading"&&typeof i=="string"){f(e);return}if(t=="button"&&e.getAttribute("title")!==null)return}e=e.parentNode}},C=()=>{if(!document.location.hash.match(/id=\w*Frame/))return;v(),g();let n;new MutationObserver(t=>{let i=0;for(const l of t)switch(l.target.id){case"thread-switcher":case"thread-selector":case"thread-heading":break;default:if(l.type==="childList")for(const o of Array.from(l.addedNodes))switch(o.id){case"thread-switcher":case"thread-selector":case"thread-heading":break;default:o.tagName=="DIV"&&o.childElementCount==1&&o.firstElementChild.tagName=="INPUT"||typeof o.getAttribute=="function"&&o.getAttribute("role")=="menuitem"||++i;break}else++i;break}i!=0&&(typeof n=="number"&&clearTimeout(n),n=setTimeout(g,200))}).observe(document.body,{childList:!0,subtree:!0}),window.addEventListener("click",E)};return H(()=>{C()}),[]}class D extends S{constructor(r){super(),T(this,r,O,M,k,{})}}console.info("chrome-ext template-svelte-js content script");new D({target:document.body});
