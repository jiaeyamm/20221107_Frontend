// 2번 버튼 클릭시 2번 아이템 보이게 처리하기
// 버튼가져오기, 버튼에 클릭 이벤트 바인딩하기

let btnList = document.querySelectorAll(".btnList li");

// 이벤트 위임을 이용하는 것이 좋다.
btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    document.querySelector(".slidelist").style.transform = `translate(${
      idx * -100
    }%)`;
  });
});

/* 
btnList[0].addEventListener("click", function () {
  document.querySelector(".slidelist").style.transform = "translate(0%)";
});
btnList[1].addEventListener("click", function () {
  document.querySelector(".slidelist").style.transform = "translate(-100%)";
});
btnList[2].addEventListener("click", function () {
  document.querySelector(".slidelist").style.transform = "translate(-200%)";
});
*/
