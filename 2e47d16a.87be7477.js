(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(251)),c={title:"The Shell Script create-todo"},i={unversionedId:"tutorials/simple-todo-list/4-the-shell-script-create-todo",id:"tutorials/simple-todo-list/4-the-shell-script-create-todo",isDocsHomePage:!1,title:"The Shell Script create-todo",description:"Now it is time to populate the database with some tasks.",source:"@site/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",slug:"/tutorials/simple-todo-list/4-the-shell-script-create-todo",permalink:"/foal/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/simple-todo-list/4-the-shell-script-create-todo.md",version:"current",sidebar:"someSidebar",previous:{title:"The Todo Model",permalink:"/foal/docs/tutorials/simple-todo-list/3-the-todo-model"},next:{title:"The REST API",permalink:"/foal/docs/tutorials/simple-todo-list/5-the-rest-api"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Now it is time to populate the database with some tasks."),Object(a.b)("p",null,"You could run the command line interface of your database (in that case ",Object(a.b)("em",{parentName:"p"},"SQLite"),") and enter some SQL queries. But this is risky and not very handy. It becomes especially true when the complexity of your models increases (relations many-to-many, etc)."),Object(a.b)("p",null,"That's why you are going to create and use a ",Object(a.b)("em",{parentName:"p"},"shell script")," instead."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"foal generate script create-todo\n")),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},"shell script")," is a piece of code intended to be called from the command line. It has access to all the components of your application, including your models. A shell script is divided in two parts:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a ",Object(a.b)("inlineCode",{parentName:"li"},"schema")," object which defines the specification of the command line arguments,"),Object(a.b)("li",{parentName:"ul"},"and a ",Object(a.b)("inlineCode",{parentName:"li"},"main")," function which gets these arguments as an object and executes some code.")),Object(a.b)("p",null,"Open the new generated file in the ",Object(a.b)("inlineCode",{parentName:"p"},"src/scripts")," directory and update its content."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// 3p\nimport { createConnection } from 'typeorm';\n\n// App\nimport { Todo } from '../app/entities';\n\nexport const schema = {\n  properties: {\n    text: { type: 'string' }\n  },\n  required: [ 'text' ],\n  type: 'object',\n};\n\nexport async function main(args: { text: string }) {\n  // Create a new connection to the database.\n  const connection = await createConnection();\n\n  try {\n    // Create a new task with the text given in the command line.\n    const todo = new Todo();\n    todo.text = args.text;\n\n    // Save the task in the database and then display it in the console.\n    console.log(await todo.save());\n  } catch (error) {\n    console.log(error.message);\n  } finally {\n    // Close the connection to the database.\n    await connection.close();\n  }\n}\n\n")),Object(a.b)("p",null,"Build the script."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"npm run build\n")),Object(a.b)("p",null,"Then run the script to create tasks in the database."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),'foal run create-todo text="Read the docs"\nfoal run create-todo text="Create my first application"\nfoal run create-todo text="Write tests"\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note that if you try to create a new to-do without specifying the text argument, you'll get the error below."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"Error: The command line arguments should have required property 'text'."))))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);