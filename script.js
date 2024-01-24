const jumbo = document.querySelector(".jumbo");
const pilihan = document.querySelectorAll(".pilihan-tombol");
const icon = document.querySelectorAll(".pilihan-tombol img");

let simpanGambar;
let simpanIcon;

pilihan.forEach((pilihan) => {
  pilihan.addEventListener("click", function () {
    document.querySelector(".merah")?.classList.remove("merah"); //masih bingung di bagian "?"
    pilihan.classList.add("merah");
    // _________________________________________________________
    simpanGambar = pilihan.getAttribute("src");
    jumbo.style.backgroundImage = "url(" + simpanGambar + ")";
    // ________________________________________________________
  });
});

// ______________________________________________________________________________________________________
const scrollTombol = document.querySelector(".more");
const scrollPlace = document.querySelector("#bawah");

scrollTombol.addEventListener("click", function () {
  scrollPlace.scrollIntoView({ behavior: "smooth" }); //SCROLL SMOOTH
});

// _____________________________________________________________________________________________________
const tombol = document.querySelectorAll(".select");
const hovering = document.querySelectorAll(".keterangan");

tombol.forEach((a, b) => {
  a.addEventListener("mouseenter", function () {
    hovering.forEach((c, d) => {
      if (b === d) {
        c.classList.add("keterangan-hover");
      } else {
        c.classList.remove("keterangan-hover");
      }
    });
  });
  a.addEventListener("mouseleave", function () {
    hovering.forEach((hovering) => {
      hovering.classList.remove("keterangan-hover");
    });
  });
});
