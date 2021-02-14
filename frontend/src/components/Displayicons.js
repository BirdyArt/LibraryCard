import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

function Displayicons(props) {
  const icons = useSelector((state) => state.icons);

  return (
    <Modal {...props} className="modal" centered aria-labelledby="login-modal" size="sm">
      <Modal.Body className="show-grid results text-center">
              {icons.icons.length !== 0 ? icons.icons.map((icon) => ( 
                <img src={icon.raster_sizes[8].formats[0].preview_url} onClick={() => {props.setCardData({ icon: icon.raster_sizes[8].formats[0].preview_url });props.onHide()}} alt="icon" ></img>
              )) : <h4>Sorry, no icons found ☹</h4>}
      </Modal.Body>
    </Modal>
  );
}

export default Displayicons;