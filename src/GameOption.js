import React, { useEffect } from 'react';
import './css/gameOption.css'
import { useDispatch , useSelector } from 'react-redux';
import { returnToTitleScreenFn } from './actions';

import { AudioVolumeBGMSaverFn, AudioVolumeSoundEffectSaverFn } from './actions';

import OneStepCloser from './audio/205OneStepCloser.mp3'
import LoginSound from './audio/SoundEffect/RoomChat.mp3'
const audioBGM = new Audio(OneStepCloser);
const audioSoundEffect = new Audio(LoginSound)


function GameOption(){
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const dispatch = useDispatch();

    useEffect(() => {
      audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
      audioSoundEffect.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      let playPromise = audioBGM.play(); 
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          audioBGM.loop = true;
          audioBGM.play()
        })
        .catch(error => {
        });
      }
    }, [audioControlRoom, dispatch])
    const soundEffectAudio = () => {
        audioSoundEffect.pause();
        audioSoundEffect.currentTime = 0;
        audioSoundEffect.play();
    }
    const stopAudio = () => {
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
            <div className="gameOptionBGMBox">
              <p className="gameOptionWord">Sound:</p>
                <button className="gameOptionButton" onClick={audioControlRoom.AudioVolumeSoundEffectFixed < 0.99 ? () => {dispatch(AudioVolumeSoundEffectSaverFn(0.1)); soundEffectAudio();}: null}>+</button>
                <p className="gameOptionWord gameOptionNumber">{Math.abs(audioControlRoom.AudioVolumeSoundEffectFixed * 100).toFixed(0)}</p>
                <button className="gameOptionButton" onClick={audioControlRoom.AudioVolumeSoundEffectFixed > 0.01 ? () => {dispatch(AudioVolumeSoundEffectSaverFn(-0.1)); soundEffectAudio();}: null}>-</button>
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