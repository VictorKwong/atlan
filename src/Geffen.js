import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoTreasurePoringIslandMapFn, GotoGeffenDungeon1FFn } from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn } from './actions';
// EQUIP ACTION
import { ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn, ReturnHeadGearEquipmentChoiceFn} from './actions'
// NPC
import { GeffenGoblinYulaNPCFn, GeffenCitizenNPCFn, GeffenTimerNPCFn, GeffenGoblinYulaNPCInterestFn, GeffenGoblinYulaNPCLearnedFn, ResetGeffenNPCFn } from './actions'
//Learn
import { UserLearnMasterItemFn } from './actions'

import WorldMap from './WorldMap'
import GeffenDungeon1F from './GeffenDungeon1F'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import './css/mapGeffen.css'
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

import GoblinYula from './img/NPC/GoblinYula.gif'
import GeffenCitizen from './img/NPC/GeffenCitizen.gif'
import GeffenTimer from './img/NPC/GeffenTimer.gif'

import audio13ThemeOfGeffen from './audio/13ThemeOfGeffen.mp3'
const audioBGM = new Audio(audio13ThemeOfGeffen);


function StartMenu(){
  const screenControlRoom = useSelector(state => state.screenControlRoom)
  const questControlRoom = useSelector(state => state.questControlRoom)
  const baseEXPChart = useSelector(state => state.baseEXPChart)
  const userStats = useSelector(state => state.userStats)
  const userGoldItem = useSelector(state => state.userGoldItem)
  const npcControlRoom = useSelector(state => state.npcControlRoom)
  const audioControlRoom = useSelector(state => state.audioControlRoom)
  const npcSpeech = useSelector(state => state.npcSpeech)
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
      $('.GeffenMapTitle').fadeIn(600);
      $('.GeffenMapTitle').delay(2400).fadeOut(600);
    }, [screenControlRoom])

    useEffect(() => {
      switch(true){
        case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest ):
          $('.storySpeech').html('')  
          $('.storyCharacter').html('')
          break;
        case(npcControlRoom.GeffenGoblinYulaNPC && npcControlRoom.GeffenGoblinYulaNPCInterest && npcControlRoom.GeffenGoblinYulaNPCLearned):
            $('.storySpeech').html(`<p>${npcSpeech['GoblinYula'][2].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GoblinYula'][2].name}</p>`)
          break;
        case(npcControlRoom.GeffenGoblinYulaNPC && npcControlRoom.GeffenGoblinYulaNPCLearned):
            $('.storySpeech').html(`<p>${npcSpeech['GoblinYula'][3].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GoblinYula'][3].name}</p>`)
          break;
        case(npcControlRoom.GeffenGoblinYulaNPC && npcControlRoom.GeffenGoblinYulaNPCInterest):
            $('.storySpeech').html(`<p>${npcSpeech['GoblinYula'][1].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GoblinYula'][1].name}</p>`)
          break;
        case(npcControlRoom.GeffenGoblinYulaNPC):
          $('.storySpeech').html(`${npcSpeech['GoblinYula'][0].text}`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GoblinYula'][0].name}</p>`)
          break;
        case(npcControlRoom.GeffenCitizenNPC):
          $('.storySpeech').html(`${npcSpeech['GeffenCitizen'][0].text}`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GeffenCitizen'][0].name}</p>`)
          break;
        default:
          $('.storySpeech').html('')  
          $('.storyCharacter').html('')
          break;
        }
      //userState,screenControRoom not included
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [npcControlRoom, screenControlRoom])
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
  return(
    <div>
      {
      screenControlRoom.WorldMap ? <WorldMap/> :
      screenControlRoom.GeffenDungeon1F ? <GeffenDungeon1F /> :
      <div className="GeffenMapBackground">
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
          <div className="GeffenMap">
            <button className="ReturnHUDBugFix"></button>
            <h3 className="GeffenMapTitle">Geffen</h3>
            <button className="GeffenWorldMap" onClick={() =>{dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetGeffenNPCFn());}}>ToWorldMap</button>
            <button className="GeffenBase GeffenGoblinYula" onClick={() =>{dispatch(GeffenGoblinYulaNPCFn()); changePlaceFadeAudio();}}><img src={GoblinYula} alt="Goblin Yula" /></button>
            <button className="GeffenBase GeffenCitizen" onClick={() =>{dispatch(GeffenCitizenNPCFn()); changePlaceFadeAudio();}}><img src={GeffenCitizen} alt="GeffenCitizen"/></button>
            <button className="GeffenBase GeffenTimer" onClick={() =>{dispatch(GeffenTimerNPCFn()); changePlaceFadeAudio();}}><img src={GeffenTimer} alt="GeffenTimer"/></button>
            <button className="GeffenBase GeffenDungeon1F" onClick={() =>{dispatch(GotoGeffenDungeon1FFn()); changeMapFadeAudio(); dispatch(ResetGeffenNPCFn());}}>Geffen Dungeon Entrance</button>
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
              <button className="ReturnPayonCave" onClick={() => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn());}}>Return</button>
            </div> : null}
            {npcControlRoom.GeffenGoblinYulaNPC && npcControlRoom.GeffenGoblinYulaNPCInterest && !npcControlRoom.GeffenGoblinYulaNPCLearned && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ?
            <div className="storyScreen">
              <button className="ReturnPayonCave" onClick={() => {dispatch(UserLearnMasterItemFn(true)); dispatch(GeffenGoblinYulaNPCLearnedFn());}}>Hang Over the Items</button>
            </div> :
            npcControlRoom.GeffenGoblinYulaNPC && !npcControlRoom.GeffenGoblinYulaNPCInterest && !npcControlRoom.GeffenGoblinYulaNPCLearned && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats) ?
            <div className="storyScreen">
              <button className="ReturnPayonCave" onClick={() => {dispatch(GeffenGoblinYulaNPCInterestFn());}}>I want to learn Master Item</button>
            </div> : null}
        </fieldset>
      </div>
      }
    </div>
  );
}

export default StartMenu;