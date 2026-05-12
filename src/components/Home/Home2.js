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
    I am passionate about <b className="purple">game development</b> and building rich digital products with modern web technologies.
    <br />
    <br />
    I specialize in
    <i>
      <b className="purple"> Unity (C#)</b>, <b className="purple">.NET</b>, <b className="purple">React</b>, <b className="purple">Next.js</b>, and <b className="purple">Three.js</b>,
    </i>
    delivering interactive gameplay, frontend experiences, and backend services.
    <br />
    <br />
    My work blends
    <i>
      <b className="purple">responsive web interfaces</b>, <b className="purple">server-side rendered apps</b>, and <b className="purple">real-time multiplayer systems</b>
    </i>
    that are fast, scalable, and user-friendly.
    <br />
    <br />
    I also build robust backend APIs with
    <i>
      <b className="purple">Node.js</b> and <b className="purple">.NET</b>
    </i>
    to support game services, cloud workflows, and data-driven applications.
    <br />
    <br />
    I am constantly learning and pushing my skills further to create software that is innovative, reliable, and fun.
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
              {/*    href="https://twitter.com/Zabi1112"*/}
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
