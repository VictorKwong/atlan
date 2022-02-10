import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanEquipmentFn } from './actions';
import { GotoWeaponEquipmentChoiceFn } from './actions'
import $ from 'jquery'
import Prontera from './Prontera'
import './css/mapAltanEquipment.css'
// import useSound from 'use-sound';

import UserStandPost from './img/Character/UserStand.png'

// AudioCurrentTimeSaverFn
function StartMenu(){
    console.log('rerender')
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanEquipmentMap">
        <h2>Equipment</h2>
        <img src={UserStandPost} alt="UserStandPost" />
        <button className="altanChooseWeapon" onClick={() => dispatch(GotoWeaponEquipmentChoiceFn())}>Weapon</button>
        <button>Armor</button>
        <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>back</button>
      </div>
    );
}

export default StartMenu;