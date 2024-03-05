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

// 저 -객체: 여러값을 가지고 있는 복합적인 데이터 타입
// -이름
// -성별
// -미혼
// -나이

me =
{
  name: 'lee',
  gender: 'male',
  age: 43
}

// 형식 속성:값

you = {
  name: 'Kim',
  gender: 'female',
  age: 37,
  address: null,
  sum: sum
};

console.log(you.name);
console.log(you.age);
console.log(you.sum(20,20));


// 객체(오브젝트)의 프로퍼티에 접근할 때는 점을 쓴다.
me.age

// 함수
function sum(x, y) {
  result = x + y;
  return result;
}

function hi(name) {
  console.log("hi~"+ name);
}

시온 = "lonz";

hi(시온);

sumResult = sum(시온,107);

console.log("sumResult", sumResult);

// 조건문
// 반복문