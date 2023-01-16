import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../../components';

const defaultIngredient = [
  {
    name: '',
    quantity: 0,
    mesurement: 'g',
  },
];

function IngredientsList({ inputChangeHandler }) {
  const [ingredientsList, setIngredientsList] = useState(defaultIngredient);

  const addIngredientHandler = e => {
    e.preventDefault();
    console.log('Ingredient added');
  };

  return (
    <div className="ingredients-list-container">
      {ingredientsList.map(ingredient => {
        const { name, quantity, measurement } = ingredient;

        return (
          <div key={name} className="ingredients-row">
            <Input
              inputId="ingredient"
              inputPlaceholder="Ingredient"
              onChange={inputChangeHandler}
            />
            <Input
              inputId="quantity"
              inputPlaceholder="Quantity"
              inputType="number"
              onChange={inputChangeHandler}
            />
            <Input
              inputId="measurement"
              inputPlaceholder="Measurement"
              onChange={inputChangeHandler}
            />
          </div>
        );
      })}
      <Button onClick={e => addIngredientHandler(e)}>+</Button>
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
};
