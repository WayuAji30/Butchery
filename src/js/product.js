// Menaikan jumlah Product
const plus = document.querySelector("#plus"),
  mines = document.querySelector("#mines");
value = document.querySelector("#value-product");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  value.innerText = a;
  console.log(a);
});

mines.addEventListener("click", () => {
  if (a > 1) {
    a--;
    value.innerText = a;
  }
});
