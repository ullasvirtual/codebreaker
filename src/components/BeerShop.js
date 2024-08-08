import PropTypes from "prop-types";

const BeerShop = ({ className = "" }) => {
  return (
    <div
      className={`w-full relative rounded-61xl bg-orange overflow-hidden flex flex-col items-start justify-start pt-[72px] pb-[163px] pl-16 pr-5 box-border gap-6 leading-[normal] tracking-[normal] text-left text-5xl text-black font-desktop-btn-text-18pt mq1150:pl-8 mq1150:box-border ${className}`}
    >
      <img
        className="w-[2009.6px] h-[1343px] absolute !m-[0] bottom-[-890px] left-[-395px]"
        alt=""
        src="/group-2.svg"
      />
      <section className="w-[1062px] relative text-101xl leading-[80%] uppercase font-bold font-desktop-btn-text-18pt text-black text-left inline-block max-w-full z-[1] mq450:text-11xl mq450:leading-[38px] mq1050:text-29xl mq1050:leading-[58px]">
        This one’s for the taste chasers and barrel raiders
      </section>
      <div className="w-[577px] relative leading-[29px] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[23px]">{`Independent & brewed in the UK`}</div>
      <button className="cursor-pointer [border:none] py-2 px-6 bg-white rounded-980xl flex flex-row items-start justify-start gap-2 z-[1]">
        <img className="h-6 w-6 relative" alt="" src="/arrowudownright.svg" />
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <b className="h-3.5 relative text-lg leading-[100%] uppercase inline-block font-desktop-btn-text-18pt text-black text-left shrink-0 min-w-[38px]">
            shop
          </b>
        </div>
      </button>
    </div>
  );
};

BeerShop.propTypes = {
  className: PropTypes.string,
};

export default BeerShop;

