import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const videoLinks = (props.videoLinks ?? [props.videoLink]).filter(Boolean);

  return (
    <Card className="project-card-view">
      {videoLinks.length > 0 && (
        <Card.Body style={{ paddingBottom: 0 }}>
          {videoLinks.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              style={{
                position: "relative",
                height: 0,
                paddingBottom: "56.25%",
                marginBottom: idx === videoLinks.length - 1 ? 0 : 12,
              }}
            >
              <iframe
                src={src}
                title={`${props.title || "Project"} video ${idx + 1}`}
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
          ))}
        </Card.Body>
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : 0 }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;