
// const giftCover = document.querySelector(".click");
// const bubbles = document.querySelector(".wishes");

// giftCover.addEventListener("click", showBubbles);

// function showBubbles () {
//   const isBoxClosed = bubbles.classList.contains("inactive");

//   if (!isBoxClosed) {
//     bubbles.classList.remove("inactive");
//   }
// }

const btn = document.getElementById("btn");
const spans = document.getElementsByTagName("span");

btn.onclick = function () {
  for(span of spans) {
    span.classList.add("anim");
  }
  setTimeout(function(){
    span.classlist.remove("anim");
  },500)
}