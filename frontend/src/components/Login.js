import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleLogin } from 'react-google-login';
import { login } from '../actions/auth';


const initialState = { email: '', password: '' };

function Login(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      props.onHide();
      props.setUser(JSON.parse(localStorage.getItem('profile')));
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again later.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(formData));
    props.onHide();
    props.setUser(JSON.parse(localStorage.getItem('profile')));
  };

  return (
    <Modal {...props} className="modal" centered aria-labelledby="login-modal">
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col xs={12} className="text-center">
              <h3 className="text-secondary">Start creating your cards today!</h3>
            </Col>
            <Col xs={12} className="text-center">
              <GoogleLogin 
                clientId="1036757286437-hdaei0gb02fdqhgg2br3rb9k3sd45kh5.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button className="googleButton text-secondary" variant="warning" onClick={renderProps.onClick}><FontAwesomeIcon icon={["fab", "google"]} size="lg" color="#25747D" /> Sign In</Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />            
            </Col>
            <Col sm={{ span: 10, offset: 1 }} className="text-center">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control className="bg-danger formField" type="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email address" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control className="bg-danger formField" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" />
                </Form.Group>
                <Button className="text-secondary" variant="warning" onClick={props.onHide}>Close</Button>
                <Button className="text-secondary" variant="warning" type="submit" onClick={props.onHide}>Login</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Login;