// for 문을 이용하여 2단~9단까지의 구구단을 아래와 같이 출력하기

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i * j);
  }
}

// 로또 번호 생성 프로그램 만들기
// 1부터 45까지 중복되지 않는 난수 9개를 컬렉션 객체를 사용하여 저장 및 오름차순 정렬 수행
// 별도의 ArrayList 객체(thisWeekLotto)를 사용하여 35, 21, 29, 10, , 44를 저장 및 오름차순 정렬 수

ArrayList = [35, 21, 29, 10, 3, 44];
for (var i = 2; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    console.log(` ${[i]} * ${j} = `, i * j);
  }
}
