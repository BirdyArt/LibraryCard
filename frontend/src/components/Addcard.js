import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createCard } from '../actions/cards';


function Addcard(props) {
  const [cardData, setCardData] = useState({ category: '', title: '', description: '', icon: '' });
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    if(card) setCardData(card);
  }, [card])

  const clear = () => {
    setCardData({ category: '', title: '', description: '', icon: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCard(cardData));
    }
  
  return (
    <Modal {...props} className="modal" centered aria-labelledby="login-modal">
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col xs={12} className="text-center">
              <h3 className="text-secondary">Add Card</h3>
            </Col>
            <Col sm={{ span: 10, offset: 1 }} className="text-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <label>
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({base64}) => setCardData({ ...cardData, icon: base64 })}
                    />
                    <div className="custom-file-upload">
                      Add Icon <FontAwesomeIcon icon="plus-circle" size="lg" color="#25747D" />  
                    </div>
                  </label>
                  
                </Form.Group>
                <Form.Group controlId="formBasicCategory">
                  <Form.Control className="bg-danger formField" placeholder="Category" value={cardData.category} onChange={(e) => setCardData({ ...cardData, category: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formBasicCardtitle">
                  <Form.Control className="bg-danger formField" placeholder="Card title" value={cardData.title} onChange={(e) => setCardData({ ...cardData, title: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                  <Form.Control className="bg-danger formField" placeholder="Short description" as="textarea" rows={4} value={cardData.description} onChange={(e) => setCardData({ ...cardData, description: e.target.value })} />
                </Form.Group>
                <Button className="text-secondary" variant="warning" onClick={props.onHide}>Close</Button>
                <Button className="text-secondary" variant="warning" onClick={clear}>Clear</Button>
                <Button className="text-secondary" variant="warning" type="submit">Save</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Addcard;