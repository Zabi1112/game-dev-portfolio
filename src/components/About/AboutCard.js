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
        I am currently working as a Senior Software Engineer at <strong>Arcade Colony</strong>, with over <strong>6 years of professional experience</strong> delivering games, platforms, and web applications.
        <br />
        <br />
        My core expertise lies in <strong>game development</strong> using <strong>Unity</strong> and <strong>C#</strong>, while also building powerful application backends and tools with <strong>.NET</strong>.
        <br />
        <br />
        On the frontend, I design polished user experiences using <strong>React</strong> and <strong>Next.js</strong>, creating responsive interfaces, server-side rendering workflows, and production-ready web apps.
        <br />
        <br />
        I also build scalable services with <strong>Node.js</strong> and real-time multiplayer infrastructures, giving me a strong full-stack perspective across games and software products.
        <br />
        <br />
        I am passionate about crafting high-quality interactive solutions that combine gameplay, visuals, and architecture into one seamless experience.
      </p>
      <ul>
        <li className="about-activity">
          <ImPointRight /> Represented Pakistan in National Football Team
        </li>
        <li className="about-activity">
          <ImPointRight /> Building React & Next.js applications for modern web products
        </li>
        <li className="about-activity">
          <ImPointRight /> Developing backend APIs and services using .NET and Node.js
        </li>
        <li className="about-activity">
          <ImPointRight /> Designing scalable multiplayer systems and real-time game tools
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
