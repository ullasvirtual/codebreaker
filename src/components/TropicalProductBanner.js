import PropTypes from "prop-types";

const TropicalProductBanner = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-6 max-w-full text-left text-161xl text-orange font-desktop-h2-120pt ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <h1 className="m-0 flex-1 relative text-inherit leading-[80%] uppercase font-bold font-[inherit] inline-block max-w-full mq450:text-26xl mq450:leading-[58px] mq800:text-53xl mq800:leading-[86px]">
          <span>{`THE `}</span>
          <span className="text-white">TROPICAL</span>
          <span> CODE</span>
        </h1>
        <div className="h-[838.5px] w-[618.2px] !m-[0] absolute top-[-219px] right-[-547.2px] flex flex-row items-start justify-start z-[2]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[-0.1px] bottom-[0px]">
            <img
              className="absolute top-[329.3px] left-[190px] w-[428.3px] h-[509.2px] object-contain"
              loading="lazy"
              alt=""
              src="/cbbarrel-1@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[290px] h-[346.7px] object-contain z-[1]"
              alt=""
              src="/cbbarrel-2@2x.png"
            />
            <img
              className="absolute top-[95px] left-[458px] w-40 h-40 z-[3]"
              loading="lazy"
              alt=""
              src="/group-43.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[624px] flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-6 max-w-full text-5xl text-white">
        <div className="self-stretch relative leading-[120%] mq450:text-lgi mq450:leading-[23px]">
          Crack a tropical cipher with this thirst shattering 4.8% double
          dry-hopped sessionable New England IPA bursting with passion fruit,
          pineapple and mango.
        </div>
        <button className="cursor-pointer [border:none] py-2 px-6 bg-orange rounded-980xl flex flex-row items-start justify-start gap-2">
          <img className="h-6 w-6 relative" alt="" src="/arrowudownright.svg" />
          <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
            <b className="h-3.5 relative text-lg leading-[100%] uppercase inline-block font-desktop-h2-120pt text-black text-left shrink-0 min-w-[38px]">
              shop
            </b>
          </div>
        </button>
      </div>
      <div className="w-24 flex flex-row items-center justify-start gap-5">
        <img
          className="h-[116px] w-24 relative shrink-0"
          loading="lazy"
          alt=""
          src="/group-48.svg"
        />
        <img
          className="h-24 w-24 relative object-cover shrink-0"
          loading="lazy"
          alt=""
          src="/group-49@2x.png"
        />
      </div>
    </div>
  );
};

TropicalProductBanner.propTypes = {
  className: PropTypes.string,
};

export default TropicalProductBanner;
