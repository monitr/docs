(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{114:function(o,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return g}));var e=r(0),n=r.n(e);function a(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}function u(o,t){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),r.push.apply(r,e)}return r}function i(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(o,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))}))}return o}function c(o,t){if(null==o)return{};var r,e,n=function(o,t){if(null==o)return{};var r,e,n={},a=Object.keys(o);for(e=0;e<a.length;e++)r=a[e],t.indexOf(r)>=0||(n[r]=o[r]);return n}(o,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(e=0;e<a.length;e++)r=a[e],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(o,r)&&(n[r]=o[r])}return n}var l=n.a.createContext({}),s=function(o){var t=n.a.useContext(l),r=t;return o&&(r="function"==typeof o?o(t):i(i({},t),o)),r},d=function(o){var t=s(o.components);return n.a.createElement(l.Provider,{value:t},o.children)},p={inlineCode:"code",wrapper:function(o){var t=o.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(o,t){var r=o.components,e=o.mdxType,a=o.originalType,u=o.parentName,l=c(o,["components","mdxType","originalType","parentName"]),d=s(r),b=e,g=d["".concat(u,".").concat(b)]||d[b]||p[b]||a;return r?n.a.createElement(g,i(i({ref:t},l),{},{components:r})):n.a.createElement(g,i({ref:t},l))}));function g(o,t){var r=arguments,e=t&&t.mdxType;if("string"==typeof o||e){var a=r.length,u=new Array(a);u[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=o,i.mdxType="string"==typeof o?o:e,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.a.createElement.apply(null,u)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},140:function(o,t,r){"use strict";r.d(t,"a",(function(){return y}));var e=r(113),n=r(0),a=r(285),u=r(279),i=r(130),c=r(123),l=r(271),s=r(129),d=r(131),p=r(218);var b=Object(l.a)((function(o,t,r){var n=Object(s.a)(o),a=Object(d.a)(o),u={root:{minWidth:"80px",height:"32px"},label:{fontWeight:c.b.semibold}};return Object(c.h)(n,u,r?function(o){var t,r,n,a,u,i,l,s,d,b=o.palette,g=o.semanticColors;return{root:{backgroundColor:g.primaryButtonBackground,border:"1px solid "+g.primaryButtonBackground,color:g.primaryButtonText,selectors:(t={},t[c.c]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},t["."+p.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:b.white}}},t)},rootHovered:{backgroundColor:g.primaryButtonBackgroundHovered,border:"1px solid "+g.primaryButtonBackgroundHovered,color:g.primaryButtonTextHovered,selectors:(r={},r[c.c]={color:"Window",backgroundColor:"Highlight",borderColor:"Highlight"},r)},rootPressed:{backgroundColor:g.primaryButtonBackgroundPressed,border:"1px solid "+g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed,selectors:(n={},n[c.c]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},n)},rootExpanded:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootChecked:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootDisabled:{selectors:(a={},a[c.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},a)},splitButtonContainer:{selectors:(u={},u[c.c]={border:"none"},u)},splitButtonDivider:Object(e.a)(Object(e.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:b.white,selectors:(i={},i[c.c]={backgroundColor:"Window"},i)}),splitButtonMenuButton:{backgroundColor:g.primaryButtonBackground,color:g.primaryButtonText,selectors:(l={},l[c.c]={backgroundColor:"WindowText"},l[":hover"]={backgroundColor:g.primaryButtonBackgroundHovered,selectors:(s={},s[c.c]={color:"Highlight"},s)},l)},splitButtonMenuButtonDisabled:{backgroundColor:g.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:g.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:g.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:g.primaryButtonText},splitButtonMenuIconDisabled:{color:b.neutralTertiary,selectors:(d={},d[c.c]={color:"GrayText"},d)}}}(o):function(o){var t,r,n,a,u,i=o.semanticColors,l=o.palette,s=i.buttonBackground,d=i.buttonBackgroundPressed,p=i.buttonBackgroundHovered,b=i.buttonText,g=i.buttonTextHovered,y=i.buttonTextChecked,k=i.buttonTextCheckedHovered;return{root:{backgroundColor:s,color:b},rootHovered:{backgroundColor:p,color:g,selectors:(t={},t[c.c]={borderColor:"Highlight",color:"Highlight"},t)},rootPressed:{backgroundColor:d,color:y},rootExpanded:{backgroundColor:d,color:y},rootChecked:{backgroundColor:d,color:y},rootCheckedHovered:{backgroundColor:d,color:k},rootDisabled:{selectors:(r={},r[c.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},r)},splitButtonContainer:{selectors:(n={},n[c.c]={border:"none"},n)},splitButtonMenuButton:{color:l.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:l.neutralLight,selectors:(a={},a[c.c]={color:"Highlight"},a)}}},splitButtonMenuButtonDisabled:{backgroundColor:i.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:i.buttonBackgroundDisabled}}},splitButtonDivider:Object(e.a)(Object(e.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:l.neutralTertiaryAlt,selectors:(u={},u[c.c]={backgroundColor:"WindowText"},u)}),splitButtonDividerDisabled:{backgroundColor:o.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:l.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:l.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:l.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:l.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:i.buttonText},splitButtonMenuIconDisabled:{color:i.buttonTextDisabled}}}(o),a,t)})),g=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return Object(e.c)(t,o),t.prototype.render=function(){var o=this.props,t=o.primary,r=void 0!==t&&t,u=o.styles,c=o.theme;return n.createElement(i.a,Object(e.a)({},this.props,{variantClassName:r?"ms-Button--primary":"ms-Button--default",styles:b(c,u,r),onRenderDescription:a.a}))},t=Object(e.b)([Object(u.a)("DefaultButton",["theme","styles"],!0)],t)}(n.Component),y=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return Object(e.c)(t,o),t.prototype.render=function(){return n.createElement(g,Object(e.a)({},this.props,{primary:!0,onRenderDescription:a.a}))},t=Object(e.b)([Object(u.a)("PrimaryButton",["theme","styles"],!0)],t)}(n.Component)},33:function(o,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var e=r(2),n=r(7),a=(r(0),r(114)),u=r(140),i={},c={unversionedId:"setup/integrations/integration-yuki",id:"setup/integrations/integration-yuki",isDocsHomePage:!1,title:"integration-yuki",description:"You will need to create a Yuki API key to be able to add the integration. You can find more information on the documentation page of Yuki. Once you've created an API key, fill it in and click Save.",source:"@site/docs/setup/integrations/integration-yuki.mdx",slug:"/setup/integrations/integration-yuki",permalink:"/setup/integrations/integration-yuki",version:"current"},l=[],s={rightToc:l};function d(o){var t=o.components,r=Object(n.a)(o,["components"]);return Object(a.b)("wrapper",Object(e.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You will need to create a Yuki API key to be able to add the integration. You can find more information on the ",Object(a.b)("a",Object(e.a)({parentName:"p"},{href:"https://support.yuki.be/nl/support/solutions/articles/11000065506-hoe-leg-ik-een-koppeling-"}),"documentation page of Yuki"),". Once you've created an API key, fill it in and click ",Object(a.b)(u.a,{mdxType:"PrimaryButton"},"Save"),"."))}d.isMDXComponent=!0}}]);