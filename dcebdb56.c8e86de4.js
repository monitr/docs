(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var i=n(3),a=n(8),o=(n(0),n(133)),c=n(305),l=n(157),p=n(145),r=n(155),b=(n(138),n(139),{}),u={unversionedId:"setup/mapping/mapping-csv",id:"setup/mapping/mapping-csv",isDocsHomePage:!1,title:"mapping-csv",description:"Definition",source:"@site/docs/setup/mapping/mapping-csv.mdx",slug:"/setup/mapping/mapping-csv",permalink:"/setup/mapping/mapping-csv",version:"current"},d=[{value:"Definition",id:"definition",children:[]},{value:"Validation",id:"validation",children:[]},{value:"Upload your template",id:"upload-your-template",children:[]}],s={toc:d};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"definition"},"Definition"),Object(o.b)("p",null,"Complete the folowing fields in the template"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Account ","[string]",": the code of the general ledger account"),Object(o.b)("li",{parentName:"ul"},"Analytical Account ","[string]",": the code of the analytical account (optional)"),Object(o.b)("li",{parentName:"ul"},"ReportingID ","[string]",": the ID of the "),Object(o.b)("li",{parentName:"ul"},"Comment ","[string]",": A comment (optional)")),Object(o.b)("h2",{id:"validation"},"Validation"),Object(o.b)("p",null,"Make sure these validations rules are respected:"),Object(o.b)(c.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The combination of Account and Analytical Account needs to be unique ",Object(o.b)("br",null),Object(o.b)(c.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Account needs to exist in your accounting ",Object(o.b)("br",null),Object(o.b)(c.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Analytical Account needs exist in your accounting ",Object(o.b)("br",null),Object(o.b)(c.a,{iconName:"SkypeCheck",mdxType:"Icon"})," A mapping to a reporting line needs to be made in Reporting ID ",Object(o.b)("br",null),Object(o.b)(c.a,{iconName:"SkypeCheck",mdxType:"Icon"})," The Mapping needs to be made to a reporting line without children ",Object(o.b)("br",null),Object(o.b)("h2",{id:"upload-your-template"},"Upload your template"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure the status of all validation rules in the tabsheet 'Mapping' of the template is 'TRUE'."),Object(o.b)("li",{parentName:"ol"},"Copy the definition (columns with a dark blue header) in to a csv file and save it on your computer."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://app.monitr.be/dashboard/organisations/entities/definitions/mapping"}),"Go to tab 'Mapping'"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)(l.a,{mdxType:"ActionButton"},"Upload")),Object(o.b)("li",{parentName:"ol"},"Browse to the CSV file on your computer and select and click 'Open'."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)(p.a,{mdxType:"PrimaryButton"},"Save")),Object(o.b)("li",{parentName:"ol"},"If any errors occur they will be highlighted in red. Your report will not be saved."),Object(o.b)("li",{parentName:"ol"},"Fix the errors and click ",Object(o.b)(p.a,{mdxType:"PrimaryButton"},"Save")," untill the report is succelfully saved")),Object(o.b)(r.a,{mdxType:"MessageBar"},"If you upload a CSV file with mapping, this will overwrite (not append) your current mappaings."))}m.isMDXComponent=!0}}]);