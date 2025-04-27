import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hello everyone! I’m <span className="purple">Zabi Ullah Warraich</span> from <span className="purple">Pakistan</span>.
        <br />
        <br />
        I am currently working as a Senior Software Engineer at CLV Technologies and Salvay, with over <strong>5 years of professional experience</strong> in the gaming industry.
        <br />
        <br />
        My core expertise lies in <strong>game development</strong> using <strong>Unity</strong> and <strong>C#</strong>, with a strong focus on creating dynamic multiplayer experiences. 
        Alongside Unity, I also have <strong>hands-on experience with Unreal Engine</strong>, having built prototypes for client projects.
        <br />
        <br />
        In addition to game development, I am skilled in <strong>backend development</strong> using <strong>Node.js</strong>, enabling me to create complete and scalable multiplayer infrastructures.
        <br />
        <br />
        I am passionate about crafting high-quality, innovative gaming solutions that blend creativity with technology.
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Represented Pakistan in National Football Team
        </li>
        <li className="about-activity">
          <ImPointRight /> Exploring and mastering new game technologies
        </li>
        <li className="about-activity">
          <ImPointRight /> Developing scalable multiplayer backends
        </li>
        <li className="about-activity">
          <ImPointRight /> Solving complex challenges in game development
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Passionate about building games that connect players and push the boundaries of creativity!"
      </p>
      <footer className="blockquote-footer">Zabi Ullah Warraich</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
