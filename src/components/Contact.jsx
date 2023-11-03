import React, { useState, useEffect } from "react";
import { Button, LinearProgress, Stack, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const service = process.env.REACT_APP_SERVICE;
  const template = process.env.REACT_APP_TEMPLATE;
  const user = process.env.REACT_APP_USER;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isValid, setIsValid] = useState({
    name: null,
    email: null,
    message: null,
  });
  const [status, setStatus] = useState({ status: "", message: "" });
  const [isLoading, setIsLoading] = useState(null);

  const validate = () => {
    if (contact.name) {
      setIsValid(p => ({
        ...p,
        name: true,
      }));
    } else {
      setIsValid(p => ({
        ...p,
        name: false,
      }));
    }
    if (contact.email) {
      setIsValid(p => ({
        ...p,
        email: true,
      }));
    } else {
      setIsValid(p => ({
        ...p,
        email: false,
      }));
    }
    if (contact.message) {
      setIsValid(p => ({
        ...p,
        message: true,
      }));
    } else {
      setIsValid(p => ({
        ...p,
        message: false,
      }));
    }
    console.log("validate");

    if (Object.values(isValid).every(Boolean)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    console.log(contact);

    if (validate()) {
      console.log("valid");
      setIsLoading(true);
      setStatus({ ...status, message: "", status: "" });
      emailjs.sendForm(service, template, e.target, user).then(
        result => {
          setIsLoading(false);
          setStatus({
            ...status,
            message: t("contact.success"),
            status: "success",
          });
          e.target.reset();
          setContact({ name: "", email: "", message: "" });
        },
        error => {
          setIsLoading(false);
          console.log(error);
          setStatus({
            ...status,
            message: t("contact.error"),
            status: "error",
          });
        }
      );
    } else {
      console.log("not valid");
      setStatus({
        ...status,
        message: t("contact.validation"),
        status: "error",
      });
    }
  };

  useEffect(() => {
    console.log(status);
  }, [contact]);

  return (
    <>
      <form onSubmit={handleSubmit} className="contact-form">
        <Stack spacing={4}>
          <TextField
            name="name"
            fullWidth
            variant="standard"
            error={isValid.name === false}
            label={t("contact.name")}
            onChange={e => setContact({ ...contact, name: e.target.value })}
          />
          <TextField
            name="email"
            variant="standard"
            label={t("contact.email")}
            error={isValid.email === false}
            onChange={e => setContact({ ...contact, email: e.target.value })}
          />
          <TextField
            name="message"
            variant="standard"
            label={t("contact.message")}
            multiline
            error={isValid.message === false}
            onChange={e => setContact({ ...contact, message: e.target.value })}
          />
          {isLoading && <LinearProgress color="inherit" />}
          <Stack direction="row" justifyContent={"space-between"}>
            <div
              style={{
                color: status.status === "error" ? "#ff5d3a" : "#51bf77 ",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {status.status === "error" && <InfoIcon />}
              {status.status === "success" && <CheckCircleIcon />}
              {` ${status.message}`}
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={{ background: "#1a1a1a" }}
              onClick={() => validate()}
            >
              {t("contact.send")}
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
}
