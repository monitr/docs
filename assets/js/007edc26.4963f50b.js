(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,r){"use strict";var n=r(0),a=r.n(n),s=r(151),i=r.n(s);t.a=function(e){var t=e.url,r=e.padding,n=e.children,s=e.style,o=e.className,l=e.contentStyle,c=void 0===l?{}:l,m=e.showHamburger,p=void 0!==m&&m;return a.a.createElement("div",{className:i.a.browserFrame+" "+o+" shadow--tl",style:s},a.a.createElement("div",{className:i.a.browserFrame__top},a.a.createElement("div",{className:i.a["browserFrame__top-buttons"]},a.a.createElement("div",{className:i.a.browserFrame__button+" "+i.a["browserFrame__button--red"]}),a.a.createElement("div",{className:i.a.browserFrame__button+" "+i.a["browserFrame__button--yellow"]}),a.a.createElement("div",{className:i.a.browserFrame__button+" "+i.a["browserFrame__button--green"]})),t&&a.a.createElement("div",{className:i.a.browserFrame__address,"aria-hidden":!0},t),p&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:i.a.browserFrame__burger},a.a.createElement("span",{className:i.a["browserFrame__burger-line"]}),a.a.createElement("span",{className:i.a["browserFrame__burger-line"]}),a.a.createElement("span",{className:i.a["browserFrame__burger-line"]})))),a.a.createElement("div",{className:"browser-frame__body",style:Object.assign({padding:r||"initial",overflow:"hidden",borderBottomLeftRadius:3,borderBottomRightRadius:3},c)},n))}},151:function(e,t,r){e.exports={browserFrame:"browserFrame_RJub",browserFrame__top:"browserFrame__top_apBY","browserFrame__top-buttons":"browserFrame__top-buttons_6OPJ","browserFrame--bottom-crop":"browserFrame--bottom-crop_EWnX",browserFrame__button:"browserFrame__button_2ZAL","browserFrame__button--red":"browserFrame__button--red_MDH7","browserFrame__button--yellow":"browserFrame__button--yellow_1aaS","browserFrame__button--green":"browserFrame__button--green_2GZS",browserFrame__address:"browserFrame__address_3c9i",browserFrame__burger:"browserFrame__burger_gC35","browserFrame__burger-line":"browserFrame__burger-line_2fPG"}},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var n,a=r(312),s=r(131),i=r(0),o=r(301),l=r(311),c=r(306),m=r(305),p=r(304),d=function(e){function t(t){var r=e.call(this,t)||this;return r.state={isRendered:!1},r}return Object(s.c)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?i.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(i.Component),u=r(158),b=r(310);!function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(n||(n={}));var g,h,f,_=Object(o.a)(),w=function(e){function t(t){var r,a=e.call(this,t)||this;return a.ICON_MAP=((r={})[n.info]="Info",r[n.warning]="Info",r[n.error]="ErrorBadge",r[n.blocked]="Blocked2",r[n.severeWarning]="Warning",r[n.success]="Completed",r),a._getRegionProps=function(){var e=!!a._getActionsDiv()||!!a._getDismissDiv(),t={"aria-describedby":a.state.labelId,role:"region"};return e?t:{}},a._onClick=function(e){a.setState({expandSingleLine:!a.state.expandSingleLine})},Object(l.a)(a),a.state={labelId:Object(c.a)("MessageBar"),showContent:!1,expandSingleLine:!1},a}return Object(s.c)(t,e),t.prototype.render=function(){var e=this.props.isMultiline;return this._classNames=this._getClassNames(),e?this._renderMultiLine():this._renderSingleLine()},t.prototype._getActionsDiv=function(){return this.props.actions?i.createElement("div",{className:this._classNames.actions},this.props.actions):null},t.prototype._getDismissDiv=function(){var e=this.props,t=e.onDismiss,r=e.dismissIconProps;return t?i.createElement(u.a,{disabled:!1,className:this._classNames.dismissal,onClick:t,iconProps:r||{iconName:"Clear"},title:this.props.dismissButtonAriaLabel,ariaLabel:this.props.dismissButtonAriaLabel}):null},t.prototype._getDismissSingleLine=function(){return this.props.onDismiss?i.createElement("div",{className:this._classNames.dismissSingleLine},this._getDismissDiv()):null},t.prototype._getExpandSingleLine=function(){return!this.props.actions&&this.props.truncated?i.createElement("div",{className:this._classNames.expandSingleLine},i.createElement(u.a,{disabled:!1,className:this._classNames.expand,onClick:this._onClick,iconProps:{iconName:this.state.expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:this.props.overflowButtonAriaLabel,"aria-expanded":this.state.expandSingleLine})):null},t.prototype._getIconSpan=function(){var e=this.props.messageBarIconProps;return i.createElement("div",{className:this._classNames.iconContainer,"aria-hidden":!0},e?i.createElement(b.a,Object(s.a)({},e,{className:Object(m.a)(this._classNames.icon,e.className)})):i.createElement(b.a,{iconName:this.ICON_MAP[this.props.messageBarType],className:this._classNames.icon}))},t.prototype._renderMultiLine=function(){return i.createElement("div",Object(s.a)({className:this._classNames.root},this._getRegionProps()),i.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getDismissDiv()),this._getActionsDiv())},t.prototype._renderSingleLine=function(){return i.createElement("div",Object(s.a)({className:this._classNames.root},this._getRegionProps()),i.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getExpandSingleLine(),this._getActionsDiv(),this._getDismissSingleLine()))},t.prototype._renderInnerText=function(){var e=Object(p.d)(this.props,p.e,["className"]);return i.createElement("div",{className:this._classNames.text,id:this.state.labelId,role:"status","aria-live":this._getAnnouncementPriority()},i.createElement("span",Object(s.a)({className:this._classNames.innerText},e),i.createElement(d,null,i.createElement("span",null,this.props.children))))},t.prototype._getClassNames=function(){var e=this.props,t=e.theme,r=e.className,a=e.messageBarType,s=e.onDismiss,i=e.actions,o=e.truncated,l=e.isMultiline,c=this.state.expandSingleLine;return _(this.props.styles,{theme:t,messageBarType:a||n.info,onDismiss:void 0!==s,actions:void 0!==i,truncated:o,isMultiline:l,expandSingleLine:c,className:r})},t.prototype._getAnnouncementPriority=function(){switch(this.props.messageBarType){case n.blocked:case n.error:case n.severeWarning:return"assertive"}return"polite"},t.defaultProps={messageBarType:n.info,onDismiss:void 0,isMultiline:!0},t}(i.Component),v=r(145),y={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},x=((g={})[n.error]="errorBackground",g[n.blocked]="errorBackground",g[n.success]="successBackground",g[n.warning]="warningBackground",g[n.severeWarning]="severeWarningBackground",g[n.info]="infoBackground",g),O=((h={})[n.error]="rgba(255, 0, 0, 0.3)",h[n.blocked]="rgba(255, 0, 0, 0.3)",h[n.success]="rgba(48, 241, 73, 0.3)",h[n.warning]="rgba(255, 254, 57, 0.3)",h[n.severeWarning]="rgba(255, 0, 0, 0.3)",h[n.info]="Window",h),j=((f={})[n.error]="errorIcon",f[n.blocked]="errorIcon",f[n.success]="successIcon",f[n.warning]="warningIcon",f[n.severeWarning]="severeWarningIcon",f[n.info]="infoIcon",f),N=Object(a.a)(w,(function(e){var t,r,a,i,o,l=e.theme,c=e.className,m=e.onDismiss,p=e.truncated,d=e.isMultiline,u=e.expandSingleLine,b=e.messageBarType,g=void 0===b?n.info:b,h=l.semanticColors,f=l.fonts,_=Object(v.p)(0,v.f),w=Object(v.m)(y,l),N={fontSize:v.d.xSmall,height:10,lineHeight:"10px",color:h.messageText,selectors:(t={},t[v.c]=Object(s.a)(Object(s.a)({},Object(v.n)()),{color:"WindowText"}),t)},S=[Object(v.l)(l,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":N,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[w.root,f.medium,g===n.error&&w.error,g===n.blocked&&w.blocked,g===n.severeWarning&&w.severeWarning,g===n.success&&w.success,g===n.warning&&w.warning,d?w.multiline:w.singleline,!d&&m&&w.dismissalSingleLine,!d&&p&&w.expandingSingleLine,{background:h[x[g]],color:h.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(r={".ms-Link":{color:h.messageLink,selectors:{":hover":{color:h.messageLinkHovered}}}},r[v.c]=Object(s.a)(Object(s.a)({},Object(v.n)()),{background:O[g],border:"1px solid WindowText",color:"WindowText"}),r)},d&&{flexDirection:"column"},c],content:[w.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[w.iconContainer,{fontSize:v.d.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:h[j[g]],selectors:(a={},a[v.c]=Object(s.a)(Object(s.a)({},Object(v.n)()),{color:"WindowText"}),a)},text:[w.text,Object(s.a)(Object(s.a)({minWidth:0,display:"flex",flexGrow:1,margin:8},f.small),{selectors:(i={},i[v.c]=Object(s.a)({},Object(v.n)()),i)}),!m&&{marginRight:12}],innerText:[w.innerText,{lineHeight:16,selectors:{"& span a":{paddingLeft:4}}},p&&{overflow:"visible",whiteSpace:"pre-wrap"},!d&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!d&&!p&&{selectors:(o={},o[_]={overflow:"visible",whiteSpace:"pre-wrap"},o)},u&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:w.dismissSingleLine,expandSingleLine:w.expandSingleLine,dismissal:[w.dismissal,S],expand:[w.expand,S],actions:[d?w.actions:w.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},d&&{marginBottom:8},m&&!d&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(131),a=r(0),s=r(136),i=r(313),o=r(307),l=r(145),c=r(299),m=r(135),p=r(141),d=Object(c.a)((function(e,t){var r,n=Object(m.a)(e),a=Object(p.a)(e),s=e.palette,i={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:e.semanticColors.link},rootHovered:{color:s.themeDarkAlt,backgroundColor:s.neutralLighter,selectors:(r={},r[l.c]={borderColor:"Highlight",color:"Highlight"},r)},rootHasMenu:{width:"auto"},rootPressed:{color:s.themeDark,backgroundColor:s.neutralLight},rootExpanded:{color:s.themeDark,backgroundColor:s.neutralLight},rootChecked:{color:s.themeDark,backgroundColor:s.neutralLight},rootCheckedHovered:{color:s.themeDark,backgroundColor:s.neutralQuaternaryAlt},rootDisabled:{color:s.neutralTertiaryAlt}};return Object(l.h)(n,i,a,t)})),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(n.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,r=e.theme;return a.createElement(s.a,Object(n.a)({},this.props,{variantClassName:"ms-Button--icon",styles:d(r,t),onRenderText:i.a,onRenderDescription:i.a}))},t=Object(n.b)([Object(o.a)("IconButton",["theme","styles"],!0)],t)}(a.Component)},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return g}));var n=r(3),a=r(8),s=(r(0),r(133)),i=r(157),o=r(148),l=r.p+"assets/images/import-save-copy-947d7b2c2f74b736e14ee74ce91ea207.png",c=r.p+"assets/images/monitr-login-api-f2193858a50a9984b8c6495c08e14272.png",m=r.p+"assets/images/monitr-template-structure-25c2c0ff78980188849b8e86f68a0955.png",p={id:"template",title:"Template",slug:"../template"},d={unversionedId:"setup/reporting/template",id:"setup/reporting/template",isDocsHomePage:!1,title:"Template",description:"To speed up your implementation you can use our google sheets template to prepare your reporting.",source:"@site/docs/setup/reporting/template-google-sheet.mdx",slug:"/setup/template",permalink:"/setup/template",version:"current",sidebar:"main",previous:{title:"Teams & Entities",permalink:"/team-management"}},u=[{value:"Create your personal copy",id:"create-your-personal-copy",children:[]},{value:"Start building your reports",id:"start-building-your-reports",children:[]},{value:"Structure of the template",id:"structure-of-the-template",children:[]}],b={toc:u};function g(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"To speed up your implementation you can use our google sheets template to prepare your reporting."),Object(s.b)("h2",{id:"create-your-personal-copy"},"Create your personal copy"),Object(s.b)("p",null,"In order to get your copy of the templateg go to the ",Object(s.b)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1Uy2wde2TQJM6RHmlAn2KHVc1D6ABBhiCHJFR631Ors8/edit#gid=967632221"},"template"),"\nand Make a copy of the file by clicking 'File' and then 'Save a copy'."),Object(s.b)(i.a,{mdxType:"MessageBar"},"Make a copy of the google sheets to avoid exposing your credentials"),Object(s.b)("br",null),Object(s.b)(o.a,{mdxType:"BrowserFrame"},Object(s.b)("img",{src:l})),Object(s.b)("h2",{id:"start-building-your-reports"},"Start building your reports"),Object(s.b)("p",null,"After you made your personal copy of the file enter your emailadres, password and select the entity that you want to build a reporting for."),Object(s.b)(o.a,{mdxType:"BrowserFrame"},Object(s.b)("img",{src:c})),Object(s.b)("h2",{id:"structure-of-the-template"},"Structure of the template"),Object(s.b)("p",null,"The definitions can be made in the the tabsheets that are highlighted in yellow.\nEach tabsheet is constructed in a similar manner with:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The definition: this is the part that needs to be saved as a CSV file to be uploaded into Monitr."),Object(s.b)("li",{parentName:"ul"},"Extra information: fields that help you creating your definition."),Object(s.b)("li",{parentName:"ul"},"Detailed validations: Validations rules applied to each row of your definition, to avoid having errors when uploading your CSV file into Monitr."),Object(s.b)("li",{parentName:"ul"},"Validation Summary: This gives an overview of the status of each validation (out of the detailed validation). A brief summary of the validation rule is given.",Object(s.b)(o.a,{mdxType:"BrowserFrame"},Object(s.b)("img",{src:m})))),Object(s.b)("p",null,"More information on how to create the defition for each tabsheet can be found here:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./cash-flow"},"Cash flow")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./pl-bs"},"Reporting")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./mapping"},"Mapping")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./budget-versions"},"Budget versions")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./budget-accounts"},"Budget accounts")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"./budgets"},"Budgets"))))}g.isMDXComponent=!0}}]);