import lifePotionReducer from "./lifePotion";
import loggedReducer from "./isLogged";
import userLevelReducer from "./userLevel";
import userStatsReducer from "./userStats";
import userAttackStatsReducer from "./userAttackStats";
import userDefenceStatsReducer from "./userDefenceStats";
import userSpeedStatsReducer from "./userSpeedStats";
import userHitRateStatsReducer from "./userHitRateStats";
import userDodgeRateStatsReducer from "./userDodgeRateStats";
import userCritRateStatsReducer from "./userCritRateStats";
import userMaxHealthReducer from "./userMaxHealth";
import userCurrentHealthReducer from "./userCurrentHealth";
import userGoldReducer from "./userGold";
import userPowerStatsReducer from './userPowerStats';
import authorLogoReducer from "./authorLogo";
import startGameReducer from "./startGame";
import footerEasterEggReducer from "./footerEasterEgg"

import enemyMaxHealthReducer from "./enemyMaxHealth";
import enemyCurrentHealthReducer from "./enemyCurrentHealth";
import enemyLevelReducer from "./enemyLevel";
import enemyAttackStatsReducer from "./enemyAttackStats";
import enemyPowerStatsReducer from "./enemyPowerStats";
import enemyDefenceStatsReducer from "./enemyDefenceStats";
import enemySpeedStatsReducer from "./enemySpeedStats";
import enemyHitRateStatsReducer from "./enemyHitRateStats";
import enemyDodgeRateStatsReducer from "./enemyDodgeRateStats";
import enemyCritRateStatsReducer from "./enemyCritRateStats";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    startGame: startGameReducer,
    authorLogo: authorLogoReducer,
    lifePotion: lifePotionReducer,
    isLogged: loggedReducer,
    userStats: userStatsReducer,
    userLevel: userLevelReducer,
    userMaxHealth: userMaxHealthReducer,
    userCurrentHealth: userCurrentHealthReducer,
    userGold: userGoldReducer,
    userAttackStats: userAttackStatsReducer,
    userDefenceStats: userDefenceStatsReducer,
    userSpeedStats: userSpeedStatsReducer,
    userHitRateStats: userHitRateStatsReducer,
    userDodgeRateStats: userDodgeRateStatsReducer,
    userCritRateStats: userCritRateStatsReducer,
    userPowerStats: userPowerStatsReducer,
    footerEasterEgg: footerEasterEggReducer,
    enemyMaxHealth: enemyMaxHealthReducer,
    enemyCurrentHealth: enemyCurrentHealthReducer,
    enemyAttackStats: enemyAttackStatsReducer,
    enemyPowerStats: enemyPowerStatsReducer,
    enemyDefenceStats: enemyDefenceStatsReducer,
    enemySpeedStats: enemySpeedStatsReducer,
    enemyHitRateStats: enemyHitRateStatsReducer,
    enemyDodgeRateStats: enemyDodgeRateStatsReducer,
    enemyCritRateStats: enemyCritRateStatsReducer,
    enemyLevel: enemyLevelReducer
});

export default allReducers;