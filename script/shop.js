const prices = document.querySelectorAll(".item-price");
const valueBtn = document.querySelectorAll("button");
const priceRSD = [
  "600,00 RSD",
  "750,00 RSD",
  "750,00 RSD",
  "700,00 RSD",
  "800,00 RSD",
  "1450,00 RSD",
];
const priceEUR = ["€5,00", "€6,00", "€6,00", "€5,50", "€6,50", "€12,00"];
const priceUSD = ["$6,00", "$7,50", "$7,50", "$7,00", "$8,00", "$14,50"];

const change = (event) => {
  valueBtn.forEach((button) => {
    button.classList.remove("button-active");
  });
  event.target.classList.add("button-active");
  switch (event.target.innerHTML) {
    case "RSD":
      for (i = 0; i < prices.length; i++) {
        prices[i].innerHTML = priceRSD[i];
      }
      break;
    case "EUR":
      for (i = 0; i < prices.length; i++) {
        prices[i].innerHTML = priceEUR[i];
      }
      break;
    case "USD":
      for (i = 0; i < prices.length; i++) {
        prices[i].innerHTML = priceUSD[i];
      }
      break;
  }
};

for (i = 0; i < valueBtn.length; i++) {
  valueBtn[i].addEventListener("click", change);
}
