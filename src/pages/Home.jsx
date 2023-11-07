import React, { useState, useEffect, useRef } from "react";
import "./styles/home.css";
import "./styles/intro.css";
import martin from "../images/Martin.jpg";
import scriptwaveVideo from "../video/Scriptwave_video.mp4";
import scriptbeatVideo from "../video/Scriptbeat_video.mp4";
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowForwardIos,
  ArrowForward,
  VolumeUp,
  VolumeOff,
  GitHub,
  LinkedIn,
  Download,
  FlashOnRounded,
} from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import AlertDialogSlide from "../components/AlertDialogSlide";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Fade } from "react-awesome-reveal";
import Pdf from "./Pdf";
import generatePDF from "react-to-pdf";

export default function Home() {
  const { t, i18n } = useTranslation();

  const matches_sm = useMediaQuery("(min-width:600px)");
  const matches_md = useMediaQuery("(min-width:900px)");

  const [hover, setHover] = useState(false);

  const lngs = {
    en: { nativeName: "ENG" },
    se: { nativeName: "SWE" },
  };

  const sections = {
    section0: {
      year: t("experience.work4.year"),
      title: t("experience.work4.title"),
      place: t("experience.work4.place"),
      description: t("experience.work4.description"),
    },
    section1: {
      year: t("experience.work5.year"),
      title: t("experience.work5.title"),
      place: t("experience.work5.place"),
      description: t("experience.work5.description"),
    },
    section2: {
      year: t("experience.work6.year"),
      title: t("experience.work6.title"),
      place: t("experience.work6.place"),
      description: t("experience.work6.description"),
    },
    section3: {
      year: t("experience.work7.year"),
      title: t("experience.work7.title"),
      place: t("experience.work7.place"),
      description: t("experience.work7.description"),
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
    section6: false,
  });

  const getTargetElement = () => document.getElementById("pdf");

  const handleGeneratePdf = () => {
    let clone = getTargetElement();
    clone.cloneNode(true);
    clone.style.display = "unset";
    generatePDF(getTargetElement, {
      filename: `CV_${
        lngs[i18n.resolvedLanguage].nativeName
      }_Martin_Axelsson.pdf`,
      page: {
        format: "A4",
      },
    });
    clone.remove();
  };

  const expandMenu = (section) => {
    setExpand((p) => ({ ...p, [section]: !p[section] }));
  };

  const goToVideo = (video) => {
    let url = `https://${video}.vongoo.se`;

    if (matches_md) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div id="pdf" style={{ display: "none", background: "#f2f2f2" }}>
        <Pdf />
      </div>

      <section className="intro">
        <div style={{ background: "#ceeab9" }} className="border"></div>
        <div className="intro-wrapper">
          <div className="intro__image-container">
            <img className="intro__image" src={martin} />
          </div>
          <div className="intro__text-wrapper">
            <div>
              <div className="intro__headline">Martin Axelsson</div>
              {matches_md ? (
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
                  <div
                    className="email-link"
                    data-html2canvas-ignore="true"
                    onClick={() => handleGeneratePdf()}
                  >
                    PDF&nbsp;
                    <Download sx={{ fontSize: 18 }} />
                  </div>
                </>
              ) : (
                <Stack direction="row" spacing={1} mt={2}>
                  <Button
                    sx={{ background: "#1a1a1a" }}
                    onClick={() =>
                      window.open(
                        "https://github.com/martinalexanderaxelsson",
                        "_blank"
                      )
                    }
                    size="small"
                    variant="contained"
                    endIcon={<GitHub />}
                  >
                    <b>Github</b>
                  </Button>
                  <Button
                    sx={{ background: "#1a1a1a" }}
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/martin-axelsson",
                        "_blank"
                      )
                    }
                    size="small"
                    variant="contained"
                    endIcon={<LinkedIn />}
                  >
                    <b>LinkedIn</b>
                  </Button>
                  {/* <Button
                    sx={{ background: "rgb(0, 76, 118)" }}
                    onClick={() => handleGeneratePdf()}
                    size="small"
                    variant="contained"
                    endIcon={<Download />}
                  >
                    <b>PDF</b>
                  </Button> */}
                </Stack>
              )}
              <AlertDialogSlide />
            </div>
            <div className="intro__language">
              {Object.keys(lngs).map((lng, i) => (
                <div
                  key={lng}
                  style={{
                    color:
                      i18n.resolvedLanguage !== lng && hover === lng
                        ? "rgb(0, 76, 118)"
                        : i18n.resolvedLanguage === lng
                        ? "#1a1a1a"
                        : "grey",
                  }}
                  onMouseEnter={() => setHover(lng)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {i18n.resolvedLanguage === lng && (
                    <ArrowForwardIos sx={{ fontSize: 12 }} />
                  )}
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
          {matches_sm ? (
            <div className="lines">
              -------------------------------------------------------------
            </div>
          ) : (
            <div className="lines">-------------------------------</div>
          )}
          <h4>{t("hello.h1")}</h4>
          <p>{t("hello.p1")}</p>
          <p>{t("hello.p2")}</p>
          <p>{t("hello.p3")}</p>
        </div>
      </section>
      <section className="section-wrapper">
        <div style={{ background: "#ceeab9" }} className="border"></div>
        <div>
          {matches_sm ? (
            <div className="lines">
              -------------------------------------------------------------
            </div>
          ) : (
            <div className="lines">-------------------------------</div>
          )}
          <h4>{t("experience.h1")}</h4>
          <div className="work-headline">
            <b>
              {t("experience.work1.h1")}
              {!matches_sm && <br />}
              <span style={{ color: "#427E86" }}>
                {" "}
                {t("experience.work1.h2")}
              </span>
            </b>
          </div>
          <p className="p-under-headline">{t("experience.work1.p1")}</p>
          <p>{t("experience.work1.p2")}</p>
          <p>{t("experience.work1.p3")}</p>
          <div className="work-headline">
            <b>
              {t("experience.work2.h1")}
              {!matches_sm && <br />}
              <span style={{ color: "#427E86" }}>
                {" "}
                {t("experience.work2.h2")}
              </span>
            </b>
          </div>
          <p className="p-under-headline">{t("experience.work2.p1")}</p>
          <div className="work-headline">
            {t("experience.work3.h1")}
            {!matches_sm && <br />}
            <span style={{ color: "#427E86" }}>
              {" "}
              {t("experience.work3.h2")}
            </span>
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
                    {s.year} {!matches_sm && <br />}
                    {s.title}
                    {matches_sm && (
                      <span style={{ color: "#427E86" }}>&nbsp;{s.place}</span>
                    )}
                    {matches_sm ? (
                      <div>
                        {expand[`section${i}`] ? (
                          <ArrowDropUp />
                        ) : (
                          <ArrowDropDown />
                        )}
                      </div>
                    ) : (
                      <IconButton variant="contained">
                        {expand[`section${i}`] ? (
                          <ArrowDropUp fontSize="large" />
                        ) : (
                          <ArrowDropDown fontSize="large" />
                        )}
                      </IconButton>
                    )}
                  </div>
                  {expand[`section${i}`] && (
                    <Fade duration={1500} triggerOnce>
                      <p className={`other__p-under-headline__${i}`}>
                        {!matches_sm && (
                          <>
                            <b style={{ color: "#427E86" }}>{s.place}</b>
                            <br />
                          </>
                        )}

                        {s.description}
                      </p>
                    </Fade>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
      <div className="education-section-container">
        <section className="section-wrapper">
          <div style={{ background: "#e8e6b0" }} className="border"></div>
          <div>
            {matches_sm ? (
              <div className="lines">
                -------------------------------------------------------------
              </div>
            ) : (
              <div className="lines">-------------------------------</div>
            )}
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
            {matches_sm ? (
              <div className="lines">
                -------------------------------------------------------------
              </div>
            ) : (
              <div className="lines">-------------------------------</div>
            )}
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
      <section style={{ paddingBottom: "70px" }} className="section-wrapper">
        <div style={{ background: "#C7E9E1" }} className="border"></div>
        <div>
          {matches_sm ? (
            <div className="lines">
              -------------------------------------------------------------
            </div>
          ) : (
            <div className="lines">-------------------------------</div>
          )}
          <h4>{t("projects.h1")}</h4>
          <div
            className="other__work-headline"
            onClick={() => expandMenu("section4")}
          >
            Scriptwave
            <div>{expand.section4 ? <ArrowDropUp /> : <ArrowDropDown />}</div>
          </div>
          {expand.section4 && (
            <Fade duration={1500} triggerOnce>
              <div className="project-wrapper">
                <div className="project-text">{t("projects.scriptwave")}</div>
                <div className="project-link-wrapper">
                  <a
                    target="_blank"
                    href="https://scriptwave.vongoo.se"
                    className="project-link"
                  >
                    Go to Scriptwave&nbsp;
                    <ArrowForward sx={{ fontSize: 18 }} />
                  </a>
                  {muted.scriptwave ? (
                    <IconButton
                      onClick={() => setMuted({ ...muted, scriptwave: false })}
                    >
                      <VolumeOff />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => setMuted({ ...muted, scriptwave: true })}
                    >
                      <VolumeUp />
                    </IconButton>
                  )}
                </div>

                <video
                  style={{ cursor: matches_md ? "pointer" : "default" }}
                  onClick={() => goToVideo("scriptwave")}
                  autoPlay
                  loop
                  muted={muted.scriptwave}
                  className="project-video"
                  src={scriptwaveVideo}
                />
              </div>
            </Fade>
          )}
          <div
            className="other__work-headline"
            onClick={() => expandMenu("section5")}
          >
            Scriptbeat
            <div>{expand.section5 ? <ArrowDropUp /> : <ArrowDropDown />}</div>
          </div>
          {expand.section5 && (
            <Fade duration={1500}>
              <div className="project-wrapper">
                <div className="project-text">{t("projects.scriptbeat")}</div>
                <div className="project-link-wrapper">
                  <a
                    target="_blank"
                    href="https://scriptbeat.vongoo.se"
                    className="project-link"
                  >
                    Go to Scriptbeat&nbsp;
                    <ArrowForward sx={{ fontSize: 18 }} />
                  </a>
                  {muted.scriptbeat ? (
                    <IconButton
                      onClick={() => setMuted({ ...muted, scriptbeat: false })}
                    >
                      <VolumeOff />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => setMuted({ ...muted, scriptbeat: true })}
                    >
                      <VolumeUp />
                    </IconButton>
                  )}
                </div>
                <video
                  style={{ cursor: matches_md ? "pointer" : "default" }}
                  onClick={() => goToVideo("scriptbeat")}
                  autoPlay
                  loop
                  muted={muted.scriptbeat}
                  className="project-video"
                  src={scriptbeatVideo}
                />
              </div>
            </Fade>
          )}
          {/* <div className="other__work-headline" onClick={() => expandMenu("section6")}>
            Von goose
            <div>{expand.section6 ? <ArrowDropUp /> : <ArrowDropDown />}</div>
          </div>
          {expand.section6 && (
            <Fade duration={1500}>
              <div className="project-wrapper">
                <div className="project-text">{t("projects.vongoose")}</div>
              </div>
            </Fade>
          )} */}
        </div>
      </section>
    </>
  );
}
