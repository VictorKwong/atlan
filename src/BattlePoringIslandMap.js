import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPoringIslandFn, sign_in, usingLifePotion, enemyAttackUserFn, buyPotion, sellPotion, userAttackEnemyFn, testgaga, IfEnemyOnHitFn, testwin, EnemyOnHitAnimationFn, ResetEnemyOnHitAnimationFn, switchOffAudio ,switchOnAudio  } from './actions';
import './css/mapBattle.css'
import PoringIsland from './PoringIsland'
import Poring from './img/Poring.gif'
import Lunatic from './img/Lunatic.gif'
import MainCharacter from './img/Character/CharacterBattlePost1.gif'
import $ from 'jquery'

import audioStrugardenNEOBattle1 from './audio/StrugardenNEOBattle1.mp3'
const audioBGM = new Audio(audioStrugardenNEOBattle1);

function Main(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const ImageControlRoom = useSelector(state => state.ImageControlRoom)
    const AudioRoom = useSelector(state => state.AudioRoom)
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
            
        })
        .catch(error => {
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
      useEffect(() => {
          if (enemyStats[0].currentHealth <= 0){
            dispatch(testwin());
            $('.goGoAttack').prop("disabled", true);
          }
      }, [enemyStats[0].currentHealth]);

    const userAttackEnemyButton = () => {

      dispatch(IfEnemyOnHitFn());
      dispatch(EnemyOnHitAnimationFn());
      setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
      console.log(audioBGM.volume);
      console.log(audioBGM);
    }

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
                    <button onClick={() => dispatch(enemyAttackUserFn(enemyStats[0].attack,userStats.defence))}>Enemy attack</button>
                </div>
                <div>
                  <h2>Player Status</h2>

                  <p>Player Health {userStats.currentHealth}/{userStats.maxHealth}</p>
                    <img src={MainCharacter} alt="MainCharacter" />
                    <button className="goGoAttack" onClick={() => userAttackEnemyButton()}>Attack</button>
                  {/* <p>Player Level {userStats.level}</p>
                  <p>Player Attack {userStats.attack}</p>
                  <p>Player Defence {userStats.defence}</p>
                  <p>Player Speed {userStats.speed}</p>
                  <p>Player Hit Rate {userStats.hitRate}</p>
                  <p>Player Dodge Rate {userStats.dodgeRate}</p>
                  <p>Player Crit Rate {userStats.critRate}</p>
                  <p>Player Exp {userStats.Experience}</p>
                  <p>Player $ {userGold}</p> */}
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
              </div>
              </div>  
              <div className="StoryHUD">
                <button onClick={() =>{changeMapFadeAudio()}}>Stop Music</button>
                <button onClick={() => dispatch(switchOnAudio())}>Stop Music GO</button>
                <button onClick={() => dispatch(switchOffAudio())}>Stop Music2</button>
                <h1>HUD</h1>
                <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn());  changeMapFadeAudio();}}>PoringIsland</button>
              </div>
          </div>
          <fieldset className="storyChat">
            <legend className="storyCharacter"></legend>
            <p className="storySpeech">TestMap</p>

          </fieldset>
        </div>
        }





      </div>
    );
}
export default Main;