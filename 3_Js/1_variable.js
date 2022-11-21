/*

    변수(Variable)
        - 메모리 공간에 접근할 수 있는 식별자
        - 데이터 저장된 공간을 마련하고 공간에 접근할 수 있는 주소에 이름을 붙인다.
        => 이름을 붙이는 걸 '변수를 선언한다'라고 한다.
        => 변수 선언에는 var, let, const(상수) 키워드 사용한다.
*/

var num = 1;

console.log(num);

// 변수 선언 => 공간을 마련하고 result라는 식별자를 만든다. ,를 통해 여러개의 변수를 선언할 수 있다.
var result, birthday;

//변수에 값 할당 => '='을 사용한다. 좌항(왼쪽) 할당할 변수를 우항(오른쪽)에는 할당할 값을 작성한다.

result = "성공";

// 값을 꺼내보는 걸 '변수를 참조한다'라고 표현한다.

console.log(result);

console.log(num * 10);

// 변수 초기화 : 변수 선언과 할당을 동시에 진행 => 선언만 하면 undefined라는 값으로 초기화
var userName = "seok hwangbo";
userName = "seok hwangbo"; // 변수에 다른 값을 할당 즉, 변경할 수 있다.
var age;
console.log(age);

console.log(userName);

// 변수 이름을 짓는 규칙

// 1. 키워드는 사용할 수 없다. => 키워드 : JS에서 약속된 예약어.
// var var; var은 키워드이기 때문에 변수명으로 사용할 수 없다.

// 2. 변수명으로는 문자, 숫자 $, _만 사용할 수 있다. = > 숫자로 시작할 순 없다.

var number;

// var num+1; $,_ 이외의 툭수문자를 변수명으로 사용할 수 없다.

// var 1_nmm; 변수명은 숫자로 시작할 수 없다.

// 3. 변수명은 대소문자를 구분한다.

var Username;
var USERNAME;

// user name; => 여러 단어를 표현하는 방법

// 1. 카멜 케이스 => userName => 단어를 대문자로 구분 (낙타 혹처럼 중간만 대문자)
// 2. 스네이크 케이스 => user_name => 단어를 _(언더바)로 구분
// 3. 파스칼 케이스 => UserName 카멜케이스와 동일하게 대문자로 구분짓지만 + 대문자로 시작 => 생성자 함수, 클래스명으로 주요 사용

//  문제 1. num 1과 num 2를 선언하고 각각 20, 30을 할당해준다.

var num_1 = 20;
var num_2 = 30;
var result02 = num_1 + num_2;

// 문제 3. num1과 num2의 값을 바꿔서 할당
// num2 값을 임시로 저장할 변수 temp 선언
var temp;
temp = num_2;
num_2 = num_1;
num_1 = temp;

console.log("result02 : ", result02);
console.log(num_1, num_2);
