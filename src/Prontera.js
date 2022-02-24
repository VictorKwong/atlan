import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoPronteraToolDealerFn, GotoPronteraWeaponArmorDealerFn, GotoPronteraHeadGearDealerFn } from './actions';
// EQUIP ACTION
import {ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn, ReturnHeadGearEquipmentChoiceFn} from './actions'
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn } from './actions';

import { TalktoKafraEmployeeFn, TalktoFountainFn , TalktoQuestBoardFn, ResetTalktoFn} from './actions';

//New Function
import { TalktoHeadGearDealerFn , TalktoToolDealerFn, ResetDealerBuySellHealFn, DealerBuyFn, DealerSellFn } from './actions';

//Npc Function
import { KafraEmployeeHealStateFn } from'./actions';

//Function
import { AcceptQuestDialogFn, ReturnQuestDialogFn , KafraEmployeeHealFn, ResetMyPointsFn } from './actions'

import WorldMap from './WorldMap'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import PronteraToolDealer from './PronteraToolDealer'
import PronteraWeaponArmorDealer from './PronteraWeaponArmorDealer'
import PronteraHeadGearDealer from './PronteraHeadGearDealer'
import './css/mapProntera.css'
import $ from 'jquery'
import audioThemeOfProntera from './audio/108ThemeOfProntera.mp3'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

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

//NPC
import KafraEmployee from './img/NPC/KafraEmployee.gif'
import QuestBoard from './img/NPC/QuestBoard.gif'
import Fountain from './img/NPC/Fountain.gif'
import PronteraToolDealerImg from './img/NPC/PronteraToolDealer.gif'
import Warp from './img/NPC/Warp.gif'
import PronteraHeadGearDealerImg from './img/NPC/PronteraHeadGearDealer.gif'

const audioBGM = new Audio(audioThemeOfProntera);

//QUEST
const QuestBox = [
  {id: 0, num: "0", acceptName: "Clear Poring", acceptDescription: "Kill 3 Poring in PoringIsland", finishName: "Clear Poring xD",  finishText: "Received +100Exp +1000z"},
  {id: 1, num: "1", acceptName: "Clear Lunatic", acceptDescription: "Kill 3 Lunatic in PoringIsland", finishName: "Clear Lunatic xD", finishText: "Received +200Exp +2000z"}
]

function StartMenu(){
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
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
        if (audioBGM.volume > 0.01) {
          audioBGM.volume -= 0.004
          audioBGM.volume = audioBGM.volume.toFixed(4)
        }
          if (audioBGM.volume === 0.01) {
            audioBGM.volume = 0.15;
            clearInterval(fadeAudioOut);
          }
      }, 10);
  }

  //NPC Speech
  useEffect(() => {
      switch(true){
        //HEAD GEAR SHOP
        //Talk message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && (npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false)):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['HeadGearDealer'][0].name}</p>`)
          break;
        //Buy Success message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerBuySuccess):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['HeadGearDealer'][2].name}</p>`)
          break;
        //Buy Failure message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerBuyFailure):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][3].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['HeadGearDealer'][3].name}</p>`)
          break;
        //Sell Success message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerSellSuccess):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][5].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['HeadGearDealer'][5].name}</p>`)
          break;
        //Buy message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerBuy):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][1].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['HeadGearDealer'][1].name}</p>`)
          break;
        //Sell message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerSell):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][4].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['HeadGearDealer'][4].name}</p>`)
          break;
        //TOOL SHOP
        //Talk message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][0].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ToolDealer'][0].name}</p>`)
            break;
        //Buy Success message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuySuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][2].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ToolDealer'][2].name}</p>`)
            break;
        //Buy Failure message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuyFailure):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ToolDealer'][3].name}</p>`)
            break;
        //Sell Success message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerSellSuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ToolDealer'][5].name}</p>`)
            break;
        //Buy message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuy):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][1].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ToolDealer'][1].name}</p>`)
            break;
        //Sell message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerSell):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ToolDealer'][4].name}</p>`)
            break;
      //WEAPON & ARMOR SHOP
      //Welcome message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer === false && npcControlRoom.ArmorDealer === false && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['WeaponArmorDealer'][0].name}</p>`)
          break;
      //WEAPON SHOP
      //Talk message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
        $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][0].text}</p>`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['WeaponDealer'][0].name}</p>`)
        break;
      //Buy Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuySuccess):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['WeaponDealer'][2].name}</p>`)
          break;
      //Buy Failure message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuyFailure):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][3].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['WeaponDealer'][3].name}</p>`)
          break;
      //Sell Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerSellSuccess):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][5].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['WeaponDealer'][5].name}</p>`)
          break;
      //Buy message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuy):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][1].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['WeaponDealer'][1].name}</p>`)
          break;
      //Sell message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerSell):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][4].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['WeaponDealer'][4].name}</p>`)
          break;
        //ARMOR SHOP
        //Talk message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
          $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ArmorDealer'][0].name}</p>`)
          break;
        //Buy Success message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuySuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][2].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ArmorDealer'][2].name}</p>`)
            break;
        //Buy Failure message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuyFailure):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ArmorDealer'][3].name}</p>`)
            break;
        //Sell Success message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerSellSuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ArmorDealer'][5].name}</p>`)
            break;
        //Buy message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuy):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][1].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ArmorDealer'][1].name}</p>`)
            break;
        //Sell message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerSell):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ArmorDealer'][4].name}</p>`)
            break;
        //Kafra Employee
        case(npcControlRoom.KafraEmployee && npcControlRoom.KafraEmployeeHealState && userStats.currentHealth === userStats.maxHealth && userStats.currentSP === userStats.maxSP):
          $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['KafraEmployee'][2].name}</p>`)
          dispatch(KafraEmployeeHealFn());
          break;
        case(npcControlRoom.KafraEmployee && npcControlRoom.KafraEmployeeHealState):
          $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][1].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['KafraEmployee'][1].name}</p>`)
          dispatch(KafraEmployeeHealFn());
          break;
        case(npcControlRoom.KafraEmployee):
          $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][0].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['KafraEmployee'][0].name}</p>`)
          break;
        // reset
          default:
            $('.storySpeech').html('')  
            $('.storyCharacter').html('')
            break;
      }
  //userState,screenControRoom not included
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [npcControlRoom, npcSpeech])






    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        <div className="PronteraMapBackground">
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
            //Prontera Shops
            screenControlRoom.PronteraHeadGearDealer ? 
            <div className="ReturnParent">
              <PronteraHeadGearDealer />
              <button className="ReturnHUD" onClick={() =>{dispatch(GotoPronteraHeadGearDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>x</button>
            </div>:
            screenControlRoom.PronteraToolDealer ? 
            <div className="ReturnParent">
              <PronteraToolDealer />
              <button className="ReturnHUD" onClick={() =>{dispatch(GotoPronteraToolDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>x</button>
            </div>:
            screenControlRoom.PronteraWeaponArmorDealer ? 
            <div className="ReturnParent">
              <PronteraWeaponArmorDealer />
              <button className="ReturnHUD" onClick={() =>{dispatch(GotoPronteraWeaponArmorDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>x</button>
            </div>:
            <div className="PronteraMap">
              <h3 className="PronteraMapTitle">Prontera</h3>
              <button className="toolDealerNPC" onClick={() =>{dispatch(GotoPronteraToolDealerFn()); dispatch(TalktoToolDealerFn()); changePlaceFadeAudio();}}><img src={PronteraToolDealerImg} alt="Prontera Tool Dealer" /></button>
              <button className="weaponArmorDealerNPC" onClick={() =>{dispatch(GotoPronteraWeaponArmorDealerFn()); dispatch(ResetTalktoFn()); changePlaceFadeAudio();}}><img className="weaponArmorDealerNPCImg" src={Warp} alt="Warp Portal" /></button>
              <button className="kafraEmployee" onClick={() => dispatch(TalktoKafraEmployeeFn())}><img src={KafraEmployee} alt="Kafra Employee" /></button>
              <button className="pronteraFountain" onClick={() => {dispatch(TalktoFountainFn());}}><img className="pronteraFountainImg" src={Fountain} alt="Fountain" /></button>
              <button className="questBoard" onClick={() => {dispatch(TalktoQuestBoardFn());}}><img src={QuestBoard} alt="Quest Board" /></button> 
              <button className="headGearDealerNPC" onClick={() => {dispatch(GotoPronteraHeadGearDealerFn()); dispatch(TalktoHeadGearDealerFn()); changePlaceFadeAudio();}}><img src={PronteraHeadGearDealerImg} alt="Prontera Head Gear Dealer" /></button> 
              <button className="PronteraWorldMap" onClick={() => {dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetTalktoFn());}}>PronteraSouthGate</button>
            </div>}
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
                  <button className="altanItems" onClick={() =>{dispatch(GotoAltanItemFn());}}>Items</button>
                  <button className="altanStats" onClick={() => {dispatch(GotoAltanStatsFn());}}>Stats</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanQuestFn());}}>Quest</button>
                </div>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>
              {npcControlRoom.Fountain ? 
              <div>
                <p className="chatDescriptTitle">Fountain</p>
                <button className="fountainResetPoint" onClick={() =>{dispatch(ResetMyPointsFn());}}>Reset my Status Point</button> 
              </div>: null }
              {npcControlRoom.KafraEmployee ? <button className="kafraEmployeeHeal" onClick={() => dispatch(KafraEmployeeHealStateFn())}>Heal</button> : null}
              {/* QUEST */}
              {npcControlRoom.QuestBoard ? 
              <div>
                {/* {((questControlRoom.QuestDialog).indexOf("0") === -1 && questControlRoom.CompleteQuestDialog.indexOf("0") === -1) ? <button className="questBoard" onClick={() => {dispatch(AcceptQuestDialogFn("1"));}}>Killing Poring</button> : 
                (questControlRoom.QuestDialog).indexOf("0") > -1  && ((questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll("0","").length) >= 3 ? <button className="questBoard" onClick={() => {dispatch(ReturnQuestDialogFn("0"));}}>Finish Killing Poring</button> : null } */}
                  <p className="chatDescriptTitle">Quest Board</p>
                <ul>
                  {QuestBox.map(Quest => {
                    return (
                      <li key={Quest.id} className="questList">
                        {/* index -1 means not found, > -1 means found */}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) === -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? <button className="questBoardItems" onClick={() => {dispatch(AcceptQuestDialogFn(Quest.num));}}>{Quest.acceptName} + {Quest.acceptDescription}</button> : 
                        // Quest Accept && Kill more than 3 monster
                        (questControlRoom.QuestDialog).indexOf(Quest.num) > -1  && ((questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll(Quest.num,"").length) >= 3 ? <button className="questBoardItems" onClick={() => {dispatch(ReturnQuestDialogFn(Quest.num));}}>{Quest.finishName} + {Quest.finishText} </button> : null }
                      </li>
                    )
                  })}
                </ul>
              </div> : null}
              {/* BUY SELL FN */}
              {screenControlRoom.PronteraHeadGearDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn());}}>Buy</button>
                  <button onClick={() =>{dispatch(DealerSellFn());}}>Sell</button>
                  <button onClick={() => {dispatch(GotoPronteraHeadGearDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave HeadGearShop</button>
                </div> :
              screenControlRoom.PronteraToolDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn())}}>Buy</button>
                  <button onClick={() =>{dispatch(DealerSellFn())}}>Sell</button>
                  <button onClick={() => {dispatch(GotoPronteraToolDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave ToolShop</button>
                </div> :
              npcControlRoom.WeaponDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn())}}>Buy Weapon</button>
                  <button onClick={() =>{dispatch(DealerSellFn())}}>Sell Weapon</button>
                  <button onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
                </div> :
              npcControlRoom.ArmorDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn())}}>Buy Armor</button>
                  <button onClick={() =>{dispatch(DealerSellFn())}}>Sell Armor</button>
                  <button onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
                </div> :
              screenControlRoom.PronteraWeaponArmorDealer ?
                <div>
                  <button onClick={() => {dispatch(GotoPronteraWeaponArmorDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave ToolShop</button>
                </div>
              : null}
          {/* <button onClick={() => {dispatch(GotoPronteraFn()); dispatch(ResetDealerBuySellHealFn());}}>Leave</button> */}
            {/* WEAPONS */}
            {screenControlRoom.WeaponEquipmentChoice ? 
              <div>
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
              <div>
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
              <div>
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

          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;