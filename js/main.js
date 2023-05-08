const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const sliderTrack = document.querySelector(".slider__track");
const sliderItems = document.querySelectorAll(".slider__track .slider__item");
const sliderDirection = sliderTrack.getAttribute("data-direction");
const sliderSpeed = sliderTrack.getAttribute("data-speed");

function prepareSlider() {
  let trackSize = 0;
  sliderItems.forEach((item) => {
    if (sliderDirection === "y") {
      trackSize = trackSize + item.offsetHeight;
    } else {
      trackSize = trackSize + item.offsetWidth;
    }

    const node = item.cloneNode(true);
    sliderTrack.appendChild(node);
  });

  console.log(trackSize, "trackSize");

  sliderTrack.animate(
    [{ transform: `translate${sliderDirection}(-${trackSize + 80}px)` }],
    {
      duration: Number(sliderSpeed),
      iterations: Infinity,
    }
  );
}

prepareSlider();
