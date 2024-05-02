import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Colors } from "../theme";

//CONTAINER

export const GalleryContainer = styled(Grid2)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  margin: "70px 15% 0 15%",
}));

export const GalleryProjectsBox = styled(Box)(({ theme }) => ({
  backgroundColor: Colors.primary,
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
}));

export const GalleryProjectsGrid = styled(Grid2)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const GalleryProjectsGridItem = styled(Grid2)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    gap: "5px",
  },
}));

export const GalleryBtnGrid = styled(Grid2)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "30px",
}));

//BUTTON
export const GalleryFilterBtn = styled(Button)(({ theme }) => ({
  color: "#fff",
  "&:hover": {
    color: Colors.primary,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
}));

export const GalleryModalBtn = styled(Button)(({ theme }) => ({
  color: "#fff",
  "&:hover": {
    color: Colors.primary,
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
}));

//TEXT

export const GalleryTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  textAlign: "center",
  fontSize: "25PX",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const GalleryTxt = styled(Typography)(({ theme }) => ({
  color: "#fff",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

//IMG
