/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import MoodButton from './components/MoodButton';
import fun from './assets/fun.png';
import adventure from './assets/adventure.png';
import sad from './assets/sad.png';
import tension from './assets/tension.png';
import fight from './assets/fight.png';
import './App.css';

function App() {
  const [mood, setMood] = React.useState();
  // eslint-disable-next-line no-unused-vars
  const [playState, setPlayState] = React.useState(false);
  const media = React.useRef(null);
  const url = `http://localhost:3001/stream?mood=${mood}`;

  const audio = document.querySelector('audio');

  const onPPClick = () => {
    if (playState) {
      audio.pause();
      setPlayState(false);
    } else {
      audio.play();
      setPlayState(true);
    }
  };

  return (
    <div id="container">
      <h1 style={styles.title}>OPMB</h1>
      <h2 style={styles.subtitile}>Because every mood deserves an approriate One Piece OST</h2>
      <div style={styles.moodsContainer}>
        <MoodButton mood="fight" setMood={setMood} img={fight} activeMood={mood} />
        <MoodButton mood="fun" setMood={setMood} img={fun} activeMood={mood} />
        <MoodButton mood="adventure" setMood={setMood} img={adventure} activeMood={mood} />
        <MoodButton mood="sad" setMood={setMood} img={sad} activeMood={mood} />
        <MoodButton mood="tension" setMood={setMood} img={tension} activeMood={mood} />
      </div>
      <audio hidden controls ref={media} src={url} autoPlay onPlay={() => setPlayState(true)} />
      <button style={styles.pp} type="button" onClick={onPPClick}>{playState ? 'PAUSE' : 'PLAY'}</button>
    </div>
  );
}

const styles = {
  title: {
    color: 'white',
    fontSize: 44,
    fontFamily: 'Noto Sans, sans-serif',
    margin: 15,
    textAlign: 'center',
  },
  subtitile: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Noto Sans, sans-serif',
    fontWeight: 300,
    margin: 15,
    marginTop: 0,
    textAlign: 'center',
  },
  moodsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42,
  },
  pp: {
    marginTop: 40,
    fontSize: 22,
    padding: 10,
    borderRadius: 10,
    border: 'none',
    width: 110,
  },
};

export default App;
