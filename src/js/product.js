document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen-elemen HTML yang diperlukan
  const lowButton = document.getElementById("low");
  const midButton = document.getElementById("mid");
  const highButton = document.getElementById("high");
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("mines");
  const valueProduct = document.getElementById("value-product");
  const itemWeight = document.getElementById("item-weight");
  const totalValue = document.getElementById("total-value");
  const valueView = document.getElementById("value-view");

  // Mendefinisikan harga awal
  let currentPrice = 99000;
  let currentWeight = "250gr";

  // Menetapkan nilai awal pada elemen-elemen HTML
  valueProduct.innerText = "1";
  itemWeight.innerText = currentWeight;
  totalValue.innerText = currentPrice.toLocaleString("id-ID");
  valueView.innerText = currentPrice.toLocaleString("id-ID");

  // Menangani klik pada tombol berat
  function handleWeightButtonClick(weight, price) {
    return function () {
      currentPrice = price;
      currentWeight = weight;
      itemWeight.innerText = weight;
      totalValue.innerText = currentPrice.toLocaleString("id-ID");
      valueView.innerText = currentPrice.toLocaleString("id-ID");
      valueProduct.innerText = "1";
    };
  }

  lowButton.addEventListener("click", handleWeightButtonClick("250gr", 99000));
  midButton.addEventListener("click", handleWeightButtonClick("500gr", 150000));
  highButton.addEventListener("click", handleWeightButtonClick("1kg", 200000));

  // Menangani klik pada tombol plus
  plusButton.addEventListener("click", function () {
    valueProduct.innerText = (parseInt(valueProduct.innerText) + 1).toString();
    totalValue.innerText = (
      currentPrice * parseInt(valueProduct.innerText)
    ).toLocaleString("id-ID");
  });

  // Menangani klik pada tombol minus
  minusButton.addEventListener("click", function () {
    if (parseInt(valueProduct.innerText) > 1) {
      valueProduct.innerText = (
        parseInt(valueProduct.innerText) - 1
      ).toString();
      totalValue.innerText = (
        currentPrice * parseInt(valueProduct.innerText)
      ).toLocaleString("id-ID");
    }
  });
});
