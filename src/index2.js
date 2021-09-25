import { todo, todoq} from './index.js';
//import { todoq} from './index';
function functionCall(q){
    q.preventDefault();
    todo.Task_Name = document.getElementById('inputField').value;
    todo.Start_date = document.getElementById('inputField1').value;
    todo.Category = document.getElementById('category').value;
    todo.Due_Date = document.getElementById('inputField2').value;
    document.getElementById("to-do").reset();
    var template = Handlebars.compile(todoq);
    var ele = template({
      Task_Name : todo.Task_Name,
      Start_date : todo.Start_date,
      Category : todo.Category,
      Due_Date : todo.Due_Date
    });
    document.getElementById("toDoContainer").innerHTML += ele;
}
export {functionCall};