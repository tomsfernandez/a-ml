"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[5282],{3416:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(7294),l=t(1736);const o={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF4/src/main/"},i={testsUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/test/",mainUrl:"https://raw.githubusercontent.com/aml-org/examples/master/AMF5/src/main/",scala:"scala/scalaPlatform/",java:"java/javaPlatform/",ts:"ts/"};const r=e=>{let{AMFVersion:a,language:t,example:r,lineStart:d,lineEnd:s,hideLink:p,fromMain:m}=e;const u=(0,n.useRef)(!0),[c,h]=(0,n.useState)(""),[k,v]=(0,n.useState)(""),y=(0,n.useCallback)((async()=>{const e=function(e){return"v4"===e?o:i}(a),n=function(e,a){if(a===o)return"";switch(e){case"scala":default:return a.scala;case"java":return a.java;case"ts":return a.ts;case"js":return a.js}}(t,e),l=(m?e.mainUrl:e.testsUrl)+n+r,p=l.replace("raw.githubusercontent.com/aml-org/examples","github.com/aml-org/examples/tree"),c=await fetch(l),k=await c.text();if(!u.current)return null;if(v(p),h(k),s-d>0){let e=k.split("\n").slice(d,s).join("\n");h(e)}}),[]);return(0,n.useEffect)((()=>(y(),()=>{u.current=!1})),[]),n.createElement("div",null,n.createElement(l.Z,{className:t},c),!p&&n.createElement("p",null,"Code extracted from the examples ",n.createElement("strong",null,n.createElement("a",{href:k},"GitHub repository")),"."))}},8215:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294);const l=function(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},9877:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(7462),l=t(7294),o=t(2389),i=t(5773),r=t(6010);const d="tabItem_LplD";function s(e){var a,t,o;const{lazy:s,block:p,defaultValue:m,values:u,groupId:c,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,i.lx)(v,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(a=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(o=k[0])?void 0:o.props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:f,setTabGroupChoices:b}=(0,i.UB)(),[N,C]=(0,l.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,i.o5)();if(null!=c){const e=f[c];null!=e&&e!==N&&v.some((a=>a.value===e))&&C(e)}const T=e=>{const a=e.currentTarget,t=x.indexOf(a),n=v[t].value;n!==N&&(w(a),C(n),null!=c&&b(c,n))},V=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},h)},v.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:e=>x.push(e),onKeyDown:V,onFocus:T,onClick:T},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===a})}),null!=t?t:a)}))),s?(0,l.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==N})))))}function p(e){const a=(0,o.Z)();return l.createElement(s,(0,n.Z)({key:String(a)},e))}},9267:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>d,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>c});var n=t(7462),l=(t(7294),t(3905)),o=t(9877),i=t(8215),r=t(3416);const d={id:"payload_validation",title:"Payload validation with AMF"},s=void 0,p={unversionedId:"Cookbook/payload_validation",id:"version-4.x.x/Cookbook/payload_validation",title:"Payload validation with AMF",description:"You can use AMF to validate incoming payloads to an API already deployed and running.",source:"@site/versioned_docs/version-4.x.x/Cookbook/payload-validation.mdx",sourceDirName:"Cookbook",slug:"/Cookbook/payload_validation",permalink:"/docs/v4/Cookbook/payload_validation",editUrl:"https://github.com/aml-org/a-ml/edit/develop/versioned_docs/version-4.x.x/Cookbook/payload-validation.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Tomas Fernandez",lastUpdatedAt:1645135312,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"payload_validation",title:"Payload validation with AMF"},sidebar:"version-4.x.x/myAutogeneratedSidebar",previous:{title:"Creating an AMF model in memory",permalink:"/docs/v4/Cookbook/model_in_memory"},next:{title:"Custom error handlers",permalink:"/docs/v4/Customizable Configurations/error_handlers"}},m=[{value:"Get the AMF payload shape",id:"get-the-amf-payload-shape",children:[],level:2},{value:"Create a <code>PayloadValidator</code>",id:"create-a-payloadvalidator",children:[],level:2},{value:"Validate the payloads",id:"validate-the-payloads",children:[{value:"Example code for a payload validator",id:"example-code-for-a-payload-validator",children:[],level:3}],level:2}],u={toc:m};function c(e){let{components:a,...d}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,d,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can use AMF to validate incoming payloads to an API already deployed and running.\nFor example, consider a RAML API that declares:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," schema with ",(0,l.kt)("inlineCode",{parentName:"li"},"firstname"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"lastname"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"age")," properties"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"/users")," endpoint with an HTTP POST method that requires a ",(0,l.kt)("inlineCode",{parentName:"li"},"User")," object as body parameter")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"#%RAML 1.0\ntitle: API with Types\ntypes:\n  User:\n    type: object\n    properties:\n      firstname: string\n      lastname:  string\n      age:       number\n/users:\n  post:\n    body:\n      application/json:\n        type: User\n")),(0,l.kt)("p",null,"To confirm that a given payload is a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"User"),", you can use AMF payload validation. To do so:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Get the AMF payload shape"),(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("inlineCode",{parentName:"li"},"PayloadValidator")),(0,l.kt)("li",{parentName:"ol"},"Validate payloads")),(0,l.kt)("h2",{id:"get-the-amf-payload-shape"},"Get the AMF payload shape"),(0,l.kt)("p",null,"When AMF parses an API, it:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns a ",(0,l.kt)("inlineCode",{parentName:"li"},"Document")," that encodes a ",(0,l.kt)("inlineCode",{parentName:"li"},"WebApi"),", which is the AMF WebApi graph model of the original API"),(0,l.kt)("li",{parentName:"ul"},"Abstracts the HTTP methods to ",(0,l.kt)("inlineCode",{parentName:"li"},"Operation")," objects")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"api to webapi model",src:t(5185).Z,width:"1098",height:"530"})),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf/blob/develop/documentation/model.md#webapi"},"AMF Model Documentation")," has more information\non each intermediate model. The payload shape we'll use can be obtained from an ",(0,l.kt)("inlineCode",{parentName:"p"},"Operation")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Response")," object."),(0,l.kt)("h2",{id:"create-a-payloadvalidator"},"Create a ",(0,l.kt)("inlineCode",{parentName:"h2"},"PayloadValidator")),(0,l.kt)("p",null,"The payload shape (or schema) is a specific implementation of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/aml-org/amf/blob/develop/documentation/model.md#anyshape"},"AnyShape")," class,\nwhich implements the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"ValidatorAware"))," interface:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:'title="amf.client.model.domain.ValidatorAware.scala"',title:'"amf.client.model.domain.ValidatorAware.scala"'},"trait ValidatorAware {\n\n  def payloadValidator(mediaType: String): ClientOption[PayloadValidator]\n\n  def payloadValidator(mediaType: String, exec: BaseExecutionEnvironment): ClientOption[PayloadValidator]\n\n  def payloadValidator(mediaType: String, env: Environment): ClientOption[PayloadValidator]\n\n  def parameterValidator(mediaType: String): ClientOption[PayloadValidator]\n\n  def parameterValidator(mediaType: String, exec: BaseExecutionEnvironment): ClientOption[PayloadValidator]\n\n  def parameterValidator(mediaType: String, env: Environment): ClientOption[PayloadValidator]\n}\n")),(0,l.kt)("p",null,"This interface defines methods to create a ",(0,l.kt)("inlineCode",{parentName:"p"},"PayloadValidator")," from an ",(0,l.kt)("inlineCode",{parentName:"p"},"AnyShape")," class, given the ",(0,l.kt)("inlineCode",{parentName:"p"},"mediaType")," and optional\n",(0,l.kt)("inlineCode",{parentName:"p"},"BaseExecutionEnvironment")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Environment")," objects."),(0,l.kt)("p",null,"There are two distinct payload validators:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"payloadValidator")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Validates types, values, and constraints in strict mode"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"parameterValidator")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Validates query parameters, where different types may be sent as strings; fails only if there is no applicable schema")))),(0,l.kt)("h2",{id:"validate-the-payloads"},"Validate the payloads"),(0,l.kt)("p",null,"To validate a payload with ",(0,l.kt)("inlineCode",{parentName:"p"},"PayloadValidator"),", use the following methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"isValid(mediaType: String, payload: String): ClientFuture[Boolean]")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Validates a payload given its media type in fail-fast mode"),(0,l.kt)("li",{parentName:"ul"},"Stops execution when it encounters any violation"),(0,l.kt)("li",{parentName:"ul"},"Used for checking payload validity"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"validate(mediaType: String, payload: String): ClientFuture[ValidationReport]")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Returns a ",(0,l.kt)("inlineCode",{parentName:"li"},"ValidationReport")," object containing detailed information about any errors"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"validate(payloadFragment: PayloadFragment): ClientFuture[ValidationReport]")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Validates a payload from an ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/aml-org/amf/blob/develop/documentation/model.md#payloadfragment"},"AMF PayloadFragment")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"syncValidate(mediaType: String, payload: String): ValidationReport")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Validates a payload synchronously"),(0,l.kt)("li",{parentName:"ul"},"Returns the ",(0,l.kt)("inlineCode",{parentName:"li"},"ValidationReport"))))),(0,l.kt)("h3",{id:"example-code-for-a-payload-validator"},"Example code for a payload validator"),(0,l.kt)("p",null,"The following code example validates the previously mentioned ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," schema with the payload validation methods:"),(0,l.kt)(o.Z,{groupId:"languages",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)(r.Z,{AMFVersion:"v4",language:"java",example:"java/PayloadValidationTest.java",mdxType:"CodeGetter"})),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)(r.Z,{AMFVersion:"v4",language:"js",example:"js/payload-validation.test.js",mdxType:"CodeGetter"}))))}c.isMDXComponent=!0},5185:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/api-to-webapi-1d8133c7425c0a4aa568e371501f061d.png"}}]);