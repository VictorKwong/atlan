import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn} from './actions';
import { TalktoPronteraKingFn, TalktoRoyalGuard1Fn, TalktoRoyalGuard2Fn , TalktoPronteraAssistantFn, TalktoPronteraAssistantContinueFn, TalktoPronteraAssistantLearnedFn } from './actions'
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn } from './actions'

//Learn
import { UserLearnAmuletRecoveryFn } from './actions'
//PATH
import { FinalBossPathFn } from './actions'
//ITEM
import { SpiritOfDoppelgangerFn, SpiritOfWolyafaFn, SpiritOfEclipseFn} from './actions'


import Prontera from './Prontera'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import './css/mapPronteraCastle.css'
import $ from 'jquery'

import PronteraKingImg from './img/NPC/PronteraKing.gif'
import PronteraAssistantImg from './img/NPC/PronteraAssistant.gif'
import PronteraRoyalSoldierImg from './img/NPC/RoyalSoldier.gif'


import audioThemeOfJuno from './audio/310ThemeOfJuno.mp3'
const audioBGM = new Audio(audioThemeOfJuno);

//Chat reading
let listResult = document.getElementsByClassName('storyChat')[0];

// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
function StartMenu(props){

    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const npcSpeech = useSelector(state => state.npcSpeech)
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
      $('.PronteraCastleMapTitle').fadeIn(600);
      $('.PronteraCastleMapTitle').delay(2400).fadeOut(600);
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


    useEffect(() => {
      switch(true){
        //GEAR LIST
        case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest ):
          $('.storySpeech').html('')
          $('.storyCharacter').html('')
          break;
        //Talk message
        case(npcControlRoom.PronteraKing && screenControlRoom.FinalBossPath && npcControlRoom.BossBaphometDefeat):
          $('.storySpeech').html(`<p>${npcSpeech['PronteraKing'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['PronteraKing'][2].name}</p>`)
          break;
        case(npcControlRoom.PronteraKing && screenControlRoom.FinalBossPath):
          $('.storySpeech').html(`<p>${npcSpeech['PronteraKing'][1].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['PronteraKing'][1].name}</p>`)
          break;
        case(npcControlRoom.PronteraKing):
          $('.storySpeech').html(`<p>${npcSpeech['PronteraKing'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['PronteraKing'][0].name}</p>`)
          break;
        case(npcControlRoom.PronteraAssistant && npcControlRoom.PronteraAssistantContinue && npcControlRoom.PronteraAssistantLearned):
          $('.storySpeech').html(`<p>${npcSpeech['PronteraAssistant'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['PronteraAssistant'][2].name}</p>`)
          break;
        case(npcControlRoom.PronteraAssistant && npcControlRoom.PronteraAssistantLearned):
          $('.storySpeech').html(`<p>${npcSpeech['PronteraAssistant'][3].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['PronteraAssistant'][3].name}</p>`)
          break;
        case(npcControlRoom.PronteraAssistant && npcControlRoom.PronteraAssistantContinue):
          $('.storySpeech').html(`<p>${npcSpeech['PronteraAssistant'][1].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['PronteraAssistant'][1].name}</p>`)
          break;
        case(npcControlRoom.PronteraAssistant):
          $('.storySpeech').html(`<p>${npcSpeech['PronteraAssistant'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['PronteraAssistant'][0].name}</p>`)
        break;
        case(npcControlRoom.RoyalGuard1):
          $('.storySpeech').html(`<p>${npcSpeech['RoyalGuard1'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['RoyalGuard1'][0].name}</p>`)
        break;
        case(npcControlRoom.RoyalGuard2):
          $('.storySpeech').html(`<p>${npcSpeech['RoyalGuard2'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['RoyalGuard2'][0].name}</p>`)
        break;
        // reset
          default:
            $('.storySpeech').html('')  
            $('.storyCharacter').html('')
            break;
      }
  //userState,screenControRoom not included
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [npcControlRoom, npcSpeech, screenControlRoom])




    return(
      <div>
        {
        screenControlRoom.Prontera ? <Prontera />:
        screenControlRoom.PronteraCastle ?
        <div className="PronteraCastleMapBackground">
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

              <div className="PronteraCastleMap">
                <h3 className="PronteraCastleMapTitle">Prontera Castle</h3>
                {/* click x trigger hover */}
                <button className="PronternaKing" onClick={() => {dispatch(TalktoPronteraKingFn())}}><img src={PronteraKingImg} alt="Prontera King" /></button>
                <button className="PronternaAssistant" onClick={() => {dispatch(TalktoPronteraAssistantFn())}}><img src={PronteraAssistantImg} alt="Prontera Assistant" /></button>
                <button className="PronternaRoyalGuard1" onClick={() => {dispatch(TalktoRoyalGuard1Fn())}}><img src={PronteraRoyalSoldierImg} alt="Prontera RoyalSoldier 1" /></button>
                <button className="PronternaRoyalGuard2" onClick={() => {dispatch(TalktoRoyalGuard2Fn())}}><img className="GuardDirection" src={PronteraRoyalSoldierImg} alt="Prontera RoyalSoldier 2" /></button>
                <button className="ExitPronteraCastle" onClick={() => {dispatch(GotoPronteraFn()); changeMapFadeAudio();}}>Exit</button>
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
            {npcControlRoom.PronteraAssistant && npcControlRoom.PronteraAssistantContinue && !npcControlRoom.PronteraAssistantLearned && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ?
            <div className="storyScreen">
              <button className="ReturnPayonCave" onClick={() => {dispatch(UserLearnAmuletRecoveryFn(true)); dispatch(TalktoPronteraAssistantLearnedFn());}}>Hang Over the Items</button>
            </div> :
            npcControlRoom.PronteraAssistant && !npcControlRoom.PronteraAssistantContinue && !npcControlRoom.PronteraAssistantLearned && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ?
            <div className="storyScreen">
              <button className="ReturnPayonCave" onClick={() => {dispatch(TalktoPronteraAssistantContinueFn());}}>Research..?</button>
            </div> : null}


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
              {userGoldItem.SpiritOfEclipse >= 1 && userGoldItem.SpiritOfWolyafa >= 1 && userGoldItem.SpiritOfDoppelganger >= 1 && screenControlRoom.PronteraCastle && npcControlRoom.PronteraKing && !screenControlRoom.FinalBossPath ?
              <div className="textCenter">
                <button className="kafraEmployeeHeal" onClick={() => {dispatch(FinalBossPathFn()); dispatch(SpiritOfDoppelgangerFn(0,-1)); dispatch(SpiritOfWolyafaFn(0,-1)); dispatch(SpiritOfEclipseFn(0,-1));}}>Hang over the 3 souls</button> 
              </div> : null}
          </fieldset>
        </div>
        : null }
      </div>
    );
}

export default StartMenu;