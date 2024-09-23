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
  It’s a Webgl Game. It is a multiplayer shooting game with a unique concept in which player
               and ai characters are gnomes. As a game developer i worked in this game fetching data from API,
                Multiplayer functionality, Game Play Look and Feel, Game Modes, Google SSO, Twitter SSO.<br />
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
                  Its a 2d Learning App with multiple mini games in it.
               It is a client game for his school in which we made different games to teach students spelling paragraph
                writing and many more games like this as  game developer i have created many games in this i also fetched
                apis from the web portal where teachers can update the spelling
                lists and also i posts the result of the students back to portal.<br />
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

          <Col md={4} className="project-card">
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
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={suicide}
             isBlog={false}
             videoLink="https://www.youtube.com/embed/pIH7rIzS_U4"
             title="Ai Layer Moba"
             description=
             {<>
               It’s a WebGL Game. It's  just a game in progress right now.
               It will be a game like dota in which we have characters with their special abilities
               and in game level progression and within game level progress characters
                also transform shape.In this we have blockchain wires sso wallet
                integration and many other features.<br />
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
