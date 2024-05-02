import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import bgHome from "../../images/bgAll.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

//CONTAINER

export const SkillsContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundImage: `url(${bgHome})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  position: "relative",
}));

export const SkillsGrid = styled(Grid2)(({ theme }) => ({
  margin: "70px 15% 0 15%",
  position: "relative",
  zIndex: "2",
  [theme.breakpoints.down("md")]: {},
}));

//TEXT

export const SkillsTypography = styled(Typography)(() => ({}));

export const SkillsTypographyTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingTop: "12%",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
  },
}));

export const SkillsTypographySubTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
  },
}));
export const SkillsTypographyTxt = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
}));
