(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1168:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>s});var a=r(8081);r(2149);var n=r(7135);function s(e){let{children:t,...r}=e;return(0,a.jsx)(n.N,{...r,children:t})}},3266:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},4774:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},6146:()=>{},7135:(e,t,r)=>{"use strict";r.d(t,{D:()=>c,N:()=>d});var a=r(2149),n=(e,t,r,a,n,s,l,o)=>{let i=document.documentElement,m=["light","dark"];function c(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,a=r&&s?n.map(e=>s[e]||e):n;r?(i.classList.remove(...a),i.classList.add(s&&s[t]?s[t]:t)):i.setAttribute(e,t)}),r=t,o&&m.includes(r)&&(i.style.colorScheme=r)}if(a)c(a);else try{let e=localStorage.getItem(t)||r,a=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(a)}catch(e){}},s=["light","dark"],l="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=a.createContext(void 0),m={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=a.useContext(i))?e:m},d=e=>a.useContext(i)?a.createElement(a.Fragment,null,e.children):a.createElement(h,{...e}),u=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:m="theme",themes:c=u,defaultTheme:d=n?"system":"light",attribute:h="data-theme",value:p,children:g,nonce:w,scriptProps:_}=e,[S,k]=a.useState(()=>y(m,d)),[E,C]=a.useState(()=>"system"===S?v():S),T=p?Object.values(p):c,N=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=v());let a=p?p[t]:t,l=r?b(w):null,i=document.documentElement,m=e=>{"class"===e?(i.classList.remove(...T),a&&i.classList.add(a)):e.startsWith("data-")&&(a?i.setAttribute(e,a):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(m):m(h),o){let e=s.includes(d)?d:null,r=s.includes(t)?t:e;i.style.colorScheme=r}null==l||l()},[w]),L=a.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(m,t)}catch(e){}},[S]),P=a.useCallback(e=>{C(v(e)),"system"===S&&n&&!t&&N("system")},[S,t]);a.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),a.useEffect(()=>{let e=e=>{e.key===m&&(e.newValue?k(e.newValue):L(d))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),a.useEffect(()=>{N(null!=t?t:S)},[t,S]);let A=a.useMemo(()=>({theme:S,setTheme:L,forcedTheme:t,resolvedTheme:"system"===S?E:S,themes:n?[...c,"system"]:c,systemTheme:n?E:void 0}),[S,L,t,E,n,c]);return a.createElement(i.Provider,{value:A},a.createElement(f,{forcedTheme:t,storageKey:m,attribute:h,enableSystem:n,enableColorScheme:o,defaultTheme:d,value:p,themes:c,nonce:w,scriptProps:_}),g)},f=a.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:m,themes:c,nonce:d,scriptProps:u}=e,h=JSON.stringify([s,r,i,t,c,m,l,o]).slice(1,-1);return a.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},b=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},v=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},8509:(e,t,r)=>{Promise.resolve().then(r.bind(r,1168)),Promise.resolve().then(r.t.bind(r,4774,23)),Promise.resolve().then(r.t.bind(r,3266,23)),Promise.resolve().then(r.t.bind(r,6146,23))}},e=>{var t=t=>e(e.s=t);e.O(0,[535,497,954,358],()=>t(8509)),_N_E=e.O()}]);