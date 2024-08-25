import a from "../../src/assets/Slider-Images/1.jpeg";
import b from "../../src/assets/Slider-Images/2.jpeg";
import c from "../../src/assets/Slider-Images/3.jpg";
import d from "../../src/assets/Slider-Images/4.jpg";

const Header = () => {
	return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img
        src={d}
        className="w-full h-60 object-cover"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide2" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
      <img
        src={a}
        className="w-full h-60 object-cover"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide3" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
      <img
        src={b}
        className="w-full h-60 object-cover"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide4" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
      <img
        src={c}
        className="w-full h-60 object-cover"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide1" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  </div>
  
	);
};

export default Header;