/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import './App.css';
import MoodButton from './components/MoodButton';

function App() {
  const [mood, setMood] = React.useState('happy');
  const media = React.useRef(null);
  const url = `http://localhost:3001/stream?mood=${mood}`;
  const duration = 0;

  React.useEffect(() => {
    media.current.onloadedmetadata = () => {
      console.log(media.current.duration);
    };
  }, []);

  console.log(duration);
  return (
    <div style={styles.container}>
      <MoodButton mood="fight" setMood={setMood} />
      <MoodButton mood="happy" setMood={setMood} />
      <MoodButton mood="sad" setMood={setMood} />
      <MoodButton mood="adversity" setMood={setMood} />
      <audio controls ref={media} src={url} autoPlay />
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
