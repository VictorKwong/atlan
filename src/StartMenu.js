import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameFn } from './actions';
import Main from './Main';

// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function App(){
    const startGame = useSelector(state => state.startGame)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    const startGameQtn = (e) => {
      e.preventDefault();
      setTimeout(() => {
        dispatch(startGameFn())}, 1000);
    };
    
    return(
      <div>
          {startGame ? <Main /> : 
          <div>
            <h1>Atlan Adventure</h1>
            <button onClick={startGameQtn}>Start</button>
          </div>
          }
      </div>
    );
}

export default App;