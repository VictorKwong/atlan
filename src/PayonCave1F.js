import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn, GotoPayonCave2FFn } from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn, GotoAltanSkillsFn} from './actions';
//Loading Screen
import { BattleLoadingScreenFn } from './actions'
//CHEST
import { PayonCaveChest3VisitRepeatFn, PayonCaveChest4VisitRepeatFn } from './actions'
//PATH
import { GotoPayonCave1FPath3HiddenFn, ReturnPayonCavePathFn } from './actions'
//NPC
import { PayonCave1FSelfNPCHiddenFn, ResetPayonCaveNPCFn } from './actions'
//QUEST
import { AcceptQuestDialogFn, ProgressQuestDialogFn } from './actions'
//Music Options
import { gameTitleOptionScreenFn } from './actions'
import GameOption from './GameOption'

import WorldMap from './WorldMap'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import TreasurePoringIslandMap from './TreasurePoringIslandMap'
import PayonCave2F from './PayonCave2F'
import PayonCave3F from './PayonCave3F'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import AltanSkills from './AltanSkills'
import './css/mapPayonCave.css'
import $ from 'jquery'

import skillOut from './img/Skill/skill_out.gif'
import skillDown from './img/Skill/skill_down.gif'

import audioAncientGroover from './audio/AncientGroover.mp3'
const audioBGM = new Audio(audioAncientGroover);


function StartMenu(props){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
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
      //Not Depend on audioControlRoom
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
      $('.PayonCave1FMapTitle').fadeIn(600);
      $('.PayonCave1FMapTitle').delay(2400).fadeOut(600);
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
      case(screenControlRoom.UserUnlockPath === "PayonCave1FPath1" && screenControlRoom.PayonCave1FPath2Hidden && screenControlRoom.AltanItem):
        $('.storySpeech').html('You found a hidden passage in PayonCave1F...')  
        $('.storyCharacter').html('')
        break;
      case(npcControlRoom.PayonCave2FSelfNPC && screenControlRoom.PayonCave2FPath9Hidden && screenControlRoom.AltanItem):
        $('.storySpeech').html('You found a hidden passage in PayonCave2F...')  
        $('.storyCharacter').html('')
        break;
      case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanSkills):
        $('.storySpeech').html('')  
        $('.storyCharacter').html('')
        break;
      case(npcControlRoom.PayonCave2FSelfNPC && screenControlRoom.PayonCave2FPath9Hidden):
        $('.storySpeech').html(`${npcSpeech['Atlan'][1].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Atlan'][1].name}</p>`)
        break;
      case(npcControlRoom.PayonCave2FSelfNPC):
        $('.storySpeech').html(`${npcSpeech['Atlan'][0].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Atlan'][0].name}</p>`)
        break;
      case(npcControlRoom.PayonCave2FFairyNPC1):
        $('.storySpeech').html(`${npcSpeech['Fairy'][2].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Fairy'][2].name}</p>`)
        break;
      case(npcControlRoom.PayonCave2FCaveNPC):
        $('.storySpeech').html(`${npcSpeech['Adventure'][0].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Adventure'][0].name}</p>`)
        break;
      case(npcControlRoom.PayonCave3FCaveNPC):
        $('.storySpeech').html(`${npcSpeech['ScaredAcolyte'][0].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ScaredAcolyte'][0].name}</p>`)
        break;
      case(npcControlRoom.PayonCave1FSelfNPCHidden):
        $('.storySpeech').html(`${npcSpeech['Atlan'][2].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Atlan'][2].name}</p>`)
        break;
      case(npcControlRoom.PayonCave2FSelfNPCHidden && ((questControlRoom.QuestDialog).indexOf("Lemonstory") === -1 && (questControlRoom.CompleteQuestDialog).indexOf("Lemonstory") === -1)):
      //Reject
        $('.storySpeech').html(`${npcSpeech['Atlan'][5].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Atlan'][5].name}</p>`)
        break;
      case(npcControlRoom.PayonCave2FSelfNPCHidden):
        $('.storySpeech').html(`${npcSpeech['Atlan'][3].text}`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Atlan'][3].name}</p>`)
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave1FPath1",Math.floor(Math.random() * 2) + 6)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }

    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        screenControlRoom.gameTitleOptionScreen ? <GameOption audioBGM={audioBGM}/> :
        <div className={screenControlRoom.PayonCave1F && screenControlRoom.PayonCave2F ? "PayonCave2FMapBackground" : screenControlRoom.PayonCave1F && screenControlRoom.PayonCave3F ? "PayonCave3FMapBackground" : screenControlRoom.PayonCave1F ? "PayonCave1FMapBackground" : null}>
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
            screenControlRoom.TreasurePoringIslandMap ?
              <div className="ReturnParent">
                <TreasurePoringIslandMap />
              </div>:
            screenControlRoom.PayonCave2F ?
              <div className="ReturnParent">
                <PayonCave2F audioBGM={audioBGM}/>
              </div>:
            screenControlRoom.PayonCave3F ?
              <div className="ReturnParent">
                <PayonCave3F audioBGM={audioBGM}/>
              </div>:
            <div className="PayonCave1FMap">
              <button className="ReturnHUDBugFix"></button>
              <h3 className="PayonCave1FMapTitle">Payon Cave 1F</h3>
              <button className="PayonCave1FToWorldMap" onClick={ userGoldItem.PayonCaveMap >= 1? () =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetPayonCaveNPCFn());} : () =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetPayonCaveNPCFn()); dispatch(ReturnPayonCavePathFn());} }>ToWorldMap</button>
              {/* Path 0 */}
              <button className={Math.random() <= 0.5 ? "PayonCave1FPath0": "PayonCave1FPath0 PayonCave1FPath0Pic2"} onClick={() =>{LoadingScreen0(); changeMapFadeAudio(); dispatch(ResetPayonCaveNPCFn());}}>Cave1</button>
              {/* Path 2 Hidden*/}
              {screenControlRoom.PayonCave1FPath2Hidden ?
                <button className="PayonCaveBase PayonCave1FPathHidden1" onClick={npcControlRoom.PayonCaveChest4 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("PayonCaveChest4")); dispatch(PayonCaveChest4VisitRepeatFn()); dispatch(ResetPayonCaveNPCFn()); dispatch(GotoPayonCave1FPath3HiddenFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("PayonCaveChest4")); dispatch(ResetPayonCaveNPCFn()); dispatch(GotoPayonCave1FPath3HiddenFn());}}>Hidden treasure</button> : null }
              {/* Path 3 Hidden*/}
              {screenControlRoom.PayonCave1FPath3Hidden ?
              <button className="PayonCaveBase PayonCave1FPathHidden2" onClick={
                ((questControlRoom.QuestDialog).indexOf("Lemonstory") === -1 && (questControlRoom.CompleteQuestDialog).indexOf("Lemonstory") === -1) ?
                () => {changePlaceFadeAudio(); dispatch(PayonCave1FSelfNPCHiddenFn()); dispatch(AcceptQuestDialogFn("Lemonstory")); dispatch(ProgressQuestDialogFn("Lemonstoryone")); } :
                () => {changePlaceFadeAudio(); dispatch(PayonCave1FSelfNPCHiddenFn());}}>Hidden Story</button> : null}
              {/* Path 1 */}
              {screenControlRoom.PayonCave1FPath1 ?
               <button className="TreasureBoxPayonCave1F" onClick={npcControlRoom.PayonCaveChest3 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("PayonCaveChest3")); dispatch(PayonCaveChest3VisitRepeatFn()); dispatch(ResetPayonCaveNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("PayonCaveChest3")); dispatch(ResetPayonCaveNPCFn());}}>Treasure</button> : null}
              {screenControlRoom.PayonCave1FPath1 ?
                <button className="PayonCave1FTo2F" onClick={() => {dispatch(GotoPayonCave2FFn()); changePlaceFadeAudio(); dispatch(ResetPayonCaveNPCFn());}}>PayonCave2F</button> : null}

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
              {screenControlRoom.TreasurePoringIslandMap && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ? 
              <div className="storyScreen">
                <button className="ReturnPayonCave" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn());}}>Return</button>
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
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;