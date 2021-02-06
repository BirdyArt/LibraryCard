import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {signin} from '../actions';
import { useSelector } from 'react-redux';



function Displayicons(props) {
  const icons = useSelector((state) => state.icons);


  return (
    <Modal {...props} className="modal" centered aria-labelledby="login-modal" size="sm">
      <Modal.Body className="show-grid results text-center" scrollable={true}>
              {icons ? icons.icons.map((icon) => ( 
                <img src={icon.raster_sizes[8].formats[0].preview_url} onClick={() => {props.setCardData({ icon: icon.raster_sizes[8].formats[0].preview_url });props.onHide()}} alt="icon" ></img>
              )) : null}
      </Modal.Body>
    </Modal>
  );
}

export default Displayicons;