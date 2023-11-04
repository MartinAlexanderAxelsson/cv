import * as React from "react";
import "./styles/alertdialogslide.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  Stack,
  Dialog,
  DialogContent,
  Slide,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery("(min-width:900px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {matches ? (
        <div className="email-link" onClick={handleClickOpen}>
          {t("contact.emailBtn")}&nbsp;
          <ArrowForwardIcon sx={{ fontSize: 18 }} />
        </div>
      ) : (
        <Box mt={1}>
          <Button
            sx={{ background: "rgb(0, 76, 118)" }}
            onClick={handleClickOpen}
            size="small"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
          >
            <b>Email me</b>
          </Button>
        </Box>
      )}

      <Dialog
        fullWidth
        fullScreen={!matches}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <h4 className="contact-h4">{t("contact.headline")}.</h4>

        <div className="contact-text">{t("contact.text")}</div>
        <DialogContent>
          <Contact />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
