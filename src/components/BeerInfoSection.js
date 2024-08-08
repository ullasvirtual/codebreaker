import DetailsTitle from "./DetailsTitle";
import PropTypes from "prop-types";

const BeerInfoSection = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[120.2px] box-border gap-[100px] max-w-full text-center text-3xl text-white font-desktop-h2-120pt mq450:gap-[25px] mq800:gap-[50px] mq800:pb-[51px] mq800:box-border mq1350:pb-[78px] mq1350:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[174.3px] px-20 pb-44 box-border relative shrink-0 max-w-full mq800:pt-[113px] mq800:px-10 mq800:pb-[114px] mq800:box-border">
        <img
          className="h-full w-[1671.4px] !m-[0] absolute top-[0px] bottom-[0px] left-[-116px] max-h-full object-contain"
          loading="lazy"
          alt=""
          src="/frame-65342@2x.png"
        />
        <div className="flex-1 relative tracking-[0.1em] leading-[120%] uppercase inline-block shrink-0 max-w-full z-[1] mq450:text-lg mq450:leading-[21px]">
          BURSTING WITH
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[58px] px-0 pb-0 box-border max-w-full ml-[-1280px] text-161xl text-orange">
          <h1 className="m-0 self-stretch relative text-inherit leading-[80%] uppercase font-bold font-[inherit] shrink-0 z-[1] mq450:text-26xl mq450:leading-[58px] mq800:text-53xl mq800:leading-[86px]">
            passion fruit
          </h1>
        </div>
        <div className="flex-start justify-start pt-[234px] px-0 pb-0 box-border max-w-full ml-[-1280px] text-81xl text-orange1">
          <h1 className="m-0 self-stretch h-[115px] relative text-inherit leading-[80%] uppercase font-bold font-[inherit] inline-block shrink-0 z-[1] mq450:text-11xl mq450:leading-[32px] mq800:text-31xl mq800:leading-[48px]">{`PINEAPPLE `}</h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full text-left text-orange mq800:pl-10 mq800:pr-10 mq800:box-border">
        <div className="flex-1 rounded-61xl bg-black border-white border-[1px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-20 pb-0 pl-20 pr-10 relative gap-12 min-h-[551px] shrink-0 max-w-full mq1125:flex-wrap mq1125:pl-10 mq1125:box-border mq450:gap-6 mq800:pt-[52px] mq800:box-border">
          <div className="w-[340px] flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <div className="self-stretch relative tracking-[0.1em] leading-[120%] uppercase hidden mq450:text-lg mq450:leading-[21px]">
                our beer:
              </div>
              <h1 className="m-0 self-stretch relative text-25xl leading-[90%] uppercase font-bold font-[inherit] mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
                a cracking unfiltered tropical ipa
              </h1>
              <div className="self-stretch relative leading-[120%] uppercase text-white mq450:text-lg mq450:leading-[21px]">{`Alc. 4.8% vol `}</div>
            </div>
            <div className="self-stretch relative text-5xl leading-[120%] text-white mq450:text-lgi mq450:leading-[23px]">
              Brought together with natural spring water, our expert brewers
              monitor the brew until at optimum smoothness and flavour to ensure
              a cracking symphony of tropical refreshment every time.
            </div>
            <button className="cursor-pointer [border:none] py-2 px-6 bg-orange rounded-980xl flex flex-row items-center justify-center gap-2 hover:bg-chocolate-100">
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/arrowudownright.svg"
              />
              <b className="h-3.5 relative text-lg leading-[100%] uppercase inline-block font-desktop-h2-120pt text-black text-left min-w-[35px]">
                beer
              </b>
            </button>
          </div>
          <div className="w-[340px] flex flex-col items-start justify-start gap-6 max-w-full">
            <DetailsTitle
              propWidth="unset"
              propAlignSelf="stretch"
              ourBeer="ingredients:"
              aCrackingUnfilteredTropic={`water, malts, hops (Citra, Azacca & El Dorado) yeast`}
            />
            <DetailsTitle
              propWidth="296px"
              propAlignSelf="unset"
              ourBeer="sight:"
              aCrackingUnfilteredTropic="hazy deep golden"
            />
            <DetailsTitle
              propWidth="296px"
              propAlignSelf="unset"
              ourBeer="smell:"
              aCrackingUnfilteredTropic="tropical fruits"
            />
            <DetailsTitle
              ourBeer="taste:"
              aCrackingUnfilteredTropic="juicy, tropical and bitterness"
            />
          </div>
          <img
            className="h-[62.87%] w-[37.67%] absolute !m-[0] top-[44.07%] right-[3.19%] bottom-[-6.93%] left-[59.14%] max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
      </div>
    </section>
  );
};

BeerInfoSection.propTypes = {
  className: PropTypes.string,
};

export default BeerInfoSection;
