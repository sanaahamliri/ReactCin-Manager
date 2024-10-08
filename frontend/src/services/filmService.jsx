import axios from 'axios';

export const getFilms = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:4000/api/films', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des films:", error);
    throw error;
  }
};
