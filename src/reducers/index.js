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
import clockControlRoomReducer from './clockControlRoom'
import trainingSuccessRateReducer from './trainingSuccessRate'
import trainingSuccessRequireReducer from './trainingSuccessRequire'

import enemyStatsReducer from "./enemyStats";
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
    storyLineOne: storyLineOneReducer,
    textReadAndSpeed: textReadAndSpeedReducer,
    npcSpeech: npcSpeechReducer,
    userStats: userStatsReducer,
    userAttribute: userAttributeReducer,
    userGoldItem: userGoldItemReducer,
    enemyStats: enemyStatsReducer,
    footerEasterEgg: footerEasterEggReducer,
    trainingSuccessRate: trainingSuccessRateReducer,
    trainingSuccessRequire: trainingSuccessRequireReducer,

});

export default allReducers;