"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[1659],{3416:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(7294),r=t(1736);const o={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/main/"},n={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/main/",scala:"scala/scalaPlatform/",java:"java/javaPlatform/",ts:"ts/"};const s=e=>{let{AMFVersion:a,language:t,example:s,lineStart:i,lineEnd:u,hideLink:m,fromMain:c}=e;const d=(0,l.useRef)(!0),[p,v]=(0,l.useState)(""),[b,h]=(0,l.useState)(""),f=(0,l.useCallback)((async()=>{const e=function(e){return"v4"===e?o:n}(a),l=function(e,a){if(a===o)return"";switch(e){case"scala":default:return a.scala;case"java":return a.java;case"ts":return a.ts;case"js":return a.js}}(t,e),r=(c?e.mainUrl:e.testsUrl)+l+s,m=r.replace("raw.githubusercontent.com/aml-org/examples","github.com/aml-org/examples/tree"),p=await fetch(r),b=await p.text();if(!d.current)return null;if(h(m),v(b),u-i>0){let e=b.split("\n").slice(i,u).join("\n");v(e)}}),[]);return(0,l.useEffect)((()=>(f(),()=>{d.current=!1})),[]),l.createElement("div",null,l.createElement(r.Z,{className:t},p),!m&&l.createElement("p",null,"Code extracted from the examples ",l.createElement("strong",null,l.createElement("a",{href:b},"GitHub repository")),"."))}},8215:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(7294);const r=function(e){let{children:a,hidden:t,className:r}=e;return l.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},9877:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(7462),r=t(7294),o=t(2389),n=t(5773),s=t(6010);const i="tabItem_LplD";function u(e){var a,t,o;const{lazy:u,block:m,defaultValue:c,values:d,groupId:p,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:b.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),f=(0,n.lx)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===c?c:null!=(a=null!=c?c:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(o=b[0])?void 0:o.props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:y}=(0,n.UB)(),[x,w]=(0,r.useState)(k),A=[],{blockElementScrollPositionUntilNextRender:C}=(0,n.o5)();if(null!=p){const e=g[p];null!=e&&e!==x&&h.some((a=>a.value===e))&&w(e)}const M=e=>{const a=e.currentTarget,t=A.indexOf(a),l=h[t].value;l!==x&&(C(a),w(l),null!=p&&y(p,l))},T=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;t=A[a]||A[0];break}case"ArrowLeft":{const a=A.indexOf(e.currentTarget)-1;t=A[a]||A[A.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},v)},h.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>A.push(e),onKeyDown:T,onFocus:M,onClick:M},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":x===a})}),null!=t?t:a)}))),u?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function m(e){const a=(0,o.Z)();return r.createElement(u,(0,l.Z)({key:String(a)},e))}},6520:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>i,contentTitle:()=>u,metadata:()=>m,toc:()=>c,default:()=>p});var l=t(7462),r=(t(7294),t(3905)),o=t(9877),n=t(8215),s=t(3416);const i={id:"model_in_memory",title:"Creating an AMF model in memory"},u=void 0,m={unversionedId:"Cookbook/model_in_memory",id:"version-4.x.x/Cookbook/model_in_memory",title:"Creating an AMF model in memory",description:"AMF allows you to parse existing APIs, but you can also use it to model fluent, descriptive APIs in memory.",source:"@site/versioned_docs/version-4.x.x/Cookbook/model-in-memory.mdx",sourceDirName:"Cookbook",slug:"/Cookbook/model_in_memory",permalink:"/a-ml/docs/v4/Cookbook/model_in_memory",editUrl:"https://github.com/aml-org/a-ml/edit/develop/versioned_docs/version-4.x.x/Cookbook/model-in-memory.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Tomas Fernandez",lastUpdatedAt:1645135672,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"model_in_memory",title:"Creating an AMF model in memory"},sidebar:"version-4.x.x/myAutogeneratedSidebar",previous:{title:"AML Specification",permalink:"/a-ml/docs/v4/AML/aml_spec"},next:{title:"Payload validation with AMF",permalink:"/a-ml/docs/v4/Cookbook/payload_validation"}},c=[{value:"Create a WebApi with AMF",id:"create-a-webapi-with-amf",children:[],level:3}],d={toc:c};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AMF allows you to parse existing APIs, but you can also use it to model fluent, descriptive APIs in memory."),(0,r.kt)("p",null,"You can use an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf/blob/develop/documentation/model.md#webapi"},"AMF WebApi")," in memory to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit an already parsed API"),(0,r.kt)("li",{parentName:"ul"},"Power a visual API designer"),(0,r.kt)("li",{parentName:"ul"},"Create programmatic API tests"),(0,r.kt)("li",{parentName:"ul"},"Debug the WebApi Graph model")),(0,r.kt)("h3",{id:"create-a-webapi-with-amf"},"Create a WebApi with AMF"),(0,r.kt)("p",null,'The following code example creates a generic "Music Service API" with the following endpoints:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/me"),": Retrieves a user's profile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/me/playlists"),": Retrieves a user's playlists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/albums"),": Retrieves a specific album or a list of albums by their IDs")),(0,r.kt)("p",null,"For the purposes of this API, all responses are returned as strings,\nbut you can further specify requests and responses by defining a schema for an album, playlist, or user."),(0,r.kt)(o.Z,{groupId:"languages",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(n.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)(s.Z,{AMFVersion:"v4",language:"java",example:"java/ModelBuilderTest.java",mdxType:"CodeGetter"})),(0,r.kt)(n.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)(s.Z,{AMFVersion:"v4",language:"js",example:"js/model-builder.test.js",mdxType:"CodeGetter"}))))}p.isMDXComponent=!0}}]);