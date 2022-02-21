import React from 'react';
import './css/gameOption.css'
import { useDispatch , useSelector } from 'react-redux';
import { returnToTitleScreenFn } from './actions';

import { AudioVolumeBGMSaverFn } from './actions';

// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function GameOption(){
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const dispatch = useDispatch();
    return(
      <div className="gameOptionBackground">
        <div className="gameOptionTitle">
          <h1>Options</h1>
        </div>
        <div className="gameOptionSelect">
          <div>
            <div className="gameOptionBGMBox">
              <p className="gameOptionWord">BGM:</p>
                <button className="gameOptionButton" onClick={audioControlRoom.AudioVolumeBGM < 1 ? () => dispatch(AudioVolumeBGMSaverFn(0.05)) : null}>+</button>
                <p className="gameOptionWord gameOptionNumber">{Math.abs(audioControlRoom.AudioVolumeBGM * 100).toFixed(0)}</p>
                <button className="gameOptionButton" onClick={audioControlRoom.AudioVolumeBGM > 0.01 ? () => dispatch(AudioVolumeBGMSaverFn(-0.05)): null}>-</button>
            </div>
            <div>
              <button className="menuButton" onClick={() => dispatch(returnToTitleScreenFn())}>Return to title</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GameOption;