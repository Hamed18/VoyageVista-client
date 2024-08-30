import { Link } from "react-router-dom";
import a from "../../src/assets/Slider-Images/1.jpeg";
import b from "../../src/assets/Slider-Images/2.jpeg";
import c from "../../src/assets/Slider-Images/3.jpg";
import d from "../../src/assets/Slider-Images/4.jpg";

const Header = () => {
  const title = "Discover Your Next Adventure";
  const sub_title = "Explore Hidden Gems, Breathtaking Landscapes, and Unforgettable Experiences Around the World";
	return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={a} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title}</h2>
                        <p>{sub_title}</p>
                        <div>
                            <Link to='/allspots'>
                               <button className="btn btn-primary mr-5">Discover More</button>
                            </Link>
                            <Link to='/mylist'>
                               <button className="btn btn-outline btn-secondary">Your List</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={b} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title}</h2>
                        <p>{sub_title}</p>
                        <div>
                            <Link to='/allspots'>
                               <button className="btn btn-primary mr-5">Discover More</button>
                            </Link>
                            <Link to='/mylist'>
                               <button className="btn btn-outline btn-secondary">Your List</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={c} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title}</h2>
                        <p>{sub_title}</p>
                        <div>
                            <Link to='/allspots'>
                               <button className="btn btn-primary mr-5">Discover More</button>
                            </Link>
                            <Link to='/mylist'>
                               <button className="btn btn-outline btn-secondary">Your List</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={d} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>{title}</h2>
                        <p>{sub_title}</p>
                        <div>
                            <Link to='/allspots'>
                               <button className="btn btn-primary mr-5">Discover More</button>
                            </Link>
                            <Link to='/mylist'>
                               <button className="btn btn-outline btn-secondary">Your List</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
  
	);
};

export default Header;