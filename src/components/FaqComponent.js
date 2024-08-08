import Faq from "./Faq";
import PropTypes from "prop-types";

const FaqComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[80.2px] pl-5 pr-[21px] box-border max-w-full text-left text-25xl text-white font-desktop-h2-120pt mq800:pb-[52px] mq800:box-border ${className}`}
    >
      <div className="w-[843px] flex flex-col items-center justify-start gap-12 max-w-full mq450:gap-6">
        <h1 className="m-0 relative text-inherit leading-[40px] uppercase font-bold font-[inherit] inline-block max-w-full mq450:text-7xl mq450:leading-[24px] mq800:text-16xl mq800:leading-[32px]">
          frequently asked questions
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-3 text-lg">
          <Faq
            whyCodebreaker="Why codebreaker?"
            ourCodebreakerIsThe20thCe="Our Codebreaker is the 20th century tomb-raider; the lovable rogue famed for his sense of adventure. It is him you see at every turn and on our beer taps, treasure hunting by day, seeking ice cold refreshing sundowners by night."
          />
          <Faq
            whyCodebreaker="Beer awards?"
            propDisplay="inline-block"
            propMinWidth="109px"
            ourCodebreakerIsThe20thCe="We’ve been awarded some of the highest accolades in the industry, including the World Beer Awards, European Beer Challenge and London Beer Competition."
          />
          <Faq
            whyCodebreaker="Why the beer is unfiltered?"
            propDisplay="unset"
            propMinWidth="unset"
            ourCodebreakerIsThe20thCe="Simply put, the filtration process robs beer of flavour by removing tiny sediment particles. Our unfiltered beer means that we lose none of the flavour or aroma, whilst giving our beer its hazy appearance and delivering a softer mouthfeel."
          />
          <Faq
            whyCodebreaker="It's unpasteurised too?"
            propDisplay="unset"
            propMinWidth="unset"
            ourCodebreakerIsThe20thCe="That’s right. Why so? We say heat is the enemy of beer, so we leave Codebreaker unpasteurised to ensure that it tastes fresher – it really is that simple!"
          />
          <Faq
            whyCodebreaker="Certified vegan?"
            propDisplay="inline-block"
            propMinWidth="127px"
            ourCodebreakerIsThe20thCe="Codebreaker is not officially certified vegan, but it is suitable for vegans, with only plant-based ingredients."
          />
        </div>
      </div>
    </section>
  );
};

FaqComponent.propTypes = {
  className: PropTypes.string,
};

export default FaqComponent;
