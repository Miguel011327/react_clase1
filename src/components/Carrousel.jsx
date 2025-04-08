import imagen1 from "../assets/isaac.jpeg";
import imagen2 from "../assets/PequeñoFantasma.jpg";
import imagen3 from "../assets/Sekiro.jpg";
import imagen4 from "../assets/Prisionero.jpg";
import imagen5 from "../assets/Arthur.jpg";

export const Carrousel = () => {
  return (
    <>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={imagen1} className="h-[24rem]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={imagen2} className="h-[24rem]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={imagen3} className="h-[24rem]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={imagen4} className="h-[24rem]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full flex justify-center"
        >
          <img src={imagen5} className="h-[24rem]" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
