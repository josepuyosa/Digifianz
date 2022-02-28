const openModal = document.getElementById("btnModal");
const modal = document.querySelector(".popup");
const closeModal = document.querySelector(".popup-close-btn");
const overlay = document.querySelector(".overlay");
openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("popup--show");
  overlay.classList.add("overlay--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("popup--show");
  overlay.classList.remove("overlay--show");
});

// slider
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector(".items");

const end = () => {
  isDown = false;
  slider.classList.remove("active");
};

const start = (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const move = (e) => {
  if (!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = x - startX;
  slider.scrollLeft = scrollLeft - dist;
};

(() => {
  slider.addEventListener("mousedown", start);
  slider.addEventListener("touchstart", start);

  slider.addEventListener("mousemove", move);
  slider.addEventListener("touchmove", move);

  slider.addEventListener("mouseleave", end);
  slider.addEventListener("mouseup", end);
  slider.addEventListener("touchend", end);
})();
