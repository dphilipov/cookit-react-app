import appwrite from '../config/appwrite';
import { useState, useEffect, useRef } from 'react';

function useFetch(collectionKey, lazy = false) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const collection = useRef(collectionKey);

  const doFetch = async () => {
    setLoading(true);

    try {
      const response = await appwrite.database.listDocuments(
        collection.current
      );
      setData(response.documents);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!lazy) {
      doFetch();
    }
  }, [lazy]);

  return { data, error, loading, doFetch };
}

export default useFetch;
