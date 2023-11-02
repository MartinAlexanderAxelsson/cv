import React, { useState } from "react";
import "./styles/home.css";
import "./styles/intro.css";
import martin from "../images/Martin.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { IconButton } from "@mui/material";

export default function Home() {
  const sections = {
    section0: {
      headline: "2013 - 2019 Administratör",
      place: " PostNord AB",
      description:
        "PostNord AB PostNord AB PostNord AB PostNord AB PostNord AB PostNord AB",
    },
    section1: {
      headline: "2009 - 2011  Tryckpress operatör",
      place: " Intellecta tryckindustri AB",
      description:
        "Intellecta tryckindustri AB Intellecta tryckindustri ABIntellecta tryckindustri ABIntellecta tryckindustri ABIntellecta tryckindustri ABIntellecta tryckindustri ABIntellecta tryckindustri ABIntellecta tryckindustri ABIntellecta tryckindustri AB",
    },
    section2: {
      headline: "2004 - 2007  Terminalarbetare",
      place: " PostNord AB",
      description:
        "PostNord AB PostNord AB PostNord AB PostNord AB PostNord AB PostNord AB",
    },
    section3: {
      headline: "2001 - 2003  Junior Graphic designer ",
      place: " Lowe Forever AB",
      description:
        " Lowe Forever AB Lowe Forever AB Lowe Forever AB Lowe Forever AB Lowe Forever AB Lowe Forever AB Lowe Forever AB",
    },
  };

  const [expand, setExpand] = useState({
    section0: false,
    section1: false,
    section2: false,
    section3: false,
  });

  const expandMenu = (section) => {
    setExpand((p) => ({ ...p, [section]: !p[section] }));
  };
  return (
    <>
      <section className="intro">
        <div style={{ background: "#ceeab9" }} className="border"></div>
        <div className="intro__image-container">
          <img className="intro__image" src={martin} />
        </div>
        <div className="intro__text-wrapper">
          <div className="intro__headline">Martin Axelsson</div>
          <div>
            <div className="intro__link" href="github.com">
              github.com/martinalexanderaxelsson
            </div>
            <div className="intro__link" href="github.com">
              linkedin.com/martinalexanderaxelsson
            </div>
            <div className="intro__link" href="github.com">
              Email me&nbsp;
              <ArrowForwardIcon sx={{ fontSize: 15 }} />
            </div>
          </div>
          <div className="intro__language">
            <div>
              <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
              ENG
            </div>
            <div style={{ color: "grey" }}>SWE</div>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div style={{ background: "#e8e6b0" }} className="border"></div>
        <div>
          <div className="lines">
            -------------------------------------------------------------
          </div>
          <h4>Hello.</h4>
          <p>
            I am a curious and dedicated front-end developer, and I thrive on
            problem-solving challenges. I am passionate about building modern
            and user-friendly web applications, whether it´s for an employer or
            personal projects. I spend a lot of my free time building various
            open source projects.
          </p>
          <p>
            I am well versed in Javascript, CSS and SCSS and although I am
            currently working extensively in Aurelia, my main expertise is in
            React. I am an unpretentious and solution-oriented person and
            consider adaptability one of my strengths. Therefore I feel at home
            in a dynamic team environment in which mutual help and working
            towards a set goal is the common ground.
          </p>
          <p>
            I have a good analytical ability, a curious mind and a great thirst
            for knowledge. I strive to constantly explore new techniques and
            broaden my knowledge base.
          </p>
        </div>
      </section>
      <section className="section-wrapper">
        <div style={{ background: "#ceeab9" }} className="border"></div>
        <div>
          <div className="lines">
            -------------------------------------------------------------
          </div>
          <h4>Experience.</h4>
          <p>
            <b>
              2021 -- Front-end developer
              <span style={{ color: "#427E86" }}> Zapote Consulting AB</span>
            </b>
          </p>
          <p>
            Hos Zapote har jag haft möjligheten att arbeta med en rad olika
            projekt, som att planera och utveckla frontend för en applikation
            (bockat.se) dedikerad till spårning av glasleveranser på stativ.
            Detta innebar att skapa ett användarvänligt gränssnitt som
            möjliggjorde sömlös spårning genom skanning av QR-koder på stativen.
            Byggd med React och Material UI med en Node.js backend.
          </p>
          <p>
            Jag bidrar aktivt till vårt applikationssystem (Apply.se), som
            fungerar som en plattform för att ansöka om bidrag från olika
            stiftelser. Denna roll innebär nära samarbete med kunder
            (stiftelser), där jag implementerar frontend ändringar för att möta
            deras specifika krav och önskemål. Min förmåga att arbeta nära
            kunder säkerställer att deras behov alltid blir tillgodosedda. I
            Apply använder vi Aurelia och Angular för frontend tillsammans med
            Bootstrap för styling.
          </p>
          <p>
            Dessutom arbetar jag kontinuerligt med Episurf Medical, ett företag
            som specialiserar sig på utveckling av knäledsimplantat. För Episurf
            har jag utvecklat frontend för både nya och befintliga moduler i
            deras produktionssystem. I vissa fall har jag antagit en lead
            frontend roll och implementerat nya produktflöden i deras
            produktionssystem. Frontend-teknikerna som används här är främst
            Aurelia med vissa moduler byggda i React.
          </p>
          <p>
            <b>
              2021 Frontend-utvecklare intern
              <span style={{ color: "#427E86" }}> Joyride podcast</span>
            </b>
          </p>
          <p>
            Under min praktik på Joyride var jag ansvarig för att bygga en
            applikation som möjliggjorde för Joyride att kunde ladda upp och
            publicera videopisoder av sin podcast. Jag var ansvarig för att
            utforma applikationens arkitektur och designa hela systemet, där
            frontend byggdes i React och backend i Php.
          </p>
          <div>
            <b>
              2020 Frontend-utvecklare intern
              <span style={{ color: "#427E86" }}> Yayloh.com</span>
            </b>
          </div>
          <p style={{ marginTop: "7px" }}>
            Yayloh tillhandahåller ett system för hantering av returer för
            e-handlare. Som en del av ett team med 6 utvecklare bestod vårt
            arbete av frontend uppgifter i systemets digitala returformulär och
            systemets dashboard, där kunder hanterade statistik och data
            relaterat till returnerade varor. Applikationen är byggd i React med
            en Python backend.
          </p>
          {Object.values(sections).map((s, i) => {
            return (
              <div key={i}>
                <p>
                  <b>
                    {s.headline}
                    <span style={{ color: "#427E86" }}>{s.place}</span>
                    <IconButton onClick={() => expandMenu(`section${i}`)}>
                      {expand[`section${i}`] ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )}
                    </IconButton>
                  </b>
                </p>
                {expand[`section${i}`] && <p>{s.description}</p>}
              </div>
            );
          })}
        </div>
      </section>
      <section className="section-wrapper">
        <div style={{ background: "#e8e6b0" }} className="border"></div>
        <div>
          <div className="lines">
            -------------------------------------------------------------
          </div>
          <h4>Utbildning.</h4>
          <p>
            <b>2022 UX design Mediakurser AB</b>
          </p>
          <p>
            <b>2019 - 2021 Frontend-utvekling, Nackademin</b>
          </p>
          <p>
            <b>2007 - 2008 Industriell grafisk tryckprocess, Xenter Tumba</b>
          </p>
          <p>
            <b>1999 - 2001 Medialinje, Rudbecks gymnasium</b>
          </p>
        </div>
      </section>
    </>
  );
}
