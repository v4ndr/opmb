/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import MoodButton from './components/MoodButton';
import fun from './assets/fun.png';
import adventure from './assets/adventure.png';
import sad from './assets/sad.png';
import tension from './assets/tension.png';
import fight from './assets/fight.png';

function App() {
  const [mood, setMood] = React.useState('adventure');
  const media = React.useRef(null);
  const url = `http://localhost:3001/stream?mood=${mood}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>OPMB</h1>
      <h2 style={styles.subtitile}>Because every mood deserves an approriate One Piece OST</h2>
      <div style={styles.moodsContainer}>
        <MoodButton mood="fight" setMood={setMood} img={fight} containerStyle={styles.moodBtn} />
        <MoodButton mood="fun" setMood={setMood} img={fun} containerStyle={styles.moodBtn} />
        <MoodButton mood="adventure" setMood={setMood} img={adventure} containerStyle={styles.moodBtn} />
        <MoodButton mood="sad" setMood={setMood} img={sad} containerStyle={styles.moodBtn} />
        <MoodButton mood="tension" setMood={setMood} img={tension} containerStyle={styles.moodBtn} />
      </div>
      <audio controls ref={media} src={url} autoPlay />
    </div>
  );
}

const styles = {
  container: {
    flexDirection: 'column',
    backgroundColor: '#2E2E2E',
    display: 'flex',
    flex: 1,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontFamily: 'Noto Sans, sans-serif',
    margin: 0,
    marginBottom: 15,
  },
  subtitile: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Noto Sans, sans-serif',
    fontWeight: 300,
    margin: 0,
    textAlign: 'center',
  },
  moodsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 42,
  },
};

export default App;
