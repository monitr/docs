(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{129:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},131:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=n(133),r=n(129),i=n(101),u=n.n(i),s=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.children,d=e.defaultValue,b=e.values,f=e.groupId,p=e.className,m=Object(c.a)(),v=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(a.useState)(d),O=g[0],j=g[1];if(null!=f){var y=v[f];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&j(y)}var k=function(e){j(e),null!=f&&h(f,e)},w=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",u.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(i.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},i.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},132:function(e,t,n){"use strict";var a=n(3),o=n(0),c=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},133:function(e,t,n){"use strict";var a=n(0),o=n(134);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},134:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},43:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(8),c=(n(0),n(128)),r=n(296),i=n(295),u=(n(131),n(132),{}),s={unversionedId:"setup/budget/budget-accounts-ui",id:"setup/budget/budget-accounts-ui",isDocsHomePage:!1,title:"budget-accounts-ui",description:"To create a Budget Accounts via the Monitr user interface:",source:"@site/docs/setup/budget/budget-accounts-ui.mdx",slug:"/setup/budget/budget-accounts-ui",permalink:"/setup/budget/budget-accounts-ui",version:"current"},l=[{value:"Validation",id:"validation",children:[]}],d={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"To create a Budget Accounts via the Monitr user interface:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget"}),"Go to tab 'Budget Accounts'"),"."),Object(c.b)("li",{parentName:"ol"},"Add rows by clicking '",Object(c.b)(r.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'"),Object(c.b)("li",{parentName:"ol"},"Give the Budget Accounts a name link it to a Mapping"),Object(c.b)("li",{parentName:"ol"},"Repeat this untill you have made the Budget Accounts you need\n. Click ",Object(c.b)(i.a,{mdxType:"PrimaryButton"},"Save")),Object(c.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your data will not be saved."),Object(c.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(c.b)(i.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(c.b)("h2",{id:"validation"},"Validation"),Object(c.b)("p",null,"The following validation checks are performed:"),Object(c.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The name of the Budget Account should be unique")}b.isMDXComponent=!0}}]);