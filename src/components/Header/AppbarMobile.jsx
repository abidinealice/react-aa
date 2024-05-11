import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguageContext } from "../../utils/Context/languageContext";
import { Box } from "@mui/material";
import { Spin as Hamburger } from "hamburger-react";
import Language from "../Language";
import { Colors } from "../../styles/theme";
import { AppBarMLink } from "../../styles/header";

function AppbarMobile() {
  const { t } = useLanguageContext();
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <Box>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          position:"relative",
          right:"14px"
        }}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={30}
          color={Colors.primary}
          distance="lg"
        />
      </Box>
      <AnimatePresence>
        {isOpen && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              paddingLeft:"25px",
              gap: "15px",
              backgroundColor: Colors.bgFooter,
              position: "absolute",
              width: "100%",
              zIndex: "99",
              paddingBottom: "35px",
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              activeClass="active"
              to="sectionAbout"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 1 / 10,
                }}
                key={2}
              >
                {t("nav1")}
              </AppBarMLink>
            </Link>

            <Link
              activeClass="active"
              to="sectionProjects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 2 / 10,
                }}
                key={3}
              >
                {t("nav2")}
              </AppBarMLink>
            </Link>

            <Link
              activeClass="active"
              to="sectionSkills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 3 / 10,
                }}
                key={4}
              >
                {t("nav3")}
              </AppBarMLink>
            </Link>

            <Link
              activeClass="active"
              to="sectionContact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <AppBarMLink
                component={motion.p}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 4 / 10,
                }}
                key={5}
              >
                {t("nav4")}
              </AppBarMLink>
            </Link>

            <AppBarMLink
              component={motion.p}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + 6 / 10,
              }}
              key={6}
            >
              <Language />
            </AppBarMLink>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default AppbarMobile;
