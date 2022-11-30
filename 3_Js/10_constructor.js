/*
    생성자(Constructor) 함수 : 
        - 객체의 형태를 미리 작성해놓고 필요할 때 객체를 생성하는 함수.
        => 제품의 틀과 역할.
        => 생성자 함수를 통해서 생성된 객체를 인스턴스(Instance)라고 한다. => 메모리에 실재하는 데이터.
        => this를 통해 프로퍼티 할당을 하면 함수가 생성자로 바뀐다.
        => instance를 생성할 때는 new 키워드와 함께 생성자 함수를 실행하면 된다. 
        => prototype 을 통해서 메서드나 프로퍼티를 상속할 수 있다. 
            => instance에는 없지만 상속받는 메서드 및 프로퍼티를 사용할 수 있다.
            => 메모리를 낭비하지 않는다. > function 기능이 콘솔에 찍히지 않는다. 
        => prototype이 안붙으면 그냥 그대로 사용
        => prototype은 instance를 통해서만 부를 수 있다.
        => 생성자를 통해서 실행하는 메서드는 정적 메서드(static Method)라고 한다.
*/

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.introduce = function () {
  console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
};

let user = new User("seok", 30);
let user03 = new User("minsu", 32);

console.log(Array.isArray(user));

console.log(user, user03); // return값이 없어서 undefined가 나옴
user.introduce();

let user01 = {
  name: "seok",
  age: 30,
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

let user02 = {
  name: "minsu",
  age: 32,
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

user01.introduce();
user02.introduce();

/* 
    클래스(class)
        - 생성자 함수와 동일한 역할을 한다.
            => 결국은 프로토타입 기반으로 동작한다. 
            => 그냥 문법적으로 클래스 기반 언어처럼 사용할 수 있게 해주는 것이다. 
            => 문법적 설탕(Syntax Sugar)
        - constructor를 통해서 초기화를 진행할 수 있다. 
            => 전달해야 하는 초기값은 constructor( ) > 매개 변수로 전달받을 수 있다. 
            => 초기화할 값이 없다면 constructor을 생략할 수 있다.
        - new 없이 호출하면 오류가 발생한다. 
        - extends를 통해 상속 받을 수 있다. 
            => 상속하는 클래스를 슈퍼 클래스, 상속받는 클래스를 서브 클래스라고 한다. 
        - 서브(하위) 클래스에 초기적으로 초기화할 값이 있다면 먼저 super(상위 클래스)의 constructor를 호출해야 한다.
            => super를 통해 상위클래스의 초기화값을 전달하고 추가적으로 값을 초기화하면 된다.  
*/

class Animal {
  constructor(legs) {
    this.legs = legs;
  }
}

let animal = new Animal(4);
//console.log(animal.legs);

class Dog extends Animal {
  constructor(legs, color) {
    super(4); // legs도 가능
    this.color = color;
  }
  // 인스턴스 메서드 => 무조건 함축표현으로 작성해야 한다.
  bow() {
    console.log("멍멍!");
  }
  static isDog(obj) {
    // instanceof : 특정 생성자의 instance가 맞는지 true, false를 반환한다.
    console.log(obj instanceof dog);
  }
}
// 정적 메서드 => 메서드 앞에 static 키워드를 붙인다.

let dog = new Dog("black");
console.log(dog);
console.log(dog.legs);
dog.bow();

/* Animal을 상속받는 cat 클래스 만들어보기 */

class Cat extends Animal {
  constructor(species) {
    super(4);
    this.species = species;
  }
  meow() {
    console.log("냐옹!");
  }
}

let cat = new Cat("Korean Short hair");
console.log(cat);
cat.meow();
