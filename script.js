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
