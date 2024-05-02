import { Stack } from "@mui/material";
import { useLanguageContext } from "../../utils/Context/languageContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import iconstools from "../../data/res/iconstools.json";
import iconswebdesign from "../../data/res/iconswebdesign.json";
import iconswebdev from "../../data/res/iconswebdev.json";
import AnimationFishPuff from "../../components/Animation/fishpuff.jsx";
import AnimationBubbles2 from "../../components/Animation/bubbles2.jsx";
import TextAnimation from "../../components/Animation/text";
import {
  SkillsContainer,
  SkillsTypographySubTitle,
  SkillsTypographyTxt,
  SkillsGrid,
} from "../../styles/skills";

function Skills() {
  //Translation
  const { t } = useLanguageContext();
  return (
    <SkillsContainer id="sectionSkills">
      <AnimationFishPuff />
      <AnimationBubbles2 />

      <TextAnimation title={t("skillsTitle")} />

      <SkillsGrid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {/*-------------------------------------------------------*/}
        {/*-------------------WEB DEV*/}
        {/*--------------------------------------------------------*/}
        <Grid2 item>
          <SkillsTypographySubTitle variant="h2">
            Web Dev
          </SkillsTypographySubTitle>

          <Grid2
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            {iconswebdev.map((icon) => (
              <Grid2 item key={icon.id}>
                <Stack direction="column" alignItems="center">
                  <img
                    src={icon.url}
                    alt={icon.alt}
                    key={icon.id}
                    style={{ width: "50px" }}
                  />
                  <SkillsTypographyTxt>{icon.name}</SkillsTypographyTxt>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>

        {/*-------------------------------------------------------*/}
        {/*-------------------WEB DESIGN*/}
        {/*--------------------------------------------------------*/}
        <Grid2 item>
          <SkillsTypographySubTitle variant="h2">
            Web Design
          </SkillsTypographySubTitle>
          <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            {iconswebdesign.map((icon) => (
              <Grid2 item key={icon.id}>
                <Stack direction="column" alignItems="center">
                  <img
                    src={icon.url}
                    alt={icon.alt}
                    key={icon.id}
                    style={{ width: "50px" }}
                  />
                  <SkillsTypographyTxt>{icon.name}</SkillsTypographyTxt>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>

        {/*-------------------------------------------------------*/}
        {/*-------------------TOOLS*/}
        {/*--------------------------------------------------------*/}
        <Grid2 item>
          <SkillsTypographySubTitle variant="h2">
            {t("skillsSubTitle")}
          </SkillsTypographySubTitle>
          <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            {iconstools.map((icon) => (
              <Grid2 item key={icon.id}>
                <Stack direction="column" alignItems="center">
                  <img
                    src={icon.url}
                    alt={icon.alt}
                    key={icon.id}
                    style={{ width: "50px" }}
                  />
                  <SkillsTypographyTxt>{icon.name}</SkillsTypographyTxt>
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;
