const time = document.querySelector("#time")

function clock() {
   const date = new Date();
   const month = date.getMonth();
   const day = date.getDate();
   const week = date.getDay();  //요일
   const weekName = ["일","월","화","수","목","금","토",]
   const hours = date.getHours();
   const minutes = String(date.getMinutes()).padStart(2,0);

   time.innerText = `${month+1}월 ${day}일 (${weekName[week]}) ${ (hours >= 0 && hours <= 11) ? "오전" : "오후" } ${(hours === 0 ? 12 : hours)} : ${minutes}`
}
clock();
setInterval(clock, 1000);