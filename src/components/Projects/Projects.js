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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/7DBj2WDapJE"
              title="Gnome Wars"
              description="
"               
description=
{<>
  Gnome Wars is a fast-paced multiplayer FPS built in Unity and powered by the Mirror networking engine. Designed for WebGL, the game offers seamless browser-based play with smooth integration of CrazyGames for ad support. Players can log in to create or join private rooms, battle it out in a gnome-themed world, and access a dynamic in-game economy. The game includes a fully developed shop system, allowing players to purchase unique skins and weapons, with multiple choices tailored to different playstyles.

Built on a Node.js backend, Gnome Wars ensures a stable multiplayer experience with custom matchmaking. With a blend of lighthearted characters and intense combat, players take control of gnomes and engage in thrilling battles, offering a fresh and quirky take on FPS gameplay. Whether customizing your gnome with skins or unlocking new weapons, Gnome Wars delivers a unique and fun experience for every player.<br />
<strong>Tech Stack:</strong><br />
- Unity
- C#
- WebGL
- Node
- Mirror
- JavaScript
</>}
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/G5k-pBDwP9k"

              title="Phonics Zoom"
              description=
                {<>
                  Phonics Zoom is an educational 2D learning app designed for children, aimed at improving language and literacy skills through a series of interactive mini-games. Built in Unity, the app features a variety of educational games that focus on spelling, alphabet tracing, paragraph writing, memory testing, and phonics, providing a comprehensive learning experience for kids of all ages.

The app dynamically fetches data via APIs from a PHP-based web portal, which curates spelling lists and content tailored to specific age groups. This allows for customized learning experiences, ensuring the right words and challenges are presented to each child. The web portal also offers weekly challenge lists, which are randomly assigned to one of 27 different mini-games, adding an element of surprise and engagement to the learning journey.

With its playful design and structured learning content, Phonics Zoom helps kids develop essential language skills while keeping the experience fun and interactive.<br />
      <strong>Tech Stack:</strong><br />
          - Unity
          - C#
          - Android
          - WebGL
          - Html
          </>}
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/xqlKlvH26gE"
              title="Moon Karts"
              description={<>
              It’s a WebGL Game for a client which will be uploaded on a metaverse named as
              splinter lad for Arcade Colony. As a unity developer I worked on its game play development
              and multiplayer work and its smoothness. I also integrate the sso system by building js
               libraries in unity. Also the app is deployed for mobile.<br />
  <strong>Tech Stack:</strong><br />
      - Unity
      - C#
      - Android
      - WebGL
      - Photon Quantum
      - Node
      </>}
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={suicide}
             isBlog={false}
             videoLink="https://www.youtube.com/embed/1CX2esijNjQ"
             title="Ai Layer Moba"
             description=
             {<>
               AI Layer MOBA is an exciting multiplayer game currently under development, combining strategic combat and dynamic gameplay. Built in Unity with Photon Quantum for networking and powered by a Node.js backend, the game features 3v3 matchmaking using the Photon multiplayer system.

Players can choose from three distinct character classes—Square (Tank), Circle (Fighter), and Triangle (Marksman)—each equipped with three unique abilities and a basic attack. The gameplay revolves around classic MOBA mechanics, including minion spawning, tower destruction, and base defense. Destructible barrels add an extra layer of strategy to each match.

As the game progresses, players level up their characters, unlocking new abilities and enhancing their strengths. The goal is to destroy the opposing team's base while leveling up through team fights, tower destruction, and objective control.

With strategic depth and fast-paced action, AI Layer MOBA promises an engaging experience for competitive gamers.<br />
               <strong>Tech Stack:</strong><br />
                   - Unity
                   - C#
                   - WebGL
                   - JavaScript
                   - Node
                   </>}
             
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
             // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
           />
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={suicide}
             isBlog={false}
             videoLink="https://www.youtube.com/embed/V9EYRp-qMTA"
             title="FPS-OverWatchStyle"
             description=
             {<>
               This is a shooting project for copying the little bit style of over watch. This is 
               my first project in learnign which consist of abilities of character damage systemon 
               dummies, it is still in progress will be get improved by time and got updated accordingly<br />
               <strong>Tech Stack:</strong><br />
                   - Unreal
                   - C++
                   - Blue Print
                   - Niagara Particles system
                   - Cascade Particle system
                   </>}
             
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
             // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
           />
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              videoLink="https://www.youtube.com/embed/HiZBZ_ydkoQ"
              title="Horse Stable Game"
              description=
              {<>
               It is a single player game of horse racing in which you have to take care of horse maintain his health and make him ready for the races.<br />
                <strong>Tech Stack:</strong><br />
                    - Unity
                    - C#
                    - Android
                    - IOS
                    </>}
              
             // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}

              videoLink="https://www.youtube.com/embed/6clb09voJD0"
              title="Vampire Fall"
              description={<>
                It is a multiplayer Player RPG game in vampire attacks the player and player has to defend himself and town and also build the town and it safety measures. <br />
                <strong>Tech Stack:</strong><br />
                    - Unity
                    - Node
                    - C#
                    - Android
                    - IOS
                    - Unet4
                    </>}
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}

              videoLink="https://www.youtube.com/embed/GAmkGG-Lot4"
              title="Family farm Sea Side 2D"
              description={<>
              It is a 2d Builder game in which user manages a farm have in apps sell products and make his farm some top level.
              leader board and many more apis<br />
              <strong>Tech Stack:</strong><br />
                  - Unity
                  - Node
                  - C#
                  - Android
                  - IOS
                  </>}
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}

              videoLink="https://www.youtube.com/embed/jHqQYZ5Pg3U"
              title="Murlan Card Game"
              description={
                <>
                  It is a multiplayer Card Game with functionality of private room making playing with friends and also with chat system.<br />
                  <strong>Tech Stack:</strong><br />
                  - Unity
                  - WebSockets
                  - C#
                  - Android
                </>
              }
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
