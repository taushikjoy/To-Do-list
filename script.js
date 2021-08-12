let todoInput = document.querySelector(".todo-input");
let addButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");

addButton.addEventListener("click", addTodo);
todoList.addEventListener('click' ,deletecheck );

function addTodo(e) {
  e.preventDefault();

  //create div
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");

  //create li
  let todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");

  todoLi.innerText = todoInput.value;
  todoDiv.appendChild(todoLi);

  //create complete button

  let comBtn = document.createElement("button");
  comBtn.innerHTML = '<i class="fas fa-check"> </i>';
  comBtn.classList.add("com-btn");
  todoDiv.appendChild(comBtn);

  //create trash  button

  let trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"> </i>';
  trashBtn.classList.add("trash-btn")
  todoDiv.appendChild(trashBtn);

  //
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}


function deletecheck(e){
  const item = e.target;

  if (item.classList[0] === "trash-btn"){
     
    const todo = item.parentElement;
    todo.remove();
  }
}


// function deleteelement() {

//   var trashButn = document.querySelector(".trash-btn");

//   var abcd = trashButn.parentElement;
//   abcd.remove();
// }

// trashButn.addEventListener('click', deleteelement);
