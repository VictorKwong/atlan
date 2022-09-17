import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn} from './actions';
import { TalktoPronteraKingFn, TalktoRoyalGuard1Fn, TalktoRoyalGuard2Fn , TalktoPronteraAssistantFn, TalktoPronteraAssistantContinueFn, TalktoPronteraAssistantLearnedFn } from './actions'
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn, GotoAltanSkillsFn } from './actions'

//Learn
import { UserLearnAmuletRecoveryFn } from './actions'
//PATH
import { FinalBossPathFn } from './actions'
//ITEM
import { SpiritOfDoppelgangerFn, SpiritOfWolyafaFn, SpiritOfEclipseFn, WinRedGemstoneFn, WinCursedRubyFn, WinDiamondFn} from './actions'
//Music Options
import { gameTitleOptionScreenFn } from './actions'
//loading Screen
import { NextMapLoadingScreenFn } from './actions'
import GameOption from './GameOption'

import Prontera from './Prontera'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import AltanSkills from './AltanSkills'
import './css/mapPronteraCastle.css'
import $ from 'jquery'

import PronteraKingImg from './img/NPC/PronteraKing.gif'
import PronteraAssistantImg from './img/NPC/PronteraAssistant.gif'
import PronteraRoyalSoldierImg from './img/NPC/RoyalSoldier.gif'

import RedGemstone from './img/Etc/Wraith_RedGemstone10.gif'
import CursedRuby from './img/Etc/Doppelganger_CursedRuby80.gif'
import Diamond from './img/Etc/WraithDead_Diamond10.gif'
import SpiritOfBoss from './img/Etc/SpiritOfEclipse.gif'

import skillOut from './img/Skill/skill_out.gif'
import skillDown from './img/Skill/skill_down.gif'

import audioThemeOfJuno from './audio/310ThemeOfJuno.mp3'
const audioBGM = new Audio(audioThemeOfJuno);


// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
function StartMenu(props){

    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const baseJobEXPChart = useSelector(state => state.baseJobEXPChart)
    const userStats = useSelector(state => state.userStats)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const skillCapChart = useSelector(state => state.skillCapChart)
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
        case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanSkills):
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

  const NextMapProteraFn = (num) => {
    dispatch(NextMapLoadingScreenFn());
    setTimeout(() => dispatch(NextMapLoadingScreenFn()), 1000);
    //1.Prontera
    switch(true){
      case (num === 1):
        return setTimeout(() => dispatch(GotoPronteraFn()), 500);
      default:
        break;
    }
  }

    return(
      <div>
        {
        screenControlRoom.Prontera ? <Prontera />:
        screenControlRoom.gameTitleOptionScreen ? <GameOption audioBGM={audioBGM}/> :
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
          screenControlRoom.AltanSkills ?
            <div className="ReturnParent">
              <AltanSkills SkillsLevelingBox={props.SkillsLevelingBox}/> 
              <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanSkillsFn());}}>x</button>
            </div>:
              <div className="PronteraCastleMap">
                <h3 className="PronteraCastleMapTitle">Prontera Castle</h3>
                {/* click x trigger hover */}
                <button className="PronternaKing" onClick={() => {dispatch(TalktoPronteraKingFn())}}><img src={PronteraKingImg} alt="Prontera King" /></button>
                <button className="PronternaAssistant" onClick={() => {dispatch(TalktoPronteraAssistantFn())}}><img src={PronteraAssistantImg} alt="Prontera Assistant" /></button>
                <button className="PronternaRoyalGuard1" onClick={() => {dispatch(TalktoRoyalGuard1Fn())}}><img src={PronteraRoyalSoldierImg} alt="Prontera RoyalSoldier 1" /></button>
                <button className="PronternaRoyalGuard2" onClick={() => {dispatch(TalktoRoyalGuard2Fn())}}><img className="GuardDirection" src={PronteraRoyalSoldierImg} alt="Prontera RoyalSoldier 2" /></button>
                <button className="ExitPronteraCastle" onClick={() => {NextMapProteraFn(1); changeMapFadeAudio();}}>Exit</button>
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
                  <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>Equip</button>
                  <button className="altanItems" onClick={() =>{dispatch(GotoAltanItemFn());}}>Items</button>
                  <button className="altanStats" onClick={() => {dispatch(GotoAltanStatsFn());}}>Stats</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanQuestFn());}}>Quest</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanSkillsFn());}}>Skills</button>
                  <button className="altanQuest" onClick={() => {dispatch(gameTitleOptionScreenFn());}}>Option</button>
                </div>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech"></p>
            {npcControlRoom.PronteraAssistant && npcControlRoom.PronteraAssistantContinue && !npcControlRoom.PronteraAssistantLearned && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) && (userGoldItem.RedGemstone >= 1 && userGoldItem.CursedRuby >= 10 && userGoldItem.Diamond >= 1) ?
            <div className="storyScreen">
              <button className="ReturnPayonCave" onClick={() => {dispatch(UserLearnAmuletRecoveryFn(true)); dispatch(TalktoPronteraAssistantLearnedFn()); dispatch(WinRedGemstoneFn(0,-1)); dispatch(WinCursedRubyFn(0,-10)); dispatch(WinDiamondFn(0,-2));}}>Hang Over the Items - x1<img src={RedGemstone} alt="RedGemstone"/> x10<img src={CursedRuby} alt="CursedRuby"/> x2<img src={Diamond} alt="Diamond"/></button>
            </div> :
            npcControlRoom.PronteraAssistant && !npcControlRoom.PronteraAssistantContinue && !npcControlRoom.PronteraAssistantLearned && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
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
                        <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); props.WeaponEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
              {userGoldItem.SpiritOfEclipse >= 1 && userGoldItem.SpiritOfWolyafa >= 1 && userGoldItem.SpiritOfDoppelganger >= 1 && screenControlRoom.PronteraCastle && npcControlRoom.PronteraKing && !screenControlRoom.FinalBossPath ?
              <div className="textCenter">
                <button className="kafraEmployeeHeal" onClick={() => {dispatch(FinalBossPathFn()); dispatch(SpiritOfDoppelgangerFn(0,-1)); dispatch(SpiritOfWolyafaFn(0,-1)); dispatch(SpiritOfEclipseFn(0,-1));}}>Hang over the 3 souls - x1<img src={SpiritOfBoss} alt="SpiritOfBoss"/> x1<img src={SpiritOfBoss} alt="SpiritOfBoss"/> x1<img src={SpiritOfBoss} alt="SpiritOfBoss"/></button> 
              </div> : null}
          </fieldset>
        </div>
        : null }
      </div>
    );
}

export default StartMenu;