import img1 from "./img/html.png";
import img2 from "./img/css.png";
import img3 from "./img/Ai.png";
import img4 from "./img/Ps.png";
import img5 from "./img/Ae.png";
import img6 from "./img/js.png";
import img7 from "./img/Figma.png";
import img8 from "./img/react.png";

const loop = () => {
  const slidesData = [
    { src: img1, description: "Description 1" },
    { src: img2, description: "Description 2" },
    { src: img3, description: "Description 3" },
    { src: img4, description: "Description 4" },
    { src: img5, description: "Description 5" },
    { src: img6, description: "Description 6" },
    { src: img7, description: "Description 7" },
    { src: img8, description: "Description 8" },
  ];

  const carouselTrack = document.querySelector(".carousel-track");

  const createSlide = ({ src, description }) => {
    const slideElement = document.createElement("div");
    slideElement.className = "slide";

    const imgElement = document.createElement("img");
    imgElement.src = src;
    imgElement.alt = description;

    const overlayElement = document.createElement("div");
    overlayElement.className = "overlay";
    overlayElement.textContent = description;

    slideElement.append(imgElement, overlayElement);

    return slideElement;
  };

  const populateCarouselTrack = (slides) => {
    const fragment = document.createDocumentFragment();
    slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

    // Duplicate slides to create a seamless loop effect
    slides.forEach((slide) => fragment.appendChild(createSlide(slide)));

    carouselTrack.appendChild(fragment);

    const slideWidth = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--slide-width"
      )
    );
    const gapWidth = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--gap-width")
    );
    const totalWidth = (slideWidth + gapWidth) * slides.length;
    const duplicatedTotalWidth = totalWidth * 2;
    const halfTotalWidth = duplicatedTotalWidth / 2;

    carouselTrack.style.setProperty("--total-width", `${halfTotalWidth}px`);

    const baseDuration = 40; // secondes | default = 40
    const baseWidth = 5000; // px | default = 5000
    const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

    carouselTrack.style.setProperty("--scroll-duration", `${scrollDuration}s`);
  };

  populateCarouselTrack(slidesData);
};

export default loop;
