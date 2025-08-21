import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Charan Yarra </span>
            from <span className="purple"> Vijayawada, Andhra Pradesh.</span>
            <br />
            I currently work in the Program Operations team at NxtWave, with hands-on experience in
            building <span className="purple">Power BI</span> dashboards and
            driving data-informed operations. Previously worked on
            <span className="purple"> AI/ML</span> projects including employee
            burnout prediction and IoT security research.
            <br />
            <br />
            I enjoy solving problems end-to-end — across data, product, and operations.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building dashboards and data tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI/ML and Deep Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and sharing learnings
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning curiosity into code and problems into products."{" "}
          </p>
          <footer className="blockquote-footer">Charan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
