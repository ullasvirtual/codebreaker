import PropTypes from "prop-types";

const FooterContactUs = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full ${className}`}
    >
      <img
        className="h-[547px] w-[547px] absolute !m-[0] right-[0px] bottom-[-32px] overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/frame-65396.svg"
      />
      <footer className="flex-1 flex flex-col items-start justify-start py-0 px-20 box-border gap-12 max-w-full z-[1] text-left text-141xl text-orange font-desktop-h2-120pt mq800:gap-6 mq800:pl-10 mq800:pr-10 mq800:box-border">
        <div className="self-stretch h-px relative border-white border-t-[1px] border-solid box-border" />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full shrink-0 gap-5 mq1350:flex-wrap">
          <h1 className="m-0 w-[843px] relative text-inherit leading-[80%] uppercase font-bold font-[inherit] inline-block shrink-0 min-w-[843px] max-w-full mq1125:min-w-full mq450:text-21xl mq450:leading-[51px] mq800:text-45xl mq800:leading-[77px] mq1350:flex-1">
            <span>{`a cracking unfiltered `}</span>
            <span className="text-white">tropical</span>
            <span> ipa</span>
          </h1>
          <div className="w-[354px] flex flex-row items-center justify-start gap-8 max-w-full text-center text-lg text-white mq450:flex-wrap mq450:gap-4">
            <div className="flex-1 flex flex-row items-start justify-between min-w-[108px] gap-5">
              <b className="relative leading-[14px] uppercase inline-block min-w-[35px]">
                beer
              </b>
              <b className="relative leading-[14px] uppercase inline-block min-w-[45px]">
                Trade
              </b>
              <b className="relative leading-[14px] uppercase inline-block min-w-[38px]">
                shop
              </b>
            </div>
            <button className="cursor-pointer [border:none] py-2 px-5 bg-orange rounded-980xl flex flex-row items-center justify-center gap-2 whitespace-nowrap hover:bg-chocolate-100">
              <img
                className="h-6 w-6 relative"
                alt=""
                src="/arrowudownright.svg"
              />
              <b className="h-3.5 relative text-lg leading-[100%] uppercase inline-block font-desktop-h2-120pt text-black text-center min-w-[84px]">
                Contact us
              </b>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-7 shrink-0 max-w-full text-lg text-white">
          <img
            className="w-[215.5px] h-11 relative"
            alt=""
            src="/group-47.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 max-w-full mq1125:flex-wrap">
              <div className="relative leading-[100%] inline-block max-w-full">{`Codebreaker® is a registered UK & European trademark of Codebreaker Brew Co Ltd`}</div>
              <div className="relative leading-[100%]">
                Do not share with anyone under the legal drinking age
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5 max-w-full mq1125:flex-wrap">
              <div className="relative leading-[100%] whitespace-pre-wrap inline-block max-w-full">
                © 2024 Codebreaker Brew Co | Registered in the United Kingdom |
                Company No. 09456073 | VAT number: 260 3873 07
              </div>
              <div className="flex flex-row items-center justify-start gap-3">
                <div className="relative [text-decoration:underline] leading-[100%] inline-block min-w-[102px]">{`Terms & Conditions`}</div>
                <div className="relative [text-decoration:underline] leading-[100%] inline-block min-w-[74px]">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

FooterContactUs.propTypes = {
  className: PropTypes.string,
};

export default FooterContactUs;
