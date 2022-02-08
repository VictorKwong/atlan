import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPoringIslandFn, sign_in, usingLifePotion, enemyAttackUserFn, buyPotion, sellPotion, userAttackEnemyFn, testgaga, IfEnemyOnHitFn, EnemyOnHitAnimationFn, ResetEnemyOnHitAnimationFn, UserAttackAnimationFn, ResetUserAttackAnimationFn, UserOnHitAnimationFn, ResetUserOnHitAnimationFn, UserIsDeadAnimationFn , ResetUserIsDeadAnimationFn, UserIsDyingAnimationFn, ResetUserIsDyingAnimationFn , UserIsBlockAnimationFn , ResetUserIsBlockAnimationFn } from './actions';
import { ReturnUserInSelectSkillFn, UserInSelectSkillFn } from './actions';
//Clock
import { UserTurnFn , ResetUserTurnFn, EnemyTurnFn, ResetEnemyTurnFn, userClockDefendFn, enemyClockDefendFn } from './actions';
//Game Result (Victory/Defeat)
import { WinResultFn, ResetEnemyCurrentHealthFn, UserLevelUpFn } from './actions';
import { ReturnCheckPointFn } from './actions'
//Skills T/F
import { UserTurnBlockFn, ResetUserTurnBlockFn , EnemyTurnBlockFn, ResetEnemyTurnBlockFn} from './actions'
//Battle Calculation
import { EnemyAttackBlockUserFn , UserAttackBlockEnemyFn , UserSkillBashEnemyFn , UserSkillBashBlockEnemyFn, UserSkillMagnumBreakEnemyFn, UserSkillMagnumBreakBlockEnemyFn} from './actions'

import './css/mapBattle.css'
import PoringIsland from './PoringIsland'
import Poring from './img/Poring.gif'
import Lunatic from './img/Lunatic.gif'
import UserBattlePost from './img/Character/USerBattlePost1.gif'
import UserAttackPost from './img/Character/UserAttackPost1.gif'
import UserDefendPost from './img/Character/UserDefendPost1.gif'
import UserOnHitPost from './img/Character/UserOnHitPost1.gif'
import UserIsDyingPost from './img/Character/UserDyingPost1.png'
import UserIsDeadPost from './img/Character/UserDeadPost1.png'
import skillBash from './img/Skill/sm_bash.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import $ from 'jquery'

import audioStrugardenNEOBattle1 from './audio/StrugardenNEOBattle1.mp3'
const audioBGM = new Audio(audioStrugardenNEOBattle1);

let clockBarObject = {
  userClockBar: 0,
  enemyClockBar: 0,
}

function Main(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const ImageControlRoom = useSelector(state => state.ImageControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const lifePotion = useSelector(state => state.lifePotion)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGold = useSelector(state => state.userGold)


    const enemyStats = useSelector(state => state.enemyStats)
    const isLogged = useSelector(state => state.isLogged)
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
    }, [])

    const changeMapFadeAudio = () => {
      const fadeAudio = setInterval(() => {
          if (audioBGM.volume !== 0) {
            audioBGM.volume -= 0.002
            audioBGM.volume = audioBGM.volume.toFixed(4)
          }
          if (audioBGM.volume < 0.002) {
              audioBGM.pause();
              audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }
        }, 10);
    }

    const testFn = (e) => {
        e.preventDefault();
        setTimeout(() => {
          dispatch(userAttackEnemyFn(userStats.attack))}, 500);
      };


    // VICTORY FUCNTION
    // EXP FUNCTION
    useEffect(() => {
      if (enemyStats[0].currentHealth <= 0){
        dispatch(WinResultFn(enemyStats[0].Experience));
        $('.storySpeech').html(`Victory! ${enemyStats[0].Experience} EXP received.`)
        console.log('Add Exp')
      }
    }, [enemyStats, dispatch]);
    // $('.goGoAttack').prop("disabled", true);
      useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
          if (enemyStats[0].currentHealth <= 0){
            
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
                clockBarObject.userClockBar = 0;
                clockBarObject.enemyClockBar = 0;
                dispatch(ResetEnemyTurnBlockFn());
                dispatch(ResetUserTurnBlockFn());
                dispatch(ReturnUserInSelectSkillFn());
    }
    // LEVEL FUNCTION
    useEffect(() => {
      if (enemyStats[0].currentHealth <= 0){
        console.log(userStats.Level)
        console.log(userStats.Experience)
        console.log(baseEXPChart[1])
        console.log(userStats.Experience >= baseEXPChart[userStats.Level])
        console.log(baseEXPChart[userStats.Level])
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
    }, [enemyStats, dispatch, userStats]);



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
          case(SkillControlRoom['Enemy'].EnemyBlock):
            return setTimeout(() => dispatch(UserAttackBlockEnemyFn()), 300);
          default:
            return setTimeout(() => dispatch(IfEnemyOnHitFn()), 300);
        }
        })()
      
      dispatch(EnemyOnHitAnimationFn());
      setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
      // Text display
      $('.storySpeech').html(`<p>Altan Attack!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
      // End turn
      // dispatch(ResetUserClockFn());
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());

    }
    const userDefendButton = () => {
      //Rerender
      setTimeout(() => dispatch(userClockDefendFn()), 300);
      dispatch(UserIsBlockAnimationFn());
      dispatch(UserTurnBlockFn());
      // Text display
      $('.storySpeech').html('<p>Altan Defend himself!</p>')
      // End turn
      // dispatch(ResetUserClockFn());
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
          case(SkillControlRoom['Enemy'].EnemyBlock):
            return setTimeout(() => dispatch(UserSkillBashBlockEnemyFn()), 300);
          default:
            return setTimeout(() => dispatch(UserSkillBashEnemyFn()), 300);
        }
        })()
        dispatch(EnemyOnHitAnimationFn());
        setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
        // Text display
        $('.storySpeech').html(`<p>Altan Attack!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
        // End turn
        // dispatch(ResetUserClockFn());
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
          case(SkillControlRoom['Enemy'].EnemyBlock):
            return setTimeout(() => dispatch(UserSkillMagnumBreakBlockEnemyFn()), 300);
          default:
            return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn()), 300);
        }
        })()
        dispatch(EnemyOnHitAnimationFn());
        setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
        // Text display
        $('.storySpeech').html(`<p>Altan Attack!</p>\n<p>Enemy Received ${userStats.attack} damage</p>`)
        // End turn
        // dispatch(ResetUserClockFn());
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').html(`<p>Not enough SP.</p>`)
      }
    }
    // Enemy AI
    const enemyDecisionQFn = () => {
      const enemyDecision = Math.random();
      (() => {
            switch (true) {
          //EnemyAttack & Hit
          case(enemyDecision < 1):
            dispatch(UserOnHitAnimationFn());
            setTimeout(() => dispatch(ResetUserOnHitAnimationFn()), 300);
                //Rerender, Block or not block
                (() => {
                switch (true) {
                  case(SkillControlRoom['User'].UserBlock):
                    return dispatch(EnemyAttackBlockUserFn());
                  default:
                    return dispatch(enemyAttackUserFn(enemyStats[0].attack,userStats.defence));
                }
                })()
            // Text display
            $('.storySpeech').html(`<p>${enemyStats[0].name} Attack!</p>\n <p>Altan Received ${enemyStats[0].attack} damage</p>`)
            // End turn
            clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
            dispatch(ResetEnemyTurnFn());
             break;
            //Enemy Defend itself
          case(enemyDecision === 1):
            dispatch(EnemyTurnBlockFn());
            //Rerender
            setTimeout(() => dispatch(enemyClockDefendFn()), 300);
            // Text display
            $('.storySpeech').html(`<p>${enemyStats[0].name} Defend itself...</p>`)
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
    if (enemyStats[0].currentHealth > 0 && userStats.currentHealth > 0){
      const ClockTurn = setInterval(() => {
        // *study
        (() => {
          switch (true) {
            case ((clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (userStats.speed >= enemyStats[0].speed)) || (clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar < 100)):
              //Reset All Block
              dispatch(ResetUserIsBlockAnimationFn());
              dispatch(ResetUserTurnBlockFn());
              dispatch(ReturnUserInSelectSkillFn());
              dispatch(UserTurnFn());
              console.log('UserTurn is good')
              return clearInterval(ClockTurn);
            case ((clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (userStats.speed < enemyStats[0].speed)) || (clockBarObject.userClockBar < 100 && clockBarObject.enemyClockBar >= 100)):
              dispatch(ResetEnemyTurnBlockFn());
              dispatch(EnemyTurnFn());
              enemyDecisionQFn();
              console.log('EnemyTurn is good')
              return clearInterval(ClockTurn);
            default:
              console.log(`userClock: ${clockBarObject.userClockBar}`)
              console.log(`enemyClock: ${clockBarObject.enemyClockBar}`)
              return clockBarObject = {
                userClockBar: clockBarObject.userClockBar + userStats.speed,
                enemyClockBar: clockBarObject.enemyClockBar + enemyStats[0].speed,
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


    //Monster Random Number
    let i = 0;

    return(
      <div>
        {
        screenControlRoom.PoringIsland ? <PoringIsland />:
        <div>
            <div className="storyMapScreen">
              <div className="battleScreen">
              <div> 
                    <h2>Enemy Status</h2>
                    {
                      i === 0 ? <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={Poring} alt={enemyStats[0].name} /> :
                      i === 1 ? <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={Lunatic} alt={enemyStats[0].name} /> :
                      null
                    }
                    <p>{enemyStats[0].name}</p>  
                    <p>Enemy Health {enemyStats[0].currentHealth}/{enemyStats[0].maxHealth}</p>
                    
                     <progress className="purpleHP" value={(enemyStats[0].currentHealth/enemyStats[0].maxHealth)*100} max="100"></progress>

                    {/* <p>Enemy Level {enemyStats[0].level}</p>
                    <p>Enemy Attack {enemyStats[0].attack}</p>
                    <p>Enemy Power {enemyStats[0].power}</p>
                    <p>Enemy Defence {enemyStats[0].defence}</p>
                    <p>Enemy Speed {enemyStats[0].speed}</p>
                    <p>Enemy Hit Rate {enemyStats[0].hitRate}</p>
                    <p>Enemy Dodge Rate {enemyStats[0].dodgeRate}</p>
                    <p>Enemy Crit Rate {enemyStats[0].critRate}</p> */}
                    <p>{userStats.Attack}</p>
                    <button onClick={() => dispatch(testgaga())}>testgaga</button>

                </div>
                <div>
                  <h2>Player Status</h2>

                  <p>Player Health {userStats.currentHealth}/{userStats.maxHealth}</p>
                  
                  <progress className={userStats.currentHealth/userStats.maxHealth > 0.3 ? `greenHP` : userStats.currentHealth/userStats.maxHealth > 0.1 ? `yellowHP` : `redHP`} value={(userStats.currentHealth/userStats.maxHealth)*100} max="100"/>
                  <p>Player SP {userStats.currentSP}/{userStats.maxSP}</p>
                  <progress className="blueSP" value={(userStats.currentSP/userStats.maxSP)*100} max="100"/>
                    {ImageControlRoom.UserAttack ? <img src={UserAttackPost} alt="UserAttackPost" /> :
                    ImageControlRoom.UserOnHit ? <img src={UserOnHitPost} alt="UserOnHitPost" /> : 
                    ImageControlRoom.UserIsDying ? <img src={UserIsDyingPost} alt="UserIsDyingPost" /> :
                    ImageControlRoom.UserIsDead ? <img src={UserIsDeadPost} alt="UserIsDeadPost"/> : 
                    ImageControlRoom.UserIsDefend ? <img src={UserDefendPost} alt="UserDefendPost"/> :
                    <img src={UserBattlePost} alt="UserBattlePost"/>}
                    
                    <div className="userSkillBox">
                      
                      { SkillControlRoom['User'].BattleSkillScreen && SkillControlRoom['User'].UserTurn ? 
                      <div>
                        {userStats.Level >= 3 ? <button onClick={() => userSkillBashButton()}><img src={skillBash} alt="skillBash" /> Bash</button> : null}
                        {userStats.Level >= 5 ? <button onClick={() => userSkillMagnumBreakButton()}><img src={skillMagnum} alt="skillMagnumBreak" /> Magnum Break</button> : null}
                        <button onClick={() => dispatch(ReturnUserInSelectSkillFn())}>Back</button>
                      </div>
                      : SkillControlRoom['User'].UserTurn ? 
                      <div>
                        <button className="goGoAttack" onClick={() => userAttackEnemyButton()}>Attack</button>
                        <button className="goGoAttack" onClick={() => userDefendButton()}>Defend</button>
                        <button className="goGoSkill"  onClick={() => dispatch(UserInSelectSkillFn())}>Skills</button>
                      </div>
                      : null
                      }
                      {/* <button onClick={TurnBaseQFn}>TurnBaseUserTest</button> */}
                      <p>userClockBar: {clockBarObject.userClockBar}</p>
                    </div>

                </div>
              <div className="userItems">
                <h3>lifePotion {lifePotion}</h3>

              <button onClick={() => dispatch(usingLifePotion(lifePotion))}>use Potion</button>
              <button onClick={testFn}>Attack</button>
              
                    <div>
                      <h2>Admin</h2>
                      <button >Add Potion</button>
                      <button >Drop Potion</button>
                      <button >atk increase</button>
                      <button >armor increase</button>
                    </div>
                    <div>
                      <h2>Shop</h2>
                    <button onClick={() => dispatch(buyPotion())}>$Buy Potion</button>
                    <button onClick={() => dispatch(sellPotion())}>$Sell Potion</button>
                    </div>
                    {isLogged ? <h3>You are Log in</h3> : <h3>you are not log In</h3>}
                    <button onClick={() => dispatch(sign_in())}>sign in</button>
                    <div>
                      <h2>Clock Turn:</h2>
                    </div>
              </div>
              </div>  
              <div className="StoryHUD">
                <button onClick={() =>{changeMapFadeAudio()}}>Stop Music</button>
                <h1>HUD</h1>
                  <p>Player Level {userStats.Level}</p>
                  <p>Player Attack {userStats.attack}</p>
                  <p>Player Defence {userStats.defence}</p>
                  <p>Player Speed {userStats.speed}</p>
                  <p>Player Hit Rate {userStats.hitRate}</p>
                  <p>Player Dodge Rate {userStats.dodgeRate}</p>
                  <p>Player Crit Rate {userStats.critRate}</p>
                  <p>Player Exp {userStats.Experience}</p>
                  <p>Player $ {userGold}</p>
                <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); changeMapFadeAudio();}}>PoringIsland</button>
              </div>
          </div>
          <fieldset className="storyChat">
            <legend className="storyCharacter"></legend>
            <p className="storySpeech">TestMap</p>
            {enemyStats[0].currentHealth <= 0 ? <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button>
            : userStats.currentHealth <= 0 ? <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();}}>Goto CheckPoint</button> : null}

          </fieldset>
        </div>
        }





      </div>
    );
}
export default Main;