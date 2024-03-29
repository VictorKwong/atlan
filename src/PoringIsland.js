import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoBattlePoringIslandMapFn , GotoTreasurePoringIslandMapFn, GotoPoringIslandHouseMapFn} from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn, GotoAltanSkillsFn } from './actions';
//CHEST
import { Chest1VisitRepeatFn , Chest2VisitRepeatFn, ChestBoss1VisitRepeatFn} from './actions'
//HOUSE
import { RedPotionFn } from './actions'
import { ResetTrainingRateFn, ResetHouseTrainingFn } from './actions'
import { TrainingSuccesFn, TrainingFailureFn } from './actions'
import { TrainingSTRFn , TrainingAGIFn , TrainingVITFn , TrainingINTFn , TrainingDEXFn , TrainingLUKFn } from './actions'
import { BonusSTRPointsFn , BonusAGIPointsFn , BonusVITPointsFn , BonusINTPointsFn , BonusDEXPointsFn , BonusLUKPointsFn } from './actions'
//Loading Screen
import { BattleLoadingScreenFn , TrainingLoadingScreenFn , TrainingLoadingScreenDelayFn, NextMapLoadingScreenFn, NextWorldMapLoadingScreenFn} from './actions'
//PATH
import { GotoPoringIslandPath4Fn, GotoPoringIslandPath7Fn, GotoPoringIslandPath8Fn, ReturnPoringIslandPathFn} from './actions'
//NPC
import { PoringIslandBridgeNPCFn , PoringIslandBridgeNPCSelectOneFn, PoringIslandBridgeNPCSelectTwoFn, PoringIslandBridgeNPCSelectThreeFn, PoringIslandFairyNPC1Fn, PoringIslandFairyNPC2Fn, PoringIslandFairyNPCSelectOneFn, PoringIslandFairyNPCSelectTwoFn, ResetPoringIslandNPCFn } from './actions'
//NPC Action
import { WinJellopyFn, WinEmptyBottleFn} from './actions'
//Quest Result
import { WinResultFn, UserLevelUpFn } from './actions';
//cutscene
import {cutsceneTwoFn} from './actions'
//Music Options
import { gameTitleOptionScreenFn } from './actions'
import GameOption from './GameOption'

import BattlePoringIslandMap from './BattlePoringIslandMap'
import TreasurePoringIslandMap from './TreasurePoringIslandMap'
import PoringIslandHouseMap from './PoringIslandHouseMap'
import WorldMap from './WorldMap'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import AltanSkills from './AltanSkills'
import './css/mapPoringIsland.css'
import $ from 'jquery'
import audioStreamside from './audio/112Streamside.mp3'
//SKILLS
import skillFirstAid from './img/Skill/nv_firstaid.gif'
import skillKodoku from './img/Skill/pr_kodoku.gif'
import skillBash from './img/Skill/sm_bash.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillHeadCrush from './img/Skill/lk_headcrush.gif'
import skillMammonite from './img/Skill/mc_mammonite.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
import skillVitalStrike from './img/Skill/lk_vitalstrike.gif'
import skillBowlingBash from './img/Skill/sm_blowingbash.gif'
import skillOut from './img/Skill/skill_out.gif'
import skillDown from './img/Skill/skill_down.gif'

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
    const baseJobEXPChart = useSelector(state => state.baseJobEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const userAttribute = useSelector(state => state.userAttribute)
    const trainingSuccessRate = useSelector(state => state.trainingSuccessRate)
    const trainingSuccessRequire = useSelector(state => state.trainingSuccessRequire)
    const skillCapChart = useSelector(state => state.skillCapChart)
    const miscControlRoom = useSelector(state => state.miscControlRoom)
    const dispatch = useDispatch();

    let TrainingBox = [
      {id:20001, Attr:TrainingSTRFn(1), name:"STR", Points:userAttribute.TrainingStr, select: screenControlRoom.HouseTrainingSTR, effect:BonusSTRPointsFn()},
      {id:20002, Attr:TrainingAGIFn(1), name:"AGI", Points:userAttribute.TrainingAgi, select: screenControlRoom.HouseTrainingAGI, effect:BonusAGIPointsFn()},
      {id:20003, Attr:TrainingVITFn(1), name:"VIT", Points:userAttribute.TrainingVit, select: screenControlRoom.HouseTrainingVIT, effect:BonusVITPointsFn(userAttribute.BonusVit + 1,userAttribute.vit)},
      {id:20004, Attr:TrainingINTFn(1), name:"INT", Points:userAttribute.TrainingInt, select: screenControlRoom.HouseTrainingINT, effect:BonusINTPointsFn(userAttribute.BonusInt + 1,userAttribute.int)},
      {id:20005, Attr:TrainingDEXFn(1), name:"DEX", Points:userAttribute.TrainingDex, select: screenControlRoom.HouseTrainingDEX, effect:BonusDEXPointsFn()},
      {id:20006, Attr:TrainingLUKFn(1), name:"LUK", Points:userAttribute.TrainingLuk, select: screenControlRoom.HouseTrainingLUK, effect:BonusLUKPointsFn()}
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
    case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanSkills):
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path1",Math.round(Math.random()),99,442)), miscControlRoom.LoadingScreen);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), miscControlRoom.LoadingScreen);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path2",Math.round(Math.random()))), miscControlRoom.LoadingScreen);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), miscControlRoom.LoadingScreen);
  }
  const LoadingScreen2 = () => {
    dispatch(BattleLoadingScreenFn())
    // setTimeout(() => dispatch(GotoBattlePoringIslandMapTwoFn("Path3")), 1000);
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path3",Math.floor(Math.random() * 2) + 2)), miscControlRoom.LoadingScreen);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), miscControlRoom.LoadingScreen);
  }
  const LoadingScreen2Secret = () => {
    dispatch(BattleLoadingScreenFn())
    // setTimeout(() => dispatch(GotoBattlePoringIslandMapTwoSecretFn()), 1000);
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("",4)), miscControlRoom.LoadingScreen);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), miscControlRoom.LoadingScreen);
  }
  const LoadingScreenThreeBoss = () => {
    dispatch(BattleLoadingScreenFn())
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path5",5)), miscControlRoom.LoadingScreen);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), miscControlRoom.LoadingScreen);
  }
  const NextMapProteraFn = (num) => {

    //1.WorldMap
    //2.PoringIslandHouseMap
    switch(true){
      case (num === 1):
        dispatch(NextWorldMapLoadingScreenFn());
        setTimeout(() => dispatch(NextWorldMapLoadingScreenFn()), miscControlRoom.WorldMap);
        return setTimeout(() => dispatch(GotoWorldMapFn()), miscControlRoom.WorldChangeMap);
      case (num === 2):
        dispatch(NextMapLoadingScreenFn());
        setTimeout(() => dispatch(NextMapLoadingScreenFn()), miscControlRoom.MiniMap);
        return setTimeout(() => dispatch(GotoPoringIslandHouseMapFn()), miscControlRoom.MiniChangeMap);
      default:
        break;
  }
}
  
    return(
      <div className={
      screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingSuccess && screenControlRoom.TrainingLoadingScreenDelay ? "loadingTrainingSuccessScreen loadingTrainingSuccessScreenImg" : screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingSuccess ? "loadingTrainingSuccessScreen" : 
      screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingFailure && screenControlRoom.TrainingLoadingScreenDelay ? "loadingTrainingFailureScreen loadingTrainingFailureScreenImg" : screenControlRoom.TrainingLoadingScreen && npcControlRoom.TrainingFailure ? "loadingTrainingFailureScreen" : null}>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        screenControlRoom.gameTitleOptionScreen ? <GameOption audioBGM={audioBGM}/> :
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
            screenControlRoom.AltanSkills ?
              <div className="ReturnParent">
                <AltanSkills SkillsLevelingBox={props.SkillsLevelingBox}/> 
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanSkillsFn());}}>x</button>
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
              <button className="WorldMap" onClick={ userGoldItem.PoringIslandMap >= 1? () =>{NextMapProteraFn(1); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn());} : () =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetPoringIslandNPCFn()); dispatch(ReturnPoringIslandPathFn());} }>ToWorldMap</button>
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
              <button className="SmallIsland SmallIslandBridgeHiddenNPC SmallIslandPathBridgeHiddenNPC" onClick={() =>{changePlaceFadeAudio(); NextMapProteraFn(2); dispatch(ResetPoringIslandNPCFn());}}><img src={BlackSmith} alt="BlackSmith"/></button> :null}
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
                    <p className="destextHUD leveltext">Job Lv. {userStats.Level}</p>
                    {userStats.Level >= 70 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.JobExperience - baseJobEXPChart[userStats.JobLevel - 1])/(baseJobEXPChart[userStats.JobLevel] - baseJobEXPChart[userStats.JobLevel - 1])*100} max="100" title={userStats.JobExperience + "/" + baseJobEXPChart[userStats.JobLevel]}></progress>}
                </div>
                  <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <div>
                  <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn()); dispatch(ResetTrainingRateFn());}}>Equip</button>
                  <button className="altanItems" onClick={() =>{dispatch(GotoAltanItemFn()); dispatch(ResetTrainingRateFn());}}>Items</button>
                  <button className="altanStats" onClick={() => {dispatch(GotoAltanStatsFn()); dispatch(ResetTrainingRateFn());}}>Stats</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanQuestFn()); dispatch(ResetTrainingRateFn());}}>Quest</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanSkillsFn()); dispatch(ResetTrainingRateFn());}}>Skills</button>
                  <button className="altanQuest" onClick={() => {dispatch(gameTitleOptionScreenFn()); dispatch(ResetTrainingRateFn());}}>Option</button>
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
                        <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.WeaponEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);  }}>
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
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.ArmorEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.HeadGearEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
            {/* FOOTGEAR */}
            {screenControlRoom.FootGearEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Foot Gear Bag</p>
              {userGoldItem.Sandals >= 1 || userGoldItem.Shoes >= 1 || userGoldItem.Boots >= 1 || userGoldItem.Greaves >= 1 || userGoldItem.BunnySlipper >= 1 || userGoldItem.TidalShoes >= 1 || userGoldItem.SiegeBoots >= 1 || userGoldItem.SiegeGreaves >= 1 || userGoldItem.VidarsBoots >= 1 || userGoldItem.VitalTreeShoes >= 1 || userGoldItem.VariantShoes >= 1 || userGoldItem.Sleipnir >= 1 ?
                <div>
                {props.FootGearBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.FootGearEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty FootGear Storage T^T</p>}
              </div> : null}
            {/* GARMENT */}
            {screenControlRoom.GarmentEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Foot Gear Bag</p>
              {userGoldItem.Hood >= 1 || userGoldItem.Muffler  >= 1 || userGoldItem.Manteau >= 1 || userGoldItem.FalconMuffler >= 1 || userGoldItem.ValisManteau >= 1 || userGoldItem.ValkyrianManteau >= 1 || userGoldItem.WoolScarf >= 1 || userGoldItem.FallenAngelWing >= 1 || userGoldItem.CloakofGray >= 1 || userGoldItem.ElementalCape >= 1 || userGoldItem.Asprika >= 1 ?
                <div>
                {props.GarmentBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.GarmentEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty Garment Storage T^T</p>}
              </div> : null}
            {/* ACCESSORY ONE */}
            {screenControlRoom.AccessoryOneEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Accessory Bag</p>
              {userGoldItem.Clip >= 1 || userGoldItem.Rosary  >= 1 || userGoldItem.VesperCore02 >= 1 || userGoldItem.BradiumEarring >= 1 || userGoldItem.GloriousRing >= 1 || userGoldItem.SprintRing >= 1 || userGoldItem.DiabolusRing >= 1 || userGoldItem.MedalofHonor >= 1 || userGoldItem.BakonawaAgimatTattoo >= 1 || userGoldItem.Brisingamen >= 1 || userGoldItem.Megingjard >= 1 ?
                <div>
                {props.AccessoryOneBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.AccessoryOneEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty Accessory Storage T^T</p>}
              </div> : null}
            {/* ACCESSORY TWO */}
            {screenControlRoom.AccessoryTwoEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Accessory Bag</p>
              {userGoldItem.Clip >= 1 || userGoldItem.Rosary  >= 1 || userGoldItem.VesperCore02 >= 1 || userGoldItem.BradiumEarring >= 1 || userGoldItem.GloriousRing >= 1 || userGoldItem.SprintRing >= 1 || userGoldItem.DiabolusRing >= 1 || userGoldItem.MedalofHonor >= 1 || userGoldItem.BakonawaAgimatTattoo >= 1 || userGoldItem.Brisingamen >= 1 || userGoldItem.Megingjard >= 1 ?
                <div>
                {props.AccessoryTwoBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.AccessoryTwoEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty Accessory Storage T^T</p>}
              </div> : null}
            {/* Skills Room */}
            {(screenControlRoom.FirstAidTraining || screenControlRoom.BashTraining || screenControlRoom.MammoniteTraining || screenControlRoom.KodokuTraining || screenControlRoom.MagnumBreakTraining || screenControlRoom.HeadCrushTraining || screenControlRoom.QuickenTraining || screenControlRoom.VitalStrikeTraining || screenControlRoom.BowlingBashTraining) && 
              (screenControlRoom.AltanSkills) ?
                <div>
                  {props.SkillsLevelingBox.map(Skills => {
                    return(
                      <span key={Skills.id}>
                        {Skills.select ?
                          <p className="skillChatCenter">{Skills.title}</p>
                        : null}
                        {Skills.name === "First Aid" && screenControlRoom.FirstAidTraining ?
                        <button className={userStats.currentSP >= skillCapChart.SPFirstAid ? "altanSkillChatButton atlanSkillButtonFix atlanSkillButtonUse" : "altanSkillChatButton atlanSkillButtonFix atlanSkillButtonUse atlanSkillButtonNeedMoreSP"} title={Skills.title} onClick={
                          userStats.currentSP >= skillCapChart.SPFirstAid && userStats.currentHealth !== userStats.maxHealth?
                          () => dispatch(Skills.Activate) : null}>
                          <div className="adjImgCenterBox">
                            <p className="adjImgCenter"><img src={Skills.Img} alt={Skills.name} />Use {Skills.name} - Lv.{Skills.skillLevelCheck}</p>
                          </div>
                          </button> : null}
                        {Skills.select && skillCapChart.JobPoints >= 1 ?
                        <span>
                          <button className="altanSkillChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Skills.Upgrade);}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter" ><img className="skillLevelDisplay" src={skillOut} alt="skillOut"/><img className="skillLevelDisplayTwo" src={skillDown} alt="skillDown"/>LevelUp</p>
                            </div>
                          </button>
                        </span> :  null}
                      </span>
                    ) 
                  })}
                </div> : null}
              {screenControlRoom.PoringIslandHouseMap && ( screenControlRoom.HouseTrainingSTR || screenControlRoom.HouseTrainingAGI || screenControlRoom.HouseTrainingVIT || screenControlRoom.HouseTrainingINT || screenControlRoom.HouseTrainingDEX || screenControlRoom.HouseTrainingLUK ) && 
              !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
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
                          <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); NextMapProteraFn(2); dispatch(ResetTrainingRateFn());}}>Return</button>
                        </div> : null}
                      </span>
                    )
                  })}
                </div> : null}

              {screenControlRoom.TreasurePoringIslandMap && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn());}}>Return</button>
              </div> : 
              screenControlRoom.PoringIslandHouseMap && !( (screenControlRoom.HouseTrainingSTR && userAttribute.BonusStr < 10) || (screenControlRoom.HouseTrainingAGI && userAttribute.BonusAgi < 10) || (screenControlRoom.HouseTrainingVIT && userAttribute.BonusVit < 10) || (screenControlRoom.HouseTrainingINT && userAttribute.BonusInt < 10) || (screenControlRoom.HouseTrainingDEX && userAttribute.BonusDex < 10) || (screenControlRoom.HouseTrainingLUK && userAttribute.BonusLuk < 10) ) && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ? 
              <div className="storyScreen">
                <button className="ReturnPoringIsland" onClick={() => {changePlaceFadeAudio(); NextMapProteraFn(2); dispatch(ResetTrainingRateFn());}}>Return</button>
              </div> : null}
              {/* Bridge NPC */}
              {npcControlRoom.PoringIslandBridgeNPC && !npcControlRoom.PoringIslandBridgeNPCSelectOne && !npcControlRoom.PoringIslandBridgeNPCSelectTwo && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills)  ?
                <div className="storyScreen">
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandBridgeNPCSelectOneFn());}}>Hidden Path...?</button>
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandBridgeNPCSelectTwoFn());}}>Who are you?</button>
                </div> : null}
              {npcControlRoom.PoringIslandBridgeNPC && npcControlRoom.PoringIslandBridgeNPCSelectTwo && !npcControlRoom.PoringIslandBridgeNPCSelectThree && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) &&
               userGoldItem.Jellopy >= 3 && userGoldItem.EmptyBottle >= 3 ?
                <div className="storyScreen">
                  <button className="ReturnPoringIsland" onClick={() => {dispatch(PoringIslandBridgeNPCSelectThreeFn()); dispatch(WinResultFn(100,3000)); dispatch(WinJellopyFn(0,-3)); dispatch(WinEmptyBottleFn(0,-1));}}>Give 3 Jellopy & 1 Empty Bottle</button>
                </div> : null}
              {npcControlRoom.PoringIslandBridgeNPC && npcControlRoom.PoringIslandBridgeNPCSelectThree && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
                <div className="storyScreen">
                  <p className="questCompleteResult"></p>
                </div> : null}
                {/* Fairy NPC */}
              {(npcControlRoom.PoringIslandFairyNPC1 || npcControlRoom.PoringIslandFairyNPC2) && (!npcControlRoom.PoringIslandFairyNPCSelectOne && !npcControlRoom.PoringIslandFairyNPCSelectTwo ) && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
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