import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    I am passionate about <b className="purple">game development</b> and creating interactive experiences through technology.
    <br />
    <br />
    I specialize in
    <i>
      <b className="purple"> Unity (C#)</b>, <b className="purple">Three.js</b>, and <b className="purple">Node.js</b>,
    </i>
    building everything from immersive gameplay to scalable multiplayer backends.
    <br />
    <br />
    My areas of interest include developing new
    <i>
      <b className="purple"> multiplayer games</b>, exploring cutting-edge
      <b className="purple"> game development tools</b>, and crafting engaging player experiences.
    </i>
    <br />
    <br />
    I also have hands-on experience working with
    <i>
      <b className="purple"> Unreal Engine</b>
    </i>
    for prototyping and
    <b className="purple"> backend development</b> for games using
    <i>
      <b className="purple"> Node.js and C++</b>.
    </i>
    <br />
    <br />
    I am constantly learning and pushing my skills further to create games that are innovative, scalable, and fun!
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zabi1112"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://twitter.com/Soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour  home-social-icons"*/}
              {/*  >*/}
              {/*    <AiOutlineTwitter />*/}
              {/*  </a>*/}
              {/*</li>*/}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zabi-ullah-warraich-688ab0162/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://www.instagram.com/zabiwarraich/"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour home-social-icons"*/}
              {/*  >*/}
              {/*    <AiFillInstagram />*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
