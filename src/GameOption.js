import React from 'react';
import './css/gameOption.css'
import { useDispatch } from 'react-redux';
import { returnToTitleScreenFn } from './actions';

// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function GameOption(){
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    
    return(
      <div>
        <div className="gameOptionTitle">
          <h1>Options</h1>
        </div>
        <div className="gameOptionSelect">
          <div>
            <button onClick={() => dispatch(returnToTitleScreenFn())}>Return to title</button>
          </div>
        </div>
      </div>
    );
}

export default GameOption;