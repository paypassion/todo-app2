// 데이터 타입
// string "가나다"
// number 1 10
1;
// boolean
true;
false;

// null
null;

// undefined
undefined;

// 키: 180;
// 몸무게: 70;
// 피부색: 노란;
// 기독교: 맞다;
// 박사학위: 없다;

// 변수
height = 180;
christ = true;

// 저
// - 이름
// - 성별
// - 미혼
// - 나이

// 객체
me = {
  name: "lee",
  gender: "male",
  age: 43,
};

// 함수
function sum(x, y) {
  result = x + y;
  return result;
}

you = {
  name: "kim",
  gender: "female",
  age: 37,
  address: null,
  sum: sum,
};

console.log(you.name);
console.log(you.age);
console.log(you.sum(20, 20));

function hi(name) {
  console.log("hi~ " + name);
}

// 이름 저장
lastName = "lee";

hi(lastName);

sumResult = sum(100, 200);

console.log(1, sumResult);

console.log();

// 조건문
// if(조건) {
//   실행될 코드
// }

<<<<<<< HEAD
{
  let name = "lee";

  if (name === "lee") {
    console.log("hello");
  } else if (name === "kim") {
    console.log("hello");
  } else {
    console.log("hi");
  }

  // switch (변수) {
  //   case 1:
  //     console.log("1");
  //     break;
  // }
}
{
  let name = "kim";

  switch (name) {
    case "lee":
    case "kim":
      console.log("hello");
      break;
    default:
      console.log("hi");
  }
}
// 변수 선언하는 방법

var name = "park";

var num = 3;

function sum(a, b) {
  let result = 0;
  if (true) {
    const num = 2;
  }
  result = (a + b) * num;
  return result;
}

// result = sum(1, 1);

// console.log(result);
// console.log(num);

// 반복문

