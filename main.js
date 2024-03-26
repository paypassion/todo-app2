//인풋에 내용을 쓰고 등록버튼을 클릭하면 
//리스트에 내용이 추가된다.

//필요한 요소들을 DOM에서 가져오기 

const todoInput = document.querySelector('.todo-input');
const todoInputButton = document.querySelector('.todo-input-button');
const TodoSectionSelector = document.querySelector('.todo-list-section');

// ul 만들기, 클래스 부여하기
const ul = document.createElement('ul')

// ul 클래스 부여하기
ul.classList.add('todo-list')

// section에 ul 달기
TodoSectionSelector.appendChild(ul)

// 등록 버튼 클릭 시 실행되는 이벤트 핸들러 함수
todoInputButton.addEventListener('click', function (event) {
   // 새로고침 방지
  event.preventDefault();

  // 빈칸, 공백입력 방지
  const emptyValidator = str => str.trim().length;

  if(emptyValidator(todoInput.value)=== 0) {
    alert('Empty! Please write somthing you need :D')
    return;
  }
  
   // HTML태그를 만들고 상수에 할당하는 함수, 그리고 그 상수의 이름을 짓는 상수.
  // HTML태그 만드는 함수
  const makeTag = function (htmlTag) {
    const element = document.createElement(htmlTag);
    return element; 
  };

   // 클래스가 부여된 HTML태그를 만들고 상수에 할당하는 함수. 그리고 그 상수의 이름짓는 함수.
  // 클래스가 부여된 HTML태그 만드는 함수  
  const makeClassTag = function (htmlTag, classNames) {
    const element = document.createElement(htmlTag);
    const classNameSplit = classNames.split(' ')
    element.classList.add(...classNameSplit);
    return element;
    };
  
  // append를 하는 함수
  const AppendIt = function (parent, child) {
    const element = parent.append(child);
    return element;
  } 
  // 태그 만들기
  
  const li = makeClassTag('li', 'todo-item');
  const label = makeTag('label');
  const input = makeTag('input') 
  const span = makeTag('span');
  const div = makeTag('div');
  const i1 = makeClassTag('i', 'fa-solid fa-star');
  const i2= makeClassTag('i', 'fa-solid fa-trash');

  // 자식 요소로 달기

  AppendIt(ul, li);
  AppendIt(li, label);
  AppendIt(label, input);
  AppendIt(label, span);
  AppendIt(li, div);
  AppendIt(div, i1);
  AppendIt(div, i2);

  // input에 checkbox 속성부여하기
  input.setAttribute('type', 'checkbox')

  // span에 할 일 텍스트 가져오기
  span.textContent = todoInput.value

  // 버튼 클릭 후 입력란 초기화
  todoInput.value = '';

}) 




