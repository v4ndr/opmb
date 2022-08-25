import React from 'react';
import PropTypes from 'prop-types';

function MoodButton({ mood, setMood }) {
  function onClick() {
    setMood(mood);
  }

  return (
    <button type="button" style={styles.btn} onClick={onClick}>{mood}</button>
  );
}

MoodButton.propTypes = {
  mood: PropTypes.string.isRequired,
  setMood: PropTypes.func.isRequired,
};

const styles = {
  btn: {
    width: 150,
    height: 100,
  },
};

export default MoodButton;
