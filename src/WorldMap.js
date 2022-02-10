import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn, GotoPoringIslandFn, GotoAntHellFn} from './actions';
import BattlePoringIslandMap from './BattlePoringIslandMap'
import Prontera from './Prontera'
import PoringIsland from './PoringIsland'
import AntHell from './AntHell'
import PronteraToolDealer from './PronteraToolDealer'
import WeaponArmorDealer from './WeaponArmorDealer'
import './css/storyMainMap.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

function StartMenu(){

    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      
      <div>
        {
        screenControlRoom.Prontera ? <Prontera />:
        screenControlRoom.PoringIsland ? <PoringIsland />:
        screenControlRoom.AntHell ? <AntHell />:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap />: 
        screenControlRoom.PronteraToolDealer ? <PronteraToolDealer /> :
        screenControlRoom.WeaponArmorDealer ? <WeaponArmorDealer /> :
        <div>
          <div className="storyMapScreen">
            <div className="StoryMap">
              <h3>World Map</h3>
              <button className="Prontera" onClick={() => {dispatch(GotoPronteraFn())}}>Prontera</button>
              <button className="SogratDesertPoringIsland" onClick={() => {dispatch(GotoPoringIslandFn())}}>Poring Island</button>
              <button className="AntHell" onClick={() => {dispatch(GotoAntHellFn())}}>AntHell</button>
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
                    {userStats.Level >= 10 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
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