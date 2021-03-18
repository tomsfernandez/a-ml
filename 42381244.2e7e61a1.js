(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{109:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,d=l["".concat(i,".").concat(f)]||l[f]||m[f]||a;return t?o.a.createElement(d,c(c({ref:n},u),{},{components:t})):o.a.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},182:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/emision-graph-268c10a493b21db9f2fe239434532c34.png"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(109)),i={id:"amf_emission",title:"Emission"},c={unversionedId:"AMF/using-amf/amf_emission",id:"AMF/using-amf/amf_emission",isDocsHomePage:!1,title:"Emission",description:"Emission is the process of exporting an AMF model to a specific format.",source:"@site/../docs/AMF/using-amf/emission.mdx",slug:"/AMF/using-amf/amf_emission",permalink:"/docs/AMF/using-amf/amf_emission",version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1615218606,sidebar:"docs",previous:{title:"Validation",permalink:"/docs/AMF/using-amf/amf_validation"},next:{title:"AMF Model Resources",permalink:"/docs/AMF/using-amf/amf_model"}},s=[],u={toc:s};function p(e){var n=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Emission is the process of exporting an AMF model to a specific format.\nAny AMF model can be emitted as a standard JSON-LD or RDF graph.\nIn the case of the WebApi model in particular, it can also be exported to RAML, OAS and AsyncAPI (AMF intends to support additional specifications as they become available):"),Object(a.b)("p",null,Object(a.b)("img",{alt:"emission-graph",src:t(182).default})),Object(a.b)("p",null,"Each emission has limitations, as some elements may be unique to a specification and can't be represented in others.\nYou can find more technical information in the related documentation."))}p.isMDXComponent=!0}}]);