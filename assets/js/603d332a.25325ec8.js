"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[647],{3416:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(1736);const i={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/main/"},s={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/main/",scala:"scala/scalaPlatform/",java:"java/javaPlatform/",ts:"ts/"};const r=e=>{let{AMFVersion:t,language:n,example:r,lineStart:l,lineEnd:c,hideLink:d,fromMain:p}=e;const m=(0,a.useRef)(!0),[u,h]=(0,a.useState)(""),[v,f]=(0,a.useState)(""),g=(0,a.useCallback)((async()=>{const e=function(e){return"v4"===e?i:s}(t),a=function(e,t){if(t===i)return"";switch(e){case"scala":default:return t.scala;case"java":return t.java;case"ts":return t.ts;case"js":return t.js}}(n,e),o=(p?e.mainUrl:e.testsUrl)+a+r,d=o.replace("raw.githubusercontent.com/aml-org/examples","github.com/aml-org/examples/tree"),u=await fetch(o),v=await u.text();if(!m.current)return null;if(f(d),h(v),c-l>0){let e=v.split("\n").slice(l,c).join("\n");h(e)}}),[]);return(0,a.useEffect)((()=>(g(),()=>{m.current=!1})),[]),a.createElement("div",null,a.createElement(o.Z,{className:n},u),!d&&a.createElement("p",null,"Code extracted from the examples ",a.createElement("strong",null,a.createElement("a",{href:v},"GitHub repository")),"."))}},8215:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=function(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),i=n(2389),s=n(5773),r=n(6010);const l="tabItem_LplD";function c(e){var t,n,i;const{lazy:c,block:d,defaultValue:p,values:m,groupId:u,className:h}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.lx)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.UB)(),[w,A]=(0,o.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=u){const e=b[u];null!=e&&e!==w&&f.some((t=>t.value===e))&&A(e)}const T=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==w&&(x(t),A(a),null!=u&&y(u,a))},M=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},h)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:M,onFocus:T,onClick:T},i,{className:(0,r.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},2526:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>d,myStyle:()=>p,toc:()=>m,default:()=>h});var a=n(7462),o=(n(7294),n(3905)),i=n(9877),s=n(8215),r=n(3416);const l={id:"amf_conversion",title:"AMF Conversion",sidebar_position:1},c=void 0,d={unversionedId:"related-docs/amf_conversion",id:"related-docs/amf_conversion",title:"AMF Conversion",description:"The functionality expressed in this documentation is currently a work in progress.",source:"@site/docs/related-docs/amf-conversion.mdx",sourceDirName:"related-docs",slug:"/related-docs/amf_conversion",permalink:"/docs/related-docs/amf_conversion",editUrl:"https://github.com/aml-org/a-ml/edit/develop/docs/related-docs/amf-conversion.mdx",tags:[],version:"current",lastUpdatedBy:"Tomas Fernandez",lastUpdatedAt:1645135312,formattedLastUpdatedAt:"2/17/2022",sidebarPosition:1,frontMatter:{id:"amf_conversion",title:"AMF Conversion",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"AMF code snippets",permalink:"/docs/cookbook/code_snippets"},next:{title:"Async + RAML Data Types in AMF",permalink:"/docs/related-docs/async_raml_datatypes"}},p={padding:"15px 5px"},m=[{value:"Conversion Goals",id:"conversion-goals",children:[{value:"Concepts present in a spec but nonexistent in another aren&#39;t supported",id:"concepts-present-in-a-spec-but-nonexistent-in-another-arent-supported",children:[],level:3},{value:"Not all specs are supported",id:"not-all-specs-are-supported",children:[],level:3},{value:"Information may be lost",id:"information-may-be-lost",children:[],level:3},{value:"Default conversion is not customizable",id:"default-conversion-is-not-customizable",children:[],level:3},{value:"Round-trip conversions",id:"round-trip-conversions",children:[],level:3},{value:"Why don&#39;t we use annotations to render incompatible content?",id:"why-dont-we-use-annotations-to-render-incompatible-content",children:[],level:3},{value:"Why have some items in the spec lost their relative order?",id:"why-have-some-items-in-the-spec-lost-their-relative-order",children:[],level:3},{value:"Can I parse and render my API from a spec to the same one?",id:"can-i-parse-and-render-my-api-from-a-spec-to-the-same-one",children:[],level:3},{value:"Why do I have to use conversion resolution? Can&#39;t Renderers know how to render correctly?",id:"why-do-i-have-to-use-conversion-resolution-cant-renderers-know-how-to-render-correctly",children:[],level:3},{value:"RAML 1.0 converted to OAS 2.0",id:"raml-10-converted-to-oas-20",children:[],level:3},{value:"Code Examples",id:"code-examples",children:[],level:3}],level:2}],u={myStyle:p,toc:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The functionality expressed in this documentation is currently a work in progress.\nIf any bugs are found that do not satisfy these functionalities,\nplease file an issue in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf/issues"},"amf repository"),"."))),(0,o.kt)("h1",{id:"what-is-webapis-conversion"},"What is WebAPIs conversion?"),(0,o.kt)("p",null,"Conversion stands for the capability of parsing a web API from one specification into an AMF ",(0,o.kt)("a",{parentName:"p",href:"/docs/amf/using-amf/amf_model"},"API Contract Model"),"\nand then rendering said model as a different specification.\nIt's a ",(0,o.kt)("em",{parentName:"p"},"cross parsing-rendering process")," from a source spec to a different target spec."),(0,o.kt)("p",null,"Different specifications can have different required fields, and the same information conceptually may not be described in the same way.\nThis is why the AMF API Contract Model needs to go through a transformation process called ",(0,o.kt)("em",{parentName:"p"},"\u201cCompatibility resolution\u201d"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compatibility resolution")," is a specific resolution pipeline that is used to adapt an API Contract Model parsed from one spec (source),\nto fulfill the requirements of another spec in which it will be rendered (target).\nAn example of how to use Compatibility Resolution can be seen in ",(0,o.kt)("a",{parentName:"p",href:"#conversion-examples"},"Example 1"),"."),(0,o.kt)("p",null,"How does this impact the API Contract Model? For example, fields that are not required in the origin spec but required in the target spec,\nwill be added with default values if they are not present in the origin spec."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"The Objective")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The objective of conversion is to ",(0,o.kt)("strong",{parentName:"p"},"output a valid AMF API Contract Model for the spec in which it will be rendered"),".\nIt aims to ",(0,o.kt)("strong",{parentName:"p"},"keep information loss to a minimum through a best-effort process")," with some limitations."))),(0,o.kt)("h2",{id:"conversion-goals"},"Conversion Goals"),(0,o.kt)("p",null,"Conversion resolution has several goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make transitioning to/from OAS to RAML easier for the end user"),(0,o.kt)("li",{parentName:"ul"},"Give the user an approximate view of what their API in another spec would look like"),(0,o.kt)("li",{parentName:"ul"},"Let tools use specs that they don't directly support"),(0,o.kt)("li",{parentName:"ul"},"Take advantage of spec-specific tooling",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"for example, converting to OAS to use ",(0,o.kt)("a",{parentName:"li",href:"https://swagger.io/tools/swagger-ui"},"swagger-ui")," in a microservice or using a trusted client-spec generator that only works with RAML")))),(0,o.kt)("h1",{id:"conversion-limitations"},"Conversion limitations"),(0,o.kt)("p",null,"The AMF team, having listened to other team's needs, is the one that dictates how the model is adapted to fit other specs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there is 1:1 information type mapping between specs it will be converted"),(0,o.kt)("li",{parentName:"ul"},"If there are missing mandatory fields, a default value will be added\nThe default's value is opinionated, meaning that there may be more than one possible value, and we choose which one we use"),(0,o.kt)("li",{parentName:"ul"},"Anything else is omitted")),(0,o.kt)("h3",{id:"concepts-present-in-a-spec-but-nonexistent-in-another-arent-supported"},"Concepts present in a spec but nonexistent in another aren't supported"),(0,o.kt)("p",null,"Sometimes a spec may introduce concepts that don't exist in other specs. There are many cases coming from RAML to OAS, some are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datatype Fragments"),(0,o.kt)("li",{parentName:"ul"},"Libraries"),(0,o.kt)("li",{parentName:"ul"},"Resource Types and Traits"),(0,o.kt)("li",{parentName:"ul"},"Overlays and Extensions")),(0,o.kt)("p",null,"These concepts cannot be converted to OAS as they do not exist in that spec.\nThese constructs can be migrated to OAS if and only if they are referenced from a root Api document."),(0,o.kt)("h3",{id:"not-all-specs-are-supported"},"Not all specs are supported"),(0,o.kt)("p",null,"As a consequence of the previous limitation, not all specs can be converted between each other. Currently, Async API is not supported for conversion.\nIts event-led concepts don't have a direct correspondence to REST concepts described in RAML or OAS.\nFor example, how would an Async APIs ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"binding")," be in RAML? The amount of similar concepts is simply not enough to create similar models."),(0,o.kt)("p",null,"Supported conversions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RAML 1.0 to OAS 2.0 and vice-versa"),(0,o.kt)("li",{parentName:"ul"},"RAML 1.0 to OAS 3.0 and vice-versa")),(0,o.kt)("h3",{id:"information-may-be-lost"},"Information may be lost"),(0,o.kt)("p",null,"Original information that is incompatible with the target spec may be lost.\nThis is also a consequence of having concepts present in source spec that don't exist in the target spec.\nFor example OAS 3 links have no way of being migrated into RAML and will not be rendered in the converted RAML spec."),(0,o.kt)("p",null,"In the next example, not all the RAML  ",(0,o.kt)("inlineCode",{parentName:"p"},"documentation")," nodes can be migrated to OAS 3.0 ",(0,o.kt)("inlineCode",{parentName:"p"},"externalDocs")," nodes.\nIn fact, only the first ",(0,o.kt)("inlineCode",{parentName:"p"},"documentation")," node is kept while the others are lost.\nAs the RAML 1.0 ",(0,o.kt)("inlineCode",{parentName:"p"},"documentation")," does not define an url like OAS 3.0's does, an url node is defined with an \u201cempty\u201d url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="RAML to OAS 3.0 documentation conversion example - RAML code"',title:'"RAML',to:!0,OAS:!0,"3.0":!0,documentation:!0,conversion:!0,example:!0,"-":!0,RAML:!0,'code"':!0},"documentation:\n    - title: Test Console and Mocking Service\n    content: |\n        Welcome to the \\_Test API\\_ Documentation. The \\_Test API\\_\n        allows you to test console and mocking service features\n        [integration libraries](https://mulesoft.com)\n    - title: Legal\n    content: !include docs/api.md\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="RAML to OAS 3.0 documentation conversion example - OAS code"',title:'"RAML',to:!0,OAS:!0,"3.0":!0,documentation:!0,conversion:!0,example:!0,"-":!0,'code"':!0},"externalDocs:\n    url: http://\n    description: |\n        Welcome to the \\_Test API\\_ Documentation. The \\_Test API\\_\n        allows you to test console and mocking service features\n        [integration libraries](https://mulesoft.com)\n")),(0,o.kt)("h3",{id:"default-conversion-is-not-customizable"},"Default conversion is not customizable"),(0,o.kt)("p",null,"Each spec conversion is implemented as a different ",(0,o.kt)("em",{parentName:"p"},"Resolution Pipeline"),", and provided pipelines are not modifiable.\nThus, the provided default conversion functionality is not customizable.\nHowever, a different conversion resolution can be implemented by creating a new ",(0,o.kt)("em",{parentName:"p"},"ResolutionPipeline")," with the required conversion stages."),(0,o.kt)("p",null,"We know and understand that the same API can be modeled and emitted in different ways following different practices, but it's not possible to cover them all."),(0,o.kt)("h3",{id:"round-trip-conversions"},"Round-trip conversions"),(0,o.kt)("p",null,"When AMF adapts an API Contract Model to be able to render it in another spec, it knows from which spec the model was parsed (spec A) and to which spec the model will be rendered (spec B).\nAfter the model is rendered that knowledge is lost as that file is just another API from spec B.\nThis context loss makes it impossible to convert back again from spec B to spec A and expect exactly the same content."),(0,o.kt)("p",null,"Previously, AMF attempted to reduce this information lost in conversion by rendering constructs that could only be parsed by them.\nThis was often done with special API constructs given by the specs and recognized by AMF:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/raml-org/raml-spec/blob/master/versions/raml-10/raml-10.md#annotations"},(0,o.kt)("em",{parentName:"a"},"annotations"))," in RAML, written as ",(0,o.kt)("inlineCode",{parentName:"li"},"amf-.*")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#specification-extensions"},(0,o.kt)("em",{parentName:"a"},"specification extensions"))," in OpenApi, written as ",(0,o.kt)("inlineCode",{parentName:"li"},"x-amf-.*"))),(0,o.kt)("p",null,"These attempts to keep as much information possible have two main drawbacks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AMF can't know whether some content in the rendered spec, like annotations, was rendered for compatibility purposes, or it is something that a spec author wanted to have in the spec"),(0,o.kt)("li",{parentName:"ul"},"All recognizable attributes that AMF can write in the spec to identify it as coming from a compatibility context can be emulated by a spec designer with a modeling intention and are therefore invalid as conversion identifiers")),(0,o.kt)("h1",{id:"common-questions"},"Common Questions"),(0,o.kt)("h3",{id:"why-dont-we-use-annotations-to-render-incompatible-content"},"Why don't we use annotations to render incompatible content?"),(0,o.kt)("p",null,"Incompatible content isn't rendered in an annotation because it goes against one of the goals of conversion: take advantage of tooling in a specific spec.\nAnnotation-rendered incompatible content will not be processed by tooling with the intent it was added to the spec, thus rendering that content useless."),(0,o.kt)("h3",{id:"why-have-some-items-in-the-spec-lost-their-relative-order"},"Why have some items in the spec lost their relative order?"),(0,o.kt)("p",null,"AMF doesn't guarantee that items keep their relative order. The framework does a best-effort of keeping order by reusing the spec's lexical information.\nAPI resolution may sometimes make that lexical information useless or meaningless due to several operations that it performs.\nThis is significant especially in conversion where fields may be added, removed or transformed."),(0,o.kt)("p",null,"Why doesn't AMF guarantee relative order? AMF's API Contract Model is a directed cyclic graph.\nIn a graph, outgoing edges from a vertex aren't ordered relatively as the only thing that matters is where those edges go, not how they are ordered. The same applies to AMF's model."),(0,o.kt)("h3",{id:"can-i-parse-and-render-my-api-from-a-spec-to-the-same-one"},"Can I parse and render my API from a spec to the same one?"),(0,o.kt)("p",null,"You shouldn't resolve the model with a compatibility pipeline as these pipelines are just to move between different specifications."),(0,o.kt)("p",null,"To render to the same specification you shouldn't apply a resolution unless you want the model to also be resolved (apply traits, resource types, apply inheritance and links, solve parameters, etc)."),(0,o.kt)("p",null,"Although you can cycle (parse and render) your API using AMF you should reconsider why you are doing it and see if the framework has the capabilities of achieving what you seek in a different, more useful way."),(0,o.kt)("h3",{id:"why-do-i-have-to-use-conversion-resolution-cant-renderers-know-how-to-render-correctly"},"Why do I have to use conversion resolution? Can't Renderers know how to render correctly?"),(0,o.kt)("p",null,"Rendering has to render any model that is passed to the Renderers, it can't modify said model.\nThis is why conversion is done in a resolution stage (using a specific pipeline for compatibility), it is the only place where the model can be transformed before rendering."),(0,o.kt)("h1",{id:"conversion-examples"},"Conversion Examples"),(0,o.kt)("h3",{id:"raml-10-converted-to-oas-20"},"RAML 1.0 converted to OAS 2.0"),(0,o.kt)("p",null,"In this example we use AMF to parse a RAML API, resolve it with CompatibilityPipeline and then render the API in OAS 2.0 for a full conversion.\nNotice some changes made by the conversion to render a compatible target API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RAML has ",(0,o.kt)("inlineCode",{parentName:"li"},"uriParameters")," but OAS doesn't, so each URI parameter like ",(0,o.kt)("inlineCode",{parentName:"li"},"{customer_id}")," has been changed to an OAS path parameter"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"responses")," object has no descriptions because they're not required in RAML, but in OAS they are, so an empty description has been added")),(0,o.kt)("div",{className:"container"},(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{style:p,className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="generic API in RAML 1.0 (source API)"',title:'"generic',API:!0,in:!0,RAML:!0,"1.0":!0,"(source":!0,'API)"':!0},"#%RAML 1.0\n\ntitle: ACME Banking HTTP API\nversion: 1.0\nmediaType: application/json\n\nbaseUri: acme-banking.com/apis\n\n/customers:\n  /{customer_id}:\n    uriParameters:\n      customer_id: string\n    get:\n      description: Returns Customer data\n      responses:\n        200:\n          body:\n            application/json:\n    delete:\n      description: Removes a Customer from the system\n    /accounts:\n      get:\n        description: Returns a collection accounts\n        responses:\n          200:\n            body:\n              application/json:\n    /cards:\n      /debit:\n        get:\n          description: Returns a collection of cards\n          responses:\n            200:\n              body:\n                application/json:\n        post:\n          description: Requests the creation of a new DebitCard\n          body:\n            application/json:\n\n"))),(0,o.kt)("div",{style:p,className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="converted API in OAS 2.0 (target API)"',title:'"converted',API:!0,in:!0,OAS:!0,"2.0":!0,"(target":!0,'API)"':!0},'{\n  "swagger": "2.0",\n  "info": {\n    "title": "ACME Banking HTTP API",\n    "version": "1.0"\n  },\n  "host": "acme-banking.com",\n  "basePath": "/apis",\n  "paths": {\n    "/customers": {},\n    "/customers/{customer_id}": {\n      "get": {\n        "description": "Returns Customer data",\n        "consumes": [\n          "application/json"\n        ],\n        "produces": [\n          "application/json"\n        ],\n        "parameters": [\n          {\n            "name": "customer_id",\n            "required": true,\n            "in": "path",\n            "type": "string"\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "",\n            "x-amf-mediaType": "application/json",\n            "schema": {}\n          }\n        }\n      },\n      "delete": {\n        "description": "Removes a Customer from the system",\n        "consumes": [\n          "application/json"\n        ],\n        "parameters": [\n          {\n            "name": "customer_id",\n            "required": true,\n            "in": "path",\n            "type": "string"\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": ""\n          }\n        }\n      }\n    },\n    "/customers/{customer_id}/accounts": {\n      "get": {\n        "description": "Returns a collection accounts",\n        "consumes": [\n          "application/json"\n        ],\n        "produces": [\n          "application/json"\n        ],\n        "parameters": [\n          {\n            "name": "customer_id",\n            "required": true,\n            "in": "path",\n            "type": "string"\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "",\n            "x-amf-mediaType": "application/json",\n            "schema": {}\n          }\n        }\n      }\n    },\n    "/customers/{customer_id}/cards": {\n      "parameters": [\n        {\n          "name": "customer_id",\n          "required": true,\n          "in": "path",\n          "type": "string"\n        }\n      ]\n    },\n    "/customers/{customer_id}/cards/debit": {\n      "get": {\n        "description": "Returns a collection of cards",\n        "consumes": [\n          "application/json"\n        ],\n        "produces": [\n          "application/json"\n        ],\n        "parameters": [\n          {\n            "name": "customer_id",\n            "required": true,\n            "in": "path",\n            "type": "string"\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "",\n            "x-amf-mediaType": "application/json",\n            "schema": {}\n          }\n        }\n      },\n      "post": {\n        "description": "Requests the creation of a new DebitCard",\n        "consumes": [\n          "application/json"\n        ],\n        "parameters": [\n          {\n            "name": "customer_id",\n            "required": true,\n            "in": "path",\n            "type": "string"\n          },\n          {\n            "x-amf-mediaType": "application/json",\n            "in": "body",\n            "name": "generated",\n            "schema": {}\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": ""\n          }\n        }\n      }\n    }\n  }\n}\n'))))),(0,o.kt)("h3",{id:"code-examples"},"Code Examples"),(0,o.kt)("p",null,"This example (and many others) are available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aml-org/examples/tree/new-doc/src/test"},"examples GitHub repository"),":"),(0,o.kt)(i.Z,{groupId:"languages",defaultValue:"java",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"scala",example:"ConversionTest.scala",mdxType:"CodeGetter"})),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"java",example:"ConversionTest.java",mdxType:"CodeGetter"})),(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)(r.Z,{language:"ts",example:"conversion.spec.ts",mdxType:"CodeGetter"}))))}h.isMDXComponent=!0}}]);