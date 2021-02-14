import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { register } from '../actions/auth';

function Register(props) {
  const dispatch = useDispatch();

  const initialState = { name: '', email: '', password: '', confirm: '' };
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register(formData));
    props.onHide();
    props.setUser(JSON.parse(localStorage.getItem('profile')));
  };

  return (
    <Modal {...props} centered aria-labelledby="register-modal">
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col xs={12} className="text-center">
              <h3 className="text-secondary">Start creating your cards today!</h3>
            </Col>
            <Col sm={{ span: 10, offset: 1 }} className="text-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Control className="bg-danger formField" onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Username" />      
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Control className="bg-danger formField" onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Control className="bg-danger formField" onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formConfirm">    
                  <Form.Control className="bg-danger formField" onChange={(e) => setFormData({ ...formData, confirm: e.target.value })} type="password" placeholder="Confirm password" />
                </Form.Group>
                <Button className="text-secondary" variant="warning" onClick={props.onHide}>Close</Button>
                <Button className="text-secondary" variant="warning" type="submit">Register</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Register;