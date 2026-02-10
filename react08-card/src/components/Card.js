import React from "react";
import './Card.css';

const Card = (props) => {
 

  return (
    <>


    {
      props.carddata.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img src={card.image} alt="Card Image" className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        );
      })
    }
      
    </>
  );
};

export default Card;
