(window.webpackJsonp=window.webpackJsonp||[]).push([[36,39],{116:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},120:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(122),r=a(116),l=a(91),s=a.n(l),c=37,u=39;t.a=function(e){var t=e.block,a=e.children,l=e.defaultValue,b=e.values,h=e.groupId,d=e.className,p=Object(i.a)(),f=p.tabGroupChoices,m=p.setTabGroupChoices,w=Object(n.useState)(l),O=w[0],j=w[1],v=Object(n.useState)(!1),y=v[0],g=v[1];if(null!=h){var C=f[h];null!=C&&C!==O&&b.some((function(e){return e.value===C}))&&j(C)}var k=function(e){j(e),null!=h&&m(h,e)},N=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},x=function(){g(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",x)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),T(e)},onFocus:function(){return k(t)},onClick:function(){k(t),g(!1)},onPointerDown:function(){return g(!1)}},a)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},121:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},122:function(e,t,a){"use strict";var n=a(0),o=a(123);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},35:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return h}));var n=a(2),o=a(7),i=(a(0),a(114)),r=a(282),l=a(142),s=(a(120),a(121),{}),c={unversionedId:"setup/reporting/cash-flow-ui",id:"setup/reporting/cash-flow-ui",isDocsHomePage:!1,title:"cash-flow-ui",description:"To create a Cash flow statement via de Monitr user interface:",source:"@site/docs/setup/reporting/cash-flow-ui.mdx",slug:"/setup/reporting/cash-flow-ui",permalink:"/setup/reporting/cash-flow-ui",version:"current"},u=[{value:"Validation",id:"validation",children:[]}],b={rightToc:u};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To create a Cash flow statement via de Monitr user interface:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),"."),Object(i.b)("li",{parentName:"ol"},"Add rows by clicking '",Object(i.b)(r.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"To insert a row at a specific place select the row above where you want to insert the row (a checkmark will be visible)"),Object(i.b)("li",{parentName:"ol"},"Click '",Object(i.b)(r.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'"))),Object(i.b)("li",{parentName:"ol"},"Give the cash flow reporting line a name and if required link it to a Parent"),Object(i.b)("li",{parentName:"ol"},"Repeat this untill you have made the Cash flow statement you need"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)(l.a,{mdxType:"PrimaryButton"},"Save")),Object(i.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(i.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(i.b)(l.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(i.b)("p",null,"To change the ranking of a line in a Cash flow statement you can drag and drop the line you want to move."),Object(i.b)("h2",{id:"validation"},"Validation"),Object(i.b)("p",null,"The following validation checks are performed:"),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," There should not be any circular references made via the 'Parent' fields")}h.isMDXComponent=!0},36:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(7),i=(a(0),a(114)),r=a(282),l=a(286),s=a(142),c=a(192),u=(a(120),a(121),{}),b={unversionedId:"setup/reporting/cash-flow-csv",id:"setup/reporting/cash-flow-csv",isDocsHomePage:!1,title:"cash-flow-csv",description:"You can either upload a pre-defined template (such as this file) or use tabsheet 'Cash flow' our google sheets template to define your Cash flow statement.",source:"@site/docs/setup/reporting/cash-flow-csv.mdx",slug:"/setup/reporting/cash-flow-csv",permalink:"/setup/reporting/cash-flow-csv",version:"current"},h=[{value:"Defition",id:"defition",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Upload your template",id:"upload-your-template",children:[]}],d={rightToc:h};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can either upload a pre-defined template (such as this file) or use tabsheet 'Cash flow' our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./template"}),"google sheets template")," to define your Cash flow statement."),Object(i.b)("h2",{id:"defition"},"Defition"),Object(i.b)("p",null,"Complete the folowing fields in the template"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ID ","[string]",": a unique identifier for the line in your cash flow statement"),Object(i.b)("li",{parentName:"ul"},"Name ","[string]",": the label shown in the reporting"),Object(i.b)("li",{parentName:"ul"},"Rank ","[integer]",": defines the order in which the items are shown "),Object(i.b)("li",{parentName:"ul"},"Parent ","[string]",": used to define subtotals in the reporting. Enter the ID of the parent")),Object(i.b)("h2",{id:"validation"},"Validation"),Object(i.b)("p",null,"Make sure these validations rules are respected:   "),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," ID needs to be unique ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Name is not empty ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Rank needs to be an integer and unique ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Parent any PartentID used should exist in ID ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The value of Parent cannot be the same as ID ",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("h2",{id:"upload-your-template"},"Upload your template"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure the status of all validation rules in the tabsheet 'Cash flow' of the templat is 'TRUE'."),Object(i.b)("li",{parentName:"ol"},"Copy the definition (columns with a dark blue header) in to a csv file and save it on your computer."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),"."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)(l.a,{mdxType:"ActionButton"},"Upload")),Object(i.b)("li",{parentName:"ol"},"Browse to the CSV file on your computer and select and click 'Open'."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)(s.a,{mdxType:"PrimaryButton"},"Save")),Object(i.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(i.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(i.b)(s.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(i.b)(c.a,{mdxType:"MessageBar"},"If you want to make changes to your Cash flow statement, using our user interface click 'via user interface' above to get more information"))}p.isMDXComponent=!0},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return h})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return f}));var n=a(2),o=a(7),i=(a(0),a(114)),r=a(192),l=a(120),s=a(121),c=a(36),u=a(35),b={id:"cash-flow",title:"Cash Flow",slug:"../cash-flow"},h={unversionedId:"setup/reporting/cash-flow",id:"setup/reporting/cash-flow",isDocsHomePage:!1,title:"Cash Flow",description:"What is the Cash flow statement?",source:"@site/docs/setup/reporting/cash-flow.mdx",slug:"/setup/cash-flow",permalink:"/setup/cash-flow",version:"current",sidebar:"main",previous:{title:"Reporting",permalink:"/setup/reporting"},next:{title:"Profit & Loss and Balance Sheet",permalink:"/setup/pl-bs"}},d=[{value:"What is the Cash flow statement?",id:"what-is-the-cash-flow-statement",children:[]},{value:"Setup a Cash flow statement",id:"setup-a-cash-flow-statement",children:[]}],p={rightToc:d};function f(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-the-cash-flow-statement"},"What is the Cash flow statement?"),Object(i.b)("p",null,"A Cash flow statement gives an overview of the sources and the use of funds for a certain period of time.\nYou can create a Cash flow statement in two ways:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Direct Cash flow statement: allocating each transaction in your cash & bank to a category"),Object(i.b)("li",{parentName:"ol"},"Indirect Cash flow statement: calculated based on the transactions in your general ledger accounts (other then your cash & bank)")),Object(i.b)("p",null,"Monitr uses the indirect method to calculate the Cash flow. We will allocate transactions from the Profit & loss statement and the Balance sheet to categories in the Cash flow statement.\nCash & Bank accounts, and accounts that don't have a cash impact (see some examples ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/examples-cf"}),"here"),")"),Object(i.b)(r.a,{mdxType:"MessageBar"},"The Cash statement needs to be defined in order to define Profit & loss statement and Balance sheet."),Object(i.b)("h2",{id:"setup-a-cash-flow-statement"},"Setup a Cash flow statement"),Object(i.b)("p",null,"Monitr allows you to tailor the Cash flow statement entirely to your needs. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),".\nThis can either be done via a CSV upload or in the user interface (see below)\nThe Cash Flow table contains three fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rank: the order in which lines of the cash flow are shown in dashboards"),Object(i.b)("li",{parentName:"ul"},"Name: the label that will be shown in dahboards for this line of the cash flow"),Object(i.b)("li",{parentName:"ul"},"Parent: This field is used to manage the subtotals of your Cash flow statement. e.g. to create a subtotal 'Total cash flow'  of the lines 'Operational cash flow' and 'Financial cash flow'",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Create a line ''Total cash flow'"),Object(i.b)("li",{parentName:"ul"},"Enter 'Total cash flow' in the field 'Partent' of the 'Operational cash flow' and 'Financial cash flow'")))),Object(i.b)(l.a,{defaultValue:"ui",values:[{label:"Via User Interface",value:"ui"},{label:"Via CSV",value:"csv"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"csv",mdxType:"TabItem"},Object(i.b)(c.default,{mdxType:"CashFlowTabCSV"})),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)(u.default,{mdxType:"CashFlowTabUI"}))))}f.isMDXComponent=!0}}]);