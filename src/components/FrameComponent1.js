import Header from "./Header";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60.2px] box-border max-w-full text-center text-lg text-black font-desktop-h2-120pt ${className}`}
    >
      <Header />
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
