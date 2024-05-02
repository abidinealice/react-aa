import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Colors } from "../../styles/theme";
import { ModalBox, ModalText } from "../../styles/modal";

export default function TransitionsModal({
  description,
  functionClose,
  stateOpen,
  pic,
  link,

  alt,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={stateOpen}
        onClose={functionClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={stateOpen}>
          <ModalBox
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 5,
            }}
          >
            <img src={pic} alt={alt} style={{ width: "100%" }} />
            <ModalText
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ paddingTop: "10px", textAlign: "justify" }}
            >
              {description}
            </ModalText>
            <ModalText id="transition-modal-description" sx={{ mt: 2 }}>
              <Link href={link} underline="none" color={Colors.primary}>
                <GitHubIcon />
              </Link>
            </ModalText>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
}

TransitionsModal.propTypes = {
  description: PropTypes.string.isRequired,
  functionClose: PropTypes.func.isRequired,
  stateOpen: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
