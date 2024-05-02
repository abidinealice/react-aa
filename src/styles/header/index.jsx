import { Button, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";

//CONTAINER

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
}));

//IMAGE

export const AppbarImg = styled("img")(() => ({
  width: "50px",
}));

//LIST

export const AppbarList = styled(List)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AppbarListItem = styled(ListItem)(() => ({
  padding: "0 20px",
  width: "auto",
  color: Colors.primary,
  cursor: "pointer",
}));

//BUTTON

export const AppbarBtn = styled(Button)(() => ({
  variants: "contained",
  backgroundColor: Colors.primary,
  color: "#fff",
  ":hover": {
    backgroundColor: "#fff",
    color: Colors.primary,
  },
}));

//TEXT

export const AppbarTypography = styled(Typography)(() => ({}));

export const AppBarMLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));
