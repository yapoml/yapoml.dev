"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[359],{284:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7462),a=n(7294);const o={features:"features_t9lD",featureSvg:"featureSvg_GfXr"};var i=n(1207);const c=[{title:"Easy to Use",description:a.createElement(a.Fragment,null,"Reliable approach to interact with UI components in automated testing area."),link:"/docs/intro"},{title:"Focus on What Matters",description:a.createElement(a.Fragment,null,"Yapoml lets you focus on your application definition, and everything else is already available for you in a tick."),link:"/docs/concepts/syntax"},{title:"Express Fluently",description:a.createElement(a.Fragment,null,"Start your journey from ",a.createElement("code",null,".Ya()")," method extension and IDE suggests the best options using power of intellisense."),link:"/docs/concepts/interactions"},{title:"Personalize",description:a.createElement(a.Fragment,null,"Uncompromised customization of your journey with domain specific experience."),link:"/docs/category/advanced"}];function l(e){let{Svg:t,title:n,description:r,link:o}=e;return a.createElement("div",{className:"col col--4 padding--md"},a.createElement("div",{className:"card card--full-height"},a.createElement("div",{className:"card__header text--center padding-vert--lg"},a.createElement("h3",null,n)),a.createElement("div",{className:"card__body"},a.createElement("p",null,r)),a.createElement("div",{className:"card__footer text--center"},a.createElement("a",{className:"button button--link",href:o},"Learn more"))))}function s(){return a.createElement("section",{className:o.features},a.createElement("div",{className:"container"},a.createElement("h2",{className:i.Z.sectionHeader},"Why Yapoml?"),a.createElement("div",{className:"row"},c.map(((e,t)=>a.createElement(l,(0,r.Z)({key:t},e)))))))}},389:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7294);function a(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function i(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i}function l(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}function s(e,t,n,r,s){for(var f=[],m=5;m<arguments.length;m++)f[m-5]=arguments[m];return a(this,void 0,void 0,(function(){var a,m,p,h,y,g;return o(this,(function(o){switch(o.label){case 0:o.trys.push([0,12,13,14]),a=i(f),m=a.next(),o.label=1;case 1:if(m.done)return[3,11];switch(typeof(p=m.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,u(e,t,p,n,r,s)];case 3:return o.sent(),[3,10];case 4:return[4,d(p)];case 5:return o.sent(),[3,10];case 6:return[4,p.apply(void 0,l([e,t,n,r,s],c(f),!1))];case 7:return o.sent(),[3,10];case 8:return[4,p];case 9:o.sent(),o.label=10;case 10:return m=a.next(),[3,1];case 11:return[3,14];case 12:return h=o.sent(),y={error:h},[3,14];case 13:try{m&&!m.done&&(g=a.return)&&g.call(a)}finally{if(y)throw y.error}return[7];case 14:return[2]}}))}))}function u(e,t,n,r,i,s){return a(this,void 0,void 0,(function(){var a,u;return o(this,(function(o){switch(o.label){case 0:return a=e.textContent||"",u=function(e,t){var n=c(t).slice(0);return l(l([],c(e),!1),[NaN],!1).findIndex((function(e,t){return n[t]!==e}))}(a,n),[4,f(e,l(l([],c(p(a,t,u)),!1),c(m(n,t,u)),!1),r,i,s)];case 1:return o.sent(),[2]}}))}))}function d(e){return a(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function f(e,t,n,r,l){return a(this,void 0,void 0,(function(){var a,s,u,f,m,p,h,y,g,v,b,E,w;return o(this,(function(_){switch(_.label){case 0:if(a=t,l){for(s=0,u=1;u<t.length;u++)if(f=c([t[u-1],t[u]],2),m=f[0],(p=f[1]).length>m.length||""===p){s=u;break}a=t.slice(s,t.length)}_.label=1;case 1:_.trys.push([1,6,7,8]),h=i(function(e){var t,n,r,a,c,l,s;return o(this,(function(u){switch(u.label){case 0:t=function(e){return o(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var n=t.textContent||"";return""===e||n.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}}))},u.label=1;case 1:u.trys.push([1,6,7,8]),n=i(e),r=n.next(),u.label=2;case 2:return r.done?[3,5]:(a=r.value,[5,t(a)]);case 3:u.sent(),u.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return c=u.sent(),l={error:c},[3,8];case 7:try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(l)throw l.error}return[7];case 8:return[2]}}))}(a)),y=h.next(),_.label=2;case 2:return y.done?[3,5]:(g=y.value,v="WRITING"===g.opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),g.op(e),[4,d(v)]);case 3:_.sent(),_.label=4;case 4:return y=h.next(),[3,2];case 5:return[3,8];case 6:return b=_.sent(),E={error:b},[3,8];case 7:try{y&&!y.done&&(w=h.return)&&w.call(h)}finally{if(E)throw E.error}return[7];case 8:return[2]}}))}))}function m(e,t,n){var r,a;return void 0===n&&(n=0),o(this,(function(o){switch(o.label){case 0:r=t(e),a=r.length,o.label=1;case 1:return n<a?[4,r.slice(0,++n).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}}))}function p(e,t,n){var r,a;return void 0===n&&(n=0),o(this,(function(o){switch(o.label){case 0:r=t(e),a=r.length,o.label=1;case 1:return a>n?[4,r.slice(0,--a).join("")]:[3,3];case 2:return o.sent(),[3,1];case 3:return[2]}}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var h=(0,r.memo)((0,r.forwardRef)((function(e,t){var n=e.sequence,a=e.repeat,o=e.className,i=e.speed,u=void 0===i?40:i,d=e.deletionSpeed,f=e.omitDeletionAnimation,m=void 0!==f&&f,p=e.preRenderFirstString,h=void 0!==p&&p,y=e.wrapper,g=void 0===y?"span":y,v=e.splitter,b=void 0===v?function(e){return l([],c(e),!1)}:v,E=e.cursor,w=void 0===E||E,_=e.style,x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),N=x["aria-label"],k=x["aria-hidden"],S=x.role;d||(d=u);var P=new Array(2).fill(40);[u,d].forEach((function(e,t){switch(typeof e){case"number":P[t]=Math.abs(e-100);break;case"object":var n=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===n&&(P[t]=r)}}));var Z,I,C,T,Y,O,j=P[0],R=P[1],F=function(e,t){void 0===t&&(t=null);var n=(0,r.useRef)(t);return(0,r.useEffect)((function(){e&&("function"==typeof e?e(n.current):e.current=n.current)}),[e]),n}(t),A="index-module_type__E-SaG";Z=o?"".concat(w?A+" ":"").concat(o):w?A:"",I=(0,r.useRef)((function(){var e,t=n;a===1/0?e=s:"number"==typeof a&&(t=Array(1+a).fill(n).flat());var r=e?l(l([],c(t),!1),[e],!1):l([],c(t),!1);return s.apply(void 0,l([F.current,b,j,R,m],c(r),!1)),function(){F.current}})),C=(0,r.useRef)(),T=(0,r.useRef)(!1),Y=(0,r.useRef)(!1),O=c((0,r.useState)(0),2)[1],T.current&&(Y.current=!0),(0,r.useEffect)((function(){return T.current||(C.current=I.current(),T.current=!0),O((function(e){return e+1})),function(){Y.current&&C.current&&C.current()}}),[]);var L=g,G=h?n.find((function(e){return"string"==typeof e}))||"":null;return r.createElement(L,{"aria-hidden":k,"aria-label":N,role:S,style:_,className:Z,children:N?r.createElement("span",{"aria-hidden":"true",ref:F,children:G}):G,ref:N?void 0:F})})),(function(e,t){return!0})),y=n(614);const g={typing__container:"typing__container_El9I"};function v(){return r.createElement("section",null,r.createElement("div",{className:"container"},r.createElement("div",{className:g.typing__container},r.createElement(y.Z,{language:"csharp"},r.createElement(h,{sequence:["Ya.",1e3,'Ya.LoginPage.Username.Type("John");',5e3,'Ya.LoginPage.Username.Type("John").Password.Type("123");',5e3,'Ya.LoginPage.Username.Expect().Attributes.Value.Is("John");',5e3,"Ya.LoginPage.Username.Expect().Styles.Opacity.IsGreaterThan(0.6);",5e3,"Ya.LoginPage.SignIn.Click();",5e3,"Ya.LoginPage.SignIn.Click(when => when.IsEnabled());",5e3,"Ya.HomePage.Expect().IsOpened();",5e3,'Ya.HomePage.Expect(it => it.IsOpened().Title.Contains("Welcome"));',1e4],preRenderFirstString:!0,speed:30,deletionSpeed:80,cursor:!1,style:{fontWeight:"var(--ifm-font-weight-bold)",color:"var(--ifm-color-gray-600)"},repeat:1/0})))))}},2026:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(7294),a=n(6010),o=n(9960),i=n(2263),c=n(7452),l=n(2949),s=n(4996),u=n(284),d=n(389),f=n(1207);function m(){const{siteConfig:e}=(0,i.Z)();return r.createElement("header",{className:(0,a.Z)("hero",f.Z.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},"Yapoml with ",r.createElement(o.Z,{to:"https://playwright.dev"},"Microsoft Playwright")),r.createElement("p",{className:"hero__subtitle"},"Yet another page object generation in .NET/C# built on top of Microsoft Playwright ",r.createElement("span",{class:"badge badge--warning"},"is in queue")),r.createElement("div",{className:f.Z.buttons},r.createElement(o.Z,{className:"button button--primary button--lg margin--md",to:"/docs/playwright/getting-started"},"Get started"),r.createElement(o.Z,{className:"button button--link button--lg margin--md",to:"/docs/intro"},"What is Yapoml?"))))}function p(){const{colorMode:e}=(0,l.I)();return r.createElement("section",null,r.createElement("div",{className:"container"},r.createElement("h2",{className:f.Z.sectionHeader},"Watch it out in action"),r.createElement("div",null,r.createElement("video",{controls:!0,muted:!0,src:"dark"==e?(0,s.Z)("/img/promo_dark.mp4"):(0,s.Z)("/img/promo_light.mp4"),className:f.Z.promo+" shadow--md"},"Sorry, your browser doesn't support embedded videos."))))}function h(){const{siteConfig:e}=(0,i.Z)();return r.createElement(c.Z,{description:"Yet another page object generation in .NET"},r.createElement(m,null),r.createElement("main",null,r.createElement(d.Z,null),r.createElement(p,null),r.createElement(u.Z,null)))}},1207:(e,t,n)=>{n.d(t,{Z:()=>r});const r={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",sectionHeader:"sectionHeader_Gahl",promo:"promo_ij0t",frameworksList:"frameworksList_mtdF",typing__container:"typing__container_OuVR"}}}]);