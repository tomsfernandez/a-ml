(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(109)),i={id:"aml",title:"What is AML?",hide_title:!0},c={unversionedId:"AML/aml",id:"AML/aml",isDocsHomePage:!1,title:"What is AML?",description:"What is AML?",source:"@site/../docs/AML/overview_aml.mdx",slug:"/AML/aml",permalink:"/docs/AML/aml",version:"current",lastUpdatedBy:"arielmirra",lastUpdatedAt:1613661878,sidebar:"docs",previous:{title:"AMF Model Resources",permalink:"/docs/AMF/using-amf/amf_model"},next:{title:"AML Specification",permalink:"/docs/AML/aml_spec"}},s=[{value:"Defining metadata documents",id:"defining-metadata-documents",children:[]}],l={toc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"what-is-aml"},"What is AML?"),Object(o.b)("p",null,"AML (Anything Modeling Language) is a declarative language for defining metadata documents that can be parsed into graphs of information. These documents can be published and linked on the web or through any other type of API."),Object(o.b)("p",null,"It can be used to describe common, existing YAML/JSON metadata documents or to define the semantics and structure of completely new metadata formats."),Object(o.b)("p",null,"AML metadata documents have the following advantages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Well-defined, formal semantics that can be reused across multiple types of metadata"),Object(o.b)("li",{parentName:"ul"},"Explicit schema that can be used to automate parsing and validation"),Object(o.b)("li",{parentName:"ul"},"Support for hyperlinks as a mechanism to connect and publish metadata documents"),Object(o.b)("li",{parentName:"ul"},"Out-of-the-box modularity, allowing the metadata graph to be split into composable sets of documents"),Object(o.b)("li",{parentName:"ul"},"Direct translation into a graph of data that can be stored, queried and published"),Object(o.b)("li",{parentName:"ul"},"Support for W3C recommendations for the web and metadata")),Object(o.b)("h2",{id:"defining-metadata-documents"},"Defining metadata documents"),Object(o.b)("p",null,"To define a new type of metadata document, an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aml-org.github.io/aml-spec/dialects/"}),"AML dialect")," must be used to map the structure of a YAML/JSON document to a graph of information and overlay the semantics for the nodes in the graph.\nWith that information, an AML processor tool can parse and validate the instances of the metadata document and generate the output graph of information with the defined semantics."),Object(o.b)("p",null,"This is a simple example of using the AML dialect to define a personal information metadata document:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"vcard.yaml")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Dialect 1.0\n\ndialect: Person Card\nversion: 1.0\n\nexternal:\n  schema: http://schema.org/\n\nnodeMappings:\n\n  PersonNode:\n    classTerm: schema.Person\n    mapping:\n      name:\n        propertyTerm: schema.name\n        range: string\n      born:\n        propertyTerm: schema.birthDate\n        range: date\n\ndocuments:\n  root:\n    encodes: PersonNode\n\n")),Object(o.b)("p",null,'With this very simple metadata document, an AML processor can validate and parse metadata descriptions according to the defined "Person Card" format:'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"chuck_berry.yaml")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Person Card 1.0\n\nname: Chuck Berry\nborn: 1926-10-18\n\n")),Object(o.b)("p",null,"The outcome of parsing this example is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://json-ld.org/"}),"JSON-LD"),' document, encoding a graph with the information about the people described in the "Person Card" documents:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "@id": "#/",\n  "@type": [\n    "schema-org:Person",\n    "file://vcard.yaml#/declarations/PersonNode",\n    "meta:DialectDomainElement",\n    "doc:DomainElement"\n  ],\n  "schema-org:birthDate": {\n    "@type": "xsd:date",\n    "@value": "1926-10-18"\n  },\n  "schema-org:name": "Chuck Berry"\n}\n\n')),Object(o.b)("p",null,"This graph of information can be saved in JSON-LD compatible graph databases, or it can be queried using a standard graph query language."),Object(o.b)("p",null,"In this example, the semantics of the information comes from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://schema.org/"}),"Schema.org")," project. Schema.org provides detailed definitions like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://schema.org/Person"}),"Person")," that can be processed by machines and re-used across multiple metadata documents even if the syntactical details to describe a person varies."),Object(o.b)("p",null,"AML dialects describing metadata documents can work with any of these existing vocabularies as long as the concepts in the vocabularies can be identified by a URI."),Object(o.b)("p",null,"AML also introduces the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://aml-org.github.io/aml-spec/vocabularies/"}),"AML vocabulary")," specification to describe new semantics that can be re-used across AML dialects."),Object(o.b)("p",null,'For example, we could introduce our own "Personal Information" AML vocabulary with our own definitions for classes of entities and properties:'),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"personal_info.yaml")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"\n#%Vocabulary 1.0\n\nvocabulary: Personal Information Management\nbase: http://myorg.com/vocabs/personal_info\n\nclassTerm:\n\n  Person:\n    description: Person being described\n\npropertyTerms:\n\n  birth_date:\n    description: date of birth of a person\n\n  full_name:\n    description: full name including surnames\n\n")),Object(o.b)("p",null,"AML vocabularies can be used in AML dialect definitions and mixed with external vocabularies."))}m.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,b=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);