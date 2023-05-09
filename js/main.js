const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slider__track");
const sliderItems = document.querySelectorAll(".slider__track .slider__item");
const sliderDirection = sliderTrack.getAttribute("data-direction");
const sliderSpeed = sliderTrack.getAttribute("data-speed");

function prepareSlider() {
  let trackSize =
    sliderDirection === "y" ? slider.offsetHeight + 80 : slider.offsetWidth;
  let duplicateSize = 0;
  const speed = (trackSize / sliderSpeed) * 1000;
  sliderItems.forEach((item) => {
    if (sliderDirection === "y") {
      duplicateSize = duplicateSize + item.offsetHeight;
    } else {
      duplicateSize = duplicateSize + item.offsetWidth;
    }

    if (duplicateSize < trackSize) {
      const node = item.cloneNode(true);
      sliderTrack.appendChild(node);
    }
  });

  console.log(trackSize, "trackSize");
  console.log(speed, "speed");
  sliderTrack.animate(
    [{ transform: `translate${sliderDirection}(-${trackSize}px)` }],
    {
      duration: speed,
      iterations: Infinity,
    }
  );
}

prepareSlider();
