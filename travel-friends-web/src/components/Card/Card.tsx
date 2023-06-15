import React, { useState } from 'react';
import { Row, Col, Card, Container, Button, Modal, Form } from 'react-bootstrap';
import BannerDefault from '../../assets/icons/banner-default.svg';
import museu from '../../assets/images/museu.jpg';
import shopping from '../../assets/images/shopping.jpg';
import escola from '../../assets/images/escola.jpg';

import { Divider } from '../Divider/Divider.styled';
import { Comment, RoadMap } from '../../@types/models.interface';
import { RiDeleteBin6Line } from '@react-icons/all-files/ri/RiDeleteBin6Line';
import { RiMessage2Line } from '@react-icons/all-files/ri/RiMessage2Line';
import { RiSendPlane2Fill } from '@react-icons/all-files/ri/RiSendPlane2Fill';
import { commentRoadMap, deleteRoadmap, getAllRoadmap } from 'src/services/api/Requests/roadmap';
import { userHook } from '../../context/userData';

interface Props {
  data?: RoadMap[];
  divider?: boolean;
  bg?: string;
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const CardBox: React.FC<Props> = ({ bg, color, children, data, divider, onClick }) => {
  const [roadmaps, setRoadmaps] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState<string>('');
  const [selectedRoadmap, setSelectedRoadmap] = useState<RoadMap | null>(null);
  const { userData } = userHook();

  const onDeleteRoadmap = async (id: any) => {
    const { status } = await deleteRoadmap(id);
    if (status === 200) {
      const res = await getAllRoadmap();
      setRoadmaps(res);
    }
  };

  const onClickComment = (roadmap: any) => {
    setSelectedRoadmap(roadmap);
    setShowModal(true);
    console.log(roadmaps);
  };

  const onSubmitComment = async () => {
    try {
      const data: Comment = {
        userId: userData.id,
        userName: userData.name,
        content: comment,
        date: new Date().toString(),
      };

      const { status } = await commentRoadMap(selectedRoadmap?._id, data);

      if (status === 200) {
        const res = await getAllRoadmap();
        setRoadmaps(res);
      }
    } catch (error) {
    } finally {
      setComment('');
      setShowModal(false);
    }
  };

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {roadmaps &&
        roadmaps.length > 0 &&
        roadmaps?.map((item, idx) => (
          <Col>
            <Card tabIndex={idx} className="h-100" style={{ backgroundColor: 'fbfbfb' }}>
              <Container
                className="d-inline mt-2"
                style={{ position: 'absolute', textAlign: 'end' }}
              >
                <RiDeleteBin6Line
                  onClick={() => onDeleteRoadmap(item._id)}
                  style={{ cursor: 'pointer' }}
                  color="rgb(2 64 106)"
                  size={20}
                />
              </Container>
              {item.type === "museu" && <Card.Img className="p-5" variant="top" src={museu} style={{ height: "-webkit-fill-available" }} />}
              {item.type === "shopping" && <Card.Img className="p-5" variant="top" src={shopping} />}
              {item.type === "educacao" && <Card.Img className="p-5" variant="top" src={escola} />}
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                {item.isFree ? (
                  <Card.Text style={{ color: 'green' }}>Gratuito</Card.Text>
                ) : (
                  <Card.Subtitle className="text-muted">R$ {item.price}</Card.Subtitle>
                )}
                <Card.Text></Card.Text>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>
                  <Divider />
                </Card.Text>
                <Row>
                  <Col>
                    <p>Horário: </p>
                  </Col>
                  <Col>
                    <p className="text-right">
                      {item.start} até {item.end}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Participantes:</p>{' '}
                  </Col>
                  <Col>
                    <p className="text-right">
                      {item.participants ? item.participants.length : 0}/{item.person}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Button onClick={() => onClickComment(item)}>
                    <RiMessage2Line />
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Comentários</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              overflowY: 'auto',
              height: '400px',
            }}
          >
            {selectedRoadmap && selectedRoadmap.comments && selectedRoadmap.comments.length > 0 ? (
              selectedRoadmap.comments.map((item, idx) => (
                <div
                  key={idx}
                  style={{ border: '1px solid lightgrey', borderRadius: '10px', padding: '10px' }}
                >
                  <p style={{ fontSize: '11px', margin: 0 }}>
                    {item.userName} - {new Date(item.date).toLocaleDateString().toString()}
                  </p>
                  <p style={{ margin: 0 }}>{item.content}</p>
                </div>
              ))
            ) : (
              <Row>
                <Col>
                  <p>Nenhum comentário</p>
                </Col>
              </Row>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Container fluid>
            <Row>
              <Col xs={10}>
                <Form.Control
                  type="text"
                  placeholder="Digite seu comentário"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Col>
              <Col xs={2}>
                <Button variant="primary" onClick={onSubmitComment}>
                  <RiSendPlane2Fill />
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default CardBox;
