"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Interactions",description:"How you can interact with pages and components",toc_max_heading_level:4,sidebar_position:2},i=void 0,l={unversionedId:"interactions",id:"interactions",title:"Interactions",description:"How you can interact with pages and components",source:"@site/docs/interactions.md",sourceDirName:".",slug:"/interactions",permalink:"/docs/interactions",draft:!1,editUrl:"https://github.com/yapoml/yapoml.github.io/tree/main/docs/interactions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Interactions",description:"How you can interact with pages and components",toc_max_heading_level:4,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Syntax",permalink:"/docs/syntax"},next:{title:"Conditions",permalink:"/docs/conditions"}},s={},p=[{value:"Page",id:"page",level:2},{value:"Methods",id:"methods",level:3},{value:"Open",id:"open",level:4},{value:"Component",id:"component",level:2},{value:"Properties",id:"properties",level:3},{value:"IsDisplayed",id:"isdisplayed",level:4},{value:"IsEnabled",id:"isenabled",level:4},{value:"Text",id:"text",level:4},{value:"Attributes\u2026",id:"attributes",level:4},{value:"Styles\u2026",id:"styles",level:4},{value:"IsFocused",id:"isfocused",level:4},{value:"IsInView",id:"isinview",level:4},{value:"Methods",id:"methods-1",level:3},{value:"Click",id:"click",level:4},{value:"DoubleClick",id:"doubleclick",level:4},{value:"ContextClick",id:"contextclick",level:4},{value:"Type",id:"type",level:4},{value:"Clear",id:"clear",level:4},{value:"Hover",id:"hover",level:4},{value:"Focus",id:"focus",level:4},{value:"Blur",id:"blur",level:4},{value:"DragAndDrop",id:"draganddrop",level:4},{value:"ScrollIntoView",id:"scrollintoview",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Explore here available methods how you can interact with your pages and components. All methods are fluent in mind, allowing you to continue interaction with the subject under focus."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'ya.SearchPage.Open().SearchInput.Clear().Type("yapoml");\n')),(0,r.kt)("h2",{id:"page"},"Page"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"open"},"Open"),(0,r.kt)("p",null,"Navigates to the page. Available only if the page has defined ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Home.page.yaml"',title:'"Home.page.yaml"'},"url: some/relative/path\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"driver.Ya().HomePage.Open();\n")),(0,r.kt)("p",null,"It requires base url to be specified if url path is relative."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'driver.Ya(opts => opts.WithBaseUrl("https://example.com")).HomePage.Open();\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"url")," might have segments and query parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"url:\n  path: /users/{userId}\n  query:  # or params\n    - p1\n    - p2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'driver.Ya().HomePage.Open("123", p2: "any value") // navigates to /users/123?p2=any%20value\n')),(0,r.kt)("p",null,"Segments are required. If you need skip some particular segment from the url path, you can put ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". Query parameters are always optional."),(0,r.kt)("h2",{id:"component"},"Component"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"isdisplayed"},"IsDisplayed"),(0,r.kt)("p",null,"Indicates whether a component is visible on the page or not. Returns a boolean value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the element is displayed, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the element is hidden or not present."),(0,r.kt)("p",null,"Useful for verifying the visibility of components that may change dynamically based on user actions or page conditions. For example, you can use it to check if a dropdown menu is expanded or collapsed, or if a modal dialog is open or closed. It does not check if the component is within the viewport or not. It only checks if the element is rendered on the page, regardless of its position or size. Look at ",(0,r.kt)("a",{parentName:"p",href:"#isinview"},"IsInView")," property if you need to check whether the component is within the viewport."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"bool visible = driver.Ya().HomePage.SearchButton.IsDisplayed;\n")),(0,r.kt)("h4",{id:"isenabled"},"IsEnabled"),(0,r.kt)("p",null,"Used to indicate whether a component can respond to user interactions or not. It returns a boolean value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the element is enabled, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the element is disabled."),(0,r.kt)("p",null,"For example, you can use it to check if a checkbox is checked or unchecked, or if a text field is editable or read-only."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"bool enabled = driver.Ya().HomePage.SearchButton.IsEnabled;\n")),(0,r.kt)("h4",{id:"text"},"Text"),(0,r.kt)("p",null,"Gets the visible text of a component. It returns a string value that represents the inner text of the element. For example, you can use it to check if a label displays the correct message, or if a paragraph contains the expected text."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"string text = driver.Ya().HomePage.SearchButton.Text;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This property may not work as expected for some components that do not have any visible text content. For example, input elements (",(0,r.kt)("inlineCode",{parentName:"p"},"<input>"),") do not have any inner text, so they will return an empty string for this property. To get the value of an input element, you may need to use the ",(0,r.kt)("a",{parentName:"p",href:"#attributes"},"Attributes.Value")," property.")),(0,r.kt)("h4",{id:"attributes"},"Attributes\u2026"),(0,r.kt)("p",null,"Gets the value of an attribute of a component as a string. It can also retrieve component properties, such as an anchor tag\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," attribute."),(0,r.kt)("p",null,"For example, you can use it to check if an input element has a value attribute that matches the expected input, or if an image element has an alt attribute that describes the image."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string value = driver.Ya().HomePage.SearchInput.Attributes["value"];\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Well-known attributes are accessible shortly."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var value = driver.Ya().HomePage.SearchInput.Attributes.Value;\n// or\nvar href = driver.Ya().HomePage.Logo.Attributes.Href;\n"))),(0,r.kt)("h4",{id:"styles"},"Styles\u2026"),(0,r.kt)("p",null,"Gets the value of a CSS property of a component as a string. It can be used to retrieve the computed style of a component, such as its ",(0,r.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"font-size"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"display"),"."),(0,r.kt)("p",null,"For example, you can use it to check if an element has a certain background color, or if an element is visible or hidden by its display property."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string color = driver.Ya().HomePage.SearchButton.Styles["color"];\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Well-known styles are accessible shortly."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var color = driver.Ya().HomePage.SearchButton.Styles.Color;\n// or\nvar opacity = driver.Ya().HomePage.SearchButton.Styles.Opacity;\n"))),(0,r.kt)("h4",{id:"isfocused"},"IsFocused"),(0,r.kt)("p",null,"Indicates whether a component currently has logical focus or not. It returns a boolean value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the component has focus, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the component does not have focus."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"bool hasFocus = driver.Ya().HomePage.SearchInput.IsFocused;\n")),(0,r.kt)("h4",{id:"isinview"},"IsInView"),(0,r.kt)("p",null,"Indicates whether a component currently is partially visible within viewport or not. It returns a boolean value: ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the component is in viewport, and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," if the component is not."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"bool isInViewport = driver.Ya().HomePage.SearchInput.IsInView;\n")),(0,r.kt)("h3",{id:"methods-1"},"Methods"),(0,r.kt)("h4",{id:"click"},"Click"),(0,r.kt)("h4",{id:"doubleclick"},"DoubleClick"),(0,r.kt)("h4",{id:"contextclick"},"ContextClick"),(0,r.kt)("h4",{id:"type"},"Type"),(0,r.kt)("h4",{id:"clear"},"Clear"),(0,r.kt)("h4",{id:"hover"},"Hover"),(0,r.kt)("h4",{id:"focus"},"Focus"),(0,r.kt)("h4",{id:"blur"},"Blur"),(0,r.kt)("h4",{id:"draganddrop"},"DragAndDrop"),(0,r.kt)("h4",{id:"scrollintoview"},"ScrollIntoView"))}d.isMDXComponent=!0}}]);