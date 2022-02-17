"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[5591],{3416:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(7294),r=t(1736);const n={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/main/"},o={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/main/",scala:"scala/scalaPlatform/",java:"java/javaPlatform/",ts:"ts/"};const s=e=>{let{AMFVersion:a,language:t,example:s,lineStart:i,lineEnd:u,hideLink:m,fromMain:c}=e;const d=(0,l.useRef)(!0),[p,b]=(0,l.useState)(""),[v,h]=(0,l.useState)(""),f=(0,l.useCallback)((async()=>{const e=function(e){return"v4"===e?n:o}(a),l=function(e,a){if(a===n)return"";switch(e){case"scala":default:return a.scala;case"java":return a.java;case"ts":return a.ts;case"js":return a.js}}(t,e),r=(c?e.mainUrl:e.testsUrl)+l+s,m=r.replace("raw.githubusercontent.com/aml-org/examples","github.com/aml-org/examples/tree"),p=await fetch(r),v=await p.text();if(!d.current)return null;if(h(m),b(v),u-i>0){let e=v.split("\n").slice(i,u).join("\n");b(e)}}),[]);return(0,l.useEffect)((()=>(f(),()=>{d.current=!1})),[]),l.createElement("div",null,l.createElement(r.Z,{className:t},p),!m&&l.createElement("p",null,"Code extracted from the examples ",l.createElement("strong",null,l.createElement("a",{href:v},"GitHub repository")),"."))}},8215:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(7294);const r=function(e){let{children:a,hidden:t,className:r}=e;return l.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},9877:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(7462),r=t(7294),n=t(2389),o=t(5773),s=t(6010);const i="tabItem_LplD";function u(e){var a,t,n;const{lazy:u,block:m,defaultValue:c,values:d,groupId:p,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),f=(0,o.lx)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===c?c:null!=(a=null!=c?c:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=v[0])?void 0:n.props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:y}=(0,o.UB)(),[w,A]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=p){const e=g[p];null!=e&&e!==w&&h.some((a=>a.value===e))&&A(e)}const M=e=>{const a=e.currentTarget,t=x.indexOf(a),l=h[t].value;l!==w&&(T(a),A(l),null!=p&&y(p,l))},N=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},b)},h.map((e=>{let{value:a,label:t,attributes:n}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>x.push(e),onKeyDown:N,onFocus:M,onClick:M},n,{className:(0,s.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":w===a})}),null!=t?t:a)}))),u?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function m(e){const a=(0,n.Z)();return r.createElement(u,(0,l.Z)({key:String(a)},e))}},3354:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>i,contentTitle:()=>u,metadata:()=>m,toc:()=>c,default:()=>p});var l=t(7462),r=(t(7294),t(3905)),n=t(9877),o=t(8215),s=t(3416);const i={id:"model_in_memory",title:"Creating an AMF model in memory",sidebar_position:1},u=void 0,m={unversionedId:"cookbook/model_in_memory",id:"cookbook/model_in_memory",title:"Creating an AMF model in memory",description:"AMF can also be used to create APIs in your code, in a fluent and descriptive way.",source:"@site/docs/cookbook/model-in-memory.mdx",sourceDirName:"cookbook",slug:"/cookbook/model_in_memory",permalink:"/docs/cookbook/model_in_memory",editUrl:"https://github.com/aml-org/a-ml/edit/develop/docs/cookbook/model-in-memory.mdx",tags:[],version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1631571646,formattedLastUpdatedAt:"9/13/2021",sidebarPosition:1,frontMatter:{id:"model_in_memory",title:"Creating an AMF model in memory",sidebar_position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"AML Specification",permalink:"/docs/aml/aml_spec"},next:{title:"Payload validation with AMF",permalink:"/docs/cookbook/payload_validation"}},c=[{value:"Create a WebApi with AMF",id:"create-a-webapi-with-amf",children:[],level:3}],d={toc:c};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AMF can also be used to create APIs in your code, in a fluent and descriptive way."),(0,r.kt)("p",null,"You can use an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf/blob/develop/documentation/model.md#webapi"},"AMF WebApi")," in memory to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Edit an already parsed API"),(0,r.kt)("li",{parentName:"ul"},"Power a visual API designer"),(0,r.kt)("li",{parentName:"ul"},"Create programmatic API tests"),(0,r.kt)("li",{parentName:"ul"},"Debug the WebApi Graph model")),(0,r.kt)("h3",{id:"create-a-webapi-with-amf"},"Create a WebApi with AMF"),(0,r.kt)("p",null,'The following code example creates a generic "Music Service API" with the following endpoints:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/me"),": Retrieves a user's profile"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/me/playlists"),": Retrieves a user's playlists"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/albums"),": Retrieves a specific album or a list of albums by their IDs")),(0,r.kt)("p",null,"For the purposes of this API, all responses are returned as strings,\nbut you can further specify requests and responses by defining a schema for an album, playlist, or user."),(0,r.kt)(n.Z,{groupId:"languages",defaultValue:"java",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"scala",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"scala",example:"ModelBuilderTest.scala",mdxType:"CodeGetter"})),(0,r.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"java",example:"ModelBuilderTest.java",mdxType:"CodeGetter"})),(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)(s.Z,{language:"ts",example:"model.builder.spec.ts",mdxType:"CodeGetter"}))))}p.isMDXComponent=!0}}]);