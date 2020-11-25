(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{129:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},131:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(133),i=n(129),c=n(101),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,d=e.defaultValue,b=e.values,p=e.groupId,m=e.className,h=Object(r.a)(),f=h.tabGroupChoices,g=h.setTabGroupChoices,v=Object(o.useState)(d),O=v[0],j=v[1];if(null!=p){var y=f[p];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&j(y)}var k=function(e){j(e),null!=p&&g(p,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(o.cloneElement)(c.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},132:function(e,t,n){"use strict";var o=n(3),a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},133:function(e,t,n){"use strict";var o=n(0),a=n(134);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},134:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o=n(126),a=n(0),r=n(136),i=n(299),c=n(292),l=n(137),u=n(284),s=n(135),d=Object(u.a)((function(e,t){var n,o=Object(s.a)(e),a={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(n={},n[l.c]={borderColor:"Highlight",color:"Highlight"},n)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(l.h)(o,a,t)})),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return a.createElement(r.a,Object(o.a)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:d(n,t),onRenderDescription:i.a}))},t=Object(o.b)([Object(c.a)("ActionButton",["theme","styles"],!0)],t)}(a.Component)},47:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(128)),i=n(296),c=n(151),l=n(295),u=(n(131),n(132),{}),s={unversionedId:"setup/budget/budget-accounts-csv",id:"setup/budget/budget-accounts-csv",isDocsHomePage:!1,title:"budget-accounts-csv",description:"You can either upload a pre-defined template (such as this file) or use tabsheet 'Budget Accounts' our google sheets template to define your Cash flow statement.",source:"@site/docs/setup/budget/budget-accounts-csv.mdx",slug:"/setup/budget/budget-accounts-csv",permalink:"/setup/budget/budget-accounts-csv",version:"current"},d=[{value:"Definition",id:"definition",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Upload your template",id:"upload-your-template",children:[]}],b={rightToc:d};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can either upload a pre-defined template (such as this file) or use tabsheet 'Budget Accounts' our ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"./template"}),"google sheets template")," to define your Cash flow statement."),Object(r.b)("h2",{id:"definition"},"Definition"),Object(r.b)("p",null,"Complete the folowing fields in the template"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Name ","[string]",": This is a unique name"),Object(r.b)("li",{parentName:"ul"},"Mapping ","[string]",": The Account Mapping Name of the Mapping to which the Budget Account is linked. Used to link the Budgets to the Balance Sheet and Profit & Loss statement.")),Object(r.b)("h2",{id:"validation"},"Validation"),Object(r.b)("p",null,"Make sure these validations rules are respected:   "),Object(r.b)(i.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Name of the Budget Account should be unique ",Object(r.b)("br",null),Object(r.b)(i.a,{iconName:"SkypeCheck",mdxType:"Icon"})," A mapping to a reporting line needs to be made in Reporting ID ",Object(r.b)("br",null),Object(r.b)("h2",{id:"upload-your-template"},"Upload your template"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Make sure the status of all validation rules in the tabsheet 'Budget Accounts' of the template is 'TRUE'."),Object(r.b)("li",{parentName:"ol"},"Copy the definition (columns with a dark blue header) in to a csv file and save it on your computer."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget"}),"Go to tab 'Reporting' - 'Budget Accounts'"),"."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)(c.a,{mdxType:"ActionButton"},"Upload")),Object(r.b)("li",{parentName:"ol"},"Browse to the CSV file on your computer and select and click 'Open'."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)(l.a,{mdxType:"PrimaryButton"},"Save")),Object(r.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(r.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(r.b)(l.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")))}p.isMDXComponent=!0}}]);