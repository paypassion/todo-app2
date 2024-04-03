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

/////////////////////////태그 메이커 ////////////////////////////

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


// 할 일들의 배열
const data = [
  //   {
  //     done: true,
  //     content: '우유마시기'
  //   }
  ]

//data에 할일내용과 체크박스 디폴트 상태를 전달하는 함수
function createTodoItem() {
  const todoItem = {
    done: false,
    content: todoInput.value.trim()
  }
  data.push(todoItem)
  renderList()
  todoInput.value=''; // 입력란 초기화
};

function renderList() {
  // 매번 새로 할 일을 추가할 때 마다 데이터에 있는 모든 할일을 렌더링 하므로 렌더링 전에 모든 할일 리스트를 삭제합니다.
  const items = document.querySelectorAll('ul > li')

  items.forEach(function (item) {
    item.remove();
  });

  // 데이터를 순회하며 모든 할 일을 렌더링 합니다.
  data.forEach(function (todo, i ) {
    console.log("todo", todo);
    // 할일 리스트 덩어리
    const li = createElement('li');
    const label = createElement('label');
    const div = createElement('div');
    const checkbox = createElement('input');
    const span = createElement('span')
    const i1 = createElement('i')
    const i2 = createElement('i')
    
    // 클래스 부여
    addClass(li, 'todo-item')
    addClass(i1, 'fa-solid fa-star')
    addClass(i2, 'fa-solid fa-trash')
  
    //ul의 자식으로 li를 추가
    appendElements(ul, li);
  
    //li의 자식으로 label과 div를 추가
    appendElements(li, label, div);
  
    //label의 자식으로 input과 span 추가
    appendElements(label, checkbox, span);
  
    //div의 자식으로 i1과 i2를 추가
    appendElements(div, i1, i2);
  
    // input에 check박스 부여
    setInputAttributes(checkbox);
  
    // span에 새로운 할 일 값 가져오기
    setSpanText(span, todo.content);
  
    // 클릭으로 별 색깔 바꾸기
    changeStarColor(i1)
  
    // 할 일 삭제 버튼
    deleteListItem(i2, ul, li)

    // 체크 박스 상태 전달
    checkbox.checked = todo.done
    checkbox.addEventListener("click", clickCheck)
  })

};

// 체크박스 클릭 핸들러
function clickCheck(event) {
  const itemWrap = event.target.parentElement;
  const span = itemWrap.querySelector("span")
  const content = span.textContent;

  // 체크 상태를 데이터에 반영
  data.filter(function (item) {
    if (item.content == content) return true;

    return false
  });[0].done = event.target.checked; 
}
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
  createTodoItem()
  renderList()
  todoInput.value = ''
};

// 이벤트 핸들러 함수에서 콜백될 함수 안에 들어있는데
// append함수를 담은 함수
function toBeAppended() {
  const li = createElement('li');
  const label = createElement('label');
  const div = createElement('div');
  const checkbox = createElement('input');
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
  appendElements(label, checkbox, span);

  //div의 자식으로 i1과 i2를 추가
  appendElements(div, i1, i2);

  // input에 check박스 부여
  setInputAttributes(checkbox);

  // span에 새로운 할 일 내용 가져오기
  setSpanText(span, todoInput.value);

  // 클릭으로 별 색깔 바꾸기
  changeStarColor(i1)

  // 쓰레기통 누르면 해당 li 삭제
  deleteListItem(i2, ul, li)


}

// 등록 버튼 클릭 시 실행되는 이벤트 핸들러 함수
todoInputButton.addEventListener('click', handleClick) 

// 데이터에 넣고 렌더링 하려면, 넣은 다음에 렌더링 된 걸 다 지우고,
// 가지고 온 데이터를 중심으로 렌더링할 구조를 다시 짜야 한다. 

// createTodoItem에 텍스트 값이랑, 체크박스 값을 저장하고
// 그것을 data로 넘긴다.
// data에 들어있는 내용으로 다시 할 일 리스트 구조를 짜서 렌더링 한다.


