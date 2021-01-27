import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Editcard from './Editcard';

function Singlecard({ card }) {
  const [modalCardShow, setModalCardShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);

    console.log(card._id);

  return (
    <>
    <Card className="libcard">
      <div className="cardpic" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(" + card.icon + ")"}}>
        <Row className="cardbtns">
          <Col className="text-left">
            <FontAwesomeIcon icon="edit" size="2x" color="#25747D" onClick={() => {setModalCardShow(true); setCurrentId(card._id)}} />
          </Col>
          <Col className="text-right">
            <FontAwesomeIcon icon="times" size="2x" color="#25747D" />
          </Col>
        </Row>
      </div>
      <Card.Body className="cardbody">
        <Row>
          <Col className="text-left">
            <h6>{card.category}</h6>
          </Col>
          <Col className="text-right">
            <h6>{moment(card.createdAt).fromNow()}</h6>
          </Col>
        </Row>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.description}
        </Card.Text>
      </Card.Body>
    </Card>
    <Editcard show={modalCardShow} currentId={currentId} onHide={() => setModalCardShow(false)} />
    </>
  );
}

export default Singlecard;