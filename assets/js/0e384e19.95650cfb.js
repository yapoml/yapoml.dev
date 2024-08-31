"use strict";(self.webpackChunkyapoml=self.webpackChunkyapoml||[]).push([[976],{619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(4848),s=a(8453),r=a(1470),i=a(9365),o=a(4971);const l={title:"Introduction",description:"Define your page objects with ease and start to automate immediately",sidebar_position:0},c=void 0,u={id:"intro",title:"Introduction",description:"Define your page objects with ease and start to automate immediately",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",description:"Define your page objects with ease and start to automate immediately",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Syntax",permalink:"/docs/concepts/syntax"}},d={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"Install NuGet package",id:"install-nuget-package",level:3},{value:"Define page",id:"define-page",level:3},{value:"Interact with it",id:"interact-with-it",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Yapoml framework is a powerful and innovative tool that allows you to create page definitions for various testing tools in real time. With Yapoml, you can use a simple and intuitive syntax to define the UI components. The framework will then generate the corresponding boilerplate code on the fly, while you are defining your pages and components, which can be easily extended as needed. Yapoml makes test automation faster, easier, and more reliable."}),"\n",(0,n.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(t.p,{children:["3 easy steps to get started right now. Let's create a real test which verifies that on the ",(0,n.jsx)(t.code,{children:"https://www.nuget.org/packages?q=yapoml"})," page there is at least 1 package, and that all packages have a description and tags."]}),"\n",(0,n.jsx)(t.h3,{id:"install-nuget-package",children:"Install NuGet package"}),"\n","\n",(0,n.jsxs)(r.A,{groupId:"framework",queryString:!0,children:[(0,n.jsxs)(i.A,{value:"selenium",label:"Selenium",default:!0,children:[(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.a,{href:"https://www.nuget.org/packages/Yapoml.Selenium",children:"Yapoml.Selenium"})," NuGet package."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"dotnet add package Yapoml.Selenium\n"})})]}),(0,n.jsxs)(i.A,{value:"playwright",label:"Playwright",children:[(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.a,{href:"https://www.nuget.org/packages/Yapoml.Playwright",children:"Yapoml.Playwright"})," NuGet package."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"dotnet add package Yapoml.Playwright\n"})})]})]}),"\n",(0,n.jsx)(t.h3,{id:"define-page",children:"Define page"}),"\n",(0,n.jsxs)(t.p,{children:["Add new ",(0,n.jsx)(t.code,{children:"Packages.page.yaml"})," file which defines the layout of the page. ",(0,n.jsx)(t.a,{href:"/docs/concepts/syntax",children:"Read more"})," about how to define pages and components."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"url:\n  path: https://www.nuget.org/packages\n  query:\n    - q\n\npackages: \n  by: .package\n\n  description: .package-details\n  tags: .package-tags a\n"})}),"\n",(0,n.jsx)(t.h3,{id:"interact-with-it",children:"Interact with it"}),"\n",(0,n.jsxs)(t.p,{children:["The page is automatically transformed to C# types available for interactions immediately. Explore what ",(0,n.jsx)(t.a,{href:"/docs/concepts/interactions",children:"interactions"})," and ",(0,n.jsx)(t.a,{href:"/docs/concepts/expectations",children:"expectations"})," you can use on the page."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'driver.Ya().PackagesPage.Open(q: "yapoml")\n  .Packages.Expect(it => it.IsNotEmpty().Each(package =>\n    {\n      package.Description.IsNotEmpty();\n      package.Tags.IsNotEmpty();\n    })\n  );\n'})}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)("summary",{mdxType:"summary",children:"Console output"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"16:26:55.296 TRC \u2022 Opening Packages page by https://www.nuget.org/packages?q=yapoml\n16:26:59.416 TRC \u2022 4.1s\n16:26:59.419 TRC \u2022 Expect packages satisfy conditions\n16:26:59.423 TRC \u254e \u2022 Expect the count of packages is greater than 0\n16:26:59.425 TRC \u254e \u254e Finding packages by css selector .package\n16:26:59.445 TRC \u254e \u254e Found 6 packages\n16:26:59.446 TRC \u254e \u2022 Expect each package satisfy conditions\n16:26:59.448 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.449 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.477 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.477 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.488 TRC \u254e \u254e \u254e Found 5 tags\n16:26:59.488 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.488 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.500 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.500 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.506 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.506 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.506 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.518 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.518 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.523 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.523 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.523 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.534 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.534 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.541 TRC \u254e \u254e \u254e Found 4 tags\n16:26:59.541 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.541 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.553 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.553 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.560 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.560 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.560 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.571 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.571 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.578 TRC \u254e \u254e \u254e Found 4 tags\n"})})]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4971:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(6540),s=a(8215),r=a(5066),i=a(3427),o=a(2303),l=a(1422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var u=a(4848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function h(e){let{summary:t,children:a,...s}=e;(0,i.A)().collectAnchor(s.id);const h=(0,o.A)(),g=(0,n.useRef)(null),{collapsed:m,setCollapsed:f}=(0,l.u)({initialState:!s.open}),[b,y]=(0,n.useState)(s.open),x=n.isValidElement(t)?t:(0,u.jsx)("summary",{children:t??"Details"});return(0,u.jsxs)("details",{...s,ref:g,open:b,"data-collapsed":m,className:(0,r.A)(c.details,h&&c.isBrowser,s.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&p(t,g.current)&&(e.preventDefault(),m?(f(!1),y(!0)):f(!0))},children:[x,(0,u.jsx)(l.N,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{f(e),y(!e)},children:(0,u.jsx)("div",{className:c.collapsibleContent,children:a})})]})}const g={details:"details_b_Ee"},m="alert alert--info";function f(e){let{...t}=e;return(0,u.jsx)(h,{...t,className:(0,s.A)(m,g.details,t.className)})}function b(e){const t=n.Children.toArray(e.children),a=t.find((e=>n.isValidElement(e)&&"summary"===e.type)),s=(0,u.jsx)(u.Fragment,{children:t.filter((e=>e!==a))});return(0,u.jsx)(f,{...e,summary:a,children:s})}},9365:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(8215);const s={tabItem:"tabItem_Ymn6"};var r=a(4848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:a,children:t})}},1470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(6540),s=a(8215),r=a(3104),i=a(6347),o=a(205),l=a(7485),c=a(1682),u=a(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=g({queryString:a,groupId:s}),[m,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Dv)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),b=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=a(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(4848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),s=o[a].value;s!==n&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...t,...e}),(0,y.jsx)(k,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,y.jsx)(v,{...e,children:d(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);