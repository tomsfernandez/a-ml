"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[9486],{3416:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(7294),n=t(1736);const r={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/main/"},i={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/main/",scala:"scala/scalaPlatform/",java:"java/javaPlatform/",ts:"ts/"};const s=e=>{let{AMFVersion:a,language:t,example:s,lineStart:o,lineEnd:u,hideLink:m,fromMain:d}=e;const c=(0,l.useRef)(!0),[p,v]=(0,l.useState)(""),[f,h]=(0,l.useState)(""),g=(0,l.useCallback)((async()=>{const e=function(e){return"v4"===e?r:i}(a),l=function(e,a){if(a===r)return"";switch(e){case"scala":default:return a.scala;case"java":return a.java;case"ts":return a.ts;case"js":return a.js}}(t,e),n=(d?e.mainUrl:e.testsUrl)+l+s,m=n.replace("raw.githubusercontent.com/aml-org/examples","github.com/aml-org/examples/tree"),p=await fetch(n),f=await p.text();if(!c.current)return null;if(h(m),v(f),u-o>0){let e=f.split("\n").slice(o,u).join("\n");v(e)}}),[]);return(0,l.useEffect)((()=>(g(),()=>{c.current=!1})),[]),l.createElement("div",null,l.createElement(n.Z,{className:t},p),!m&&l.createElement("p",null,"Code extracted from the examples ",l.createElement("strong",null,l.createElement("a",{href:f},"GitHub repository")),"."))}},8215:(e,a,t)=>{t.d(a,{Z:()=>n});var l=t(7294);const n=function(e){let{children:a,hidden:t,className:n}=e;return l.createElement("div",{role:"tabpanel",hidden:t,className:n},a)}},9877:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(7462),n=t(7294),r=t(2389),i=t(5773),s=t(6010);const o="tabItem_LplD";function u(e){var a,t,r;const{lazy:u,block:m,defaultValue:d,values:c,groupId:p,className:v}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:f.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),g=(0,i.lx)(h,((e,a)=>e.value===a.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===d?d:null!=(a=null!=d?d:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:y}=(0,i.UB)(),[x,w]=(0,n.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=p){const e=k[p];null!=e&&e!==x&&h.some((a=>a.value===e))&&w(e)}const A=e=>{const a=e.currentTarget,t=T.indexOf(a),l=h[t].value;l!==x&&(N(a),w(l),null!=p&&y(p,l))},E=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},v)},h.map((e=>{let{value:a,label:t,attributes:r}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>T.push(e),onKeyDown:E,onFocus:A,onClick:A},r,{className:(0,s.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":x===a})}),null!=t?t:a)}))),u?(0,n.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function m(e){const a=(0,r.Z)();return n.createElement(u,(0,l.Z)({key:String(a)},e))}},6759:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>o,contentTitle:()=>u,metadata:()=>m,toc:()=>d,default:()=>p});var l=t(7462),n=(t(7294),t(3905)),r=t(9877),i=t(8215),s=t(3416);const o={id:"amf_validation",title:"Validation",sidebar_position:5},u=void 0,m={unversionedId:"amf/using-amf/amf_validation",id:"amf/using-amf/amf_validation",title:"Validation",description:"The legacy Custom Validation feature was removed in AMF 5.0.0. This feature will be replaced by",source:"@site/docs/amf/using-amf/validation.mdx",sourceDirName:"amf/using-amf",slug:"/amf/using-amf/amf_validation",permalink:"/a-ml/docs/amf/using-amf/amf_validation",editUrl:"https://github.com/aml-org/a-ml/edit/develop/docs/amf/using-amf/validation.mdx",tags:[],version:"current",lastUpdatedBy:"Tomas Fernandez",lastUpdatedAt:1645135672,formattedLastUpdatedAt:"2/17/2022",sidebarPosition:5,frontMatter:{id:"amf_validation",title:"Validation",sidebar_position:5},sidebar:"myAutogeneratedSidebar",previous:{title:"Transformation",permalink:"/a-ml/docs/amf/using-amf/amf_transformation"},next:{title:"Rendering",permalink:"/a-ml/docs/amf/using-amf/amf_rendering"}},d=[{value:"Validation Examples",id:"validation-examples",children:[],level:2}],c={toc:d};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The legacy Custom Validation feature was removed in AMF 5.0.0. This feature will be replaced by\nan external project currently under development. Updates coming soon."))),(0,n.kt)("p",null,"Validation is the process of checking that your model complies with the constraints you've defined for it.\nIf the model doesn't comply, you can determine where it's invalid and assess the severity."),(0,n.kt)("p",null,"After you've parsed and resolved the model, you can apply different AMF validations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AMF API Contract Model validations"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"These are programmatic constraints that are validated against the ",(0,n.kt)("a",{parentName:"li",href:"/docs/amf/using-amf/amf_model"},"API Contract Model")),(0,n.kt)("li",{parentName:"ul"},"There are general validations, and validations specific to every API specification AMF supports"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AML Validations"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Are generated in runtime from an AML Dialect")))),(0,n.kt)("h2",{id:"validation-examples"},"Validation Examples"),(0,n.kt)(r.Z,{groupId:"languages",defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"scala",mdxType:"TabItem"},(0,n.kt)(s.Z,{language:"scala",example:"ValidationTest.scala",mdxType:"CodeGetter"})),(0,n.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,n.kt)(s.Z,{language:"java",example:"ValidationTest.java",mdxType:"CodeGetter"})),(0,n.kt)(i.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)(s.Z,{language:"ts",example:"validation.spec.ts",mdxType:"CodeGetter"}))),(0,n.kt)("p",null,"The final feature in the AMF repertoire is rendering, and you'll learn about it in the next section."))}p.isMDXComponent=!0}}]);