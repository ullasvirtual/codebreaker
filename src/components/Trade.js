import PropTypes from "prop-types";

const Trade = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-101xl text-black font-desktop-h2-120pt ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector.svg"
      />
      <div className="self-stretch bg-orange overflow-hidden flex flex-col items-start justify-start pt-[130.4px] px-0 pb-[130.7px] box-border relative gap-10 min-h-[1040px] max-w-full z-[1] mt-[-1px] mq800:gap-5 mq800:pb-[85px] mq800:box-border">
        <img
          className="w-[142.01%] h-[74.89%] absolute !m-[0] top-[12.54%] right-[-21.03%] bottom-[12.57%] left-[-20.97%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-44.svg"
        />
        <div className="w-[753px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-6 max-w-full z-[1]">
          <h1 className="m-0 self-stretch h-24 relative text-inherit leading-[80%] uppercase font-bold font-[inherit] inline-block ml-20 mb-6 mq450:text-11xl mq450:leading-[38px] mq800:text-29xl mq800:leading-[58px]">
            UNRAVEL TASTE
          </h1>
          <h1 className=" self-stretch relative text-25xl leading-[90%] uppercase font-bold font-[inherit] ml-20 mt-30 mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
            Infusing the copper with Citra and Azacca at flameout, then double
            dry-hopped with El Dorado, Citra and Azacca for flavour and haze
            before transferring to conditioning tank.
          </h1>
        </div>
        <img
          className="w-[1062px] relative max-h-full max-w-full z-[1] ml-20"
          loading="lazy"
          alt=""
          src="/vector-8.svg"
        />


        <button className="cursor-pointer [border:none] py-2 px-6 bg-white rounded-980xl flex flex-row items-center justify-center gap-2 z-[1] hover:bg-gainsboro ml-20">
          <img className="h-6 w-6 relative" alt="" src="/arrowudownright.svg" />
          <b className="h-3.5 relative text-lg leading-[100%] uppercase inline-block font-desktop-h2-120pt text-black text-left min-w-[45px]">
            trade
          </b>
        </button>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2] mt-[-1px]"
        alt=""
        src="/vector-1.svg"
      />
    </div>
  );
};

Trade.propTypes = {
  className: PropTypes.string,
};

export default Trade;
