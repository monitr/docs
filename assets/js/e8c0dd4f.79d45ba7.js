(window.webpackJsonp=window.webpackJsonp||[]).push([[55,14,24],{139:function(e,t,r){"use strict";function a(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},141:function(e,t,r){"use strict";var a=r(0),o=r.n(a),n=r(143),s=r(139),u=r(110),i=r.n(u),c=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,u=e.defaultValue,b=e.values,d=e.groupId,m=e.className,p=Object(n.a)(),g=p.tabGroupChoices,f=p.setTabGroupChoices,v=Object(a.useState)(u),_=v[0],w=v[1],y=a.Children.toArray(e.children);if(null!=d){var h=g[d];null!=h&&h!==_&&b.some((function(e){return e.value===h}))&&w(h)}var j=function(e){w(e),null!=d&&f(d,e)},O=[];return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":r},m)},b.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":_===t,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":_===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},r)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}},142:function(e,t,r){"use strict";var a=r(0),o=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},143:function(e,t,r){"use strict";var a=r(0),o=r(144);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},144:function(e,t,r){"use strict";var a=r(0),o=Object(a.createContext)(void 0);t.a=o},145:function(e,t,r){"use strict";var a=r(0),o=r.n(a),n=r(146),s=r.n(n);t.a=function(e){var t=e.url,r=e.padding,a=e.children,n=e.style,u=e.className,i=e.contentStyle,c=void 0===i?{}:i,l=e.showHamburger,b=void 0!==l&&l;return o.a.createElement("div",{className:s.a.browserFrame+" "+u+" shadow--tl",style:n},o.a.createElement("div",{className:s.a.browserFrame__top},o.a.createElement("div",{className:s.a["browserFrame__top-buttons"]},o.a.createElement("div",{className:s.a.browserFrame__button+" "+s.a["browserFrame__button--red"]}),o.a.createElement("div",{className:s.a.browserFrame__button+" "+s.a["browserFrame__button--yellow"]}),o.a.createElement("div",{className:s.a.browserFrame__button+" "+s.a["browserFrame__button--green"]})),t&&o.a.createElement("div",{className:s.a.browserFrame__address,"aria-hidden":!0},t),b&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:s.a.browserFrame__burger},o.a.createElement("span",{className:s.a["browserFrame__burger-line"]}),o.a.createElement("span",{className:s.a["browserFrame__burger-line"]}),o.a.createElement("span",{className:s.a["browserFrame__burger-line"]})))),o.a.createElement("div",{className:"browser-frame__body",style:Object.assign({padding:r||"initial",overflow:"hidden",borderBottomLeftRadius:3,borderBottomRightRadius:3},c)},a))}},146:function(e,t,r){e.exports={browserFrame:"browserFrame_RJub",browserFrame__top:"browserFrame__top_apBY","browserFrame__top-buttons":"browserFrame__top-buttons_6OPJ","browserFrame--bottom-crop":"browserFrame--bottom-crop_EWnX",browserFrame__button:"browserFrame__button_2ZAL","browserFrame__button--red":"browserFrame__button--red_MDH7","browserFrame__button--yellow":"browserFrame__button--yellow_1aaS","browserFrame__button--green":"browserFrame__button--green_2GZS",browserFrame__address:"browserFrame__address_3c9i",browserFrame__burger:"browserFrame__burger_gC35","browserFrame__burger-line":"browserFrame__burger-line_2fPG"}},154:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(136),o=r(0),n=r(148),s=r(317),u=r(315),i=r(150),c=r(307),l=r(147),b=Object(c.a)((function(e,t){var r,a=Object(l.a)(e),o={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(r={},r[i.c]={borderColor:"Highlight",color:"Highlight"},r)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(i.h)(a,o,t)})),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(a.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,r=e.theme;return o.createElement(n.a,Object(a.a)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:b(r,t),onRenderDescription:s.a}))},t=Object(a.b)([Object(u.a)("ActionButton",["theme","styles"],!0)],t)}(o.Component)},40:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var a=r(3),o=r(8),n=(r(0),r(138)),s=r(154),u=r(318),i={},c={unversionedId:"setup/budget/budgets-csv",id:"setup/budget/budgets-csv",isDocsHomePage:!1,title:"budgets-csv",description:"To upload your budget:",source:"@site/docs/setup/budget/budgets-csv.mdx",slug:"/setup/budget/budgets-csv",permalink:"/setup/budget/budgets-csv",version:"current"},l=[],b={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"To upload your budget:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget/budgets"},"Go to tab 'Budget'"),"."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)(s.a,{mdxType:"ActionButton"}," 'Upload' ")),Object(n.b)("li",{parentName:"ol"},"A window will pop-up at the right side of your screen"),Object(n.b)("li",{parentName:"ol"},"Select the budget version for wich you want to upload your budget"),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)(s.a,{mdxType:"ActionButton"}," 'Upload' ")),Object(n.b)("li",{parentName:"ol"},"Make sure the field Budget Account is completed for all rows. If this is not the case the Budget Account in your CSV-file was incorrect."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)(u.a,{mdxType:"PrimaryButton"}," Save "))))}d.isMDXComponent=!0},44:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),o=r(8),n=(r(0),r(138)),s=r(318),u={},i={unversionedId:"setup/budget/budgets-ui",id:"setup/budget/budgets-ui",isDocsHomePage:!1,title:"budgets-ui",description:"1. Select your budget version",source:"@site/docs/setup/budget/budgets-ui.mdx",slug:"/setup/budget/budgets-ui",permalink:"/setup/budget/budgets-ui",version:"current"},c=[],l={toc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Select your budget version"),Object(n.b)("li",{parentName:"ol"},"Set a period range"),Object(n.b)("li",{parentName:"ol"},"All budget accounts are automatically filled in with 0 values per month. Adjust the numbers to your preference."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)(s.a,{mdxType:"PrimaryButton"}," Save "))))}b.isMDXComponent=!0},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return m})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return g})),r.d(t,"default",(function(){return _}));var a,o=r(3),n=r(8),s=(r(0),r(138)),u=r(141),i=r(142),c=r(145),l=r.p+"assets/images/budgets-view-aeabe869d0a5dbba3c6d2c1143d7d1c4.png",b=r(40),d=r(44),m={id:"budgets",title:"Budgets",slug:"../budgets"},p={unversionedId:"setup/budget/budgets",id:"setup/budget/budgets",isDocsHomePage:!1,title:"Budgets",description:"You can manage different versions of your budget via Monitr (see Budget Versions).",source:"@site/docs/setup/budget/budgets.mdx",slug:"/setup/budgets",permalink:"/setup/budgets",version:"current",sidebar:"main",previous:{title:"Budget accounts",permalink:"/setup/budget-accounts"},next:{title:"Validations",permalink:"/validations/validations"}},g=[],f=(a="MessageBar",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),v={toc:g};function _(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},v,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You can manage different versions of your budget via Monitr (",Object(s.b)("a",{parentName:"p",href:"./budget-versions"},"see Budget Versions"),").\nUse the droplist 'Budget Version' to select the budget you want to display or change.\nIn this droplist you can also create a new budget version by clicking '+ new budget version'. "),Object(s.b)(f,{mdxType:"MessageBar"},"If you have created a new budget version via '+ new budget version' on this page, don't forget to set it as an 'initial' or 'active' budget on the 'budget verions' page"),Object(s.b)("p",null,"We recommend to upload your budget as a CSV file, but you can also manage your budget mannually in our user interface."),Object(s.b)(c.a,{mdxType:"BrowserFrame"},Object(s.b)("img",{src:l})),Object(s.b)(u.a,{defaultValue:"ui",values:[{label:"Via User Interface",value:"ui"},{label:"Via CSV",value:"csv"}],mdxType:"Tabs"},Object(s.b)(i.a,{value:"csv",mdxType:"TabItem"},Object(s.b)(b.default,{mdxType:"BudgetTabCSV"})),Object(s.b)(i.a,{value:"ui",mdxType:"TabItem"},Object(s.b)(d.default,{mdxType:"BudgetTabUI"}))))}_.isMDXComponent=!0}}]);