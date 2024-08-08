import { useMemo } from "react";
import PropTypes from "prop-types";

const DetailsTitle = ({
  className = "",
  propWidth,
  propAlignSelf,
  ourBeer,
  aCrackingUnfilteredTropic,
}) => {
  const detailsTitleStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[296px] flex flex-col items-start justify-start gap-3 text-left text-3xl text-orange font-desktop-h2-120pt ${className}`}
      style={detailsTitleStyle}
    >
      <div className="self-stretch relative tracking-[0.1em] leading-[120%] uppercase mq450:text-lg mq450:leading-[21px]">
        {ourBeer}
      </div>
      <b className="self-stretch relative text-5xl leading-[100%] uppercase text-white mq450:text-lgi mq450:leading-[19px]">
        {aCrackingUnfilteredTropic}
      </b>
    </div>
  );
};

DetailsTitle.propTypes = {
  className: PropTypes.string,
  ourBeer: PropTypes.string,
  aCrackingUnfilteredTropic: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default DetailsTitle;
