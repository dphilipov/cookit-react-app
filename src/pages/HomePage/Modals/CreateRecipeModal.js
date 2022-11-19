import React, { useState } from 'react';
import {
  Modal,
  Input,
  TextArea,
  Button,
  Dropzone,
  ImagePreview,
} from '../../../components';
import { ShoppingCart } from '../../../icons';

function CreateRecipeModal({ open, onClose }) {
  const [recipeImage, setRecipeImage] = useState(null);

  const onFileDrop = (acceptedFiles, fileRejections) => {
    if (fileRejections?.length > 0) {
      console.log(fileRejections[0]);
      return;
    }

    setRecipeImage(
      acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const clearModalState = () => {
    setRecipeImage(null);
  };

  const inputChangeHandler = () => {
    console.log('Input changed');
  };

  const addIngredientHandler = e => {
    e.preventDefault();
    console.log('Ingredient added');
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        clearModalState();
        onClose();
      }}
      title="Create a new recipe"
      modalClassName="create-new-recipe"
    >
      <form className="create-recipe-form">
        <Input
          inputId="recipe-name"
          inputPlaceholder="Recipe Name..."
          onChange={inputChangeHandler}
        />
        <div className="image-preview-container">
          {recipeImage ? (
            <>
              <Button theme="icon" className="remove-image-button">
                <ShoppingCart />
              </Button>
              <ImagePreview imageId="635305e903cd3" />
            </>
          ) : (
            <Dropzone onFileDrop={onFileDrop} />
          )}
        </div>
        {/* <TextArea
          textAreaId="recipe-description"
          textAreaValue=""
          textAreaPlaceholder="Recipe Description"
          onChange={inputChangeHandler}
        /> */}
        <div className="ingredients-list-container">
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
          <Button onClick={e => addIngredientHandler(e)}>+</Button>
        </div>
        <TextArea
          textAreaId="recipe-instructions"
          textAreaValue=""
          textAreaPlaceholder="Instructions"
          onChange={inputChangeHandler}
        />
      </form>
    </Modal>
  );
}

export default CreateRecipeModal;
