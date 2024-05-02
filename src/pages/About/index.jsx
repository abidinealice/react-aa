import { useLanguageContext } from "../../utils/Context/languageContext";
import { AboutContainer, AboutGrid, AboutText } from "../../styles/about";
import TextAnimation from "../../components/Animation/text";
import AnimationJellyfish from "../../components/Animation/jellyfish";
import AnimationBubbles2 from "../../components/Animation/bubbles2";

function About() {
  //Translation
  const { t } = useLanguageContext();

  return (
    <AboutContainer id="sectionAbout">
      <TextAnimation title={t("aboutTitle")} />
      <AnimationJellyfish />
      <AnimationBubbles2 />
      <AboutGrid>
        <AboutText>{t("aboutText1")}</AboutText>
        <AboutText>{t("aboutText2")}</AboutText>
      </AboutGrid>
    </AboutContainer>
  );
}

export default About;
