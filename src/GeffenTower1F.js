import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GotoWorldMapFn ,finishStoryLineOneFn, typeWritterEffectFn} from './actions';
import WorldMap from './WorldMap'
import './css/mapGeffenTower.css'
import $ from 'jquery'
import audioThemeOfProntera from './audio/112Streamside.mp3'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
const audioBGM = new Audio(audioThemeOfProntera);


function StartMenu(){
  const screenControlRoom = useSelector(state => state.screenControlRoom)
  const questControlRoom = useSelector(state => state.questControlRoom)
  const baseEXPChart = useSelector(state => state.baseEXPChart)
  const userStats = useSelector(state => state.userStats)
  const userGoldItem = useSelector(state => state.userGoldItem)
  const npcControlRoom = useSelector(state => state.npcControlRoom)
  const audioControlRoom = useSelector(state => state.audioControlRoom)
  const npcSpeech = useSelector(state => state.npcSpeech)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    useEffect(() => {
      audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
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
      $('.PoringIslandMapTitle').fadeIn(600);
      $('.PoringIslandMapTitle').delay(2400).fadeOut(600);
      //Not Depend on audioControlRoom
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const changeMapFadeAudio = () => {
      let i = 0;
      const fadeAudio = setInterval(() => {
          if (audioBGM.volume === parseFloat(audioControlRoom.AudioVolumeBGMFixed.toFixed(5))){
            i = i + 1;
          }
          if (audioBGM.volume !== 0) {
            audioBGM.volume -= parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))
            audioBGM.volume = audioBGM.volume.toFixed(5)
          }
          if (audioBGM.volume < parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))) {
              audioBGM.volume = 0;
              audioBGM.pause();
              audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }else if (i >= 2){
            audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5)
            clearInterval(fadeAudio);
          }
        }, 10);
    }

    const changePlaceFadeAudio = () => {
      const fadeAudioOut = setInterval(() => {
        if (audioBGM.volume > parseFloat(audioControlRoom.AudioChangePlaceThreshold.toFixed(5))) {
          audioBGM.volume -= parseFloat(audioControlRoom.AudioChangePlaceVolume.toFixed(5))
          audioBGM.volume = audioBGM.volume.toFixed(5)
        }
          if (audioBGM.volume <= parseFloat(audioControlRoom.AudioChangePlaceThreshold.toFixed(5))) {
            audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
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