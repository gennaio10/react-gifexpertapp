import React from "react";
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
  return (
    <div id="dimg" className="card animate__animated animate__bounce">
      <img id="isrc" src={url} alt={title} />
      <p id="ptitle">{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};



