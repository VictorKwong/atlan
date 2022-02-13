import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery'
import { GotoPoringIslandFn, EnemyAttackUserFn, UserAttackEnemyFn, EnemyOnHitAnimationFn, ResetEnemyOnHitAnimationFn, UserAttackAnimationFn, ResetUserAttackAnimationFn, UserOnHitAnimationFn, ResetUserOnHitAnimationFn, UserIsDeadAnimationFn , ResetUserIsDeadAnimationFn, UserIsDyingAnimationFn, ResetUserIsDyingAnimationFn , UserIsBlockAnimationFn , ResetUserIsBlockAnimationFn, UserChannelAnimationFn, ResetUserChannelAnimationFn, UserWeaponImgFn } from './actions';
//Battle UI
import { ReturnUserInSelectSkillFn, UserInSelectSkillFn , UserInSelectItemFn , ReturnUserInSelectItemFn } from './actions';
//Clock
import { UserTurnFn , ResetUserTurnFn, EnemyTurnFn, ResetEnemyTurnFn, userClockDefendFn, enemyClockDefendFn, TickingClockFn } from './actions';
//Game Result (Victory/Defeat)
import { WinResultFn, ResetEnemyCurrentHealthFn, UserLevelUpFn } from './actions';
import { ReturnCheckPointFn } from './actions'
//Skills T/F
import { UserTurnBlockFn, ResetUserTurnBlockFn , EnemyTurnBlockFn, ResetEnemyTurnBlockFn} from './actions'
//Battle Calculation
import { EnemyAttackBlockUserFn , UserAttackBlockEnemyFn , UserSkillBashEnemyFn , UserSkillBashBlockEnemyFn, UserSkillMagnumBreakEnemyFn, UserSkillMagnumBreakBlockEnemyFn, UserSkillBashMissedFn, UserSkillMagnumBreakMissedFn} from './actions'
//ITEMS
import { UseYellowPotionFn, UseRedPotionFn } from './actions'
//QUEST
import { ProgressQuestDialogFn } from './actions'


import './css/mapBattle.css'
import './index.css'
import PoringIsland from './PoringIsland'
import Poring from './img/Monster/Poring.gif'
import Lunatic from './img/Monster/Lunatic.gif'
import Rocker from './img/Monster/Rocker.gif'
import UserOnHitPost from './img/Character/UserOnHitPost1.gif'
import UserIsDyingPost from './img/Character/UserDyingPost1.png'
import UserIsDeadPost from './img/Character/UserDeadPost1.png'
import UserChannelPost from './img/Character/UserChannel1.png'
import skillBash from './img/Skill/sm_bash.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import RedPotion from './img/Item/RedPotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'

// KATANA
import UserBattlePostKatana1 from './img/Character/UserBattlePostKatana1.gif'
import UserAttackPostKatana1 from './img/Character/UserAttackPostKatana1.gif'
import UserDefendPostKatana1 from './img/Character/UserDefendPostKatana1.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1 from './img/Character/UserBattlePostBastardSword1.gif'
import UserAttackPostBastardSword1 from './img/Character/UserAttackPostBastardSword1.gif'
import UserDefendPostBastardSword1 from './img/Character/UserDefendPostBastardSword1.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1 from './img/Character/UserBattlePostGaiaSword1.gif'
import UserAttackPostGaiaSword1 from './img/Character/UserAttackPostGaiaSword1.gif'
import UserDefendPostGaiaSword1 from './img/Character/UserDefendPostGaiaSword1.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1 from './img/Character/UserBattlePostTwinEdgeofNaghtSieger1.gif'
import UserAttackPostTwinEdgeofNaghtSieger1 from './img/Character/UserAttackPostTwinEdgeofNaghtSieger1.gif'
import UserDefendPostTwinEdgeofNaghtSieger1 from './img/Character/UserDefendPostTwinEdgeofNaghtSieger1.gif'
//Violet Fear
import UserBattlePostVioletFear1 from './img/Character/UserBattlePostVioletFear1.gif'
import UserAttackPostVioletFear1 from './img/Character/UserAttackPostVioletFear1.gif'
import UserDefendPostVioletFear1 from './img/Character/UserDefendPostVioletFear1.gif'

import audioStrugardenNEOBattle1 from './audio/StrugardenNEOBattle1.mp3'
const audioBGM = new Audio(audioStrugardenNEOBattle1);

let clockBarObject = {
  userClockBar: 0,
  enemyClockBar: 0,
}
let Damage = 0;
//Monster Random Number 0 1 
let i = Math.floor((Math.random() * 3));
let Uclock = 0;
let clockCheck = 0;

function Main(){
  
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const ImageControlRoom = useSelector(state => state.ImageControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const enemyStats = useSelector(state => state.enemyStats)
    console.log('you are rerender')
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    useEffect(() => {
      
      audioBGM.volume = 0.15;
      let playPromise = audioBGM.play(); 
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          audioBGM.loop = true;
          audioBGM.play()
        }).catch(error => {
          // Auto-play was prevented
        });
      }
      //ANIMATION PART
      switch(true){
        case (userStats.userWeapon === "Katana"):
          return dispatch(UserWeaponImgFn(UserBattlePostKatana1,UserAttackPostKatana1,UserDefendPostKatana1))
        case (userStats.userWeapon === "Bastard Sword"):
          return dispatch(UserWeaponImgFn(UserBattlePostBastardSword1,UserAttackPostBastardSword1,UserDefendPostBastardSword1))
        case (userStats.userWeapon === "Gaia Sword"):
          return dispatch(UserWeaponImgFn(UserBattlePostGaiaSword1,UserAttackPostGaiaSword1,UserDefendPostGaiaSword1))
        case (userStats.userWeapon === "Twin Edge of Naght Sieger"):
          return dispatch(UserWeaponImgFn(UserBattlePostTwinEdgeofNaghtSieger1,UserAttackPostTwinEdgeofNaghtSieger1,UserDefendPostTwinEdgeofNaghtSieger1))
        case (userStats.userWeapon === "Violet Fear"):
          return dispatch(UserWeaponImgFn(UserBattlePostVioletFear1,UserAttackPostVioletFear1,UserDefendPostVioletFear1))
        default:
          return dispatch(UserWeaponImgFn(UserBattlePostKatana1,UserAttackPostKatana1,UserDefendPostKatana1))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // VICTORY FUCNTION
    // EXP FUNCTION + QUEST FUNCTION
    useEffect(() => {
      if (enemyStats[i].currentHealth <= 0){
        setTimeout(() => (clockCheck = 1), 300);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        dispatch(WinResultFn(enemyStats[i].Experience,enemyStats[i].Zeny));
        $('.storySpeech').html(`<p>Victory! Received +${enemyStats[i].Experience} EXP, +${enemyStats[i].Zeny} Zeny.</p>`)
        //QUEST
          switch (true) {
            //accept QUEST & Correct Event monster
            case ((questControlRoom.QuestDialog).indexOf("0") > -1 && i === 0):
              return dispatch(ProgressQuestDialogFn(0));
            case ((questControlRoom.QuestDialog).indexOf("1") > -1 && i === 1):
              return dispatch(ProgressQuestDialogFn(1));
            default:
              return null;
          }
      }
    }, [enemyStats,questControlRoom, dispatch]);
    // DEFEAT FUNCTION
      useEffect(() => {
        if (userStats.currentHealth <= 0){
          setTimeout(() => (clockCheck = 1), 300);
          $('.storySpeech').html(`Defeat... Altan Fainted......`)
          // $('.goGoAttack').prop("disabled", true);
        }
      }, [userStats.currentHealth , dispatch]);
    // RESET CLOCK
    const resetClockButton = () => {
                //Reset Clock;
                $('.storySpeech').html();
                clockBarObject.userClockBar = 0;
                clockBarObject.enemyClockBar = 0;
                i = Math.floor((Math.random() * 3));
                Uclock = 0;
                clockCheck = 0;
                dispatch(ResetEnemyTurnFn());
                dispatch(ResetUserTurnFn());
                dispatch(ResetEnemyTurnBlockFn());
                dispatch(ResetUserTurnBlockFn());
                dispatch(ReturnUserInSelectSkillFn());
                dispatch(ReturnUserInSelectItemFn());
    }
    // LEVEL FUNCTION
    useEffect(() => {
      if (enemyStats[i].currentHealth <= 0){
        //MAX Lv10
        if((userStats.Level < 10) && (userStats.Experience >= baseEXPChart[userStats.Level])){
          (() => {
            switch (true) {
              case((userStats.Level + 1) <= 11):
                return dispatch(UserLevelUpFn(2));
              case((userStats.Level + 1) <= 21):
                return dispatch(UserLevelUpFn(3));
              case((userStats.Level + 1) <= 31):
                return dispatch(UserLevelUpFn(4));           
              case((userStats.Level + 1) <= 41):
                return dispatch(UserLevelUpFn(5));
              case((userStats.Level + 1) <= 51):
                return dispatch(UserLevelUpFn(6));
              case((userStats.Level + 1) <= 61):
                return dispatch(UserLevelUpFn(7));
              case((userStats.Level + 1) <= 71):
                return dispatch(UserLevelUpFn(8));
              case((userStats.Level + 1) <= 81):
                return dispatch(UserLevelUpFn(9));     
              case((userStats.Level + 1) <= 91):
                return dispatch(UserLevelUpFn(10));
              default:
                return dispatch(UserLevelUpFn(11));
            }
            })()
          $('.storySpeech').append(`\n <p>Altan has Level Up to Lv${userStats.Level + 1}</p>`)
            switch (true) {
              case((userStats.Level + 1) === 3):
                return $('.storySpeech').append(`\n <p>Altan has Unlock Skill Bash <img src=${skillBash} alt="skillBash" /> !</p>`)
              case((userStats.Level + 1) === 5):
                return $('.storySpeech').append(`\n <p>Altan has Unlock Skill Magnum Break<img src=${skillMagnum} alt="skillMagnumBreak" />!</p>`)
              default:
                return 0;
            }
        }
      }
    }, [enemyStats, dispatch, userStats, baseEXPChart]);



    // USER DEAD ANIMATION
      useEffect(() => {
        if (userStats.currentHealth <= 0){
          setTimeout(() => dispatch(UserIsDyingAnimationFn()), 250);
          setTimeout(() => dispatch(ResetUserIsDyingAnimationFn()), 400);
          dispatch(UserIsDeadAnimationFn());
          // $('.goGoAttack').prop("disabled", true);
        }
    }, [userStats, dispatch]);

    

    // COMBAT FUNCTION
    const userAttackEnemyButton = () => {
      Damage = Math.floor(userStats.attack +  userStats.Level + userAttribute.str*3 + userAttribute.dex/2 + userAttribute.luk + userStats.BaseWeaponDamage + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      setTimeout(() => (Uclock = 0), 300);
      dispatch(UserAttackAnimationFn());
       
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1050);
      //Rerender, Block or not block
      
      (() => {
        switch (true) {
          // ENEMY BLOCK
          // CRIT RATE
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()) && (userStats.critRate >= Math.random())):
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              Math.sign((Damage - enemyStats[i].defencebuffer)*1.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*1.5) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Critial Hit!</p>\n<p>${enemyStats[i].name} Received ${Damage} damage</p>`)
              //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackBlockEnemyFn(Damage), 300));
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              Math.sign((Damage - enemyStats[i].defencebuffer)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} Received ${Damage} damage</p>`)
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackBlockEnemyFn(Damage)), 300)
          // ENEMY HIT
          // CRIT RATE
          case(((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()) && (userStats.critRate >= Math.random())):
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              Math.sign((Damage - enemyStats[i].defence)*1.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*1.5) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Critial Hit!</p>\n<p>${enemyStats[i].name} Received ${Damage} damage</p>`)
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackEnemyFn(Damage)), 300);
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              Math.sign((Damage - enemyStats[i].defence)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} Received ${Damage} damage</p>`)
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackEnemyFn(Damage)), 300);
          // ENEMY DODGE
          default:
            $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} dodge the attack.</p>`)
            //Rerender
            return setTimeout(() => dispatch(userClockDefendFn()), 300);
        }
        })()
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());

    }
    const userDefendButton = () => {
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(userClockDefendFn()), 300);
      dispatch(UserIsBlockAnimationFn());
      dispatch(UserTurnBlockFn());
      // Text display
      $('.storySpeech').append('<p>Altan Defend himself!</p>')
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 70;
      dispatch(ResetUserTurnFn());
    }

    

    //COMBAT SKILLS
    const userSkillBashButton = () => {
      if (userStats.currentSP >= 15){
      Damage = Math.floor(userStats.attack + userStats.Level + userAttribute.str*3 + userAttribute.dex/2 + userAttribute.luk + userStats.BaseWeaponDamage + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1050);
      setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch (true) {
              case(userStats.critRate >= Math.random()):
                Math.sign((Damage - enemyStats[i].defencebuffer)*1.5*2.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*1.5*2.5) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Bash!!</p>\n<p>${enemyStats[i].name} Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBashBlockEnemyFn(Damage)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defencebuffer)*2.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*2.5) : Damage = 1;
                Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*2.5)
                // Text display
                $('.storySpeech').append(`<p>Altan use Bash!</p>\n<p>${enemyStats[i].name} Received ${Damage} damage</p>`)
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk     
                return setTimeout(() => dispatch(UserSkillBashBlockEnemyFn(Damage)), 300);
              }
          // ENEMY HIT
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch (true) {
              case (userStats.critRate >= Math.random()):
                Math.sign((Damage - enemyStats[i].defence)*1.5*2.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*1.5*2.5) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Bash!!</p>\n<p>${enemyStats[i].name} Received ${userStats.attack} damage</p>`)
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defence)*2.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*2.5) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Bash!</p>\n<p>${enemyStats[i].name} Received ${userStats.attack} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage)), 300);
              }
          // ENEMY DODGE
          default:
            $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} dodge the attack.</p>`)
            // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
            return setTimeout(() => dispatch(UserSkillBashMissedFn()), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').html(`<p>Not enough SP.</p>`)
      }
    }
    const userSkillMagnumBreakButton = () => {
      if (userStats.currentSP >= 35){
      Damage = Math.floor(userStats.attack + userStats.Level + userAttribute.str*3 + userAttribute.dex/2 + userAttribute.luk + userStats.BaseWeaponDamage + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1050);
      setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch(true){
              case(userStats.critRate >= Math.random()):
                Math.sign((Damage - enemyStats[i].defencebuffer)*1.5*3.5 + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*1.5*3.5 + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Magnum Break!!</p>\n<p>Enemy Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillMagnumBreakBlockEnemyFn(Damage)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defencebuffer)*3.5 + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*3.5 + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Magnum Break!</p>\n<p>Enemy Received ${Damage} damage</p>`)
                // Rerender
                return setTimeout(() => dispatch(UserSkillMagnumBreakBlockEnemyFn(Damage)), 300);
            }
          // ENEMY HIT
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch(true){
              case(userStats.critRate >= Math.random()):
                Math.sign((Damage - enemyStats[i].defence)*1.5*3.5 + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*1.5*3.5 + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Magnum Break!!</p>\n<p>Enemy Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(Damage)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defence)*3.5 + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*3.5 + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Magnum Break!!</p>\n<p>Enemy Received ${Damage} damage</p>`)
                // Rerender
                return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(Damage)), 300);
              }
          // ENEMY DODGE 
          default:
              $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} dodge the attack.</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakMissedFn()), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').html(`<p>Not enough SP.</p>`)
      }
    }
    //ITEMS
    const userItemRedPotionButton = () => {
        dispatch(UserChannelAnimationFn());
        setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
        //Rerender
        setTimeout(() => (Uclock = 0), 300);
        setTimeout(() => dispatch(UseRedPotionFn()), 300);
        // Text display
        $('.storySpeech').append('<p>Altan Heal himself! Recover 50 hp </p>')
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
    }
    const userItemYellowPotionButton = () => {
        dispatch(UserChannelAnimationFn());
        setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
        //Rerender
        setTimeout(() => (Uclock = 0), 300);
        setTimeout(() => dispatch(UseYellowPotionFn()), 300);
        // Text display
        $('.storySpeech').append('<p>Altan Heal himself! Recover 150 hp </p>')
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
    }
    // Enemy AI
    const enemyDecisionQFn = () => {
      setTimeout(() => (Uclock = 0), 300);
      Damage = Math.floor(((enemyStats[i].attack * (userStats.BaseArmorDef + 2000) / ((userStats.BaseArmorDef * 10) + 2000)) - (userAttribute.vit*2 + userAttribute.agi/2 + userStats.Level) * (Math.random() * 0.5) - 0.25));
      (() => {
          switch (true) {
          //EnemyAttack & Hit
            case(Math.random() <= 0.8):
              //Rerender, Block or not block
              (() => {
              switch (true) {
                // USER BLOCK
                case (SkillControlRoom['User'].UserBlock && ((enemyStats[i].hitRate - userStats.dodgeRate).toFixed(3) >= Math.random())):
                  dispatch(UserOnHitAnimationFn());
                  setTimeout(() => dispatch(ResetUserOnHitAnimationFn()), 300);
                  //CRIT RATE
                  switch (true) {
                    case(enemyStats[i].critRate >= Math.random()):
                      Math.sign((Damage * 1.5) - userStats.defencebuffer) > 0 ? Damage = Math.floor((Damage * 1.5) - userStats.defencebuffer) : Damage = 1;
                      // Text display
                      $('.storySpeech').append(`<p>${enemyStats[i].name} Critical Hit Attack!!</p>\n <p>Altan Received ${Damage} damage</p>`)
                      //Rerender
                      return dispatch(EnemyAttackBlockUserFn(Damage));
                    default:
                      Math.sign(Damage - userStats.defencebuffer) > 0 ? Damage = Damage - userStats.defencebuffer : Damage = 1;
                      // Text display
                      $('.storySpeech').append(`<p>${enemyStats[i].name} Attack!</p>\n <p>Altan Received ${Damage} damage</p>`)
                      //Rerender
                      return dispatch(EnemyAttackBlockUserFn(Damage));
                  }
                // USER HIT
                case ((enemyStats[i].hitRate - userStats.dodgeRate).toFixed(3) >= Math.random()):
                  dispatch(UserOnHitAnimationFn());
                  setTimeout(() => dispatch(ResetUserOnHitAnimationFn()), 300);
                  //CRIT RATE
                  switch (true) {
                  case(enemyStats[i].critRate >= Math.random()):
                    Math.sign((Damage * 1.5) - userStats.defence) > 0 ? Damage = Math.floor((Damage * 1.5) - userStats.defence) : Damage = 1;
                    // Text display
                    $('.storySpeech').append(`<p>${enemyStats[i].name} Critical Hit Attack!!</p>\n <p>Altan Received ${Damage} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(Damage));
                  default:
                    Math.sign(Damage - userStats.defence) > 0 ? Damage = Damage - userStats.defence : Damage = 1;
                    // Text display
                    $('.storySpeech').append(`<p>${enemyStats[i].name} Attack!</p>\n <p>Altan Received ${Damage} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(Damage));                     
                  }
                // USER DODGE
                default:
                  $('.storySpeech').append(`<p>${enemyStats[i].name} Attack!</p>\n <p>Altan dodge the attack!</p>`)
                  //Rerender
                  return setTimeout(() => dispatch(enemyClockDefendFn()), 300);
              }
              })()
            break;
            //Enemy Defend itself
            case(true):
              dispatch(EnemyTurnBlockFn());
              // Text display
              $('.storySpeech').append(`<p>${enemyStats[i].name} Defend itself...</p>`)
              //Rerender
              return setTimeout(() => dispatch(enemyClockDefendFn()), 300);
            default:
              clockCheck = 0;
              clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
              return dispatch(ResetEnemyTurnFn());
            }
      })()
      // End turn
      clockCheck = 0;
      clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
      dispatch(ResetEnemyTurnFn());
    }


  const clockBaseQtn = () => {
    if (enemyStats[i].currentHealth > 0 && userStats.currentHealth > 0 && Uclock === 0){
      const ClockTurn = setInterval(() => {
        // *study
        (() => {
          switch (true) {
            case ((clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (userStats.speed >= enemyStats[i].speed)) || (clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar < 100)):
              //Reset All Block
              dispatch(ResetUserIsBlockAnimationFn());
              dispatch(ResetUserTurnBlockFn());
              dispatch(ReturnUserInSelectSkillFn());
              dispatch(ReturnUserInSelectItemFn());
              clockCheck = 1;
              dispatch(UserTurnFn());
              $('.storySpeech').html('<p>--------- Altan Turn ---------</p>')
              console.log('UserTurn is good')
              return clearInterval(ClockTurn);
            case ((clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (userStats.speed < enemyStats[i].speed)) || (clockBarObject.userClockBar < 100 && clockBarObject.enemyClockBar >= 100)):
              dispatch(ResetEnemyTurnBlockFn());
              clockCheck = 1;
              dispatch(EnemyTurnFn());
              $('.storySpeech').append(`<p>--------- ${enemyStats[i].name} Turn ---------</p>\n`)
              enemyDecisionQFn();
              console.log('EnemyTurn is good')
              return clearInterval(ClockTurn);
            default:
              // console.log(`userClock: ${clockBarObject.userClockBar}`)
              // console.log(`enemyClock: ${clockBarObject.enemyClockBar}`)
              Uclock = 1
              return clockBarObject = {
                userClockBar: clockBarObject.userClockBar + userStats.speed,
                enemyClockBar: clockBarObject.enemyClockBar + enemyStats[i].speed,
              }
          }
        })()
        console.log('ticking')
        }, 100);
    }
  }

    // Longest Animation 1.1 = 0.3 onhit + 0.9 delay
    useEffect(() => {
      setTimeout(() => clockBaseQtn(), 900);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStats,enemyStats, dispatch]);

    //Rerender Clock FN
    const clockRenderQtn = () => {
      if (Uclock === 0){
      const ClockTurn = setInterval(() => {
        (() => {
          switch (true) {
           case(clockCheck === 1):
              return clearInterval(ClockTurn);
           default:
              return dispatch(TickingClockFn());
          }
        })()
      },100)
      }
    }
    //Rerender Clock FN
    //Uclock, clockCheck = 0;
    useEffect(() => {
      setTimeout(() => clockRenderQtn(), 900);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStats,enemyStats, dispatch]);

    return(
      <div>
        {
        screenControlRoom.PoringIsland ? <PoringIsland />:
        <div>
            <div className="storyMapScreen">
              <div className="battleScreen">
                <div className="enemyBox"> 
                    <h2 className="wordCenter">{enemyStats[i].name}</h2>
                    {
                      i === 0 ? <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={Poring} alt={enemyStats[i].name} /> :
                      i === 1 ? <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={Lunatic} alt={enemyStats[i].name} /> :
                      i === 2 ? <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip imgFlipRocker` : `imgFlip imgFlipRocker`} src={Rocker} alt={enemyStats[i].name} /> :
                      null
                    }
                    <p>Enemy Health {enemyStats[i].currentHealth}/{enemyStats[i].maxHealth}</p>
                    
                     <progress className="purpleHP" value={(enemyStats[i].currentHealth/enemyStats[i].maxHealth)*100} max="100"></progress>

                    {/* <p>Enemy Level {enemyStats[i].level}</p>
                    <p>Enemy Attack {enemyStats[i].attack}</p>
                    <p>Enemy Power {enemyStats[i].power}</p>
                    <p>Enemy Defence {enemyStats[i].defence}</p>
                    <p>Enemy Speed {enemyStats[i].speed}</p>
                    <p>Enemy Hit Rate {enemyStats[i].hitRate}</p>
                    <p>Enemy Dodge Rate {enemyStats[i].dodgeRate}</p>
                    <p>Enemy Crit Rate {enemyStats[i].critRate}</p> */}
                </div>
                <div>
                  <h2 className="wordCenter">Altan</h2>
                  {/* User attack Post */}
                  {ImageControlRoom.UserAttack ? <img src={ImageControlRoom.UserWeaponAttackImg} alt="UserAttackPost" className="altanImg" /> :
                  ImageControlRoom.UserOnHit ? <img src={UserOnHitPost} alt="UserOnHitPost" className="altanImg"/> : 
                  ImageControlRoom.UserIsDying ? <img src={UserIsDyingPost} alt="UserIsDyingPost" className="altanImg"/> :
                  ImageControlRoom.UserIsDead ? <img src={UserIsDeadPost} alt="UserIsDeadPost" className="altanImg"/> : 
                  // User Defend Post
                  ImageControlRoom.UserIsDefend ? <img src={ImageControlRoom.UserWeaponDefendImg} alt="UserDefendPost" className="altanImg"/> :
                  ImageControlRoom.UserChannel ? <img src={UserChannelPost} alt="UserChannelPost" className="altanImg"/> :
                  // User Battle Post
                  <img src={ImageControlRoom.UserWeaponBattleImg} alt="UserBattlePost" className="altanImg"/>}                  
                  <p>Health {userStats.currentHealth}/{userStats.maxHealth}</p>
                  <progress className={userStats.currentHealth/userStats.maxHealth > 0.3 ? `greenHP` : userStats.currentHealth/userStats.maxHealth > 0.1 ? `yellowHP` : `redHP`} value={(userStats.currentHealth/userStats.maxHealth)*100} max="100"/>
                  <p>SP {userStats.currentSP}/{userStats.maxSP}</p>
                  <progress className="blueSP" value={(userStats.currentSP/userStats.maxSP)*100} max="100"/>
                </div>
              </div>  
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
                <div className="zenytextHUD clockHUD">
                      <h2 className="clockTitle">Clock Turn:</h2>
                      <p className="clockName">Altan: {clockBarObject.userClockBar}</p>
                      <progress value={clockBarObject.userClockBar} max="100" className="BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={"Altan: " + clockBarObject.userClockBar}/>
                      <p className="clockName">{enemyStats[i].name}: {clockBarObject.enemyClockBar}</p>
                      <progress value={clockBarObject.enemyClockBar} max="100" className=" BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={enemyStats[i].name + ": " + clockBarObject.enemyClockBar }/>
                </div>
                <div>
                      
                      { SkillControlRoom['User'].BattleSkillScreen && SkillControlRoom['User'].UserTurn ? 
                      <div className="userSkillBox">
                        {userStats.Level >= 3 ? <button onClick={() => userSkillBashButton()}><img src={skillBash} alt="skillBash" /> Bash MP10</button> : null}
                        {userStats.Level >= 5 ? <button onClick={() => userSkillMagnumBreakButton()}><img src={skillMagnum} alt="skillMagnumBreak" /> Magnum Break MP25</button> : null}
                        <button onClick={() => dispatch(ReturnUserInSelectSkillFn())}>Back</button>
                      </div>
                      : SkillControlRoom['User'].BattleItemScreen && SkillControlRoom['User'].UserTurn ? 
                      <div className="userSkillBox">
                        {userGoldItem.RedPotion >= 1 ? <button onClick={() => userItemRedPotionButton()}><img src={RedPotion} alt="RedPotion" /> RedPotion x{userGoldItem.RedPotion}</button> : null}
                        {userGoldItem.YellowPotion >= 1 ? <button onClick={() => userItemYellowPotionButton()}><img src={YellowPotion} alt="YellowPotion" /> YellowPotion x{userGoldItem.YellowPotion}</button> : null }
                        <button onClick={() => dispatch(ReturnUserInSelectItemFn())}>Back</button>
                      </div>
                      : SkillControlRoom['User'].UserTurn ? 
                      <div className="userSkillBox">
                        <button className="goGoAttack" onClick={() => userAttackEnemyButton()}>Attack</button>
                        <button className="goGoDefend" onClick={() => userDefendButton()}>Defend</button>
                        <button className="goGoSkill"  onClick={() => dispatch(UserInSelectSkillFn())}>Skills</button>
                        <button className="goGoItem"  onClick={() => dispatch(UserInSelectItemFn())}>Item</button>
                        
                        <button className="goGoRun" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Run</button>
                      </div>
                      : null }
                      
                </div>
              </div>
          </div>
          <fieldset className="wordCenter storyChat">
            <legend className="storyCharacter"></legend>
            <p className="storySpeech">-------- The Battle begins ------</p>
            <button onClick={() =>{changeMapFadeAudio()}}>Stop Music</button>
            {enemyStats[i].currentHealth <= 0 ? <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button>
            : userStats.currentHealth <= 0 ? <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();}}>Goto CheckPoint</button> : null}

          </fieldset>
        </div>
        }
      </div>
    );
}
export default Main;