//인풋에 내용을 쓰고 등록버튼을 클릭하면 
//리스트에 내용이 추가된다.

//필요한 요소들을 DOM에서 가져오기 

// document.querySelector 줄여쓰기
const $ = document.querySelector.bind(document);

// document.createElement 줄여쓰기
const createElement = document.createElement.bind(document);

// class부여하기
const addClass = function (element, className) {
  const classNameSplit = className.split(' ');
  element.classList.add(...classNameSplit)
  return element;
}

const todoInput = $('.todo-input');
const todoInputButton = $('.todo-input-button');
const TodoSectionSelector = $('.todo-list-section');

// ul 만들기, 클래스 부여하기
const ul = createElement('ul')

// ul 클래스 부여하기
addClass(ul, 'todo-list')

// section에 ul 달기
TodoSectionSelector.appendChild(ul)

/////////////////////////태그 메이커 ///////////////////////////////



// append를 하는 함수
const appendElements = function (parent, ...child) {
  const element = parent.append(...child);
  return element;
} 


////////////콜백 함수 안에 append 함수 안에 들어갈 기타 함수들 //////////////

// 할일 입력란 공백 검사 함수
function validateTodo() {
  const todo = todoInput.value;
  if(!todo.trim()) {
    alert('Empty! Please write something you want :D')
    return false; // 유효하지 않는 경우 false 반환
  }
  return true; // 유효한 경우 true 반환
};

// input에 checkbox 속성 부여하는 함수
function setInputAttributes(inputElement) {
  inputElement.setAttribute('type', 'checkbox')
};

// span안에 원하는 text를 넣는 함수 
function setSpanText(spanElement, text) {
  spanElement.textContent = text;
};

// 클릭으로 별 색상을 바꾸는 함수
function changeStarColor(i1) {
  let isClicked = false;
  i1.addEventListener('click', function () {
      i1.style.color = isClicked ? 'lightgray' : 'gold' 
      isClicked = !isClicked;
  });
};

// 쓰레기통을 누르면 해당 li를 삭제하는 함수
function deleteListItem(iElement, ulElement, liElement) {
  iElement.addEventListener('click', function () {
    ulElement.removeChild(liElement);
  });
};

//////////////이벤트 핸들러 함수에 쓰일 콜백 함수 ////////////////////////

//이벤트 핸들러 함수 내에서 사용할 콜백함수 정의
function handleClick(event) {
  // 새로고침 방지
  event.preventDefault();

  // 공백 방지
  if(!validateTodo()) {
    return;
  } // 

  toBeAppended()
  todoInput.value = ''
};

// 이벤트 핸들러 함수에서 콜백될 함수 안에 들어있는데
// append함수를 담은 함수
function toBeAppended() {
  const li = createElement('li');
  const label = createElement('label');
  const div = createElement('div');
  const input = createElement('input');
  const span = createElement('span')
  const i1 = createElement('i')
  const i2 = createElement('i')

  addClass(li, 'todo-item')
  addClass(i1, 'fa-solid fa-star')
  addClass(i2, 'fa-solid fa-trash')

  //ul의 자식으로 li를 추가
  appendElements(ul, li);

  //li의 자식으로 label과 div를 추가
  appendElements(li, label, div);

  //label의 자식으로 input과 span 추가
  appendElements(label, input, span);

  //div의 자식으로 i1과 i2를 추가
  appendElements(div, i1, i2);

  // input에 check박스 부여
  setInputAttributes(input);

  // span에 새로운 할 일 내용 가져오기
  setSpanText(span, todoInput.value);

  // 클릭으로 별 색깔 바꾸기
  changeStarColor(i1)

  // 쓰레기통 누르면 해당 li 삭제
  deleteListItem(i2, ul, li)
}

// 등록 버튼 클릭 시 실행되는 이벤트 핸들러 함수
todoInputButton.addEventListener('click', handleClick) 


// // 할 일들의 배열
// // const data = [
// //   // {
// //   //   done: true,
// //   //   content: '우유마시기'
// //   // }
// // ]