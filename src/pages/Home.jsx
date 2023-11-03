import React, { useState, useEffect } from "react";
import "./styles/home.css";
import "./styles/intro.css";
import martin from "../images/Martin.jpg";
import scriptwaveVideo from "../video/Scriptwave_video.mp4";
import scriptbeatVideo from "../video/Scriptbeat_video.mp4";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Button, IconButton, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import AlertDialogSlide from "../components/AlertDialogSlide";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const { t, i18n } = useTranslation();
  const matches = useMediaQuery("(min-width:900px)");
  const lngs = {
    en: { nativeName: "ENG" },
    se: { nativeName: "SWE" },
  };

  const sections = {
    section0: {
      headline: t("experience.work4.h1"),
      place: t("experience.work4.h2"),
      description: t("experience.work4.p1"),
    },
    section1: {
      headline: t("experience.work5.h1"),
      place: t("experience.work5.h2"),
      description: t("experience.work5.p1"),
    },
    section2: {
      headline: t("experience.work6.h1"),
      place: t("experience.work6.h2"),
      description: t("experience.work6.p1"),
    },
    section3: {
      headline: t("experience.work7.h1"),
      place: t("experience.work7.h2"),
      description: t("experience.work7.p1"),
    },
  };
  const [muted, setMuted] = useState({ scriptwave: true, scriptbeat: true });
  const [expand, setExpand] = useState({
    section0: false,
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  const expandMenu = section => {
    setExpand(p => ({ ...p, [section]: !p[section] }));
  };

  return (
    <>
      <section className="intro">
        <div style={{ background: "#ceeab9" }} className="border"></div>
        <div className="intro-wrapper">
          <div className="intro__image-container">
            <img className="intro__image" src={martin} />
          </div>
          <div className="intro__text-wrapper">
            <div>
              <div className="intro__headline">Martin Axelsson</div>
              {matches ? (
                <>
                  <a
                    className="intro__link"
                    target="_blank"
                    href="https://github.com/martinalexanderaxelsson"
                  >
                    github.com/martinalexanderaxelsson
                  </a>

                  <a
                    className="intro__link"
                    target="_blank"
                    href="https://linkedin.com/in/martin-axelsson"
                  >
                    linkedin.com/in/martin-axelsson
                  </a>
                </>
              ) : (
                <Stack direction="row" spacing={1} mt={2}>
                  <Button
                    sx={{ background: "#1a1a1a" }}
                    onClick={() =>
                      window.open("https://github.com/martinalexanderaxelsson", "_blank")
                    }
                    size="small"
                    variant="contained"
                    endIcon={<GitHubIcon />}
                  >
                    <b>Github</b>
                  </Button>
                  <Button
                    sx={{ background: "#1a1a1a" }}
                    onClick={() => window.open("https://linkedin.com/in/martin-axelsson", "_blank")}
                    size="small"
                    variant="contained"
                    endIcon={<LinkedInIcon />}
                  >
                    <b>LinkedIn</b>
                  </Button>
                </Stack>
              )}
              <AlertDialogSlide />
            </div>
            <div className="intro__language">
              {Object.keys(lngs).map((lng, i) => (
                <div
                  key={lng}
                  style={{
                    color: i18n.resolvedLanguage === lng ? "black" : "grey",
                  }}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {i18n.resolvedLanguage === lng && <ArrowForwardIosIcon sx={{ fontSize: 12 }} />}
                  {lngs[lng].nativeName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div style={{ background: "#e8e6b0" }} className="border"></div>
        <div>
          {/* <div className="lines">-------------------------------------------------------------</div> */}
          <div className="lines">----------------------------------</div>
          <h4>{t("hello.h1")}</h4>
          <p>{t("hello.p1")}</p>
          <p>{t("hello.p2")}</p>
          <p>{t("hello.p3")}</p>
        </div>
      </section>
      <section className="section-wrapper">
        <div style={{ background: "#ceeab9" }} className="border"></div>
        <div>
          {/* <div className="lines">-------------------------------------------------------------</div> */}
          <div className="lines">----------------------------------</div>
          <h4>{t("experience.h1")}</h4>
          <div className="work-headline">
            <b>
              {t("experience.work1.h1")}
              {!matches && <br />}
              <span style={{ color: "#427E86" }}> {t("experience.work1.h2")}</span>
            </b>
          </div>
          <p className="p-under-headline">{t("experience.work1.p1")}</p>
          <p>{t("experience.work1.p2")}</p>
          <p>{t("experience.work1.p3")}</p>
          <div className="work-headline">
            <b>
              {t("experience.work2.h1")}
              {!matches && <br />}
              <span style={{ color: "#427E86" }}> {t("experience.work2.h2")}</span>
            </b>
          </div>
          <p className="p-under-headline">{t("experience.work2.p1")}</p>
          <div className="work-headline">
            {t("experience.work3.h1")}
            {!matches && <br />}
            <span style={{ color: "#427E86" }}> {t("experience.work3.h2")}</span>
          </div>
          <p className="p-under-headline">{t("experience.work3.p1")}</p>
          <div className="other-work__wrapper">
            {Object.values(sections).map((s, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="other__work-headline"
                    onClick={() => expandMenu(`section${i}`)}
                  >
                    {s.headline}

                    <span style={{ color: "#427E86" }}>&nbsp;{s.place}</span>
                    <div>{expand[`section${i}`] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
                  </div>
                  {expand[`section${i}`] && (
                    <p className={`other__p-under-headline__${i}`}>{s.description}</p>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
      <div style={{ display: "flex", width: "80px" }}>
        <section className="section-wrapper">
          <div style={{ background: "#e8e6b0" }} className="border"></div>
          <div>
            <div className="lines">
              -------------------------------------------------------------
            </div>
            <h4>{t("education.h1")}</h4>
            <p>
              <b>2022 UX design, Mediakurser AB</b>
            </p>
            <p>
              <b>{t("education.p1")}</b>
            </p>
            <p>
              <b>2007 - 2008 Industriell grafisk tryckprocess, Xenter Tumba</b>
            </p>
            <p>
              <b>1999 - 2001 Medialinje, Rudbecks gymnasium</b>
            </p>
          </div>
        </section>
        <section className="section-wrapper">
          <div style={{ background: "#ceeab9" }} className="border"></div>
          <div>
            <div className="lines">
              -------------------------------------------------------------
            </div>
            <h4>{t("skills.h1")}</h4>
            <p>
              <b>{t("skills.text.h1")}</b>
              <br />
              Javascript, React, Aurelia, Node.js, CSS/SCSS
            </p>
            <p>
              <b>{t("skills.text.h2")}</b>
              <br />
              Kanban, SCRUM
            </p>
            <p>
              <b>CI/CD</b>
              <br />
              GIT, Team City, CircleCI, Octopus
            </p>
          </div>
        </section>
      </div>
      <section style={{ paddingBottom: "100px" }} className="section-wrapper">
        <div style={{ background: "#C7E9E1" }} className="border"></div>
        <div>
          <div className="lines">-------------------------------------------------------------</div>
          <h4>{t("projects.h1")}</h4>
          <div className="other__work-headline" onClick={() => expandMenu("section4")}>
            Scriptwave
            <div>{expand.section4 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
          </div>
          {expand.section4 && (
            <div className="project-wrapper">
              <div className="project-text">{t("projects.scriptwave")}</div>
              <div className="project-link-wrapper">
                <a target="_blank" href="https://scriptwave.vongoo.se" className="project-link">
                  Scriptwave&nbsp;
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </a>
                {muted.scriptwave ? (
                  <IconButton onClick={() => setMuted({ ...muted, scriptwave: false })}>
                    <VolumeOffIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setMuted({ ...muted, scriptwave: true })}>
                    <VolumeUpIcon />
                  </IconButton>
                )}
              </div>

              <video
                style={{ cursor: "pointer" }}
                onClick={() => window.open("https://scriptwave.vongoo.se", "_blank")}
                autoPlay
                loop
                muted={muted.scriptwave}
                className="project-video"
                src={scriptwaveVideo}
              />
            </div>
          )}
          <div className="other__work-headline" onClick={() => expandMenu("section5")}>
            Scriptbeat
            <div>{expand.section5 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</div>
          </div>
          {expand.section5 && (
            <div className="project-wrapper">
              <div className="project-text">{t("projects.scriptbeat")}</div>
              <div className="project-link-wrapper">
                <a target="_blank" href="https://scriptbeat.vongoo.se" className="project-link">
                  Scriptbeat&nbsp;
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </a>
                {muted.scriptbeat ? (
                  <IconButton onClick={() => setMuted({ ...muted, scriptbeat: false })}>
                    <VolumeOffIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => setMuted({ ...muted, scriptbeat: true })}>
                    <VolumeUpIcon />
                  </IconButton>
                )}
              </div>
              <video
                style={{ cursor: "pointer" }}
                onClick={() => window.open("https://scriptbeat.vongoo.se", "_blank")}
                autoPlay
                loop
                muted={muted.scriptbeat}
                className="project-video"
                src={scriptbeatVideo}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
