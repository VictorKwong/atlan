import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoBattlePoringIslandMapFn , GotoTreasurePoringIslandMapFn, GotoPoringIslandHouseMapFn} from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn } from './actions';
//CHEST
import { Chest1VisitRepeatFn , Chest2VisitRepeatFn, ChestBoss1VisitRepeatFn} from './actions'
//HOUSE
import { RedPotionFn } from './actions'
import { ResetTrainingRateFn, ResetHouseTrainingFn } from './actions'
import { TrainingSuccesFn, TrainingFailureFn } from './actions'
import { TrainingSTRFn , TrainingAGIFn , TrainingVITFn , TrainingINTFn , TrainingDEXFn , TrainingLUKFn } from './actions'
import { BonusSTRPointsFn , BonusAGIPointsFn , BonusVITPointsFn , BonusINTPointsFn , BonusDEXPointsFn , BonusLUKPointsFn } from './actions'
//Loading Screen
import { BattleLoadingScreenFn , TrainingLoadingScreenFn , TrainingLoadingScreenDelayFn} from './actions'
//PATH
import { GotoPoringIslandPath4Fn, GotoPoringIslandPath7Fn, GotoPoringIslandPath8Fn, ReturnPoringIslandPathFn} from './actions'
//NPC
import { PoringIslandBridgeNPCFn , PoringIslandBridgeNPCSelectOneFn, PoringIslandBridgeNPCSelectTwoFn, PoringIslandBridgeNPCSelectThreeFn, PoringIslandFairyNPC1Fn, PoringIslandFairyNPC2Fn, PoringIslandFairyNPCSelectOneFn, PoringIslandFairyNPCSelectTwoFn, ResetPoringIslandNPCFn } from './actions'
//NPC Action
import { WinJellopyFn, WinEmptyBottleFn} from './actions'
//Quest Result
import { WinResultFn, UserLevelUpFn } from './actions';
// EQUIP ACTION
import {ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn, ReturnHeadGearEquipmentChoiceFn} from './actions'
//cutscene
import {cutsceneTwoFn} from './actions'

import BattlePoringIslandMap from './BattlePoringIslandMap'
import TreasurePoringIslandMap from './TreasurePoringIslandMap'
import PoringIslandHouseMap from './PoringIslandHouseMap'
import WorldMap from './WorldMap'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import './css/mapPoringIsland.css'
import $ from 'jquery'
import audioStreamside from './audio/112Streamside.mp3'
//SKILLS
import skillBash from './img/Skill/sm_bash.gif'
import skillMammonite from './img/Skill/mc_mammonite.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillKodoku from './img/Skill/pr_kodoku.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
import skillBowlingBash from './img/Skill/sm_blowingbash.gif'

import Success from './img/Emote/Success.gif'
import Failure from './img/Emote/Failure.gif'
import BlackSmith from './img/NPC/BlackSmith.gif'

import TrainingSuccess from './audio/SoundEffect/TrainingSuccess.mp3'
import TrainingFailure from './audio/SoundEffect/TrainingFailure.mp3'
import LevelUpSoundEffect from './audio/SoundEffect/LevelUpSoundEffect.mp3'
const audioLevelUp = new Audio(LevelUpSoundEffect);

const audioTrainingSuccess = new Audio (TrainingSuccess)
const audioTrainingFailure = new Audio (TrainingFailure)

const audioBGM = new Audio(audioStreamside);

//Chat reading
let listResult = document.getElementsByClassName('storyChat')[0];

function StartMenu(props){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const userAttribute = useSelector(state => state.userAttribute)
    const trainingSuccessRate = useSelector(state => state.trainingSuccessRate)
    const trainingSuccessRequire = useSelector(state => state.trainingSuccessRequire)
    const dispatch = useDispatch();

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

    //LEVEL FUNCTION
    useEffect(() => {
      //MAX Lv99
      if((userStats.Level < 99) && (userStats.Experience >= baseEXPChart[userStats.Level])){
        (() => {
          switch (true) {
            case((userStats.Level + 1) <= 4):
              return dispatch(UserLevelUpFn(3));
            case((userStats.Level + 1) <= 9):
              return dispatch(UserLevelUpFn(4));
            case((userStats.Level + 1) <= 14):
              return dispatch(UserLevelUpFn(5));           
            case((userStats.Level + 1) <= 19):
              return dispatch(UserLevelUpFn(6));
            case((userStats.Level + 1) <= 24):
              return dispatch(UserLevelUpFn(7));
            case((userStats.Level + 1) <= 29):
              return dispatch(UserLevelUpFn(8));
            case((userStats.Level + 1) <= 34):
              return dispatch(UserLevelUpFn(9));
            case((userStats.Level + 1) <= 39):
              return dispatch(UserLevelUpFn(10));     
            case((userStats.Level + 1) <= 44):
              return dispatch(UserLevelUpFn(11));
            case((userStats.Level + 1) <= 49):
              return dispatch(UserLevelUpFn(12));
            case((userStats.Level + 1) <= 54):
              return dispatch(UserLevelUpFn(13));
            case((userStats.Level + 1) <= 59):
              return dispatch(UserLevelUpFn(14));
            case((userStats.Level + 1) <= 64):
              return dispatch(UserLevelUpFn(15));
            case((userStats.Level + 1) <= 69):
              return dispatch(UserLevelUpFn(16));
            case((userStats.Level + 1) <= 74):
              return dispatch(UserLevelUpFn(17));
            case((userStats.Level + 1) <= 79):
              return dispatch(UserLevelUpFn(18));
            case((userStats.Level + 1) <= 84):
              return dispatch(UserLevelUpFn(19));
            case((userStats.Level + 1) <= 89):
              return dispatch(UserLevelUpFn(20));
            case((userStats.Level + 1) <= 94):
              return dispatch(UserLevelUpFn(21));
            case((userStats.Level + 1) <= 98):
              return dispatch(UserLevelUpFn(22));
            default:
              return dispatch(UserLevelUpFn(23));
          }
          })()
          audioLevelUp.play();
        $('.questCompleteResult').append(`\n <p>Atlan has Level Up to Lv${userStats.Level + 1}</p>`)
          switch (true) {
            case((userStats.Level + 1) === 5):
              return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Bash <img src=${skillBash} alt="skillBash" /> !</p>`)
            case((userStats.Level + 1) === 10):
              return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Mammonite<img src=${skillMammonite} alt="skillMammonite" />!</p>`)
            case((userStats.Level + 1) === 13):
              return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Kodoku<img src=${skillKodoku} alt="Kodoku" />!</p>`) 
            case((userStats.Level + 1) === 20):
              return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Magnum Break<img src=${skillMagnum} alt="skillMagnumBreak" />!</p>`)
            case((userStats.Level + 1) === 35):
              return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Quicken<img src=${skillQuicken} alt="skillQuicken" />!</p>`)
            case((userStats.Level + 1) === 70):
              return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Bowling Bash<img src=${skillBowlingBash} alt="skillBowlingBash" />!</p>`)
            default:
              return 0;
          }
      }
    listResult = document.getElementsByClassName('storyChat')[0];
    listResult.scrollTop = listResult.scrollHeight;
  }, [dispatch, userStats, baseEXPChart]);



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
    case(npcControlRoom.PoringIslandBridgeNPC && npcControlRoom.PoringIslandBridgeNPCSelectThree):
      $('.storySpeech').html(`${npcSpeech['RestingGirl'][3].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['RestingGirl'][3].name}</p>`)
      break;
    case(npcControlRoom.PoringIslandBridgeNPC && npcControlRoom.PoringIslandBridgeNPCSelectOne):
      $('.storySpeech').html(`${npcSpeech['RestingGirl'][1].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['RestingGirl'][1].name}</p>`)
      break;
    case(npcControlRoom.PoringIslandBridgeNPC && npcControlRoom.PoringIslandBridgeNPCSelectTwo):
      $('.storySpeech').html(`${npcSpeech['RestingGirl'][2].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['RestingGirl'][2].name}</p>`)
      break;
    case(npcControlRoom.PoringIslandBridgeNPC):
      $('.storySpeech').html(`${npcSpeech['RestingGirl'][0].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['RestingGirl'][0].name}</p>`)
      break;
    case((npcControlRoom.PoringIslandFairyNPC1 || npcControlRoom.PoringIslandFairyNPC2)&& npcControlRoom.PoringIslandFairyNPCSelectOne):
      $('.storySpeech').html(`${npcSpeech['Fairy'][3].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Fairy'][3].name}</p>`)
      break;
    case((npcControlRoom.PoringIslandFairyNPC1 || npcControlRoom.PoringIslandFairyNPC2)&& npcControlRoom.PoringIslandFairyNPCSelectTwo):
      $('.storySpeech').html(`${npcSpeech['Fairy'][4].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Fairy'][4].name}</p>`)
      break;
    case(npcControlRoom.PoringIslandFairyNPC1):
      $('.storySpeech').html(`${npcSpeech['Fairy'][0].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Fairy'][0].name}</p>`)
      break;
    case(npcControlRoom.PoringIslandFairyNPC2):
      $('.storySpeech').html(`${npcSpeech['Fairy'][1].text}`)
      $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Fairy'][1].name}</p>`)
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
      $('.storySpeech').html('');
      $('.storyCharacter').html('');
      $('.questCompleteResult').html('');
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path5",5)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }


    return(
      <div className={
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
              <button className={Math.random() <= 0.5 ? "SmallIsland SmallIsland1 SmallIslandPath0": "SmallIsland SmallIslandPath0 "} onClick={() =>{LoadingScreen0(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>Small Island</button>
              {/* Path 1 */}
              {screenControlRoom.PoringIslandPath1 ?
               <button className="TreasureBoxPoringIsland" onClick={npcControlRoom.Chest1 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("Chest1")); dispatch(Chest1VisitRepeatFn()); dispatch(ResetPoringIslandNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("Chest1")); dispatch(ResetPoringIslandNPCFn());}}>Treasure</button> : null}
               {screenControlRoom.PoringIslandPath1 ?
              <button className={Math.random() <= 0.5 ? "SmallIsland SmallIsland1 SmallIslandPath1": "SmallIsland SmallIslandPath1"} onClick={() =>{LoadingScreen1(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>Shallow path</button> :null}
              {/* Path 2 */}  
              {screenControlRoom.PoringIslandPath2 ?
              <button className={Math.random() <= 0.5 ? "SmallIsland SmallIsland2 SmallIslandPath2 ": "SmallIsland SmallIsland3 SmallIslandPath2"} onClick={() =>{LoadingScreen2(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>The forest</button> : null}
              {/* Path 3 */}
              {screenControlRoom.PoringIslandPath3 ?
              <button className="SmallIsland SmallIsland3Secret SmallIslandPath2Secret" onClick={() =>{LoadingScreen2Secret(); changeMapFadeAudio();}}>???</button> :null}
              {screenControlRoom.PoringIslandPath3 ?
              <button className="TreasureBoxPoringIsland TreasureBoxPoringIsland2" onClick={npcControlRoom.Chest2 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("Chest2")); dispatch(Chest2VisitRepeatFn()); dispatch(ResetPoringIslandNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("Chest2")); dispatch(ResetPoringIslandNPCFn());}}>Treasure</button> : null}
              {screenControlRoom.PoringIslandPath3 ?
              <button className="SmallIsland SmallIsland4 SmallIslandPathBridge" onClick={() =>{dispatch(PoringIslandBridgeNPCFn()); dispatch(GotoPoringIslandPath4Fn()); changePlaceFadeAudio();}}>Bridge</button> : null}
              {/* Path 6 Hidden*/}
              {screenControlRoom.PoringIslandPath6 ?
              <button className="SmallIsland SmallIslandBridgeHidden1 SmallIslandPathBridgeHidden1" onClick={() =>{changePlaceFadeAudio();  dispatch(GotoPoringIslandPath7Fn()); dispatch(PoringIslandFairyNPC1Fn());}}>Secret path</button> :null}
               {/* Path 7 Hidden*/}
               {screenControlRoom.PoringIslandPath7 ?
              <button className="SmallIsland SmallIslandBridgeHidden2 SmallIslandPathBridgeHidden2" onClick={() =>{changePlaceFadeAudio();  dispatch(GotoPoringIslandPath8Fn()); dispatch(PoringIslandFairyNPC2Fn());}}>Hidden road</button> :null}
               {/* Path 8 Hidden*/}
               {screenControlRoom.PoringIslandPath8 ?
              <button className="SmallIsland SmallIslandBridgeHiddenNPC SmallIslandPathBridgeHiddenNPC" onClick={() =>{changePlaceFadeAudio(); dispatch(GotoPoringIslandHouseMapFn()); dispatch(ResetPoringIslandNPCFn());}}><img src={BlackSmith} alt="BlackSmith"/></button> :null}
              {/* Path 4 */}
              {screenControlRoom.PoringIslandPath4 ?
              <button className={Math.random() <= 0.5 && npcControlRoom.BossEclipseDefeat ? "SmallIsland SmallIsland5B SmallIslandPathBoss ": "SmallIsland SmallIsland5 SmallIslandPathBoss"} onClick={
                screenControlRoom.storyLineTwo ? 
                () =>{ LoadingScreenThreeBoss(); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());} : 
                () =>{ dispatch(cutsceneTwoFn()); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());}}>Boss💢</button> : null}
              {/* Path 5 Hidden */}
              {screenControlRoom.PoringIslandPath5 ?
              <button className="BossTreasureBoxPoringIsland" onClick={npcControlRoom.ChestBoss1 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest1")); dispatch(ChestBoss1VisitRepeatFn()); dispatch(ResetPoringIslandNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest1")); dispatch(ResetPoringIslandNPCFn());}}>☆Shiny treasure☆</button> : null}
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
                  {props.WeaponGearBox.map(Equip => {
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
                {props.ArmorGearBox.map(Equip => {
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
                {props.HeadGearBox.map(Equip => {
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
                        {Train.select && Train.Points < 10 && userGoldItem.Zeny >= trainingSuccessRequire[Train.Points] ?
                        <div className="storyScreen">
                          <button className="HouseSelectButton" onClick={trainingSuccessRate[Train.Points] >= Math.random() ? 
                            () => {HouseTrainingSuccessButton(Train.Attr,Train.effect,Train.name,Train.Points); dispatch(RedPotionFn(-trainingSuccessRequire[Train.Points]),0);} : () => {HouseTrainingFailureButton(Train.name,Train.Points); dispatch(RedPotionFn(-trainingSuccessRequire[Train.Points]),0);}}>YES</button>
                          <button className="HouseSelectButton" onClick={() => {dispatch(ResetHouseTrainingFn()); dispatch(ResetTrainingRateFn());}}>NO</button>
                        </div> : 
                        Train.select && Train.Points < 10 && userGoldItem.Zeny < trainingSuccessRequire[Train.Points] ?
                        <div className="storyScreen">
                          <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoPoringIslandHouseMapFn()); dispatch(ResetTrainingRateFn());}}>Return</button>
                        </div> : null}
                      </span>
                    )
                  })}
                </div> : null}

              {screenControlRoom.TreasurePoringIslandMap && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn());}}>Return</button>
              </div> : 
              screenControlRoom.PoringIslandHouseMap && !( (screenControlRoom.HouseTrainingSTR && userAttribute.BonusStr < 10) || (screenControlRoom.HouseTrainingAGI && userAttribute.BonusAgi < 10) || (screenControlRoom.HouseTrainingVIT && userAttribute.BonusVit < 10) || (screenControlRoom.HouseTrainingINT && userAttribute.BonusInt < 10) || (screenControlRoom.HouseTrainingDEX && userAttribute.BonusDex < 10) || (screenControlRoom.HouseTrainingLUK && userAttribute.BonusLuk < 10) ) && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoPoringIslandHouseMapFn()); dispatch(ResetTrainingRateFn());}}>Return</button>
              </div> : null}
              {/* Bridge NPC */}
              {npcControlRoom.PoringIslandBridgeNPC && !npcControlRoom.PoringIslandBridgeNPCSelectOne && !npcControlRoom.PoringIslandBridgeNPCSelectTwo ?
                <div className="storyScreen">
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandBridgeNPCSelectOneFn());}}>Hidden Path...?</button>
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandBridgeNPCSelectTwoFn());}}>Who are you?</button>
                </div> : null}
              {npcControlRoom.PoringIslandBridgeNPC && npcControlRoom.PoringIslandBridgeNPCSelectTwo && !npcControlRoom.PoringIslandBridgeNPCSelectThree &&
               userGoldItem.Jellopy >= 3 && userGoldItem.EmptyBottle >= 3 ?
                <div className="storyScreen">
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandBridgeNPCSelectThreeFn()); dispatch(WinResultFn(100,3000)); dispatch(WinJellopyFn(0,-3)); dispatch(WinEmptyBottleFn(0,-1));}}>Give 3 Jellopy & 1 Empty Bottle</button>
                </div> : null}
              {npcControlRoom.PoringIslandBridgeNPC && npcControlRoom.PoringIslandBridgeNPCSelectThree ?
                <div className="storyScreen">
                  <p className="questCompleteResult"></p>
                </div> : null}
                {/* Fairy NPC */}
              {(npcControlRoom.PoringIslandFairyNPC1 || npcControlRoom.PoringIslandFairyNPC2) && (!npcControlRoom.PoringIslandFairyNPCSelectOne && !npcControlRoom.PoringIslandFairyNPCSelectTwo ) ?
                <div className="storyScreen">
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandFairyNPCSelectOneFn());}}>Hidden path on PayonCave..?</button>
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandFairyNPCSelectTwoFn());}}>Hidden path on GeffenDungeon?</button>
                </div> : null}
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;