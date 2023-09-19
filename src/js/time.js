function updateCountdown() {
  var now = new Date(); // Mendapatkan waktu saat ini
  var endTime = new Date(now); // Membuat salinan dari waktu saat ini

  // Set endTime ke akhir hari
  endTime.setHours(23, 59, 59, 999);

  var timeDifference = endTime - now; // Menghitung selisih waktu

  var hours = Math.floor(timeDifference / (1000 * 60 * 60)); // Menghitung jam
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Menghitung menit
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Menghitung detik

  // Mengubah format waktu jika jam, menit, atau detik kurang dari 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Memperbarui elemen dengan ID "hour", "minute", dan "second"
  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("second").textContent = seconds;
}

// Memanggil fungsi updateCountdown setiap detik
setInterval(updateCountdown, 1000);
