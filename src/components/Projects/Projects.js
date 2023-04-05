import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Medlife from "./medlife.jpg";
import lost_found from "./lost_found.png";
import Drvoice from "./voicedr.jpg";
//import medibot from "./medibot.jpeg";
//import pms from "./Project-Management-Software.jpg";
import pms from "./DES.jpg";
//import ecm from "./ecommerce.jpg";
import ecm from "./pollution.jpg";
//import chat from "./chatapplication.jpg";



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
              imgPath={lost_found}
              isBlog={false}
              title="Lost And Found"
              description="In this project we created an application which publish the list of lost item in campus.
              It allow users to connect in a way that they can post to us if the lost item found.
              We sent a alert notification to the user if his lost item has been found."
              ghLink="https://github.com/Adwaitk44/Lost-Found"
            //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pms}
              isBlog={false}
              title="Encrption and Decryption using DES"
              description="In this project we tried to secure communication over network through DES Algoritm.
              sender can sent message or file along with key.Only those receiver can read message who have shared key."
              ghLink="https://github.com/Adwaitk44/DES_encryption"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecm}
              isBlog={false}
              title="Pollution Free Path "
              description="In this project we tried to show user least polluted path from source to destination.
              It helps users to avoid/minimize pollution exposure.We have used A* Algoritm for implementation.  "
              ghLink="https://github.com/Adwaitk44/green-path-frontend"
              //demoLink="https://shoppkartt.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="In My Chat application user can create his group, can accept request , remove user, transfer adminship etc"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drvoice}
              isBlog={false}
              title="Voice Prescription System"
              description="Desktop Application created for Doctor so they can diagnose the patient  and send Prescription to Patient through Mail"
              ghLink="https://github.com/vinayakdeshpande1/VoicePrescription_System.git"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medlife}
              isBlog={false}
              title="Medlife"
              description="It is an ecommerce website where user can  buy products related to Medical Field"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
