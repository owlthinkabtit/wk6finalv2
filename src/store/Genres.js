import React from 'react';

const Genres = ({ genres }) => {
  if (!genres || genres.length === 0) return null;


  const genreNames = genres.slice(0, 2).map(genre => genre.name).join(', ');

  return <span>{genreNames}</span>;
};

export default Genres;
