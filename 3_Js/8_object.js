/* 
    객체(Object)
        - key-value 형태로 여러 데이터를 저장할 수 있다. 
*/

let user = {
  age: 28,
  name: {
    firstName: "jiae",
    lastName: "Myeong",
  },
};

//let obj = new Object();
//console.log(obj);

// 객체의 프로퍼티 값 참조
console.log(user.name);

// 객체의 프로퍼티 값 변경
user.age = 29;
console.log(user.age);

// 객체에 새로운 프로터피 생성
user.weight = 67;
console.log(user.weight);
console.log(user); // weight를 추가했더니 전체를 찍으면 weight도 추가 된 모습

// 객체에 없는 프로퍼티를 접근하면 undefined > undefined의 다른 키값을 참조하려고 하면 그 때 오류 발생.
// console.log(user.height); > undefined
// console.log(user.address.city); > 오류값 캔낫리드프로퍼티

console.log(user.name.firstName);

/* 
    메서드(Method) : 객체의 프로퍼티가 함수라면 메서드라고 부른다.
        => 객체.메서드()의 형식으로 호출(call)한다. 
*/

let dog = {
  age: 10,
  name: "coco",
  bow: function () {
    console.log("멍멍!");
  },
};

dog.bow(); // 함수기 때문에 콘솔창 필요 X

/*
    this 
    - 함수 내부에서 this를 참조하면 함수를 호출한 객체를 가리킨다. => bow 함수에서 this를 참조하면 dog를 가리킨다.
    - this를 활용하면 객체의 고유 정보를 이용하는 함수를 만들 수 있다.
        => 즉, 같은 함수지만 호출하는 객체마다 결과가 달라진다. 
    - 메서드가 화살표 함수라면 this 바인딩이 안 돼서 호출한 객체를 가리키지 않는다. 
        => this를 통해 참조할 값이 있다면 화살표 함수를 사용하면 안 된다.
*/

let user02 = {
  age: 30,
  name: "anne",
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
  },
};

//this가 바인딩 되는 대상이 바뀔 수 있다.
user02.introduce.call({ name: "song" });
user02.introduce();

// triangle 객체에 너비와 높이를 프로퍼티 지정하고, getArea 넓이를 구하는 method 만들기

let triangle = {
  width: 20,
  height: 40,
  getArea: function () {
    console.log((this.width * this.height) / 2);
  },
};

triangle.getArea();
