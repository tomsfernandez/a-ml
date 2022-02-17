"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[8840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),o=a(2389),i=a(5773),l=a(6010);const s="tabItem_LplD";function p(e){var t,a,o;const{lazy:p,block:m,defaultValue:u,values:c,groupId:d,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,i.lx)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===u?u:null!=(t=null!=u?u:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:y}=(0,i.UB)(),[A,w]=(0,r.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:M}=(0,i.o5)();if(null!=d){const e=k[d];null!=e&&e!==A&&h.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==A&&(M(t),w(n),null!=d&&y(d,n))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},f)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(g.filter((e=>e.props.value===A))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},6582:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,myStyle:()=>m,toc:()=>u,default:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(9877),i=a(8215);const l={id:"getting_started",title:"Getting Started with AMF",slug:"/",sidebar_position:1},s=void 0,p={unversionedId:"amf/getting_started",id:"amf/getting_started",title:"Getting Started with AMF",description:"If you're coming from AMF version 4.x.x and already use AMF, see the",source:"@site/docs/amf/getting-started.mdx",sourceDirName:"amf",slug:"/",permalink:"/a-ml/docs/",editUrl:"https://github.com/aml-org/a-ml/edit/develop/docs/amf/getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Tomas Fernandez",lastUpdatedAt:1645135672,formattedLastUpdatedAt:"2/17/2022",sidebarPosition:1,frontMatter:{id:"getting_started",title:"Getting Started with AMF",slug:"/",sidebar_position:1},sidebar:"myAutogeneratedSidebar",next:{title:"Migrating from AMF 4 to AMF 5",permalink:"/a-ml/docs/amf/migration_guide"}},m={padding:"15px 5px"},u=[{value:"What is AMF?",id:"what-is-amf",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"More resources",id:"more-resources",children:[],level:2}],c={myStyle:m,toc:u};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're coming from AMF version 4.x.x and already use AMF, see the\n",(0,r.kt)("a",{parentName:"p",href:"amf/migration_guide"},"Migration Guide to version 5"),"."))),(0,r.kt)("h2",{id:"what-is-amf"},"What is AMF?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf"},"AMF")," (AML Modeling Framework) is a powerful open-source library capable of parsing,\ntransforming, validating and rendering arbitrary models, with out-of-the-box features for API models.\nWorks with ",(0,r.kt)("a",{parentName:"p",href:"https://raml.org/"},"RAML"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification"},"OAS")," (formerly Swagger),\nand ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/asyncapi/asyncapi"},"AsyncAPI")," API specification languages.\nCustom models are defined with AML ",(0,r.kt)("a",{parentName:"p",href:"https://aml-org.github.io/aml-spec"},"AML")," Vocabularies and Dialects."),(0,r.kt)("p",null,"If you want to know more about AMF and all its features, visit the ",(0,r.kt)("a",{parentName:"p",href:"amf/what_is_amf"},"What is AMF")," page."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{style:m,className:"col col--6"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"api contract model",src:a(9586).Z,width:"670",height:"1202"}))),(0,r.kt)("div",{style:m,className:"col col--6"},(0,r.kt)("p",null,"AMF provides out-of-the-box a model and parsers for API specs, called the ",(0,r.kt)("strong",{parentName:"p"},"API Contract Model"),"."),(0,r.kt)("p",null,"This model contains all information expressed in the source API document, so you can perform validations, transformations,\nand even convert the API from one specification to another. The model can also be rendered in JSON-LD, you can learn more\nabout the API Contract Model ",(0,r.kt)("a",{parentName:"p",href:"amf/using-amf/amf_model"},"here"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also define your own custom model and parsers using the ",(0,r.kt)("a",{parentName:"p",href:"aml/aml"},"AML language"),"."))))),(0,r.kt)("p",null,"For example, consider the following OAS 3.0 API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Sample API in OAS 3.0"',title:'"Sample',API:!0,in:!0,OAS:!0,'3.0"':!0},"openapi: 3.0.0\ninfo:\n  title: Sample API\n  description: Optional multiline or single-line description.\n  version: 0.1.9\nservers:\n  - url: http://api.example.com/v1\npaths:\n  /users:\n    get:\n      responses:\n        '200':\n          description: A JSON array of user names\n          content:\n            application/json:\n              schema:\n                type: array\n                items:\n                  type: string\n")),(0,r.kt)("p",null,"The following code shows how AMF can ",(0,r.kt)("strong",{parentName:"p"},"parse")," the OAS 3.0 API (generating an instance of the API Contract Model), ",(0,r.kt)("strong",{parentName:"p"},"validate")," the API is correct,\n",(0,r.kt)("strong",{parentName:"p"},"transform")," it (requires compatibility pipeline), and ",(0,r.kt)("strong",{parentName:"p"},"render")," the same API in RAML 1.0."),(0,r.kt)(o.Z,{groupId:"languages",defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val raml10Client: AMFBaseUnitClient = RAMLConfiguration.RAML10().baseUnitClient()\nval oas30Client: AMFBaseUnitClient = OASConfiguration.OAS30().baseUnitClient()\noas30Client.parse("file://path/to/api.yaml") map { parseResult =>\n  oas30Client.validate(parseResult.baseUnit) map { validationReport =>\n    println("report.conforms == " + validationReport.conforms)\n    val transformResult = raml10Client.transform(parseResult.baseUnit, PipelineId.Compatibility)\n    val renderResult = raml10Client.render(transformResult.baseUnit)\n  }\n}\n'))),(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AMFBaseUnitClient oas30Client = OASConfiguration.OAS30().baseUnitClient();\nAMFBaseUnitClient raml10Client = RAMLConfiguration.RAML10().baseUnitClient();\nBaseUnit oasApi = oas30Client.parse("file://path/to/api.yaml").get().baseUnit();\nAMFValidationReport validationReport = oas30Client.validate(oasApi).get();\nSystem.out.println("report.conforms() == " + validationReport.conforms());\nBaseUnit convertedRaml = raml10Client.transform(ramlApi, PipelineId.Compatibility()).baseUnit();\nString result = raml10Client.render(convertedRaml).trim();\n'))),(0,r.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'let oas30Client = OASConfiguration.OAS30().baseUnitClient();\nlet raml10Client = RAMLConfiguration.RAML10().baseUnitClient();\nlet parseResult: AMFDocumentResult = await oas30Client.parseDocument("file://path/to/api.yaml");\nlet validationReport: AMFValidationReport = await client.validate(parseResult.document);\nconsole.log("report.conforms = ", validationReport.conforms)\nlet transformResult: AMFResult = await raml10Client.transform(parseResult.baseUnit, PipelineId.Compatibility);\nlet rendered: string = raml10Client.render(transformResult.baseUnit, "application/yaml");\n')))),(0,r.kt)("p",null,"Resulting in the following API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Sample API parsed, validated, transformed, and rendered in RAML 1.0"',title:'"Sample',API:!0,"parsed,":!0,"validated,":!0,"transformed,":!0,and:!0,rendered:!0,in:!0,RAML:!0,'1.0"':!0},'#%RAML 1.0\ntitle: Sample API\nbaseUri: http://api.example.com/v1\ndescription: Optional multiline or single-line description.\nversion: 0.1.9\n/users:\n  get:\n    responses:\n      "200":\n        description: A JSON array of user names\n        body:\n          application/json:\n            type: array\n            items:\n              type: string\n')),(0,r.kt)("h2",{id:"more-resources"},"More resources"),(0,r.kt)("p",null,"This is a simplified introduction to the AML Modeling Framework. Continue learning about AMF in the following docs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For more information about how each AMF operation works, visit the ",(0,r.kt)("a",{parentName:"li",href:"amf/using-amf/amf_setup"},"Using AMF")," documentation."),(0,r.kt)("li",{parentName:"ul"},"If you want to know more about AML, the power behind AMF, visit the ",(0,r.kt)("a",{parentName:"li",href:"aml/aml"},"AML section"),"."),(0,r.kt)("li",{parentName:"ul"},"If you're looking for specific use cases or code examples, consider the ",(0,r.kt)("a",{parentName:"li",href:"cookbook/code_snippets"},"Cookbook section"),".")))}d.isMDXComponent=!0},9586:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api-contract-model-d35ec013ae01c59475178d8890eaec26.png"}}]);