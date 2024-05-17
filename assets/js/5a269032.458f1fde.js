"use strict";(self.webpackChunkyapoml=self.webpackChunkyapoml||[]).push([[717],{2195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>r});var s=t(4848),i=t(8453);const c={title:"Expectations",description:"Awaitable expectations enabling further flow execution",sidebar_position:3},o=void 0,a={id:"concepts/expectations",title:"Expectations",description:"Awaitable expectations enabling further flow execution",source:"@site/docs/concepts/expectations.md",sourceDirName:"concepts",slug:"/concepts/expectations",permalink:"/docs/concepts/expectations",draft:!1,unlisted:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/concepts/expectations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Expectations",description:"Awaitable expectations enabling further flow execution",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interactions",permalink:"/docs/concepts/interactions"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},l={},r=[{value:"Chain multiple conditions",id:"chain-multiple-conditions",level:2},{value:"Awaitable expectations",id:"awaitable-expectations",level:2},{value:"Page conditions",id:"page-conditions",level:2},{value:"IsOpened",id:"isopened",level:3},{value:"Url\u2026",id:"url",level:3},{value:"Title\u2026",id:"title",level:3},{value:"Component conditions",id:"component-conditions",level:2},{value:"IsDisplayed",id:"isdisplayed",level:3},{value:"Exists",id:"exists",level:3},{value:"IsEnabled",id:"isenabled",level:3},{value:"IsChecked",id:"ischecked",level:3},{value:"Text",id:"text",level:3},{value:"Attributes\u2026",id:"attributes",level:3},{value:"Styles\u2026",id:"styles",level:3},{value:"IsInView",id:"isinview",level:3},{value:"Components collection conditions",id:"components-collection-conditions",level:2},{value:"Count\u2026",id:"count",level:3},{value:"Each",id:"each",level:3},{value:"Contains",id:"contains",level:3},{value:"IsEmpty",id:"isempty",level:3},{value:"Generic conditions",id:"generic-conditions",level:2},{value:"Textual conditions",id:"textual-conditions",level:3},{value:"Numeric conditions",id:"numeric-conditions",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"There are many ways how to expect some conditions on the page before making any further actions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'ya.LoginPage.UsernameInput\n    .Expect().IsEnabled()\n    .Type("John");\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or slightly reversed expression allowing you think about action first, and then about condition(s) when an action should be performed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'ya.LoginPage.UsernameInput\n    .Type("John", when => when.IsEnabled());\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Above examples wait until ",(0,s.jsx)(n.code,{children:"UsernameInput"})," component is enabled, and then type ",(0,s.jsx)(n.code,{children:"John"})," text."]}),"\n",(0,s.jsx)(n.h2,{id:"chain-multiple-conditions",children:"Chain multiple conditions"}),"\n",(0,s.jsx)(n.p,{children:"Conditions are chainable, even with near components."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"form\n  .Expect(it => it.IsDisplayed().IsEnabled().UsernameInput.IsEnabled())\n  .Submit();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or if you prefer thinking about action first"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"form.Submit(when => when.IsDisplayed().IsEnabled().UsernameInput.IsEnabled());\n"})}),"\n",(0,s.jsx)(n.p,{children:"It waits until the form is displayed and enabled, and username input is enabled, and only then submit a form."}),"\n",(0,s.jsx)(n.h2,{id:"awaitable-expectations",children:"Awaitable expectations"}),"\n",(0,s.jsx)(n.p,{children:"Expectations are also can be considered as awaitable assertions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'homePage.SearchInput\n  .Type("It was great!")\n  .Expect().Attributes.Value.Is("That is great!");\n'})}),"\n",(0,s.jsx)(n.p,{children:"If a condition wasn't meet, exception is raised."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Yapoml.ExpectException : Attribute value of the search input is not 'That is great!',\n  it was \u2510That i\u250cs great!\n         \u2514It wa \u2518        \n\n  ----\x3e System.TimeoutException : Condition was not satisfied within 30 seconds when polled every 0.5 seconds.\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Timeout",type:"tip",children:[(0,s.jsxs)(n.p,{children:["Any condition accepts optional ",(0,s.jsx)(n.code,{children:"timeout"})," parameter. Default is ",(0,s.jsx)(n.code,{children:"30"})," seconds."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"page.Expect().IsOpened(timeout: TimeSpan.FromSeconds(50));\n"})}),(0,s.jsx)(n.p,{children:"Or configure it globally."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"driver.Ya(options => options.WithTimeout(TimeSpan.FromSeconds(50)))\n"})}),(0,s.jsxs)(n.p,{children:["For instant assertions you can use ",(0,s.jsx)(n.code,{children:"TimeSpan.Zero"})," (looking for better alternative)"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// it doesn't wait until page title equals to 'Yapoml',\n// throws immediately if not\npage.Expect().Title.Is(\"Yapoml\", TimeSpan.Zero);\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"page-conditions",children:"Page conditions"}),"\n",(0,s.jsx)(n.h3,{id:"isopened",children:"IsOpened"}),"\n",(0,s.jsxs)(n.p,{children:["Evaluates document's state to be ",(0,s.jsx)(n.code,{children:"complete"})," which means the page is fully loaded. It doesn't guarantee that some components on the page are present, they might be rendered dynamically."]}),"\n",(0,s.jsxs)(n.admonition,{title:"url",type:"info",children:[(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"url"})," is defined for the page, then it also evaluates current url."]}),(0,s.jsxs)(n.p,{children:["TBD: Supported only if ",(0,s.jsx)(n.code,{children:"url"})," has no segments and query parameters."]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"page.Expect().IsOpened();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"url",children:"Url\u2026"}),"\n",(0,s.jsxs)(n.p,{children:["Various conditions for current page ",(0,s.jsx)(n.code,{children:"Url"}),". It can be ",(0,s.jsx)(n.code,{children:'page.Expect().Url.Is("something")'}),", or ",(0,s.jsx)(n.code,{children:'.EndsWith("something")'}),", ",(0,s.jsx)(n.a,{href:"#textual-conditions",children:"etc"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'page.Expect().Url.Contains("/user?name=John");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"title",children:"Title\u2026"}),"\n",(0,s.jsxs)(n.p,{children:["Various conditions for current title of the page. There are a lot of verifications due to textual nature of the title, e.g. ",(0,s.jsx)(n.code,{children:'.Is("something")'})," or ",(0,s.jsx)(n.code,{children:'Contains("something")'}),", ",(0,s.jsx)(n.a,{href:"#textual-conditions",children:"etc"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'page.Expect().Title.StartsWith("Administration");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"component-conditions",children:"Component conditions"}),"\n",(0,s.jsx)(n.h3,{id:"isdisplayed",children:"IsDisplayed"}),"\n",(0,s.jsxs)(n.p,{children:["Waits until a certain component is present and displayed. This method avoids the problem of having to parse an element's style attribute. You can use it for verifying the presence of a component. The opposite version is ",(0,s.jsx)(n.strong,{children:"IsNotDisplayed"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"signInButton.Click(when => when.IsDisplayed());\n"})}),"\n",(0,s.jsx)(n.h3,{id:"exists",children:"Exists"}),"\n",(0,s.jsxs)(n.p,{children:["This method protects your program from ridiculous exceptions when a component is not attached to the DOM yet. Usually it happens with dynamic components. When a component is attached to the DOM, it means that it is present in the HTML code of the page. It doesn't mean the component is visible. If you get an error message something like ",(0,s.jsx)(n.em,{children:"Element is no longer attached to the DOM"})," while running your program, it means that the component you are trying to interact with has been removed from the DOM. The opposite version is ",(0,s.jsx)(n.strong,{children:"DoesNotExist"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"modal.Expect().Exists();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"isenabled",children:"IsEnabled"}),"\n",(0,s.jsxs)(n.p,{children:["Waits until a component is enabled and ready for interaction. Useful for checking a component's readiness before clicking on it, or typing a text into input fields. The opposite version is ",(0,s.jsx)(n.strong,{children:"IsDisabled"})," or ",(0,s.jsx)(n.strong,{children:"IsNotEnabled"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"signInButton.Click(when => when.IsEnabled());\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ischecked",children:"IsChecked"}),"\n",(0,s.jsxs)(n.p,{children:["Waits until a component is checked. Useful for checkboxes and radiobuttons. The opposite version is ",(0,s.jsx)(n.strong,{children:"IsNotChecked"})," or ",(0,s.jsx)(n.strong,{children:"IsUnchecked"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"checkbox.Expect().IsChecked();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"text",children:"Text"}),"\n",(0,s.jsx)(n.p,{children:"Conditions for checking text content of the component."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'signInButton.Expect().Text.Is("Sign In");\n\n// ignoring case\nsignInButton.Expect().Text.Is("sign in", StringComparison.OrdinalIgnoreCase);\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Text"})," subject is a special component's condition, you can use shorter variant"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'signInButton.Expect().Is("Sign In");\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"attributes",children:"Attributes\u2026"}),"\n",(0,s.jsxs)(n.p,{children:["Certain conditions for a component's attributes what define characteristics and properties of a component. In web this is html attribute for the specified tag. Due to textual nature of the attributes, you can use ",(0,s.jsx)(n.a,{href:"#textual-conditions",children:"many ways"})," to create conditions for attributes."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'usernameInput.Expect().Attributes["value"].IsEmpty();\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or use well-known attributes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"usernameInput.Expect().Attributes.Value.IsEmpty();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"styles",children:"Styles\u2026"}),"\n",(0,s.jsx)(n.p,{children:"Provides a different conditions to wait some computed style of a component, such as color, font, size, and more."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'signInButton.Expect().Styles["color"].Contains("255");\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or use well-known styles"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'signInButton.Expect().Styles.Color.Contains("255");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"isinview",children:"IsInView"}),"\n",(0,s.jsxs)(n.p,{children:["Conditions for checking the component currently is partially visible within viewport. The opposite version is ",(0,s.jsx)(n.strong,{children:"IsNotInView"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"signInButton.Expect().IsInView();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"components-collection-conditions",children:"Components collection conditions"}),"\n",(0,s.jsx)(n.h3,{id:"count",children:"Count\u2026"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#numeric-conditions",children:"Condition"})," for collection of components to verify its count of components."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"ya.SearchResultsPage.Results.Expect().Count.Is(20);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"each",children:"Each"}),"\n",(0,s.jsx)(n.p,{children:"Condition to be satisfied by each component in the list."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'ya.SearchResultsPage.Results.Expect().Each(r => r.Attributes.Href.StartsWith("https://"));\n'})}),"\n",(0,s.jsx)(n.h3,{id:"contains",children:"Contains"}),"\n",(0,s.jsxs)(n.p,{children:["Expect at least one component in the list satisfies expected condition. The opposite version is ",(0,s.jsx)(n.strong,{children:"DoesNotContain"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'ya.SearchResultsPage.Results.Expect(it => it.Contains(r => r.Attributes.Href.StartsWith("ftp://")));\n'})}),"\n",(0,s.jsx)(n.h3,{id:"isempty",children:"IsEmpty"}),"\n",(0,s.jsxs)(n.p,{children:["Expect the count of components is ",(0,s.jsx)(n.code,{children:"0"}),". The opposite version is ",(0,s.jsx)(n.strong,{children:"IsNotEmpty"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Usage"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"ya.SearchResultsPage.Results.Expect().IsEmpty();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"generic-conditions",children:"Generic conditions"}),"\n",(0,s.jsx)(n.p,{children:"These generic conditions are implicitly applicable for all known subject's types."}),"\n",(0,s.jsx)(n.h3,{id:"textual-conditions",children:"Textual conditions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Is"})," - Checks if the actual text is equal to the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IsNot"})," - Checks if the actual text is not equal to the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IsEmpty"})," - Checks if the actual text is empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IsNotEmpty"})," - Checks if the actual text is not empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Matches"})," - Checks if the actual text matches the expected regular expression."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DoesNotMatch"})," - Checks if the actual text does not match the expected regular expression."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"StartsWith"})," - Checks if the actual text starts with the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DoesNotStartWith"})," - Checks if the actual text does not start with the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"EndsWith"})," - Checks if the actual text ends with the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DoesNotEndWith"})," - Checks if the actual text does not end with the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contains"})," - Checks if the actual text contains the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DoesNotContain"})," - Checks if the actual text does not contain the expected text using the default string comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Length\u2026"})," - Various continuation ",(0,s.jsx)(n.a,{href:"#numeric-conditions",children:"numeric conditions"})," for its length. E.g. ",(0,s.jsx)(n.code,{children:"signInButton.Expect(its => its.Text.Length.IsGreaterThan(5));"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"numeric-conditions",children:"Numeric conditions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Is"})," - Checks if the actual value is equal to the expected value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IsNot"})," - Checks if the actual value is not equal to the expected value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IsGreaterThan"})," - Checks if the actual value is greater than the expected value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AtLeast"})," - Checks if the actual value is equal to or greater than the expected value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IsLessThan"})," - Checks if the actual value is less than the expected value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AtMost"})," - Checks if the actual value is equal to or less than the expected value."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},c=s.createContext(i);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);