import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { useLanguageContext } from "../../utils/Context/languageContext";
import TransitionsModal from "../Modal";
import AnimationBubbles from "../Animation/bubbles.jsx";
import CoverBOOKI from "../../images/booki-cover1.png";
import CoverMVG from "../../images/mvg-cover.png";
import CoverKASA from "../../images/kasa-cover.png";
import PicBOOKI from "../../images/booki-pic.png";
import PicMVG from "../../images/mvg-pic.png";
import PicKASA from "../../images/kasa-pic.png";
import {
  GalleryContainer,
  GalleryProjectsBox,
  GalleryProjectsGrid,
  GalleryBtnGrid,
  GalleryFilterBtn,
  GalleryTxt,
  GalleryProjectsGridItem,
  GalleryTitle,
  GalleryModalBtn,
} from "../../styles/gallery";

function Gallery() {
  //Translation
  const { t } = useLanguageContext();

  //Buttons Modal
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);

  //Buttons Filter
  const [state, setState] = useState("flex");
  const [state2, setState2] = useState("flex");
  const [state3, setState3] = useState("flex");

  const handleBtns = (e) => {
    let btnName = e.target.value;
    if (btnName === "All") {
      setState("flex");
      setState2("flex");
      setState3("flex");
    } else if (btnName === "FrontEnd") {
      setState("flex");
      setState2("flex");
      setState3("none");
    } else if (btnName === "BackEnd") {
      setState("none");
      setState2("none");
      setState3("flex");
    }
  };
  return (
    <GalleryContainer>
      <AnimationBubbles />

      {/*-------------------------------------------------------*/}
      {/*-------------------FILTER BUTTONS*/}
      {/*--------------------------------------------------------*/}

      <GalleryBtnGrid style={{ position: "relative", zIndex: "2" }}>
        <GalleryFilterBtn variant="contained" value="All" onClick={handleBtns}>
          {t("projectBtn1")}
        </GalleryFilterBtn>
        <GalleryFilterBtn
          variant="contained"
          value="FrontEnd"
          onClick={handleBtns}
        >
          {t("projectBtn2")}
        </GalleryFilterBtn>
        <GalleryFilterBtn
          variant="contained"
          value="BackEnd"
          onClick={handleBtns}
        >
          {t("projectBtn3")}
        </GalleryFilterBtn>
      </GalleryBtnGrid>

      <GalleryProjectsBox style={{ position: "relative", zIndex: "2" }}>
        <GalleryProjectsGrid container gap={2}>
          {/*-------------------------------------------------------*/}
          {/*-------------------KASA*/}
          {/*--------------------------------------------------------*/}

          <GalleryProjectsGridItem item xs={3} style={{ display: state }}>
            <GalleryTitle variant="h2">Kasa</GalleryTitle>

            <img
              src={CoverKASA}
              alt="Couverture projet Kasa"
              style={{ width: "150px" }}
            />

            <Stack flexDirection="row" gap={2}>
              <GalleryTxt>REACT</GalleryTxt>
              <GalleryTxt>JSX</GalleryTxt>
              <GalleryTxt>SASS</GalleryTxt>
            </Stack>

            {/*-----------------------------------------------*/}
            {/*------------KASA MODAL*/}
            {/*------------------------------------------------*/}

            <TransitionsModal
              functionOpen={handleOpen}
              functionClose={handleClose}
              stateOpen={open}
              description={t("galleryKasaDesc")}
              pic={PicKASA}
              link="https://github.com/abidinealice/kasa-app"
              alt={t("galleryKasaAlt")}
            />
            <GalleryModalBtn onClick={handleOpen} value="All">
              {t("galleryBtn")}
            </GalleryModalBtn>
          </GalleryProjectsGridItem>

          {/*-------------------------------------------------------*/}
          {/*-------------------BOOKI*/}
          {/*--------------------------------------------------------*/}
          <GalleryProjectsGridItem item xs={3} style={{ display: state2 }}>
            <GalleryTitle variant="h2">Booki</GalleryTitle>

            <img
              src={CoverBOOKI}
              alt="Couverture projet Booki"
              style={{ width: "150px" }}
            />

            <Stack flexDirection="row" gap={2}>
              <GalleryTxt>HTML</GalleryTxt>
              <GalleryTxt>CSS</GalleryTxt>
            </Stack>

            {/*-----------------------------------------------*/}
            {/*------------BOOKI MODAL*/}
            {/*------------------------------------------------*/}

            <TransitionsModal
              functionOpen={handleOpen2}
              functionClose={handleClose2}
              stateOpen={open2}
              description={t("galleryBookiDesc")}
              pic={PicBOOKI}
              link="https://github.com/abidinealice/oc-booki-aa"
              alt={t("galleryBookiAlt")}
            />
            <GalleryModalBtn onClick={handleOpen2} value="FrontEnd">
              {t("galleryBtn")}
            </GalleryModalBtn>
          </GalleryProjectsGridItem>

          {/*-------------------------------------------------------*/}
          {/*-------------------MVG*/}
          {/*--------------------------------------------------------*/}
          <GalleryProjectsGridItem item xs={3} style={{ display: state3 }}>
            <GalleryTitle variant="h2">MVG</GalleryTitle>

            <img
              src={CoverMVG}
              alt="Couverture projet Mon Vieux Grimoire"
              style={{ width: "150px" }}
            />

            <Stack flexDirection="row" gap={2}>
              <GalleryTxt>NODE</GalleryTxt>
              <GalleryTxt>EXPRESS</GalleryTxt>
            </Stack>

            {/*-----------------------------------------------*/}
            {/*------------MVG MODAL*/}
            {/*------------------------------------------------*/}

            <TransitionsModal
              functionOpen={handleOpen3}
              functionClose={handleClose3}
              stateOpen={open3}
              description={t("galleryMVGDesc")}
              pic={PicMVG}
              link="https://github.com/abidinealice/mvg-app"
              alt={t("galleryMVGAltModal")}
            />
            <GalleryModalBtn onClick={handleOpen3} value="BackEnd">
              {t("galleryBtn")}
            </GalleryModalBtn>
          </GalleryProjectsGridItem>
        </GalleryProjectsGrid>
      </GalleryProjectsBox>
    </GalleryContainer>
  );
}

export default Gallery;
