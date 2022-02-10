import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GotoWorldMapFn , GotoBattlePoringIslandMapFn , GotoAltanEquipmentFn} from './actions';
import BattlePoringIslandMap from './BattlePoringIslandMap'
import WorldMap from './WorldMap'
import AltanEquipment from './AltanEquipment'
import './css/mapPoringIsland.css'
import $ from 'jquery'
import audioStreamside from './audio/112Streamside.mp3'
// WEAPON IMAGE
import Katana from './img/Equipment/Weapon/Katana.gif'
import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
import VioletFear from './img/Equipment/Weapon/VioletFear.gif'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
const audioBGM = new Audio(audioStreamside);


function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
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
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div>
          <div className="storyMapScreen">
            {screenControlRoom.AltanEquipment ? <AltanEquipment /> :
            <div className="PoringIslandMap">
              <h3>Poring Island</h3>
              <button className="toWorldMap" onClick={() =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio();}}>ToWorldMap</button>
              <button className="smallIsland" onClick={() =>{dispatch(GotoBattlePoringIslandMapFn()); changeMapFadeAudio();}}>small Island</button>
            </div>
            }
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
                  <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <div>
                  <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>Equip</button>
                  <button className="altanItems">Items</button>
                  <button className="altanItems">Stats</button>
                  <button className="altanItems">Quest</button>
                </div>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>
           {screenControlRoom.WeaponEquipmentChoice ? 
                <div>
                  <button ><img src={Katana} alt="Katana" />Katana</button>
                  <button ><img src={BastardSword} alt="BastardSword" />Bastard Sword</button>
                  <button ><img src={GaiaSword} alt="GaiaSword" />GaiaSword</button>
                  <button ><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger</button>
                  <button ><img src={VioletFear} alt="VioletFear"/>Violet Fear</button>
                </div> 
            : null}
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;