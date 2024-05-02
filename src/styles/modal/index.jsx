import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//CONTAINER

export const ModalBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "300px",
  },
  ":hover": {},
}));

export const ModalText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
}));
