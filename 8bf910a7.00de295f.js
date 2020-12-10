(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{179:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return p}));var a=o(3),r=o(7),n=(o(0),o(251)),i={},s={unversionedId:"comparison-with-other-frameworks",id:"version-1.x/comparison-with-other-frameworks",isDocsHomePage:!1,title:"comparison-with-other-frameworks",description:"Comparison with Other Frameworks",source:"@site/versioned_docs/version-1.x/comparison-with-other-frameworks.md",slug:"/comparison-with-other-frameworks",permalink:"/foal/docs/1.x/comparison-with-other-frameworks",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/comparison-with-other-frameworks.md",version:"1.x"},c=[{value:"Express, Koa, Fastify",id:"express-koa-fastify",children:[]},{value:"NestJS",id:"nestjs",children:[{value:"Complexity &amp; Learning Curve",id:"complexity--learning-curve",children:[]},{value:"Philosophy &amp; Objectives",id:"philosophy--objectives",children:[]}]},{value:"Routing Controllers",id:"routing-controllers",children:[]},{value:"Loopback",id:"loopback",children:[{value:"Version 3",id:"version-3",children:[]},{value:"Version 4",id:"version-4",children:[]}]},{value:"Adonis 4",id:"adonis-4",children:[]}],l={rightToc:c};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"comparison-with-other-frameworks"},"Comparison with Other Frameworks"),Object(n.b)("p",null,"This page is definitely the most difficult one in the guide to write. If you are here, it is probably because you want to know if you should choose Foal over another framework. There are many in Node's ecosystem and picking one is not always an easy task. This page aims to help you on this path."),Object(n.b)("p",null,"Of course, I prefer FoalTS because I sincerely believe that it solves a number of problems better than any other framework out there. This is why I put so much effort into it. However, I will try, in this document, to be as objective as possible to show you the differences between FoalTS and other frameworks."),Object(n.b)("p",null,"As no comparison is perfect, I would also recommend that you download and test them yourself. You'll be able to make your own opinion about each one and choose the one that suits you best. FoalTS ",Object(n.b)("em",{parentName:"p"},"get-started")," tutorial can be found ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/1.x/tutorials/simple-todo-list/1-installation"}),"here"),"."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"This page is evolutive. Feel free to suggest changes if you think something is missing or out-of-date!")),Object(n.b)("h2",{id:"express-koa-fastify"},"Express, Koa, Fastify"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://expressjs.com/"}),"Express"),", ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://koajs.com/"}),"Koa")," and ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.fastify.io/"}),"Fastify")," are all low-level frameworks that mainly take care of routing requests, handling errors, and parsing cookies, URLs, headers and bodies. They present themselves as ",Object(n.b)("em",{parentName:"p"},"fast"),", ",Object(n.b)("em",{parentName:"p"},"minimalist")," and ",Object(n.b)("em",{parentName:"p"},"low overhead")," and are not intented to be provided with a complete environment (CLI, ORM, auth, access control, test tools, etc)."),Object(n.b)("p",null,"Many high-level frameworks use them as underlay for their core. This is the case of FoalTS which is based on Express."),Object(n.b)("h2",{id:"nestjs"},"NestJS"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.nestjs.com/"}),"Nest")," is a Node.JS framework that has gained in popularity in recent years. It has been one of the first frameworks that natively supports TypeScript and provides code architecture based on controllers, services and modules."),Object(n.b)("h3",{id:"complexity--learning-curve"},"Complexity & Learning Curve"),Object(n.b)("p",null,"If you are familiar with ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://angular.io/"}),"Angular")," or have background in Java and C#, then you will probably feel comfortable with Nest. The framework is presented as ",Object(n.b)("em",{parentName:"p"},"heavily inspired by Angular")," and takes many concepts from frameworks such as .NET or Spring. "),Object(n.b)("p",null,"If, however, you are familiar with frameworks such as ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://expressjs.com/"}),"Express"),", ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://koajs.com/"}),"Koa")," or ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.fastify.io/"}),"Fastify"),", or if you are a fullstack developer using ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," or ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://vuejs.org/"}),"Vue"),", then you will probably be more comfortable with Foal. The architecture will seem more natural and straightforward and you will not have to face a steep learning curve. "),Object(n.b)("p",null,"Foal defends the view that, to make developers more productive, a framework architecture should be as simple and intuitive as possible to allow them to read, write, debug and maintain code more easily. Its ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/1.x/architecture/services-and-dependency-injection"}),"dependency injection")," system is an example of this."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"FoalTS architecture also uses far fewer ",Object(n.b)("em",{parentName:"p"},"TypeScript decorators"),". They are only used when the readability of the code needs to be improved.")),Object(n.b)("h3",{id:"philosophy--objectives"},"Philosophy & Objectives"),Object(n.b)("p",null,"The two frameworks have also philosophical differences in their objectives. Nest focuses on providing application ",Object(n.b)("em",{parentName:"p"},"architecture")," to developers."),Object(n.b)("p",null,"Foal TS, while providing the architecture, aims also to offer a rich development environment and ready-to-use components to build from end to end a complete application."),Object(n.b)("p",null,"For example, in Foal, you have tools to ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/1.x/frontend-integration/angular-react-vue"}),"connect")," your backend to your ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://vuejs.org/"}),"VueJS")," application, set up an ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/1.x/authentication-and-access-control/quick-start"}),"authentication system")," (stateless or stateful) with passwords that suits your SPA+API architecture and configure access control based on ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/foal/docs/1.x/authentication-and-access-control/groups-and-permissions"}),"groups and permissions"),". You will not waste time on reinventing the wheel or searching for external libraries (even if you can still use them and integrate them into Foal). Your only concern is to work on ",Object(n.b)("em",{parentName:"p"},"business logic"),"."),Object(n.b)("h2",{id:"routing-controllers"},"Routing Controllers"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/routing-controllers"}),"Routing Controllers")," framework is the other first Node.JS framework that has natively supported TypeScript and provided controller classes as architecture."),Object(n.b)("p",null,"It integrates interesting libraries such as ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typestack/class-transformer"}),"class-transformer")," and ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/typestack/class-validator"}),"class-validator")," to unserialize and validate request bodies."),Object(n.b)("p",null,"Compared to Routing Controllers, Foal aims to go further (it also uses fewer decorators). Not only does it bring TypeScript and controller classes, but it also offers many ready-to-use components and tools to build a complete application (CLI, auth, Swagger UI, access control, OpenAPI, shell scripts, GraphQL, generators, etc)."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"As for August 2019, the development of the framework seems to have stopped. The last published version (version 0.7.7) was one year ago.")),Object(n.b)("h2",{id:"loopback"},"Loopback"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://loopback.io/"}),"Loopback")," is an API framework that aims to ",Object(n.b)("em",{parentName:"p"},"make easy to build modern applications that require complex integrations"),". Its first version was released in 2013."),Object(n.b)("h3",{id:"version-3"},"Version 3"),Object(n.b)("p",null,"Foal and Loopback share similarities in the way they both provide components to manage authentication, access control or to document APIs. However, they have different approaches to how they should help developers build APIs."),Object(n.b)("p",null,"Loopback's architecture is ",Object(n.b)("em",{parentName:"p"},"opinionated")," and allows developers to quickly create an API at the beginning of a project without too much effort. With a few commands, you can generate a simple application with authentication, an ACL and visual documentation of the API. If your API is simple and you do not want to spend too much time on the backend, then Loopback can be a good choice."),Object(n.b)("p",null,"If, however, your API is more complex or if you want more freedom to build it, then Foal is probably better. The framework's architecture intends to be as little opinionated as possible to keep it simple and intuitive. I strongly believe that, if an opinionated architecture can help to quickly build an API at the beginning of a project, it can also become a brake in the long term. Doing too much ",Object(n.b)("em",{parentName:"p"},"magic")," or introducing too much abstractions can make the application harder to maintain, debug, customize or extend as the application grows up. At some point, we always need to implement specialized things or use a third-party library without being constrained. FoalTS allows you to do this thanks to its precise, simple and clean architecture."),Object(n.b)("h3",{id:"version-4"},"Version 4"),Object(n.b)("p",null,"To do. Feel free to open an issue to share your experience!"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Unlike Loopback 3, the new version supports GraphQL & TypeScript.")),Object(n.b)("h2",{id:"adonis-4"},"Adonis 4"),Object(n.b)("p",null,"To do. Feel free to open an issue to share your experience!"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Foal is written in TypeScript and Adonis in JavaScript."),Object(n.b)("li",{parentName:"ul"},"The architecture is pretty different: Adonis defines its routes with functions whereas Foal uses classes and decorators."),Object(n.b)("li",{parentName:"ul"},"Adonis has its own ORM: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://adonisjs.com/docs/4.0/lucid"}),"Lucid"),". Foal uses ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://typeorm.io"}),"TypeORM")," or ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://mongoosejs.com/"}),"Mongoose"),"."),Object(n.b)("li",{parentName:"ul"},"Foal supports OpenAPI, Swagger UI and GraphQL.")))}p.isMDXComponent=!0},251:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return d}));var a=o(0),r=o.n(a);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(o),h=a,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||n;return o?r.a.createElement(d,s(s({ref:t},l),{},{components:o})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);