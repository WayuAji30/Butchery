document
  .getElementById("btn-tambah-produk")
  .addEventListener("click", function () {
    // Menghilangkan elemen flex dan items-center di bagian form
    var formElement = document
      .getElementById("varian-plus")
      .querySelector("form");
    formElement.style.display = "block";
    formElement.style.alignItems = "initial";

    // Menghilangkan button tambah varian
    this.style.display = "none";

    // Membuka elemen input dan label yang tersembunyi
    var hiddenInputs = formElement.querySelectorAll(
      "input[hidden], label[hidden]"
    );
    hiddenInputs.forEach(function (element) {
      element.removeAttribute("hidden");
    });
  });
