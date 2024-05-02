import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

//CONTAINER

export const FooterContainer = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: Colors.bgFooter,
  padding: "50px 30px 15px 30px",
}));

//ICON

export const FooterGridIcons = styled(Grid2)(() => ({
  display: "flex",
  gap: "20px",
  color: Colors.primary,
}));

//TEXT

export const FooterTypography = styled(Typography)(({ theme }) => ({
  padding: "10px 0 0 0",
  color: Colors.primary,
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: " 18px",
  },
}));
