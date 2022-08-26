import React from 'react';
import PropTypes from 'prop-types';

function MoodButton({
  mood, setMood, img, activeMood,
}) {
  function onClick() {
    setMood(mood);
  }

  return (
    /* eslint-disable-next-line
    jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <img
      src={img}
      alt={mood}
      style={{
        flex: 'auto',
        margin: 6,
        objectFit: 'contain',
        maxWidth: 150,
        filter: activeMood === mood ? null : 'grayscale(1)',
      }}
      onClick={(onClick)}
    />
  );
}

MoodButton.propTypes = {
  mood: PropTypes.string.isRequired,
  setMood: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  activeMood: PropTypes.string.isRequired,
};

export default MoodButton;
