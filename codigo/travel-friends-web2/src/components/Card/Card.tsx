import React from "react";
import { Row, Col, Card } from 'react-bootstrap';
import { RoadMap } from "../../@types/models.interface";

interface Props {
    data?: RoadMap[];
  bg?: string;
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const CardBox: React.FC<Props> = ({ 
    bg,
    color,
    children,
    data,
    onClick,
  }) => { 
  return (
    <Row xs={1} md={2} className="g-4">
      {data?.map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardBox;
