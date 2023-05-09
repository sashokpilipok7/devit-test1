const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

// const slider = document.querySelector(".slider");
// const sliderTrack = document.querySelector(".slider__track");
// const sliderItems = document.querySelectorAll(".slider__track .slider__item");
// const sliderDirection = sliderTrack.getAttribute("data-direction");
// const sliderSpeed = sliderTrack.getAttribute("data-speed");

// function prepareSlider(height, width) {
//   let trackSize = sliderDirection === "y" ? height + 85 : width;
//   let duplicateSize = 0;
//   let speed = (trackSize / Number(sliderSpeed)) * 1000;

//   sliderItems.forEach((item) => {
//     if (sliderDirection === "y") {
//       duplicateSize = duplicateSize + item.offsetHeight;
//     } else {
//       duplicateSize = duplicateSize + item.offsetWidth;
//     }

//     if (duplicateSize < trackSize) {
//       const node = item.cloneNode(true);
//       sliderTrack.appendChild(node);
//     }
//   });

//   console.log(trackSize, "trackSize");
//   console.log(speed, "speed");
//   sliderTrack.animate(
//     [{ transform: `translate${sliderDirection}(-${trackSize}px)` }],
//     {
//       duration: speed,
//       iterations: Infinity,
//     }
//   );
// }

// prepareSlider(slider.offsetHeight, slider.offsetWidth);

// Recalculate after resize
// const resizeObserver = new ResizeObserver((entries) => {
//   const newSize = entries[0].contentBoxSize[0];
//   const newHeight = newSize.blockSize.toFixed(2);
//   const newWidth = newSize.inlineSize.toFixed(2);

//   prepareSlider(Number(newHeight), Number(newWidth));
// });
// resizeObserver.observe(slider);

class Slider extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("sLIDER WEB COMPONENT AWS CREATED!");
    console.log(this.offsetHeight, "offsetHeight");

    const sliderTrack = this.querySelector(".slider__track");
    const sliderItems = sliderTrack.querySelectorAll(".slider__item");
    const sliderDirection = sliderTrack.getAttribute("data-direction");
    const sliderSpeed = sliderTrack.getAttribute("data-speed");

    let trackSize =
      sliderDirection === "y" ? this.offsetHeight + 75 : this.offsetWidth;
    let duplicateSize = 0;
    let speed = (trackSize / Number(sliderSpeed)) * 1000;

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

    sliderTrack.animate(
      [{ transform: `translate${sliderDirection}(-${trackSize}px)` }],
      {
        duration: speed,
        iterations: Infinity,
      }
    );
  }
}

customElements.define("web-slider", Slider);
