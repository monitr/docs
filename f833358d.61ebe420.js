(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{137:function(e,t,o){"use strict";function r(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=r(e[t]))&&(n&&(n+=" "),n+=o);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},138:function(e,t,o){"use strict";var r=o(0),n=o.n(r),a=o(141),c=o(137),l=o(105),u=o.n(l),i=37,s=39;t.a=function(e){var t=e.lazy,o=e.block,l=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(a.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(r.useState)(l),k=f[0],y=f[1],B=r.Children.toArray(e.children);if(null!=b){var C=h[b];null!=C&&C!==k&&d.some((function(e){return e.value===C}))&&y(C)}var v=function(e){y(e),null!=b&&g(b,e)},O=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":o},p)},d.map((function(e){var t=e.value,o=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":k===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":k===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){!function(e,t,o){switch(o.keyCode){case s:!function(e,t){var o=e.indexOf(t)+1;e[o]?e[o].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var o=e.indexOf(t)-1;e[o]?e[o].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},o)}))),t?Object(r.cloneElement)(B.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},B.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},139:function(e,t,o){"use strict";var r=o(3),n=o(0),a=o.n(n);t.a=function(e){var t=e.children,o=e.hidden,n=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:o,className:n}),t)}},141:function(e,t,o){"use strict";var r=o(0),n=o(142);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},142:function(e,t,o){"use strict";var r=o(0),n=Object(r.createContext)(void 0);t.a=n},144:function(e,t,o){"use strict";o.d(t,"a",(function(){return h}));var r=o(131),n=o(0),a=o(319),c=o(313),l=o(136),u=o(271),i=o(304),s=o(135),d=o(140),b=o(248);var p=Object(i.a)((function(e,t,o){var n=Object(s.a)(e),a=Object(d.a)(e),c={root:{minWidth:"80px",height:"32px"},label:{fontWeight:u.b.semibold}};return Object(u.h)(n,c,o?function(e){var t,o,n,a,c,l,i,s,d,p=e.palette,m=e.semanticColors;return{root:{backgroundColor:m.primaryButtonBackground,border:"1px solid "+m.primaryButtonBackground,color:m.primaryButtonText,selectors:(t={},t[u.c]=Object(r.a)({color:"Window",backgroundColor:"WindowText",borderColor:"WindowText"},Object(u.o)()),t["."+b.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:p.white}}},t)},rootHovered:{backgroundColor:m.primaryButtonBackgroundHovered,border:"1px solid "+m.primaryButtonBackgroundHovered,color:m.primaryButtonTextHovered,selectors:(o={},o[u.c]={color:"Window",backgroundColor:"Highlight",borderColor:"Highlight"},o)},rootPressed:{backgroundColor:m.primaryButtonBackgroundPressed,border:"1px solid "+m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed,selectors:(n={},n[u.c]=Object(r.a)({color:"Window",backgroundColor:"WindowText",borderColor:"WindowText"},Object(u.o)()),n)},rootExpanded:{backgroundColor:m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed},rootChecked:{backgroundColor:m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed},rootDisabled:{color:m.primaryButtonTextDisabled,backgroundColor:m.primaryButtonBackgroundDisabled,selectors:(a={},a[u.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},a)},splitButtonContainer:{selectors:(c={},c[u.c]={border:"none"},c)},splitButtonDivider:Object(r.a)(Object(r.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:p.white,selectors:(l={},l[u.c]={backgroundColor:"Window"},l)}),splitButtonMenuButton:{backgroundColor:m.primaryButtonBackground,color:m.primaryButtonText,selectors:(i={},i[u.c]={backgroundColor:"WindowText"},i[":hover"]={backgroundColor:m.primaryButtonBackgroundHovered,selectors:(s={},s[u.c]={color:"Highlight"},s)},i)},splitButtonMenuButtonDisabled:{backgroundColor:m.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:m.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:m.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:m.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:m.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:m.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:m.primaryButtonText},splitButtonMenuIconDisabled:{color:p.neutralTertiary,selectors:(d={},d[u.c]={color:"GrayText"},d)}}}(e):function(e){var t,o,n,a,c,l=e.semanticColors,i=e.palette,s=l.buttonBackground,d=l.buttonBackgroundPressed,b=l.buttonBackgroundHovered,p=l.buttonBackgroundDisabled,m=l.buttonText,h=l.buttonTextHovered,g=l.buttonTextDisabled,f=l.buttonTextChecked,k=l.buttonTextCheckedHovered;return{root:{backgroundColor:s,color:m},rootHovered:{backgroundColor:b,color:h,selectors:(t={},t[u.c]={borderColor:"Highlight",color:"Highlight"},t)},rootPressed:{backgroundColor:d,color:f},rootExpanded:{backgroundColor:d,color:f},rootChecked:{backgroundColor:d,color:f},rootCheckedHovered:{backgroundColor:d,color:k},rootDisabled:{color:g,backgroundColor:p,selectors:(o={},o[u.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},o)},splitButtonContainer:{selectors:(n={},n[u.c]={border:"none"},n)},splitButtonMenuButton:{color:i.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:i.neutralLight,selectors:(a={},a[u.c]={color:"Highlight"},a)}}},splitButtonMenuButtonDisabled:{backgroundColor:l.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:l.buttonBackgroundDisabled}}},splitButtonDivider:Object(r.a)(Object(r.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:i.neutralTertiaryAlt,selectors:(c={},c[u.c]={backgroundColor:"WindowText"},c)}),splitButtonDividerDisabled:{backgroundColor:e.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:i.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:i.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:i.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:i.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:l.buttonText},splitButtonMenuIconDisabled:{color:l.buttonTextDisabled}}}(e),a,t)})),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.primary,o=void 0!==t&&t,c=e.styles,u=e.theme;return n.createElement(l.a,Object(r.a)({},this.props,{variantClassName:o?"ms-Button--primary":"ms-Button--default",styles:p(u,c,o),onRenderDescription:a.a}))},t=Object(r.b)([Object(c.a)("DefaultButton",["theme","styles"],!0)],t)}(n.Component),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){return n.createElement(m,Object(r.a)({},this.props,{primary:!0,onRenderDescription:a.a}))},t=Object(r.b)([Object(c.a)("PrimaryButton",["theme","styles"],!0)],t)}(n.Component)},156:function(e,t,o){"use strict";o.d(t,"a",(function(){return b}));var r=o(131),n=o(0),a=o(136),c=o(319),l=o(313),u=o(271),i=o(304),s=o(135),d=Object(i.a)((function(e,t){var o,r=Object(s.a)(e),n={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(o={},o[u.c]={borderColor:"Highlight",color:"Highlight"},o)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(u.h)(r,n,t)})),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,o=e.theme;return n.createElement(a.a,Object(r.a)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:d(o,t),onRenderDescription:c.a}))},t=Object(r.b)([Object(l.a)("ActionButton",["theme","styles"],!0)],t)}(n.Component)},50:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(8),a=(o(0),o(133)),c=o(316),l=o(156),u=o(144),i=(o(138),o(139),{}),s={unversionedId:"setup/budget/budget-accounts-csv",id:"setup/budget/budget-accounts-csv",isDocsHomePage:!1,title:"budget-accounts-csv",description:"You can either upload a pre-defined template (such as this file) or use tabsheet 'Budget Accounts' our google sheets template to define your Cash flow statement.",source:"@site/docs/setup/budget/budget-accounts-csv.mdx",slug:"/setup/budget/budget-accounts-csv",permalink:"/setup/budget/budget-accounts-csv",version:"current"},d=[{value:"Definition",id:"definition",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Upload your template",id:"upload-your-template",children:[]}],b={toc:d};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can either upload a pre-defined template (such as this file) or use tabsheet 'Budget Accounts' our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./template"}),"google sheets template")," to define your Cash flow statement."),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"Complete the folowing fields in the template"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Name ","[string]",": This is a unique name"),Object(a.b)("li",{parentName:"ul"},"Mapping ","[string]",": The Account Mapping Name of the Mapping to which the Budget Account is linked. Used to link the Budgets to the Balance Sheet and Profit & Loss statement.")),Object(a.b)("h2",{id:"validation"},"Validation"),Object(a.b)("p",null,"Make sure these validations rules are respected:   "),Object(a.b)(c.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Name of the Budget Account should be unique ",Object(a.b)("br",null),Object(a.b)(c.a,{iconName:"SkypeCheck",mdxType:"Icon"})," A mapping to a reporting line needs to be made in Reporting ID ",Object(a.b)("br",null),Object(a.b)("h2",{id:"upload-your-template"},"Upload your template"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure the status of all validation rules in the tabsheet 'Budget Accounts' of the template is 'TRUE'."),Object(a.b)("li",{parentName:"ol"},"Copy the definition (columns with a dark blue header) in to a csv file and save it on your computer."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/budget"}),"Go to tab 'Reporting' - 'Budget Accounts'"),"."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)(l.a,{mdxType:"ActionButton"},"Upload")),Object(a.b)("li",{parentName:"ol"},"Browse to the CSV file on your computer and select and click 'Open'."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)(u.a,{mdxType:"PrimaryButton"},"Save")),Object(a.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(a.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(a.b)(u.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")))}p.isMDXComponent=!0}}]);