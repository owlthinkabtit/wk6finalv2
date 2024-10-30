import React, { useEffect, useState } from "react";
import axios from "axios";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=8286b6390cb7e70d35486355cf608d8d`
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div>
      {genres.slice(0, 2).map((genre) => (
        <span
          key={genre.id}>
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default Genres;
