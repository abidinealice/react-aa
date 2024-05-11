import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";
import bgHome from "../../images/bgHome400.svg";

//CONTAINERS

export const HomeContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundImage: `url(${bgHome})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  position: "relative",
}));

export const HomeContentContainer = styled(Container)(() => ({
  position: "relative",
  padding:'40px 0 0 0'
}));

export const HomeGrid = styled(Grid2)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "40px",
    marginTop: "40%",
  },
}));

export const HomeTextBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    gap: "10px",
  },
}));

//TYPOGRAPHY

export const HomeTypographyTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: " 40px",
  },
}));

export const HomeTypographySubtitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: " 18px",
  },
}));

//IMG

export const HomeImg = styled("img")(({ theme }) => ({
  position: "absolute",
  right: "12%",
  [theme.breakpoints.down("md")]: {
    position: "relative",
    right: "0",
  },
}));
