 // // 특정 요소를 다른 특정 요소의 자식으로 배치시키는 함수
  // const appendTag = function (parentSelector, child) {
  //   const parentElement = document.querySelector(parentSelector);
  //   parentElement.appendChild(child)
  // };


  // // 할 일 목록 ul 요소 만들기
  // const makeTodoList = document.createElement('ul');
  // makeTodoList.classList.add('todo-list');
  // todoListsection.appendChild(makeTodoList);
  
  // // 할 일 항목 li 요소 만들기
  // const makeTodoItem = document.createElement('li');
  // makeTodoItem.classList.add('todo_item');
  // makeTodoList.appendChild(makeTodoItem)

  // // label 요소 만들기
  // const makelabel = document.createElement('label');
  // makeTodoItem.appendChild(makelabel)

  // // checkbox 요소 만들기
  // const makeInput = document.createElement('input');
  // makeInput.setAttribute('type', 'checkbox');

  // // span 할 일 내용 요소 만들기
  // const makeSpan = document.createElement('span');
  // makeSpan.textContent = todo;
  // makelabel.append(makeInput, makeSpan);

  // // 아이콘 감싸는 div 요소 만들기
  // const makeDiv = document.createElement('div');
  // makeTodoItem.appendChild(makeDiv);

  // // i 별 아이콘 요소 만들기
  // const makeI1 = document.createElement('i');
  // makeI1.classList.add("fa-solid", "fa-star")
  
  // // i 휴지통 아아콘 요소 만들기
  // const makeI2 = document.createElement('i');
  // makeI2.classList.add("fa-solid", "fa-trash")  
  
  // // i를 div에 추가
  // makeDiv.append(makeI1,makeI2)

  // 시험
  
  // makeDiv.append(makeClassTag('newDiv', 'div','new-class'))
  
  
  // appendTag(makeDiv, makeClassTag('newDiv', 'div','new-class'))
  // // putClass('newDiv', 'new1')


// const createTodoItem = function () {} //function expression
// function createTodoItem () {} //function declaration

// const createNewDiv = function() {
//   document.createElement(`div`);
// }

// const appendNewDiv = function (button) {
//   button.addEventListener(`click`, function () {
//     createNewDiv().append();

//   })
// }

// const inputSelector = document.querySelector('input')
// const newTodoText = inputSelector.value;

// const newTodoSpan= document.createElement('span')
// newTodoSpan.textContent = inputSelector.value;

// inputSelector.appendChild(newTodoSpan)

// const greeting = '         Hello world!         '
// console.log(greeting);

// console.log(greeting.trim());


 //HTML 태그 만들기, 필요한 경우 클래스 부여하기

  // HTML태그를 만들고 상수에 할당하는 함수, 그리고 그 상수의 이름을 짓는 상수.
  // // HTML태그 만드는 함수
  // const makeTag = function (constName, htmlTag) {
  //   const element = document.createElement(htmlTag);
  //   window[constName] = element;
  //   return element; 
  // };

  // // 클래스가 부여된 HTML태그를 만들고 상수에 할당하는 함수. 그리고 그 상수의 이름짓는 함수.
  // // 클래스가 부여된 HTML태그 만드는 함수  
  // const makeClassTag = function (constName, htmlTag, classNames) {
  //   const element = document.createElement(htmlTag);
  //   const classNameSplit = classNames.split(' ')
  //   element.classList.add(...classNameSplit);
  //   window[constName] = element;
  //   return element;
  //   };

  // // HTML 태그 만드는 함수에 들어갈 인자를 모아놓는 배열
  // // HTML 태그 인자 배열
  // const Taglist = [
  //   {constName: 'makeLabel', htmlTag: 'label'}, //0
  //   {constName: 'makeInput', htmlTag: 'input'}, //1
  //   {constName: 'makeSpan', htmlTag: 'span'},   //2
  //   {constName: 'makeDiv', htmlTag: 'div'},     //3
  // ]

  // // HTML 태그 클래스 만드는 함수에 들어갈 인자를 모아놓는 배열
  // // HTML 클래스 태그 인자 배열
  // const classTagList = [
  //   // {constName: 'makeTodoList', htmlTag: 'ul', className:'todo-list'},       
  //   {constName: 'makeTodoItem', htmlTag: 'li', className:'todo-item'},       //0
  //   {constName: 'makeI1', htmlTag: 'i', className:'fa-solid fa-star'},       //1
  //   {constName: 'makeI2', htmlTag: 'i', className:'fa-solid fa-trash'}       //2 
  // ]

  // // 완성된 HTML 태그 배열 
  // const completeTaglist = []

  // // 완성된 HTML 클래스 태그 배열
  // const completeClassTagList = []

  // // HTML 태그 인자 배열 안의 객체들을 
  // // HTML 태그를 만드는 함수에 하나씩 대입시키고, 
  // // 대입결과를 완성된 HTML 태그 배열에 담는 forEach 함수
  // Taglist.forEach(set => {
  //   const result = makeTag(set.constName, set.htmlTag);
  //   completeTaglist.push(result)
  // })
  
  // // HTML 클래스 태그 인자 배열 안의 객체들을 
  // // HTML 클래스 태그를 만드는 함수에 하나씩 대입시키고, 
  // // 대입결과를 완성된 HTML 클래스 태그 배열에 담는 forEach 함수
  // classTagList.forEach(set => { 
  //   const result = makeClassTag(set.constName, set.htmlTag, set.className);
  //   completeClassTagList.push(result)  
  // })

  // // 테스트
  // console.log(completeClassTagList);
  // console.log(completeTaglist);
  
  // // // section아래 ul 달기
  // // todoListsection.append(completeClassTagList[0]);

  // // ul 아래 li .todo-item달기
  // makeUl.append(completeClassTagList[0]);

  // // li .todo-item 아래 label, div 달기

  // completeClassTagList[0].append(completeTaglist[0], completeTaglist[3]);

  // // label 아래 input,span 달기
  // completeTaglist[0].append(completeTaglist[1], completeTaglist[2]);

  // // input에 checkbox 속성 부여하기
  // completeTaglist[1].setAttribute('type', 'checkbox');

  // // span에 할 일 내용 넣기
  // completeTaglist[2].textContent = todo;

  // // div 아래 별 i, 휴지통 i 넣기
  // completeTaglist[3].append(completeClassTagList[1], completeClassTagList[2])

  