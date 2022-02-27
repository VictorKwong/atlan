import React, { useEffect } from 'react';
import './css/gameOption.css'
import { useDispatch , useSelector } from 'react-redux';
import { returnToTitleScreenFn } from './actions';

import { AudioVolumeBGMSaverFn } from './actions';

// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
import OneStepCloser from './audio/205OneStepCloser.mp3'

const audioBGM = new Audio(OneStepCloser);

function GameOption(){
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const dispatch = useDispatch();

    useEffect(() => {
      audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
      console.log(audioBGM.volume)
      let playPromise = audioBGM.play(); 
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          audioBGM.loop = true;
          audioBGM.play()
        })
        .catch(error => {
          // Auto-play was prevented
        });
      }
    }, [audioControlRoom, dispatch])
    const stopAudio = () => {
        audioBGM.volume = 0;
        audioBGM.pause();
        audioBGM.currentTime = 0;
    }

    return(
      <div className="gameOptionBackground">
        <div className="gameOptionTitle">
          <h1>Options</h1>
        </div>
        <div className="gameOptionSelect">
          <div>
            <div className="gameOptionBGMBox">
              <p className="gameOptionWord">BGM:</p>
                <button className="gameOptionButton" onClick={audioControlRoom.AudioVolumeBGMFixed < 0.99 ? () => {dispatch(AudioVolumeBGMSaverFn(0.1,0.00125,0.00225,0.01)); }: null}>+</button>
                <p className="gameOptionWord gameOptionNumber">{Math.abs(audioControlRoom.AudioVolumeBGMFixed * 100).toFixed(0)}</p>
                <button className="gameOptionButton" onClick={audioControlRoom.AudioVolumeBGMFixed > 0.01 ? () => {dispatch(AudioVolumeBGMSaverFn(-0.1,-0.00125,-0.00225,-0.01)); }: null}>-</button>
            </div>
            <div>
              <button className="menuButton" onClick={() => {dispatch(returnToTitleScreenFn()); stopAudio();}}>Return to title</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default GameOption;