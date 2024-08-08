import FrameComponent1 from "../components/FrameComponent1";
import TropicalProductBanner from "../components/TropicalProductBanner";
import Trade from "../components/Trade";
import BeerInfoSection from "../components/BeerInfoSection";
import TropicalCode from "../components/TropicalCode";
import Testimonials from "../components/Testimonials";
import FaqComponent from "../components/FaqComponent";
import FooterFull from "../components/FooterFull";

const CodebreakerHomepage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[7.8px] box-border gap-[119.8px] leading-[normal] tracking-[normal] mq450:gap-[30px] mq800:gap-[60px]">
      <FrameComponent1 />
      <img
        className="w-[659px] h-[659px] absolute !m-[0] top-[24px] right-[-48px]"
        alt=""
        src="/group-23.svg"
      />
      <section className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq450:gap-[18px] mq800:gap-9">
        <div className="w-[893px] flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq1125:pl-10 mq1125:pr-10 mq1125:box-border">
          <TropicalProductBanner />
        </div>
        <Trade />
      </section>
      <BeerInfoSection />
      <TropicalCode />
      <Testimonials />
      <FaqComponent />
      <FooterFull />
    </div>
  );
};

export default CodebreakerHomepage;
