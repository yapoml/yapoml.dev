"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[755],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,u=m["".concat(i,".").concat(d)]||m[d]||g[d]||r;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5471:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),o=a(7294),r=a(6010),s=a(2389),l=a(6043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function c(e,t){return!!e&&(e===t||c(e.parentElement,t))}function m(e){let{summary:t,children:a,...m}=e;const g=(0,s.Z)(),d=(0,o.useRef)(null),{collapsed:u,setCollapsed:y}=(0,l.u)({initialState:!m.open}),[k,h]=(0,o.useState)(m.open),f=o.isValidElement(t)?t:o.createElement("summary",null,t??"Details");return o.createElement("details",(0,n.Z)({},m,{ref:d,open:k,"data-collapsed":u,className:(0,r.Z)(i.details,g&&i.isBrowser,m.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&c(t,d.current)&&(e.preventDefault(),u?(y(!1),h(!0)):y(!0))}}),f,o.createElement(l.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),h(!e)}},o.createElement("div",{className:i.collapsibleContent},a)))}const g={details:"details_b_Ee"},d="alert alert--info";function u(e){let{...t}=e;return o.createElement(m,(0,n.Z)({},t,{className:(0,r.Z)(d,g.details,t.className)}))}function y(e){const t=o.Children.toArray(e.children),a=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==a)));return o.createElement(u,(0,n.Z)({},e,{summary:a}),r)}},8972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905)),r=a(5471);const s={title:"Syntax",description:"Define your page objects with ease and start to automate immediately",sidebar_position:1},l="Syntax",i={unversionedId:"concepts/syntax",id:"concepts/syntax",title:"Syntax",description:"Define your page objects with ease and start to automate immediately",source:"@site/docs/concepts/syntax.md",sourceDirName:"concepts",slug:"/concepts/syntax",permalink:"/docs/concepts/syntax",draft:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/concepts/syntax.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Syntax",description:"Define your page objects with ease and start to automate immediately",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Interactions",permalink:"/docs/concepts/interactions"}},p={},c=[{value:"Page",id:"page",level:2},{value:"Url",id:"url",level:3},{value:"Component",id:"component",level:2},{value:"Locator",id:"locator",level:3},{value:"List of components",id:"list-of-components",level:3},{value:"Nested",id:"nested",level:3},{value:"Parametrized locator",id:"parametrized-locator",level:3},{value:"Reusable components",id:"reusable-components",level:3},{value:"Showcase",id:"showcase",level:2}],m={toc:c},g="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"Pages and components are declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"*.page.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.component.yaml")," files respectively. This format is user-friendly and allows us to describe the structure of pages and components clearly. Just add new files in your project and start defining pages."),(0,o.kt)("h2",{id:"page"},"Page"),(0,o.kt)("p",null,"To define ",(0,o.kt)("inlineCode",{parentName:"p"},"Login")," page create new ",(0,o.kt)("inlineCode",{parentName:"p"},"Login.page.yaml")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Project\n\u251c\u2500\u2500 Login.page.yaml\n\u2514\u2500\u2500 Project.csproj\n")),(0,o.kt)("p",null,"Login page now can be accessed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"var loginPage = driver.Ya().LoginPage;\n")),(0,o.kt)("p",null,"It is recommended to group pages by folders."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Project\n\u251c\u2500\u2500 Pages\n|   \u251c\u2500\u2500 Administration\n|   |   \u251c\u2500\u2500 Users.page.yaml\n|   |   \u2514\u2500\u2500 Roles.page.yaml\n|   \u2514\u2500\u2500 Login.page.yaml\n\u2514\u2500\u2500 Project.csproj\n")),(0,o.kt)("p",null,"Yapoml follows your folders structure and separates pages by spaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"var loginPage = driver.Ya().Pages.LoginPage;\nvar usersPage = driver.Ya().Pages.Administration.UsersPage;\n")),(0,o.kt)("h3",{id:"url"},"Url"),(0,o.kt)("p",null,"For better identification of the page we can declare its ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Login.page.yaml"',title:'"Login.page.yaml"'},"url: https://example.com/login\n")),(0,o.kt)("p",null,"Or relative ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Login.page.yaml"',title:'"Login.page.yaml"'},"url: /login\n")),(0,o.kt)("p",null,"It makes ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/interactions#open"},"navigation")," to this page easier, or verification whether this page is ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/expectations#isopened"},"opened"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"loginPage.Open();\n\nloginPage.Expect().IsOpened();\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"url")," might have segments and query parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="User.page.yaml"',title:'"User.page.yaml"'},"url:\n  path: /users/{userId}\n  query:\n    - param1\n    - param2\n")),(0,o.kt)("p",null,"It is even easier to navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"UserPage"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'userPage.Open(userId: "123", param2: "some value");\n// navigates to /users/123?param2=some%20value\n')),(0,o.kt)("h2",{id:"component"},"Component"),(0,o.kt)("p",null,"A component is a part of a web page that has its own functionality, layout, and style. It can be reused on different pages or in different parts of the same page. For example, a component can be a navigation menu, a search box, a footer, a carousel, or a custom element that you create yourself. A component can also contain other components inside it, creating a hierarchical structure of the web page."),(0,o.kt)("p",null,"In this example ",(0,o.kt)("inlineCode",{parentName:"p"},"Login")," page has ",(0,o.kt)("inlineCode",{parentName:"p"},"Username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Password")," input fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Login.page.yaml"',title:'"Login.page.yaml"'},"username: .user\npassword: .pass\n")),(0,o.kt)("h3",{id:"locator"},"Locator"),(0,o.kt)("p",null,"Each component is identified by its locator, which tells how to locate a component on the page."),(0,o.kt)("p",null,"Supported locator methods (case insensitive):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CSS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"XPath"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If locator method is not declared explicitly, Yapoml tries to recognize it automatically. By default it treats it as ",(0,o.kt)("inlineCode",{parentName:"p"},"xpath")," if it's valid, otherwise as ",(0,o.kt)("inlineCode",{parentName:"p"},"css"),".")),(0,o.kt)("p",null,"The following example shows different variants how to declare ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," component with its css ",(0,o.kt)("inlineCode",{parentName:"p"},".user")," selector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Login.page.yaml"',title:'"Login.page.yaml"'},"username:\n  by:\n    css: .user\n\n# or shorter\nusername:\n  by: css .user\n\n# or shorter\nusername: css .user\n\n# or shorter\nusername: .user\n")),(0,o.kt)("h3",{id:"list-of-components"},"List of components"),(0,o.kt)("p",null,"Yapoml framework is smart enough to understand whether you define one single component located by locator, or many components located by this locator. Plural components are identified in the same way as your natural language."),(0,o.kt)("p",null,"If you want to find all buttons on the page by specific locator, just declare it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Home.page.yaml"',title:'"Home.page.yaml"'},"buttons: //button\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"buttons")," here is plural word, which is treated by Yapoml it should find many elements."),(0,o.kt)("p",null,"Then you can use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"foreach (var button in homePage.Buttons)\n{\n  Console.WriteLine(button.Text);\n}\n")),(0,o.kt)("h3",{id:"nested"},"Nested"),(0,o.kt)("p",null,"A nested component is a component that is contained inside another component, forming a parent-child relationship."),(0,o.kt)("p",null,"In this example ",(0,o.kt)("inlineCode",{parentName:"p"},"menu")," component is located in scope of ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," component, and ",(0,o.kt)("inlineCode",{parentName:"p"},"menu")," component contains many menu ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," inside."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Home.page.yaml"',title:'"Home.page.yaml"'},"logo: //img\n\nheader:\n  by: .header\n\n  menu:\n    by: .//ul\n\n    items: ./li\n")),(0,o.kt)("h3",{id:"parametrized-locator"},"Parametrized locator"),(0,o.kt)("p",null,"Usually all components locators can be declared deterministically. But sometimes it is beneficial to determine component's locator at runtime. Locator can be parametrized, where each parameter is provided in runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Home.page.yaml"',title:'"Home.page.yaml"'},"section: .//section[text()='{name}']\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{name}")," is treated as a parameter, and then you use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// locates single section with "Upcoming" text\nhomePage.Section(name: "Upcoming");\n')),(0,o.kt)("p",null,"It also works with a list of components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Home.page.yaml"',title:'"Home.page.yaml"'},"sections: .//section[starts-with(text(), '{name}')]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// locates many sections which start with "A" text\nhomePage.Sections(text: "A");\n')),(0,o.kt)("h3",{id:"reusable-components"},"Reusable components"),(0,o.kt)("p",null,"It's possible to declare a component once in ",(0,o.kt)("inlineCode",{parentName:"p"},"*.component.yaml")," file and reuse it across pages or components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Select.component.yaml"',title:'"Select.component.yaml"'},"options: ./option\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Home.page.yaml"',title:'"Home.page.yaml"'},"sort:\n  by: id sort\n  ref: select\n")),(0,o.kt)("p",null,"And now use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'homePage.Sort.Options.First(o => o.Text.Equals(["Relevance"])).Click();\n\n// or shorter\nhomePage.Sort.Options["Relevance"].Click();\n\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Aliases for ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," keyword:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base")))),(0,o.kt)("h2",{id:"showcase"},"Showcase"),(0,o.kt)("p",null,"Now that we have learned how to declare pages and components, let's create a real test which verifies that on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages?q=yapoml"},"https://www.nuget.org/packages?q=yapoml")," page there is at least 1 package, and that all packages have a description and tags."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Packages.page.yaml"',title:'"Packages.page.yaml"'},"url:\n  path: https://www.nuget.org/packages\n  query:\n    - q\n\npackages: \n  by: .package\n\n  description: .package-details\n  tags: .package-tags a\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'driver.Ya().PackagesPage.Open(q: "yapoml")\n  .Packages.Expect(it => it.IsNotEmpty().Each(package =>\n    {\n      package.Description.IsNotEmpty();\n      package.Tags.IsNotEmpty();\n    })\n  );\n')),(0,o.kt)(r.Z,{mdxType:"Details"},(0,o.kt)("summary",{mdxType:"summary"},"Console output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"16:26:55.296 TRC \u2022 Opening Packages page by https://www.nuget.org/packages?q=yapoml\n16:26:59.416 TRC \u2022 4.1s\n16:26:59.419 TRC \u2022 Expect packages satisfy conditions\n16:26:59.423 TRC \u254e \u2022 Expect the count of packages is greater than 0\n16:26:59.425 TRC \u254e \u254e Finding packages by css selector .package\n16:26:59.445 TRC \u254e \u254e Found 6 packages\n16:26:59.446 TRC \u254e \u2022 Expect each package satisfy conditions\n16:26:59.448 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.449 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.477 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.477 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.488 TRC \u254e \u254e \u254e Found 5 tags\n16:26:59.488 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.488 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.500 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.500 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.506 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.506 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.506 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.518 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.518 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.523 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.523 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.523 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.534 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.534 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.541 TRC \u254e \u254e \u254e Found 4 tags\n16:26:59.541 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.541 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.553 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.553 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.560 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.560 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.560 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.571 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.571 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.578 TRC \u254e \u254e \u254e Found 4 tags\n"))))}d.isMDXComponent=!0}}]);