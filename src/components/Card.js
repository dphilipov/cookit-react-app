import React from 'react';
import PropTypes from 'prop-types';
import { Button, ImagePreview } from '.';
import { ShoppingCart } from '../icons';

function Card({ recipe }) {
  const { name, description, imageId } = recipe;

  const addToShoppingListHandler = () => {
    console.log('Added');
  };

  return (
    <div className="card-container">
      <ImagePreview imageId={imageId} quality={33} />
      <div className="recipe-content">
        <h2 className="recipe-name">{name}</h2>
        <p>{description}</p>
        <div className="buttons-container">
          <Button theme="text" className="read-recipe-btn">
            READ FULL RECIPE
          </Button>
          <Button
            className="add-ingredients-btn"
            icon={<ShoppingCart />}
            theme="icon"
            onClick={addToShoppingListHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  recipe: PropTypes.shape(),
};
