import React from "react";
import "./styles/pdf.css";
import martin from "../images/Martin.jpg";
import scriptwaveImg from "../images/scriptwave_screenshot.png";
import scriptbeatImg from "../images/scriptbeat_screenshot.png";
import { ArrowForwardIos } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Pdf() {
  const { t, i18n } = useTranslation();

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

  return (
    <div>
      <section className="PDF_intro">
        <div style={{ background: "#ceeab9" }} className="PDF_border"></div>
        <div className="PDF_intro-wrapper">
          <div className="PDF_intro-image-container">
            <img className="PDF_intro-image" src={martin} />
          </div>
          <div className="PDF_intro-text-wrapper">
            <div>
              <div className="PDF_intro-headline">Martin Axelsson</div>
              <div className="PDF_intro-link">github.com/martinalexanderaxelsson</div>
              <div className="PDF_intro-link">linkedin.com/in/martin-axelsson</div>
              <div className="PDF_intro-link">martinaxelsson.info</div>
            </div>
            <div className="PDF_intro-language">
              {Object.keys(lngs).map((lng, i) => (
                <div
                  key={lng}
                  style={{
                    color: i18n.resolvedLanguage === lng ? "black" : "grey",
                  }}
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {i18n.resolvedLanguage === lng && <ArrowForwardIos sx={{ fontSize: 12 }} />}
                  {lngs[lng].nativeName}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="PDF_section-wrapper">
        <div style={{ background: "#e8e6b0" }} className="PDF_border"></div>
        <div>
          <div className="lines">-------------------------------------------------------------</div>

          <h4 className="PDF_h4">{t("hello.h1")}</h4>
          <p className="PDF_p">{t("hello.p1")}</p>
          <p className="PDF_p">{t("hello.p2")}</p>
          <p className="PDF_p">{t("hello.p3")}</p>
        </div>
      </section>

      <section className="PDF_section-wrapper">
        <div style={{ background: "#ceeab9" }} className="PDF_border"></div>
        <div>
          <div className="lines">-------------------------------------------------------------</div>

          <h4 className="PDF_h4">{t("experience.h1")}</h4>
          <div className="PDF_work-headline">
            <b>
              {t("experience.work1.h1")}
              <span style={{ color: "#427E86" }}> {t("experience.work1.h2")}</span>
            </b>
          </div>
          <p className="PDF_p-under-headline">{t("experience.work1.p1")}</p>
          <p className="PDF_p">{t("experience.work1.p2")}</p>
          <p className="PDF_p">{t("experience.work1.p3")}</p>
          <div className="PDF_work-headline">
            <b>
              {t("experience.work2.h1")}
              <span style={{ color: "#427E86" }}> {t("experience.work2.h2")}</span>
            </b>
          </div>
          <p className="PDF_p-under-headline">{t("experience.work2.p1")}</p>
          <div className="PDF_work-headline">
            <b>
              {t("experience.work3.h1")}
              <span style={{ color: "#427E86" }}> {t("experience.work3.h2")}</span>
            </b>
          </div>
          <p className="PDF_p-under-headline">{t("experience.work3.p1")}</p>
          <div className="PDF_other-work-wrapper">
            {Object.values(sections).map((s, i) => {
              return (
                <>
                  <div key={i} className="PDF_other-work-headline">
                    {s.year}
                    {s.title}
                    <span style={{ color: "#427E86" }}>&nbsp;{s.place}</span>
                  </div>

                  <p className={`PDF_other-p-under-headline__${i}`}>{s.description}</p>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <div className="PDF_education-section-container">
        <section className="PDF_section-wrapper">
          <div style={{ background: "#e8e6b0" }} className="PDF_border"></div>
          <div>
            <div className="lines">
              -------------------------------------------------------------
            </div>

            <h4 className="PDF_h4">{t("education.h1")}</h4>
            <p className="PDF_p">
              <b>2022 UX design, Mediakurser AB</b>
            </p>
            <p className="PDF_p">
              <b>{t("education.p1")}</b>
            </p>
            <p className="PDF_p">
              <b>2007 - 2008 Industriell grafisk tryckprocess, Xenter Tumba</b>
            </p>
            <p className="PDF_p">
              <b>1999 - 2001 Medialinje, Rudbecks gymnasium</b>
            </p>
          </div>
        </section>
        <section className="PDF_section-wrapper">
          <div style={{ background: "#ceeab9" }} className="PDF_border"></div>
          <div>
            <div className="lines">
              -------------------------------------------------------------
            </div>
            <h4 className="PDF_h4">{t("skills.h1")}</h4>
            <p className="PDF_p">
              <b>{t("skills.text.h1")}</b>
              <br />
              Javascript, React, Aurelia, Node.js, CSS/SCSS
            </p>
            <p className="PDF_p">
              <b>{t("skills.text.h2")}</b>
              <br />
              Kanban, SCRUM
            </p>
            <p className="PDF_p">
              <b>CI/CD</b>
              <br />
              GIT, Team City, CircleCI, Octopus
            </p>
          </div>
        </section>
      </div>
      <div style={{ marginTop: "100px" }}></div>
      <p style={{ pageBreakAfter: "always" }}>&nbsp;</p>
      <p style={{ pageBreakBefore: "always" }}>&nbsp;</p>
      <section style={{ paddingBottom: "64.5%" }} className="PDF_section-wrapper">
        <div style={{ background: "#C7E9E1" }} className="PDF_border"></div>
        <div>
          <div className="lines">-------------------------------------------------------------</div>

          <h4 className="PDF_h4">{t("projects.h1")}</h4>
          <div style={{ paddingTop: "20px" }} className="PDF_other-work-headline">
            Scriptwave
          </div>

          <div className="PDF_project-wrapper">
            <div className="PDF_project-text">{t("projects.scriptwave")}</div>
            <div className="PDF_project-link-wrapper">
              <div className="PDF_project-link">Https://scriptwave.vongoo.se</div>
            </div>
            <img className="PDF_project-img" src={scriptwaveImg} />
          </div>
          <div style={{ paddingTop: "30px" }} className="PDF_other-work-headline">
            Scriptbeat
          </div>
          <div className="PDF_project-wrapper">
            <div className="PDF_project-text">{t("projects.scriptbeat")}</div>
            <div className="PDF_project-link-wrapper">
              <div className="PDF_project-link">Https://scriptbeat.vongoo.se</div>
            </div>
            <img className="PDF_project-img" src={scriptbeatImg} />
          </div>

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
    </div>
  );
}
