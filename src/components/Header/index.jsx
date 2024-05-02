import { useMediaQuery, useTheme } from "@mui/material";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <div>{matches ? <AppbarMobile /> : <AppbarDesktop />}</div>;
}

export default Header;
