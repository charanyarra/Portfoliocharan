import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import niatImg from "../../Assets/Projects/NIAT.png";
import botnetImg from "../../Assets/Projects/Botnet.png";
import hybnetImg from "../../Assets/Projects/HybNet-HD- IoT DDoS Detection.png";
import unipoolImg from "../../Assets/Projects/unipool.png";
import awsImg from "../../Assets/Projects/AWS.png";
import dashboardImg from "../../Assets/Projects/dashboard.png";

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
              imgPath={niatImg}
              isBlog={false}
              title="NIAT Dashboard"
              description="Feedback and reporting platform built with React + TypeScript. Centralized data hub, interactive Power BI dashboards, and automated reporting that reduces manual effort and speeds up decisions."
              ghLink="https://github.com/charanyarra/niat-dashboard"
              demoLink="https://niat-datahub.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={botnetImg}
              isBlog={false}
              title="Deep Learning Botnet Detection"
              description="Hybrid model using GANs, Transformers, and 1D CNNs for botnet detection. Published at ICCCNT 2025 (IIT Indore)."
              ghLink="https://drive.google.com/drive/u/2/folders/17RYDF5VAXltsQhEAOfHuLzakcWvef8td"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hybnetImg}
              isBlog={false}
              title="HybNet-HD: IoT DDoS Detection"
              description="Multi-stream CNN + LSTM + attention model for IoT DDoS detection (UNSW-NB15). Published; achieved high accuracy with low false-positive rate."
              ghLink="https://drive.google.com/drive/u/2/folders/17RYDF5VAXltsQhEAOfHuLzakcWvef8td"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unipoolImg}
              isBlog={false}
              title="UniPool"
              description="A travel app for college students to find and share rides to and from campus—saving money and effort since the college is far from the city."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awsImg}
              isBlog={false}
              title="AWS WordPress Deployment"
              description="Deployed WordPress on AWS. Configured EC2, hardened the server, and implemented basic security controls."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboardImg}
              isBlog={false}
              title="Power BI Dashboards"
              description="Interactive dashboards for operations at NxtWave. Unified multi-source data, improved accuracy, and enabled faster decision-making."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
