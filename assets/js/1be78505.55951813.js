(window.webpackJsonp=window.webpackJsonp||[]).push([[14,61],{165:function(e,t,a){"use strict";var n=a(189),r=a(190),o=a(145),c=Object(o.q)(),l=Object(o.j)({palette:{themePrimary:"#193153",themeLighterAlt:"#f1f4f8",themeLighter:"#cad5e4",themeLight:"#a1b3cc",themeTertiary:"#587398",themeSecondary:"#284369",themeDarkAlt:"#172d4c",themeDark:"#132640",themeDarker:"#0e1c2f",neutralLighterAlt:"#faf9f8",neutralLighter:"#f3f2f1",neutralLight:"#edebe9",neutralQuaternaryAlt:"#e1dfdd",neutralQuaternary:"#d0d0d0",neutralTertiaryAlt:"#c8c6c4",neutralTertiary:"#8ca1ba",neutralSecondary:"#6e87a3",neutralPrimaryAlt:"#536e8d",neutralPrimary:"#0e1f33",neutralDark:"#294360",black:"#1a3049",white:"#ffffff"},semanticColors:{navigationTop:"#193153",inputBackgroundChecked:"#FADB0F",primaryButtonBackground:"#FADB0F",primaryButtonBackgroundHovered:"#eecf04",primaryButtonBackgroundPressed:"#caaf03",primaryButtonText:c.semanticColors.bodyText,primaryButtonTextHovered:c.semanticColors.bodyText,primaryButtonTextPressed:c.semanticColors.bodyText}});Object(r.a)(),Object(o.s)(l),t.a=n.a},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(8),r=a(0),o=a.n(r),c=a(163),l=a(191),i=a(138),s=a(146),u={defaultButton:function(){return i.a},primaryButton:function(){return s.a},default:function(){return c.a},localeDropdown:function(){return l.a},docsVersion:function(){return a(183).default},docsVersionDropdown:function(){return a(184).default},doc:function(){return a(185).default}};function d(e){var t=e.type,a=e.component,r=Object(n.a)(e,["type","component"]),c=function(e){void 0===e&&(e="default");var t=u[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t||a);return o.a.createElement(c,r)}},192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(165);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},255:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),c};e.exports=n,e.exports.default=n},256:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(133),c=a(18),l=a(29),i=a(165),s=a(3),u=a(8),d=a(137),m=a(144),p=a(142),h=a(200),f=a(201),b=a(199),y=a(147),g=a(150),v=a(208),k=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=a(210),E=a(119),O=a.n(E);var C=function e(t,a){return"link"===t.type?Object(m.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function N(e){var t,a,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,p=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=c.items,f=c.label,b=C(c,m),y=(a=b,o=Object(n.useRef)(a),Object(n.useEffect)((function(){o.current=a}),[a]),o.current),g=Object(n.useState)((function(){return!!i&&(!b&&c.collapsed)})),v=g[0],k=g[1],j=Object(n.useRef)(null),E=Object(n.useState)(void 0),N=E[0],x=E[1],S=function(e){var t;void 0===e&&(e=!0),x(e?(null===(t=j.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){b&&!y&&v&&k(!1)}),[b,y,v]);var B=Object(n.useCallback)((function(e){e.preventDefault(),N||S(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[N]);return 0===h.length?null:r.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&b},t[O.a.menuLinkText]=!i,t)),onClick:i?B:void 0,href:i?"#!":void 0},p),f),r.a.createElement("ul",{className:"menu__list",ref:j,style:{height:N},onTransitionEnd:function(){v||S(!1)}},h.map((function(e){return r.a.createElement(T,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function x(e){var t=e.item,a=e.onItemClick,n=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=C(t,n);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(y.a,Object(s.a)({className:Object(d.a)("menu__link",{"menu__link--active":i}),to:c},Object(g.a)(c)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function T(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(x,e)}}var S=function(e){var t,a,o=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,y=Object(n.useState)(!1),g=y[0],E=y[1],C=Object(m.useThemeConfig)(),N=C.navbar.hideOnScroll,x=C.hideableSidebar,S=Object(p.a)().isAnnouncementBarClosed,B=Object(b.a)().scrollY;Object(h.a)(g);var P=Object(f.a)();return Object(n.useEffect)((function(){P===f.b.desktop&&E(!1)}),[P]),r.a.createElement("div",{className:Object(d.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=N,t[O.a.sidebarHidden]=u,t))},N&&r.a.createElement(v.a,{tabIndex:-1,className:O.a.sidebarLogo}),r.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",O.a.menu,(a={"menu--show":g},a[O.a.menuWithAnnouncementBar]=!S&&0===B,a))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){E(!g)}},g?r.a.createElement("span",{className:Object(d.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(j.a,{className:O.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(T,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),E(!1)},collapsible:i,activePath:o})})))),x&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(d.a)("button button--secondary button--outline",O.a.collapseSidebarButton),onClick:s},r.a.createElement(k,{className:O.a.collapseSidebarButtonIcon,"aria-label":"Collapse sidebar"})))},B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},P={Prism:a(25).a,theme:B};function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var D=/\r\n|\r|\n/,L=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},I=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},A=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=_({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=_({},a,{backgroundColor:null}),r};function M(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var F=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?A(e.theme,e.language):void 0;return t.themeDict=a})),w(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=_({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?_({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),w(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var c=n?{display:"inline-block"}:{},l=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),w(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,c=_({},M(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?_({},c.style,r):r),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=n[c]++)<r[c];){var s=void 0,u=t[c],d=a[c][o];if("string"==typeof d?(u=c>0?u:["plain"],s=d):(u=I(u,d.type),d.alias&&(u=I(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(D),p=m.length;l.push({types:u,content:m[0]});for(var h=1;h<p;h++)L(l),i.push(l=[]),l.push({types:u,content:m[h]})}else c++,t.push(u),a.push(s),n.push(0),r.push(s.length)}c--,t.pop(),a.pop(),n.pop(),r.pop()}return L(l),i}(void 0!==c?t.tokenize(n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),R=a(255),H=a.n(R),W=a(256),$=a.n(W),z={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},V=a(177),J=function(){var e=Object(m.useThemeConfig)().prism,t=Object(V.a)().isDarkTheme,a=e.theme||z,n=e.darkTheme||a;return t?n:a},Q=a(120),q=a.n(Q),K=/{([\d,-]+)}/,U=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},Y=/(?:title=")(.*)(?:")/,G=function(e){var t=e.children,a=e.className,o=e.metastring,c=Object(m.useThemeConfig)().prism,l=Object(n.useState)(!1),i=l[0],u=l[1],p=Object(n.useState)(!1),h=p[0],f=p[1];Object(n.useEffect)((function(){f(!0)}),[]);var b=Object(n.useRef)(null),y=[],g="",v=J(),k=Array.isArray(t)?t.join(""):t;if(o&&K.test(o)){var j=o.match(K)[1];y=$()(j).filter((function(e){return e>0}))}o&&Y.test(o)&&(g=o.match(Y)[1]);var E=a&&a.replace(/language-/,"");!E&&c.defaultLanguage&&(E=c.defaultLanguage);var O=k.replace(/\n$/,"");if(0===y.length&&void 0!==E){for(var C,N="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return U(["js","jsBlock"]);case"jsx":case"tsx":return U(["js","jsBlock","jsx"]);case"html":return U(["js","jsBlock","html"]);case"python":case"py":return U(["python"]);default:return U()}}(E),T=k.replace(/\n$/,"").split("\n"),S=0;S<T.length;){var B=S+1,w=T[S].match(x);if(null!==w){switch(w.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=B+",";break;case"highlight-start":C=B;break;case"highlight-end":N+=C+"-"+(B-1)+","}T.splice(S,1)}else S+=1}y=$()(N),O=T.join("\n")}var _=function(){H()(O),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(F,Object(s.a)({},P,{key:String(h),theme:v,code:O,language:E}),(function(e){var t,a=e.className,n=e.style,o=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:n,className:q.a.codeBlockTitle},g),r.a.createElement("div",{className:q.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(d.a)(a,q.a.codeBlock,"thin-scrollbar",(t={},t[q.a.codeBlockWithTitle]=g,t))},r.a.createElement("div",{className:q.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return y.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(d.a)(q.a.copyButton),onClick:_},i?"Copied":"Copy")))}))},X=(a(121),a(122)),Z=a.n(X),ee=function(e){return function(t){var a,n=t.id,o=Object(u.a)(t,["id"]),c=Object(m.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(d.a)("anchor",(a={},a[Z.a.enhancedAnchor]=!c,a)),id:n}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},te=a(123),ae=a.n(te),ne={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(G,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(y.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:ae.a.mdxCodeBlock},e))},h1:ee("h1"),h2:ee("h2"),h3:ee("h3"),h4:ee("h4"),h5:ee("h5"),h6:ee("h6")},re=a(192),oe=a(160),ce=a(124),le=a.n(ce);function ie(e){var t,a,l,s,u=e.currentDocRoute,p=e.versionMetadata,h=e.children,f=Object(c.default)(),b=f.siteConfig,y=f.isClient,g=p.pluginId,v=p.permalinkToSidebar,j=p.docsSidebars,E=p.version,O=v[u.path],C=j[O],N=Object(n.useState)(!1),x=N[0],T=N[1],B=Object(n.useState)(!1),P=B[0],w=B[1],_=Object(n.useCallback)((function(){P&&w(!1),T(!x)}),[P]);return r.a.createElement(i.a,{key:y,searchMetadatas:{version:E,tag:Object(m.docVersionSearchTag)(g,E)}},r.a.createElement("div",{className:le.a.docPage},C&&r.a.createElement("div",{className:Object(d.a)(le.a.docSidebarContainer,(t={},t[le.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(le.a.docSidebarContainer)&&x&&w(!0)},role:"complementary"},r.a.createElement(S,{key:O,sidebar:C,path:u.path,sidebarCollapsible:null===(a=null===(l=b.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===a||a,onCollapse:_,isHidden:P}),P&&r.a.createElement("div",{className:le.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:_,onClick:_},r.a.createElement(k,{"aria-label":"Expand sidebar"}))),r.a.createElement("main",{className:le.a.docMainContainer},r.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",le.a.docItemWrapper,(s={},s[le.a.docItemWrapperEnhanced]=x,s))},r.a.createElement(o.a,{components:ne},h)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,o=t.find((function(e){return Object(oe.matchPath)(n.pathname,e)}));return o?r.a.createElement(ie,{currentDocRoute:o,versionMetadata:a},Object(l.a)(t)):r.a.createElement(re.default,e)}}}]);