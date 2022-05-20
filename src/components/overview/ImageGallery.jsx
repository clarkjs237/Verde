import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGallery({ changeImgView }) {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <img
        src="https://tracksmith-media.imgix.net/Spring22-Mens-Twilight-Tee-Denim.png?auto=format,compress&crop=faces&dpr=2&fit=crop&h=640&w=640"
        width="400px"
        alt="sample img"
      />
      <button
        type="button"
        onClick={changeImgView}
        style={{
          position: 'absolute',
          top: '1em',
          right: '1em',
        }}
      >
        Expanded View
      </button>
    </div>
  );
}

ImageGallery.propTypes = {
  changeImgView: PropTypes.func.isRequired,
};
