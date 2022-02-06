import lifePotionReducer from "./lifePotion";
import loggedReducer from "./isLogged";
import userStatsReducer from "./userStats";
import userAttributeReducer from "./userAttribute"
import userGoldReducer from "./userGold";
import footerEasterEggReducer from "./footerEasterEgg"
import screenControlRoomReducer from "./screenControlRoom";
import ImageControlRoomReducer from "./ImageControlRoom";
import storyLineOneReducer from "./storyLineOne";
import textReadAndSpeedReducer from "./textReadAndSpeed";


import enemyStatsReducer from "./enemyStats";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    screenControlRoom: screenControlRoomReducer,
    ImageControlRoom: ImageControlRoomReducer,
    storyLineOne: storyLineOneReducer,
    textReadAndSpeed: textReadAndSpeedReducer,
    lifePotion: lifePotionReducer,
    isLogged: loggedReducer,
    userStats: userStatsReducer,
    userAttribute: userAttributeReducer,
    userGold: userGoldReducer,
    enemyStats: enemyStatsReducer,
    footerEasterEgg: footerEasterEggReducer,

});

export default allReducers;