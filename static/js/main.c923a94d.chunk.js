(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{106:function(e,t,n){e.exports=n(181)},111:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(3),o=n.n(c),l=(n(111),function(){return r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"title"},"Todo-List"))}),i=n(58),u=n(183),m=n(60),s=n(57),d=(n(118),function(){return r.a.createElement("div",{className:"footer"},"\xa9Project by Shmaliuk Dmitriy",r.a.createElement("br",null),"2019")}),p=n(182),f=(n(119),p.a.Option),v=function(e){var t=Object(a.useState)(e.status),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"actionSection"},r.a.createElement("div",{id:"number",style:{color:c?"#b0acac":"#000000"}},e.number+1+"."),r.a.createElement("div",{id:"name",style:c?{textDecoration:"line-through",color:"#b0acac"}:{textDecoration:"none",color:"#000000"}},e.name),r.a.createElement("div",{id:"status"},r.a.createElement(p.a,{className:"select",value:e.status?"completed":"noCompleted",onChange:function(t){o("completed"===t),e.changeStatus(e.id)}},r.a.createElement(f,{value:"noCompleted"},"no completed"),r.a.createElement(f,{value:"completed"},"completed"))),r.a.createElement("div",{id:"actions"},r.a.createElement(m.a,{type:"primary",onClick:function(){return e.removeTask(e.id)}},"Delete")))},E=(n(176),[{name:"All",id:"all"},{name:"Completed",id:"completed"},{name:"No completed",id:"noCompleted"}]),b=Object(s.b)((function(e){return{tasks:e.tasks,filters:e.filters}}),{addTask:function(e,t,n){return{type:"ADD_TASK",number:e,name:t,completed:n}},changeStatus:function(e){return{type:"CHANGE_STATUS",number:e}},removeTask:function(e){return{type:"REMOVE_TASK",number:e}},changeFilter:function(e){return{type:"CHANGE_FILTER",activeFilter:e}}})((function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],l=function(){var t=e.addTask;c.length>3&&(t((new Date).getTime(),c,!1),o(""))};return r.a.createElement("div",{className:"todo"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,"You must do it"),r.a.createElement("div",{className:"inputs"},r.a.createElement(u.a,{placeholder:"Write what you must do",value:c,onKeyPress:function(e){"Enter"===e.key&&l()},onChange:function(e){var t=e.target.value;o(t)}}),r.a.createElement(m.a,{onClick:l,type:"primary",className:"addButton"},"Add")),r.a.createElement("div",{className:"data"},function(e,t){switch(t){case"completed":return e.filter((function(e){return e.completed}));case"noCompleted":return e.filter((function(e){return!e.completed}));default:return e}}(e.tasks,e.filters).map((function(t,n){return r.a.createElement(v,{number:n,name:t.name,status:t.completed,removeTask:e.removeTask,changeStatus:e.changeStatus,id:t.number})})))),r.a.createElement("div",{className:"filter"},E.map((function(t){return r.a.createElement("p",{onClick:function(){return e.changeFilter(t.id)}},t.name)}))),r.a.createElement(d,null))})),h=(n(177),function(){return r.a.createElement(a.Fragment,null,r.a.createElement(l,null),r.a.createElement(b,null))}),k=n(27),g=n(59),y=n(56),T=Object(y.load)({namespace:"todo-list"});T&&T.tasks&&T.tasks.length||(T={tasks:[]});var w,N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T.tasks,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.number,r=t.name,c=t.completed;switch(n){case"ADD_TASK":return[].concat(Object(g.a)(e),[{number:a,name:r,completed:c}]);case"REMOVE_TASK":return Object(g.a)(e).filter((function(e){return e.number!==a}));case"CHANGE_STATUS":return Object(g.a)(e).map((function(e){return e.number===a&&(e.completed=!e.completed),e}));default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.activeFilter;switch(n){case"CHANGE_FILTER":return a;default:return e}},S=Object(k.c)({tasks:N,filters:O}),j=k.d,A=(w={},Object(k.e)(S,w,j(Object(k.a)(Object(y.save)({namespace:"todo-list"})))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=r.a.createElement(s.a,{store:A},r.a.createElement(h,null));o.a.render(C,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[106,1,2]]]);
//# sourceMappingURL=main.c923a94d.chunk.js.map