import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPoringIslandFn, sign_in, usingLifePotion, enemyAttackUserFn, buyPotion, sellPotion, userAttackEnemyFn, testgaga } from './actions';
import './css/mapBattle.css'
import PoringIsland from './PoringIsland'
import axios from 'axios';

function Main(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const lifePotion = useSelector(state => state.lifePotion)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGold = useSelector(state => state.userGold)

    const enemyStats = useSelector(state => state.enemyStats)
    const isLogged = useSelector(state => state.isLogged)
    //Enemy
    const dispatch = useDispatch();

    const testFn = (e) => {
        e.preventDefault();
        setTimeout(() => {
          dispatch(userAttackEnemyFn(userStats.attack))}, 500);
      };
    // *API Call was success, but cannot call the cross region api: https://ragnapi.com/api/v1/old-times/monsters/1002 (Poring)
    useEffect(() => {
      axios.get('https://ragnapi.com/api/v1/old-times/monsters/1002').then((x) => {
              console.log(x);
            })
            .catch ((error) => {
              console.log(error);
            })
    }, []);
    return(
      <div>
        {
        screenControlRoom.PoringIsland ? <PoringIsland />:
        <div>
            <div className="storyMapScreen">
              <div className="battleScreen">
              <div>
                    <h2>Enemy Status</h2>
                    <p>Enemy Level {enemyStats.level}</p>
                    <p>Enemy Health {enemyStats.currentHealth}/{enemyStats.maxHealth}</p>
                    <p>Enemy Attack {enemyStats.attack}</p>
                    <p>Enemy Power {enemyStats.power}</p>
                    <p>Enemy Defence {enemyStats.defence}</p>
                    <p>Enemy Speed {enemyStats.speed}</p>
                    <p>Enemy Hit Rate {enemyStats.hitRate}</p>
                    <p>Enemy Dodge Rate {enemyStats.dodgeRate}</p>
                    <p>Enemy Crit Rate {enemyStats.critRate}</p>
                    <p>{userStats.Attack}</p>
                    <button onClick={() => dispatch(testgaga())}>testgaga</button>
                    <button onClick={() => dispatch(enemyAttackUserFn(enemyStats.attack,userStats.defence))}>Enemy attack</button>
                </div>
                <div>
                  <h2>Player Status</h2>
                  <p>Player Level {userStats.level}</p>
                  <p>Player Health {userStats.currentHealth}/{userStats.maxHealth}</p>
                  <p>Player Attack {userStats.attack}</p>
                  <p>Player Defence {userStats.defence}</p>
                  <p>Player Speed {userStats.speed}</p>
                  <p>Player Hit Rate {userStats.hitRate}</p>
                  <p>Player Dodge Rate {userStats.dodgeRate}</p>
                  <p>Player Crit Rate {userStats.critRate}</p>
                  <p>Player $ {userGold}</p>
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
                <button>Stop Music</button>
                <h1>HUD</h1>
                <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn())}}>PoringIsland</button>
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