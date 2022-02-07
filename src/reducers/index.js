import lifePotionReducer from "./lifePotion";
import loggedReducer from "./isLogged";
import userStatsReducer from "./userStats";
import userAttributeReducer from "./userAttribute"
import userGoldReducer from "./userGold";
import footerEasterEggReducer from "./footerEasterEgg"
import screenControlRoomReducer from "./screenControlRoom";
import ImageControlRoomReducer from "./ImageControlRoom";
import SkillControlRoomReducer from "./SkillControlRoom";
import audioControlRoomReducer from "./audioControlRoom";
import npcControlRoomReducer from "./npcControlRoom";
import storyLineOneReducer from "./storyLineOne";
import textReadAndSpeedReducer from "./textReadAndSpeed";
import npcSpeechReducer from "./npcSpeech";

import enemyStatsReducer from "./enemyStats";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    screenControlRoom: screenControlRoomReducer,
    ImageControlRoom: ImageControlRoomReducer,
    SkillControlRoom: SkillControlRoomReducer,
    npcControlRoom: npcControlRoomReducer,
    audioControlRoom: audioControlRoomReducer,
    storyLineOne: storyLineOneReducer,
    textReadAndSpeed: textReadAndSpeedReducer,
    npcSpeech: npcSpeechReducer,
    lifePotion: lifePotionReducer,
    isLogged: loggedReducer,
    userStats: userStatsReducer,
    userAttribute: userAttributeReducer,
    userGold: userGoldReducer,
    enemyStats: enemyStatsReducer,
    footerEasterEgg: footerEasterEggReducer,

});

export default allReducers;