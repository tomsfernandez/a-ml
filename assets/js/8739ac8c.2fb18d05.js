"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[3893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7270:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>o,metadata:()=>l,toc:()=>s,myStyle:()=>c,default:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={id:"migration_guide",title:"Migrating from AMF 4 to AMF 5",sidebar_position:2},o="Main differences between AMF 4 and AMF 5",l={unversionedId:"amf/migration_guide",id:"amf/migration_guide",title:"Migrating from AMF 4 to AMF 5",description:"The main purpose behind AMF 5 is to make AMF easier to use, modular, composable, and simpler to understand.",source:"@site/docs/amf/migration-guide.mdx",sourceDirName:"amf",slug:"/amf/migration_guide",permalink:"/docs/amf/migration_guide",editUrl:"https://github.com/aml-org/a-ml/edit/develop/docs/amf/migration-guide.mdx",tags:[],version:"current",lastUpdatedBy:"Tomas Fernandez",lastUpdatedAt:1645135312,formattedLastUpdatedAt:"2/17/2022",sidebarPosition:2,frontMatter:{id:"migration_guide",title:"Migrating from AMF 4 to AMF 5",sidebar_position:2},sidebar:"myAutogeneratedSidebar",previous:{title:"Getting Started with AMF",permalink:"/docs/"},next:{title:"What is AMF?",permalink:"/docs/amf/what_is_amf"}},s=[{value:"No initialization required in AMF 5",id:"no-initialization-required-in-amf-5",children:[],level:3},{value:"Unified client interface",id:"unified-client-interface",children:[],level:3}],c={padding:"15px 5px"},d={toc:s,myStyle:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"main-differences-between-amf-4-and-amf-5"},"Main differences between AMF 4 and AMF 5"),(0,a.kt)("p",null,"The main purpose behind AMF 5 is to make AMF easier to use, modular, composable, and simpler to understand."),(0,a.kt)("p",null,"To achieve this we made the following changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AMF has been reorganized into separate modules"),(0,a.kt)("li",{parentName:"ul"},"Changes in the state of the program are now more explicit and transparent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Removed static code and introduced immutable objects, builders, fluent interfaces and more"),(0,a.kt)("li",{parentName:"ul"},"Unified configuration logic like options, plugins, environments, etc. in a single configuration object"))),(0,a.kt)("li",{parentName:"ul"},"Client interface has been simplified and redesigned for better modularity")),(0,a.kt)("p",null,"Let's go through the details of each new improvement:"),(0,a.kt)("h3",{id:"no-initialization-required-in-amf-5"},"No initialization required in AMF 5"),(0,a.kt)("p",null,"To use AMF 4 you have to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"AMF.init()")," method which has no room for customization and what it does exactly is obscure.\nMoreover, you still have to create and configure each operation handler you want. For example, to transform a\nRAML 1.0 API to an OAS 2.0 you still have to create and configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"Raml10Parser"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Oas20Resolver"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Oas20Renderer")," object:"),(0,a.kt)("p",null,"Not surprisingly, most of the issues reported to us from AMF 4 were caused by our static operations, which were difficult to reproduce and debug.\nBecause of this, AMF 5 removed static initialization and static operations, replacing them with a customizable configuration object and clients objects\nthat hold all operations available. More information in the ",(0,a.kt)("a",{parentName:"p",href:"#unified-client-interface"},"Unified client interface")," section."),(0,a.kt)("h3",{id:"unified-client-interface"},"Unified client interface"),(0,a.kt)("p",null,"All AMF operations were previously dispersed across multiple classes, having to create and call multiple objects\nto do the most common AMF operations. The AMF 4 client interface looked something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AMF 4 client interface",src:n(3422).Z,width:"960",height:"540"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In AMF 5 initialization is not required, and operations like ",(0,a.kt)("inlineCode",{parentName:"p"},"parse()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"transform()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"validate()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," are all\nunder the ",(0,a.kt)("a",{parentName:"p",href:"using-amf/amf_configuration"},"AMF Configuration and Client")," objects."),(0,a.kt)("p",null,"Furthermore, each operation provides its own feedback. Previously in AMF 4 you had to validate an API to check\nfor parsing errors, while in AMF 5 the parsing operation returns its own results."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AMF 5 client interface",src:n(4206).Z,width:"960",height:"540"})),(0,a.kt)("p",null,"The following code snippet is a transformation of an API from RAML 1.0 to OAS 2.0 that illustrates the differences between interfaces:"),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{style:c,className:"col col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",4:!0,className:"language-java",metastring:'title="AMF 4 initialization"',title:'"AMF','initialization"':!0},'AMF.init().get();\nfinal Raml10Parser parser = new Raml10Parser();\nfinal Oas20Resolver resolver = new Oas20Resolver();\nfinal Oas20Renderer renderer = new Oas20Renderer();\nfinal BaseUnit ramlApi = parser.parseFileAsync("file://path/to/api.raml").get();\nfinal BaseUnit convertedOasApi = resolver.resolve(ramlApi, ResolutionPipeline.COMPATIBILITY_PIPELINE());\nfinal String result = renderer.generateString(convertedOasApi).get().trim();\n'))),(0,a.kt)("div",{style:c,className:"col col--6"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",5:!0,className:"language-java",metastring:'title="AMF 5 configuration"',title:'"AMF','configuration"':!0},'AMFBaseUnitClient oas20Client = OASConfiguration.OAS20().baseUnitClient();\nAMFBaseUnitClient raml10Client = RAMLConfiguration.RAML10().baseUnitClient();\nfinal BaseUnit ramlApi = raml10Client.parse("file://path/to/api.raml").get().baseUnit();\nfinal BaseUnit convertedOas = oas20Client.transform(ramlApi, PipelineId.Compatibility()).baseUnit();\nfinal String result = oas20Client.render(convertedOas).trim();\n'))))))}p.isMDXComponent=!0},3422:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/amf4-client-interface-a832ffd426272618e5a09cfb8607b94e.png"},4206:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/amf5-client-interface-2d540062e38929857e0f747d1aab1da0.png"}}]);