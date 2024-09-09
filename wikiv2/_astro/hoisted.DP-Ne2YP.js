const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.vyGtFctF.js","_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js"])))=>i.map(i=>d[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js";const S=document.getElementById("starlight__sidebar"),y=S?.querySelector("sl-sidebar-state-persist"),v="sl-sidebar-state",b=()=>{let t=[];const e=y?.dataset.hash||"";try{const n=sessionStorage.getItem(v),s=JSON.parse(n||"{}");Array.isArray(s.open)&&s.hash===e&&(t=s.open)}catch{}return{hash:e,open:t,scroll:S?.scrollTop||0}},w=t=>{try{sessionStorage.setItem(v,JSON.stringify(t))}catch{}},L=()=>w(b()),x=(t,e)=>{const n=b();n.open[e]=t,w(n)};y?.addEventListener("click",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest("summary")?.closest("details");if(!e)return;const n=e.querySelector("sl-sidebar-restore"),s=parseInt(n?.dataset.index||"");isNaN(s)||x(!e.open,s)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&L()});addEventListener("pageHide",L);class H extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",H);class C extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",C);const M="modulepreload",_=function(t){return"/wikiv2/"+t},E={},A=function(e,n,s){let u=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");u=Promise.all(n.map(l=>{if(l=_(l),l in E)return;E[l]=!0;const h=l.endsWith(".css"),r=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${r}`))return;const i=document.createElement("link");if(i.rel=h?"stylesheet":M,h||(i.as="script"),i.crossOrigin="",i.href=l,c&&i.setAttribute("nonce",c),document.head.appendChild(i),h)return new Promise((d,o)=>{i.addEventListener("load",d),i.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${l}`)))})}))}return u.then(()=>e()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})};class P extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),s=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),a=o=>{("href"in(o.target||{})||document.body.contains(o.target)&&!u.contains(o.target))&&l()},c=o=>{s.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),o?.stopPropagation(),window.addEventListener("click",a)},l=()=>s.close();e.addEventListener("click",c),e.disabled=!1,n.addEventListener("click",l),s.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",a)}),window.addEventListener("keydown",o=>{(o.metaKey===!0||o.ctrlKey===!0)&&o.key==="k"&&(s.open?l():c(),o.preventDefault())});let h={};try{h=JSON.parse(this.dataset.translations||"{}")}catch{}const d=this.dataset.stripTrailingSlash!==void 0?o=>o.replace(/(.)\/(#.*)?$/,"$1$2"):o=>o;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(g=>setTimeout(g,1)))(async()=>{const{PagefindUI:g}=await A(async()=>{const{PagefindUI:m}=await import("./ui-core.vyGtFctF.js");return{PagefindUI:m}},__vite__mapDeps([0,1]));new g({element:"#starlight__search",baseUrl:"/wikiv2/",bundlePath:"/wikiv2/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:h,showSubResults:!0,processResult:m=>{m.url=d(m.url),m.sub_results=m.sub_results.map(f=>(f.url=d(f.url),f))}})})})}}customElements.define("site-search",P);const T="starlight-theme",k=t=>t==="auto"||t==="dark"||t==="light"?t:"auto",I=()=>k(typeof localStorage<"u"&&localStorage.getItem(T));function O(t){typeof localStorage<"u"&&localStorage.setItem(T,t==="light"||t==="dark"?t:"")}const R=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(t){StarlightThemeProvider.updatePickers(t),document.documentElement.dataset.theme=t==="auto"?R():t,O(t)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{I()==="auto"&&p("auto")});class N extends HTMLElement{constructor(){super(),p(I()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(k(e.currentTarget.value))})}}customElements.define("starlight-theme-select",N);const $="_top";class q extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10),this.onIdle=e=>(window.requestIdleCallback||(n=>setTimeout(n,1)))(e),this.init=()=>{const e=[...this.querySelectorAll("a")],n=r=>{if(r instanceof HTMLHeadingElement){if(r.id===$)return!0;const i=r.tagName[1];if(i){const d=parseInt(i,10);if(d>=this.minH&&d<=this.maxH)return!0}}return!1},s=r=>{if(!r)return null;const i=r;for(;r;){if(n(r))return r;for(r=r.previousElementSibling;r?.lastElementChild;)r=r.lastElementChild;const d=s(r);if(d)return d}return s(i.parentElement)},u=r=>{for(const{isIntersecting:i,target:d}of r){if(!i)continue;const o=s(d);if(!o)continue;const g=e.find(m=>m.hash==="#"+encodeURIComponent(o.id));if(g){this.current=g;break}}},a=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let c;const l=()=>{c||(c=new IntersectionObserver(u,{rootMargin:this.getRootMargin()}),a.forEach(r=>c.observe(r)))};l();let h;window.addEventListener("resize",()=>{c&&c.disconnect(),clearTimeout(h),h=setTimeout(()=>this.onIdle(l),200)})},this.onIdle(()=>this.init())}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,n=this.querySelector("summary")?.getBoundingClientRect().height||0,s=e+n+32,u=s+53,a=document.documentElement.clientHeight;return`-${s}px 0% ${u-a}px`}}customElements.define("starlight-toc",q);class B extends q{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",n)}),window.addEventListener("click",s=>{e.contains(s.target)||n()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&e.open){const u=e.contains(document.activeElement);if(n(),u){const a=e.querySelector("summary");a&&a.focus()}}})}}customElements.define("mobile-starlight-toc",B);export{A as _};
