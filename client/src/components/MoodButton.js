import React from 'react';
import PropTypes from 'prop-types';

function MoodButton({ mood, setMood, img }) {
  function onClick() {
    setMood(mood);
  }

  return (
    /* eslint-disable-next-line
    jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <img src={img} alt={mood} style={styles.btn} onClick={(onClick)} />
  );
}

MoodButton.propTypes = {
  mood: PropTypes.string.isRequired,
  setMood: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

const styles = {
  btn: {
    height: 130,
    margin: 6,
  },
};

export default MoodButton;
