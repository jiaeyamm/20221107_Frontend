/*
    Var 의 문제점
        1. Hoisting이 일어난다.
            - 실행 전에 오류를 내면 예측할 수 있어서 수정이 용이하다. 
            - 호이스팅은 실제 실행될 때 오류를 발생시킬 수 있어 수정하기 어렵다. 

        2. 재선언이 가능하다.
            - 같은 이름의 식별자가 중복된다. 가장 최근값을 가져온다. 
            - 다른 곳에서 사용 중인 변수의 값을 의도치않게 변경할 수 있다. => 큰일난다. 
        3. 함수 레벨 스코프(유효범위)만 지원한다. 
            - 블록 레벨 스코프는 지원하지 않는다. 
*/

/* 
    Hoisting(호이스팅) : 끌어올리다라는 뜻으로, 변수, 함수, 클래스 선언부를 위로 끌어올린 것처럼 동작한다. 
        => 선언부만 끌어올린다.  > undefined로 초기화된다.

        >> 결론 let 혹은 const를 써라! (var는 옛날 브라우저는 지원 안 함, 그리고 옛날 코드 전체 수정 불가)
 */

console.log(num);
// console.log(num02);
var num = 10;

// let 키워드를 사용하면 재선언이 불가능하다. => 이미 선언된 식별자라면 오류를 발생시킨다. (TDZ)

// console.log(price); // 선언 이전에 참조하면 오류를 발생시킨다. Cannnot access '변수' before initialization
let price = 1000;
// let price = 10000;

// const 상수(Constant)는 변하지 않는 수(변수의 반댓말), 재할당을 하면 오류가 난다. 변하면 안되는 값을 할당한다.
// 상수 선언 시 값을 초기화하지 않으면 오류가 난다.
const TAX_RATIO = 10;
// TAX_RAITO = 100;

let i = 100; // var로 하면 for 안의 i와 밖의 i가 별개지만, let은 같은 항목으로 취급한다.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

// var 함수 레벨 스코프는 지원한다.
function sum() {
  var i = 0;
} // function 안에 있는 함수는 밖에 영향을 미치지 않는다.

for (var abc = 0; abc < 1125; abc++) {} // for문안에 사용한 변수가 바깥 영역에도 전역(바깥)에 영향을 미친다.

console.log(abc);

if (true) {
  let abc = 1000;

  console.log(abc);
}
console.log(abc);

// 전역 스코프 : 가장 바깥 유효 범위, 어디서든 접근 가능하다. 가장 상위 스코프.

let value = 777;

// 지역 스코프 : 코드 블록 내의 범위, 해당 블록에서만 유효하다.

{
  console.log(value);

  let sTr = "seok";
  {
    {
      console.log(sTr);
    }
  }
}
//console.log(sTr);

// value는 바깥에 선언됐기 때문에 코드 블록 안에서 접근이 가능하다.
// sTr은 블록 안에서 선언됐기 때문에 바깥에서 접근이 불가능하다.
// = > 하위 스코프에서 상위 스코프를 참조하는 것은 가능하지만, 상위에서 하위 스코프를 참조할 수 없다.
// = > 상위 스코프와 하위 스코프의 식별자가 이름이 중복되면 하위에서 찾고 없으면 상위로 넘어간다.

/*
    Scope chain, ES(Ecma Script)6, ECMA-262 (JS 표준화 규격)
*/
