"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[2505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1788:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>l,toc:()=>s,default:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={id:"amf_intro",title:"What is AMF?",slug:"/"},o=void 0,l={unversionedId:"AMF/amf_intro",id:"version-4.x.x/AMF/amf_intro",title:"What is AMF?",description:"AMF (AML Modeling Framework) is an open-source library capable of parsing and validating AML metadata documents.",source:"@site/versioned_docs/version-4.x.x/AMF/1-AMF Intro.mdx",sourceDirName:"AMF",slug:"/",permalink:"/a-ml/docs/v4/",editUrl:"https://github.com/aml-org/a-ml/edit/develop/versioned_docs/version-4.x.x/AMF/1-AMF Intro.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Tomas Fernandez",lastUpdatedAt:1645135672,formattedLastUpdatedAt:"2/17/2022",sidebarPosition:1,frontMatter:{id:"amf_intro",title:"What is AMF?",slug:"/"},sidebar:"version-4.x.x/myAutogeneratedSidebar",next:{title:"AMFs supported Specs",permalink:"/a-ml/docs/v4/AMF/amf_support"}},s=[{value:"AMF project vision",id:"amf-project-vision",children:[],level:2},{value:"AMF project goals",id:"amf-project-goals",children:[],level:2},{value:"Native support",id:"native-support",children:[{value:"Formats",id:"formats",children:[],level:3},{value:"Semantic models",id:"semantic-models",children:[],level:3},{value:"Syntactic models",id:"syntactic-models",children:[],level:3},{value:"AMF Features",id:"amf-features",children:[],level:3},{value:"Artifacts",id:"artifacts",children:[],level:3}],level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf"},"AMF")," (AML Modeling Framework) is an open-source library capable of parsing and validating AML metadata documents.\nAMF is written in ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-js.org/"},"Scala.js"),", and you can execute it in the JVM, with Node.js, or from a browser.\nYou can use AMF as a standalone command-line tool or as a library in Scala and Java, and in web and Node.js applications."),(0,r.kt)("p",null,"AMF source code is publicly available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf"},"AMF Github repository")," under the ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache 2.0 License"),"."),(0,r.kt)("h2",{id:"amf-project-vision"},"AMF project vision"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aml-org.github.io/aml-spec"},"AML")," enables you to formally describe different kinds of models, whether syntactic models\u2014specific to languags or specifications-or semantic models specific to industries and domains."),(0,r.kt)("p",null,"AMF can parse and generate descriptions of those models as sets of modular documents and store those connected descriptions into a single unified data graph."),(0,r.kt)("p",null,"The modular design of AMF enables you to create plugins capable of parsing other metadata syntaxes not defined by AML.\nFor example, the most used AMF module, the web-api module, can parse ",(0,r.kt)("a",{parentName:"p",href:"https://raml.org/"},"RAML"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification"},"OAS")," (formerly Swagger), and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/asyncapi/asyncapi"},"AsyncAPI")," specification languages."),(0,r.kt)("p",null,"Furthermore, AMF can also validate APIs and emit them in different API languages."),(0,r.kt)("h2",{id:"amf-project-goals"},"AMF project goals"),(0,r.kt)("p",null,"The AMF project supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multiple formats with a unified programming interface and model"),(0,r.kt)("li",{parentName:"ul"},"Syntactic and semantic model layers"),(0,r.kt)("li",{parentName:"ul"},"Validation at syntactic and semantic model layers"),(0,r.kt)("li",{parentName:"ul"},"Production of formal specifications of any specification language"),(0,r.kt)("li",{parentName:"ul"},"An Extensible, single syntactic model for multiple semantic models"),(0,r.kt)("li",{parentName:"ul"},"The creation of consistent parsing behaviors across different syntactic models"),(0,r.kt)("li",{parentName:"ul"},"Bi-directional transformation and export"),(0,r.kt)("li",{parentName:"ul"},"Custom parsing, resolution, and generation pipelines")),(0,r.kt)("h2",{id:"native-support"},"Native support"),(0,r.kt)("p",null,"AMF natively supports the following formats and semantic and syntactic models:"),(0,r.kt)("h3",{id:"formats"},"Formats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAML"),(0,r.kt)("li",{parentName:"ul"},"JSON")),(0,r.kt)("h3",{id:"semantic-models"},"Semantic models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'WebApi (or "Web APIs" as in "APIs accessible over the network")')),(0,r.kt)("h3",{id:"syntactic-models"},"Syntactic models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'JSON-LD "AMF model"'),(0,r.kt)("li",{parentName:"ul"},'RAML 0.8 and 1.0 (mapped to "WebApi")'),(0,r.kt)("li",{parentName:"ul"},'OpenAPI (OAS) 2.0 and 3.0 (mapped to "WebApi")'),(0,r.kt)("li",{parentName:"ul"},'AsyncAPI 2.0 (mapped to "AsyncApi")')),(0,r.kt)("p",null,"You can extend these models and others using custom ",(0,r.kt)("a",{parentName:"p",href:"https://aml-org.github.io/aml-spec"},"AML-defined models"),". For formats and models that cannot be expressed with AML, you can create custom plugins."),(0,r.kt)("h3",{id:"amf-features"},"AMF Features"),(0,r.kt)("p",null,"The key features of AMF include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parsing"),(0,r.kt)("li",{parentName:"ul"},"Resolution",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stages and pipelines"))),(0,r.kt)("li",{parentName:"ul"},"Validation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Custom model constraints (WebApi)"),(0,r.kt)("li",{parentName:"ul"},"SHACL (vocabularies and custom validations)"))),(0,r.kt)("li",{parentName:"ul"},"Rendering")),(0,r.kt)("h3",{id:"artifacts"},"Artifacts"),(0,r.kt)("p",null,"Artifacts to use AMF can be obtained from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://repository-master.mulesoft.org/nexus/content/repositories/releases/com/github/amlorg/"},"Maven")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/amf-client-js"},"NPM"))))}c.isMDXComponent=!0}}]);