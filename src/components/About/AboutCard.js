import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zabi Ullah Warraich</span>
            from <span className="purple">Pakistan</span>.
            <br />
            I am currently working as a Senior Software Engineer at CLV Technologies and Salvay.
            <br />
            I have over 5 years of experience in game development, specializing in Unity and C#.
            <br />
            <br />
            Apart from game development, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football (Represented Pakistan National Football Team)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Game Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Challenges in Game Development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about creating innovative gaming experiences!"
          </p>
          <footer className="blockquote-footer">Zabi Ullah Warraich</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
