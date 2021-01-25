(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{132:function(e,t,n){"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},134:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(136),s=n(132),o=n(103),l=n.n(o),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,p=e.groupId,m=e.className,h=Object(a.a)(),g=h.tabGroupChoices,b=h.setTabGroupChoices,f=Object(r.useState)(o),v=f[0],x=f[1],y=r.Children.toArray(e.children);if(null!=p){var O=g[p];null!=O&&O!==v&&d.some((function(e){return e.value===O}))&&x(O)}var j=function(e){x(e),null!=p&&b(p,e)},k=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return j(t)},onClick:function(){j(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},135:function(e,t,n){"use strict";var r=n(3),i=n(0),a=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},136:function(e,t,n){"use strict";var r=n(0),i=n(137);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},137:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r,i=n(305),a=n(129),s=n(0),o=n(293),l=n(304),c=n(298),u=n(297),d=n(296),p=function(e){function t(t){var n=e.call(this,t)||this;return n.state={isRendered:!1},n}return Object(a.c)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?s.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(s.Component),m=n(150),h=n(303);!function(e){e[e.info=0]="info",e[e.error=1]="error",e[e.blocked=2]="blocked",e[e.severeWarning=3]="severeWarning",e[e.success=4]="success",e[e.warning=5]="warning"}(r||(r={}));var g,b,f,v=Object(o.a)(),x=function(e){function t(t){var n,i=e.call(this,t)||this;return i.ICON_MAP=((n={})[r.info]="Info",n[r.warning]="Info",n[r.error]="ErrorBadge",n[r.blocked]="Blocked2",n[r.severeWarning]="Warning",n[r.success]="Completed",n),i._getRegionProps=function(){var e=!!i._getActionsDiv()||!!i._getDismissDiv(),t={"aria-describedby":i.state.labelId,role:"region"};return e?t:{}},i._onClick=function(e){i.setState({expandSingleLine:!i.state.expandSingleLine})},Object(l.a)(i),i.state={labelId:Object(c.a)("MessageBar"),showContent:!1,expandSingleLine:!1},i}return Object(a.c)(t,e),t.prototype.render=function(){var e=this.props.isMultiline;return this._classNames=this._getClassNames(),e?this._renderMultiLine():this._renderSingleLine()},t.prototype._getActionsDiv=function(){return this.props.actions?s.createElement("div",{className:this._classNames.actions},this.props.actions):null},t.prototype._getDismissDiv=function(){var e=this.props,t=e.onDismiss,n=e.dismissIconProps;return t?s.createElement(m.a,{disabled:!1,className:this._classNames.dismissal,onClick:t,iconProps:n||{iconName:"Clear"},title:this.props.dismissButtonAriaLabel,ariaLabel:this.props.dismissButtonAriaLabel}):null},t.prototype._getDismissSingleLine=function(){return this.props.onDismiss?s.createElement("div",{className:this._classNames.dismissSingleLine},this._getDismissDiv()):null},t.prototype._getExpandSingleLine=function(){return!this.props.actions&&this.props.truncated?s.createElement("div",{className:this._classNames.expandSingleLine},s.createElement(m.a,{disabled:!1,className:this._classNames.expand,onClick:this._onClick,iconProps:{iconName:this.state.expandSingleLine?"DoubleChevronUp":"DoubleChevronDown"},ariaLabel:this.props.overflowButtonAriaLabel,"aria-expanded":this.state.expandSingleLine})):null},t.prototype._getIconSpan=function(){var e=this.props.messageBarIconProps;return s.createElement("div",{className:this._classNames.iconContainer,"aria-hidden":!0},e?s.createElement(h.a,Object(a.a)({},e,{className:Object(u.a)(this._classNames.icon,e.className)})):s.createElement(h.a,{iconName:this.ICON_MAP[this.props.messageBarType],className:this._classNames.icon}))},t.prototype._renderMultiLine=function(){return s.createElement("div",Object(a.a)({className:this._classNames.root},this._getRegionProps()),s.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getDismissDiv()),this._getActionsDiv())},t.prototype._renderSingleLine=function(){return s.createElement("div",Object(a.a)({className:this._classNames.root},this._getRegionProps()),s.createElement("div",{className:this._classNames.content},this._getIconSpan(),this._renderInnerText(),this._getExpandSingleLine(),this._getActionsDiv(),this._getDismissSingleLine()))},t.prototype._renderInnerText=function(){var e=Object(d.d)(this.props,d.e,["className"]);return s.createElement("div",{className:this._classNames.text,id:this.state.labelId,role:"status","aria-live":this._getAnnouncementPriority()},s.createElement("span",Object(a.a)({className:this._classNames.innerText},e),s.createElement(p,null,s.createElement("span",null,this.props.children))))},t.prototype._getClassNames=function(){var e=this.props,t=e.theme,n=e.className,i=e.messageBarType,a=e.onDismiss,s=e.actions,o=e.truncated,l=e.isMultiline,c=this.state.expandSingleLine;return v(this.props.styles,{theme:t,messageBarType:i||r.info,onDismiss:void 0!==a,actions:void 0!==s,truncated:o,isMultiline:l,expandSingleLine:c,className:n})},t.prototype._getAnnouncementPriority=function(){switch(this.props.messageBarType){case r.blocked:case r.error:case r.severeWarning:return"assertive"}return"polite"},t.defaultProps={messageBarType:r.info,onDismiss:void 0,isMultiline:!0},t}(s.Component),y=n(141),O={root:"ms-MessageBar",error:"ms-MessageBar--error",blocked:"ms-MessageBar--blocked",severeWarning:"ms-MessageBar--severeWarning",success:"ms-MessageBar--success",warning:"ms-MessageBar--warning",multiline:"ms-MessageBar-multiline",singleline:"ms-MessageBar-singleline",dismissalSingleLine:"ms-MessageBar-dismissalSingleLine",expandingSingleLine:"ms-MessageBar-expandingSingleLine",content:"ms-MessageBar-content",iconContainer:"ms-MessageBar-icon",text:"ms-MessageBar-text",innerText:"ms-MessageBar-innerText",dismissSingleLine:"ms-MessageBar-dismissSingleLine",expandSingleLine:"ms-MessageBar-expandSingleLine",dismissal:"ms-MessageBar-dismissal",expand:"ms-MessageBar-expand",actions:"ms-MessageBar-actions",actionsSingleline:"ms-MessageBar-actionsSingleLine"},j=((g={})[r.error]="errorBackground",g[r.blocked]="errorBackground",g[r.success]="successBackground",g[r.warning]="warningBackground",g[r.severeWarning]="severeWarningBackground",g[r.info]="infoBackground",g),k=((b={})[r.error]="rgba(255, 0, 0, 0.3)",b[r.blocked]="rgba(255, 0, 0, 0.3)",b[r.success]="rgba(48, 241, 73, 0.3)",b[r.warning]="rgba(255, 254, 57, 0.3)",b[r.severeWarning]="rgba(255, 0, 0, 0.3)",b[r.info]="Window",b),w=((f={})[r.error]="errorIcon",f[r.blocked]="errorIcon",f[r.success]="successIcon",f[r.warning]="warningIcon",f[r.severeWarning]="severeWarningIcon",f[r.info]="infoIcon",f),C=Object(i.a)(x,(function(e){var t,n,i,s,o,l=e.theme,c=e.className,u=e.onDismiss,d=e.truncated,p=e.isMultiline,m=e.expandSingleLine,h=e.messageBarType,g=void 0===h?r.info:h,b=l.semanticColors,f=l.fonts,v=Object(y.p)(0,y.f),x=Object(y.n)(O,l),C={fontSize:y.d.xSmall,height:10,lineHeight:"10px",color:b.messageText,selectors:(t={},t[y.c]={MsHighContrastAdjust:"none",color:"WindowText"},t)},N=[Object(y.m)(l,{inset:1,highContrastStyle:{outlineOffset:"-6px",outline:"1px solid Highlight"},borderColor:"transparent"}),{flexShrink:0,width:32,height:32,padding:"8px 12px",selectors:{"& .ms-Button-icon":C,":hover":{backgroundColor:"transparent"},":active":{backgroundColor:"transparent"}}}];return{root:[x.root,f.medium,g===r.error&&x.error,g===r.blocked&&x.blocked,g===r.severeWarning&&x.severeWarning,g===r.success&&x.success,g===r.warning&&x.warning,p?x.multiline:x.singleline,!p&&u&&x.dismissalSingleLine,!p&&d&&x.expandingSingleLine,{background:b[j[g]],color:b.messageText,minHeight:32,width:"100%",display:"flex",wordBreak:"break-word",selectors:(n={".ms-Link":{color:b.messageLink,selectors:{":hover":{color:b.messageLinkHovered}}}},n[y.c]={MsHighContrastAdjust:"none",background:k[g],border:"1px solid WindowText",color:"WindowText"},n)},p&&{flexDirection:"column"},c],content:[x.content,{display:"flex",width:"100%",lineHeight:"normal"}],iconContainer:[x.iconContainer,{fontSize:y.d.medium,minWidth:16,minHeight:16,display:"flex",flexShrink:0,margin:"8px 0 8px 12px"}],icon:{color:b[w[g]],selectors:(i={},i[y.c]={MsHighContrastAdjust:"none",color:"WindowText"},i)},text:[x.text,Object(a.a)(Object(a.a)({minWidth:0,display:"flex",flexGrow:1,margin:8},f.small),{selectors:(s={},s[y.c]={MsHighContrastAdjust:"none"},s)}),!u&&{marginRight:12}],innerText:[x.innerText,{lineHeight:16,selectors:{"& span a":{paddingLeft:4}}},d&&{overflow:"visible",whiteSpace:"pre-wrap"},!p&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},!p&&!d&&{selectors:(o={},o[v]={overflow:"visible",whiteSpace:"pre-wrap"},o)},m&&{overflow:"visible",whiteSpace:"pre-wrap"}],dismissSingleLine:x.dismissSingleLine,expandSingleLine:x.expandSingleLine,dismissal:[x.dismissal,N],expand:[x.expand,N],actions:[p?x.actions:x.actionsSingleline,{display:"flex",flexGrow:0,flexShrink:0,flexBasis:"auto",flexDirection:"row-reverse",alignItems:"center",margin:"0 12px 0 8px",selectors:{"& button:nth-child(n+2)":{marginLeft:8}}},p&&{marginBottom:8},u&&!p&&{marginRight:0}]}}),void 0,{scope:"MessageBar"})},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(129),i=n(0),a=n(139),s=n(306),o=n(299),l=n(141),c=n(291),u=n(138),d=n(144),p=Object(c.a)((function(e,t){var n,r=Object(u.a)(e),i=Object(d.a)(e),a=e.palette,s={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:e.semanticColors.link},rootHovered:{color:a.themeDarkAlt,backgroundColor:a.neutralLighter,selectors:(n={},n[l.c]={borderColor:"Highlight",color:"Highlight"},n)},rootHasMenu:{width:"auto"},rootPressed:{color:a.themeDark,backgroundColor:a.neutralLight},rootExpanded:{color:a.themeDark,backgroundColor:a.neutralLight},rootChecked:{color:a.themeDark,backgroundColor:a.neutralLight},rootCheckedHovered:{color:a.themeDark,backgroundColor:a.neutralQuaternaryAlt},rootDisabled:{color:a.neutralTertiaryAlt}};return Object(l.h)(r,s,i,t)})),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return i.createElement(a.a,Object(r.a)({},this.props,{variantClassName:"ms-Button--icon",styles:p(n,t),onRenderText:s.a,onRenderDescription:s.a}))},t=Object(r.b)([Object(o.a)("IconButton",["theme","styles"],!0)],t)}(i.Component)},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(129),i=n(0),a=n(139),s=n(306),o=n(299),l=n(141),c=n(291),u=n(138),d=Object(c.a)((function(e,t){var n,r=Object(u.a)(e),i={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent"},rootHovered:{color:e.palette.themePrimary,selectors:(n={},n[l.c]={borderColor:"Highlight",color:"Highlight"},n)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent"},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return Object(l.h)(r,i,t)})),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.c)(t,e),t.prototype.render=function(){var e=this.props,t=e.styles,n=e.theme;return i.createElement(a.a,Object(r.a)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:d(n,t),onRenderDescription:s.a}))},t=Object(r.b)([Object(o.a)("ActionButton",["theme","styles"],!0)],t)}(i.Component)},47:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return h}));var r=n(3),i=n(8),a=(n(0),n(131)),s=n(303),o=n(153),l=n(302),c=n(149),u=(n(134),n(135),{}),d={unversionedId:"setup/reporting/cash-flow-csv",id:"setup/reporting/cash-flow-csv",isDocsHomePage:!1,title:"cash-flow-csv",description:"You can either upload a pre-defined template (such as this file) or use tabsheet 'Cash flow' our google sheets template to define your Cash flow statement.",source:"@site/docs/setup/reporting/cash-flow-csv.mdx",slug:"/setup/reporting/cash-flow-csv",permalink:"/setup/reporting/cash-flow-csv",version:"current"},p=[{value:"Definition",id:"definition",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Upload your template",id:"upload-your-template",children:[]}],m={toc:p};function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can either upload a pre-defined template (such as this file) or use tabsheet 'Cash flow' our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./template"}),"google sheets template")," to define your Cash flow statement."),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"Complete the folowing fields in the template"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ID ","[string]",": a unique identifier for the line in your cash flow statement"),Object(a.b)("li",{parentName:"ul"},"Name ","[string]",": the label shown in the reporting"),Object(a.b)("li",{parentName:"ul"},"Rank ","[integer]",": defines the order in which the items are shown "),Object(a.b)("li",{parentName:"ul"},"Parent ","[string]",": used to define subtotals in the reporting. Enter the ID of the parent")),Object(a.b)("h2",{id:"validation"},"Validation"),Object(a.b)("p",null,"Make sure these validations rules are respected:   "),Object(a.b)(s.a,{iconName:"SkypeCheck",mdxType:"Icon"})," ID needs to be unique ",Object(a.b)("br",null),Object(a.b)(s.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Name is not empty ",Object(a.b)("br",null),Object(a.b)(s.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Rank needs to be an integer and unique ",Object(a.b)("br",null),Object(a.b)(s.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Parent any PartentID used should exist in ID ",Object(a.b)("br",null),Object(a.b)(s.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The value of Parent cannot be the same as ID ",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)("h2",{id:"upload-your-template"},"Upload your template"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Make sure the status of all validation rules in the tabsheet 'Cash flow' of the template is 'TRUE'."),Object(a.b)("li",{parentName:"ol"},"Copy the definition (columns with a dark blue header) in to a csv file and save it on your computer."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),"."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)(o.a,{mdxType:"ActionButton"},"Upload")),Object(a.b)("li",{parentName:"ol"},"Browse to the CSV file on your computer and select and click 'Open'."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)(l.a,{mdxType:"PrimaryButton"},"Save")),Object(a.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(a.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(a.b)(l.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(a.b)(c.a,{mdxType:"MessageBar"},"If you want to make changes to your Cash flow statement, using our user interface click 'via user interface' above to get more information"))}h.isMDXComponent=!0}}]);