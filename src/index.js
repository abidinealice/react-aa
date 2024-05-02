import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import "./styles/style.css";
import theme from "./styles/theme";
import { LanguageContextProvider } from "./utils/Context/languageContext";
import "./i18next";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import { Box } from "@mui/system";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LanguageContextProvider>
        <Box>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Box>
      </LanguageContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
