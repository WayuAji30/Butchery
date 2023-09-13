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
    const price = 99000; // Harga per produk (misalnya 99.000)

    // Hitung total
    const total = value * price;

    // Perbarui tampilan nilai total
    totalValue.textContent = total.toLocaleString("id-ID"); // Format sebagai mata uang Indonesia
  }
});
