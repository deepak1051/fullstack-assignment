import { useEffect, useState } from 'react';
import { api } from '../api';
import axios from 'axios';

export interface Card {
  id: string;
  title: string;
  description: string;
}

const useCards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data } = await api.get('/cards', { signal: controller.signal });

        setCards(data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          setError('Failed to fetch cards');
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return { cards, loading, error };
};

export default useCards;
