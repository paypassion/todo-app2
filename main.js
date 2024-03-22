//인풋에 내용을 쓰고 등록버튼을 클릭하면 
//리스트에 내용이 추가된다.

//필요한 요소들을 DOM에서 가져오기 

const todoInput = document.querySelector('.todo-input');
const todoInputButton = document.querySelector('.todo-input-button');
const todoListsection = document.querySelector('.todo-list-section');

// 등록 버튼 클릭 시 실행되는 이벤트 핸들러 함수
todoInputButton.addEventListener('click', function (event) {
  // 입력된 할 일 가져오기
  const todo = todoInput.value;
  
  // 버튼 클릭 후 입력란 초기화
  todoInput.value = '';

  // 새로고침 방지
  event.preventDefault();

  //HTML 태그 만들기, 필요한 경우 클래스 부여하기

  // HTML태그를 만들고 상수에 할당하는 함수, 그리고 그 상수의 이름을 짓는 상수.
  // HTML태그 만드는 함수
  const makeTag = function (constName, htmlTag) {
    const element = document.createElement(htmlTag);
    window[constName] = element;
    return element; 
  };

  // 클래스가 부여된 HTML태그를 만들고 상수에 할당하는 함수. 그리고 그 상수의 이름짓는 함수.
  // 클래스가 부여된 HTML태그 만드는 함수  
  const makeClassTag = function (constName, htmlTag, classNames) {
    const element = document.createElement(htmlTag);
    const classNameSplit = classNames.split(' ')
    element.classList.add(...classNameSplit);
    window[constName] = element;
    return element;
    };

  // HTML 태그 만드는 함수에 들어갈 인자를 모아놓는 배열
  // HTML 태그 인자 배열
  const Taglist = [
    {constName: 'makeLabel', htmlTag: 'label'}, //0
    {constName: 'makeInput', htmlTag: 'input'}, //1
    {constName: 'makeSpan', htmlTag: 'span'},   //2
    {constName: 'makeDiv', htmlTag: 'div'},     //3
  ]

  // HTML 태그 클래스 만드는 함수에 들어갈 인자를 모아놓는 배열
  // HTML 클래스 태그 인자 배열
  const classTagList = [
    {constName: 'makeTodoList', htmlTag: 'ul', className:'todo-list'},       //0
    {constName: 'makeTodoItem', htmlTag: 'li', className:'todo-item'},       //1
    {constName: 'makeI1', htmlTag: 'i', className:'fa-solid fa-star'},       //2
    {constName: 'makeI2', htmlTag: 'i', className:'fa-solid fa-trash'}       //3 
  ]

  // 완성된 HTML 태그 배열 
  const completeTaglist = []

  // 완성된 HTML 클래스 태그 배열
  const completeClassTagList = []

  // HTML 태그 인자 배열 안의 객체들을 
  // HTML 태그를 만드는 함수에 하나씩 대입시키고, 
  // 대입결과를 완성된 HTML 태그 배열에 담는 forEach 함수
  Taglist.forEach(set => {
    const result = makeTag(set.constName, set.htmlTag);
    completeTaglist.push(result)
  })
  
  // HTML 클래스 태그 인자 배열 안의 객체들을 
  // HTML 클래스 태그를 만드는 함수에 하나씩 대입시키고, 
  // 대입결과를 완성된 HTML 클래스 태그 배열에 담는 forEach 함수
  classTagList.forEach(set => { 
    const result = makeClassTag(set.constName, set.htmlTag, set.className);
    completeClassTagList.push(result)  
  })

  // 테스트
  console.log(completeClassTagList);
  console.log(completeTaglist);
  
  // section아래 ul 달기
  todoListsection.appendChild(completeClassTagList[0]);

  // ul 아래 li .todo-item달기
  completeClassTagList[0].appendChild(completeClassTagList[1]);

  // li .todo-item 아래 label, div 달기

  completeClassTagList[1].append(completeTaglist[0], completeTaglist[3]);

  // label 아래 input,span 달기
  completeTaglist[0].append(completeTaglist[1], completeTaglist[2]);

  // input에 checkbox 속성 부여하기
  completeTaglist[1].setAttribute('type', 'checkbox');

  // span에 할 일 내용 넣기
  completeTaglist[2].textContent = todo;

  // div 아래 별 i, 휴지통 i 넣기
  completeTaglist[3].append(completeClassTagList[2], completeClassTagList[3])

  
}) 