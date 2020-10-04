(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,20],{106:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},107:function(e,t,n){"use strict";var r=n(0),a=n(106);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,n){e.exports={browserFrame:"browserFrame_2eVs",browserFrame__top:"browserFrame__top_aniL","browserFrame__top-buttons":"browserFrame__top-buttons_1iPK","browserFrame--bottom-crop":"browserFrame--bottom-crop_1hrj",browserFrame__button:"browserFrame__button_1BuC","browserFrame__button--red":"browserFrame__button--red_1mbZ","browserFrame__button--yellow":"browserFrame__button--yellow_B5Ne","browserFrame__button--green":"browserFrame__button--green_FPCe",browserFrame__address:"browserFrame__address_2wPQ",browserFrame__burger:"browserFrame__burger__FIw","browserFrame__burger-line":"browserFrame__burger-line_1qnd"}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r,a=n(219),i=n(89),o=n(0),s=n(211),c=n(218),l=n(214),u=n(213),d=n(212),m=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isRendered:!1},n}return Object(i.c)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?o.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(o.Component),p=n(182),g=n(217);!function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(r||(r={}));var b,h,f,v=Object(s.a)(),y=function(e){function t(t){var n,a=e.call(this,t)||this;return a.ICON_MAP=((n={})[r.info]="Info",n[r.warning]="Info",n[r.error]="ErrorBadge",n[r.blocked]="Blocked2",n[r.severeWarning]="Warning",n[r.success]="Completed",n),a._getRegionProps=function(){var e=!!a._getActionsDiv()||!!a._getDismissDiv(),t={"aria-describedby":a.state.labelId,role:"region"};return e?t:{}},a._onClick=function(e){a.setState({expandSingleLine:!a.state.expandSingleLine})},Object(c.a)(a),a.state={labelId:Object(l.a)("MessageBar"),showContent:!1,expandSingleLine:!1},a}return Object(i.c)(t,e),t.prototype.render=function(){var e=this.props.isMultiline;return this._classNames=this._getClassNames(),e?this._renderMultiLine():this._renderSingleLine()},t.prototype._getActionsDiv=function(){return this.props.actions?o.createElement("div",{className:this._classNames.actions},this.props.actions):null},t.prototype._getDismissDiv=function(){var e=this.props,t=e.onDismiss,n=e.dismissIconProps;return t?o.createElement(p.a,{disabled:!1,className:this._classNames.dismissal,onClick:t,iconProps:n||{iconName:"Clear"},title:this.props.dismissButtonAriaLabel,ariaLabel:this.props.dismissButtonAriaLabel}):null},t.prototype._getDismissSingleLine=function(){return this.props.onDismiss?o.createElement("div",{className:this._classNames.dismissSingleLine},this._getDismissDiv()):null},t.prototype._getExpandSingleLine=function(){return!this.props.actions&&this.props.truncated?o.createElement("div",{className:this._classNames.expandSingleLine},o.createElement(p.a,{disabled:!1,className:this._classNames.expand,onClick:this._onClick,iconProps:{iconName:this.state.expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:this.props.overflowButtonAriaLabel,"aria-expanded":this.state.expandSingleLine})):null},t.prototype._getIconSpan=function(){var e=this.props.messageBarIconProps;return o.createElement("div",{className:this._classNames.iconContainer,"aria-hidden":!0},e?o.createElement(g.a,Object(i.a)({},e,{className:Object(u.a)(this._classNames.icon,e.className)})):o.createElement(g.a,{iconName:this.ICON_MAP[this.props.messageBarType],className:this._classNames.icon}))},t.prototype._renderMultiLine=function(){return o.createElement("div",Object(i.a)({className:this._classNames.root},this._getRegionProps()),o.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getDismissDiv()),this._getActionsDiv())},t.prototype._renderSingleLine=function(){return o.createElement("div",Object(i.a)({className:this._classNames.root},this._getRegionProps()),o.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getExpandSingleLine(),this._getActionsDiv(),this._getDismissSingleLine()))},t.prototype._renderInnerText=function(){var e=Object(d.d)(this.props,d.e,["className"]);return o.createElement("div",{className:this._classNames.text,id:this.state.labelId,role:"status","aria-live":this._getAnnouncementPriority()},o.createElement("span",Object(i.a)({className:this._classNames.innerText},e),o.createElement(m,null,o.createElement("span",null,this.props.children))))},t.prototype._getClassNames=function(){var e=this.props,t=e.theme,n=e.className,a=e.messageBarType,i=e.onDismiss,o=e.actions,s=e.truncated,c=e.isMultiline,l=this.state.expandSingleLine;return v(this.props.styles,{theme:t,messageBarType:a||r.info,onDismiss:void 0!==i,actions:void 0!==o,truncated:s,isMultiline:c,expandSingleLine:l,className:n})},t.prototype._getAnnouncementPriority=function(){switch(this.props.messageBarType){case r.blocked:case r.error:case r.severeWarning:return"assertive"}return"polite"},t.defaultProps={messageBarType:r.info,onDismiss:void 0,isMultiline:!0},t}(o.Component),w=n(93),_={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},x=((b={})[r.error]="errorBackground",b[r.blocked]="errorBackground",b[r.success]="successBackground",b[r.warning]="warningBackground",b[r.severeWarning]="severeWarningBackground",b[r.info]="infoBackground",b),O=((h={})[r.error]="rgba(255, 0, 0, 0.3)",h[r.blocked]="rgba(255, 0, 0, 0.3)",h[r.success]="rgba(48, 241, 73, 0.3)",h[r.warning]="rgba(255, 254, 57, 0.3)",h[r.severeWarning]="rgba(255, 0, 0, 0.3)",h[r.info]="Window",h),j=((f={})[r.error]="errorIcon",f[r.blocked]="errorIcon",f[r.success]="successIcon",f[r.warning]="warningIcon",f[r.severeWarning]="severeWarningIcon",f[r.info]="infoIcon",f),k=Object(a.a)(y,(function(e){var t,n,a,o,s,c=e.theme,l=e.className,u=e.onDismiss,d=e.truncated,m=e.isMultiline,p=e.expandSingleLine,g=e.messageBarType,b=void 0===g?r.info:g,h=c.semanticColors,f=c.fonts,v=Object(w.p)(0,w.f),y=Object(w.n)(_,c),k={fontSize:w.d.xSmall,height:10,lineHeight:"10px",color:h.messageText,selectors:(t={},t[w.c]={MsHighContrastAdjust:"none",color:"WindowText"},t)},N=[Object(w.m)(c,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":k,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[y.root,f.medium,b===r.error&&y.error,b===r.blocked&&y.blocked,b===r.severeWarning&&y.severeWarning,b===r.success&&y.success,b===r.warning&&y.warning,m?y.multiline:y.singleline,!m&&u&&y.dismissalSingleLine,!m&&d&&y.expandingSingleLine,{background:h[x[b]],color:h.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(n={".ms-Link":{color:h.messageLink,selectors:{":hover":{color:h.messageLinkHovered}}}},n[w.c]={MsHighContrastAdjust:"none",background:O[b],border:"1px solid WindowText",color:"WindowText"},n)},m&&{flexDirection:"column"},l],content:[y.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[y.iconContainer,{fontSize:w.d.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:h[j[b]],selectors:(a={},a[w.c]={MsHighContrastAdjust:"none",color:"WindowText"},a)},text:[y.text,Object(i.a)(Object(i.a)({minWidth:0,display:"flex",flexGrow:1,margin:8},f.small),{selectors:(o={},o[w.c]={MsHighContrastAdjust:"none"},o)}),!u&&{marginRight:12}],innerText:[y.innerText,{lineHeight:16,selectors:{"& span a":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!m&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!m&&!d&&{selectors:(s={},s[v]={overflow:"visible",whiteSpace:"pre-wrap"},s)},p&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:y.dismissSingleLine,expandSingleLine:y.expandSingleLine,dismissal:[y.dismissal,N],expand:[y.expand,N],actions:[m?y.actions:y.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},m&&{marginBottom:8},u&&!m&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(89),a=n(0),i=n(104),o=n(220),s=n(215),c=n(93),l=n(208),u=n(103),d=Object(l.a)((function(e,t){var n,r=Object(u.a)(e),a={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(n={},n[c.c]={borderColor:"Highlight",color:"Highlight"},n)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(c.h)(r,a,t)})),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return a.createElement(i.a,Object(r.a)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:d(n,t),onRenderDescription:o.a}))},t=Object(r.b)([Object(s.a)("ActionButton",["theme","styles"],!0)],t)}(a.Component)},182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(89),a=n(0),i=n(104),o=n(220),s=n(215),c=n(93),l=n(208),u=n(103),d=n(126),m=Object(l.a)((function(e,t){var n,r=Object(u.a)(e),a=Object(d.a)(e),i=e.palette,o={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:e.semanticColors.link},rootHovered:{color:i.themeDarkAlt,backgroundColor:i.neutralLighter,selectors:(n={},n[c.c]={borderColor:"Highlight",color:"Highlight"},n)},rootHasMenu:{width:"auto"},rootPressed:{color:i.themeDark,backgroundColor:i.neutralLight},rootExpanded:{color:i.themeDark,backgroundColor:i.neutralLight},rootChecked:{color:i.themeDark,backgroundColor:i.neutralLight},rootCheckedHovered:{color:i.themeDark,backgroundColor:i.neutralQuaternaryAlt},rootDisabled:{color:i.neutralTertiaryAlt}};return Object(c.h)(r,o,a,t)})),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return a.createElement(i.a,Object(r.a)({},this.props,{variantClassName:"ms-Button--icon",styles:m(n,t),onRenderText:o.a,onRenderDescription:o.a}))},t=Object(r.b)([Object(s.a)("IconButton",["theme","styles"],!0)],t)}(a.Component)},31:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(7),i=(n(0),n(92)),o=n(216),s={},c={unversionedId:"setup/integrations/integration-yuki",id:"setup/integrations/integration-yuki",isDocsHomePage:!1,title:"integration-yuki",description:"You will need to create a Yuki API key to be able to add the integration. You can find more information on the documentation page of Yuki. Once you've created an API key, fill it in and click Save.",source:"@site/docs/setup/integrations/integration-yuki.mdx",slug:"/setup/integrations/integration-yuki",permalink:"/setup/integrations/integration-yuki",version:"current"},l=[],u={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You will need to create a Yuki API key to be able to add the integration. You can find more information on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.yuki.be/nl/support/solutions/articles/11000065506-hoe-leg-ik-een-koppeling-"}),"documentation page of Yuki"),". Once you've created an API key, fill it in and click ",Object(i.b)(o.a,{mdxType:"PrimaryButton"},"Save"),"."))}d.isMDXComponent=!0},32:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),i=(n(0),n(92)),o={},s={unversionedId:"setup/integrations/integration-afas",id:"setup/integrations/integration-afas",isDocsHomePage:!1,title:"integration-afas",description:"Afas integration is not yet available, send us an email at info@monitr.be to register your interest in the integration.",source:"@site/docs/setup/integrations/integration-afas.md",slug:"/setup/integrations/integration-afas",permalink:"/setup/integrations/integration-afas",version:"current"},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Afas integration is not yet available, send us an email at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:info@monitr.be"}),"info@monitr.be")," to register your interest in the integration."))}u.isMDXComponent=!0},33:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(7),i=n(0),o=n.n(i),s=n(92),c=n(216),l=n(123),u=n.n(l),d=function(e){var t=e.url,n=e.padding,r=e.children,a=e.style,i=e.className,s=e.contentStyle,c=void 0===s?{}:s,l=e.showHamburger,d=void 0!==l&&l;return o.a.createElement("div",{className:u.a.browserFrame+" "+i+" shadow--tl",style:a},o.a.createElement("div",{className:u.a.browserFrame__top},o.a.createElement("div",{className:u.a["browserFrame__top-buttons"]},o.a.createElement("div",{className:u.a.browserFrame__button+" "+u.a["browserFrame__button--red"]}),o.a.createElement("div",{className:u.a.browserFrame__button+" "+u.a["browserFrame__button--yellow"]}),o.a.createElement("div",{className:u.a.browserFrame__button+" "+u.a["browserFrame__button--green"]})),t&&o.a.createElement("div",{className:u.a.browserFrame__address,"aria-hidden":!0},t),d&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:u.a.browserFrame__burger},o.a.createElement("span",{className:u.a["browserFrame__burger-line"]}),o.a.createElement("span",{className:u.a["browserFrame__burger-line"]}),o.a.createElement("span",{className:u.a["browserFrame__burger-line"]})))),o.a.createElement("div",{className:"browser-frame__body",style:Object.assign({padding:n||"initial",overflow:"hidden",borderBottomLeftRadius:3,borderBottomRightRadius:3},c)},r))},m=n.p+"assets/images/exact-login-80957857e8949e6e5b978eb2850aaa9f.png",p={},g={unversionedId:"setup/integrations/integration-exact",id:"setup/integrations/integration-exact",isDocsHomePage:!1,title:"integration-exact",description:"console.log(exactLoginScreenshot);",source:"@site/docs/setup/integrations/integration-exact.mdx",slug:"/setup/integrations/integration-exact",permalink:"/setup/integrations/integration-exact",version:"current"};console.log(m);var b=[],h={rightToc:b};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"You will be asked to select your Exact Online environment, we currently support"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Belgium"),Object(s.b)("li",{parentName:"ul"},"Netherlands")),Object(s.b)("p",null,"Once you've selected your environment, click on ",Object(s.b)(c.a,{mdxType:"PrimaryButton"},"Authenticate with Exact"),"."),Object(s.b)(d,{mdxType:"BrowserFrame"},Object(s.b)("img",{src:m})),Object(s.b)("p",null,"A new window will pop up asking for your Exact Online credentials. Enter Exact Online credentials of an account that has access to all the entities you want to add. Click login to finish the integration.   "))}f.isMDXComponent=!0},51:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return x})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return j})),n.d(t,"default",(function(){return N}));var r=n(2),a=n(7),i=n(0),o=n.n(i),s=n(92),c=n(217),l=n(181),u=n(179),d=n(107),m=n(97),p=n(84),g=n.n(p),b=37,h=39;var f=function(e){var t=e.block,n=e.children,r=e.defaultValue,a=e.values,s=e.groupId,c=Object(d.a)(),l=c.tabGroupChoices,u=c.setTabGroupChoices,p=Object(i.useState)(r),f=p[0],v=p[1],y=Object(i.useState)(!1),w=y[0],_=y[1];if(null!=s){var x=l[s];null!=x&&x!==f&&a.some((function(e){return e.value===x}))&&v(x)}var O=function(e){v(e),null!=s&&u(s,e)},j=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||_(!0)},N=function(){_(!1)};return Object(i.useEffect)((function(){window.addEventListener("keydown",k),window.addEventListener("mousedown",N)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(m.a)("tabs",{"tabs--block":t})},a.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(m.a)("tabs__item",g.a.tabItem,{"tabs__item--active":f===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case h:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e),k(e)},onFocus:function(){return O(t)},onClick:function(){O(t),_(!1)},onPointerDown:function(){return _(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))};var v=function(e){return o.a.createElement("div",null,e.children)},y=n(31),w=n(33),_=n(32),x={id:"integrations",title:"Integrations",slug:"../integrations"},O={unversionedId:"setup/integrations/integrations",id:"setup/integrations/integrations",isDocsHomePage:!1,title:"Integrations",description:"Before you can use Monitr, you will have to set up an integration to connect to your accounting software.",source:"@site/docs/setup/integrations/index.mdx",slug:"/setup/integrations",permalink:"/setup/integrations",version:"current",sidebar:"main",previous:{title:"Welcome to the Monitr documentation",permalink:"/"},next:{title:"Document Number 1",permalink:"/doc1"}},j=[{value:"Add an integration",id:"add-an-integration",children:[]},{value:"Data synchronisation",id:"data-synchronisation",children:[]}],k={rightToc:j};function N(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},k,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Before you can use Monitr, you will have to set up an integration to connect to your accounting software.",Object(s.b)("br",{parentName:"p"}),"\n","To setup your integration, navigate to ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.monitr.be/dashboard/manage/integrations"}),Object(s.b)(c.a,{iconName:"PlugConnected",mdxType:"Icon"})," Integrations")," in the sidebar."),Object(s.b)("h2",{id:"add-an-integration"},"Add an integration"),Object(s.b)("p",null,"Click ",Object(s.b)(l.a,{iconProps:{iconName:"Add"},mdxType:"ActionButton"},"Add")," at the top of the page and select your accounting software provider."),Object(s.b)(f,{defaultValue:"yuki",values:[{label:"Yuki",value:"yuki"},{label:"Exact Online",value:"exact_online"},{label:"Afas (Soon)",value:"afas"}],mdxType:"Tabs"},Object(s.b)(v,{value:"yuki",mdxType:"TabItem"},Object(s.b)(y.default,{mdxType:"YukiIntegration"})),Object(s.b)(v,{value:"exact_online",mdxType:"TabItem"},Object(s.b)(w.default,{mdxType:"ExactIntegration"})),Object(s.b)(v,{value:"afas",mdxType:"TabItem"},Object(s.b)(_.default,{mdxType:"AfasIntegration"}))),Object(s.b)("p",null,"Once you've added your integration, we will automatically start importing all required data from your accounting provider in the background."),Object(s.b)(u.a,{mdxType:"MessageBar"},"The initial import might take a while depending on the amount of data."),Object(s.b)("h2",{id:"data-synchronisation"},"Data synchronisation"),Object(s.b)("p",null,"Monitr will get data from your accounts, analytical accounts and general ledger each night. This way your dashboard will always give you an up to date view on your accounts.\nThe data will be updated from the ",Object(s.b)("em",{parentName:"p"},"last actuals")," date that you can set in the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.monitr.be/dashboard/organisations/entities"}),Object(s.b)(c.a,{iconName:"Org",mdxType:"Icon"})," Entities")," settings. If data prior to the ",Object(s.b)("em",{parentName:"p"},"last actuals")," needs to be updated, change the ",Object(s.b)("em",{parentName:"p"},"last actuals")," to an earlier date, the data will refresh overnight. Set your ",Object(s.b)("em",{parentName:"p"},"last actuals")," to the correct date, after the data has been refreshed."),Object(s.b)("p",null,"In addition, you can sync your data manually by clicking the ",Object(s.b)(l.a,{iconProps:{iconName:"Sync"},mdxType:"ActionButton"},"Sync now")," button in the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://app.monitr.be/dashboard/organisations/entities"}),Object(s.b)(c.a,{iconName:"Org",mdxType:"Icon"})," Entities")," settings."))}N.isMDXComponent=!0},97:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}}}]);