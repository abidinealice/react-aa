import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import bgHome from "../../images/bgAll.png";

//CONTAINER

export const ProjectContainer = styled(Box)(() => ({
  minHeight: `100svh`,
  backgroundImage: `url(${bgHome})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  position: "relative",
}));
