import { Link } from "react-scroll";
import { useLanguageContext } from "../../utils/Context/languageContext";
import Language from "../Language";
import Logo from "../../images/logoAA.png";
import {
  AppbarContainer,
  AppbarList,
  AppbarListItem,
  AppbarImg,
  AppbarTypography,
} from "../../styles/header";

function Header() {
  //Translation
  const { t } = useLanguageContext();

  return (
    <AppbarContainer>
      <AppbarImg src={Logo} alt="Logo" />

      <AppbarList>
        <AppbarListItem>
          <Link
            activeClass="active"
            to="sectionAbout"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <AppbarTypography>{t("nav1")}</AppbarTypography>
          </Link>
        </AppbarListItem>
        <AppbarListItem>
          <Link
            activeClass="active"
            to="sectionProjects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <AppbarTypography>{t("nav2")}</AppbarTypography>
          </Link>
        </AppbarListItem>
        <AppbarListItem>
          <Link
            activeClass="active"
            to="sectionSkills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <AppbarTypography>{t("nav3")}</AppbarTypography>
          </Link>
        </AppbarListItem>
        <AppbarListItem>
          <Link
            activeClass="active"
            to="sectionContact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <AppbarTypography>{t("nav4")}</AppbarTypography>
          </Link>
        </AppbarListItem>
      </AppbarList>
      <Language />
    </AppbarContainer>
  );
}

export default Header;
