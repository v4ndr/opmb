/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import './App.css';
import TestButton from './components/TestButton';

function App() {
  return (
    <div style={styles.container}>
      <TestButton />
      <audio controls src="http://localhost:3001/stream" />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
