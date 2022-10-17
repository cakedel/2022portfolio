import "./Main.scss";
import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { TypeAnimation } from "react-type-animation";
import { profile, portfolioData } from "./Data";

const ANCHOR = portfolioData.map((it) => (it = it.anchors));
const Cover = (on) => {
  return <div className={`cover ${on ? "on" : ""}`}>커버</div>;
};
const App = () => {
  const [num, setNum] = useState(1);
  const [on, setOn] = useState(false);
  const afterPage = (destination, origin) => {
    setNum(destination.index);
    setOn(destination.index === origin.index - 1 ? !on : on);
    console.log(num);
  };

  return (
    <div className="PORTFOLIO">
      <div className="num">{portfolioData[num - 1]?.id}</div>
      <nav className="Gnb">
        <ul>
          {portfolioData.map((it, idx) => {
            return (
              <li key={idx}>
                <a
                  href={`#${it.anchors}`}
                  className={`menu ${idx === num - 1 ? "on" : ""}`}
                ></a>
              </li>
            );
          })}
          <li>
            <a
              href={`#profile`}
              className={`menu ${6 === num ? "on" : ""}`}
            ></a>
          </li>
        </ul>
      </nav>
      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        anchors={["cover", ...ANCHOR, "profile"]}
        afterLoad={(origin, destination, direction) =>
          afterPage(destination, origin)
        }
        css3={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section mainPage cover">
                <div className="case">
                  <TypeAnimation
                    sequence={["상상을 코딩하다"]}
                    wrapper="h1"
                    speed="0"
                    cursor={true}
                  />
                  <p>2022 HONG JIWON PORTFOLIO</p>
                  <div className="code">
                    CODE <br />
                    IMAGINATION
                  </div>
                </div>
              </div>
              {portfolioData.map((it, idx) => {
                return (
                  <div className="section" key={it.id}>
                    <div className="case">
                      <div className="inner">
                        <div className="cover">
                          <div className="picture">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/assets/img/pf.png"
                              }
                              alt="{it.title}"
                              className="pfPicture"
                            />
                            <figure className={`item0${it.id}`}></figure>
                          </div>
                          <ul className="desc">
                            <li className="pfTitle">{it.title}</li>
                            <li className="pfLink">
                              <ul>
                                <li>
                                  <a
                                    className="linkBtn"
                                    href={it.demo}
                                    target="_blank"
                                  >
                                    Demo
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="linkBtn"
                                    href={it.github}
                                    target="_blank"
                                  >
                                    Github
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="pfSkillTitle">Skill</li>
                            <li className="pfSkill">
                              {it.skill?.map((el, idx) => {
                                return (
                                  <ul className="skill" key={idx}>
                                    <li>{el}</li>
                                  </ul>
                                );
                              })}
                            </li>
                            <li className="pfInfo">{it.info}</li>
                            <li>
                              {it.color && <strong>Color</strong>}
                              <ul className="pfColor">
                                {it.color?.map((el, idx) => {
                                  return (
                                    <li
                                      key={idx}
                                      style={{ background: el }}
                                    ></li>
                                  );
                                })}
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="section profile">
                <div className="case">
                  <div className="inner">
                  <TypeAnimation
                    sequence={["HONG JIWON"]}
                    wrapper="h2"
                    speed="0"
                    cursor={true}
                  />
                    <div className="desc">
                      <div className="content">
                        <h3>PROFILE</h3>
                        <ul>
                          <li>{profile.name}</li>
                          <li>{profile.email}</li>
                          <li>{profile.tel}</li>
                        </ul>
                      </div>
                      <div className="content">
                        <h3>SKILL</h3>
                        <ul>
                          {profile.skill.map((it, idx) => {
                            return <li key={idx}>{it}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
