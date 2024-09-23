import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            {/* Replace Card.Img with an iframe for YouTube video */}
            <div style={{ position: "relative", height: 0, paddingBottom: "56.25%" }}>
                <iframe
                    src={props.videoLink} // Link to the YouTube video
                    title="YouTube video"
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
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                {props.ghLink&&(
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub /> &nbsp;
                    {props.isBlog ? "Blog" : "GitHub"}
                </Button>
)}
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;
