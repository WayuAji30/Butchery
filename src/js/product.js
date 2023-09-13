document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen-elemen yang diperlukan
  const plusButton = document.getElementById("plus");
  const minusButton = document.getElementById("mines");
  const valueProduct = document.getElementById("value-product");
  const totalValue = document.getElementById("total-value");

  // Tambahkan event listener ke tombol plus
  plusButton.addEventListener("click", function () {
    valueProduct.textContent = parseInt(valueProduct.textContent) + 1;
    updateTotal();
  });

  // Tambahkan event listener ke tombol minus
  minusButton.addEventListener("click", function () {
    if (parseInt(valueProduct.textContent) > 1) {
      valueProduct.textContent = parseInt(valueProduct.textContent) - 1;
      updateTotal();
    }
  });

  // Fungsi untuk memperbarui nilai total
  function updateTotal() {
    const value = parseInt(valueProduct.textContent);
    const price = 99000; // Harga per produk (misalnya 99.000) (DIAMBIL DARI DATABASE)

    // Hitung total
    const total = value * price;

    // Perbarui tampilan nilai total
    totalValue.textContent = total.toLocaleString("id-ID"); // Format sebagai mata uang Indonesia
  }
});

//
document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk mengubah nilai pada #item-weight
  function updateItemWeight(newValue) {
    document.getElementById("item-weight").textContent = newValue;
  }

  // Fungsi untuk mengubah nilai pada #total-value
  function updateTotalValue(newValue) {
    document.getElementById("total-value").textContent = newValue;
  }

  // Memanggil fungsi updateItemWeight dengan nilai awal
  updateItemWeight("250gr");

  // Mendapatkan tombol-tombol dengan id "low", "mid", dan "high"
  var lowButton = document.getElementById("low");
  var midButton = document.getElementById("mid");
  var highButton = document.getElementById("high");

  // Menambahkan event listener untuk setiap tombol
  lowButton.addEventListener("click", function () {
    updateItemWeight("250gr");
    updateTotalValue("99.000"); // Atur nilai sesuai dengan kebutuhan untuk tombol "low"
    document.getElementById("value-product").textContent = "1"; // Kembalikan nilai value-product ke 1
  });

  midButton.addEventListener("click", function () {
    updateItemWeight("500gr");
    updateTotalValue("150.000"); // Atur nilai sesuai dengan kebutuhan untuk tombol "mid"
    document.getElementById("value-product").textContent = "1"; // Kembalikan nilai value-product ke 1
  });

  highButton.addEventListener("click", function () {
    updateItemWeight("1kg");
    updateTotalValue("250.000"); // Atur nilai sesuai dengan kebutuhan untuk tombol "high"
    document.getElementById("value-product").textContent = "1"; // Kembalikan nilai value-product ke 1
  });
});
