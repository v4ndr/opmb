import React from 'react';

function TestButton() {
  const onClick = () => {
    alert('clicked');
  };
  return (
    <button type="button" style={styles.btn} onClick={onClick}>TEST</button>
  );
}

const styles = {
  btn: {
    width: 150,
    height: 100,
  },
};

export default TestButton;
