import { Link, Stack } from "@mui/material";
import { useLanguageContext } from "../../utils/Context/languageContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { Colors } from "../../styles/theme";
import AnimationOctopus from "../../components/Animation/octopus.jsx";
import AnimationBubbles3 from "../../components/Animation/bubbles3";
import TextAnimation from "../../components/Animation/text";
import {
  ContactContainer,
  ContactText,
  ContactGrid,
} from "../../styles/contact";

function Contact() {
  //Translation
  const { t } = useLanguageContext();
  return (
    <ContactContainer id="sectionContact" className="section">
      <AnimationOctopus />
      <AnimationBubbles3 />

      <TextAnimation title={t("contactTitle")} />

      <ContactGrid sx={{ position: "relative", zIndex: "2" }}>
        <div>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{ paddingBottom: "20px" }}
          >
            <DownloadIcon color="secondary" />
            <Link
              href="/assets/file/CV_ALICE_ABIDINE.pdf"
              underline="none"
              color={Colors.primary}
              download
            >
              <ContactText>{t("contactText0")}</ContactText>
            </Link>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{ paddingBottom: "20px" }}
          >
            <MailOutlineIcon color="secondary" />
            <ContactText>{t("contactText1")}</ContactText>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{ paddingBottom: "20px" }}
          >
            <LinkedInIcon color="secondary" />
            <Link
              href="https://www.linkedin.com/in/alice-abidine"
              underline="none"
              color={Colors.primary}
            >
              <ContactText>Linkedin</ContactText>
            </Link>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            sx={{ paddingBottom: "20px" }}
          >
            <GitHubIcon color="secondary" />
            <Link
              href="https://github.com/abidinealice"
              underline="none"
              color={Colors.primary}
            >
              <ContactText>Github</ContactText>
            </Link>
          </Stack>
        </div>
        
      </ContactGrid>
    </ContactContainer>
  );
}

export default Contact;
