//인풋에 내용을 쓰고 등록버튼을 클릭하면 
//리스트에 내용이 추가된다.


const todoInput = document.querySelector('.todo-input');
const todoInputButton = document.querySelector('.todo-input-button');
const todoList = document.querySelector('#todoList');


console.log("todo", todoInput);
console.log("todoInputButton",todoInputButton);

todoInputButton.addEventListener('click', function () {
  const todo = todoInput.value;
  console.log("todo", todo);
  
// 할 일 요소 만드기
const span = document.createElement("span")
// 할일리스트에 추가하기
// todoList => <ul>
span.textContent = todo;

todoList.appendChild(span);
})