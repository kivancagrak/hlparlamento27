/* ============================================================
   HAYDARPAŞA PARLAMENTO — Ortak Script
   - Mobil menü aç/kapat
   - Ana sayfa geri sayım (20 Mart 2027, 09:00 - İstanbul)
   - Footer yılı
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------------- Mobil Menü ---------------- */
  var menuBtn = document.querySelector(".menu-btn");
  var mobileNav = document.querySelector(".mobile-nav");

  function closeMenu() {
    document.body.classList.remove("nav-open");
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Menüyü aç");
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuBtn.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
    });
  }

  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------------- Geri Sayım ---------------- */
  var clockEl = document.getElementById("countdown");
  if (clockEl) {
    // 20 Mart 2027, 09:00 (GMT+3 - İstanbul)
    var target = new Date("2027-03-20T09:00:00+03:00").getTime();

    var elGun = document.getElementById("cd-gun");
    var elSaat = document.getElementById("cd-saat");
    var elDakika = document.getElementById("cd-dakika");
    var elSaniye = document.getElementById("cd-saniye");
    var elBitti = document.getElementById("cd-bitti");
    var elBoxes = document.getElementById("cd-boxes");

    function pad(n) {
      return n < 10 ? "0" + n : String(n);
    }

    function updateCountdown() {
      var now = new Date().getTime();
      var diff = target - now;

      if (diff <= 0) {
        if (elBoxes) elBoxes.style.display = "none";
        if (elBitti) elBitti.style.display = "block";
        return;
      }

      var gun = Math.floor(diff / (1000 * 60 * 60 * 24));
      var saat = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var dakika = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var saniye = Math.floor((diff % (1000 * 60)) / 1000);

      if (elGun) elGun.textContent = pad(gun);
      if (elSaat) elSaat.textContent = pad(saat);
      if (elDakika) elDakika.textContent = pad(dakika);
      if (elSaniye) elSaniye.textContent = pad(saniye);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---------------- Footer Yılı ---------------- */
  var yearEl = document.querySelectorAll(".year");
  yearEl.forEach(function (el) {
    el.textContent = "2027";
  });
});
