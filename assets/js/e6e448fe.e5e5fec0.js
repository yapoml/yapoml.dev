"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[608],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||a;return t?r.createElement(m,c(c({ref:n},d),{},{components:t})):r.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={title:"Caching",description:"Yapoml doesn't find components if it is already found"},c=void 0,i={unversionedId:"concept/advanced/caching",id:"concept/advanced/caching",title:"Caching",description:"Yapoml doesn't find components if it is already found",source:"@site/docs/concept/advanced/caching.md",sourceDirName:"concept/advanced",slug:"/concept/advanced/caching",permalink:"/docs/concept/advanced/caching",draft:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/concept/advanced/caching.md",tags:[],version:"current",frontMatter:{title:"Caching",description:"Yapoml doesn't find components if it is already found"},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/category/advanced"},next:{title:"Logging",permalink:"/docs/concept/advanced/logging"}},p={},l=[],d={toc:l},s="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"var page = driver.Ya().LoginPage;\npage.Username.Hover();\npage.Username.Hover();\n")),(0,o.kt)("p",null,"This code finds ",(0,o.kt)("inlineCode",{parentName:"p"},"Username")," component only once, and hovers on it twice."))}u.isMDXComponent=!0}}]);