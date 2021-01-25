(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{137:function(t,o,e){"use strict";function r(t){var o,e,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(e=r(t[o]))&&(n&&(n+=" "),n+=e);else for(o in t)t[o]&&(n&&(n+=" "),n+=o);return n}o.a=function(){for(var t,o,e=0,n="";e<arguments.length;)(t=arguments[e++])&&(o=r(t))&&(n&&(n+=" "),n+=o);return n}},138:function(t,o,e){"use strict";var r=e(0),n=e.n(r),a=e(141),u=e(137),c=e(105),i=e.n(c),l=37,s=39;o.a=function(t){var o=t.lazy,e=t.block,c=t.defaultValue,d=t.values,b=t.groupId,p=t.className,g=Object(a.a)(),m=g.tabGroupChoices,h=g.setTabGroupChoices,k=Object(r.useState)(c),B=k[0],f=k[1],y=r.Children.toArray(t.children);if(null!=b){var C=m[b];null!=C&&C!==B&&d.some((function(t){return t.value===C}))&&f(C)}var v=function(t){f(t),null!=b&&h(b,t)},j=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":e},p)},d.map((function(t){var o=t.value,e=t.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":B===o,className:Object(u.a)("tabs__item",i.a.tabItem,{"tabs__item--active":B===o}),key:o,ref:function(t){return j.push(t)},onKeyDown:function(t){!function(t,o,e){switch(e.keyCode){case s:!function(t,o){var e=t.indexOf(o)+1;t[e]?t[e].focus():t[0].focus()}(t,o);break;case l:!function(t,o){var e=t.indexOf(o)-1;t[e]?t[e].focus():t[t.length-1].focus()}(t,o)}}(j,t.target,t)},onFocus:function(){return v(o)},onClick:function(){v(o)}},e)}))),o?Object(r.cloneElement)(y.filter((function(t){return t.props.value===B}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},y.map((function(t,o){return Object(r.cloneElement)(t,{key:o,hidden:t.props.value!==B})}))))}},139:function(t,o,e){"use strict";var r=e(3),n=e(0),a=e.n(n);o.a=function(t){var o=t.children,e=t.hidden,n=t.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:e,className:n}),o)}},141:function(t,o,e){"use strict";var r=e(0),n=e(142);o.a=function(){var t=Object(r.useContext)(n.a);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},142:function(t,o,e){"use strict";var r=e(0),n=Object(r.createContext)(void 0);o.a=n},145:function(t,o,e){"use strict";e.d(o,"a",(function(){return m}));var r=e(131),n=e(0),a=e(308),u=e(302),c=e(136),i=e(144),l=e(294),s=e(135),d=e(140),b=e(242);var p=Object(l.a)((function(t,o,e){var n=Object(s.a)(t),a=Object(d.a)(t),u={root:{minWidth:"80px",height:"32px"},label:{fontWeight:i.b.semibold}};return Object(i.h)(n,u,e?function(t){var o,e,n,a,u,c,l,s,d,p=t.palette,g=t.semanticColors;return{root:{backgroundColor:g.primaryButtonBackground,border:"1px solid "+g.primaryButtonBackground,color:g.primaryButtonText,selectors:(o={},o[i.c]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},o["."+b.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:p.white}}},o)},rootHovered:{backgroundColor:g.primaryButtonBackgroundHovered,border:"1px solid "+g.primaryButtonBackgroundHovered,color:g.primaryButtonTextHovered,selectors:(e={},e[i.c]={color:"Window",backgroundColor:"Highlight",borderColor:"Highlight"},e)},rootPressed:{backgroundColor:g.primaryButtonBackgroundPressed,border:"1px solid "+g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed,selectors:(n={},n[i.c]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},n)},rootExpanded:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootChecked:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootDisabled:{selectors:(a={},a[i.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},a)},splitButtonContainer:{selectors:(u={},u[i.c]={border:"none"},u)},splitButtonDivider:Object(r.a)(Object(r.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:p.white,selectors:(c={},c[i.c]={backgroundColor:"Window"},c)}),splitButtonMenuButton:{backgroundColor:g.primaryButtonBackground,color:g.primaryButtonText,selectors:(l={},l[i.c]={backgroundColor:"WindowText"},l[":hover"]={backgroundColor:g.primaryButtonBackgroundHovered,selectors:(s={},s[i.c]={color:"Highlight"},s)},l)},splitButtonMenuButtonDisabled:{backgroundColor:g.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:g.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:g.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:g.primaryButtonText},splitButtonMenuIconDisabled:{color:p.neutralTertiary,selectors:(d={},d[i.c]={color:"GrayText"},d)}}}(t):function(t){var o,e,n,a,u,c=t.semanticColors,l=t.palette,s=c.buttonBackground,d=c.buttonBackgroundPressed,b=c.buttonBackgroundHovered,p=c.buttonText,g=c.buttonTextHovered,m=c.buttonTextChecked,h=c.buttonTextCheckedHovered;return{root:{backgroundColor:s,color:p},rootHovered:{backgroundColor:b,color:g,selectors:(o={},o[i.c]={borderColor:"Highlight",color:"Highlight"},o)},rootPressed:{backgroundColor:d,color:m},rootExpanded:{backgroundColor:d,color:m},rootChecked:{backgroundColor:d,color:m},rootCheckedHovered:{backgroundColor:d,color:h},rootDisabled:{selectors:(e={},e[i.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},e)},splitButtonContainer:{selectors:(n={},n[i.c]={border:"none"},n)},splitButtonMenuButton:{color:l.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:l.neutralLight,selectors:(a={},a[i.c]={color:"Highlight"},a)}}},splitButtonMenuButtonDisabled:{backgroundColor:c.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:c.buttonBackgroundDisabled}}},splitButtonDivider:Object(r.a)(Object(r.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:l.neutralTertiaryAlt,selectors:(u={},u[i.c]={backgroundColor:"WindowText"},u)}),splitButtonDividerDisabled:{backgroundColor:t.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:l.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:l.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:l.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:l.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:c.buttonText},splitButtonMenuIconDisabled:{color:c.buttonTextDisabled}}}(t),a,o)})),g=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(o,t),o.prototype.render=function(){var t=this.props,o=t.primary,e=void 0!==o&&o,u=t.styles,i=t.theme;return n.createElement(c.a,Object(r.a)({},this.props,{variantClassName:e?"ms-Button--primary":"ms-Button--default",styles:p(i,u,e),onRenderDescription:a.a}))},o=Object(r.b)([Object(u.a)("DefaultButton",["theme","styles"],!0)],o)}(n.Component),m=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return Object(r.c)(o,t),o.prototype.render=function(){return n.createElement(g,Object(r.a)({},this.props,{primary:!0,onRenderDescription:a.a}))},o=Object(r.b)([Object(u.a)("PrimaryButton",["theme","styles"],!0)],o)}(n.Component)},46:function(t,o,e){"use strict";e.r(o),e.d(o,"frontMatter",(function(){return i})),e.d(o,"metadata",(function(){return l})),e.d(o,"toc",(function(){return s})),e.d(o,"default",(function(){return b}));var r=e(3),n=e(8),a=(e(0),e(133)),u=e(305),c=e(145),i=(e(138),e(139),{}),l={unversionedId:"setup/budget/budget-accounts-ui",id:"setup/budget/budget-accounts-ui",isDocsHomePage:!1,title:"budget-accounts-ui",description:"To create a Budget Accounts via the Monitr user interface:",source:"@site/docs/setup/budget/budget-accounts-ui.mdx",slug:"/setup/budget/budget-accounts-ui",permalink:"/setup/budget/budget-accounts-ui",version:"current"},s=[{value:"Validation",id:"validation",children:[]}],d={toc:s};function b(t){var o=t.components,e=Object(n.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,e,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To create a Budget Accounts via the Monitr user interface:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget"}),"Go to tab 'Budget Accounts'"),"."),Object(a.b)("li",{parentName:"ol"},"Add rows by clicking '",Object(a.b)(u.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'"),Object(a.b)("li",{parentName:"ol"},"Give the Budget Accounts a name link it to a Mapping"),Object(a.b)("li",{parentName:"ol"},"Repeat this untill you have made the Budget Accounts you need\n. Click ",Object(a.b)(c.a,{mdxType:"PrimaryButton"},"Save")),Object(a.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your data will not be saved."),Object(a.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(a.b)(c.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(a.b)("h2",{id:"validation"},"Validation"),Object(a.b)("p",null,"The following validation checks are performed:"),Object(a.b)(u.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The name of the Budget Account should be unique")}b.isMDXComponent=!0}}]);