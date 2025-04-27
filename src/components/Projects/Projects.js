import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I’ve worked on recently, showcasing my skills in game development and UI/UX design.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Moon Karts */}
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    videoLink="https://www.youtube.com/7DBj2WDapJE"
    title="Moon Karts"
    description={
      <>
        <strong>Role:</strong> Developer<br />
        Developed a real-money kart racing game incorporating Web3 staking, NFT rewards, and Photon Quantum multiplayer. Focused on bug fixing, optimizing performance, and implementing both backend and frontend systems.<br />
        <strong>Tech Stack:</strong><br />
        - Unity3D, Photon Quantum, Node.js, OAuth2.0, Docker, C#
      </>
    }
  />
</Col>
          {/* Gnome Wars */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/7DBj2WDapJE"
              title="Gnome Wars"
              description={
                <>
                  <strong>Role:</strong> Lead Developer<br />
                  Gnome Wars is a multiplayer FPS built in Unity with Mirror for WebGL. Players battle in gnome-themed worlds, with a dynamic shop system for skins and weapons.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unity, C#, WebGL, Node.js, Mirror, JavaScript
                </>
              }
            />
          </Col>

          {/* Phonics Zoom */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/G5k-pBDwP9k"
              title="Phonics Zoom"
              description={
                <>
                  <strong>Role:</strong> Developer<br />
                  An educational 2D app for kids to learn through mini-games like spelling, memory testing, and more, with dynamic content fetching via APIs.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unity, C#, Android, WebGL, HTML
                </>
              }
            />
          </Col>

          {/* AI Layer MOBA */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/1CX2esijNjQ"
              title="AI Layer MOBA"
              description={
                <>
                  <strong>Role:</strong> Game Developer<br />
                  A 3v3 strategic multiplayer game with character classes and MOBA mechanics. Developed in Unity with Photon Quantum for multiplayer and Node.js for backend.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unity, C#, WebGL, JavaScript, Node.js, Photon Quantum
                </>
              }
            />
          </Col>

          {/* FPS Game Prototype */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/CD9bGARsrBg"
              title="FPS Game Prototype"
              description={
                <>
                  <strong>Role:</strong> Game Developer<br />
                  A fast-paced FPS prototype with dynamic combat systems like laser attacks, grenades, and jetpacks. Developed in Unreal Engine with gameplay focused on fluid mechanics.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unreal Engine, C++, Blueprints, Niagara, Cascade
                </>
              }
            />
          </Col>

          {/* Horse Stable Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/HiZBZ_ydkoQ"
              title="Horse Stable Game"
              description={
                <>
                  <strong>Role:</strong> Developer<br />
                  A single-player horse racing game where you manage a horse's health and prepare it for races. Developed in Unity for Android and iOS.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unity, C#, Android, iOS
                </>
              }
            />
          </Col>

          {/* Vampire Fall
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/6clb09voJD0"
              title="Vampire Fall"
              description={
                <>
                  <strong>Role:</strong> Developer<br />
                  A 3D RPG set in a haunted village with deep dialogue and quest-driven gameplay. Developed in Unity for Android and iOS.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unity, Android, iOS
                </>
              }
            />
          </Col> */}

          {/* Family Farm Sea Side 2D
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/GAmkGG-Lot4"
              title="Family Farm Sea Side 2D"
              description={
                <>
                  <strong>Role:</strong> Developer<br />
                  A 2D farm management game where players sell products and aim to level up their farms. Developed for mobile platforms with leaderboards and APIs.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unity, Node.js, C#, Android, iOS
                </>
              }
            />
          </Col> */}

          {/* Murlan Card Game*/
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={emotion}
            isBlog={false}
            videoLink="https://youtube.com/embed/TkMcvg1NYdA"
            title="Fall Guys-Style Multiplayer Prototype"
            description={
              <>
                <strong>Role:</strong> Developer<br />
                Developed a real-time multiplayer platformer prototype, featuring costume syncing and physics-based obstacle synchronization. Implemented multiplayer systems and real-time synchronization.<br />
                <strong>Tech Stack:</strong><br />
                - Unity3D, Photon Quantum, Aavegotchi SDK, C#
              </>
            }
          />
        </Col>
         }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
