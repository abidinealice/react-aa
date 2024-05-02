import { Link } from "@mui/material";
import { useLanguageContext } from "../../utils/Context/languageContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  FooterContainer,
  FooterGridIcons,
  FooterTypography,
} from "../../styles/footer";
import { Colors } from "../../styles/theme";

function Footer() {
  //Translation
  const { t } = useLanguageContext();
  return (
    <FooterContainer>
      <FooterGridIcons>
        <Link
          href="https://github.com/abidinealice"
          underline="none"
          color={Colors.primary}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alice-abidine"
          underline="none"
          color={Colors.primary}
        >
          <LinkedInIcon />
        </Link>
      </FooterGridIcons>
      <FooterTypography>{t("footerText")}</FooterTypography>
    </FooterContainer>
  );
}

export default Footer;
