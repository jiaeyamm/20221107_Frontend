let userList = [
  { name: "jiae", age: 28 },
  { name: "jiwon", age: 28 },
  { name: "youngjae", age: 31 },
  { name: "yeonju", age: 32 },
];

let userarr = userList.filter(function (user) {
  return user.age >= 30;
});

let result = userarr.map(function (user) {
  return user.name;
});

console.log(result);
