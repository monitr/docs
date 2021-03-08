(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{139:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},141:function(e,t,n){"use strict";var a=n(0),o=n.n(a),c=n(143),r=n(139),i=n(110),u=n.n(i),s=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,b=e.groupId,f=e.className,m=Object(c.a)(),p=m.tabGroupChoices,v=m.setTabGroupChoices,h=Object(a.useState)(i),g=h[0],O=h[1],j=a.Children.toArray(e.children);if(null!=b){var y=p[b];null!=y&&y!==g&&d.some((function(e){return e.value===y}))&&O(y)}var k=function(e){O(e),null!=b&&v(b,e)},N=[];return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(r.a)("tabs__item",u.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},142:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},143:function(e,t,n){"use strict";var a=n(0),o=n(144);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},144:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},46:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(8),c=(n(0),n(138)),r=n(322),i=n(318),u=(n(141),n(142),{}),s={unversionedId:"setup/budget/budget-accounts-ui",id:"setup/budget/budget-accounts-ui",isDocsHomePage:!1,title:"budget-accounts-ui",description:"To create a Budget Accounts via the Monitr user interface:",source:"@site/docs/setup/budget/budget-accounts-ui.mdx",slug:"/setup/budget/budget-accounts-ui",permalink:"/setup/budget/budget-accounts-ui",version:"current"},l=[{value:"Validation",id:"validation",children:[]}],d={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"To create a Budget Accounts via the Monitr user interface:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget/accounts"},"Go to tab 'Budget Accounts'"),"."),Object(c.b)("li",{parentName:"ol"},"Add rows by clicking '",Object(c.b)(r.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'"),Object(c.b)("li",{parentName:"ol"},"Give the Budget Accounts a name link it to a Mapping"),Object(c.b)("li",{parentName:"ol"},"Repeat this untill you have made the Budget Accounts you need\n. Click ",Object(c.b)(i.a,{mdxType:"PrimaryButton"},"Save")),Object(c.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your data will not be saved."),Object(c.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(c.b)(i.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(c.b)("h2",{id:"validation"},"Validation"),Object(c.b)("p",null,"The following validation checks are performed:"),Object(c.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The name of the Budget Account should be unique")}b.isMDXComponent=!0}}]);