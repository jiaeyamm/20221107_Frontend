/*

    함수(Function) :
        - 반복적으로 실행될 코드를 미리 작성 후 재사용한다.
        - function 뒤에 함수의 이름을 작성하고 ()를 붙인다.
            => () 안에는 함수 실행에 필요한 값을 매개변수(Parameter)로 전달.
        - ()안에 있는 매개 변수(Parameter)는 함수 내에서만 유효한 변수이다.
        - 매개 변수는 여러개도 가능하고, 없어도 된다.
            => 매개 변수를 통해서 전달 되는 실제 값을 인자(Argument)라고 한다.
        - 반환해줄 값이 있다면 return 뒤에 표현식을 작성한다. (없으면 생략 가능, undefined)
            => return은 함수의 종료를 의미하므로 이후의 코드가 실행되지 않는다.
        - 함수를 실행할 때는 함수이름(매개변수)의 형태로 작성한다. 
            => 함수를 호출한다(call)는 표현을 사용한다. 
        - 재사용성(반복된 코드 사용 가능), 유지 보수 용이(수식에서 하나만 변경), 모듈화 용이, 사용법 간단
        - 표현식이 필요한 자리에 함수의 실행 결과가 올 수 있다. 

*/

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4)); // console은 객체, log는 함수.
console.log(sum(5, 10));

let num03 = 10;
let percentage = 5;

// 매개변수와 return(반환값)이 없는 함수

function greeting() {
  console.log("안녕하세요");
}

greeting();
greeting();
greeting();

// 외부에 실행하는데 필요한 값들이 있는 경우 매개 변수를 생략하기도 한다.
function getPercentageToValue() {
  return (num03 * percentage) / 100;
  console.log("함수 종료"); // return 이후의 코드는 실행되지 않음.
}

console.log(getPercentageToValue());

// 빼기, 곱하기, 나누기 함수 만들어보기 (두 개의 수)
function hi(a, b) {
  return a - b;
}

function hello(a, b) {
  return a * b;
}

function bye(a, b) {
  return a / b;
}

console.log(hi(5, 2), hello(5, 2), bye(5, 2));

// 세개의 수의 평균을 출력하는 함수 만들어보기

function consoleAverage(a, b, c) {
  console.log((a + b + c) / 3);
}

consoleAverage(1, 2, 3); // 해당 수식은 편하지만 범용성이 떨어진다, 산식에 들어가는 숫자가 늘어날 때 등)

// console.log(consoleAverage(1, 2, 3)); > undefined (리턴 값을 정의하지 않았기 때문)

function getTotal(a, b, c) {
  return a + b + c;
}

// 함수는 작은 단위로 쪼개서 사용하는 것이 좋다.
var total = getTotal(3, 6, 9);
var avg = bye(total, 3);
console.log(avg);
console.log(bye(getTotal(3, 6, 9), 3)); // getTotal 이 bye 함수의 a, 괄호 뒤 3이 b이다.

// 기명 함수(Named Function)와 익명 함수

/* 기명 함수(Named Function) - 함수 선언식 
    => 함수 호이스팅이 일어난다. => 함수 선언 이전에 호출해도 잘 작동한다. 
*/

func();
function func() {
  console.log("기명 함수입니다.");
}

/* 익명 함수(Anonymous Function) - 함수 표현식
    => 함수 호이스팅이 일어나지 않는다.(변수의 호이스팅) => 구현부도 같이 호이스팅 된다. 
    => JavaScript는 함수를 값으로 취급한다. => 값으로써 함수를 전달할 때 익명 함수를 사용하면 간결히 작성 가능
*/

// getData();
let getData = function (fetchData) {
  console.log("익명 함수입니다.");
};

getData();
// fetchData();

/*
    화살표 함수(Arrow Function) - ES6(2015)에 추가된 함수
        => function 키워드를 사용하지 않고 "=>" 를 통해서 간결하게 작성 가능
        => 함수 표현식으로만 작성 가능하다. 
        => 코드 블럭(중괄호)과 return 키워드를 생략하면 표현식의 값을 리턴한다.
            => 기본적으로 중괄호{}를 코드 블록으로 인식하기 때문에, 객체일 때 명시하기 위해서 ()를 붙인다. 
            => 반환값이 객체라면 () 안에 {}를 작성해야 return 생략이 가능하다. 
        => 다른 함수의 값으로 함수를 전달할 때 많이 사용한다. 
        => 함수 호이스팅이 일어나지 않는다. 
        => this 바인딩이 일어나지 않는다. 
*/

let add = (a, b) => {
  return a + b;
};

console.log(add(4, 9));

let minus = (a, b) => a - b;

console.log("3 - 2 는", minus(3, 2));

// 화살표 함수 이용해서 두 문자열을 연결하는 함수 만들어보기

let sumString = (a, b) => a + b; // 콘솔로그 상관없이 => 뒤의 값을 반환한다.
console.log(sumString("안녕하세요", " 넵"));

let SumString2 = (str1, str2) => {
  return str1 + str2;
};
console.log(SumString2("헤이", " 하이"));

let getObj = (age, name) => ({
  age: age,
  name: "name",
});

let getObj2 = () => `안ㅇㅁㅇㅇㄴㅁㅇㅁㅇㄴㅁ
ㄴㅁㅇㅁㄴㅁㄴㅇㄴㅁ인밍ㄴㅁ리
ㄴ니니`;

let user = getObj(28, "jiae");
console.log(user);

let globalFuc = function () {
  console.log("외부 함수 실행");
  let inner = function () {
    console.log("내부 함수 실행");
  };

  inner();
  console.log("외부 함수 종료");
};

globalFuc(); // 처음 들어온 함수가 가장 마지막에 나간다.(스택 구조) FILO(first in, last out)
