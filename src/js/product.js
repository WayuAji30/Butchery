document.addEventListener("DOMContentLoaded", function () {
  // Menyimpan harga dan berat untuk setiap opsi
  const options = {
    low: { berat: "250gr", harga: 99000 },
    mid: { berat: "500gr", harga: 150000 },
    high: { berat: "1kg", harga: 200000 },
  };

  // Menginisialisasi nilai awal
  let selectedOption = "low";
  let jumlahProduk = 1;

  // Fungsi untuk mengupdate tampilan
  function updateView() {
    // Mengupdate berat yang ditampilkan
    document.getElementById("item-weight").textContent =
      options[selectedOption].berat;

    // Menghitung total harga
    const totalHarga = options[selectedOption].harga * jumlahProduk;
    document.getElementById("total-value").textContent =
      totalHarga.toLocaleString();
  }

  // Mengubah opsi ketika button berat diklik
  document.getElementById("low").addEventListener("click", function () {
    selectedOption = "low";
    updateView();
  });

  document.getElementById("mid").addEventListener("click", function () {
    selectedOption = "mid";
    updateView();
  });

  document.getElementById("high").addEventListener("click", function () {
    selectedOption = "high";
    updateView();
  });

  // Mengubah jumlah produk saat tombol plus atau minus diklik
  document.getElementById("plus").addEventListener("click", function () {
    jumlahProduk++;
    document.getElementById("value-product").textContent = jumlahProduk;
    updateView();
  });

  document.getElementById("mines").addEventListener("click", function () {
    if (jumlahProduk > 1) {
      jumlahProduk--;
      document.getElementById("value-product").textContent = jumlahProduk;
      updateView();
    }
  });
});
