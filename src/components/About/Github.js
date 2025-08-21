import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { 
  AiOutlineTrophy, 
  AiOutlineRocket, 
  AiOutlineBulb, 
  AiOutlineTeam,
  AiOutlineBarChart,
  AiOutlineCode
} from "react-icons/ai";

function Github() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const achievements = [
    {
      icon: <AiOutlineTrophy />,
      title: "Research Publications",
      value: "2",
      description: "Published papers in cybersecurity & IoT"
    },
    {
      icon: <AiOutlineRocket />,
      title: "Live Projects",
      value: "5+",
      description: "Deployed and maintained applications"
    },
    {
      icon: <AiOutlineBulb />,
      title: "AI/ML Projects",
      value: "4",
      description: "From prediction models to deep learning"
    },
    {
      icon: <AiOutlineTeam />,
      title: "Team Experience",
      value: "2+",
      description: "Years working in cross-functional teams"
    },
    {
      icon: <AiOutlineBarChart />,
      title: "Dashboards Built",
      value: "20+",
      description: "Power BI & data visualization projects"
    },
    {
      icon: <AiOutlineCode />,
      title: "Technologies",
      value: "8+",
      description: "Programming languages & tools mastered"
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={12}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Work <strong className="purple">Progress</strong> & Achievements
        </h1>
        <p style={{ color: "white", textAlign: "center", paddingBottom: "30px", fontSize: "1.1em" }}>
          From research publications to live applications, here's what I've accomplished
          <br />
          <span style={{ color: "#c084f5", fontSize: "0.9em" }}>
            Continuously learning and building solutions that make a difference
          </span>
        </p>
      </Col>
      
      {achievements.map((achievement, index) => (
        <Col xs={12} sm={6} md={4} key={index} style={{ marginBottom: "20px" }}>
          <Card 
            className={`achievement-card ${animate ? 'animate-in' : ''}`}
            style={{
              background: 'linear-gradient(135deg, rgba(119, 53, 136, 0.1), rgba(168, 85, 247, 0.1))',
              border: '1px solid rgba(192, 132, 245, 0.2)',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.4s ease',
              transform: animate ? 'translateY(0)' : 'translateY(20px)',
              opacity: animate ? 1 : 0,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <Card.Body style={{ textAlign: 'center', padding: '25px 15px' }}>
              <div style={{ fontSize: '2.5em', color: '#c084f5', marginBottom: '15px' }}>
                {achievement.icon}
              </div>
              <Card.Title style={{ color: 'white', fontSize: '1.2em', marginBottom: '10px' }}>
                {achievement.title}
              </Card.Title>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#c084f5', marginBottom: '10px' }}>
                {achievement.value}
              </div>
              <Card.Text style={{ color: '#bbb', fontSize: '0.9em' }}>
                {achievement.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      
      <Col md={12} style={{ textAlign: "center", marginTop: "30px" }}>
        <p style={{ color: "#bbb", fontSize: "0.9em" }}>
          🚀 Always pushing boundaries • 📊 Data-driven decisions • 🤖 AI-powered solutions
        </p>
      </Col>
    </Row>
  );
}

export default Github;
