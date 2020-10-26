(window.webpackJsonp=window.webpackJsonp||[]).push([[40,43],{36:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return h}));var n=a(2),o=a(7),i=(a(0),a(118)),r=a(286),l=a(135),s=(a(124),a(125),{}),c={unversionedId:"setup/reporting/cash-flow-ui",id:"setup/reporting/cash-flow-ui",isDocsHomePage:!1,title:"cash-flow-ui",description:"To create a Cash flow statement via de Monitr user interface:",source:"@site/docs/setup/reporting/cash-flow-ui.mdx",slug:"/setup/reporting/cash-flow-ui",permalink:"/setup/reporting/cash-flow-ui",version:"current"},b=[{value:"Validation",id:"validation",children:[]}],u={rightToc:b};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To create a Cash flow statement via de Monitr user interface:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),"."),Object(i.b)("li",{parentName:"ol"},"Add rows by clicking '",Object(i.b)(r.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"To insert a row at a specific place select the row above where you want to insert the row (a checkmark will be visible)"),Object(i.b)("li",{parentName:"ol"},"Click '",Object(i.b)(r.a,{iconName:"AddLink",mdxType:"Icon"})," insert row'"))),Object(i.b)("li",{parentName:"ol"},"Give the cash flow reporting line a name and if required link it to a Parent"),Object(i.b)("li",{parentName:"ol"},"Repeat this untill you have made the Cash flow statement you need"),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)(l.a,{mdxType:"PrimaryButton"},"Save")),Object(i.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(i.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(i.b)(l.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(i.b)("p",null,"To change the ranking of a line in a Cash flow statement you can drag and drop the line you want to move."),Object(i.b)("h2",{id:"validation"},"Validation"),Object(i.b)("p",null,"The following validation checks are performed:"),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," There should not be any circular references made via the 'Parent' fields")}h.isMDXComponent=!0},37:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(7),i=(a(0),a(118)),r=a(286),l=a(150),s=a(135),c=a(143),b=(a(124),a(125),{}),u={unversionedId:"setup/reporting/cash-flow-csv",id:"setup/reporting/cash-flow-csv",isDocsHomePage:!1,title:"cash-flow-csv",description:"You can either upload a pre-defined template (such as this file) or use tabsheet 'Cash flow' our google sheets template to define your Cash flow statement.",source:"@site/docs/setup/reporting/cash-flow-csv.mdx",slug:"/setup/reporting/cash-flow-csv",permalink:"/setup/reporting/cash-flow-csv",version:"current"},h=[{value:"Definition",id:"definition",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Upload your template",id:"upload-your-template",children:[]}],p={rightToc:h};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can either upload a pre-defined template (such as this file) or use tabsheet 'Cash flow' our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./template"}),"google sheets template")," to define your Cash flow statement."),Object(i.b)("h2",{id:"definition"},"Definition"),Object(i.b)("p",null,"Complete the folowing fields in the template"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ID ","[string]",": a unique identifier for the line in your cash flow statement"),Object(i.b)("li",{parentName:"ul"},"Name ","[string]",": the label shown in the reporting"),Object(i.b)("li",{parentName:"ul"},"Rank ","[integer]",": defines the order in which the items are shown "),Object(i.b)("li",{parentName:"ul"},"Parent ","[string]",": used to define subtotals in the reporting. Enter the ID of the parent")),Object(i.b)("h2",{id:"validation"},"Validation"),Object(i.b)("p",null,"Make sure these validations rules are respected:   "),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," ID needs to be unique ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Name is not empty ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Rank needs to be an integer and unique ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," Parent any PartentID used should exist in ID ",Object(i.b)("br",null),Object(i.b)(r.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The value of Parent cannot be the same as ID ",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("h2",{id:"upload-your-template"},"Upload your template"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure the status of all validation rules in the tabsheet 'Cash flow' of the template is 'TRUE'."),Object(i.b)("li",{parentName:"ol"},"Copy the definition (columns with a dark blue header) in to a csv file and save it on your computer."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),"."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)(l.a,{mdxType:"ActionButton"},"Upload")),Object(i.b)("li",{parentName:"ol"},"Browse to the CSV file on your computer and select and click 'Open'."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)(s.a,{mdxType:"PrimaryButton"},"Save")),Object(i.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(i.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(i.b)(s.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(i.b)(c.a,{mdxType:"MessageBar"},"If you want to make changes to your Cash flow statement, using our user interface click 'via user interface' above to get more information"))}d.isMDXComponent=!0},63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return h})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(2),o=a(7),i=(a(0),a(118)),r=a(143),l=a(124),s=a(125),c=a(37),b=a(36),u={id:"cash-flow",title:"Cash Flow",slug:"../cash-flow"},h={unversionedId:"setup/reporting/cash-flow",id:"setup/reporting/cash-flow",isDocsHomePage:!1,title:"Cash Flow",description:"What is the Cash flow statement?",source:"@site/docs/setup/reporting/cash-flow.mdx",slug:"/setup/cash-flow",permalink:"/setup/cash-flow",version:"current",sidebar:"main",previous:{title:"Reporting",permalink:"/setup/reporting"},next:{title:"Profit & Loss and Balance Sheet",permalink:"/setup/pl-bs"}},p=[{value:"What is the Cash flow statement?",id:"what-is-the-cash-flow-statement",children:[]},{value:"Setup a Cash flow statement",id:"setup-a-cash-flow-statement",children:[]}],d={rightToc:p};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-the-cash-flow-statement"},"What is the Cash flow statement?"),Object(i.b)("p",null,"A Cash flow statement gives an overview of the sources and the use of funds for a certain period of time.\nYou can create a Cash flow statement in two ways:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Direct Cash flow statement: allocating each transaction in your cash & bank to a category"),Object(i.b)("li",{parentName:"ol"},"Indirect Cash flow statement: calculated based on the transactions in your general ledger accounts (other then your cash & bank)")),Object(i.b)("p",null,"Monitr uses the indirect method to calculate the Cash flow. We will allocate transactions from the Profit & loss statement and the Balance sheet to categories in the Cash flow statement.\nCash & Bank accounts, and accounts that don't have a cash impact (see some examples ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/examples-cf"}),"here"),")"),Object(i.b)(r.a,{mdxType:"MessageBar"},"The Cash statement needs to be defined in order to define Profit & loss statement and Balance sheet."),Object(i.b)("h2",{id:"setup-a-cash-flow-statement"},"Setup a Cash flow statement"),Object(i.b)("p",null,"Monitr allows you to tailor the Cash flow statement entirely to your needs. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Reporting' - 'Cash Flow'"),".\nThis can either be done via a CSV upload or in the user interface (see below)\nThe Cash Flow table contains three fields:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rank: the order in which lines of the cash flow are shown in dashboards"),Object(i.b)("li",{parentName:"ul"},"Name: the label that will be shown in dahboards for this line of the cash flow"),Object(i.b)("li",{parentName:"ul"},"Parent: This field is used to manage the subtotals of your Cash flow statement. e.g. to create a subtotal 'Total cash flow'  of the lines 'Operational cash flow' and 'Financial cash flow'",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Create a line ''Total cash flow'"),Object(i.b)("li",{parentName:"ul"},"Enter 'Total cash flow' in the field 'Partent' of the 'Operational cash flow' and 'Financial cash flow'")))),Object(i.b)(l.a,{defaultValue:"ui",values:[{label:"Via User Interface",value:"ui"},{label:"Via CSV",value:"csv"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"csv",mdxType:"TabItem"},Object(i.b)(c.default,{mdxType:"CashFlowTabCSV"})),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)(b.default,{mdxType:"CashFlowTabUI"}))))}m.isMDXComponent=!0}}]);