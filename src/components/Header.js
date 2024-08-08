import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = ({ className = "" }) => {
  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div
      className={`flex-1 bg-black border-white border-b-[1px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[18px] gap-5 max-w-full z-[1] text-center text-lg font-desktop-h2-120pt ${className}`}
    >
      {/* Slider Section */}
      <div className="self-stretch bg-orange py-3 px-0">
        <Slider {...settings} className="w-full">
          {Array(5).fill().map((_, index) => (
            <div key={index} className="flex items-center justify-center px-4">
              <b className="relative leading-[14px] uppercase text-black">
                a cracking unfiltered tropical ipa
              </b>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Header Content */}
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-20 box-border max-w-full gap-5 mq800:flex-wrap mq800:pl-10 mq800:pr-10 mq800:box-border">
        <img
          className="h-11 w-[215.5px] relative"
          loading="lazy"
          alt=""
          src="/group-47.svg"
        />
        <div className="h-[38px] w-[352px] flex flex-row items-center justify-start py-0 px-0 box-border gap-8 max-w-full mq450:gap-4">
          <nav className="m-0 flex-1 flex flex-row items-start justify-between gap-5 text-center text-lg text-white font-desktop-h2-120pt">
            <b className="relative leading-[14px] uppercase inline-block min-w-[65px]">
              The beer
            </b>
            <b className="relative leading-[14px] uppercase inline-block min-w-[45px]">
              Trade
            </b>
            <b className="relative leading-[14px] uppercase inline-block min-w-[38px]">
              shop
            </b>
          </nav>
          <button className="cursor-pointer border-orange border-[1px] border-solid py-[11px] px-[19px] bg-[transparent] rounded-980xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-chocolate-200 hover:border-chocolate-100 hover:border-[1px] hover:border-solid hover:box-border">
            <b className="relative text-lg leading-[14px] uppercase inline-block font-desktop-h2-120pt text-white text-center min-w-[84px]">
              Contact us
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
