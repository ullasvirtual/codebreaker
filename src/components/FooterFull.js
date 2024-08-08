import BeerShop from "./BeerShop";
import FooterContactUs from "./FooterContactUs";
import PropTypes from "prop-types";

const FooterFull = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[140px] max-w-full text-left text-101xl text-black font-desktop-h2-120pt mq450:gap-[35px] mq800:gap-[70px] ${className}`}
    >
      <BeerShop />
      <FooterContactUs />
    </section>
  );
};

FooterFull.propTypes = {
  className: PropTypes.string,
};

export default FooterFull;
