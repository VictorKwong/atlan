import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GotoWorldMapFn ,finishStoryLineOneFn, typeWritterEffectFn} from './actions';
import WorldMap from './WorldMap'
import './css/mapAntHell.css'
import $ from 'jquery'
import audioThemeOfProntera from './audio/112Streamside.mp3'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    const audioBGM = new Audio(audioThemeOfProntera);
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    useEffect(() => {
      
      audioBGM.volume = 0.15;
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
    })
    const changeMapFadeAudio = () => {
      const fadeAudio = setInterval(() => {
          if (audioBGM.volume !== 0) {
            audioBGM.volume -= 0.002
            audioBGM.volume = audioBGM.volume.toFixed(4)
          }
          if (audioBGM.volume < 0.002) {
              audioBGM.pause();
              audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }
        }, 10);
    }

    const changePlaceFadeAudio = () => {
      const fadeAudioOut = setInterval(() => {
        console.log(audioBGM.volume);
        if (audioBGM.volume > 0.01) {
          audioBGM.volume -= 0.004
          console.log(audioBGM.volume);
          audioBGM.volume = audioBGM.volume.toFixed(4)
        }
          if (audioBGM.volume === 0.01) {
            audioBGM.volume = 0.15;
            clearInterval(fadeAudioOut);
          }
      }, 10);

  }

    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        <div>
          <div className="storyMapScreen">
            <div className="AntHellMap">
              <button className="toWorldMap" onClick={() =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio();}}>ToWorldMap</button>
              <button className="smallIsland" onClick={() =>{changePlaceFadeAudio()}}>small Island</button>
            </div>
            <div className="StoryHUD">
            <button onClick={() =>{changeMapFadeAudio()}}>Stop Music</button>
              <h1>HUD</h1>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>
        
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;