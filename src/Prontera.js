import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoPronteraToolDealerFn } from './actions';
import { AudioCurrentTimeSaverFn } from './actions';

import { TalktoKafraEmployeeFn, ResetTalktoKafraEmployeeFn, KafraEmployeeHealFn, } from './actions';


import WorldMap from './WorldMap'
import PronteraToolDealer from './PronteraToolDealer'
import './css/mapProntera.css'
import $ from 'jquery'
import audioThemeOfProntera from './audio/108ThemeOfProntera.mp3'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
const audioBGM = new Audio(audioThemeOfProntera);


function StartMenu(){
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
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
              console.log(audioBGM.currentTime)
              dispatch(AudioCurrentTimeSaverFn(audioBGM.currentTime))
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
      if (userStats.currentHealth === userStats.maxHealth ){
        $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][2].text}</p>`)
        $('.storyCharacter').html(`<p>${npcSpeech['KafraEmployee'][2].name}</p>`)
      }
    }
    
    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        screenControlRoom.PronteraToolDealer ? <PronteraToolDealer/>:
        <div>
          <div className="storyMapScreen">
            <div className="PronteraMap">
              <button className="toolDealerNPC" onClick={() =>{changePlaceFadeAudio(); dispatch(ResetTalktoKafraEmployeeFn()); dispatch(GotoPronteraToolDealerFn());}}>ToolDealer</button>
              <button className="weaponArmorDealerNPC" onClick={() =>{changePlaceFadeAudio(); dispatch(ResetTalktoKafraEmployeeFn());}}>WeaponArmorDealer</button>
              <button className="pronteraSouthGate" onClick={() => {dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetTalktoKafraEmployeeFn());}}>PronteraSouthGate</button>
              <button className="kafraEmployee" onClick={() => {talkToKafraEmployee();}}>Kafra Employee</button>
              

            </div>
            <div className="StoryHUD">
              <p className="basicStatsHUD">Basic Info</p>
              <p className="nameStatsHUD destextHUD">Altan</p>
              <p className="destextHUD classTitle">Knight</p>
                <div className="HUDBox">
                  <p className="hptextHUD">HP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentHealth/userStats.maxHealth)*100} max="100" title={userStats.currentHealth + "/" + userStats.maxHealth}/>
                  <p className="hpPerHUD">{((userStats.currentHealth/userStats.maxHealth)*100).toFixed(0) + "%"}</p>
                </div>
                <div className="HUDBox">
                  <p className="sptextHUD">SP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentSP/userStats.maxSP)*100} max="100" title={userStats.currentSP + "/" + userStats.maxSP}/>
                  <p className="spPerHUD">{((userStats.currentSP/userStats.maxSP)*100).toFixed(0) + "%"}</p>
                </div>

                <div className="leveltextHUD">
                    <p className="destextHUD leveltext">Base Lv. {userStats.Level}</p>
                    {/* <p>Player Attack {userStats.attack}</p>
                    <p>Player Defence {userStats.defence}</p>
                    <p>Player Speed {userStats.speed}</p>
                    <p>Player Hit Rate {userStats.hitRate}</p>
                    <p>Player Dodge Rate {userStats.dodgeRate}</p>
                    <p>Player Crit Rate {userStats.critRate}</p>
                    <p>Player Exp {userStats.Experience}</p> */}
                    {userStats.Level >= 10 ? <progress className="BarBasicHUD expBarBasicHUD" value="100" max="100"></progress> : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                <p className="zenytextHUD">Zeny {userGoldItem.Zeny}</p>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>
              {npcControlRoom.KafraEmployee ? <button className="kafraEmployeeHeal" onClick={() =>{talkToKafraEmployeeHeal();}}>Heal</button> : null}
              <button onClick={() =>{changeMapFadeAudio()}}>Stop Music</button>
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;