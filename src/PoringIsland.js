import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoBattlePoringIslandMapFn , GotoTreasurePoringIslandMapFn, GotoTreasurePoringIslandMap2Fn, GotoTreasurePoringIslandMap3Fn, GotoPoringIslandHouseMapFn} from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn } from './actions';
//CHEST
import { Chest1VisitRepeatFn , Chest2VisitRepeatFn, ChestBoss1VisitRepeatFn} from './actions'
//HOUSE
import { ResetTrainingRateFn, ResetHouseTrainingFn } from './actions'
import { TrainingSuccesFn, TrainingFailureFn } from './actions'
import { TrainingSTRFn , TrainingAGIFn , TrainingVITFn , TrainingINTFn , TrainingDEXFn , TrainingLUKFn } from './actions'
import { BonusSTRPointsFn , BonusAGIPointsFn , BonusVITPointsFn , BonusINTPointsFn , BonusDEXPointsFn , BonusLUKPointsFn } from './actions'
//Loading Screen
import { BattleLoadingScreenFn , TrainingLoadingScreenFn , TrainingLoadingScreenDelayFn} from './actions'
//PATH
import { GotoPoringIslandPath4Fn, GotoPoringIslandPath7Fn, GotoPoringIslandPath8Fn, ReturnPoringIslandPathFn} from './actions'
//NPC
import { PoringIslandBridgeNPCFn, ResetPoringIslandNPCFn } from './actions'
// EQUIP ACTION
import {ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn, ReturnHeadGearEquipmentChoiceFn} from './actions'

import BattlePoringIslandMap from './BattlePoringIslandMap'
import TreasurePoringIslandMap from './TreasurePoringIslandMap'
import TreasurePoringIslandMap2 from './TreasurePoringIslandMap2'
import TreasurePoringIslandMap3 from './TreasurePoringIslandMap3'
import PoringIslandHouseMap from './PoringIslandHouseMap'
import WorldMap from './WorldMap'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import './css/mapPoringIsland.css'
import $ from 'jquery'
import audioStreamside from './audio/112Streamside.mp3'

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
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
import Success from './img/Emote/Success.gif'
import Failure from './img/Emote/Failure.gif'

import TrainingSuccess from './audio/SoundEffect/TrainingSuccess.mp3'
import TrainingFailure from './audio/SoundEffect/TrainingFailure.mp3'
const audioTrainingSuccess = new Audio (TrainingSuccess)
const audioTrainingFailure = new Audio (TrainingFailure)

const audioBGM = new Audio(audioStreamside);


function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const userAttribute = useSelector(state => state.userAttribute)
    const trainingSuccessRate = useSelector(state => state.trainingSuccessRate)
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

    let TrainingBox = [
      {id:20001, Attr:TrainingSTRFn(1), name:"STR", Points:userAttribute.BonusStr, select: screenControlRoom.HouseTrainingSTR, effect:BonusSTRPointsFn(userAttribute.BonusStr,userAttribute.BonusDex,userAttribute.BonusLuk)},
      {id:20002, Attr:TrainingAGIFn(1), name:"AGI", Points:userAttribute.BonusAgi, select: screenControlRoom.HouseTrainingAGI, effect:BonusAGIPointsFn(userAttribute.BonusAgi)},
      {id:20003, Attr:TrainingVITFn(1), name:"VIT", Points:userAttribute.BonusVit, select: screenControlRoom.HouseTrainingVIT, effect:BonusVITPointsFn(userAttribute.BonusVit,userAttribute.vit)},
      {id:20004, Attr:TrainingINTFn(1), name:"INT", Points:userAttribute.BonusInt, select: screenControlRoom.HouseTrainingINT, effect:BonusINTPointsFn(userAttribute.BonusInt,userAttribute.int)},
      {id:20005, Attr:TrainingDEXFn(1), name:"DEX", Points:userAttribute.BonusDex, select: screenControlRoom.HouseTrainingDEX, effect:BonusDEXPointsFn(userAttribute.BonusStr,userAttribute.BonusDex,userAttribute.BonusLuk)},
      {id:20006, Attr:TrainingLUKFn(1), name:"LUK", Points:userAttribute.BonusLuk, select: screenControlRoom.HouseTrainingLUK, effect:BonusLUKPointsFn(userAttribute.BonusStr,userAttribute.BonusDex,userAttribute.BonusLuk)}
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
  //   const changeMapFadeAudio = () => {
  //     let i = 0;
  //     const fadeAudio = setInterval(() => {
  //         if (audioBGM.volume === 0.15){
  //           i = i + 1;
  //         }
  //         if (audioBGM.volume !== 0) {
  //           audioBGM.volume -= 0.002
  //           audioBGM.volume = audioBGM.volume.toFixed(4)
  //         }
  //         if (audioBGM.volume < 0.002) {
  //             audioBGM.pause();
  //             audioBGM.currentTime = 0;
  //           clearInterval(fadeAudio);
  //         }else if (i >= 2){
  //           audioBGM.volume = 0.15
  //           clearInterval(fadeAudio);
  //         }
  //       }, 10);
  //   }

  //   const changePlaceFadeAudio = () => {
  //     const fadeAudioOut = setInterval(() => {
  //       console.log(audioBGM.volume);
  //       if (audioBGM.volume > 0.01) {
  //         audioBGM.volume -= 0.004
  //         audioBGM.volume = audioBGM.volume.toFixed(4)
  //         console.log(audioBGM.volume);
  //       }
  //         if (audioBGM.volume === 0.01) {
  //           audioBGM.volume = 0.15;
  //           clearInterval(fadeAudioOut);
  //         }
  //     }, 10);
  // }
//NPC Speech

const SuccessAudio = () => {
  audioTrainingSuccess.pause();
  audioTrainingSuccess.currentTime = 0;
  audioTrainingSuccess.play();
}
const FailureAudio = () => {
  audioTrainingFailure.pause();
  audioTrainingFailure.currentTime = 0;
  audioTrainingFailure.play();
}


useEffect(() => {
  switch(true){
    case(npcControlRoom.PoringIslandBridgeNPC && screenControlRoom.PoringIslandPath6 && screenControlRoom.AltanItem):
      $('.storySpeech').html('You found a hidden passage in PoringIsland...')  
      $('.storyCharacter').html('')
      break;
    //GEAR LIST
    case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest ):
      $('.storySpeech').html('')  
      $('.storyCharacter').html('')
      break;
    case(npcControlRoom.PoringIslandBridgeNPC):
      $('.storySpeech').html(`${npcSpeech['RestingGirl'][0].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['RestingGirl'][0].name}</p>`)
      break;
    case(screenControlRoom.PoringIslandHouseMap && npcControlRoom.TrainingSuccess):
      $('.storySpeech').html(`${npcControlRoom.TrainingMaterial} Lv.${npcControlRoom.TrainingLevel + 1} - Training Success!!! <img src=${Success} alt="Success" />`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['MightyGuy'][0].name}</p>`)
      break;
    case(screenControlRoom.PoringIslandHouseMap && npcControlRoom.TrainingFailure):
      $('.storySpeech').html(`${npcControlRoom.TrainingMaterial} Lv.${npcControlRoom.TrainingLevel + 1} - Training Failure... <img src=${Failure} alt="Success" />`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['MightyGuy'][0].name}</p>`)
      break;
    case(screenControlRoom.PoringIslandHouseMap && !npcControlRoom.TrainingFailure && !npcControlRoom.TrainingFailure && userAttribute.BonusStr >= 10 && userAttribute.BonusAgi >= 10 && userAttribute.BonusVit >= 10 && userAttribute.BonusInt >= 10 && userAttribute.BonusDex >= 10 && userAttribute.BonusLuk >= 10):
      $('.storySpeech').html(`${npcSpeech['MightyGuy'][1].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['MightyGuy'][1].name}</p>`)
      break;
    case(screenControlRoom.PoringIslandHouseMap && !npcControlRoom.TrainingFailure && !npcControlRoom.TrainingFailure):
      $('.storySpeech').html(`${npcSpeech['MightyGuy'][0].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['MightyGuy'][0].name}</p>`)
      break;
    default:
      $('.storySpeech').html('')  
      $('.storyCharacter').html('')
        break;
  }
//userState,screenControRoom not included
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [npcControlRoom, screenControlRoom])

  const HouseTrainingSuccessButton = (Attr,effect,name,points) => {
    dispatch(Attr); 
    dispatch(effect); 
    dispatch(TrainingSuccesFn(name,points)); 
    setTimeout(() => SuccessAudio(), 500)
    dispatch(TrainingLoadingScreenFn())
    setTimeout(() => dispatch(TrainingLoadingScreenFn()), 1000);
    setTimeout(() => dispatch(TrainingLoadingScreenDelayFn()), 500);
    setTimeout(() => dispatch(TrainingLoadingScreenDelayFn()), 1000);
    
  }
  const HouseTrainingFailureButton = (name,points) => {
    dispatch(TrainingFailureFn(name,points)); 
    setTimeout(() => FailureAudio(), 500) 
    dispatch(TrainingLoadingScreenFn())
    setTimeout(() => dispatch(TrainingLoadingScreenFn()), 1000);
    setTimeout(() => dispatch(TrainingLoadingScreenDelayFn()), 500);
    setTimeout(() => dispatch(TrainingLoadingScreenDelayFn()), 1000);
  }

  const LoadingScreen0 = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path1",Math.round(Math.random()))), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path2",Math.round(Math.random()))), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen2 = () => {
    dispatch(BattleLoadingScreenFn())
    // setTimeout(() => dispatch(GotoBattlePoringIslandMapTwoFn("Path3")), 1000);
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path3",Math.floor(Math.random() * 2) + 2)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen2Secret = () => {
    dispatch(BattleLoadingScreenFn())
    // setTimeout(() => dispatch(GotoBattlePoringIslandMapTwoSecretFn()), 1000);
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("",4)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreenThreeBoss = () => {
    dispatch(BattleLoadingScreenFn())
    // setTimeout(() => dispatch(GotoBattlePoringIslandMapBossFn("Path5")), 1000);
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path5",5)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }


    return(
      <div className={screenControlRoom.BattleLoadingScreen && Math.random() <= 0.33 ? "loadingScreenBattle" : screenControlRoom.BattleLoadingScreen && Math.random() <= 0.33 ? "loadingScreenBattleTwo" : screenControlRoom.BattleLoadingScreen ? "loadingScreenBattleThree" :
      screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingSuccess && screenControlRoom.TrainingLoadingScreenDelay ? "loadingTrainingSuccessScreen loadingTrainingSuccessScreenImg" : screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingSuccess ? "loadingTrainingSuccessScreen" : 
      screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingFailure && screenControlRoom.TrainingLoadingScreenDelay ? "loadingTrainingFailureScreen loadingTrainingFailureScreenImg" : screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingFailure ? "loadingTrainingFailureScreen" : null}>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div className="PoringIslandMapBackground">
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
            // TREASURE MAP
            screenControlRoom.TreasurePoringIslandMap ?
              <div className="ReturnParent">
                <TreasurePoringIslandMap />
              </div>:
            screenControlRoom.TreasurePoringIslandMap2 ?
              <div className="ReturnParent">
                <TreasurePoringIslandMap2 />
              </div>:
            screenControlRoom.TreasurePoringIslandMap3 ?
              <div className="ReturnParent">
                <TreasurePoringIslandMap3 />
              </div>:
            screenControlRoom.PoringIslandHouseMap ?
              <div className="ReturnParent">
                <PoringIslandHouseMap />
              </div>:
            <div className="PoringIslandMap">
              <button className="ReturnHUDBugFix"></button>
              <h3 className="PoringIslandMapTitle">Poring Island</h3>
              {/* World Map, Reset Path Fn Optional dispatch(ReturnPoringIslandPathFn());*/}
              <button className="WorldMap" onClick={ userGoldItem.PoringIslandMap >= 1? () =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());} : () =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn()); dispatch(ReturnPoringIslandPathFn());} }>ToWorldMap</button>
              {/* Path 0 */}
              <button className={Math.random() <= 0.5 ? "SmallIsland SmallIsland1 SmallIslandPath0": "SmallIsland SmallIslandPath0 "} onClick={() =>{LoadingScreen0(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>small Island</button>
              {/* Path 1 */}
              {screenControlRoom.PoringIslandPath1 ?
               <button className="TreasureBoxPoringIsland" onClick={npcControlRoom.Chest1 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn()); dispatch(Chest1VisitRepeatFn()); dispatch(ResetPoringIslandNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn()); dispatch(ResetPoringIslandNPCFn());}}>treasure chest</button> : null}
               {screenControlRoom.PoringIslandPath1 ?
              <button className={Math.random() <= 0.5 ? "SmallIsland SmallIsland1 SmallIslandPath1": "SmallIsland SmallIslandPath1"} onClick={() =>{LoadingScreen1(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>shallow path</button> :null}
              {/* Path 2 */}  
              {screenControlRoom.PoringIslandPath2 ?
              <button className={Math.random() <= 0.5 ? "SmallIsland SmallIsland2 SmallIslandPath2 ": "SmallIsland SmallIsland3 SmallIslandPath2"} onClick={() =>{LoadingScreen2(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>walk path</button> : null}
              {/* Path 3 */}
              {screenControlRoom.PoringIslandPath3 ?
              <button className="SmallIsland SmallIsland3Secret SmallIslandPath2Secret" onClick={() =>{LoadingScreen2Secret(); changeMapFadeAudio();}}>???</button> :null}
              {screenControlRoom.PoringIslandPath3 ?
              <button className="TreasureBoxPoringIsland TreasureBoxPoringIsland2" onClick={npcControlRoom.Chest2 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMap2Fn()); dispatch(Chest2VisitRepeatFn()); dispatch(ResetPoringIslandNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMap2Fn()); dispatch(ResetPoringIslandNPCFn());}}>treasure chest</button> : null}
              {screenControlRoom.PoringIslandPath3 ?
              <button className="SmallIsland SmallIsland4 SmallIslandPathBridge" onClick={() =>{dispatch(PoringIslandBridgeNPCFn()); dispatch(GotoPoringIslandPath4Fn()); changePlaceFadeAudio();}}>Bridge</button> : null}
              {/* Path 6 Hidden*/}
              {screenControlRoom.PoringIslandPath6 ?
              <button className="SmallIsland SmallIslandBridgeHidden1 SmallIslandPathBridgeHidden1" onClick={() =>{changePlaceFadeAudio();  dispatch(GotoPoringIslandPath7Fn()); dispatch(ResetPoringIslandNPCFn());}}>secret path</button> :null}
               {/* Path 7 Hidden*/}
               {screenControlRoom.PoringIslandPath7 ?
              <button className="SmallIsland SmallIslandBridgeHidden2 SmallIslandPathBridgeHidden2" onClick={() =>{changePlaceFadeAudio();  dispatch(GotoPoringIslandPath8Fn()); dispatch(ResetPoringIslandNPCFn());}}>secret path2</button> :null}
               {/* Path 8 Hidden*/}
               {screenControlRoom.PoringIslandPath8 ?
              <button className="SmallIsland SmallIslandBridgeHiddenNPC SmallIslandPathBridgeHiddenNPC" onClick={() =>{changePlaceFadeAudio(); dispatch(GotoPoringIslandHouseMapFn()); dispatch(ResetPoringIslandNPCFn());}}>House</button> :null}
              {/* Path 4 */}
              {screenControlRoom.PoringIslandPath4 ?
              <button className={Math.random() <= 0.5 && npcControlRoom.BossEclipseDefeat ? "SmallIsland SmallIsland5B SmallIslandPathBoss ": "SmallIsland SmallIsland5 SmallIslandPathBoss"} onClick={() =>{ LoadingScreenThreeBoss(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>Boss</button> : null}
              {/* Path 5 Hidden */}
              {screenControlRoom.PoringIslandPath5 ?
              <button className="BossTreasureBoxPoringIsland" onClick={npcControlRoom.ChestBoss1 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMap3Fn()); dispatch(ChestBoss1VisitRepeatFn()); dispatch(ResetPoringIslandNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMap3Fn()); dispatch(ResetPoringIslandNPCFn());}}>shiny chest</button> : null}
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
                  <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn()); dispatch(ResetTrainingRateFn());}}>Equip</button>
                  <button className="altanItems" onClick={() =>{dispatch(GotoAltanItemFn()); dispatch(ResetTrainingRateFn());}}>Items</button>
                  <button className="altanStats" onClick={() => {dispatch(GotoAltanStatsFn()); dispatch(ResetTrainingRateFn());}}>Stats</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanQuestFn()); dispatch(ResetTrainingRateFn());}}>Quest</button>
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
              {screenControlRoom.PoringIslandHouseMap && ( screenControlRoom.HouseTrainingSTR || screenControlRoom.HouseTrainingAGI || screenControlRoom.HouseTrainingVIT || screenControlRoom.HouseTrainingINT || screenControlRoom.HouseTrainingDEX || screenControlRoom.HouseTrainingLUK ) && 
              !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ?
                <div>
                  {TrainingBox.map(Train => {
                    return(
                      <span key={Train.id}>
                        {Train.select && Train.Points < 10?
                        <div className="storyScreen">
                          <button className="HouseSelectButton" onClick={trainingSuccessRate[Train.Points] >= Math.random() ? 
                            () => {HouseTrainingSuccessButton(Train.Attr,Train.effect,Train.name,Train.Points);} : () => {HouseTrainingFailureButton(Train.name,Train.Points);}}>YES</button>
                          <button className="HouseSelectButton" onClick={() => {dispatch(ResetHouseTrainingFn()); dispatch(ResetTrainingRateFn());}}>NO</button>
                        </div> : null}
                      </span>
                    )
                  })}
                </div> : null}

              {screenControlRoom.TreasurePoringIslandMap && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn());}}>Return</button>
              </div> :
              screenControlRoom.TreasurePoringIslandMap2 && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMap2Fn());}}>Return</button>
              </div> : 
              screenControlRoom.TreasurePoringIslandMap3 && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMap3Fn());}}>Return</button>
              </div> : 
              screenControlRoom.PoringIslandHouseMap && !( (screenControlRoom.HouseTrainingSTR && userAttribute.BonusStr < 10) || (screenControlRoom.HouseTrainingAGI && userAttribute.BonusAgi < 10) || (screenControlRoom.HouseTrainingVIT && userAttribute.BonusVit < 10) || (screenControlRoom.HouseTrainingINT && userAttribute.BonusInt < 10) || (screenControlRoom.HouseTrainingDEX && userAttribute.BonusDex < 10) || (screenControlRoom.HouseTrainingLUK && userAttribute.BonusLuk < 10) ) && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoPoringIslandHouseMapFn()); dispatch(ResetTrainingRateFn());}}>Return</button>
              </div> : null}
              
                {/* <div>
                  {userGoldItem.Katana >= 1 || userGoldItem.BastardSword >= 1 || userGoldItem.GaiaSword >= 1 || userGoldItem.TwinEdgeofNaghtSieger >= 1 || userGoldItem.VioletFear >= 1 ?
                  <div>
                    <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Empty",null, 1));}}>Empty</button>
                    {userGoldItem.Katana >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Katana",Katana, 60));}}><img src={Katana} alt="Katana" />Katana</button> : null}
                    {userGoldItem.BastardSword >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Bastard Sword",BastardSword, 115));}}><img src={BastardSword} alt="BastardSword" />Bastard Sword</button> : null}
                    {userGoldItem.GaiaSword >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Gaia Sword",GaiaSword, 140));}}><img src={GaiaSword} alt="GaiaSword" />GaiaSword</button> : null }
                    {userGoldItem.TwinEdgeofNaghtSieger >= 1 ?<button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Twin Edge of Naght Sieger",TwinEdgeofNaghtSieger, 160));}}><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger</button> : null}
                    {userGoldItem.VioletFear >= 1 ? <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Violet Fear",VioletFear, 275));}}><img src={VioletFear} alt="VioletFear"/>Violet Fear</button>: null}
                  </div> 
                  : <button onClick={() => {dispatch(ReturnWeaponEquipmentChoiceFn("Empty",null, 1));}}>Empty</button>}
                </div> 
            : null} */}
                 {/* <div>
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
           : null} */}
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;