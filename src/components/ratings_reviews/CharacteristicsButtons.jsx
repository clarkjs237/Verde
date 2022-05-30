import React from 'react';
import PropTypes from 'prop-types';

function CharacteristicsButtons({ characteristic, id, handleRadioChange }) {
  const changeRating = (event) => {
    const qualityRating = Number(event.target.value);
    handleRadioChange(id, qualityRating);
  };

  return (
    <div
      className={`${characteristic}-char`}
      style={{
        backgroundColor: '#C2DED1',
        borderRadius: '5em 0em',
        padding: '1rem 5rem',
        margin: '1rem 0rem',
        minWidth: '40rem',
      }}
    >
      <p className="char-words">{characteristic}</p>
      <input
        type="radio"
        value="1"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      1
      <input
        type="radio"
        value="2"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      2
      <input
        type="radio"
        value="3"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      3
      <input
        type="radio"
        value="4"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      4
      <input
        type="radio"
        value="5"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      5
    </div>
  );
}

CharacteristicsButtons.propTypes = {
  characteristic: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default CharacteristicsButtons;
