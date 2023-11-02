"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Introduction",description:"Define your page objects with ease and start to automate immediately",sidebar_position:0},i=void 0,l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Define your page objects with ease and start to automate immediately",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",description:"Define your page objects with ease and start to automate immediately",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Syntax",permalink:"/docs/concepts/syntax"}},s={},c=[{value:"Basic example",id:"basic-example",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Yapoml framework is a powerful and innovative tool that allows you to create page definitions for various testing tools in real time. With Yapoml, you can use a simple and intuitive syntax to define the UI components. The framework will then generate the corresponding boilerplate code on the fly, while you are defining your pages and components, which can be easily extended as needed. Yapoml makes test automation faster, easier, and more reliable."),(0,a.kt)("h2",{id:"basic-example"},"Basic example"),(0,a.kt)("p",null,"Let's see how we can define the ",(0,a.kt)("inlineCode",{parentName:"p"},"Login")," page. There is a ",(0,a.kt)("inlineCode",{parentName:"p"},"username")," field on the page, which can be located by the ",(0,a.kt)("inlineCode",{parentName:"p"},".user")," CSS selector."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Login.page.yaml"',title:'"Login.page.yaml"'},"username: .user\n")),(0,a.kt)("p",null,"Now you can interact with the UI components on the page immediately."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'driver.Ya().LoginPage.Username.Type("John");\n')),(0,a.kt)("p",null,"This basic example demonstrates how to use Yapoml to create an ",(0,a.kt)("a",{parentName:"p",href:"concepts/interactions"},"interactable")," simple page with minimal ",(0,a.kt)("a",{parentName:"p",href:"concepts/syntax"},"declaration"),". Keep reading."))}u.isMDXComponent=!0}}]);