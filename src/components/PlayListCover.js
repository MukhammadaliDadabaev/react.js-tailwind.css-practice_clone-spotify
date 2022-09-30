import React from 'react';

function PlayListCover({ url }) {
  return (
    <img
      src={url}
      className="rounded shadow-lg"
      alt="/"
    />
  );
}

export default PlayListCover;