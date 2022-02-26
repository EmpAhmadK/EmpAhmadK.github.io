/* JAVASCRIPT / جاۏاکسريڤ‌ت */

// Modul melekat

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
    /* document.getElementById("melekat").classList.add("lekat");
    document.getElementById("melekat-dalam").classList.add("lekat-sub");
    document.getElementById("melekat-gambar").classList.add("lekat-gambar");
    document.getElementById("melekat-kotak").classList.add("lekat-kotak");
    document.getElementById("melekat-tajuk").classList.add("lekat-tajuk");
    document.getElementById("subtajuk").classList.add("subtajuk-pemanjangan"); */
    document.getElementById("pengepala-terapung").classList.add("apung");
  } else {
    /* document.getElementById("melekat").classList.remove("lekat");
    document.getElementById("melekat-dalam").classList.remove("lekat-sub");
    document.getElementById("melekat-gambar").classList.remove("lekat-gambar");
    document.getElementById("melekat-kotak").classList.remove("lekat-kotak");
    document.getElementById("melekat-tajuk").classList.remove("lekat-tajuk");
    document.getElementById("subtajuk").classList.remove("subtajuk-pemanjangan"); */
    document.getElementById("pengepala-terapung").classList.remove("apung");
  }
}