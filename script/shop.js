const prices = document.querySelectorAll(".item-price");
const valueBtn = document.querySelectorAll("button");

const change = (event) => {
  switch (event.target) {
    case valueBtn[0]:
      valueBtn[1].classList.remove("button-active");
      valueBtn[2].classList.remove("button-active");
      valueBtn[0].classList.add("button-active");
      break;
    case valueBtn[1]:
      valueBtn[1].classList.add("button-active");
      valueBtn[2].classList.remove("button-active");
      valueBtn[0].classList.remove("button-active");
      break;
    case valueBtn[2]:
      valueBtn[1].classList.remove("button-active");
      valueBtn[2].classList.add("button-active");
      valueBtn[0].classList.remove("button-active");
      break;
  }
};

for (i = 0; i < valueBtn.length; i++) {
  valueBtn[i].addEventListener("click", change);
}
