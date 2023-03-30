
// Acik ve kapali id olan elemanları cagir
const acLink = document.getElementById("acik");
const kapatLink = document.getElementById("kapali");
const lamba = document.getElementById("lamba");

// Açık fonksiyonunu ekle
acLink.addEventListener("click", function() {
  lamba.src = "images/lamba_acik.jpg";
});

// Kapalı fonksiyonunu ekle
kapatLink.addEventListener("click", function() {
  lamba.src = "images/lamba_kapali.jpg";
});
