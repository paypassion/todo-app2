
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
const ul = addClass(createElement('ul'), 'todo-list')
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
  const todo = todoInput.value.trim()
  if(!todo) {
    alert('Empty! Please write something you want :D')
    return false; // 유효하지 않는 경우 멈춤
  }
  return true; // 유효한 경우 진행
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
  const todoItemContent = todoInput.value.trim()

  // 중복검사
  const isDuplicate = data.some(item => item.content === todoItemContent);

  if(isDuplicate) {
    alert("This task is already on the list. Please write something else :-)")
    return; // 함수 종료
  }
  
  if(!validateTodo()) return; // 공백 검사 후 진행

  const todoItem = {
    done: false,
    content: todoInput.value.trim(),
    starred: false 
  }
  data.push(todoItem)
  renderList()
  todoInput.value=''; // 입력란 초기화
};

function toggleStar(index) {
  data[index].starred = !data[index].starred;
  renderList()
};

function renderList(tasks = data) {
  // 매번 새로 할 일을 추가할 때 마다 데이터에 있는 모든 할일을 렌더링 하므로 렌더링 전에 모든 할일 리스트를 삭제합니다.
  
  ul.innerHTML = ''; // 기존항목 모두 제거

  // 데이터를 순회하며 모든 할 일을 렌더링 합니다.
  tasks.forEach(function (task, index ) {
    console.log("task", task);
    // 할일 리스트 덩어리
    const li = addClass(createElement('li'), 'todo-item');
    const label = createElement('label');
    const div = createElement('div');
    const checkbox = createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleDone(index))
    // 렌더링할 때 인덱스가 toggleDone에 전달 됨.
    const span = createElement('span')
    span.textContent = task.content;
    const i1 = addClass(createElement('i'), 'fa-solid fa-star');
    // 별 색깔 상태 반영
    i1.style.color = task.starred ? 'gold' : 'lightgray';
    i1.addEventListener('click', () => toggleStar(index))
    const i2 = addClass(createElement('i'), 'fa-solid fa-trash');
    i2.addEventListener('click', () => deleteListItem(index));
  
    //ul의 자식으로 li를 추가
    appendElements(ul, li);
  
    //li의 자식으로 label과 div를 추가
    appendElements(li, label, div);
  
    //label의 자식으로 input과 span 추가
    appendElements(label, checkbox, span);
  
    //div의 자식으로 i1과 i2를 추가
    appendElements(div, i1, i2);
  
    // 체크 박스 상태 전달
    
  })

};

function deleteListItem(index) {
  data.splice(index, 1); // 데이터에서 삭제
  renderList()
};

function toggleDone(index) {
  data[index].done = !data[index].done // 체크 상태 토글
};

// 등록 버튼 클릭 시 실행되는 이벤트 핸들러 함수
todoInputButton.addEventListener('click', (event) => {
  event.preventDefault(); // 새로 고침 방지
  createTodoItem()
}) 

// 데이터에 넣고 렌더링 하려면, 넣은 다음에 렌더링 된 걸 다 지우고,
// 가지고 온 데이터를 중심으로 렌더링할 구조를 다시 짜야 한다. 

// createTodoItem에 텍스트 값이랑, 체크박스 값을 저장하고
// 그것을 data로 넘긴다.
// data에 들어있는 내용으로 다시 할 일 리스트 구조를 짜서 렌더링 한다.

const showAllButton = $('.all')
const showCompletedButton = $('.completed')
const showIncompletedButton = $('.incompleted')

showAllButton.addEventListener('click', function () {
  setActiveButton(this)
  // 모든 할 일을 보여주는 동작을 실행
});

showCompletedButton.addEventListener('click', function () {
  setActiveButton(this)
  // 완료된 항목만 보여주는 동작을 실행
});

showIncompletedButton.addEventListener('click', function () {
  setActiveButton(this)
  // 미완료된 항목만 보여주는 동작을 실행
});

function setActiveButton(clickedButton) {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    if (button === clickedButton) {
      if (!button.classList.contains('active')) {
      addClass(button, 'active');
      } 
    } else
      button.classList.remove('active');
  })
};

// 모든 할 일 보기 버튼 클릭 시
showAllButton.addEventListener('click', () => renderList())

// 완료된 항목만 보기 버튼 클릭 시
showCompletedButton.addEventListener('click', () => renderFilteredTasks(true))

// 미완료된 항목만 보기 버튼 클릭 시
showIncompletedButton.addEventListener('click', () => renderFilteredTasks(false))

function renderFilteredTasks(completed) {
  // 필터링된 할 일 목록 생성
  const filteredTasks = data.filter(task => task.done === completed)
  // 필터링된 목록을 기반으로 렌더링
  renderList(filteredTasks);
};