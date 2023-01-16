import React, { useState } from 'react';
import {
  Modal,
  Input,
  TextArea,
  Button,
  Dropzone,
  ImagePreview,
} from '../../../components';
import { Trash } from '../../../icons';
import IngredientsList from '../IngredientsList';

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

  const deleteImageHandler = () => {
    setRecipeImage(null);
  };

  const clearModalState = () => {
    setRecipeImage(null);
  };

  const inputChangeHandler = () => {
    console.log('Input changed');
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
              <Button
                theme="icon"
                icon={<Trash />}
                className="remove-image-button"
                onClick={deleteImageHandler}
              />
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
        <IngredientsList inputChangeHandler={inputChangeHandler} />
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
