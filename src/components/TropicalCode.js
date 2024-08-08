import PropTypes from "prop-types";

const TropicalCode = ({ className = "" }) => {
  return (
    <div
      className={`w-[2286.6px] max-w-full flex flex-col items-end justify-start pt-0 px-0 pb-[0.7px] box-border relative gap-[32.7px] leading-[normal] tracking-[normal] mq572:gap-4 ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[90.6px] w-[114.5px] absolute !m-[0] right-[1086px] bottom-[-0.7px] object-contain"
          loading="lazy"
          alt=""
          src="/group-6@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq2112:flex-wrap">
          <img
            className="self-stretch w-[1046.1px] relative max-h-full min-h-[90px] shrink-0 max-w-full"
            loading="lazy"
            alt=""
            src="/the-tropical-code.svg"
          />
          <img
            className="self-stretch w-[1046.1px] relative max-h-full min-h-[90px] shrink-0 max-w-full"
            loading="lazy"
            alt=""
            src="/the-tropical-code-1.svg"
          />
        </div>
      </section>
      <img
        className="w-[1046.1px] h-[89.9px] absolute !m-[0] bottom-[0.7px] left-[-620.3px]"
        loading="lazy"
        alt=""
        src="/the-tropical-code-2.svg"
      />
      <img
        className="w-[114.5px] h-[90.6px] absolute !m-[0] bottom-[0px] left-[465.8px] object-contain"
        loading="lazy"
        alt=""
        src="/group-6-1@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border relative max-w-full">
        <img
          className="h-[89.9px] w-[1046.1px] relative max-w-full"
          loading="lazy"
          alt=""
          src="/the-tropical-code-3.svg"
        />
        <img
          className="h-[90.6px] w-[114.5px] absolute !m-[0] right-[465.8px] bottom-[-0.7px] object-contain"
          loading="lazy"
          alt=""
          src="/group-7@2x.png"
        />
        <img
          className="h-full w-[1046.1px] absolute !m-[0] top-[0px] right-[-620.3px] bottom-[0px] max-h-full"
          loading="lazy"
          alt=""
          src="/the-tropical-code-4.svg"
        />
      </section>
    </div>
  );
};


TropicalCode.propTypes = {
  className: PropTypes.string,
};

export default TropicalCode;


