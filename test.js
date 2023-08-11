let boxes = document.querySelector(".boxes");
let textid = document.querySelector("#textid");
let submit = document.querySelector("#submitt");

submit.addEventListener("click", function (eo) {
  if (textid.value != "") {
    eo.preventDefault();
    let result = `<div class= "todolist"> <p> ${textid.value} </p> </div>`;
    boxes.innerHTML += result;
    Delete()
  }
});

function Delete() {
  textid.value = "";
}
