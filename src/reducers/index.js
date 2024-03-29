import userStatsReducer from "./userStats";
import userAttributeReducer from "./userAttribute"
import userGoldItemReducer from "./userGoldItem";
import footerEasterEggReducer from "./footerEasterEgg"
import screenControlRoomReducer from "./screenControlRoom";
import ImageControlRoomReducer from "./ImageControlRoom";
import SkillControlRoomReducer from "./SkillControlRoom";
import questControlRoomReducer from "./questControlRoom"
import audioControlRoomReducer from "./audioControlRoom";
import npcControlRoomReducer from "./npcControlRoom";
import storyLineOneReducer from "./storyLineOne";
import textReadAndSpeedReducer from "./textReadAndSpeed";
import npcSpeechReducer from "./npcSpeech";
import baseEXPChartReducer from "./baseEXPChart";
import baseJobEXPChartReducer from "./baseJobEXPChart";
import clockControlRoomReducer from './clockControlRoom'
import trainingSuccessRateReducer from './trainingSuccessRate'
import trainingSuccessRequireReducer from './trainingSuccessRequire'
import skillCapChartReducer from './skillCapChart'
import miscControlRoomReducer from './miscControlRoom'
import equipmentAllStatsReducer from './equipmentAllStats'
import itemPriceChartReducer from './itemPriceChart'

import enemyStatsReducer from "./enemyStats";
import enemyStatsTwoReducer from "./enemyStatsTwo";
import enemyStatsThreeReducer from "./enemyStatsThree";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    screenControlRoom: screenControlRoomReducer,
    ImageControlRoom: ImageControlRoomReducer,
    SkillControlRoom: SkillControlRoomReducer,
    questControlRoom: questControlRoomReducer,
    clockControlRoom: clockControlRoomReducer,
    npcControlRoom: npcControlRoomReducer,
    audioControlRoom: audioControlRoomReducer,
    baseEXPChart: baseEXPChartReducer,
    baseJobEXPChart: baseJobEXPChartReducer,
    storyLineOne: storyLineOneReducer,
    textReadAndSpeed: textReadAndSpeedReducer,
    npcSpeech: npcSpeechReducer,
    userStats: userStatsReducer,
    userAttribute: userAttributeReducer,
    userGoldItem: userGoldItemReducer,
    enemyStats: enemyStatsReducer,
    enemyStatsTwo: enemyStatsTwoReducer,
    enemyStatsThree: enemyStatsThreeReducer,
    footerEasterEgg: footerEasterEggReducer,
    trainingSuccessRate: trainingSuccessRateReducer,
    trainingSuccessRequire: trainingSuccessRequireReducer,
    skillCapChart: skillCapChartReducer,
    equipmentAllStats: equipmentAllStatsReducer,
    miscControlRoom: miscControlRoomReducer,
    itemPriceChart: itemPriceChartReducer,

});

export default allReducers;