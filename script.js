const btn = document.getElementById("btn");
const spans = document.getElementsByTagName("span");
const modal = document.querySelector("#modal");

btn.addEventListener("click", ()=>
{
  setTimeout(() => {
    modal.showModal();
  }, 1400);
})


btn.onclick = function () {
  for(span of spans) {
    span.classList.add("anim");
  }
}

  setTimeout(function() {
    const message = document.getElementById('result');
    message.innerHTML = "Abrazo enviado!"
  }, 6200);
  setTimeout(function() {
    const message = document.getElementById('state-message');
    message.innerHTML = "&nbsp;"
  }, 6000);


