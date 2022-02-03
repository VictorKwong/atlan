import React from 'react';
import './css/gameOption.css'
import { useSelector, useDispatch } from 'react-redux';
import { returnToTitleScreenFn } from './actions';
import StartMenu from './StartMenu';

// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function GameOption(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    
    return(
      <div>
        <div className="gameOptionTitle">
          <h1>Option</h1>
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