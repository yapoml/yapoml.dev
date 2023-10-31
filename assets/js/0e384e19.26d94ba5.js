"use strict";(self.webpackChunkyapoml=self.webpackChunkyapoml||[]).push([[671],{7876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(5893),s=t(1151);const o={title:"Introduction",description:"Define your page objects with ease and start to automate immediately",sidebar_position:0},r=void 0,a={id:"intro",title:"Introduction",description:"Define your page objects with ease and start to automate immediately",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Introduction",description:"Define your page objects with ease and start to automate immediately",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Syntax",permalink:"/docs/concept/syntax"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Yapoml framework provides an ability to generate page object models for most popular testing tools on fly. It generates all necessary classes ready to use while you type in your IDE."}),"\n",(0,i.jsxs)(n.p,{children:["Define UI components in ",(0,i.jsx)(n.code,{children:"*.page.yaml"})," files:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="Login.page.yaml"',children:"username: .user\n"})}),"\n",(0,i.jsx)(n.p,{children:"That's it! Now you can interact with UI components immediately."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'driver.Ya().LoginPage.Username.Type("user01");\n'})}),"\n",(0,i.jsxs)(n.admonition,{title:"Explanation",type:"info",children:[(0,i.jsxs)(n.p,{children:["Our application has login page, which is defined in ",(0,i.jsx)(n.code,{children:"Login.page.yaml"})," file. Login page has ",(0,i.jsx)(n.code,{children:"username"})," input field which is located by ",(0,i.jsx)(n.code,{children:".user"})," css locator. Once it is defined, we can interact with it, like typing some text."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"driver.Ya()"})," - main entry point for all consumers, your journey always starts here,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".LoginPage"})," - accessing to login page object,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".Username"})," - accessing to username input field,"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'.Type("user01")'})," - send keyboard events into username input field requires no explicit waiting"]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"Or define more complex relative components."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="Login.page.yaml"',children:"form:\n  by: .//form\n\n  username: .username\n  password: .password\n  \n  sign in: .//button\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'driver.Ya().LoginPage.Form\n  .Username.Type("user01")\n  .Password.Type("pass01")\n  .SignIn.Click();\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);