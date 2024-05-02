import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const AnimationText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: Colors.primary,
  paddingTop: "12%",
  [theme.breakpoints.down("md")]: {
    fontSize: " 40px",
  },
}));
