import { useMemo } from "react";
import PropTypes from "prop-types";

const Faq = ({
  className = "",
  whyCodebreaker,
  propDisplay,
  propMinWidth,
  ourCodebreakerIsThe20thCe,
}) => {
  const whyCodebreakerStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`self-stretch border-white border-b-[1px] border-solid flex flex-col items-start justify-start pt-3 px-0 pb-2.5 gap-3 text-left text-lg text-white font-desktop-h2-120pt ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-5">
        <b
          className="relative leading-[100%] uppercase"
          style={whyCodebreakerStyle}
        >
          {whyCodebreaker}
        </b>
        <img
          className="h-5 w-5 relative min-h-[20px]"
          alt=""
          src="/arrowurightup.svg"
        />
      </div>
      <div className="self-stretch relative leading-[120%]">
        {ourCodebreakerIsThe20thCe}
      </div>
    </div>
  );
};

Faq.propTypes = {
  className: PropTypes.string,
  whyCodebreaker: PropTypes.string,
  ourCodebreakerIsThe20thCe: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Faq;
