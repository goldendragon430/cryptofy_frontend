import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Carousel() {
  return (
    <OwlCarousel items={1} nav autoPlay={true}>
      <div className="flex flex-col items-baseline justify-center gap-3">
        <p className="text-md mb-5 font-light text-[#535a70] lg:text-xl">
          Brook presents your services with flexible, convenient and cdpose
          layouts. You can select your favorite layouts &amp; elements for cular
          ts with unlimited ustomization possibilities. Pixel-perfect
          replica;ition of thei designers ijtls intended csents your se.
        </p>
        <span className="flex items-baseline justify-center gap-3">
          <h1 className="text-2xl">JHON SMITH</h1>
          <p className="text-md text-[#535a70]">Gym trainer</p>
        </span>
      </div>
      <div className="flex flex-col items-baseline justify-center gap-3">
        <p className="text-md mb-5 font-light text-[#535a70] lg:text-lg">
          Brook presents your services with flexible, convenient and cdpose
          layouts. You can select your favorite layouts &amp; elements for cular
          ts with unlimited ustomization possibilities. Pixel-perfect
          replica;ition of thei designers ijtls intended csents your se.
        </p>
        <span className="flex items-baseline justify-center gap-3">
          <h1 className="text-2xl">JHON SMITH</h1>
          <p className="text-md text-[#535a70]">Gym trainer</p>
        </span>
      </div>
      <div className="flex flex-col items-baseline justify-center gap-3">
        <p className="text-md mb-5 font-light text-[#535a70] lg:text-lg">
          Brook presents your services with flexible, convenient and cdpose
          layouts. You can select your favorite layouts &amp; elements for cular
          ts with unlimited ustomization possibilities. Pixel-perfect
          replica;ition of thei designers ijtls intended csents your se.
        </p>
        <span className="flex items-baseline justify-center gap-3">
          <h1 className="text-2xl">JHON SMITH</h1>
          <p className="text-md text-[#535a70]">Gym trainer</p>
        </span>
      </div>
    </OwlCarousel>
  );
}
