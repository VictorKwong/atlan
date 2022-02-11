import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanStatsFn } from './actions';
import { GotoWeaponEquipmentChoiceFn, GotoArmorEquipmentChoiceFn} from './actions'
import $ from 'jquery'
import './css/mapAltanEquipment.css'
// import useSound from 'use-sound';

import { STRPointsFn , AGIPointsFn , VITPointsFn , INTPointsFn , DEXPointsFn , LUKPointsFn } from './actions'

import UserStandPost from './img/Character/UserStand.png'
// WEAPON IMAGE
// import Katana from './img/Equipment/Weapon/Katana.gif'
// import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
// import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
// import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
// import VioletFear from './img/Equipment/Weapon/VioletFear.gif'

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
      <div className="AltanEquipmentMap">
        <h2>Status</h2>
        <img src={UserStandPost} alt="UserStandPost" />
        <p>STR {userAttribute.str} {((userAttribute.str <= 11 && userAttribute.Points >= 2) || (userAttribute.str <= 21 && userAttribute.Points >= 3) || (userAttribute.str <= 31 && userAttribute.Points >= 4) || (userAttribute.str <= 41 && userAttribute.Points >= 5) || (userAttribute.str <= 51 && userAttribute.Points >= 6) || (userAttribute.str <= 61 && userAttribute.Points >= 7) || (userAttribute.str <= 71 && userAttribute.Points >= 8) || (userAttribute.str <= 81 && userAttribute.Points >= 9) || (userAttribute.str <= 91 && userAttribute.Points >= 10) || (userAttribute.str <= 98 && userAttribute.Points >= 11)) ? <button onClick={
          userAttribute.str <= 11 ? () => dispatch(STRPointsFn(2)) : 
          userAttribute.str <= 21 ? () => dispatch(STRPointsFn(3)) :
          userAttribute.str <= 31 ? () => dispatch(STRPointsFn(4)) : 
          userAttribute.str <= 41 ? () => dispatch(STRPointsFn(5)) : 
          userAttribute.str <= 51 ? () => dispatch(STRPointsFn(6)) : 
          userAttribute.str <= 61 ? () => dispatch(STRPointsFn(7)) : 
          userAttribute.str <= 71 ? () => dispatch(STRPointsFn(8)) : 
          userAttribute.str <= 81 ? () => dispatch(STRPointsFn(9)) : 
          userAttribute.str <= 91 ? () => dispatch(STRPointsFn(10)) : 
          userAttribute.str <= 98 ? () => dispatch(STRPointsFn(11)) : null }>&gt;</button>: null} {
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
        <p>AGI {userAttribute.agi} {((userAttribute.agi <= 11 && userAttribute.Points >= 2) || (userAttribute.agi <= 21 && userAttribute.Points >= 3) || (userAttribute.agi <= 31 && userAttribute.Points >= 4) || (userAttribute.agi <= 41 && userAttribute.Points >= 5) || (userAttribute.agi <= 51 && userAttribute.Points >= 6) || (userAttribute.agi <= 61 && userAttribute.Points >= 7) || (userAttribute.agi <= 71 && userAttribute.Points >= 8) || (userAttribute.agi <= 81 && userAttribute.Points >= 9) || (userAttribute.agi <= 91 && userAttribute.Points >= 10) || (userAttribute.agi <= 98 && userAttribute.Points >= 11)) ? <button onClick={
          userAttribute.agi <= 11 ? () => dispatch(AGIPointsFn(2)) : 
          userAttribute.agi <= 21 ? () => dispatch(AGIPointsFn(3)) :
          userAttribute.agi <= 31 ? () => dispatch(AGIPointsFn(4)) : 
          userAttribute.agi <= 41 ? () => dispatch(AGIPointsFn(5)) : 
          userAttribute.agi <= 51 ? () => dispatch(AGIPointsFn(6)) : 
          userAttribute.agi <= 61 ? () => dispatch(AGIPointsFn(7)) : 
          userAttribute.agi <= 71 ? () => dispatch(AGIPointsFn(8)) : 
          userAttribute.agi <= 81 ? () => dispatch(AGIPointsFn(9)) : 
          userAttribute.agi <= 91 ? () => dispatch(AGIPointsFn(10)) : 
          userAttribute.agi <= 98 ? () => dispatch(AGIPointsFn(11)) : null }>&gt;</button>: null} {
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
        <p>VIT {userAttribute.vit} {((userAttribute.vit <= 11 && userAttribute.Points >= 2) || (userAttribute.vit <= 21 && userAttribute.Points >= 3) || (userAttribute.vit <= 31 && userAttribute.Points >= 4) || (userAttribute.vit <= 41 && userAttribute.Points >= 5) || (userAttribute.vit <= 51 && userAttribute.Points >= 6) || (userAttribute.vit <= 61 && userAttribute.Points >= 7) || (userAttribute.vit <= 71 && userAttribute.Points >= 8) || (userAttribute.vit <= 81 && userAttribute.Points >= 9) || (userAttribute.vit <= 91 && userAttribute.Points >= 10) || (userAttribute.vit <= 98 && userAttribute.Points >= 11)) ? <button onClick={
          userAttribute.vit <= 11 ? () => dispatch(VITPointsFn(2)) : 
          userAttribute.vit <= 21 ? () => dispatch(VITPointsFn(3)) :
          userAttribute.vit <= 31 ? () => dispatch(VITPointsFn(4)) : 
          userAttribute.vit <= 41 ? () => dispatch(VITPointsFn(5)) : 
          userAttribute.vit <= 51 ? () => dispatch(VITPointsFn(6)) : 
          userAttribute.vit <= 61 ? () => dispatch(VITPointsFn(7)) : 
          userAttribute.vit <= 71 ? () => dispatch(VITPointsFn(8)) : 
          userAttribute.vit <= 81 ? () => dispatch(VITPointsFn(9)) : 
          userAttribute.vit <= 91 ? () => dispatch(VITPointsFn(10)) : 
          userAttribute.vit <= 98 ? () => dispatch(VITPointsFn(11)) : null }>&gt;</button>: null} {
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
        <p>INT {userAttribute.int} {((userAttribute.int <= 11 && userAttribute.Points >= 2) || (userAttribute.int <= 21 && userAttribute.Points >= 3) || (userAttribute.int <= 31 && userAttribute.Points >= 4) || (userAttribute.int <= 41 && userAttribute.Points >= 5) || (userAttribute.int <= 51 && userAttribute.Points >= 6) || (userAttribute.int <= 61 && userAttribute.Points >= 7) || (userAttribute.int <= 71 && userAttribute.Points >= 8) || (userAttribute.int <= 81 && userAttribute.Points >= 9) || (userAttribute.int <= 91 && userAttribute.Points >= 10) || (userAttribute.int <= 98 && userAttribute.Points >= 11)) ? <button onClick={
          userAttribute.int <= 11 ? () => dispatch(INTPointsFn(2)) : 
          userAttribute.int <= 21 ? () => dispatch(INTPointsFn(3)) :
          userAttribute.int <= 31 ? () => dispatch(INTPointsFn(4)) : 
          userAttribute.int <= 41 ? () => dispatch(INTPointsFn(5)) : 
          userAttribute.int <= 51 ? () => dispatch(INTPointsFn(6)) : 
          userAttribute.int <= 61 ? () => dispatch(INTPointsFn(7)) : 
          userAttribute.int <= 71 ? () => dispatch(INTPointsFn(8)) : 
          userAttribute.int <= 81 ? () => dispatch(INTPointsFn(9)) : 
          userAttribute.int <= 91 ? () => dispatch(INTPointsFn(10)) : 
          userAttribute.int <= 98 ? () => dispatch(INTPointsFn(11)) : null }>&gt;</button>: null} {
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
        <p>DEX {userAttribute.dex} {((userAttribute.dex <= 11 && userAttribute.Points >= 2) || (userAttribute.dex <= 21 && userAttribute.Points >= 3) || (userAttribute.dex <= 31 && userAttribute.Points >= 4) || (userAttribute.dex <= 41 && userAttribute.Points >= 5) || (userAttribute.dex <= 51 && userAttribute.Points >= 6) || (userAttribute.dex <= 61 && userAttribute.Points >= 7) || (userAttribute.dex <= 71 && userAttribute.Points >= 8) || (userAttribute.dex <= 81 && userAttribute.Points >= 9) || (userAttribute.dex <= 91 && userAttribute.Points >= 10) || (userAttribute.dex <= 98 && userAttribute.Points >= 11)) ? <button onClick={
          userAttribute.dex <= 11 ? () => dispatch(DEXPointsFn(2)) : 
          userAttribute.dex <= 21 ? () => dispatch(DEXPointsFn(3)) :
          userAttribute.dex <= 31 ? () => dispatch(DEXPointsFn(4)) : 
          userAttribute.dex <= 41 ? () => dispatch(DEXPointsFn(5)) : 
          userAttribute.dex <= 51 ? () => dispatch(DEXPointsFn(6)) : 
          userAttribute.dex <= 61 ? () => dispatch(DEXPointsFn(7)) : 
          userAttribute.dex <= 71 ? () => dispatch(DEXPointsFn(8)) : 
          userAttribute.dex <= 81 ? () => dispatch(DEXPointsFn(9)) : 
          userAttribute.dex <= 91 ? () => dispatch(DEXPointsFn(10)) : 
          userAttribute.dex <= 98 ? () => dispatch(DEXPointsFn(11)) : null }>&gt;</button>: null} {
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
        <p>LUK {userAttribute.luk} {((userAttribute.luk <= 11 && userAttribute.Points >= 2) || (userAttribute.luk <= 21 && userAttribute.Points >= 3) || (userAttribute.luk <= 31 && userAttribute.Points >= 4) || (userAttribute.luk <= 41 && userAttribute.Points >= 5) || (userAttribute.luk <= 51 && userAttribute.Points >= 6) || (userAttribute.luk <= 61 && userAttribute.Points >= 7) || (userAttribute.luk <= 71 && userAttribute.Points >= 8) || (userAttribute.luk <= 81 && userAttribute.Points >= 9) || (userAttribute.luk <= 91 && userAttribute.Points >= 10) || (userAttribute.luk <= 98 && userAttribute.Points >= 11)) ? <button onClick={
          userAttribute.luk <= 11 ? () => dispatch(LUKPointsFn(2)) : 
          userAttribute.luk <= 21 ? () => dispatch(LUKPointsFn(3)) :
          userAttribute.luk <= 31 ? () => dispatch(LUKPointsFn(4)) : 
          userAttribute.luk <= 41 ? () => dispatch(LUKPointsFn(5)) : 
          userAttribute.luk <= 51 ? () => dispatch(LUKPointsFn(6)) : 
          userAttribute.luk <= 61 ? () => dispatch(LUKPointsFn(7)) : 
          userAttribute.luk <= 71 ? () => dispatch(LUKPointsFn(8)) : 
          userAttribute.luk <= 81 ? () => dispatch(LUKPointsFn(9)) : 
          userAttribute.luk <= 91 ? () => dispatch(LUKPointsFn(10)) : 
          userAttribute.luk <= 98 ? () => dispatch(LUKPointsFn(11)) : null }>&gt;</button>: null} {
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
        <p>STATUS POINTS {userAttribute.Points}</p>
        <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanStatsFn());}}>back</button>
      </div>
    );
}

export default StartMenu;