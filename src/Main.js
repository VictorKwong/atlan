import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in, userAtkIncrement, userArmorIncrement , usingLifePotion, userDecrementHealth, buyPotion, sellPotion, userAttackEnemyFn } from './actions';

function Main(){

    const lifePotion = useSelector(state => state.lifePotion)
    const userLevel = useSelector(state => state.userLevel)
    const userAttackStats = useSelector(state => state.userAttackStats)
    const userPowerStats = useSelector(state => state.userPowerStats)
    const userDefenceStats = useSelector(state => state.userDefenceStats)
    const userSpeedStats = useSelector(state => state.userSpeedStats)
    const userHitRateStats = useSelector(state => state.userHitRateStats)
    const userDodgeRateStats = useSelector(state => state.userDodgeRateStats)
    const userCritRateStats = useSelector(state => state.userCritRateStats)
    const userMaxHealth = useSelector(state => state.userMaxHealth)
    const userCurrentHealth = useSelector(state => state.userCurrentHealth)
    const userGold = useSelector(state => state.userGold)
    const isLogged = useSelector(state => state.isLogged)
    //Enemy
    const enemyMaxHealth = useSelector(state => state.enemyMaxHealth)
    const enemyLevel = useSelector(state => state.enemyLevel)
    const enemyCurrentHealth = useSelector(state => state.enemyCurrentHealth)
    const enemyAttackStats = useSelector(state => state.enemyAttackStats)
    const enemyPowerStats = useSelector(state => state.enemyPowerStats)
    const enemyDefenceStats = useSelector(state => state.enemyDefenceStats)
    const enemySpeedStats = useSelector(state => state.enemySpeedStats)
    const enemyHitRateStats = useSelector(state => state.enemyHitRateStats)
    const enemyDodgeRateStats = useSelector(state => state.enemyDodgeRateStats)
    const enemyCritRateStats = useSelector(state => state.enemyCritRateStats)
    const dispatch = useDispatch();

    const testFn = (e) => {
        e.preventDefault();
        setTimeout(() => {
          dispatch(userAttackEnemyFn(userAttackStats))}, 500);
      };

    return(
      <div>
        <h1>React Redux</h1>

          <div className="userScreenAction">
            <div>
                <h2>Enemy Status</h2>
                <p>Enemy Level {enemyLevel}</p>
                <p>Enemy Health {enemyCurrentHealth}/{enemyMaxHealth}</p>
                <p>Enemy Attack {enemyAttackStats}</p>
                <p>Enemy Power {enemyPowerStats}</p>
                <p>Enemy Defence {enemyDefenceStats}</p>
                <p>Enemy Speed {enemySpeedStats}</p>
                <p>Enemy Hit Rate {enemyHitRateStats}</p>
                <p>Enemy Dodge Rate {enemyDodgeRateStats}</p>
                <p>Enemy Crit Rate {enemyCritRateStats}</p>
                <button onClick={() => dispatch(userDecrementHealth(enemyAttackStats,userDefenceStats))}>Enemy attack</button>
            </div>
            <div>
            <h2>Player Status</h2>
            <nav className="userHUD">
              <ul>
                <li>Player Level {userLevel}</li>
                <li>Player Health {userCurrentHealth}/{userMaxHealth}</li>
                <li>Player Attack {userAttackStats}</li>
                <li>Player Power {userPowerStats}</li>
                <li>Player Defence {userDefenceStats}</li>
                <li>Player Speed {userSpeedStats}</li>
                <li>Player Hit Rate {userHitRateStats}</li>
                <li>Player Dodge Rate {userDodgeRateStats}</li>
                <li>Player Crit Rate {userCritRateStats}</li>
                <li>Player $ {userGold}</li>
              </ul>
            </nav>  
          </div>

          </div>
          <div className="userItems">
            <h3>lifePotion {lifePotion}</h3>

          <button onClick={() => dispatch(usingLifePotion(lifePotion))}>use Potion</button>
          <button onClick={testFn}>Attack</button>
          
            <div>
              <h2>Admin</h2>
              <button onClick={() => dispatch(increment())}>Add Potion</button>
              <button onClick={() => dispatch(decrement())}>Drop Potion</button>
              <button onClick={() => dispatch(userAtkIncrement())}>atk increase</button>
              <button onClick={() => dispatch(userArmorIncrement())}>armor increase</button>
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
    );
}

export default Main;