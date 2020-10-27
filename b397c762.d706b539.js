(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{119:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},121:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(123),i=n(119),c=n(94),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,d=e.groupId,f=e.className,p=Object(r.a)(),m=p.tabGroupChoices,h=p.setTabGroupChoices,v=Object(a.useState)(c),w=v[0],y=v[1],O=Object(a.useState)(!1),j=O[0],g=O[1];if(null!=d){var k=m[d];null!=k&&k!==w&&b.some((function(e){return e.value===k}))&&y(k)}var C=function(e){y(e),null!=d&&h(d,e)},N=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},x=function(){g(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",x)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},f)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),T(e)},onFocus:function(){return C(t)},onClick:function(){C(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===w}))[0]))}},122:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},123:function(e,t,n){"use strict";var a=n(0),o=n(124);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},124:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},37:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(7),r=(n(0),n(118)),i=n(286),c=n(285),l=(n(121),n(122),{}),u={unversionedId:"setup/reporting/cash-flow-ui",id:"setup/reporting/cash-flow-ui",isDocsHomePage:!1,title:"cash-flow-ui",description:"To create a Cash flow statement via de Monitr user interface:",source:"@site/docs/setup/reporting/cash-flow-ui.mdx",slug:"/setup/reporting/cash-flow-ui",permalink:"/setup/reporting/cash-flow-ui",version:"current"},s=[{value:"Validation",id:"validation",children:[]}],b={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To create a Cash flow statement via de Monitr user interface:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),"."),Object(r.b)("li",{parentName:"ol"},"Add rows by clicking '",Object(r.b)(i.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"To insert a row at a specific place select the row above where you want to insert the row (a checkmark will be visible)"),Object(r.b)("li",{parentName:"ol"},"Click '",Object(r.b)(i.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'"))),Object(r.b)("li",{parentName:"ol"},"Give the cash flow reporting line a name and if required link it to a Parent"),Object(r.b)("li",{parentName:"ol"},"Repeat this untill you have made the Cash flow statement you need"),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)(c.a,{mdxType:"PrimaryButton"},"Save")),Object(r.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(r.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(r.b)(c.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(r.b)("p",null,"To change the ranking of a line in a Cash flow statement you can drag and drop the line you want to move."),Object(r.b)("h2",{id:"validation"},"Validation"),Object(r.b)("p",null,"The following validation checks are performed:"),Object(r.b)(i.a,{iconName:"SkypeCheck",mdxType:"Icon"})," There should not be any circular references made via the 'Parent' fields")}d.isMDXComponent=!0}}]);