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
// 구구단
// for(초기값; 범위; 증감연산;) {
//   반복할 코드
// }

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}

// 배열
const A = [2, 3, 4, 5, 6, 7, 8, 9];
const B = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(A);
console.log(A.length);
console.log(A[0]);
console.log(A[A.length - 1]);

console.log(Array.prototype);

const AA = [2, 3, 4, 5, 6, 7, 8, 9];
const result = [];

function iter(console) {
  if (console % 2 === 0) {
    result.push(console);
  }
}

AA.forEach(iter);

function fa(e) {
  if (e % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function fb(e) {
  if (e % 4 === 0) return true;
  return false;
}

const r = A.filter(fa).filter(fb);

console.log("r", r);

const products = [
  {
    category: 1,
    name: "바지",
  },
  {
    category: 2,
    name: "아이스크립",
  },
  {
    category: 2,
    name: "빵",
  },
  {
    category: 1,
    name: "상의",
  },
  {
    category: 1,
    name: "반바지",
  },
  {
    category: 3,
    name: "목걸이",
  },
  {
    category: 3,
    name: "반지",
  },
  {
    category: 4,
    name: "강아지",
  },
];

const selectedOption = 3;

function getSelectedProduct1(product) {
  return product.category === selectedOption;
}

const getSelectedProduct2 = (product) => {
  return product.category === selectedOption;
};

const list = products
  .filter((product) => product.category === selectedOption)
  .filter((product) => product.name === "반지");

console.log("list", list);

const products2 = [
  {
    category: 1,
    name: "바지",
  },
  {
    category: 2,
    name: "아이스크립",
  },
  {
    category: 2,
    name: "빵",
  },
  {
    category: 1,
    name: "상의",
  },
  {
    category: 1,
    name: "반바지",
  },
  {
    category: 3,
    name: "목걸이",
  },
  {
    category: 3,
    name: "반지",
  },
  {
    category: 4,
    name: "강아지",
  },
];

function getName(product) {
  return product.name;
}

const rr = products2.map(getName);

console.log("rr", rr);

function name(nm) {
  return nm + " bye";
}

// console.log(name("lee"));

const studentScore = [
  {
    name: "lee",
    score: 90,
  },
  {
    name: "kim",
    score: 80,
  },
  {
    name: "park",
    score: 70,
  },
  {
    name: "choi",
    score: 40,
  },
];
const pass = [];
studentScore.forEach((student) => {
  if (student.score >= 80) {
    pass.push(student.name);
  }
});
console.log(pass);
const filteredStudent = studentScore.filter((student) => {
  return student.score >= 80;
});
console.log(filteredStudent);

const passedStudents = filteredStudent.map((student) => {
  return student.name;
});

console.log(passedStudents); // ==> ['lee', 'kim']

const passedStudentsByReduce = studentScore.reduce((acc, student) => {
  if (student.score >= 80) {
    acc.push(student.name);
  }
  return acc;
}, []);

console.log(passedStudentsByReduce); // ==> ['lee','kim']

const scores = [90, 80, 60, 30, 20];
const scoreTotal = scores.reduce((sum, score) => {
  return sum + score;
}, 0);
console.log(scoreTotal); // ==> 280