(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{139:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},140:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(11),o=n(139),i=n(10),u=Object(r.createContext)({collectLink:function(){}}),s=n(141),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,v=e.to,b=e.href,m=e.activeClassName,p=e.isActive,h=e["data-noBrokenLinkCheck"],E=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),g=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),O=v||b,k=Object(o.a)(O),j=null==O?void 0:O.replace("pathname://",""),y=void 0!==j?function(e){return e.startsWith("/")}(n=j)?g(n):n:void 0,_=Object(r.useRef)(!1),C=f?c.e:c.c,N=i.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!N&&k&&window.docusaurus.prefetch(y),function(){N&&d&&d.disconnect()}}),[y,N,k]);var B=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,L=!y||!k||B;return y&&k&&!B&&!h&&w.collectLink(y),L?a.a.createElement("a",Object.assign({href:y},O&&!k&&{target:"_blank",rel:"noopener noreferrer"},E)):a.a.createElement(C,Object.assign({},E,{onMouseEnter:function(){_.current||(window.docusaurus.preload(y),_.current=!0)},innerRef:function(e){var t,n;N&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(y)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:y||""},f&&{isActive:p,activeClassName:m}))}},141:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(23),a=n(139);function c(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var c=void 0===r?{}:r,o=c.forcePrependBaseUrl,i=void 0!==o&&o,u=c.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(c,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},154:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(140),o=n(102),i=n.n(o),u=function(e){var t=e.to,n=e.children;return a.a.createElement(c.a,{className:i.a.navlink,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},n)};t.a=function(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement("nav",{className:i.a.nav},a.a.createElement(u,{to:"/__docusaurus/debug"},"Config"),a.a.createElement(u,{to:"/__docusaurus/debug/metadata"},"Metadata"),a.a.createElement(u,{to:"/__docusaurus/debug/registry"},"Registry"),a.a.createElement(u,{to:"/__docusaurus/debug/routes"},"Routes"),a.a.createElement(u,{to:"/__docusaurus/debug/content"},"Content"),a.a.createElement(u,{to:"/__docusaurus/debug/globalData"},"Global data")),a.a.createElement("main",{className:i.a.container},t))}},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(154),o=n(28),i=n(120),u=n.n(i);t.default=function(){return a.a.createElement(c.a,null,a.a.createElement("h2",null,"Registry"),a.a.createElement("ul",{className:u.a.list},Object.values(o.a).map((function(e){var t=e[1],n=e[2];return a.a.createElement("li",{key:t,className:u.a.listItem},a.a.createElement("div",{style:{marginBottom:"10px"}},"Aliased Path: ",a.a.createElement("code",null,t)),a.a.createElement("div",null,"Resolved Path: ",a.a.createElement("code",null,n)))}))))}}}]);