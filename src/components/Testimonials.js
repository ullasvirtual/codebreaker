import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ className = "" }) => {
  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    arrows: false, // Show navigation arrows
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[88.2px] box-border max-w-full text-center text-101xl text-black font-desktop-h2-120pt mq1125:pb-[57px] mq1125:box-border mq800:pb-[37px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <div className="self-stretch bg-orange overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-40 box-border relative gap-20 min-h-[830px] max-w-full z-[1] mt-[-1px] mq450:gap-5 mq800:gap-10 mq800:pb-[104px] mq800:box-border">
          <div className="w-[1320px] flex flex-col items-start justify-start py-0 px-5 box-border gap-20 max-w-full mq450:gap-5 mq800:gap-10">
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-8 max-w-full mq450:gap-4">
              <div className="w-[843px] flex flex-col items-center justify-start gap-5 max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit leading-[80%] uppercase font-bold font-[inherit] mq450:text-11xl mq450:leading-[38px] mq800:text-29xl mq800:leading-[58px]">
                  award winning beer
                </h1>
                <div className="flex flex-row items-start justify-center py-0 px-5 box-border gap-3 max-w-full text-lg mq1125:flex-wrap">
                  <b className="relative leading-[100%] uppercase">
                    ‘my new favourite beer’
                  </b>
                  <img
                    className="h-4 w-px relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="relative leading-[100%] uppercase">
                    ‘everyone loved it’
                  </b>
                  <img
                    className="h-4 w-px relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="relative leading-[100%] uppercase inline-block min-w-[118px]">
                    ‘just delicious’
                  </b>
                  <img
                    className="h-4 w-px relative"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="relative leading-[100%] uppercase">
                    ‘so delicious and thirst quenching’
                  </b>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-2 px-6 bg-white rounded-980xl flex flex-row items-center justify-center gap-2 hover:bg-gainsboro">
                <img
                  className="h-6 w-6 relative"
                  alt=""
                  src="/arrowudownright.svg"
                />
                <b className="h-3.5 relative text-lg leading-[100%] uppercase inline-block font-desktop-h2-120pt text-black text-left min-w-[64px]">
                  Reviews
                </b>
              </button>
            </div>
            <div className="w-full overflow-hidden">
              <Slider {...sliderSettings}>
                <div className="w-[548px] rounded-xl bg-light-orange border-black border-r-[1px] border-solid border-black border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-6 px-[23px] pb-[22px] max-w-full">
                  <h1 className="m-0 flex-1 relative text-[34px] leading-[90%] uppercase font-bold  inline-block max-w-full mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
                    gold, 2023 european beer challenge
                  </h1>
                </div>
                <div className="w-[548px] rounded-xl bg-light-orange border-black border-r-[1px] border-solid border-black border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-6 px-[23px] pb-[22px] max-w-full">
                  <h1 className="m-0 flex-1 relative text-[34px] leading-[90%] uppercase font-bold  inline-block max-w-full mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
                    Silver, 2023 london beer competition
                  </h1>
                </div>
                <div className="w-[548px] rounded-xl bg-light-orange border-black border-r-[1px] border-solid border-black border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-6 px-[23px] pb-[22px] max-w-full">
                  <h1 className="m-0 flex-1 relative text-[34px] leading-[90%] uppercase font-bold  inline-block max-w-full mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
                    world beer awards, 2023, bronze medal
                  </h1>
                </div>
                <div className="w-[548px] rounded-xl bg-light-orange border-black border-r-[1px] border-solid border-black border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-6 px-[23px] pb-[22px] max-w-full">
                  <h1 className="m-0 flex-1 relative text-[34px] leading-[90%] uppercase font-bold  inline-block max-w-full mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
                    gold, 2021 international beer challenge
                  </h1>
                </div>
                <div className="w-[548px] rounded-xl bg-light-orange border-black border-r-[1px] border-solid border-black border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-6 px-[23px] pb-[22px] max-w-full">
                  <h1 className="m-0 flex-1 relative text-[34px] leading-[90%] uppercase font-bold  inline-block max-w-full mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
                    gold, 2023 european beer challenge
                  </h1>
                </div>
                <div className="w-[548px] rounded-xl bg-light-orange border-black border-r-[1px] border-solid border-black border-b-[1px] border-solid box-border flex flex-row items-center justify-center pt-6 px-[23px] pb-[22px] max-w-full">
                  <h1 className="m-0 flex-1 relative text-[34px] leading-[90%] uppercase font-bold  inline-block max-w-full mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
                    Silver, 2023 london beer competition
                  </h1>
                </div>
              </Slider>
            </div>
            <img
              className="w-[449.5px] h-[71.82%] absolute !m-[0] top-[-6.29%] bottom-[34.47%] left-[calc(50%_+_410.3px)] max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/group-41.svg"
            />
            <img
              className="w-[449.5px] h-[71.82%] absolute !m-[0] top-[-6.29%] bottom-[34.47%] left-[calc(50%_-_859px)] max-h-full object-contain z-[1]"
              alt=""
              src="/group-42@2x.png"
            />
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2] mt-[-1px]"
          alt=""
          src="/vector-1.svg"
        />
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
