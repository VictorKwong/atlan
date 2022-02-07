import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GotoWorldMapFn , typeWritterEffectFn } from './actions';
import { TalktoKafraEmployeeFn, ResetTalktoKafraEmployeeFn, KafraEmployeeHealFn } from './actions';


import WorldMap from './WorldMap'
import './css/mapProntera.css'
import $ from 'jquery'
import audioThemeOfProntera from './audio/108ThemeOfProntera.mp3'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
const audioBGM = new Audio(audioThemeOfProntera);


function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
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
    }, [])
    const changeMapFadeAudio = () => {
      let i = 0;
      const fadeAudio = setInterval(() => {
          if (audioBGM.volume === 0.15){
            i = i + 1;
          }
          if (audioBGM.volume !== 0) {
            audioBGM.volume -= 0.002
            audioBGM.volume = audioBGM.volume.toFixed(4)
          }
          if (audioBGM.volume < 0.002) {
              audioBGM.pause();
              audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }else if (i >= 2){
            audioBGM.volume = 0.15
            clearInterval(fadeAudio);
          }
          $('.toolDealerNPC').on('click', function(event) {
            event.preventDefault();
              audioBGM.volume = 0.15;
              clearInterval(fadeAudio);
          })
        }, 10);
    }

    const changePlaceFadeAudio = () => {
      const fadeAudioOut = setInterval(() => {
        if (audioBGM.volume > 0.01) {
          audioBGM.volume -= 0.004
          audioBGM.volume = audioBGM.volume.toFixed(4)
        }
          if (audioBGM.volume === 0.01) {
            audioBGM.volume = 0.15;
            clearInterval(fadeAudioOut);
          }
      }, 10);
  }
    const talkToKafraEmployee = () => {
      $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][0].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['KafraEmployee'][0].name}</p>`)
      dispatch(TalktoKafraEmployeeFn());
    }
    const talkToKafraEmployeeHeal = () => {
      $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][1].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['KafraEmployee'][1].name}</p>`)
      dispatch(KafraEmployeeHealFn());
    }
    
    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        <div>
          <div className="storyMapScreen">
            <div className="PronteraMap">
              <button className="toolDealerNPC" onClick={() =>{changePlaceFadeAudio(); dispatch(ResetTalktoKafraEmployeeFn());}}>ToolDealer</button>
              <button className="weaponArmorDealerNPC" onClick={() =>{changePlaceFadeAudio(); dispatch(ResetTalktoKafraEmployeeFn());}}>WeaponArmorDealer</button>
              <button className="pronteraSouthGate" onClick={() => {dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetTalktoKafraEmployeeFn());}}>PronteraSouthGate</button>
              <button className="kafraEmployee" onClick={() => {changePlaceFadeAudio(); talkToKafraEmployee();}}>Kafra Employee</button>
              

            </div>
            <div className="StoryHUD">
            <button onClick={() =>{changeMapFadeAudio()}}>Stop Music</button>
              <h1>HUD</h1>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>
              {npcControlRoom.KafraEmployee ? <button onClick={() =>{talkToKafraEmployeeHeal();}}>Heal</button> : null}
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;