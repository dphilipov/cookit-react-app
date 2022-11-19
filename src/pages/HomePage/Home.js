import React, { useState } from 'react';
import { Button, Card } from '../../components';
import CreateRecipeModal from './Modals/CreateRecipeModal';
import useFetch from '../../hooks/useFetch';

const COLLECTION_KEY = process.env.REACT_APP_APPWRITE_COLLECTION_KEY;

function Home() {
  const [openCreateRecipeModal, setOpenCreateRecipeModal] = useState(false);
  const { data } = useFetch(COLLECTION_KEY);

  return (
    <div className="home-page-container">
      <div className="top-controls">
        <Button
          className="create-recipe-btn"
          onClick={() => setOpenCreateRecipeModal(true)}
        >
          CREATE RECIPE
        </Button>
        <input
          className="search-bar"
          type="search"
          placeholder="Search..."
        ></input>
      </div>
      <div className="recipes-container">
        {data.map(recipe => (
          <Card key={recipe.$id} recipe={recipe} />
        ))}
      </div>
      <CreateRecipeModal
        open={openCreateRecipeModal}
        onClose={() => setOpenCreateRecipeModal(false)}
      />
    </div>
  );
}

export default Home;
