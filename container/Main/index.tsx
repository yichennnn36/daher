import Main from "../../components/main";
import History from "../../components/history";
import SliderSection from "../../components/sliderSection";
import Contact from "../../components/contactUs";

const MainIndex = ({ data }) => {
  const { historyText, partnerLogo, area, intro } = data;
  return (
    <>
      <Main intro={intro} />
      <History text={historyText} />
      <SliderSection logo={partnerLogo} />
      <Contact area={area} />
    </>
  );
};

export default MainIndex;
