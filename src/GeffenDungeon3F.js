import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoGeffenDungeon2FFn , GotoGeffenDungeon4FFn , GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn } from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn } from './actions';
//Loading Screen
import { BattleLoadingScreenFn } from './actions';
// EQUIP ACTION
import { ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn, ReturnHeadGearEquipmentChoiceFn} from './actions';
//CHEST
import { ChestBoss3VisitRepeatFn, GeffenDungeonChest4VisitRepeatFn } from './actions';
//NPC
import { GeffenDungeon3FNiaNPCFn , ResetGeffenDungeonNPCFn} from './actions';
//PATH
import { GotoGeffenDungeon3FPath3Fn } from './actions';
//cutscene
import {cutsceneFourFn} from './actions'

import GeffenDungeon1F from './GeffenDungeon1F'
import GeffenDungeon4F from './GeffenDungeon4F'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import TreasurePoringIslandMap from './TreasurePoringIslandMap'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import './css/mapGeffenDungeon3F.css'
import $ from 'jquery'

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
//HEADGEAR
import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'
import TeddybearHat from './img/Equipment/HeadGear/TeddybearHat.gif'
import Crown from './img/Equipment/HeadGear/Crown.gif'
import Helm from './img/Equipment/HeadGear/Helm.gif'
import PandaHat from './img/Equipment/HeadGear/PandaHat.gif'
import ChefHat from './img/Equipment/HeadGear/ChefHat.gif'
import SantaPoringHat from './img/Equipment/HeadGear/SantaPoringHat.gif'

import audioOutOfCuriosity from './audio/50OutOfCuriosity.mp3'
const audioBGM = new Audio(audioOutOfCuriosity);


function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const userAttribute = useSelector(state => state.userAttribute)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    let HeadGearBox = [
      {id:7000, num: 1, EquipItem:ReturnHeadGearEquipmentChoiceFn(null, null, 0), Img:null, name:"Empty"},
      {id:7001, num: userGoldItem.LordKahosHorn, EquipItem:ReturnHeadGearEquipmentChoiceFn("Lord Kaho`s Horn", LordKahosHorn, 20), Img:LordKahosHorn, name:"Lord Kaho`s Horn"},
      {id:7002, num: userGoldItem.TeddybearHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Teddybear Hat", TeddybearHat, 20), Img:TeddybearHat, name:"Teddybear Hat"},
      {id:7003, num: userGoldItem.Crown, EquipItem:ReturnHeadGearEquipmentChoiceFn("Crown", Crown, 20), Img:Crown, name:"Crown"},
      {id:7004, num: userGoldItem.Helm, EquipItem:ReturnHeadGearEquipmentChoiceFn("Helm", Helm, 20), Img:Helm, name:"Helm"},
      {id:7005, num: userGoldItem.PandaHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Panda Hat", PandaHat, 20), Img:PandaHat, name:"Panda Hat"},
      {id:7006, num: userGoldItem.ChefHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Chef Hat", ChefHat, 20), Img:ChefHat, name:"Chef Hat"},
      {id:7007, num: userGoldItem.SantaPoringHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Santa Poring Hat", SantaPoringHat, 20), Img:SantaPoringHat, name:"Santa Poring Hat"}
    ]
    let WeaponGearBox = [
      {id:8000, num: 1, EquipItem:ReturnWeaponEquipmentChoiceFn("Empty",null, 1), Img: null, name:"Empty"},
      {id:8001, num: userGoldItem.Katana, EquipItem:ReturnWeaponEquipmentChoiceFn("Katana",Katana, 60), Img:Katana, name:"Katana"},
      {id:8002, num: userGoldItem.BastardSword, EquipItem:ReturnWeaponEquipmentChoiceFn("Bastard Sword",BastardSword, 115), Img:BastardSword, name:"Bastard Sword"},
      {id:8003, num: userGoldItem.GaiaSword, EquipItem:ReturnWeaponEquipmentChoiceFn("Gaia Sword",GaiaSword, 140), Img:GaiaSword, name:"Gaia Sword"},
      {id:8004, num: userGoldItem.TwinEdgeofNaghtSieger, EquipItem:ReturnWeaponEquipmentChoiceFn("Twin Edge of Naght Sieger",TwinEdgeofNaghtSieger, 160), Img:TwinEdgeofNaghtSieger, name:"Twin Edge of Naght Sieger"},
      {id:8005, num: userGoldItem.VioletFear, EquipItem:ReturnWeaponEquipmentChoiceFn("Violet Fear",VioletFear, 275), Img:VioletFear, name:"Violet Fear"}
    ]
    let ArmorGearBox = [
      {id:9000, num:userGoldItem.CottonShirt, EquipItem:ReturnArmorEquipmentChoiceFn("Cotton Shirt",CottonShirt, 10), Img:CottonShirt, name:"Cotton Shirt"},
      {id:9001, num:userGoldItem.AdventureSuit, EquipItem:ReturnArmorEquipmentChoiceFn("Adventure Suit",AdventureSuit, 30), Img:AdventureSuit, name:"Adventure Suit"},
      {id:9002, num:userGoldItem.WoodenMail, EquipItem:ReturnArmorEquipmentChoiceFn("Wooden Mail",WoodenMail, 40), Img:WoodenMail, name:"Wooden Mail"},
      {id:9003, num:userGoldItem.Coat, EquipItem:ReturnArmorEquipmentChoiceFn("Coat",Coat, 50), Img:Coat, name:"Coat"},
      {id:9004, num:userGoldItem.PaddedArmor, EquipItem:ReturnArmorEquipmentChoiceFn("Padded Armor",PaddedArmor, 70), Img:PaddedArmor, name:"Padded Armor"},
      {id:9005, num:userGoldItem.ChainMail, EquipItem:ReturnArmorEquipmentChoiceFn("Chain Mail",ChainMail, 80), Img:ChainMail, name:"Chain Mail"},
      {id:9006, num:userGoldItem.FullPlate, EquipItem:ReturnArmorEquipmentChoiceFn("Full Plate",FullPlate, 90), Img:FullPlate, name:"Full Plate"},
    ]

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
      //Not Depend on audioControlRoom
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
      $('.GeffenDungeon3FMapTitle').fadeIn(600);
      $('.GeffenDungeon3FMapTitle').delay(2400).fadeOut(600);
    }, [screenControlRoom])
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

  useEffect(() => {
    switch(true){
      case(screenControlRoom.UserUnlockPath === "GeffenDungeon3FPath5Hidden" && screenControlRoom.GeffenDungeon3FPath5Hidden && screenControlRoom.AltanItem):
        $('.storySpeech').html('You found a hidden passage in GeffenDungeon3F...')  
        $('.storyCharacter').html('')
        break;
      case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest ):
        $('.storySpeech').html('')  
        $('.storyCharacter').html('')
        break;
      case(npcControlRoom.GeffenDungeon3FNiaNPC):
        $('.storySpeech').html(`${npcSpeech['Nia'][1].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Nia'][1].name}</p>`)
        break;
      default:
        $('.storySpeech').html('')  
        $('.storyCharacter').html('')
        break;
      }
    //userState,screenControRoom not included
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [npcControlRoom, screenControlRoom])
  const LoadingScreen0 = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon3FPath1",20)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon3FPath2",21)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen2 = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon3FPath4",22)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen3 = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon3FPath5Hidden",Math.floor(Math.random() * 2) + 20)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
    return(
      <div>
        {
        screenControlRoom.GeffenDungeon1F ? <GeffenDungeon1F /> :
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div className={screenControlRoom.GeffenDungeon3F && screenControlRoom.GeffenDungeon4F ? "GeffenDungeon4FMapBackground" : "GeffenDungeon3FMapBackground"}>
          <div className="storyMapScreen">
            {screenControlRoom.AltanEquipment ? 
              <div className="ReturnParent">
                <AltanEquipment/>
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>x</button>
              </div>:
            screenControlRoom.AltanStats ? 
              <div className="ReturnParent">
                <AltanStats />
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanStatsFn());}}>x</button>
              </div>:
            screenControlRoom.AltanItem ? 
              <div className="ReturnParent">
                <AltanItem />
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanItemFn());}}>x</button>
              </div>:
            screenControlRoom.AltanQuest ?
              <div className="ReturnParent">
                <AltanQuest /> 
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanQuestFn());}}>x</button>
              </div>:
            screenControlRoom.TreasurePoringIslandMap ?
              <div className="ReturnParent">
                <TreasurePoringIslandMap />
              </div>:
            screenControlRoom.GeffenDungeon4F ?
              <div className="ReturnParent">
                <GeffenDungeon4F audioBGM={audioBGM}/>
              </div>:
            <div className="GeffenDungeon3FMap">
              <button className="ReturnHUDBugFix"></button>
              <h3 className="GeffenDungeon3FMapTitle">Geffen Dungeon 3F</h3>
              {/* Path 0*/}
              <button className="GeffenDungeon3FToGeffenDungeon2F" onClick={() =>{dispatch(GotoGeffenDungeon2FFn()); changeMapFadeAudio();}}>Geffen2F</button>
              <button className="GeffenDungeonBase GeffenDungeon3FPath0" onClick={() => {LoadingScreen0(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Doll</button>
              {/* Path 1*/}
              {screenControlRoom.GeffenDungeon3FPath1 ?
              <button className="GeffenDungeonBase GeffenDungeon3FPath1" onClick={() => {LoadingScreen1(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Demon</button> : null}
              {/* Path 2*/}
              {screenControlRoom.GeffenDungeon3FPath2 ?
              <button className="GeffenDungeonBase GeffenDungeon3FPath2" onClick={() => {dispatch(GeffenDungeon3FNiaNPCFn()); dispatch(GotoGeffenDungeon3FPath3Fn()); changePlaceFadeAudio();}}>NPC</button> : null}
              {/* Path 3*/}
              {screenControlRoom.GeffenDungeon3FPath3 ?
              <button className="GeffenDungeonBase GeffenDungeon3FPath4" onClick={
                screenControlRoom.storyLineFour ? 
                () => {LoadingScreen2(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());} : 
                () => {dispatch(cutsceneFourFn()); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Boss????</button> : null}
              {screenControlRoom.GeffenDungeon3FPath3 ?
              <button className={Math.random() <= 0.5 ? "GeffenDungeonBase GeffenDungeon3FPath6" : "GeffenDungeonBase GeffenDungeon3FPath6 GeffenDungeon3FPath6Pic2" } onClick={() => {LoadingScreen3(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Wrath</button> : null}
              {/* Path 4 Split 1*/}
              {screenControlRoom.GeffenDungeon3FPath4 ?
              <button className="GeffenDungeonBase GeffenDungeon3FPath5" onClick={npcControlRoom.ChestBoss3 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest3")); dispatch(ChestBoss3VisitRepeatFn()); dispatch(ResetGeffenDungeonNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest3")); dispatch(ResetGeffenDungeonNPCFn());}}>???Shiny treasure???</button> : null}
              {/* Path 4 Split 2*/}
              {screenControlRoom.GeffenDungeon3FPath5Hidden ?
              <button className="GeffenDungeonBase GeffenDungeon3FPath7" onClick={npcControlRoom.GeffenDungeonChest4 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("GeffenDungeonChest4")); dispatch(GeffenDungeonChest4VisitRepeatFn()); dispatch(ResetGeffenDungeonNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("GeffenDungeonChest4")); dispatch(ResetGeffenDungeonNPCFn());}}>Treasure</button> : null}
              {/* Path 3 Final*/}
              {screenControlRoom.GeffenDungeon3FPath3 ?
              <button className="GeffenDungeonBase GeffenDungeon3FPath3" onClick={() =>{dispatch(GotoGeffenDungeon4FFn()); changePlaceFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Geffen4F</button> : null}
              
            </div>
            }
            <div className="StoryHUD">
              <p className="basicStatsHUD">Basic Info</p>
              <p className="nameStatsHUD destextHUD">Atlan</p>
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
                    {userStats.Level >= 99 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                  <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <div>
                  <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>Equip</button>
                  <button className="altanItems" onClick={() =>{dispatch(GotoAltanItemFn());}}>Items</button>
                  <button className="altanStats" onClick={() => {dispatch(GotoAltanStatsFn());}}>Stats</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanQuestFn());}}>Quest</button>
                </div>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech"></p>
            {/* WEAPONS */}
            {screenControlRoom.WeaponEquipmentChoice ? 
              <div className="textCenter">
                {userGoldItem.Katana >= 1 || userGoldItem.BastardSword >= 1 || userGoldItem.GaiaSword >= 1 || userGoldItem.TwinEdgeofNaghtSieger >= 1 || userGoldItem.VioletFear >= 1 ?
                  <div>
                    <p className="chatDescriptTitle">Weapon Bag</p>
                  {WeaponGearBox.map(Equip => {
                    return(
                      <span key={Equip.id}>
                        {Equip.num >= 1 ? 
                        <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem)}}>
                          <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                          </div>
                        </button> : null}
                      </span>
                    )
                  })}
                  </div>
                : <p>Empty WeaponGear Storage T^T</p>}
              </div> : null} 
            {/* ARMOR */}
            {screenControlRoom.ArmorEquipmentChoice ?
              <div className="textCenter">
              {userGoldItem.CottonShirt >= 1 || userGoldItem.AdventureSuit >= 1 || userGoldItem.WoodenMail >= 1 || userGoldItem.Coat >= 1 || userGoldItem.PaddedArmor >= 1 || userGoldItem.ChainMail >= 1 || userGoldItem.FullPlate >= 1 ?
                <div>
                  <p className="chatDescriptTitle">Armor Bag</p>
                {ArmorGearBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem)}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty ArmorGear Storage T^T</p>}
              </div> : null}
            {/* HEADGEAR */}
            {screenControlRoom.HeadGearEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Head Gear Bag</p>
              {userGoldItem.LordKahosHorn >= 1 || userGoldItem.TeddybearHat >= 1 || userGoldItem.Crown >= 1 || userGoldItem.Helm >= 1 || userGoldItem.PandaHat >= 1 || userGoldItem.ChefHat >= 1 || userGoldItem.SantaPoringHat >= 1 ?
                <div>
                {HeadGearBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem)}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty HeadGear Storage T^T</p>}
              </div> : null}
              {screenControlRoom.TreasurePoringIslandMap && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ? 
              <div className="storyScreen">
                <button className="ReturnGeffenDungeon" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn());}}>Return</button>
              </div> : null}
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;