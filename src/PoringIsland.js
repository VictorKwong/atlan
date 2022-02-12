import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {GotoWorldMapFn , GotoBattlePoringIslandMapFn , GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoItemChoiceFn} from './actions';
import BattlePoringIslandMap from './BattlePoringIslandMap'
import WorldMap from './WorldMap'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import './css/mapPoringIsland.css'
import $ from 'jquery'
import audioStreamside from './audio/112Streamside.mp3'

// EQUIP ACTION
import {ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn} from './actions'

// WEAPON IMAGE
import Katana from './img/Equipment/Weapon/Katana.gif'
import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
import VioletFear from './img/Equipment/Weapon/VioletFear.gif'
// ARMOR IMAGE
import CottonShirt from './img/Equipment/Armor/CottonShirt.gif'
import AdventureSuit from './img/Equipment/Armor/AdventurersSuit.gif'
import WoodenMail from './img/Equipment/Armor/WoodenMail.gif'
import Coat from './img/Equipment/Armor/Coat.gif'
import PaddedArmor from './img/Equipment/Armor/PaddedArmor.gif'
import ChainMail from './img/Equipment/Armor/ChainMail.gif'
import FullPlate from './img/Equipment/Armor/FullPlate.gif'
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
            screenControlRoom.AltanStats ? <AltanStats /> :
            screenControlRoom.AltanItem ? <AltanItem /> :
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
                    {userStats.Level >= 10 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                  <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <div>
                  <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>Equip</button>
                  <button className="altanItems" onClick={() =>{dispatch(GotoAltanItemFn()); dispatch(GotoItemChoiceFn());}}>Items</button>
                  <button className="altanStats" onClick={() => {dispatch(GotoAltanStatsFn());}}>Stats</button>
                  <button className="altanItems">Quest</button>
                </div>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>

          {/* WEAPONS */}
           {screenControlRoom.WeaponEquipmentChoice ? 
                <div>
                  {userGoldItem.Katana >= 1 || userGoldItem.BastardSword >= 1 || userGoldItem.GaiaSword >= 1 || userGoldItem.TwinEdgeofNaghtSieger >= 1 || userGoldItem.VioletFear >= 1 ?
                  <div>
                    {userGoldItem.Katana >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Katana",Katana, 60));}}><img src={Katana} alt="Katana" />Katana</button> : null}
                    {userGoldItem.BastardSword >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Bastard Sword",BastardSword, 115));}}><img src={BastardSword} alt="BastardSword" />Bastard Sword</button> : null}
                    {userGoldItem.GaiaSword >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Gaia Sword",GaiaSword, 140));}}><img src={GaiaSword} alt="GaiaSword" />GaiaSword</button> : null }
                    {userGoldItem.TwinEdgeofNaghtSieger >= 1 ?<button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Twin Edge of Naght Sieger",TwinEdgeofNaghtSieger, 160));}}><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger</button> : null}
                    {userGoldItem.VioletFear >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Violet Fear",VioletFear, 275));}}><img src={VioletFear} alt="VioletFear"/>Violet Fear</button>: null}
                  </div> 
                  : <p>Empty Weapon Storage T^T</p>}
                </div> 
            : null}
          {/* ARMOR */}
            {screenControlRoom.ArmorEquipmentChoice ?
                 <div>
                 {userGoldItem.CottonShirt >= 1 || userGoldItem.AdventureSuit >= 1 || userGoldItem.WoodenMail >= 1 || userGoldItem.Coat >= 1 || userGoldItem.PaddedArmor >= 1 || userGoldItem.ChainMail >= 1 || userGoldItem.FullPlate >= 1 ?
                 <div>
                   {userGoldItem.CottonShirt >= 1 ? <button onClick={() => {dispatch(ReturnArmorEquipmentChoiceFn("Cotton Shirt",CottonShirt, 10));}}><img src={CottonShirt} alt="CottonShirt" />CottonShirt</button> : null}
                   {userGoldItem.AdventureSuit >= 1 ? <button onClick={() => {dispatch(ReturnArmorEquipmentChoiceFn("Adventure Suit",AdventureSuit, 30));}}><img src={AdventureSuit} alt="AdventureSuit" />AdventureSuit</button> : null}
                   {userGoldItem.WoodenMail >= 1 ? <button onClick={() => {dispatch(ReturnArmorEquipmentChoiceFn("Wooden Mail",WoodenMail, 40));}}><img src={WoodenMail} alt="WoodenMail" />WoodenMail</button> : null }
                   {userGoldItem.Coat >= 1 ?<button onClick={() => {dispatch(ReturnArmorEquipmentChoiceFn("Coat",Coat, 50));}}><img src={Coat} alt="Coat" />Coat</button> : null}
                   {userGoldItem.PaddedArmor >= 1 ? <button onClick={() => {dispatch(ReturnArmorEquipmentChoiceFn("Padded Armor",PaddedArmor, 70));}}><img src={PaddedArmor} alt="PaddedArmor"/>Padded Armor</button>: null}
                   {userGoldItem.ChainMail >= 1 ? <button onClick={() => {dispatch(ReturnArmorEquipmentChoiceFn("Chain Mail",ChainMail, 80));}}><img src={ChainMail} alt="ChainMail"/>ChainMail</button>: null}
                   {userGoldItem.FullPlate >= 1 ? <button onClick={() => {dispatch(ReturnArmorEquipmentChoiceFn("Full Plate",FullPlate, 90));}}><img src={FullPlate} alt="FullPlate"/>Full Plate</button>: null}
                 </div> 
                 : <p>Empty Armor Storage T^T</p>}
               </div> 
           : null}
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;