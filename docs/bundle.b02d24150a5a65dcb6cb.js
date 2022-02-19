(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{O:()=>y,L:()=>m});var r=function(){function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t(this,e),this.task=n,this.id=r||(new Date).getTime(),this.completed=!1,this.created_at=o||new Date}var r,o,a;return r=e,a=[{key:"fromJson",value:function(t){var n=t.id,r=t.task,o=t.completed,a=new e(r,n,t.created_at);return a.completed=o,a}}],(o=[{key:"getId",value:function(){return this.id}}])&&n(r.prototype,o),a&&n(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var t,n;return t=e,(n=[{key:"newTodo",value:function(e){this.todos.unshift(e),this.saveLocalStorage()}},{key:"setCompleted",value:function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}(this.todos);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.id==e){r.completed=!r.completed,this.saveLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"getPending",value:function(){return this.todos.filter((function(e){return!e.completed})).length}},{key:"deleteTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"clearCompleted",value:function(){this.todos=this.todos.filter((function(e){return!e.completed})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(e){return r.fromJson(e)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),s=document.querySelector(".filters"),f=document.querySelectorAll(".filter"),v=function(e){var t='\n        <li class="'.concat(e.completed?"completed":"",'" data-id="').concat(e.id,'">\n            <div class="view">\n                <input class="toggle" type="checkbox" ').concat(e.completed?"checked":"",">\n                <label>").concat(e.task,'</label>\n                <button class="destroy"></button>\n            </div>\n            <input class="edit" value="Create a TodoMVC template">\n        </li>\n    '),n=document.createElement("div");return n.innerHTML=t,c.prepend(n.firstElementChild),n.firstElementChild};u.addEventListener("keyup",(function(e){if(13===e.keyCode&&u.value.length>0){var t=new r(u.value);m.newTodo(t),v(t),u.value="",y.innerText=m.getPending()}})),c.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");t.includes("input")?(m.setCompleted(r),n.classList.toggle("completed"),y.innerText=m.getPending()):t.includes("button")&&(m.deleteTodo(r),c.removeChild(n),y.innerText=m.getPending())})),d.addEventListener("click",(function(){m.todos.length>0&&m.clearCompleted();for(var e=c.children.length-1;e>=0;e--){var t=c.children[e];t.classList.contains("completed")&&c.removeChild(t)}})),s.addEventListener("click",(function(e){var t=e.target.text;if(f.forEach((function(e){e.classList.remove("selected")})),e.target.classList.add("selected"),t){var n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}(c.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pending":a&&o.classList.add("hidden");break;case"Completed":a||o.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var m=new i,y=document.querySelector(".todo-count strong");y.innerText=String(m.getPending());for(var h=m.todos.length-1;h>=0;h--)v(m.todos[h])})();