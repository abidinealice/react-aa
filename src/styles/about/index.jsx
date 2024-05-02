import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import bgHome from "../../images/bgAll.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

//CONTAINER

export const AboutContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundImage: `url(${bgHome})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  position: "relative",
}));

export const AboutGrid = styled(Grid2)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  margin: "70px 15% 0 15%",
}));

//TEXT

export const AboutText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  zIndex: "3",

  [theme.breakpoints.down("md")]: {
    fontSize: " 18px",
  },
}));
