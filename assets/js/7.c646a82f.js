(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6,57,58,59,61],{137:function(e,t,r){"use strict";function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},138:function(e,t,r){"use strict";var o=r(0),n=r.n(o),s=r(141),a=r(137),i=r(105),c=r.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,d=e.values,p=e.groupId,g=e.className,m=Object(s.a)(),b=m.tabGroupChoices,h=m.setTabGroupChoices,f=Object(o.useState)(i),k=f[0],v=f[1],B=o.Children.toArray(e.children);if(null!=p){var x=b[p];null!=x&&x!==k&&d.some((function(e){return e.value===x}))&&v(x)}var C=function(e){v(e),null!=p&&h(p,e)},y=[];return n.a.createElement("div",{className:"tabs-container"},n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":r},g)},d.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":k===t,className:Object(a.a)("tabs__item",c.a.tabItem,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},r)}))),t?Object(o.cloneElement)(B.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},B.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},139:function(e,t,r){"use strict";var o=r(0),n=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},141:function(e,t,r){"use strict";var o=r(0),n=r(142);t.a=function(){var e=Object(o.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},142:function(e,t,r){"use strict";var o=r(0),n=Object(o.createContext)(void 0);t.a=n},145:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var o=r(131),n=r(0),s=r(310),a=r(304),i=r(136),c=r(144),l=r(296),u=r(135),d=r(140),p=r(244);var g=Object(l.a)((function(e,t,r){var n=Object(u.a)(e),s=Object(d.a)(e),a={root:{minWidth:"80px",height:"32px"},label:{fontWeight:c.b.semibold}};return Object(c.h)(n,a,r?function(e){var t,r,n,s,a,i,l,u,d,g=e.palette,m=e.semanticColors;return{root:{backgroundColor:m.primaryButtonBackground,border:"1px solid "+m.primaryButtonBackground,color:m.primaryButtonText,selectors:(t={},t[c.c]=Object(o.a)({color:"Window",backgroundColor:"WindowText",borderColor:"WindowText"},Object(c.n)()),t["."+p.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:g.white}}},t)},rootHovered:{backgroundColor:m.primaryButtonBackgroundHovered,border:"1px solid "+m.primaryButtonBackgroundHovered,color:m.primaryButtonTextHovered,selectors:(r={},r[c.c]={color:"Window",backgroundColor:"Highlight",borderColor:"Highlight"},r)},rootPressed:{backgroundColor:m.primaryButtonBackgroundPressed,border:"1px solid "+m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed,selectors:(n={},n[c.c]=Object(o.a)({color:"Window",backgroundColor:"WindowText",borderColor:"WindowText"},Object(c.n)()),n)},rootExpanded:{backgroundColor:m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed},rootChecked:{backgroundColor:m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:m.primaryButtonBackgroundPressed,color:m.primaryButtonTextPressed},rootDisabled:{color:m.primaryButtonTextDisabled,backgroundColor:m.primaryButtonBackgroundDisabled,selectors:(s={},s[c.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},s)},splitButtonContainer:{selectors:(a={},a[c.c]={border:"none"},a)},splitButtonDivider:Object(o.a)(Object(o.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:g.white,selectors:(i={},i[c.c]={backgroundColor:"Window"},i)}),splitButtonMenuButton:{backgroundColor:m.primaryButtonBackground,color:m.primaryButtonText,selectors:(l={},l[c.c]={backgroundColor:"WindowText"},l[":hover"]={backgroundColor:m.primaryButtonBackgroundHovered,selectors:(u={},u[c.c]={color:"Highlight"},u)},l)},splitButtonMenuButtonDisabled:{backgroundColor:m.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:m.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:m.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:m.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:m.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:m.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:m.primaryButtonText},splitButtonMenuIconDisabled:{color:g.neutralTertiary,selectors:(d={},d[c.c]={color:"GrayText"},d)}}}(e):function(e){var t,r,n,s,a,i=e.semanticColors,l=e.palette,u=i.buttonBackground,d=i.buttonBackgroundPressed,p=i.buttonBackgroundHovered,g=i.buttonBackgroundDisabled,m=i.buttonText,b=i.buttonTextHovered,h=i.buttonTextDisabled,f=i.buttonTextChecked,k=i.buttonTextCheckedHovered;return{root:{backgroundColor:u,color:m},rootHovered:{backgroundColor:p,color:b,selectors:(t={},t[c.c]={borderColor:"Highlight",color:"Highlight"},t)},rootPressed:{backgroundColor:d,color:f},rootExpanded:{backgroundColor:d,color:f},rootChecked:{backgroundColor:d,color:f},rootCheckedHovered:{backgroundColor:d,color:k},rootDisabled:{color:h,backgroundColor:g,selectors:(r={},r[c.c]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},r)},splitButtonContainer:{selectors:(n={},n[c.c]={border:"none"},n)},splitButtonMenuButton:{color:l.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:l.neutralLight,selectors:(s={},s[c.c]={color:"Highlight"},s)}}},splitButtonMenuButtonDisabled:{backgroundColor:i.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:i.buttonBackgroundDisabled}}},splitButtonDivider:Object(o.a)(Object(o.a)({},{position:"absolute",width:1,right:31,top:8,bottom:8}),{backgroundColor:l.neutralTertiaryAlt,selectors:(a={},a[c.c]={backgroundColor:"WindowText"},a)}),splitButtonDividerDisabled:{backgroundColor:e.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:l.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:l.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:l.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:l.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:i.buttonText},splitButtonMenuIconDisabled:{color:i.buttonTextDisabled}}}(e),s,t)})),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.primary,r=void 0!==t&&t,a=e.styles,c=e.theme;return n.createElement(i.a,Object(o.a)({},this.props,{variantClassName:r?"ms-Button--primary":"ms-Button--default",styles:g(c,a,r),onRenderDescription:s.a}))},t=Object(o.b)([Object(a.a)("DefaultButton",["theme","styles"],!0)],t)}(n.Component),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.c)(t,e),t.prototype.render=function(){return n.createElement(m,Object(o.a)({},this.props,{primary:!0,onRenderDescription:s.a}))},t=Object(o.b)([Object(a.a)("PrimaryButton",["theme","styles"],!0)],t)}(n.Component)},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var o,n=r(309),s=r(131),a=r(0),i=r(298),c=r(308),l=r(303),u=r(302),d=r(301),p=function(e){function t(t){var r=e.call(this,t)||this;return r.state={isRendered:!1},r}return Object(s.c)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?a.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(a.Component),g=r(156),m=r(307);!function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(o||(o={}));var b,h,f,k=Object(i.a)(),v=function(e){function t(t){var r,n=e.call(this,t)||this;return n.ICON_MAP=((r={})[o.info]="Info",r[o.warning]="Info",r[o.error]="ErrorBadge",r[o.blocked]="Blocked2",r[o.severeWarning]="Warning",r[o.success]="Completed",r),n._getRegionProps=function(){var e=!!n._getActionsDiv()||!!n._getDismissDiv(),t={"aria-describedby":n.state.labelId,role:"region"};return e?t:{}},n._onClick=function(e){n.setState({expandSingleLine:!n.state.expandSingleLine})},Object(c.a)(n),n.state={labelId:Object(l.a)("MessageBar"),showContent:!1,expandSingleLine:!1},n}return Object(s.c)(t,e),t.prototype.render=function(){var e=this.props.isMultiline;return this._classNames=this._getClassNames(),e?this._renderMultiLine():this._renderSingleLine()},t.prototype._getActionsDiv=function(){return this.props.actions?a.createElement("div",{className:this._classNames.actions},this.props.actions):null},t.prototype._getDismissDiv=function(){var e=this.props,t=e.onDismiss,r=e.dismissIconProps;return t?a.createElement(g.a,{disabled:!1,className:this._classNames.dismissal,onClick:t,iconProps:r||{iconName:"Clear"},title:this.props.dismissButtonAriaLabel,ariaLabel:this.props.dismissButtonAriaLabel}):null},t.prototype._getDismissSingleLine=function(){return this.props.onDismiss?a.createElement("div",{className:this._classNames.dismissSingleLine},this._getDismissDiv()):null},t.prototype._getExpandSingleLine=function(){return!this.props.actions&&this.props.truncated?a.createElement("div",{className:this._classNames.expandSingleLine},a.createElement(g.a,{disabled:!1,className:this._classNames.expand,onClick:this._onClick,iconProps:{iconName:this.state.expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:this.props.overflowButtonAriaLabel,"aria-expanded":this.state.expandSingleLine})):null},t.prototype._getIconSpan=function(){var e=this.props.messageBarIconProps;return a.createElement("div",{className:this._classNames.iconContainer,"aria-hidden":!0},e?a.createElement(m.a,Object(s.a)({},e,{className:Object(u.a)(this._classNames.icon,e.className)})):a.createElement(m.a,{iconName:this.ICON_MAP[this.props.messageBarType],className:this._classNames.icon}))},t.prototype._renderMultiLine=function(){return a.createElement("div",Object(s.a)({className:this._classNames.root},this._getRegionProps()),a.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getDismissDiv()),this._getActionsDiv())},t.prototype._renderSingleLine=function(){return a.createElement("div",Object(s.a)({className:this._classNames.root},this._getRegionProps()),a.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getExpandSingleLine(),this._getActionsDiv(),this._getDismissSingleLine()))},t.prototype._renderInnerText=function(){var e=Object(d.d)(this.props,d.e,["className"]);return a.createElement("div",{className:this._classNames.text,id:this.state.labelId,role:"status","aria-live":this._getAnnouncementPriority()},a.createElement("span",Object(s.a)({className:this._classNames.innerText},e),a.createElement(p,null,a.createElement("span",null,this.props.children))))},t.prototype._getClassNames=function(){var e=this.props,t=e.theme,r=e.className,n=e.messageBarType,s=e.onDismiss,a=e.actions,i=e.truncated,c=e.isMultiline,l=this.state.expandSingleLine;return k(this.props.styles,{theme:t,messageBarType:n||o.info,onDismiss:void 0!==s,actions:void 0!==a,truncated:i,isMultiline:c,expandSingleLine:l,className:r})},t.prototype._getAnnouncementPriority=function(){switch(this.props.messageBarType){case o.blocked:case o.error:case o.severeWarning:return"assertive"}return"polite"},t.defaultProps={messageBarType:o.info,onDismiss:void 0,isMultiline:!0},t}(a.Component),B=r(144),x={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},C=((b={})[o.error]="errorBackground",b[o.blocked]="errorBackground",b[o.success]="successBackground",b[o.warning]="warningBackground",b[o.severeWarning]="severeWarningBackground",b[o.info]="infoBackground",b),y=((h={})[o.error]="rgba(255, 0, 0, 0.3)",h[o.blocked]="rgba(255, 0, 0, 0.3)",h[o.success]="rgba(48, 241, 73, 0.3)",h[o.warning]="rgba(255, 254, 57, 0.3)",h[o.severeWarning]="rgba(255, 0, 0, 0.3)",h[o.info]="Window",h),O=((f={})[o.error]="errorIcon",f[o.blocked]="errorIcon",f[o.success]="successIcon",f[o.warning]="warningIcon",f[o.severeWarning]="severeWarningIcon",f[o.info]="infoIcon",f),w=Object(n.a)(v,(function(e){var t,r,n,a,i,c=e.theme,l=e.className,u=e.onDismiss,d=e.truncated,p=e.isMultiline,g=e.expandSingleLine,m=e.messageBarType,b=void 0===m?o.info:m,h=c.semanticColors,f=c.fonts,k=Object(B.p)(0,B.f),v=Object(B.m)(x,c),w={fontSize:B.d.xSmall,height:10,lineHeight:"10px",color:h.messageText,selectors:(t={},t[B.c]=Object(s.a)(Object(s.a)({},Object(B.n)()),{color:"WindowText"}),t)},j=[Object(B.l)(c,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":w,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[v.root,f.medium,b===o.error&&v.error,b===o.blocked&&v.blocked,b===o.severeWarning&&v.severeWarning,b===o.success&&v.success,b===o.warning&&v.warning,p?v.multiline:v.singleline,!p&&u&&v.dismissalSingleLine,!p&&d&&v.expandingSingleLine,{background:h[C[b]],color:h.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(r={".ms-Link":{color:h.messageLink,selectors:{":hover":{color:h.messageLinkHovered}}}},r[B.c]=Object(s.a)(Object(s.a)({},Object(B.n)()),{background:y[b],border:"1px solid WindowText",color:"WindowText"}),r)},p&&{flexDirection:"column"},l],content:[v.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[v.iconContainer,{fontSize:B.d.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:h[O[b]],selectors:(n={},n[B.c]=Object(s.a)(Object(s.a)({},Object(B.n)()),{color:"WindowText"}),n)},text:[v.text,Object(s.a)(Object(s.a)({minWidth:0,display:"flex",flexGrow:1,margin:8},f.small),{selectors:(a={},a[B.c]=Object(s.a)({},Object(B.n)()),a)}),!u&&{marginRight:12}],innerText:[v.innerText,{lineHeight:16,selectors:{"& span a":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!p&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!p&&!d&&{selectors:(i={},i[k]={overflow:"visible",whiteSpace:"pre-wrap"},i)},g&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:v.dismissSingleLine,expandSingleLine:v.expandSingleLine,dismissal:[v.dismissal,j],expand:[v.expand,j],actions:[p?v.actions:v.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},p&&{marginBottom:8},u&&!p&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var o=r(131),n=r(0),s=r(136),a=r(310),i=r(304),c=r(144),l=r(296),u=r(135),d=r(140),p=Object(l.a)((function(e,t){var r,o=Object(u.a)(e),n=Object(d.a)(e),s=e.palette,a={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:e.semanticColors.link},rootHovered:{color:s.themeDarkAlt,backgroundColor:s.neutralLighter,selectors:(r={},r[c.c]={borderColor:"Highlight",color:"Highlight"},r)},rootHasMenu:{width:"auto"},rootPressed:{color:s.themeDark,backgroundColor:s.neutralLight},rootExpanded:{color:s.themeDark,backgroundColor:s.neutralLight},rootChecked:{color:s.themeDark,backgroundColor:s.neutralLight},rootCheckedHovered:{color:s.themeDark,backgroundColor:s.neutralQuaternaryAlt},rootDisabled:{color:s.neutralTertiaryAlt}};return Object(c.h)(o,a,n,t)})),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,r=e.theme;return n.createElement(s.a,Object(o.a)({},this.props,{variantClassName:"ms-Button--icon",styles:p(r,t),onRenderText:a.a,onRenderDescription:a.a}))},t=Object(o.b)([Object(i.a)("IconButton",["theme","styles"],!0)],t)}(n.Component)},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var o=r(131),n=r(0),s=r(136),a=r(310),i=r(304),c=r(144),l=r(296),u=r(135),d=Object(l.a)((function(e,t){var r,o=Object(u.a)(e),n={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(r={},r[c.c]={borderColor:"Highlight",color:"Highlight"},r)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(c.h)(o,n,t)})),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(o.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,r=e.theme;return n.createElement(s.a,Object(o.a)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:d(r,t),onRenderDescription:a.a}))},t=Object(o.b)([Object(i.a)("ActionButton",["theme","styles"],!0)],t)}(n.Component)}}]);