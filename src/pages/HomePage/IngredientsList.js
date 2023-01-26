import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '../../components';
import { PlusIcon, RemoveIcon } from '../../icons';

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

    setIngredientsList(prevState => [...prevState, ...defaultIngredient]);
  };

  const removeIngredientHandler = (e, idx) => {
    e.preventDefault();

    const newIngredientsList = [...ingredientsList];
    newIngredientsList.splice(idx, 1);
    setIngredientsList(newIngredientsList);
  };

  return (
    <div className="ingredients-list-container">
      {ingredientsList.map((ingredient, idx) => {
        const { name, quantity, measurement } = ingredient;

        return (
          <div key={`name-${idx}`} className="ingredients-row">
            <Input
              inputId="ingredient"
              inputPlaceholder="Ingredient"
              inputValue={name}
              onChange={inputChangeHandler}
              theme="semi"
            />
            <Input
              inputId="quantity"
              inputPlaceholder="Quantity"
              inputType="number"
              inputValue={quantity}
              onChange={inputChangeHandler}
              theme="semi"
            />
            <Input
              inputId="measurement"
              inputPlaceholder="Measurement"
              inputValue={measurement}
              onChange={inputChangeHandler}
              theme="semi"
            />
            {ingredientsList.length > 1 && (
              <Button
                onClick={e => removeIngredientHandler(e, idx)}
                theme="icon"
                icon={<RemoveIcon />}
              />
            )}
          </div>
        );
      })}
      <Button
        className="add-new-ingredient"
        onClick={e => addIngredientHandler(e)}
        icon={<PlusIcon />}
        iconPosition="before"
      >
        ADD INGREDIENT
      </Button>
    </div>
  );
}

export default IngredientsList;

IngredientsList.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
};
