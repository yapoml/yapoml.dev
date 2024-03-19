"use strict";(self.webpackChunkyapoml=self.webpackChunkyapoml||[]).push([[72],{4227:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(4848),a=t(8453),i=t(4971);const o={title:"Syntax",description:"Define your page objects with ease and start to automate immediately",sidebar_position:1},r="Syntax",c={id:"concepts/syntax",title:"Syntax",description:"Define your page objects with ease and start to automate immediately",source:"@site/docs/concepts/syntax.md",sourceDirName:"concepts",slug:"/concepts/syntax",permalink:"/docs/concepts/syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/concepts/syntax.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Syntax",description:"Define your page objects with ease and start to automate immediately",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Interactions",permalink:"/docs/concepts/interactions"}},l={},d=[{value:"Page",id:"page",level:2},{value:"Url",id:"url",level:3},{value:"Component",id:"component",level:2},{value:"Locator",id:"locator",level:3},{value:"List of components",id:"list-of-components",level:3},{value:"Nested",id:"nested",level:3},{value:"Parametrized locator",id:"parametrized-locator",level:3},{value:"Reusable components",id:"reusable-components",level:3},{value:"Showcase",id:"showcase",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(n.p,{children:["Pages and components are declared in ",(0,s.jsx)(n.code,{children:"*.page.yaml"})," and ",(0,s.jsx)(n.code,{children:"*.component.yaml"})," files respectively. This format is user-friendly and allows us to describe the structure of pages and components clearly. Just add new files in your project and start defining pages."]}),"\n",(0,s.jsx)(n.h2,{id:"page",children:"Page"}),"\n",(0,s.jsxs)(n.p,{children:["To define ",(0,s.jsx)(n.code,{children:"Login"})," page create new ",(0,s.jsx)(n.code,{children:"Login.page.yaml"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Project\n\u251c\u2500\u2500 Login.page.yaml\n\u2514\u2500\u2500 Project.csproj\n"})}),"\n",(0,s.jsx)(n.p,{children:"Login page now can be accessed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:"var loginPage = driver.Ya().LoginPage;\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is recommended to group pages by folders."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Project\n\u251c\u2500\u2500 Pages\n|   \u251c\u2500\u2500 Administration\n|   |   \u251c\u2500\u2500 Users.page.yaml\n|   |   \u2514\u2500\u2500 Roles.page.yaml\n|   \u2514\u2500\u2500 Login.page.yaml\n\u2514\u2500\u2500 Project.csproj\n"})}),"\n",(0,s.jsx)(n.p,{children:"Yapoml follows your folders structure and separates pages by spaces."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:"var loginPage = driver.Ya().Pages.LoginPage;\nvar usersPage = driver.Ya().Pages.Administration.UsersPage;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"Url"}),"\n",(0,s.jsxs)(n.p,{children:["For better identification of the page we can declare its ",(0,s.jsx)(n.code,{children:"url"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Login.page.yaml"',children:"url: https://example.com/login\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or relative ",(0,s.jsx)(n.code,{children:"url"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Login.page.yaml"',children:"url: /login\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It makes ",(0,s.jsx)(n.a,{href:"/docs/concepts/interactions#open",children:"navigation"})," to this page easier, or verification whether this page is ",(0,s.jsx)(n.a,{href:"/docs/concepts/expectations#isopened",children:"opened"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:"loginPage.Open();\n\nloginPage.Expect().IsOpened();\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"url"})," might have segments and query parameters."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="User.page.yaml"',children:"url:\n  path: /users/{userId}\n  query:\n    - param1\n    - param2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It is even easier to navigate to ",(0,s.jsx)(n.code,{children:"UserPage"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'userPage.Open(userId: "123", param2: "some value");\n// navigates to /users/123?param2=some%20value\n'})}),"\n",(0,s.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,s.jsx)(n.p,{children:"A component is a part of a web page that has its own functionality, layout, and style. It can be reused on different pages or in different parts of the same page. For example, a component can be a navigation menu, a search box, a footer, a carousel, or a custom element that you create yourself. A component can also contain other components inside it, creating a hierarchical structure of the web page."}),"\n",(0,s.jsxs)(n.p,{children:["In this example ",(0,s.jsx)(n.code,{children:"Login"})," page has ",(0,s.jsx)(n.code,{children:"Username"})," and ",(0,s.jsx)(n.code,{children:"Password"})," input fields."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Login.page.yaml"',children:"username: .user\npassword: .pass\n"})}),"\n",(0,s.jsx)(n.h3,{id:"locator",children:"Locator"}),"\n",(0,s.jsx)(n.p,{children:"Each component is identified by its locator, which tells how to locate a component on the page."}),"\n",(0,s.jsx)(n.p,{children:"Supported locator methods (case insensitive):"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"id"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"css"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"xpath"})}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If locator method is not declared explicitly, Yapoml tries to recognize it automatically. By default it treats it as ",(0,s.jsx)(n.code,{children:"xpath"})," if it's valid, otherwise as ",(0,s.jsx)(n.code,{children:"css"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["The following example shows different variants how to declare ",(0,s.jsx)(n.code,{children:"username"})," component with its css ",(0,s.jsx)(n.code,{children:".user"})," selector."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Login.page.yaml"',children:"username:\n  by:\n    css: .user\n\n# or shorter\nusername:\n  by: css .user\n\n# or shorter\nusername: css .user\n\n# or shorter\nusername: .user\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list-of-components",children:"List of components"}),"\n",(0,s.jsx)(n.p,{children:"Yapoml framework is smart enough to understand whether you define one single component located by locator, or many components located by this locator. Plural components are identified in the same way as your natural language."}),"\n",(0,s.jsx)(n.p,{children:"If you want to find all buttons on the page by specific locator, just declare it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Home.page.yaml"',children:"buttons: //button\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"buttons"})," here is a plural word, which is treated by Yapoml as it should find many elements."]}),"\n",(0,s.jsx)(n.p,{children:"Then you can use it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:"foreach (var button in homePage.Buttons)\n{\n  Console.WriteLine(button.Text);\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nested",children:"Nested"}),"\n",(0,s.jsx)(n.p,{children:"A nested component is a component that is contained inside another component, forming a parent-child relationship."}),"\n",(0,s.jsxs)(n.p,{children:["In this example ",(0,s.jsx)(n.code,{children:"menu"})," component is located in scope of ",(0,s.jsx)(n.code,{children:"header"})," component, and ",(0,s.jsx)(n.code,{children:"menu"})," component contains many menu ",(0,s.jsx)(n.code,{children:"items"})," inside."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Home.page.yaml"',children:"logo: //img\n\nheader:\n  by: .header\n\n  menu:\n    by: .//ul\n\n    items: ./li\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parametrized-locator",children:"Parametrized locator"}),"\n",(0,s.jsx)(n.p,{children:"Usually all components locators can be declared deterministically. But sometimes it is beneficial to determine component's locator at runtime. Locator can be parametrized, where each parameter is provided in runtime."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Home.page.yaml"',children:"section: .//section[text()='{name}']\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"{name}"})," is treated as a parameter, and then you use it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// locates single section with "Upcoming" text\nhomePage.Section(name: "Upcoming");\n'})}),"\n",(0,s.jsx)(n.p,{children:"It also works with a list of components:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Home.page.yaml"',children:"sections: .//section[starts-with(text(), '{name}')]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// locates many sections which start with "A" text\nhomePage.Sections(text: "A");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"reusable-components",children:"Reusable components"}),"\n",(0,s.jsxs)(n.p,{children:["It's possible to declare a component once in ",(0,s.jsx)(n.code,{children:"*.component.yaml"})," file and reuse it across pages or components."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Select.component.yaml"',children:"options: ./option\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Home.page.yaml"',children:"sort:\n  by: id sort\n  ref: select\n"})}),"\n",(0,s.jsx)(n.p,{children:"And now use it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'homePage.Sort.Options.First(o => o.Text.Equals(["Relevance"])).Click();\n\n// or shorter\nhomePage.Sort.Options["Relevance"].Click();\n\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Aliases for ",(0,s.jsx)(n.code,{children:"ref"})," keyword:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"base"})}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"showcase",children:"Showcase"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have learned how to declare pages and components, let's create a real test which verifies that on the ",(0,s.jsx)(n.a,{href:"https://www.nuget.org/packages?q=yapoml",children:"https://www.nuget.org/packages?q=yapoml"})," page there is at least 1 package, and that all packages have a description and tags."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="Packages.page.yaml"',children:"url:\n  path: https://www.nuget.org/packages\n  query:\n    - q\n\npackages: \n  by: .package\n\n  description: .package-details\n  tags: .package-tags a\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'driver.Ya().PackagesPage.Open(q: "yapoml")\n  .Packages.Expect(it => it.IsNotEmpty().Each(package =>\n    {\n      package.Description.IsNotEmpty();\n      package.Tags.IsNotEmpty();\n    })\n  );\n'})}),"\n","\n","\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Console output"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"16:26:55.296 TRC \u2022 Opening Packages page by https://www.nuget.org/packages?q=yapoml\n16:26:59.416 TRC \u2022 4.1s\n16:26:59.419 TRC \u2022 Expect packages satisfy conditions\n16:26:59.423 TRC \u254e \u2022 Expect the count of packages is greater than 0\n16:26:59.425 TRC \u254e \u254e Finding packages by css selector .package\n16:26:59.445 TRC \u254e \u254e Found 6 packages\n16:26:59.446 TRC \u254e \u2022 Expect each package satisfy conditions\n16:26:59.448 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.449 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.477 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.477 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.488 TRC \u254e \u254e \u254e Found 5 tags\n16:26:59.488 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.488 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.500 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.500 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.506 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.506 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.506 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.518 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.518 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.523 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.523 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.523 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.534 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.534 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.541 TRC \u254e \u254e \u254e Found 4 tags\n16:26:59.541 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.541 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.553 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.553 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.560 TRC \u254e \u254e \u254e Found 2 tags\n16:26:59.560 TRC \u254e \u254e \u2022 Expect text of the description is not empty\n16:26:59.560 TRC \u254e \u254e \u254e Finding description by css selector .package-details\n16:26:59.571 TRC \u254e \u254e \u2022 Expect the count of tags is greater than 0\n16:26:59.571 TRC \u254e \u254e \u254e Finding tags by css selector .package-tags a\n16:26:59.578 TRC \u254e \u254e \u254e Found 4 tags\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4971:(e,n,t)=>{t.d(n,{A:()=>j});var s=t(6540),a=t(8215),i=t(5066),o=t(3427),r=t(2303),c=t(1422);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var d=t(4848);function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function h(e,n){return!!e&&(e===n||h(e.parentElement,n))}function m(e){let{summary:n,children:t,...a}=e;(0,o.A)().collectAnchor(a.id);const m=(0,r.A)(),g=(0,s.useRef)(null),{collapsed:u,setCollapsed:x}=(0,c.u)({initialState:!a.open}),[j,y]=(0,s.useState)(a.open),f=s.isValidElement(n)?n:(0,d.jsx)("summary",{children:n??"Details"});return(0,d.jsxs)("details",{...a,ref:g,open:j,"data-collapsed":u,className:(0,i.A)(l.details,m&&l.isBrowser,a.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;p(n)&&h(n,g.current)&&(e.preventDefault(),u?(x(!1),y(!0)):x(!0))},children:[f,(0,d.jsx)(c.N,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{x(e),y(!e)},children:(0,d.jsx)("div",{className:l.collapsibleContent,children:t})})]})}const g={details:"details_b_Ee"},u="alert alert--info";function x(e){let{...n}=e;return(0,d.jsx)(m,{...n,className:(0,a.A)(u,g.details,n.className)})}function j(e){const n=s.Children.toArray(e.children),t=n.find((e=>s.isValidElement(e)&&"summary"===e.type)),a=(0,d.jsx)(d.Fragment,{children:n.filter((e=>e!==t))});return(0,d.jsx)(x,{...e,summary:t,children:a})}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);