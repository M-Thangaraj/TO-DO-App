(()=>{"use strict";var e={d:(t,a)=>{for(var n in a)e.o(a,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:a[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{y:()=>t,j:()=>a}),document.addEventListener("submit",(function(e){e.preventDefault(),t.Task_Name=document.getElementById("inputField").value,t.Start_date=document.getElementById("inputField1").value,t.Category=document.getElementById("category").value,t.Due_Date=document.getElementById("inputField2").value,document.getElementById("to-do").reset();var n=Handlebars.compile(a)({Task_Name:t.Task_Name,Start_date:t.Start_date,Category:t.Category,Due_Date:t.Due_Date});document.getElementById("toDoContainer").innerHTML+=n}));const t={};var a="<ul>{{Task_Name}} {{Start_date}} {{Category}}{{Due_Date}}</ul>"})();