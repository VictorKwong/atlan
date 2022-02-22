import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanStatsFn } from './actions';
import { GotoWeaponEquipmentChoiceFn, GotoArmorEquipmentChoiceFn} from './actions'
import $ from 'jquery'
import './css/mapAltanStats.css'
// import useSound from 'use-sound';

import { STRPointsFn , AGIPointsFn , VITPointsFn , INTPointsFn , DEXPointsFn , LUKPointsFn } from './actions'

import UserStandPost from './img/Character/UserStand.png'
import UserStand_LordKahosHorn from './img/Character/UserStand_LordKahosHorn.png'
import UserStand_TeddybearHat from './img/Character/UserStand_TeddybearHat.png'
import UserStand_Crown from './img/Character/UserStand_Crown.png'
import UserStand_Helm from './img/Character/UserStand_Helm.png'
import UserStand_PandaHat from './img/Character/UserStand_PandaHat.png'
import UserStand_ChefHat from './img/Character/UserStand_ChefHat.png'
import UserStand_SantaPoringHat from './img/Character/UserStand_SantaPoringHat.png'

// AudioCurrentTimeSaverFn
function StartMenu(){
  
    console.log('rerender')
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanStatsMap">
        <h2 className="altanStatsTitle">Status</h2>
        <div className="statsBox">
        {userStats.userHeadGear === "Lord Kaho`s Horn" ? <img src={UserStand_LordKahosHorn} alt="UserStand_LordKahosHorn" className="ImgStandEquip"/> : 
        userStats.userHeadGear === "Teddybear Hat" ? <img src={UserStand_TeddybearHat} alt="UserStand_TeddybearHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Crown" ? <img src={UserStand_Crown} alt="UserStand_Crown" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Helm" ? <img src={UserStand_Helm} alt="UserStand_Helm" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Panda Hat" ? <img src={UserStand_PandaHat} alt="UserStand_PandaHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Chef Hat" ? <img src={UserStand_ChefHat} alt="UserStand_ChefHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Santa Poring Hat" ? <img src={UserStand_SantaPoringHat} alt="UserStand_SantaPoringHat" className="ImgStandEquip"/> : 
        <img src={UserStandPost} alt="UserStandPost" className="ImgStandEquip"/>}
        <div className="statsDescript">
        <p className="str1">STR </p> <p className="str2">{userAttribute.str} </p>
        {((userAttribute.str <= 11 && userAttribute.Points >= 2) || (userAttribute.str <= 21 && userAttribute.Points >= 3) || (userAttribute.str <= 31 && userAttribute.Points >= 4) || (userAttribute.str <= 41 && userAttribute.Points >= 5) || (userAttribute.str <= 51 && userAttribute.Points >= 6) || (userAttribute.str <= 61 && userAttribute.Points >= 7) || (userAttribute.str <= 71 && userAttribute.Points >= 8) || (userAttribute.str <= 81 && userAttribute.Points >= 9) || (userAttribute.str <= 91 && userAttribute.Points >= 10) || (userAttribute.str <= 98 && userAttribute.Points >= 11)) ? <button className="str3 altanStatsButton" onClick={
          userAttribute.str <= 11 ? () => dispatch(STRPointsFn(2)) : 
          userAttribute.str <= 21 ? () => dispatch(STRPointsFn(3)) :
          userAttribute.str <= 31 ? () => dispatch(STRPointsFn(4)) : 
          userAttribute.str <= 41 ? () => dispatch(STRPointsFn(5)) : 
          userAttribute.str <= 51 ? () => dispatch(STRPointsFn(6)) : 
          userAttribute.str <= 61 ? () => dispatch(STRPointsFn(7)) : 
          userAttribute.str <= 71 ? () => dispatch(STRPointsFn(8)) : 
          userAttribute.str <= 81 ? () => dispatch(STRPointsFn(9)) : 
          userAttribute.str <= 91 ? () => dispatch(STRPointsFn(10)) : 
          userAttribute.str <= 98 ? () => dispatch(STRPointsFn(11)) : null }>&gt;</button>: null} <p className="str4">{
          userAttribute.str <= 11 ? 2 : 
          userAttribute.str <= 21 ? 3 :
          userAttribute.str <= 31 ? 4 : 
          userAttribute.str <= 41 ? 5 : 
          userAttribute.str <= 51 ? 6 : 
          userAttribute.str <= 61 ? 7 : 
          userAttribute.str <= 71 ? 8 : 
          userAttribute.str <= 81 ? 9 : 
          userAttribute.str <= 91 ? 10 : 
          userAttribute.str <= 98 ? 11 : 12 }</p>
        <p className="agi5">AGI </p>
        <p className="agi6">{userAttribute.agi}</p> {((userAttribute.agi <= 11 && userAttribute.Points >= 2) || (userAttribute.agi <= 21 && userAttribute.Points >= 3) || (userAttribute.agi <= 31 && userAttribute.Points >= 4) || (userAttribute.agi <= 41 && userAttribute.Points >= 5) || (userAttribute.agi <= 51 && userAttribute.Points >= 6) || (userAttribute.agi <= 61 && userAttribute.Points >= 7) || (userAttribute.agi <= 71 && userAttribute.Points >= 8) || (userAttribute.agi <= 81 && userAttribute.Points >= 9) || (userAttribute.agi <= 91 && userAttribute.Points >= 10) || (userAttribute.agi <= 98 && userAttribute.Points >= 11)) ? <button className="agi7 altanStatsButton" onClick={
          userAttribute.agi <= 11 ? () => dispatch(AGIPointsFn(2)) : 
          userAttribute.agi <= 21 ? () => dispatch(AGIPointsFn(3)) :
          userAttribute.agi <= 31 ? () => dispatch(AGIPointsFn(4)) : 
          userAttribute.agi <= 41 ? () => dispatch(AGIPointsFn(5)) : 
          userAttribute.agi <= 51 ? () => dispatch(AGIPointsFn(6)) : 
          userAttribute.agi <= 61 ? () => dispatch(AGIPointsFn(7)) : 
          userAttribute.agi <= 71 ? () => dispatch(AGIPointsFn(8)) : 
          userAttribute.agi <= 81 ? () => dispatch(AGIPointsFn(9)) : 
          userAttribute.agi <= 91 ? () => dispatch(AGIPointsFn(10)) : 
          userAttribute.agi <= 98 ? () => dispatch(AGIPointsFn(11)) : null }>&gt;</button>: null} <p className="agi8">{
          userAttribute.agi <= 11 ? 2 : 
          userAttribute.agi <= 21 ? 3 :
          userAttribute.agi <= 31 ? 4 : 
          userAttribute.agi <= 41 ? 5 : 
          userAttribute.agi <= 51 ? 6 : 
          userAttribute.agi <= 61 ? 7 : 
          userAttribute.agi <= 71 ? 8 : 
          userAttribute.agi <= 81 ? 9 : 
          userAttribute.agi <= 91 ? 10 : 
          userAttribute.agi <= 98 ? 11 : 12 }</p> 
        <p className="vit9">VIT </p>
        <p className="vit10">{userAttribute.vit}</p> {((userAttribute.vit <= 11 && userAttribute.Points >= 2) || (userAttribute.vit <= 21 && userAttribute.Points >= 3) || (userAttribute.vit <= 31 && userAttribute.Points >= 4) || (userAttribute.vit <= 41 && userAttribute.Points >= 5) || (userAttribute.vit <= 51 && userAttribute.Points >= 6) || (userAttribute.vit <= 61 && userAttribute.Points >= 7) || (userAttribute.vit <= 71 && userAttribute.Points >= 8) || (userAttribute.vit <= 81 && userAttribute.Points >= 9) || (userAttribute.vit <= 91 && userAttribute.Points >= 10) || (userAttribute.vit <= 98 && userAttribute.Points >= 11)) ? <button className="vit11 altanStatsButton" onClick={
          userAttribute.vit <= 11 ? () => dispatch(VITPointsFn(2,userAttribute.vit)) : 
          userAttribute.vit <= 21 ? () => dispatch(VITPointsFn(3,userAttribute.vit)) :
          userAttribute.vit <= 31 ? () => dispatch(VITPointsFn(4,userAttribute.vit)) : 
          userAttribute.vit <= 41 ? () => dispatch(VITPointsFn(5,userAttribute.vit)) : 
          userAttribute.vit <= 51 ? () => dispatch(VITPointsFn(6,userAttribute.vit)) : 
          userAttribute.vit <= 61 ? () => dispatch(VITPointsFn(7,userAttribute.vit)) : 
          userAttribute.vit <= 71 ? () => dispatch(VITPointsFn(8,userAttribute.vit)) : 
          userAttribute.vit <= 81 ? () => dispatch(VITPointsFn(9,userAttribute.vit)) : 
          userAttribute.vit <= 91 ? () => dispatch(VITPointsFn(10,userAttribute.vit)) : 
          userAttribute.vit <= 98 ? () => dispatch(VITPointsFn(11,userAttribute.vit)) : null }>&gt;</button>: null} <p className="vit12">{
          userAttribute.vit <= 11 ? 2 : 
          userAttribute.vit <= 21 ? 3 :
          userAttribute.vit <= 31 ? 4 : 
          userAttribute.vit <= 41 ? 5 : 
          userAttribute.vit <= 51 ? 6 : 
          userAttribute.vit <= 61 ? 7 : 
          userAttribute.vit <= 71 ? 8 : 
          userAttribute.vit <= 81 ? 9 : 
          userAttribute.vit <= 91 ? 10 : 
          userAttribute.vit <= 98 ? 11 : 12 }</p> 
        <p className="int13">INT </p>
        <p className="int14">{userAttribute.int}</p>{((userAttribute.int <= 11 && userAttribute.Points >= 2) || (userAttribute.int <= 21 && userAttribute.Points >= 3) || (userAttribute.int <= 31 && userAttribute.Points >= 4) || (userAttribute.int <= 41 && userAttribute.Points >= 5) || (userAttribute.int <= 51 && userAttribute.Points >= 6) || (userAttribute.int <= 61 && userAttribute.Points >= 7) || (userAttribute.int <= 71 && userAttribute.Points >= 8) || (userAttribute.int <= 81 && userAttribute.Points >= 9) || (userAttribute.int <= 91 && userAttribute.Points >= 10) || (userAttribute.int <= 98 && userAttribute.Points >= 11)) ? <button className="int15 altanStatsButton" onClick={
          userAttribute.int <= 11 ? () => dispatch(INTPointsFn(2,userAttribute.int)) : 
          userAttribute.int <= 21 ? () => dispatch(INTPointsFn(3,userAttribute.int)) :
          userAttribute.int <= 31 ? () => dispatch(INTPointsFn(4,userAttribute.int)) : 
          userAttribute.int <= 41 ? () => dispatch(INTPointsFn(5,userAttribute.int)) : 
          userAttribute.int <= 51 ? () => dispatch(INTPointsFn(6,userAttribute.int)) : 
          userAttribute.int <= 61 ? () => dispatch(INTPointsFn(7,userAttribute.int)) : 
          userAttribute.int <= 71 ? () => dispatch(INTPointsFn(8,userAttribute.int)) : 
          userAttribute.int <= 81 ? () => dispatch(INTPointsFn(9,userAttribute.int)) : 
          userAttribute.int <= 91 ? () => dispatch(INTPointsFn(10,userAttribute.int)) : 
          userAttribute.int <= 98 ? () => dispatch(INTPointsFn(11,userAttribute.int)) : null }>&gt;</button>: null} <p className="int16">{
          userAttribute.int <= 11 ? 2 : 
          userAttribute.int <= 21 ? 3 :
          userAttribute.int <= 31 ? 4 : 
          userAttribute.int <= 41 ? 5 : 
          userAttribute.int <= 51 ? 6 : 
          userAttribute.int <= 61 ? 7 : 
          userAttribute.int <= 71 ? 8 : 
          userAttribute.int <= 81 ? 9 : 
          userAttribute.int <= 91 ? 10 : 
          userAttribute.int <= 98 ? 11 : 12 }</p> 
        <p className="dex17">DEX </p>
        <p className="dex18">{userAttribute.dex}</p>{((userAttribute.dex <= 11 && userAttribute.Points >= 2) || (userAttribute.dex <= 21 && userAttribute.Points >= 3) || (userAttribute.dex <= 31 && userAttribute.Points >= 4) || (userAttribute.dex <= 41 && userAttribute.Points >= 5) || (userAttribute.dex <= 51 && userAttribute.Points >= 6) || (userAttribute.dex <= 61 && userAttribute.Points >= 7) || (userAttribute.dex <= 71 && userAttribute.Points >= 8) || (userAttribute.dex <= 81 && userAttribute.Points >= 9) || (userAttribute.dex <= 91 && userAttribute.Points >= 10) || (userAttribute.dex <= 98 && userAttribute.Points >= 11)) ? <button className="dex19 altanStatsButton" onClick={
          userAttribute.dex <= 11 ? () => dispatch(DEXPointsFn(2)) : 
          userAttribute.dex <= 21 ? () => dispatch(DEXPointsFn(3)) :
          userAttribute.dex <= 31 ? () => dispatch(DEXPointsFn(4)) : 
          userAttribute.dex <= 41 ? () => dispatch(DEXPointsFn(5)) : 
          userAttribute.dex <= 51 ? () => dispatch(DEXPointsFn(6)) : 
          userAttribute.dex <= 61 ? () => dispatch(DEXPointsFn(7)) : 
          userAttribute.dex <= 71 ? () => dispatch(DEXPointsFn(8)) : 
          userAttribute.dex <= 81 ? () => dispatch(DEXPointsFn(9)) : 
          userAttribute.dex <= 91 ? () => dispatch(DEXPointsFn(10)) : 
          userAttribute.dex <= 98 ? () => dispatch(DEXPointsFn(11)) : null }>&gt;</button>: null} <p className="dex20">{
          userAttribute.dex <= 11 ? 2 : 
          userAttribute.dex <= 21 ? 3 :
          userAttribute.dex <= 31 ? 4 : 
          userAttribute.dex <= 41 ? 5 : 
          userAttribute.dex <= 51 ? 6 : 
          userAttribute.dex <= 61 ? 7 : 
          userAttribute.dex <= 71 ? 8 : 
          userAttribute.dex <= 81 ? 9 : 
          userAttribute.dex <= 91 ? 10 : 
          userAttribute.dex <= 98 ? 11 : 12 }</p> 
        <p className="luk21">LUK </p>
        <p className="luk22">{userAttribute.luk}</p> {((userAttribute.luk <= 11 && userAttribute.Points >= 2) || (userAttribute.luk <= 21 && userAttribute.Points >= 3) || (userAttribute.luk <= 31 && userAttribute.Points >= 4) || (userAttribute.luk <= 41 && userAttribute.Points >= 5) || (userAttribute.luk <= 51 && userAttribute.Points >= 6) || (userAttribute.luk <= 61 && userAttribute.Points >= 7) || (userAttribute.luk <= 71 && userAttribute.Points >= 8) || (userAttribute.luk <= 81 && userAttribute.Points >= 9) || (userAttribute.luk <= 91 && userAttribute.Points >= 10) || (userAttribute.luk <= 98 && userAttribute.Points >= 11)) ? <button className="luk23 altanStatsButton" onClick={
          userAttribute.luk <= 11 ? () => dispatch(LUKPointsFn(2)) : 
          userAttribute.luk <= 21 ? () => dispatch(LUKPointsFn(3)) :
          userAttribute.luk <= 31 ? () => dispatch(LUKPointsFn(4)) : 
          userAttribute.luk <= 41 ? () => dispatch(LUKPointsFn(5)) : 
          userAttribute.luk <= 51 ? () => dispatch(LUKPointsFn(6)) : 
          userAttribute.luk <= 61 ? () => dispatch(LUKPointsFn(7)) : 
          userAttribute.luk <= 71 ? () => dispatch(LUKPointsFn(8)) : 
          userAttribute.luk <= 81 ? () => dispatch(LUKPointsFn(9)) : 
          userAttribute.luk <= 91 ? () => dispatch(LUKPointsFn(10)) : 
          userAttribute.luk <= 98 ? () => dispatch(LUKPointsFn(11)) : null }>&gt;</button>: null} <p className="luk24">{
          userAttribute.luk <= 11 ? 2 : 
          userAttribute.luk <= 21 ? 3 :
          userAttribute.luk <= 31 ? 4 : 
          userAttribute.luk <= 41 ? 5 : 
          userAttribute.luk <= 51 ? 6 : 
          userAttribute.luk <= 61 ? 7 : 
          userAttribute.luk <= 71 ? 8 : 
          userAttribute.luk <= 81 ? 9 : 
          userAttribute.luk <= 91 ? 10 : 
          userAttribute.luk <= 98 ? 11 : 12 }</p> 
          <p className="stats25">POINTS {userAttribute.Points}</p>
        </div>
        {/* <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p>
        <p>sadas</p> */}
        </div>
        <div className="statsDescriptDetails">
            <p className="hp1">HP</p>
            <p className="hp2">{Math.floor(userStats.currentHealth)}/{Math.floor(userStats.maxHealth)}</p>
            <p className="sp3">SP</p>
            <p className="sp4">{Math.floor(userStats.currentSP)}/{Math.floor(userStats.maxSP)}</p>
            <p className="atk1">Atk</p>
            <p className="atk2">{Math.floor(userStats.attack)} + {userStats.BaseWeaponDamage}</p>
            <p className="def3">Def</p>
            <p className="def4">{Math.floor(userStats.defence)} + {userStats.BaseHeadGearDef + userStats.BaseArmorDef}</p>
            <p className="hit5">Hit</p>
            <p className="hit6">{Math.floor(userStats.hitRate *100)}</p>
            <p className="fle7">Flee</p>
            <p className="fle8">{Math.floor(userStats.dodgeRate *100)}</p>
            <p className="crit9">Crit</p>
            <p className="crit10">{Math.floor(userStats.critRate *100)}</p>
            <p className="aspd11">Aspd</p>
            <p className="aspd12">{Math.floor(userStats.speed)}</p>
        </div>
        <div className="statsBackPosition">
          <button className="altanStatsButton statsBackButtonPosition" onClick={() =>{dispatch(GotoAltanStatsFn());}}>back</button>
        </div>
      </div>
    );
}

export default StartMenu;