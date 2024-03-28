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

/////////////////////////태그 메이커 ///////////////////////////////

// HTML태그 만드는 함수
const makeTag = function (htmlTag) {
  const element = document.createElement(htmlTag);
  return element; 
  };
  
// makeTag로 map할 배열
const beforeTag = [
  {htmlTag: 'label'}, //0
  {htmlTag: 'input'}, //1
  {htmlTag: 'span'},  //2
  {htmlTag: 'div'},   //3
]

// beforeTag요소에 makeTag를 map으로 적용
const afterTag = beforeTag.map(function (obj) {
  return makeTag(obj.htmlTag);
});


// 클래스가 부여된 HTML태그 만드는 함수  
const makeClassTag = function (htmlTag, classNames) {
  const element = document.createElement(htmlTag);
  const classNameSplit = classNames.split(' ')
  element.classList.add(...classNameSplit);
  return element;
};


// makeClassTag로 map할 배열
const beforeClassTag =[  
  {htmlTag: 'li', className:'todo-item'},     
  {htmlTag: 'i', className:'fa-solid fa-star'},     
  {htmlTag: 'i', className:'fa-solid fa-trash'}  
  ]

// beforeClassTag에 makeClassTag를 map으로 적용
const afterClassTag = beforeClassTag.map (
  function (obj) {
  return makeClassTag(obj.htmlTag, obj.className);
})

// append를 하는 함수
const appendIt = function (parent, ...child) {
  const element = parent.append(...child);
  return element;
} 

// afterTag 배열 해체
const [label, input, span, div] = afterTag;

// afterClassTag 배열 해체
const [li, i1, i2] = afterClassTag;



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

function setSpanText(spanElement, text) {
  spanElement.textContent = text;
};

// 클릭으로 별 색상을 바꾸는 함수
function changeStarColor(i1) {
  let isClicked = false;
  i1.addEventListener('click', function () {
      if (!isClicked) {
        i1.style.color = 'gold' 
      } else {
        i1.style.color = 'lightgray'
      }
      isClicked = !isClicked;
  });
};

// 쓰레기통을 누르면 해당 li를 삭제하는 함수
function deleteListItem(ulElement, liElement) {
  i2.addEventListener('click', function () {
    ulElement.removeChild(liElement);
  });
};

// 버튼 클릭 후 입력란을 초기화하는 함수
function resetInputField(inputElement) {
  inputElement.value = ''
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

  toBeAppended();
  handleTodoInput();
  changeStarColor(i1);
  deleteListItem(ul, li);
};

// 이벤트 핸들러 함수에서 콜백될 함수 안에 들어있는데
// append함수를 담은 함수
function toBeAppended() {
  //ul의 자식으로 li를 추가
  appendIt(ul, li);

  //li의 자식으로 label과 div를 추가
  appendIt(li, label, div);

  //label의 자식으로 input과 span 추가
  appendIt(label, input, span);

  //div의 자식으로 i1과 i2를 추가
  appendIt(div, i1, i2);
}

// input과 관련된 것을 조작하는 함수를 담은 함수

function handleTodoInput() {
  // 
  setInputAttributes(input);
  setSpanText(span, todoInput.value);
  resetInputField(todoInput)
};


// 등록 버튼 클릭 시 실행되는 이벤트 핸들러 함수
todoInputButton.addEventListener('click', handleClick) 




