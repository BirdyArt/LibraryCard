import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Singlecard from'./Singlecard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';



function Displaycards() {

  const cards = useSelector((state) => state.cards);

  console.log(cards);
  
  return (
    <Jumbotron className="text-center min-vh-100 cardsdisplay">
      {!cards.length ?
      <Row className="">
        <div className="spinner-border text-primary mx-auto" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </Row>  :
      <Row>
        {cards.map((card) => (
          <Col key={card._id} xs={12} sm={6} lg={4} xl={3}>
            <Singlecard card={card} />
          </Col>
        ))}
      </Row>}
    </Jumbotron>
  );
}

export default Displaycards;