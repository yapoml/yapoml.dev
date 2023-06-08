"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(r),m=a,y=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Getting Started",description:"Generates page object classes for Microsoft Playwright with ease"},i=void 0,l={unversionedId:"frameworks/playwright/getting-started",id:"frameworks/playwright/getting-started",title:"Getting Started",description:"Generates page object classes for Microsoft Playwright with ease",source:"@site/docs/frameworks/playwright/getting-started.md",sourceDirName:"frameworks/playwright",slug:"/frameworks/playwright/getting-started",permalink:"/docs/frameworks/playwright/getting-started",draft:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/frameworks/playwright/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",description:"Generates page object classes for Microsoft Playwright with ease"},sidebar:"tutorialSidebar",previous:{title:"Playwright",permalink:"/docs/category/playwright"}},p={},s=[],c={toc:s},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Generates page object classes for ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev"},"Microsoft Playwright")," with ease."),(0,a.kt)("admonition",{title:"Experimental",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Selenium support is first, then everything will be migrated to Playwright.")),(0,a.kt)("p",null,"Given that you have the following ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginPage.po.yaml")," file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'UsernameInput: "#username"\n')),(0,a.kt)("p",null,"Then you are able to immediately interact with web elements"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'using Yapoml.Playwright;\n\npage.Ya().LoginPage.UsernameInput.Type("user01");\n')),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Yapoml.Playwright"},"Yapoml.Playwright")," nuget package and create your ",(0,a.kt)("inlineCode",{parentName:"p"},"*.po.yaml")," files."))}u.isMDXComponent=!0}}]);