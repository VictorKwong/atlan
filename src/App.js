import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameFn } from './actions';
import Main from './Main';
import Footer from './Footer'

import useSound from 'use-sound';
import audioStartUpGame from './audio/audioStartUpGame.mp3'



function App(){
    const startGame = useSelector(state => state.startGame)
    const [play] = useSound(audioStartUpGame, {volume: 0.2});
    const dispatch = useDispatch();

    useEffect(() => {
      const audio = new Audio(audioStartUpGame);
      audio.volume = 0.15;
      audio.play();
    }, []);


    const startGameQtn = (e) => {
      e.preventDefault();
      setTimeout(() => {
        dispatch(startGameFn())}, 3000);
    };
    
    return(
      <div className="wrapper pageFix">
          <div className="allWrapping">
          {startGame ? <Main /> : 
          <div>
            <h1>Atlan Adventure</h1>
            <button onClick={startGameQtn}>Start</button>
          </div>
          }
          </div>
          <Footer />
      </div>
    );
}

export default App;