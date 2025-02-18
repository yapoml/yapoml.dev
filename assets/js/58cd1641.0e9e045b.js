"use strict";(self.webpackChunkyapoml=self.webpackChunkyapoml||[]).push([[745],{6055:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"concepts/interactions","title":"Interactions","description":"How you can interact with pages and components","source":"@site/docs/concepts/interactions.md","sourceDirName":"concepts","slug":"/concepts/interactions","permalink":"/docs/concepts/interactions","draft":false,"unlisted":false,"editUrl":"https://github.com/yapoml/yapoml.github.io/tree/main/docs/concepts/interactions.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Interactions","description":"How you can interact with pages and components","toc_max_heading_level":4,"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Syntax","permalink":"/docs/concepts/syntax"},"next":{"title":"Expectations","permalink":"/docs/concepts/expectations"}}');var a=s(4848),o=s(8453);const i={title:"Interactions",description:"How you can interact with pages and components",toc_max_heading_level:4,sidebar_position:2},r=void 0,c={},l=[{value:"Page",id:"page",level:2},{value:"Methods",id:"methods",level:3},{value:"Open",id:"open",level:4},{value:"Component",id:"component",level:2},{value:"Properties",id:"properties",level:3},{value:"IsDisplayed",id:"isdisplayed",level:4},{value:"IsEnabled",id:"isenabled",level:4},{value:"IsChecked",id:"ischecked",level:4},{value:"Text",id:"text",level:4},{value:"Value",id:"value",level:4},{value:"Attributes\u2026",id:"attributes",level:4},{value:"Styles\u2026",id:"styles",level:4},{value:"IsFocused",id:"isfocused",level:4},{value:"IsInView",id:"isinview",level:4},{value:"Methods",id:"methods-1",level:3},{value:"Click",id:"click",level:4},{value:"DoubleClick",id:"doubleclick",level:4},{value:"ContextClick",id:"contextclick",level:4},{value:"Type",id:"type",level:4},{value:"Clear",id:"clear",level:4},{value:"Fill",id:"fill",level:4},{value:"Hover",id:"hover",level:4},{value:"Focus",id:"focus",level:4},{value:"Blur",id:"blur",level:4},{value:"DragAndDrop",id:"draganddrop",level:4},{value:"ScrollIntoView",id:"scrollintoview",level:4},{value:"GetScreenshot",id:"getscreenshot",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Explore here available methods how you can interact with your pages and components. All methods are fluent in mind, allowing you to continue interaction with the subject under focus."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'ya.SearchPage.Open().SearchInput.Fill("yapoml");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["All components are automatically awaited to be presented on the page before any interaction, providing a possibility to specify ",(0,a.jsx)(n.a,{href:"/docs/concepts/expectations",children:"expectations"})," explicitly."]}),"\n",(0,a.jsx)(n.h2,{id:"page",children:"Page"}),"\n",(0,a.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h4,{id:"open",children:"Open"}),"\n",(0,a.jsxs)(n.p,{children:["Navigates to the page. Available only if the page has defined ",(0,a.jsx)(n.code,{children:"url"})," property."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="Home.page.yaml"',children:"url: some/relative/path\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.Open();\n"})}),"\n",(0,a.jsx)(n.p,{children:"It requires base url to be specified if url path is relative."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'driver.Ya(opts => opts.WithBaseUrl("https://example.com")).HomePage.Open();\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"url"})," might have segments and query parameters"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"url:\n  path: /users/{userId}\n  query:  # or params\n    - p1\n    - p2\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'ya.HomePage.Open("123", p2: "any value") // navigates to /users/123?p2=any%20value\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Segments are required. If you need skip some particular segment from the url path, you can put ",(0,a.jsx)(n.code,{children:"null"}),". Query parameters are always optional."]}),"\n",(0,a.jsx)(n.h2,{id:"component",children:"Component"}),"\n",(0,a.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(n.h4,{id:"isdisplayed",children:"IsDisplayed"}),"\n",(0,a.jsxs)(n.p,{children:["Indicates whether a component is visible on the page or not. Returns ",(0,a.jsx)(n.code,{children:"true"})," if the element is displayed, and ",(0,a.jsx)(n.code,{children:"false"})," if the element is hidden or not present."]}),"\n",(0,a.jsxs)(n.p,{children:["Useful for verifying the visibility of components that may change dynamically based on user actions or page conditions. For example, you can use it to check if a dropdown menu is expanded or collapsed, or if a modal dialog is open or closed. It does not check if the component is within the viewport or not. It only checks if the element is rendered on the page, regardless of its position or size. Look at ",(0,a.jsx)(n.a,{href:"#isinview",children:"IsInView"})," property if you need to check whether the component is within the viewport."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"bool visible = ya.HomePage.SearchButton.IsDisplayed;\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["It doesn't expect a component exists in DOM. It only returns ",(0,a.jsx)(n.code,{children:"true"})," if a component is found in DOM and visible. Otherwise, it returns ",(0,a.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,a.jsx)(n.h4,{id:"isenabled",children:"IsEnabled"}),"\n",(0,a.jsxs)(n.p,{children:["Used to indicate whether a component can respond to user interactions or not. It returns a boolean value: ",(0,a.jsx)(n.code,{children:"true"})," if the element is enabled, and ",(0,a.jsx)(n.code,{children:"false"})," if the element is disabled."]}),"\n",(0,a.jsx)(n.p,{children:"For example, you can use it to check if a text field is editable or read-only."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"bool isEnabled = ya.HomePage.SearchButton.IsEnabled;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ischecked",children:"IsChecked"}),"\n",(0,a.jsxs)(n.p,{children:["Used to indicate whether a component is checked or unchecked. It returns a boolean value: ",(0,a.jsx)(n.code,{children:"true"})," if the element is checked, and ",(0,a.jsx)(n.code,{children:"false"})," if the element is unchecked."]}),"\n",(0,a.jsx)(n.p,{children:"For example, you can use it to check if a checkbox or radiobutton is checked."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"bool isChecked = ya.HomePage.RememberMeCheckbox.IsChecked;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"text",children:"Text"}),"\n",(0,a.jsx)(n.p,{children:"Gets the visible text of a component. It returns a string value that represents the inner text of the element. For example, you can use it to check if a label displays the correct message, or if a paragraph contains the expected text."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"string text = ya.HomePage.SearchButton.Text;\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This property may not work as expected for some components that do not have any visible text content. For example, input elements (",(0,a.jsx)(n.code,{children:"<input>"}),") do not have any inner text, so they will return an empty string for this property. To get the value of an input element, you may need to use the ",(0,a.jsx)(n.a,{href:"#attributes",children:"Attributes.Value"})," property."]})}),"\n",(0,a.jsx)(n.h4,{id:"value",children:"Value"}),"\n",(0,a.jsx)(n.p,{children:"Gets the value of an input component."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"string value = ya.HomePage.SearchInput.Value;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"attributes",children:"Attributes\u2026"}),"\n",(0,a.jsxs)(n.p,{children:["Gets the value of an attribute of a component as a string. It can also retrieve component properties, such as an anchor tag\u2019s ",(0,a.jsx)(n.code,{children:"href"})," attribute."]}),"\n",(0,a.jsx)(n.p,{children:"For example, you can use it to check if an input element has a value attribute that matches the expected input, or if an image element has an alt attribute that describes the image."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'string value = ya.HomePage.SearchInput.Attributes["value"];\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Well-known attributes are accessible shortly."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"var value = ya.HomePage.SearchInput.Attributes.Value;\n// or\nvar href = ya.HomePage.Logo.Attributes.Href;\n"})})]}),"\n",(0,a.jsx)(n.h4,{id:"styles",children:"Styles\u2026"}),"\n",(0,a.jsxs)(n.p,{children:["Gets the value of a CSS property of a component as a string. It can be used to retrieve the computed style of a component, such as its ",(0,a.jsx)(n.code,{children:"color"}),", ",(0,a.jsx)(n.code,{children:"font-size"}),", or ",(0,a.jsx)(n.code,{children:"display"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For example, you can use it to check if an element has a certain background color, or if an element is visible or hidden by its display property."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'string color = ya.HomePage.SearchButton.Styles["color"];\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Well-known styles are accessible shortly."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"string color = ya.HomePage.SearchButton.Styles.Color;\n// or\nfloat opacity = ya.HomePage.SearchButton.Styles.Opacity;\n"})})]}),"\n",(0,a.jsx)(n.h4,{id:"isfocused",children:"IsFocused"}),"\n",(0,a.jsxs)(n.p,{children:["Indicates whether a component currently has logical focus or not. It returns a boolean value: ",(0,a.jsx)(n.code,{children:"true"})," if the component has focus, and ",(0,a.jsx)(n.code,{children:"false"})," if the component does not have focus."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"bool hasFocus = ya.HomePage.SearchInput.IsFocused;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"isinview",children:"IsInView"}),"\n",(0,a.jsxs)(n.p,{children:["Indicates whether a component currently is partially visible within viewport or not. It returns a boolean value: ",(0,a.jsx)(n.code,{children:"true"})," if the component is in viewport, and ",(0,a.jsx)(n.code,{children:"false"})," if the component is not."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"bool isInViewport = ya.HomePage.SearchInput.IsInView;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"methods-1",children:"Methods"}),"\n",(0,a.jsx)(n.h4,{id:"click",children:"Click"}),"\n",(0,a.jsx)(n.p,{children:"Simulates a mouse click on a component. It can be used to interact with buttons, links, checkboxes, radio buttons, and other clickable components on a page."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchButton.Click();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Or with specified ",(0,a.jsx)(n.code,{children:"offset"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchButton.Click(x: 20, y: 30);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Click"})," method performs a left-click by default. To perform other click actions see ",(0,a.jsx)(n.a,{href:"#contextclick",children:"ContextClick"}),", ",(0,a.jsx)(n.a,{href:"#doubleclick",children:"DoubleClick"}),", ",(0,a.jsx)(n.a,{href:"#draganddrop",children:"DragAndDrop"}),", etc."]}),"\n",(0,a.jsx)(n.h4,{id:"doubleclick",children:"DoubleClick"}),"\n",(0,a.jsx)(n.p,{children:"Simulates a mouse double click on a component. It can be used to interact with elements that require a double click to launch specific functions, such as opening a file, selecting a word of text, etc."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.Pane.DoubleClick();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"contextclick",children:"ContextClick"}),"\n",(0,a.jsx)(n.p,{children:"Simulates a mouse right click on a component. It can be used to interact with elements that show a context menu when right clicked, such as opening a link in a new tab, copying text."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.Pane.ContextClick();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"type",children:"Type"}),"\n",(0,a.jsx)(n.p,{children:"Sends a sequence of keystrokes to a component. It is useful for entering text, selecting options, or performing keyboard shortcuts. For example, you can use it to type a query in a search box, choose a value from a dropdown menu, or press the enter key."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'ya.HomePage.SearchInput.Type("yapoml");\n'})}),"\n",(0,a.jsx)(n.h4,{id:"clear",children:"Clear"}),"\n",(0,a.jsx)(n.p,{children:"Clears the text from a component. It is useful for deleting the existing text before entering new text. For example, you can use it to erase a query in a search box, or clear a password field."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchInput.Clear();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"fill",children:"Fill"}),"\n",(0,a.jsx)(n.p,{children:"Clears and types the new text into a component. It is useful when you need to make sure that a component is cleared before typing new text."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'ya.HomePage.SearchInput.Fill("yapoml");\n'})}),"\n",(0,a.jsx)(n.h4,{id:"hover",children:"Hover"}),"\n",(0,a.jsx)(n.p,{children:"Simulates a mouse hover over a component. It is useful for triggering events that depend on the mouse cursor position, such as displaying tooltips, menus, or pop-ups. For example, you can use it to hover over a link to see its URL, or hover over a button to see its description."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchButton.Hover();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"focus",children:"Focus"}),"\n",(0,a.jsx)(n.p,{children:"Sets the focus on a component. It is useful for activating the component or preparing it for user input. For example, you can use it to focus on a text field before typing, or focus on a checkbox before clicking."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchInput.Focus();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"blur",children:"Blur"}),"\n",(0,a.jsx)(n.p,{children:"Removes the focus from a component. It is useful for deactivating the component or triggering events that depend on the focus state, such as validation or formatting. For example, you can use it to blur a text field after typing, or blur a dropdown menu after selecting an option."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchInput.Blur();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"draganddrop",children:"DragAndDrop"}),"\n",(0,a.jsx)(n.p,{children:"Performs a drag and drop action on a component. It is useful for moving a component from one location to another, such as rearranging items, sorting lists, or uploading files. For example, you can use it to drag an image from a gallery and drop it into a trash bin, or drag a file from a folder and drop it into an upload box."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"var homePage = ya.HomePage;\n\nhomePage.SearchButton.DragAndDrop(homePage.Trash);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"scrollintoview",children:"ScrollIntoView"}),"\n",(0,a.jsx)(n.p,{children:"Scrolls the web page until a component is visible. It is useful for accessing components that are not in the current viewport, such as hidden or lazy-loaded components. For example, you can use it to scroll to the bottom of a page to see the footer, or scroll to a specific section of a page to see its content."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchButton.ScrollIntoView();\n"})}),"\n",(0,a.jsx)(n.h4,{id:"getscreenshot",children:"GetScreenshot"}),"\n",(0,a.jsx)(n.p,{children:"Gets a screenshot of the current state of the component in PNG format."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Usage"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"ya.HomePage.SearchButton.GetScreenshot();\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(6540);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);