(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{132:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},134:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(136),o=n(132),s=n(103),c=n.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,d=e.groupId,m=e.className,g=Object(a.a)(),h=g.tabGroupChoices,b=g.setTabGroupChoices,f=Object(i.useState)(s),v=f[0],x=f[1],y=i.Children.toArray(e.children);if(null!=d){var O=h[d];null!=O&&O!==v&&u.some((function(e){return e.value===O}))&&x(O)}var j=function(e){x(e),null!=d&&b(d,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(i.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},135:function(e,t,n){"use strict";var i=n(3),r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},136:function(e,t,n){"use strict";var i=n(0),r=n(137);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},137:function(e,t,n){"use strict";var i=n(0),r=Object(i.createContext)(void 0);t.a=r},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var i,r=n(305),a=n(129),o=n(0),s=n(293),c=n(304),l=n(298),p=n(297),u=n(296),d=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isRendered:!1},n}return Object(a.c)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?o.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(o.Component),m=n(150),g=n(303);!function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(i||(i={}));var h,b,f,v=Object(s.a)(),x=function(e){function t(t){var n,r=e.call(this,t)||this;return r.ICON_MAP=((n={})[i.info]="Info",n[i.warning]="Info",n[i.error]="ErrorBadge",n[i.blocked]="Blocked2",n[i.severeWarning]="Warning",n[i.success]="Completed",n),r._getRegionProps=function(){var e=!!r._getActionsDiv()||!!r._getDismissDiv(),t={"aria-describedby":r.state.labelId,role:"region"};return e?t:{}},r._onClick=function(e){r.setState({expandSingleLine:!r.state.expandSingleLine})},Object(c.a)(r),r.state={labelId:Object(l.a)("MessageBar"),showContent:!1,expandSingleLine:!1},r}return Object(a.c)(t,e),t.prototype.render=function(){var e=this.props.isMultiline;return this._classNames=this._getClassNames(),e?this._renderMultiLine():this._renderSingleLine()},t.prototype._getActionsDiv=function(){return this.props.actions?o.createElement("div",{className:this._classNames.actions},this.props.actions):null},t.prototype._getDismissDiv=function(){var e=this.props,t=e.onDismiss,n=e.dismissIconProps;return t?o.createElement(m.a,{disabled:!1,className:this._classNames.dismissal,onClick:t,iconProps:n||{iconName:"Clear"},title:this.props.dismissButtonAriaLabel,ariaLabel:this.props.dismissButtonAriaLabel}):null},t.prototype._getDismissSingleLine=function(){return this.props.onDismiss?o.createElement("div",{className:this._classNames.dismissSingleLine},this._getDismissDiv()):null},t.prototype._getExpandSingleLine=function(){return!this.props.actions&&this.props.truncated?o.createElement("div",{className:this._classNames.expandSingleLine},o.createElement(m.a,{disabled:!1,className:this._classNames.expand,onClick:this._onClick,iconProps:{iconName:this.state.expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:this.props.overflowButtonAriaLabel,"aria-expanded":this.state.expandSingleLine})):null},t.prototype._getIconSpan=function(){var e=this.props.messageBarIconProps;return o.createElement("div",{className:this._classNames.iconContainer,"aria-hidden":!0},e?o.createElement(g.a,Object(a.a)({},e,{className:Object(p.a)(this._classNames.icon,e.className)})):o.createElement(g.a,{iconName:this.ICON_MAP[this.props.messageBarType],className:this._classNames.icon}))},t.prototype._renderMultiLine=function(){return o.createElement("div",Object(a.a)({className:this._classNames.root},this._getRegionProps()),o.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getDismissDiv()),this._getActionsDiv())},t.prototype._renderSingleLine=function(){return o.createElement("div",Object(a.a)({className:this._classNames.root},this._getRegionProps()),o.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getExpandSingleLine(),this._getActionsDiv(),this._getDismissSingleLine()))},t.prototype._renderInnerText=function(){var e=Object(u.d)(this.props,u.e,["className"]);return o.createElement("div",{className:this._classNames.text,id:this.state.labelId,role:"status","aria-live":this._getAnnouncementPriority()},o.createElement("span",Object(a.a)({className:this._classNames.innerText},e),o.createElement(d,null,o.createElement("span",null,this.props.children))))},t.prototype._getClassNames=function(){var e=this.props,t=e.theme,n=e.className,r=e.messageBarType,a=e.onDismiss,o=e.actions,s=e.truncated,c=e.isMultiline,l=this.state.expandSingleLine;return v(this.props.styles,{theme:t,messageBarType:r||i.info,onDismiss:void 0!==a,actions:void 0!==o,truncated:s,isMultiline:c,expandSingleLine:l,className:n})},t.prototype._getAnnouncementPriority=function(){switch(this.props.messageBarType){case i.blocked:case i.error:case i.severeWarning:return"assertive"}return"polite"},t.defaultProps={messageBarType:i.info,onDismiss:void 0,isMultiline:!0},t}(o.Component),y=n(141),O={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},j=((h={})[i.error]="errorBackground",h[i.blocked]="errorBackground",h[i.success]="successBackground",h[i.warning]="warningBackground",h[i.severeWarning]="severeWarningBackground",h[i.info]="infoBackground",h),k=((b={})[i.error]="rgba(255, 0, 0, 0.3)",b[i.blocked]="rgba(255, 0, 0, 0.3)",b[i.success]="rgba(48, 241, 73, 0.3)",b[i.warning]="rgba(255, 254, 57, 0.3)",b[i.severeWarning]="rgba(255, 0, 0, 0.3)",b[i.info]="Window",b),C=((f={})[i.error]="errorIcon",f[i.blocked]="errorIcon",f[i.success]="successIcon",f[i.warning]="warningIcon",f[i.severeWarning]="severeWarningIcon",f[i.info]="infoIcon",f),N=Object(r.a)(x,(function(e){var t,n,r,o,s,c=e.theme,l=e.className,p=e.onDismiss,u=e.truncated,d=e.isMultiline,m=e.expandSingleLine,g=e.messageBarType,h=void 0===g?i.info:g,b=c.semanticColors,f=c.fonts,v=Object(y.p)(0,y.f),x=Object(y.n)(O,c),N={fontSize:y.d.xSmall,height:10,lineHeight:"10px",color:b.messageText,selectors:(t={},t[y.c]={MsHighContrastAdjust:"none",color:"WindowText"},t)},w=[Object(y.m)(c,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":N,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[x.root,f.medium,h===i.error&&x.error,h===i.blocked&&x.blocked,h===i.severeWarning&&x.severeWarning,h===i.success&&x.success,h===i.warning&&x.warning,d?x.multiline:x.singleline,!d&&p&&x.dismissalSingleLine,!d&&u&&x.expandingSingleLine,{background:b[j[h]],color:b.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(n={".ms-Link":{color:b.messageLink,selectors:{":hover":{color:b.messageLinkHovered}}}},n[y.c]={MsHighContrastAdjust:"none",background:k[h],border:"1px solid WindowText",color:"WindowText"},n)},d&&{flexDirection:"column"},l],content:[x.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[x.iconContainer,{fontSize:y.d.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:b[C[h]],selectors:(r={},r[y.c]={MsHighContrastAdjust:"none",color:"WindowText"},r)},text:[x.text,Object(a.a)(Object(a.a)({minWidth:0,display:"flex",flexGrow:1,margin:8},f.small),{selectors:(o={},o[y.c]={MsHighContrastAdjust:"none"},o)}),!p&&{marginRight:12}],innerText:[x.innerText,{lineHeight:16,selectors:{"& span a":{paddingLeft:4}}},u&&{overflow:"visible",whiteSpace:"pre-wrap"},!d&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!d&&!u&&{selectors:(s={},s[v]={overflow:"visible",whiteSpace:"pre-wrap"},s)},m&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:x.dismissSingleLine,expandSingleLine:x.expandSingleLine,dismissal:[x.dismissal,w],expand:[x.expand,w],actions:[d?x.actions:x.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},d&&{marginBottom:8},p&&!d&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(129),r=n(0),a=n(139),o=n(306),s=n(299),c=n(141),l=n(291),p=n(138),u=n(144),d=Object(l.a)((function(e,t){var n,i=Object(p.a)(e),r=Object(u.a)(e),a=e.palette,o={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:e.semanticColors.link},rootHovered:{color:a.themeDarkAlt,backgroundColor:a.neutralLighter,selectors:(n={},n[c.c]={borderColor:"Highlight",color:"Highlight"},n)},rootHasMenu:{width:"auto"},rootPressed:{color:a.themeDark,backgroundColor:a.neutralLight},rootExpanded:{color:a.themeDark,backgroundColor:a.neutralLight},rootChecked:{color:a.themeDark,backgroundColor:a.neutralLight},rootCheckedHovered:{color:a.themeDark,backgroundColor:a.neutralQuaternaryAlt},rootDisabled:{color:a.neutralTertiaryAlt}};return Object(c.h)(i,o,r,t)})),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return r.createElement(a.a,Object(i.a)({},this.props,{variantClassName:"ms-Button--icon",styles:d(n,t),onRenderText:o.a,onRenderDescription:o.a}))},t=Object(i.b)([Object(s.a)("IconButton",["theme","styles"],!0)],t)}(r.Component)},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(129),r=n(0),a=n(139),o=n(306),s=n(299),c=n(141),l=n(291),p=n(138),u=Object(l.a)((function(e,t){var n,i=Object(p.a)(e),r={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(n={},n[c.c]={borderColor:"Highlight",color:"Highlight"},n)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(c.h)(i,r,t)})),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return r.createElement(a.a,Object(i.a)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:u(n,t),onRenderDescription:o.a}))},t=Object(i.b)([Object(s.a)("ActionButton",["theme","styles"],!0)],t)}(r.Component)},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return g}));var i=n(3),r=n(8),a=(n(0),n(131)),o=n(303),s=n(153),c=n(302),l=n(149),p=(n(134),n(135),{}),u={unversionedId:"setup/mapping/mapping-csv",id:"setup/mapping/mapping-csv",isDocsHomePage:!1,title:"mapping-csv",description:"Definition",source:"@site/docs/setup/mapping/mapping-csv.mdx",slug:"/setup/mapping/mapping-csv",permalink:"/setup/mapping/mapping-csv",version:"current"},d=[{value:"Definition",id:"definition",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Upload your template",id:"upload-your-template",children:[]}],m={toc:d};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"Complete the folowing fields in the template"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Account ","[string]",": the code of the general ledger account"),Object(a.b)("li",{parentName:"ul"},"Analytical Account ","[string]",": the code of the analytical account (optional)"),Object(a.b)("li",{parentName:"ul"},"ReportingID ","[string]",": the ID of the "),Object(a.b)("li",{parentName:"ul"},"Comment ","[string]",": A comment (optional)")),Object(a.b)("h2",{id:"validation"},"Validation"),Object(a.b)("p",null,"Make sure these validations rules are respected:"),Object(a.b)(o.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The combination of Account and Analytical Account needs to be unique ",Object(a.b)("br",null),Object(a.b)(o.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Account needs to exist in your accounting ",Object(a.b)("br",null),Object(a.b)(o.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Analytical Account needs exist in your accounting ",Object(a.b)("br",null),Object(a.b)(o.a,{iconName:"SkypeCheck",mdxType:"Icon"})," A mapping to a reporting line needs to be made in Reporting ID ",Object(a.b)("br",null),Object(a.b)(o.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Mapping needs to be made to a reporting line without children ",Object(a.b)("br",null),Object(a.b)("h2",{id:"upload-your-template"},"Upload your template"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure the status of all validation rules in the tabsheet 'Mapping' of the template is 'TRUE'."),Object(a.b)("li",{parentName:"ol"},"Copy the definition (columns with a dark blue header) in to a csv file and save it on your computer."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Mapping'"),"."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)(s.a,{mdxType:"ActionButton"},"Upload")),Object(a.b)("li",{parentName:"ol"},"Browse to the CSV file on your computer and select and click 'Open'."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)(c.a,{mdxType:"PrimaryButton"},"Save")),Object(a.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(a.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(a.b)(c.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(a.b)(l.a,{mdxType:"MessageBar"},"If you upload a CSV file with mapping, this will overwrite (not append) your current mappaings."))}g.isMDXComponent=!0}}]);