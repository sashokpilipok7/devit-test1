const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

class Slider extends HTMLElement {
  constructor() {
    super();
  }

  render(height, width, withDuplicate) {
    const sliderTrack = this.querySelector(".slider__track");
    const sliderItems = sliderTrack.querySelectorAll(".slider__item");
    const sliderDirection = sliderTrack.getAttribute("data-direction");
    const sliderSpeed = sliderTrack.getAttribute("data-speed");

    let viewSize = sliderDirection === "y" ? height : width;
    let trackSize =
      sliderDirection === "y"
        ? sliderTrack.offsetHeight - 80
        : sliderTrack.offsetWidth;
    let moveSize = trackSize - viewSize;
    let duplicateSize = 0;
    let speed = (trackSize / Number(sliderSpeed)) * 1000;

    if (withDuplicate) {
      sliderItems.forEach((item) => {
        if (sliderDirection === "y") {
          duplicateSize = duplicateSize + item.offsetHeight;
        } else {
          duplicateSize = duplicateSize + item.offsetWidth;
        }

        if (duplicateSize < viewSize) {
          const node = item.cloneNode(true);
          sliderTrack.appendChild(node);
        }
      });
    }
    console.log(moveSize, "moveSize");
    sliderTrack.animate(
      [
        { transform: `translate${sliderDirection}(0px)` },
        {
          transform: `translate${sliderDirection}(-${moveSize}px)`,
        },
      ],
      {
        duration: speed,
        iterations: Infinity,
      }
    );
  }

  connectedCallback() {
    this.render(this.offsetHeight, this.offsetWidth, true);

    const resizeObserver = new ResizeObserver((entries) => {
      console.log("size changed", this);
      const newSize = entries[0].contentBoxSize[0];
      const newHeight = newSize.blockSize.toFixed(2);
      const newWidth = newSize.inlineSize.toFixed(2);

      this.render(newHeight, newWidth, false);
    });
    resizeObserver.observe(this);
  }
}

customElements.define("web-slider", Slider);
