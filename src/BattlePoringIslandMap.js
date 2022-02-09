import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPoringIslandFn, EnemyAttackUserFn, userAttackEnemyFn, EnemyOnHitAnimationFn, ResetEnemyOnHitAnimationFn, UserAttackAnimationFn, ResetUserAttackAnimationFn, UserOnHitAnimationFn, ResetUserOnHitAnimationFn, UserIsDeadAnimationFn , ResetUserIsDeadAnimationFn, UserIsDyingAnimationFn, ResetUserIsDyingAnimationFn , UserIsBlockAnimationFn , ResetUserIsBlockAnimationFn, UserChannelAnimationFn, ResetUserChannelAnimationFn } from './actions';
//Battle UI
import { ReturnUserInSelectSkillFn, UserInSelectSkillFn , UserInSelectItemFn , ReturnUserInSelectItemFn } from './actions';
//Clock
import { UserTurnFn , ResetUserTurnFn, EnemyTurnFn, ResetEnemyTurnFn, userClockDefendFn, enemyClockDefendFn } from './actions';
//Game Result (Victory/Defeat)
import { WinResultFn, ResetEnemyCurrentHealthFn, UserLevelUpFn } from './actions';
import { ReturnCheckPointFn } from './actions'
//Skills T/F
import { UserTurnBlockFn, ResetUserTurnBlockFn , EnemyTurnBlockFn, ResetEnemyTurnBlockFn} from './actions'
//Battle Calculation
import { EnemyAttackBlockUserFn , UserAttackBlockEnemyFn , UserSkillBashEnemyFn , UserSkillBashBlockEnemyFn, UserSkillMagnumBreakEnemyFn, UserSkillMagnumBreakBlockEnemyFn, UserSkillBashMissedFn, UserSkillMagnumBreakMissedFn} from './actions'
//ITEMS
import { UseYellowPotionFn, UseRedPotionFn } from './actions'



import './css/mapBattle.css'
import PoringIsland from './PoringIsland'
import Poring from './img/Monster/Poring.gif'
import Lunatic from './img/Monster/Lunatic.gif'
import Rocker from './img/Monster/Rocker.gif'
import UserBattlePost from './img/Character/USerBattlePost1.gif'
import UserAttackPost from './img/Character/UserAttackPost1.gif'
import UserDefendPost from './img/Character/UserDefendPost1.gif'
import UserOnHitPost from './img/Character/UserOnHitPost1.gif'
import UserIsDyingPost from './img/Character/UserDyingPost1.png'
import UserIsDeadPost from './img/Character/UserDeadPost1.png'
import UserChannelPost from './img/Character/UserChannel1.png'
import skillBash from './img/Skill/sm_bash.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import RedPotion from './img/Item/RedPotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
import $ from 'jquery'

import audioStrugardenNEOBattle1 from './audio/StrugardenNEOBattle1.mp3'
const audioBGM = new Audio(audioStrugardenNEOBattle1);

let clockBarObject = {
  userClockBar: 0,
  enemyClockBar: 0,
}
//Monster Random Number 0 1 
let i = Math.floor((Math.random() * 3));
//Music
let k = 0;

function Main(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const ImageControlRoom = useSelector(state => state.ImageControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGold = useSelector(state => state.userGold)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const enemyStats = useSelector(state => state.enemyStats)
    console.log('you are rerender')
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    console.log(`here: ${i}`)
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
              console.log(audioBGM.currentTime)
              audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }else if (i >= 2){
            audioBGM.volume = 0.15
            clearInterval(fadeAudio);
          }
          $('.toolDealerNPC').on('click', function(event) {
            event.preventDefault();
              audioBGM.volume = 0.15;
              clearInterval(fadeAudio);
          })
        }, 10);
    }


    // VICTORY FUCNTION
    // EXP FUNCTION
    useEffect(() => {
      if (enemyStats[i].currentHealth <= 0){
        dispatch(WinResultFn(enemyStats[i].Experience,enemyStats[i].Zeny));
        $('.storySpeech').html(`<p>Victory! ${enemyStats[i].Experience} EXP received.</p>\n<p>${enemyStats[i].Zeny} Zeny.</p>`)
        console.log('Add Exp')
      }
    }, [enemyStats, dispatch]);
    // $('.goGoAttack').prop("disabled", true);
      useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
          if (enemyStats[i].currentHealth <= 0){
            
          }
      }, [enemyStats, dispatch]);
    // DEFEAT FUNCTION
      useEffect(() => {
        if (userStats.currentHealth <= 0){
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
                k = k + 1;
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
          console.log('pass level')
          dispatch(UserLevelUpFn());
          $('.storySpeech').append(`\n <p>Altan has Level Up to Lv${userStats.Level + 1}</p>`)
            switch (true) {
              case(userStats.Level === 3):
                return $('.storySpeech').append(`\n <p>Altan has Unlock Skill Bash <img src=${skillBash} alt="skillBash" /> !</p>`)
              case(userStats.Level === 5):
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
              // Text display
              $('.storySpeech').append(`<p>Critial Hit!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserAttackBlockEnemyFn(1.5)), 300);
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              // Text display
              $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserAttackBlockEnemyFn(1)), 300)
          // ENEMY HIT
          // CRIT RATE
          case(((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()) && (userStats.critRate >= Math.random())):
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              // Text display
              $('.storySpeech').append(`<p>Critial Hit!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              //Rerender
              return setTimeout(() => dispatch(userAttackEnemyFn(1.5)), 300);
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              // Text display
              $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              //Rerender
              return setTimeout(() => dispatch(userAttackEnemyFn(1)), 300);
          // ENEMY DODGE
          default:
            $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} dodge the attack.</p>`)
            //Rerender
            return setTimeout(() => dispatch(userClockDefendFn()), 300);
        }
        })()
      // End turn
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());

    }
    const userDefendButton = () => {
      //Rerender
      setTimeout(() => dispatch(userClockDefendFn()), 300);
      dispatch(UserIsBlockAnimationFn());
      dispatch(UserTurnBlockFn());
      // Text display
      $('.storySpeech').append('<p>Altan Defend himself!</p>')
      // End turn
      clockBarObject.userClockBar = clockBarObject.userClockBar - 70;
      dispatch(ResetUserTurnFn());
    }

    

    //COMBAT SKILLS
    const userSkillBashButton = () => {
      if (userStats.currentSP >= 10){
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1050);
      //Rerender, Block or not block
      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            if(userStats.critRate >=Math.random()){
              // Text display
              $('.storySpeech').append(`<p>Critical Hit Bash!!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillBashBlockEnemyFn(1.5)), 300);
            }else{
              // Text display
              $('.storySpeech').append(`<p>Altan use Bash!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillBashBlockEnemyFn(1)), 300);
            }

          // ENEMY HIT
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            if (userStats.critRate >= Math.random()){
              // Text display
              $('.storySpeech').append(`<p>Critical Hit Bash!!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillBashEnemyFn(1.5)), 300);
            }else{
              // Text display
              $('.storySpeech').append(`<p>Altan use Bash!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillBashEnemyFn(1)), 300);
            }
          // ENEMY DODGE
          default:
            $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} dodge the attack.</p>`)
            //Rerender
            return setTimeout(() => dispatch(UserSkillBashMissedFn()), 300);
        }
        })()

        // End turn
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').html(`<p>Not enough SP.</p>`)
      }
    }
    const userSkillMagnumBreakButton = () => {
      if (userStats.currentSP >= 15){
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1050);
      //Rerender, Block or not block
      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            if (userStats.critRate >= Math.random()){
              // Text display
              $('.storySpeech').append(`<p>Critical Hit Magnum Break!!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakBlockEnemyFn(1.5)), 300);
            }else{
              // Text display
              $('.storySpeech').append(`<p>Altan use Magnum Break!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakBlockEnemyFn(1)), 300);
            }

          // ENEMY HIT
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            if(userStats.critRate >= Math.random()){
              // Text display
              $('.storySpeech').append(`<p>Critical Hit Magnum Break!!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(1.5)), 300);
            }else{
              // Text display
              $('.storySpeech').append(`<p>Altan use Magnum Break!!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
              // Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(1)), 300);
            }
          // ENEMY DODGE 
          default:
              $('.storySpeech').append(`<p>Altan Attack!</p>\n<p>${enemyStats[i].name} dodge the attack.</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakMissedFn()), 300);
        }
        })()
        // End turn
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
        setTimeout(() => dispatch(UseRedPotionFn()), 300);
        // Text display
        $('.storySpeech').append('<p>Altan Heal himself! Recover 50 hp </p>')
        // End turn
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
    }
    const userItemYellowPotionButton = () => {
        dispatch(UserChannelAnimationFn());
        setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
        //Rerender
        setTimeout(() => dispatch(UseYellowPotionFn()), 300);
        // Text display
        $('.storySpeech').append('<p>Altan Heal himself! Recover 150 hp </p>')
        // End turn
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
    }
    // Enemy AI
    const enemyDecisionQFn = () => {
      const enemyDecision = Math.random();
      (() => {
          switch (true) {
          //EnemyAttack & Hit
            case(enemyDecision < 1):
              //Rerender, Block or not block
              (() => {
              switch (true) {
                // USER BLOCK
                case (SkillControlRoom['User'].UserBlock && ((enemyStats[i].hitRate - userStats.dodgeRate).toFixed(3) >= Math.random())):
                  dispatch(UserOnHitAnimationFn());
                  setTimeout(() => dispatch(ResetUserOnHitAnimationFn()), 300);
                  //CRIT RATE
                  if(enemyStats[i].critRate >= Math.random()){
                    // Text display
                    $('.storySpeech').append(`<p>${enemyStats[i].name} Critical Hit Attack!!</p>\n <p>Altan Received ${enemyStats[i].attack} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackBlockUserFn(1.5));
                  }else{
                    // Text display
                    $('.storySpeech').append(`<p>${enemyStats[i].name} Attack!</p>\n <p>Altan Received ${enemyStats[i].attack} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackBlockUserFn(1));
                  }
                // USER HIT
                case ((enemyStats[i].hitRate - userStats.dodgeRate).toFixed(3) >= Math.random()):
                  dispatch(UserOnHitAnimationFn());
                  setTimeout(() => dispatch(ResetUserOnHitAnimationFn()), 300);
                  //CRIT RATE
                  if(enemyStats[i].critRate >= Math.random()){
                    // Text display
                    $('.storySpeech').append(`<p>${enemyStats[i].name} Critical Hit Attack!!</p>\n <p>Altan Received ${enemyStats[i].attack} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(1.5));
                  }else{
                    // Text display
                    $('.storySpeech').append(`<p>${enemyStats[i].name} Attack!</p>\n <p>Altan Received ${enemyStats[i].attack} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(1));                     
                  }
                // USER DODGE
                default:
                  $('.storySpeech').append(`<p>${enemyStats[i].name} Attack!</p>\n <p>Altan dodge the attack!</p>`)
                  //Rerender
                  return setTimeout(() => dispatch(enemyClockDefendFn()), 300);
              }
              })()
            // End turn
            clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
            dispatch(ResetEnemyTurnFn());
             break;
            //Enemy Defend itself
          case(enemyDecision === 1):
            dispatch(EnemyTurnBlockFn());
            // Text display
            $('.storySpeech').append(`<p>${enemyStats[i].name} Defend itself...</p>`)
            //Rerender
            setTimeout(() => dispatch(enemyClockDefendFn()), 300);
            // End turn
            clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
            dispatch(ResetEnemyTurnFn());
          break;
          default:
            return;
        }
      })()
    }


  const clockBaseQtn = () => {
    if (enemyStats[i].currentHealth > 0 && userStats.currentHealth > 0){
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
              dispatch(UserTurnFn());
              $('.storySpeech').html('<p>--------- Altan Turn ---------</p>')
              console.log('UserTurn is good')
              return clearInterval(ClockTurn);
            case ((clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (userStats.speed < enemyStats[i].speed)) || (clockBarObject.userClockBar < 100 && clockBarObject.enemyClockBar >= 100)):
              dispatch(ResetEnemyTurnBlockFn());
              dispatch(EnemyTurnFn());
              $('.storySpeech').append(`<p>--------- ${enemyStats[i].name} Turn ---------</p>\n`)
              enemyDecisionQFn();
              console.log('EnemyTurn is good')
              return clearInterval(ClockTurn);
            default:
              console.log(`userClock: ${clockBarObject.userClockBar}`)
              console.log(`enemyClock: ${clockBarObject.enemyClockBar}`)
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
                  {ImageControlRoom.UserAttack ? <img src={UserAttackPost} alt="UserAttackPost" className="altanImg" /> :
                  ImageControlRoom.UserOnHit ? <img src={UserOnHitPost} alt="UserOnHitPost" className="altanImg"/> : 
                  ImageControlRoom.UserIsDying ? <img src={UserIsDyingPost} alt="UserIsDyingPost" className="altanImg"/> :
                  ImageControlRoom.UserIsDead ? <img src={UserIsDeadPost} alt="UserIsDeadPost" className="altanImg"/> : 
                  ImageControlRoom.UserIsDefend ? <img src={UserDefendPost} alt="UserDefendPost" className="altanImg"/> :
                  ImageControlRoom.UserChannel ? <img src={UserChannelPost} alt="UserChannelPost" className="altanImg"/> :
                  <img src={UserBattlePost} alt="UserBattlePost" className="altanImg"/>}                  
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
                    {userStats.Level >= 10 ? <progress className="BarBasicHUD expBarBasicHUD" value="100" max="100"></progress> : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                <p className="zenytextHUD">Zeny {userGoldItem.Zeny}</p>
                <div className="zenytextHUD clockHUD">
                      <h2 className="clockTitle">Clock Turn:</h2>
                      <p className="clockName">Altan: {clockBarObject.userClockBar}</p>
                      <progress value={clockBarObject.userClockBar} max="100" className="BarBasicHUD clockBarBasicHUD expBarBasicHUD" title="Altan"/>
                      <p className="clockName">{enemyStats[i].name}: {clockBarObject.enemyClockBar}</p>
                      <progress value={clockBarObject.enemyClockBar} max="100" className=" BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={enemyStats[i].name}/>
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