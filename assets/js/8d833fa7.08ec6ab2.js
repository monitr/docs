(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{139:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},141:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(143),i=a(139),c=a(110),s=a.n(c),u=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,b=e.values,d=e.groupId,m=e.className,p=Object(o.a)(),f=p.tabGroupChoices,w=p.setTabGroupChoices,g=Object(n.useState)(c),h=g[0],y=g[1],_=n.Children.toArray(e.children);if(null!=d){var j=f[d];null!=j&&j!==h&&b.some((function(e){return e.value===j}))&&y(j)}var v=function(e){y(e),null!=d&&w(d,e)},O=[];return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},a)}))),t?Object(n.cloneElement)(_.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},143:function(e,t,a){"use strict";var n=a(0),r=a(144);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},144:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(146),i=a.n(o);t.a=function(e){var t=e.url,a=e.padding,n=e.children,o=e.style,c=e.className,s=e.contentStyle,u=void 0===s?{}:s,l=e.showHamburger,b=void 0!==l&&l;return r.a.createElement("div",{className:i.a.browserFrame+" "+c+" shadow--tl",style:o},r.a.createElement("div",{className:i.a.browserFrame__top},r.a.createElement("div",{className:i.a["browserFrame__top-buttons"]},r.a.createElement("div",{className:i.a.browserFrame__button+" "+i.a["browserFrame__button--red"]}),r.a.createElement("div",{className:i.a.browserFrame__button+" "+i.a["browserFrame__button--yellow"]}),r.a.createElement("div",{className:i.a.browserFrame__button+" "+i.a["browserFrame__button--green"]})),t&&r.a.createElement("div",{className:i.a.browserFrame__address,"aria-hidden":!0},t),b&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.browserFrame__burger},r.a.createElement("span",{className:i.a["browserFrame__burger-line"]}),r.a.createElement("span",{className:i.a["browserFrame__burger-line"]}),r.a.createElement("span",{className:i.a["browserFrame__burger-line"]})))),r.a.createElement("div",{className:"browser-frame__body",style:Object.assign({padding:a||"initial",overflow:"hidden",borderBottomLeftRadius:3,borderBottomRightRadius:3},u)},n))}},146:function(e,t,a){e.exports={browserFrame:"browserFrame_RJub",browserFrame__top:"browserFrame__top_apBY","browserFrame__top-buttons":"browserFrame__top-buttons_6OPJ","browserFrame--bottom-crop":"browserFrame--bottom-crop_EWnX",browserFrame__button:"browserFrame__button_2ZAL","browserFrame__button--red":"browserFrame__button--red_MDH7","browserFrame__button--yellow":"browserFrame__button--yellow_1aaS","browserFrame__button--green":"browserFrame__button--green_2GZS",browserFrame__address:"browserFrame__address_3c9i",browserFrame__burger:"browserFrame__burger_gC35","browserFrame__burger-line":"browserFrame__burger-line_2fPG"}},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return w}));var n=a(3),r=a(8),o=(a(0),a(138)),i=(a(141),a(142),a(318)),c=a(145),s=a.p+"assets/images/nwc-unwinding-step1-938182d871583c5658fef409627d9bfe.jpg",u=a.p+"assets/images/nwc-unwinding-step2-ccbdc95b89fdc6d3e18faff3019b8ead.jpg",l=a.p+"assets/images/nwc-unwinding-step3-7ff6ec86ba45655d421b66c3cb70fb3a.jpg",b=a.p+"assets/images/nwc-unwinding-step4-88fcbe232d54f004d40698648612aacc.jpg",d={id:"net-working-capital-unwinding",title:"Net working capital unwinding",slug:"../automated-forecast-NWC-unwinding"},m={unversionedId:"automated-forecast/nwc-unwinding/net-working-capital-unwinding",id:"automated-forecast/nwc-unwinding/net-working-capital-unwinding",isDocsHomePage:!1,title:"Net working capital unwinding",description:"Monitr allows you to automate your forecasts thanks to API integrations and calculation modules.",source:"@site/docs/automated-forecast/nwc-unwinding/automated-forecast-NWC-unwinding.mdx",slug:"/automated-forecast/automated-forecast-NWC-unwinding",permalink:"/automated-forecast/automated-forecast-NWC-unwinding",version:"current",sidebar:"main",previous:{title:"Introduction",permalink:"/automated-forecast"},next:{title:"Net working capital budget",permalink:"/automated-forecast/automated-forecast-NWC-budget"}},p=[{value:"Creating a new automated forecast",id:"creating-a-new-automated-forecast",children:[]}],f={toc:p};function w(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Monitr allows you to automate your forecasts thanks to API integrations and calculation modules.\nAutomated forecasts can be created from the ",Object(o.b)("a",{parentName:"p",href:"/setup/budget-versions"},"Budget Versions page "),"."),Object(o.b)("p",null,"With the automated forecast 'net working capital unwinding' you can forecast the cash flows related to your outstanding customer - and supplier balances. "),Object(o.b)("h2",{id:"creating-a-new-automated-forecast"},"Creating a new automated forecast"),Object(o.b)("p",null,"Before you can use this forecast need have setup budget accounts linked to your accounts payable en accounts receivable in your reporting.\nWe will use these accounts include the expected unwinding of your open balances in your cash flow forecast."),Object(o.b)("p",null,"E.g. we have created a Budget account 'AP' that is linked to mapping '440000' which is the general ledger account used for my accounts payable in my accounting. And Budget account 'AR' that is linked to mapping '400000' that is linked the general ledger account of my accounts receivable."),Object(o.b)("p",null,"Once you have created these budget accounts you need to indicate which Budget accounts you want to use for the automated forecast:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget/settings/nwc"},"In the settings"),"; or"),Object(o.b)("li",{parentName:"ol"},"In the first step of the wizard, as discussed below.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to tab ",Object(o.b)("a",{parentName:"li",href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget/versions"},"'budget versions'")),Object(o.b)("li",{parentName:"ul"},"Click '+  New budget version' > 'Automation' > 'net working capital unwinding'"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Step 1: Settings"),Object(o.b)(c.a,{mdxType:"BrowserFrame"}," ",Object(o.b)("img",{src:s}))),Object(o.b)("li",{parentName:"ul"},"Make sure that a budget account is linked for both 'Accounts Receivable' and 'Accounts Payable'. Make sure to click 'save' if you made changes."),Object(o.b)("li",{parentName:"ul"},"Use the checkmarks to indicate if you want to forecast the unwinding of your accounts receivable, accounts payable or both."),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)(i.a,{mdxType:"PrimaryButton"},"Next")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Step 2: Options"),Object(o.b)(c.a,{mdxType:"BrowserFrame"}," ",Object(o.b)("img",{src:u}))),Object(o.b)("li",{parentName:"ul"},"Select the reference date. Select the month as of when you want to forecast. e.g. if I select Feyar buildbruary 2021 I will start a forecast as of February 2021 using the open balances per 31/01/2021."),Object(o.b)("li",{parentName:"ul"},"A namefor your budget version is generated automatically, but you can change it."),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)(i.a,{mdxType:"PrimaryButton"},"Next")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Step 3: Custom Due Dates")),Object(o.b)("li",{parentName:"ul"},Object(o.b)(c.a,{mdxType:"BrowserFrame"}," ",Object(o.b)("img",{src:l}))),Object(o.b)("li",{parentName:"ul"},"All invoices that are oper for the selected reference date are displayed per supplier / customer. The due date indicated is the due date of the invoice. If an invoice is over due, this date will automatically be changed to the 7th day of the reference month selected in step 2."),Object(o.b)("li",{parentName:"ul"},"Review the due dates: By using the date picker next to a certain invoice, you can change te due date used in the cash flow forecast. This 'custom due date' will be stored and will be completed automatically next time you use the automated forecast 'net working capital unwinding'"),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)(i.a,{mdxType:"PrimaryButton"},"Next")),Object(o.b)("li",{parentName:"ul"},"Depending on your selection in Step 1 you will have to do this for accounts receivable, accounts payable or both."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Step 4: Summary"),Object(o.b)(c.a,{mdxType:"BrowserFrame"}," ",Object(o.b)("img",{src:b}))),Object(o.b)("li",{parentName:"ul"},"A summary of the expected cash flow is shown"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)(i.a,{mdxType:"PrimaryButton"},"Finish")," to save the budget version."))),Object(o.b)("li",{parentName:"ul"},"Adjust column 'Initial' and 'Active'."),Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)(i.a,{mdxType:"PrimaryButton"},"Save"))))}w.isMDXComponent=!0}}]);