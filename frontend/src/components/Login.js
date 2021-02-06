import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';



function Login(props) {
  const dispatch = useDispatch();

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



  return (
    <Modal {...props} className="modal" centered aria-labelledby="login-modal">
      <Modal.Body className="show-grid">
        <Container className="text-center">
          <Row>
            <Col xs={12} className="text-center">
              <h3 className="text-secondary">Start creating your cards today!</h3>
            </Col>
            <Col sm={{ span: 10, offset: 1 }} className="text-center">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control className="bg-danger formField" type="email" placeholder="Email address" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control className="bg-danger formField" type="password" placeholder="Password" />
                </Form.Group>
              </Form>
              <GoogleLogin 
                clientId="1036757286437-hdaei0gb02fdqhgg2br3rb9k3sd45kh5.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button className="googleButton" variant="warning" onClick={renderProps.onClick}>Google Sign In</Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy="single_host_origin"
              />
            </Col>
          </Row>
          <Button className="text-secondary" variant="warning" onClick={props.onHide}>Close</Button>
          <Button className="text-secondary" variant="warning" onClick={props.onHide}>Login</Button>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Login;