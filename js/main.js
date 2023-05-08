const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const sliderTrack = document.querySelector(".slider__track");
const sliderItems = document.querySelectorAll(".slider__track .slider__item");

console.log(sliderTrack, "sliderTrack");
console.log(sliderItems, "sliderItems");

function prepareSlider(direction, speed = 10) {
  let height = 0;
  let width = 0;
  let gap = 36;
  sliderItems.forEach((item) => {
    height = height + item.offsetHeight + gap;
  });

  console.log(height, "height");

  sliderTrack.animate(
    [
      { transform: " transform: translateY(000px);" },
      { transform: `translateY(-${860}px)` },
    ],
    {
      duration: 4000,
      iterations: Infinity,
    }
  );
}

prepareSlider();
