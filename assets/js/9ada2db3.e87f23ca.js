"use strict";(self.webpackChunkyapoml=self.webpackChunkyapoml||[]).push([[723],{2814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(5893),r=n(1151);const a={title:"Logging",description:"Use any log framework for your tests"},s=void 0,i={id:"concept/advanced/logging",title:"Logging",description:"Use any log framework for your tests",source:"@site/docs/concept/advanced/logging.md",sourceDirName:"concept/advanced",slug:"/concept/advanced/logging",permalink:"/docs/concept/advanced/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/concept/advanced/logging.md",tags:[],version:"current",frontMatter:{title:"Logging",description:"Use any log framework for your tests"},sidebar:"tutorialSidebar",previous:{title:"Caching",permalink:"/docs/concept/advanced/caching"},next:{title:"Getting Started",permalink:"/docs/selenium/intro"}},c={},l=[{value:"Serilog",id:"serilog",level:2},{value:"Report Portal",id:"report-portal",level:2},{value:"etc",id:"etc",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Yapoml produces log messages when interacts with components. All messages can be routed to your preferred log framework."}),"\n",(0,o.jsx)(t.h2,{id:"serilog",children:(0,o.jsx)(t.a,{href:"https://serilog.net",children:"Serilog"})}),"\n",(0,o.jsxs)(t.p,{children:["Install ",(0,o.jsx)(t.a,{href:"https://www.nuget.org/packages/Yapoml.Extensions.Logging.Serilog",children:"Yapoml.Extensions.Logging.Serilog"})," nuget package."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"driver.Ya(opts => opts.WithSerilog());\n"})}),"\n",(0,o.jsx)(t.h2,{id:"report-portal",children:(0,o.jsx)(t.a,{href:"https://reportportal.io",children:"Report Portal"})}),"\n",(0,o.jsxs)(t.p,{children:["Install ",(0,o.jsx)(t.a,{href:"https://www.nuget.org/packages/Yapoml.Extensions.Logging.ReportPortal",children:"Yapoml.Extensions.Logging.ReportPortal"})," nuget package."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"driver.Ya(opts => opts.WithReportPortal());\n"})}),"\n",(0,o.jsx)(t.h2,{id:"etc",children:"etc"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Any log framework can be easily implemented, just ask."})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(7294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);