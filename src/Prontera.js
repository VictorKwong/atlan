import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoPronteraToolDealerFn, GotoPronteraWeaponArmorDealerFn, GotoPronteraHeadGearDealerFn, GotoPronteraCastleFn } from './actions';
// EQUIP ACTION
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn, GotoAltanSkillsFn} from './actions';
import { TalktoKafraEmployeeFn, TalktoFountainFn , TalktoQuestBoardFn, TalktoSoldierGuard1Fn, TalktoSoldierGuard2Fn, TalktoKiwiFn, TalktoLemonFn, TalktoChocolateFn, TalktoIWantToJoinGuildFn, TalktoLemonResponseFn, TalktoLemonCompleteFn ,TalktoKiwiGuildFn, TalktoChocolateGuildFn, TalktoLemonGuildFn, ResetTalktoFn} from './actions';
//Guild
import { UserLearnDoubleAttackFn, UserLearnLifeStealAttackFn, UserLearnReflectAttackFn, WinOldPortraitFn, WinSkelBoneFn } from './actions'
//New Function
import { TalktoHeadGearDealerFn , TalktoToolDealerFn, ResetDealerBuySellHealFn, DealerBuyFn, DealerSellFn } from './actions';
//Npc Function
import { KafraEmployeeHealStateFn, ResetStatsPointFn, ResetSkillPointFn} from'./actions';
//Function
import { AcceptQuestDialogFn, ReturnQuestDialogFn , ReturnSpecialQuestDialogFn , KafraEmployeeHealFn, ResetMyPointsFn, ResetMySkillPointsFn } from './actions'
//Quest Result
import { WinResultFn, UserLevelUpFn } from './actions';
//Win ETC Items
import { WinJellopyFn , WinEmptyBottleFn , RedPotionFn, WinStickyMucusFn } from './actions'
//Music Options
import { gameTitleOptionScreenFn } from './actions'
//Loading Screen
import { NextMapLoadingScreenFn, NextWorldMapLoadingScreenFn } from './actions'
import GameOption from './GameOption'

import WorldMap from './WorldMap'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import AltanSkills from './AltanSkills'
import PronteraToolDealer from './PronteraToolDealer'
import PronteraWeaponArmorDealer from './PronteraWeaponArmorDealer'
import PronteraHeadGearDealer from './PronteraHeadGearDealer'
import PronteraCastle from './PronteraCastle'
import './css/mapProntera.css'
import $ from 'jquery'
import audioThemeOfProntera from './audio/108ThemeOfProntera.mp3'

//NPC
import KafraEmployee from './img/NPC/KafraEmployee.gif'
import QuestBoard from './img/NPC/QuestBoard.gif'
import Fountain from './img/NPC/Fountain.gif'
import PronteraToolDealerImg from './img/NPC/PronteraToolDealer.gif'
import Warp from './img/NPC/Warp.gif'
import PronteraHeadGearDealerImg from './img/NPC/PronteraHeadGearDealer.gif'
import PronteraSoldierImg from './img/NPC/Soldier.gif'
import Kiwi from './img/NPC/Kiwi.gif'
import Lemon from './img/NPC/Lemon.gif'
import Chocolate from './img/NPC/Chocolate.gif'
//SKILLS
import skillBash from './img/Skill/sm_bash.gif'
import skillMammonite from './img/Skill/mc_mammonite.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillKodoku from './img/Skill/pr_kodoku.gif'
import skillHeadCrush from './img/Skill/lk_headcrush.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
import skillBowlingBash from './img/Skill/sm_blowingbash.gif'
import skillVitalStrike from './img/Skill/lk_vitalstrike.gif'
import skillOut from './img/Skill/skill_out.gif'
import skillDown from './img/Skill/skill_down.gif'

import SkelBone from './img/Etc/Skeleton_Skel-Bone8.gif'
import OldPortrait from './img/Etc/BonGun_OldPortrait10.gif'


import LevelUpSoundEffect from './audio/SoundEffect/LevelUpSoundEffect.mp3'
const audioLevelUp = new Audio(LevelUpSoundEffect);

const audioBGM = new Audio(audioThemeOfProntera);

//Chat reading
let listResult = document.getElementsByClassName('storyChat')[0];


function StartMenu(props){
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const baseJobEXPChart = useSelector(state => state.baseJobEXPChart)
    const userAttribute = useSelector(state => state.userAttribute)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const skillCapChart = useSelector(state => state.skillCapChart)
    const miscControlRoom = useSelector(state => state.miscControlRoom)

    const dispatch = useDispatch();

    //QUEST
    const QuestBox = [
      {id: 0, num: "Poring", CompleteNum: 3, acceptName: "Clear Poring", acceptDescription: "Hunt 3 Poring in PoringIsland", finishName: "Clear Poring xD",  finishText: "Received +100Exp +1000z", exp:100, zeny:1000},
      {id: 1, num: "Lunatic", CompleteNum: 3, acceptName: "Clear Lunatic", acceptDescription: "Hunt 3 Lunatic in PoringIsland", finishName: "Clear Lunatic xD", finishText: "Received +200Exp +2000z", exp:200, zeny:2000},
      {id: 2, num: "Rocker", CompleteNum: 3, acceptName: "Clear Rocker", acceptDescription: "Hunt 3 Rocker in PoringIsland", finishName: "Clear Rocter xD", finishText: "Received +400Exp +4000z", exp:400, zeny:4000},
      {id: 3, num: "Ambernite", CompleteNum: 1, acceptName: "Clear Ambernite", acceptDescription: "Hunt 1 Ambernite in PoringIsland", finishName: "Clear Ambernite xD", finishText: "Received +50Exp +300z", exp:50, zeny:300},
      {id: 4, num: "Zombie", CompleteNum: 3, acceptName: "Clear Zombie", acceptDescription: "Hunt 3 Zombie in PayonCave", finishName: "Clear Zombie xD", finishText: "Received +500Exp +5300z", exp:500, zeny:5300}
    ]
    //QUEST
    const QuestItemBox = [
      {id: 1001, num: "Jellopy", CompleteNum: 3, ItemTarget: userGoldItem.Jellopy, ReturnItem: WinJellopyFn , acceptName: "Request Item", acceptDescription: "Need 3 Jellopy", finishName: "Submit 3 Jellopy",  finishText: "Received +150Exp +1500z", exp:150, zeny:1500},
      {id: 1002, num: "Emptybottle", CompleteNum: 5, ItemTarget: userGoldItem.EmptyBottle, ReturnItem: WinEmptyBottleFn , acceptName: "Request Item", acceptDescription: "Need 5 Empty Bottle", finishName: "Submit 5 Empty Bottle",  finishText: "Received +200Exp +200z", exp:200, zeny:200},
      {id: 1003, num: "Stickymucus", CompleteNum: 2, ItemTarget: userGoldItem.StickyMucus, ReturnItem: WinStickyMucusFn , acceptName: "Request Item", acceptDescription: "Need 2 StickyMucus", finishName: "Submit 2 Sticky Mucus",  finishText: "Received +100Exp +300z", exp:100, zeny:300},
      
      {id: 1004, num: "Redpotion", CompleteNum: 5, ItemTarget: userGoldItem.RedPotion, ReturnItem: RedPotionFn , acceptName: "Gather Red Potions", acceptDescription: "Need 5 Red Potions", finishName: "Submit 5 Red Potion",  finishText: "Received +100Exp +50z", exp:50, zeny:100}
    ]

    useEffect(() => {
      audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
      audioLevelUp.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
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
      $('.PronteraMapTitle').fadeIn(600);
      $('.PronteraMapTitle').delay(2400).fadeOut(600);
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
              case((userStats.Level + 1) === skillCapChart.Bash):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Bash <img src=${skillBash} alt="skillBash" /> !</p>`)
              case((userStats.Level + 1) === skillCapChart.Mammonite):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Mammonite<img src=${skillMammonite} alt="skillMammonite" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.Kodoku):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Kodoku<img src=${skillKodoku} alt="Kodoku" />!</p>`) 
              case((userStats.Level + 1) === skillCapChart.MagnumBreak):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Magnum Break<img src=${skillMagnum} alt="skillMagnumBreak" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.HeadCrush):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Magnum Break<img src=${skillHeadCrush} alt="skillMagnumBreak" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.Quicken):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Quicken<img src=${skillQuicken} alt="skillQuicken" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.VitalStrike):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Vital Strike<img src=${skillVitalStrike} alt="skillVitalStrike" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.BowlingBash):
                return $('.questCompleteResult').append(`\n <p>Atlan has Unlock Skill Bowling Bash<img src=${skillBowlingBash} alt="skillBowlingBash" />!</p>`)
              default:
                return 0;
            }
        }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }, [questControlRoom, dispatch, userStats, baseEXPChart, skillCapChart]);

  //NPC Speech
  useEffect(() => {
      switch(true){
        //GEAR LIST
        case(screenControlRoom.AltanEquipment || screenControlRoom.AltanStats || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanSkills):
          $('.storySpeech').html('')
          $('.storyCharacter').html('')
          break;
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
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer === false && npcControlRoom.ArmorDealer === false && npcControlRoom.GarmentDealer === false && npcControlRoom.ShoesDealer === false && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
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
        //GARMENT SHOP
        //Talk message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.GarmentDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
        $('.storySpeech').html(`<p>${npcSpeech['GarmentDealer'][0].text}</p>`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GarmentDealer'][0].name}</p>`)
        break;
      //Buy Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.GarmentDealer && npcControlRoom.DealerBuySuccess):
          $('.storySpeech').html(`<p>${npcSpeech['GarmentDealer'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GarmentDealer'][2].name}</p>`)
          break;
      //Buy Failure message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.GarmentDealer && npcControlRoom.DealerBuyFailure):
          $('.storySpeech').html(`<p>${npcSpeech['GarmentDealer'][3].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GarmentDealer'][3].name}</p>`)
          break;
      //Sell Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.GarmentDealer && npcControlRoom.DealerSellSuccess):
          $('.storySpeech').html(`<p>${npcSpeech['GarmentDealer'][5].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GarmentDealer'][5].name}</p>`)
          break;
      //Buy message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.GarmentDealer && npcControlRoom.DealerBuy):
          $('.storySpeech').html(`<p>${npcSpeech['GarmentDealer'][1].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GarmentDealer'][1].name}</p>`)
          break;
      //Sell message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.GarmentDealer && npcControlRoom.DealerSell):
          $('.storySpeech').html(`<p>${npcSpeech['GarmentDealer'][4].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['GarmentDealer'][4].name}</p>`)
          break;
        //SHOES SHOP
        //Talk message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ShoesDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
        $('.storySpeech').html(`<p>${npcSpeech['ShoesDealer'][0].text}</p>`)
        $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ShoesDealer'][0].name}</p>`)
        break;
      //Buy Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ShoesDealer && npcControlRoom.DealerBuySuccess):
          $('.storySpeech').html(`<p>${npcSpeech['ShoesDealer'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ShoesDealer'][2].name}</p>`)
          break;
      //Buy Failure message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ShoesDealer && npcControlRoom.DealerBuyFailure):
          $('.storySpeech').html(`<p>${npcSpeech['ShoesDealer'][3].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ShoesDealer'][3].name}</p>`)
          break;
      //Sell Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ShoesDealer && npcControlRoom.DealerSellSuccess):
          $('.storySpeech').html(`<p>${npcSpeech['ShoesDealer'][5].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ShoesDealer'][5].name}</p>`)
          break;
      //Buy message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ShoesDealer && npcControlRoom.DealerBuy):
          $('.storySpeech').html(`<p>${npcSpeech['ShoesDealer'][1].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ShoesDealer'][1].name}</p>`)
          break;
      //Sell message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ShoesDealer && npcControlRoom.DealerSell):
          $('.storySpeech').html(`<p>${npcSpeech['ShoesDealer'][4].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['ShoesDealer'][4].name}</p>`)
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
        case(npcControlRoom.Fountain && npcControlRoom.ResetStatsPoint):
          $('.fountainResetConfirm').html(`Reset all attribute point`);
          break;
        case(npcControlRoom.Fountain && npcControlRoom.ResetSkillPoint):
          $('.fountainResetConfirm').html(`Reset all skill point`);
          break;
        case(npcControlRoom.Kiwi && npcControlRoom.IWantToJoinGuild && npcControlRoom.KiwiGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Kiwi'][2].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Kiwi'][2].name}</p>`)
          break;
        case(npcControlRoom.Kiwi && npcControlRoom.KiwiGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Kiwi'][3].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Kiwi'][3].name}</p>`)
          break;
        case(npcControlRoom.Kiwi && npcControlRoom.IWantToJoinGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Kiwi'][1].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Kiwi'][1].name}</p>`)
          break;
        case(npcControlRoom.Kiwi):
            $('.storySpeech').html(`<p>${npcSpeech['Kiwi'][0].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Kiwi'][0].name}</p>`)
          break;
        case(npcControlRoom.Lemon && npcControlRoom.LemonComplete):
          $('.storySpeech').html(`<p>${npcSpeech['Lemon'][5].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Lemon'][5].name}</p>`)
        break;
        case(npcControlRoom.Lemon && npcControlRoom.LemonResponse):
          $('.storySpeech').html(`<p>${npcSpeech['Lemon'][4].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Lemon'][4].name}</p>`)
        break;
        case(npcControlRoom.Lemon && npcControlRoom.IWantToJoinGuild && npcControlRoom.LemonGuild):
          $('.storySpeech').html(`<p>${npcSpeech['Lemon'][2].text}</p>`)
          $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Lemon'][2].name}</p>`)
        break;
        case(npcControlRoom.Lemon && npcControlRoom.LemonGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Lemon'][3].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Lemon'][3].name}</p>`)
          break;
        case(npcControlRoom.Lemon && npcControlRoom.IWantToJoinGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Lemon'][1].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Lemon'][1].name}</p>`)
          break;
        case(npcControlRoom.Lemon):
            $('.storySpeech').html(`<p>${npcSpeech['Lemon'][0].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Lemon'][0].name}</p>`)
          break;
        case(npcControlRoom.Chocolate && npcControlRoom.IWantToJoinGuild && npcControlRoom.ChocolateGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Chocolate'][2].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Chocolate'][2].name}</p>`)
          break;
        case(npcControlRoom.Chocolate && npcControlRoom.ChocolateGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Chocolate'][3].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Chocolate'][3].name}</p>`)
          break;
        case(npcControlRoom.Chocolate && npcControlRoom.IWantToJoinGuild):
            $('.storySpeech').html(`<p>${npcSpeech['Chocolate'][1].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Chocolate'][1].name}</p>`)
          break;
        case(npcControlRoom.Chocolate):
            $('.storySpeech').html(`<p>${npcSpeech['Chocolate'][0].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['Chocolate'][0].name}</p>`)
          break;
        case(npcControlRoom.SoldierGuard1):
            $('.storySpeech').html(`<p>${npcSpeech['SoldierGuard1'][0].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['SoldierGuard1'][0].name}</p>`)
          break;
        case(npcControlRoom.SoldierGuard2):
            $('.storySpeech').html(`<p>${npcSpeech['SoldierGuard2'][0].text}</p>`)
            $('.storyCharacter').html(`<p class="storyCharacterBox">${npcSpeech['SoldierGuard2'][0].name}</p>`)
          break;
        // reset
          default:
            $('.storySpeech').html('')  
            $('.storyCharacter').html('')
            $('.fountainResetConfirm').html('');
            $('.questCompleteResult').html('');
            
            break;
      }
  //userState,screenControRoom not included
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [npcControlRoom, npcSpeech, screenControlRoom])

  const NextMapProteraFn = (num) => {
    //1.WorldMap
    //2.PronteraCastle
    //3.PronteraWeaponArmorDealer
    switch(true){
      case (num === 1):
        dispatch(NextWorldMapLoadingScreenFn());
        setTimeout(() => dispatch(NextWorldMapLoadingScreenFn()), miscControlRoom.WorldMap);
        return setTimeout(() => dispatch(GotoWorldMapFn()), miscControlRoom.WorldChangeMap);
      case (num === 2):
        dispatch(NextMapLoadingScreenFn());
        setTimeout(() => dispatch(NextMapLoadingScreenFn()), miscControlRoom.MiniMap);
        return setTimeout(() => dispatch(GotoPronteraCastleFn()), miscControlRoom.MiniChangeMap);
      case (num === 3):
        dispatch(NextMapLoadingScreenFn());
        setTimeout(() => dispatch(NextMapLoadingScreenFn()), miscControlRoom.MiniMap);
        return setTimeout(() => dispatch(GotoPronteraWeaponArmorDealerFn()), miscControlRoom.MiniChangeMap);
      default:
        break;
    }
  }

    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        screenControlRoom.PronteraCastle ? <PronteraCastle /> :
        screenControlRoom.gameTitleOptionScreen ? <GameOption audioBGM={audioBGM}/> :
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
            screenControlRoom.AltanSkills ?
              <div className="ReturnParent">
                <AltanSkills SkillsLevelingBox={props.SkillsLevelingBox}/> 
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanSkillsFn());}}>x</button>
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
              <button className="ReturnHUD" onClick={() =>{NextMapProteraFn(3); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>x</button>
            </div>:
            <div className="PronteraMap">
              <h3 className="PronteraMapTitle">Prontera</h3>
              <button className="ReturnHUDBugFix"></button>
              <button className="soldier1" onClick={() => {dispatch(TalktoSoldierGuard1Fn());}}><img src={PronteraSoldierImg} alt="Prontera soldier1" /></button>
              <button className="castleEnterence" onClick={() => {NextMapProteraFn(2); dispatch(ResetTalktoFn()); changeMapFadeAudio();}}><img src={Warp} alt="Warp Portal" /></button>
              <button className="soldier2" onClick={() => {dispatch(TalktoSoldierGuard2Fn());}}><img src={PronteraSoldierImg} alt="Prontera soldier2" /></button>
              <button className="kiwiGuild" onClick={() => dispatch(TalktoKiwiFn())}><img src={Kiwi} alt="NPC Kiwi" /></button>
              <button className="toolDealerNPC" onClick={() =>{dispatch(GotoPronteraToolDealerFn()); dispatch(TalktoToolDealerFn()); changePlaceFadeAudio();}}><img src={PronteraToolDealerImg} alt="Prontera Tool Dealer" /></button>
              <button className="weaponArmorDealerNPC" onClick={() =>{NextMapProteraFn(3); dispatch(ResetTalktoFn()); changePlaceFadeAudio();}}><img src={Warp} alt="Warp Portal" /></button>
              <button className="chocolateGuild" onClick={() => dispatch(TalktoChocolateFn())}><img src={Chocolate} alt="NPC Chocolate" /></button>
              <button className="kafraEmployee" onClick={() => dispatch(TalktoKafraEmployeeFn())}><img src={KafraEmployee} alt="Kafra Employee" /></button>
              <button className="pronteraFountain" onClick={() => {dispatch(TalktoFountainFn());}}><img className="pronteraFountainImg" src={Fountain} alt="Fountain" /></button>
              <button className="questBoard" onClick={() => {dispatch(TalktoQuestBoardFn());}}><img src={QuestBoard} alt="Quest Board" /></button>
              <button className="lemonGuild" onClick={() => dispatch(TalktoLemonFn())}><img src={Lemon} alt="NPC Lemon" /></button>
              <button className="headGearDealerNPC" onClick={() => {dispatch(GotoPronteraHeadGearDealerFn()); dispatch(TalktoHeadGearDealerFn()); changePlaceFadeAudio();}}><img src={PronteraHeadGearDealerImg} alt="Prontera Head Gear Dealer" /></button>
              <button className="PronteraWorldMap" onClick={() => {NextMapProteraFn(1); changeMapFadeAudio(); dispatch(ResetTalktoFn());}}>PronteraSouthGate</button>
            </div>}
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
              </div> :
            // {/* ARMOR */}
            screenControlRoom.ArmorEquipmentChoice ?
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
              </div> :
            // {/* HEADGEAR */}
            screenControlRoom.HeadGearEquipmentChoice ?
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
              </div> : 
            // {/* FOOTGEAR */}
            screenControlRoom.FootGearEquipmentChoice ?
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
              </div> :
            // {/* GARMENT */}
            screenControlRoom.GarmentEquipmentChoice ?
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
              </div> : 
            //{/* ACCESSORY ONE */}
            screenControlRoom.AccessoryOneEquipmentChoice ?
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
              </div> : 
            //{/* ACCESSORY TWO */}
            screenControlRoom.AccessoryTwoEquipmentChoice ?
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
              </div> :
            // {/* Skills Room */}
            (screenControlRoom.FirstAidTraining || screenControlRoom.BashTraining || screenControlRoom.MammoniteTraining || screenControlRoom.KodokuTraining || screenControlRoom.MagnumBreakTraining || screenControlRoom.HeadCrushTraining || screenControlRoom.QuickenTraining || screenControlRoom.VitalStrikeTraining || screenControlRoom.BowlingBashTraining) && 
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
                </div> :
              npcControlRoom.Fountain && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ? 
              <div className="textCenter">
                <p className="chatDescriptTitle">Fountain</p>
                <button className="fountainResetPoint" onClick={() =>{dispatch(ResetMyPointsFn(userAttribute.BonusVit,userAttribute.BonusInt)); dispatch(ResetStatsPointFn());}}>Reset Status Point</button>
                <button className="fountainResetPoint" onClick={() =>{dispatch(ResetMySkillPointsFn(userAttribute.BonusVit,userAttribute.BonusInt)); dispatch(ResetSkillPointFn());}}>Reset Skill Point</button>
                <p className="fountainResetConfirm"></p>
              </div>: 
              npcControlRoom.KafraEmployee && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ? 
              <div className="textCenter">
                <button className="kafraEmployeeHeal" onClick={() => dispatch(KafraEmployeeHealStateFn())}>Heal</button> 
              </div> : 
              (npcControlRoom.Kiwi || npcControlRoom.Lemon || npcControlRoom.Chocolate) && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
              <div className="textCenter">
                
                {!npcControlRoom.LemonResponse && 
                ((npcControlRoom.Kiwi && !npcControlRoom.KiwiGuild) || (npcControlRoom.Lemon && !npcControlRoom.LemonGuild && !npcControlRoom.LemonComplete) || (npcControlRoom.Chocolate && !npcControlRoom.ChocolateGuild)) && !npcControlRoom.IWantToJoinGuild ?
                <button className="guildInterest" onClick={() => dispatch(TalktoIWantToJoinGuildFn())}>Join Guild</button> : null}
                {/* KiwiGuild */}
                {npcControlRoom.Kiwi && npcControlRoom.IWantToJoinGuild && npcControlRoom.BossEclipseDefeat && !npcControlRoom.KiwiGuild?
                <button className="guildInterest" onClick={() => {dispatch(TalktoKiwiGuildFn()); dispatch(UserLearnDoubleAttackFn(true));}}>Hang over the evidence</button> : null}
                {/* ChocolateGuild */}
                {npcControlRoom.Chocolate && npcControlRoom.IWantToJoinGuild && (userGoldItem.SkelBone >= 7 && userGoldItem.OldPortrait >= 1) && !npcControlRoom.ChocolateGuild?
                <button className="guildInterest" onClick={() => {dispatch(UserLearnLifeStealAttackFn(true)); dispatch(WinOldPortraitFn(0,-1)); dispatch(WinSkelBoneFn(0,-7)); dispatch(TalktoChocolateGuildFn());}}>Hang over the Item - x7<img src={SkelBone} alt="Skeletion Bone"/> x1<img src={OldPortrait} alt="Old Portrait"/></button> : null}
                {/* LemonGuild */}
                {npcControlRoom.Lemon && npcControlRoom.IWantToJoinGuild && npcControlRoom.BossWolyafaDefeat && !npcControlRoom.LemonGuild?
                <button className="guildInterest" onClick={() => {dispatch(TalktoLemonGuildFn()); dispatch(UserLearnReflectAttackFn(true));}}>Hang over the evidence</button> : null}
                {
                ((questControlRoom.QuestDialog).indexOf("Lemonstory") > -1 && (questControlRoom.CompleteQuestDialog).indexOf("Lemonstory") === -1) && 
                ((questControlRoom.ProgressQuestDialog).indexOf("Lemonstorythree") > -1 &&
                  (questControlRoom.ProgressQuestDialog).indexOf("Lemonstorytwo") > -1 && 
                  (questControlRoom.ProgressQuestDialog).indexOf("Lemonstoryone") > -1) && 
                  npcControlRoom.Lemon && npcControlRoom.LemonResponse && !npcControlRoom.IWantToJoinGuild ? 
                <button className="guildInterest" onClick={() => {dispatch(TalktoLemonCompleteFn()); dispatch(ReturnSpecialQuestDialogFn("Lemonstory","Lemonstoryone","Lemonstorytwo","Lemonstorythree"));}}>(Hand over the evidence - Complete Story)</button> : 
                ((questControlRoom.QuestDialog).indexOf("Lemonstory") > -1 && (questControlRoom.CompleteQuestDialog).indexOf("Lemonstory") === -1) && 
                ((questControlRoom.ProgressQuestDialog).indexOf("Lemonstorythree") > -1 && 
                (questControlRoom.ProgressQuestDialog).indexOf("Lemonstorytwo") > -1 && 
                (questControlRoom.ProgressQuestDialog).indexOf("Lemonstoryone") > -1) && 
                npcControlRoom.Lemon && !npcControlRoom.IWantToJoinGuild ? 
                <button className="guildInterest" onClick={() => dispatch(TalktoLemonResponseFn())}>Hidden Story...</button> : null }
              </div> : 
              // {/* QUEST */}
              npcControlRoom.QuestBoard && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ? 
              <div className="textCenter">
                  <p className="chatDescriptTitle">Quest Board</p>
                <ul>
                  {QuestBox.map(Quest => {
                    return (
                      <li key={Quest.id} className="questList">
                        {/* index -1 means not found, > -1 means found */}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) === -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? <button className="questBoardItems" onClick={() => {dispatch(AcceptQuestDialogFn(Quest.num));}}>{Quest.acceptName} + {Quest.acceptDescription}</button> : 
                        // Quest Accept && Kill more than 3 monster - Poring Santaporing
                        (questControlRoom.QuestDialog).indexOf(Quest.num) > -1  && ((questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll(Quest.num,"").length) >= ((Quest.num).length*Quest.CompleteNum) ? <button className="questBoardItems" onClick={() => {dispatch(ReturnQuestDialogFn(Quest.num)); dispatch(WinResultFn(Quest.exp,Quest.zeny));}}>{Quest.finishName} + {Quest.finishText} </button> : null }
                      </li>
                    )
                  })}
                  {QuestItemBox.map(Quest => {
                    return (
                      <li key={Quest.id} className="questList">
                        {/* index -1 means not found, > -1 means found */}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) === -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? <button className="questBoardItems" onClick={() => {dispatch(AcceptQuestDialogFn(Quest.num));}}>{Quest.acceptName} + {Quest.acceptDescription}</button> : 
                        // Quest Accept && Item Bag is >= Complete number
                        (questControlRoom.QuestDialog).indexOf(Quest.num) > -1  && Quest.ItemTarget >= Quest.CompleteNum ? <button className="questBoardItems" onClick={() => {dispatch(ReturnQuestDialogFn(Quest.num)); dispatch(WinResultFn(Quest.exp,Quest.zeny)); dispatch((Quest.ReturnItem)(0,-(Quest.CompleteNum)))}}>{Quest.finishName} + {Quest.finishText} </button> : null }
                      </li>
                    )
                  })}
                </ul>
                <p className="questCompleteResult"></p>
              </div> : 
              // {/* BUY SELL FN */}
              screenControlRoom.PronteraHeadGearDealer && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
                <div className="textCenter">
                  <button className="buyHeadGearDealerButton" onClick={() =>{dispatch(DealerBuyFn());}}>Buy</button>
                  <button className="sellHeadGearDealerButton" onClick={() =>{dispatch(DealerSellFn());}}>Sell</button>
                  <button className="returnHeadGearDealerButton" onClick={() => {dispatch(GotoPronteraHeadGearDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave HeadGearShop</button>
                </div> :
              screenControlRoom.PronteraToolDealer && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
                <div className="textCenter">
                  <button className="buyToolDealerButton" onClick={() =>{dispatch(DealerBuyFn())}}>Buy</button>
                  <button className="sellToolDealerButton" onClick={() =>{dispatch(DealerSellFn())}}>Sell</button>
                  <button className="returnToolDealerButton" onClick={() => {dispatch(GotoPronteraToolDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave ToolShop</button>
                </div> :
              npcControlRoom.WeaponDealer && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
                <div className="textCenter">
                  <button className="buyWeaponDealerButton" onClick={() =>{dispatch(DealerBuyFn())}}>Buy Weapon</button>
                  <button className="sellWeaponDealerButton" onClick={() =>{dispatch(DealerSellFn())}}>Sell Weapon</button>
                  <button className="returnWeaponDealerButton" onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
                </div> :
              npcControlRoom.ArmorDealer && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
                <div className="textCenter">
                  <button className="buyArmorDealerButton" onClick={() =>{dispatch(DealerBuyFn())}}>Buy Armor</button>
                  <button className="sellArmorDealerButton" onClick={() =>{dispatch(DealerSellFn())}}>Sell Armor</button>
                  <button className="returnArmorDealerButton" onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
                </div> :
              npcControlRoom.GarmentDealer && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
              <div className="textCenter">
                <button className="buyArmorDealerButton" onClick={() =>{dispatch(DealerBuyFn())}}>Buy Garment</button>
                <button className="sellArmorDealerButton" onClick={() =>{dispatch(DealerSellFn())}}>Sell Garment</button>
                <button className="returnArmorDealerButton" onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
              </div> :
              npcControlRoom.ShoesDealer && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
              <div className="textCenter">
                <button className="buyArmorDealerButton" onClick={() =>{dispatch(DealerBuyFn())}}>Buy Shoes</button>
                <button className="sellArmorDealerButton" onClick={() =>{dispatch(DealerSellFn())}}>Sell Shoes</button>
                <button className="returnArmorDealerButton" onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
              </div> :
              screenControlRoom.PronteraWeaponArmorDealer && !(screenControlRoom.AltanEquipment || screenControlRoom.AltanItem || screenControlRoom.AltanQuest || screenControlRoom.AltanStats || screenControlRoom.AltanSkills) ?
                <div className="textCenter">
                  <button className="returnWeaponArmorDealerButton" onClick={() => {NextMapProteraFn(3); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave House</button>
                </div>
              : null}
              
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;