"use strict";(self.webpackChunkaml_website=self.webpackChunkaml_website||[]).push([[4978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,u=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(u,a(a({ref:t},m),{},{components:n})):r.createElement(u,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6953:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>s,toc:()=>c,default:()=>m});var r=n(7462),i=(n(7294),n(3905));const o={id:"amf_emission",title:"Emission"},a=void 0,s={unversionedId:"AMF/Using AMF/amf_emission",id:"version-4.x.x/AMF/Using AMF/amf_emission",title:"Emission",description:"Emission is the process of exporting an AMF model to a specific format.",source:"@site/versioned_docs/version-4.x.x/AMF/Using AMF/6-Emission.mdx",sourceDirName:"AMF/Using AMF",slug:"/AMF/Using AMF/amf_emission",permalink:"/docs/v4/AMF/Using AMF/amf_emission",editUrl:"https://github.com/aml-org/a-ml/edit/develop/versioned_docs/version-4.x.x/AMF/Using AMF/6-Emission.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"arielmirra",lastUpdatedAt:1623946178,formattedLastUpdatedAt:"6/17/2021",sidebarPosition:6,frontMatter:{id:"amf_emission",title:"Emission"},sidebar:"version-4.x.x/myAutogeneratedSidebar",previous:{title:"Validation",permalink:"/docs/v4/AMF/Using AMF/amf_validation"},next:{title:"AMF Model Resources",permalink:"/docs/v4/AMF/Using AMF/amf_model"}},c=[],l={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Emission is the process of exporting an AMF model to a specific format.\nAny AMF model can be emitted as a standard JSON-LD or RDF graph.\nIn the case of the WebApi model in particular, it can also be exported to RAML, OAS and AsyncAPI (AMF intends to support additional specifications as they become available):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"emission-graph",src:n(7456).Z,width:"312",height:"402"})),(0,i.kt)("p",null,"Each emission has limitations, as some elements may be unique to a specification and can't be represented in others.\nYou can find more technical information in the related documentation."))}m.isMDXComponent=!0},7456:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/emision-graph-268c10a493b21db9f2fe239434532c34.png"}}]);