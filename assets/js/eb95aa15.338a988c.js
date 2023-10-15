"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={title:"Expectations",description:"Awaitable expectations enabling further flow execution",sidebar_position:3},s=void 0,r={unversionedId:"expectations",id:"expectations",title:"Expectations",description:"Awaitable expectations enabling further flow execution",source:"@site/docs/expectations.md",sourceDirName:".",slug:"/expectations",permalink:"/docs/expectations",draft:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/expectations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Expectations",description:"Awaitable expectations enabling further flow execution",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/interactions"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},l={},p=[{value:"Chain multiple conditions",id:"chain-multiple-conditions",level:2},{value:"Awaitable expectations",id:"awaitable-expectations",level:2},{value:"Page conditions",id:"page-conditions",level:2},{value:"IsLoaded",id:"isloaded",level:3},{value:"Url\u2026",id:"url",level:3},{value:"Title\u2026",id:"title",level:3},{value:"Component conditions",id:"component-conditions",level:2},{value:"IsDisplayed",id:"isdisplayed",level:3},{value:"Exists",id:"exists",level:3},{value:"IsEnabled",id:"isenabled",level:3},{value:"Text",id:"text",level:3},{value:"Attributes\u2026",id:"attributes",level:3},{value:"Styles\u2026",id:"styles",level:3},{value:"Components collection conditions",id:"components-collection-conditions",level:2},{value:"Count\u2026",id:"count",level:3},{value:"Each",id:"each",level:3},{value:"Contains",id:"contains",level:3},{value:"IsEmpty",id:"isempty",level:3},{value:"Generic conditions",id:"generic-conditions",level:2},{value:"Textual conditions",id:"textual-conditions",level:3},{value:"Numeric conditions",id:"numeric-conditions",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are many ways how to expect some conditions on the page before making any further actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'ya.LoginPage.UsernameInput\n    .Expect().IsEnabled()\n    .Type("john");\n')),(0,i.kt)("p",null,"Or slightly reversed expression allowing you think about action first, and then about condition(s) when an action should be performed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'ya.LoginPage.UsernameInput\n    .Type("john", when => when.IsEnabled());\n')),(0,i.kt)("p",null,"Above examples wait until ",(0,i.kt)("inlineCode",{parentName:"p"},"UsernameInput")," component is enabled, and then type ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," text."),(0,i.kt)("h2",{id:"chain-multiple-conditions"},"Chain multiple conditions"),(0,i.kt)("p",null,"Conditions are chainable, even with near components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"form\n  .Expect(it => it.IsDisplayed().IsEnabled().UsernameInput.IsEnabled())\n  .Submit();\n")),(0,i.kt)("p",null,"Or if you prefer thinking about action first"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"form.Submit(when => when.IsDisplayed().IsEnabled().UsernameInput.IsEnabled());\n")),(0,i.kt)("p",null,"It waits until the form is displayed and enabled, and username input is enabled, and only then submit a form."),(0,i.kt)("h2",{id:"awaitable-expectations"},"Awaitable expectations"),(0,i.kt)("p",null,"Expectations are also can be considered as awaitable assertions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'homePage.SearchInput\n  .Type("It was great!")\n  .Expect().Attributes.Value.Is("That is great!");\n')),(0,i.kt)("p",null,"If a condition wasn't meet, exception is raised."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Yapoml.ExpectException : Attribute value of the search input is not 'That is great!',\n  it was \u2510That i\u250cs great!\n         \u2514It wa \u2518        \n\n  ----\x3e System.TimeoutException : Condition was not satisfied within 30 seconds when polled every 0.5 seconds.\n")),(0,i.kt)("admonition",{title:"Timeout",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Any condition accepts optional ",(0,i.kt)("inlineCode",{parentName:"p"},"timeout")," parameter. Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," seconds."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"page.Expect().IsLoaded(timeout: TimeSpan.FromSeconds(50));\n")),(0,i.kt)("p",{parentName:"admonition"},"Or configure it globally."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"driver.Ya(options => options.WithTimeout(TimeSpan.FromSeconds(50)))\n")),(0,i.kt)("p",{parentName:"admonition"},"For instant assertions you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"TimeSpan.Zero")," (looking for better alternative)"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"// it doesn't wait until page title equals to 'Yapoml',\n// throws immediately if not\npage.Expect().Title.Is(\"Yapoml\", TimeSpan.Zero);\n"))),(0,i.kt)("h2",{id:"page-conditions"},"Page conditions"),(0,i.kt)("h3",{id:"isloaded"},"IsLoaded"),(0,i.kt)("p",null,"Evaluates document's state to be ",(0,i.kt)("inlineCode",{parentName:"p"},"complete")," which means the page is fully loaded. It doesn't guarantee that some components on the page are present, they might be rendered dynamically."),(0,i.kt)("admonition",{title:"url",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," is defined for the page, then it also evaluates current url."),(0,i.kt)("p",{parentName:"admonition"},"TBD: Supported only if ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," has no segments and query parameters.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"page.Expect().IsLoaded();\n")),(0,i.kt)("h3",{id:"url"},"Url\u2026"),(0,i.kt)("p",null,"Various conditions for current page ",(0,i.kt)("inlineCode",{parentName:"p"},"Url"),". It can be ",(0,i.kt)("inlineCode",{parentName:"p"},'page.Expect(its => its.Url.Is("something"))'),", or ",(0,i.kt)("inlineCode",{parentName:"p"},'.EndsWith("something")'),", ",(0,i.kt)("a",{parentName:"p",href:"#textual-conditions"},"etc"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Expect().Url.Contains("/user?name=john");\n')),(0,i.kt)("h3",{id:"title"},"Title\u2026"),(0,i.kt)("p",null,"Various conditions for current title of the page. There are a lot of verifications due to textual nature of the title, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'.Is("something")')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'Contains("something")'),", ",(0,i.kt)("a",{parentName:"p",href:"#textual-conditions"},"etc"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'page.Expect().Title.StartsWith("Administration");\n')),(0,i.kt)("h2",{id:"component-conditions"},"Component conditions"),(0,i.kt)("h3",{id:"isdisplayed"},"IsDisplayed"),(0,i.kt)("p",null,"Waits until a certain component is present and displayed. This method avoids the problem of having to parse an element's style attribute. You can use it for verifying the presence of a component. The opposite version is ",(0,i.kt)("strong",{parentName:"p"},"IsNotDisplayed"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"signInButton.Click(when => when.IsDisplayed());\n")),(0,i.kt)("h3",{id:"exists"},"Exists"),(0,i.kt)("p",null,"This method protects your program from ridiculous exceptions when a component is not attached to the DOM yet. Usually it happens with dynamic components. When a component is attached to the DOM, it means that it is present in the HTML code of the page. It doesn't mean the component is visible. If you get an error message something like ",(0,i.kt)("em",{parentName:"p"},"Element is no longer attached to the DOM")," while running your program, it means that the component you are trying to interact with has been removed from the DOM. The opposite version is ",(0,i.kt)("strong",{parentName:"p"},"DoesNotExist"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"modal.Expect().Exists();\n")),(0,i.kt)("h3",{id:"isenabled"},"IsEnabled"),(0,i.kt)("p",null,"Waits until a component is enabled and ready for interaction. Useful for checking a component's readiness before clicking on it, or typing a text into input fields. The opposite version is ",(0,i.kt)("strong",{parentName:"p"},"IsNotEnabled"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"signInButton.Click(when => when.IsEnabled());\n")),(0,i.kt)("h3",{id:"text"},"Text"),(0,i.kt)("p",null,"Conditions for checking text content of the component."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'signInButton.Expect(its => its.Text.Is("Sign In"));\n\n// ignoring case\nsignInButton.Expect(its => its.Text.Is("sign in", StringComparison.OrdinalIgnoreCase));\n')),(0,i.kt)("h3",{id:"attributes"},"Attributes\u2026"),(0,i.kt)("p",null,"Certain conditions for a component's attributes what define characteristics and properties of a component. In web this is html attribute for the specified tag. Due to textual nature of the attributes, you can use ",(0,i.kt)("a",{parentName:"p",href:"#textual-conditions"},"many ways")," to create conditions for attributes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'usernameInput.Expect(its => its.Attributes["value"].IsEmpty());\n')),(0,i.kt)("p",null,"Or use well-known attributes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"usernameInput.Expect(its => its.Attributes.Value.IsEmpty());\n")),(0,i.kt)("h3",{id:"styles"},"Styles\u2026"),(0,i.kt)("p",null,"Provides a different conditions to wait some computed style of a component, such as color, font, size, and more."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'signInButton.Expect(its => its.Styles["color"].Contains("255"));\n')),(0,i.kt)("p",null,"Or use well-known styles"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'signInButton.Expect(its => its.Styles.Color.Contains("255"));\n')),(0,i.kt)("h2",{id:"components-collection-conditions"},"Components collection conditions"),(0,i.kt)("h3",{id:"count"},"Count\u2026"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#numeric-conditions"},"Condition")," for collection of components to verify its count of components."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"ya.SearchResultsPage.Results.Expect().Count.Is(20);\n")),(0,i.kt)("h3",{id:"each"},"Each"),(0,i.kt)("p",null,"Condition to be satisfied by each component in the list."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'ya.SearchResultsPage.Results.Expect().Each(r => r.Attributes.Href.StartsWith("https://"));\n')),(0,i.kt)("h3",{id:"contains"},"Contains"),(0,i.kt)("p",null,"Expect at least one component in the list satisfies expected condition. The opposite version is ",(0,i.kt)("strong",{parentName:"p"},"DoesNotContain"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'ya.SearchResultsPage.Results.Expect(it => it.Contains(r => r.Attributes.Href.StartsWith("ftp://")));\n')),(0,i.kt)("h3",{id:"isempty"},"IsEmpty"),(0,i.kt)("p",null,"Expect the count of components is ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". The opposite version is ",(0,i.kt)("strong",{parentName:"p"},"IsNotEmpty"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"ya.SearchResultsPage.Results.Expect().IsEmpty();\n")),(0,i.kt)("h2",{id:"generic-conditions"},"Generic conditions"),(0,i.kt)("p",null,"These generic conditions are implicitly applicable for all known subject's types."),(0,i.kt)("h3",{id:"textual-conditions"},"Textual conditions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Is")," - Checks if the actual text is equal to the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IsNot")," - Checks if the actual text is not equal to the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IsEmpty")," - Checks if the actual text is empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IsNotEmpty")," - Checks if the actual text is not empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Matches")," - Checks if the actual text matches the expected regular expression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DoesNotMatch")," - Checks if the actual text does not match the expected regular expression."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"StartsWith")," - Checks if the actual text starts with the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DoesNotStartWith")," - Checks if the actual text does not start with the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"EndsWith")," - Checks if the actual text ends with the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DoesNotEndWith")," - Checks if the actual text does not end with the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contains")," - Checks if the actual text contains the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DoesNotContain")," - Checks if the actual text does not contain the expected text using the default string comparison."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Length\u2026")," - Various continuation ",(0,i.kt)("a",{parentName:"li",href:"#numeric-conditions"},"numeric conditions")," for its length. E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"signInButton.Expect(its => its.Text.Length.IsGreaterThan(5));"))),(0,i.kt)("h3",{id:"numeric-conditions"},"Numeric conditions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Is")," - Checks if the actual value is equal to the expected value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IsNot")," - Checks if the actual value is not equal to the expected value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IsGreaterThan")," - Checks if the actual value is greater than the expected value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AtLeast")," - Checks if the actual value is equal to or greater than the expected value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IsLessThan")," - Checks if the actual value is less than the expected value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AtMost")," - Checks if the actual value is equal to or less than the expected value.")))}m.isMDXComponent=!0}}]);