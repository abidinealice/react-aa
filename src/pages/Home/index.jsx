import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguageContext } from "../../utils/Context/languageContext";
import Header from "../../components/Header";
import Icon from "../../images/aliceabidinepic.png";
import AnimationWave from "../../components/Animation/wave.jsx";
import {
  HomeContainer,
  HomeContentContainer,
  HomeGrid,
  HomeImg,
  HomeTextBox,
  HomeTypographyTitle,
  HomeTypographySubtitle,
} from "../../styles/home";

function Home() {
  //Translation
  const { t } = useLanguageContext();

  //Animation
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const animationText = useTransform(scrollYProgress, [0, 1], [0, 290]);

  return (
    <HomeContainer ref={container}>
      <AnimationWave />
      <HomeContentContainer>
        <Header />
        <HomeGrid>
        test
          <motion.div style={{ y: animationText }}>
            <HomeTextBox>
              <HomeTypographyTitle variant="h1">
                {t("homeText1")}
              </HomeTypographyTitle>
              <HomeTypographySubtitle>
                <span>{t("homeText2")}</span>{" "}
                <span style={{ fontWeight: "bold" }}>ALICE ABIDINE</span>
              </HomeTypographySubtitle>
              <HomeTypographySubtitle>
                <span>{t("homeText3")}</span>{" "}
                <span style={{ fontWeight: "bold" }}>{t("homeText4")}</span>{" "}
                <span>{t("homeText5")}</span>{" "}
                <span style={{ fontWeight: "bold" }}>{t("homeText6")}</span>
              </HomeTypographySubtitle>
            </HomeTextBox>
          </motion.div>
          <HomeImg src={Icon} alt="Icon Alice Abidine" />
        </HomeGrid>
      </HomeContentContainer>
    </HomeContainer>
  );
}

export default Home;
