import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanEquipmentFn } from './actions';
import { GotoWeaponEquipmentChoiceFn, GotoArmorEquipmentChoiceFn, GotoHeadGearEquipmentChoiceFn} from './actions'
import $ from 'jquery'
import Prontera from './Prontera'
import './css/mapAltanEquipment.css'
// import useSound from 'use-sound';

import UserStandPost from './img/Character/UserStand.png'
// WEAPON IMAGE
// import Katana from './img/Equipment/Weapon/Katana.gif'
// import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
// import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
// import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
// import VioletFear from './img/Equipment/Weapon/VioletFear.gif'

import Katana from './img/Equipment/Weapon/Katana.gif'
import CottonShirt from './img/Equipment/Armor/CottonShirt.gif'

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
    
    let GotoList = [
      {id:90001, name:userStats.userWeapon, DirectTo: GotoWeaponEquipmentChoiceFn(), Img:userStats.userWeaponImg, preload: Katana},
      {id:90002, name:userStats.userArmor, DirectTo: GotoArmorEquipmentChoiceFn(), Img:userStats.userArmorImg, preload: CottonShirt},
      {id:90003, name:userStats.userHeadGear, DirectTo: GotoHeadGearEquipmentChoiceFn(), Img:userStats.userHeadGearImg, preload: ''},
    ]

    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanEquipmentMap">
        <h2>Equipment</h2>
        <img src={UserStandPost} alt="UserStandPost" />

        {GotoList.map(Equip => {
          return(
            <div key={Equip.id}>
              <button value={Equip.name} onClick={() => dispatch(Equip.DirectTo)}><img src={Equip.Img === null ? Equip.preload : Equip.Img} alt={Equip.name} />{Equip.name === null ? `Empty` : Equip.name}</button>
            </div>
          )
        })}
        {/* <button className="altanChooseWeapon" value={userStats.userWeapon} onClick={() => dispatch(GotoWeaponEquipmentChoiceFn())}><img src={userStats.userWeaponImg === null ? Katana : userStats.userWeaponImg} alt={userStats.userWeapon} />{userStats.userWeapon}</button>
        <button className="altanChooseArmor" value={userStats.userArmor} onClick={() => dispatch(GotoArmorEquipmentChoiceFn())}><img src={userStats.userArmorImg === null ? CottonShirt : userStats.userArmorImg} alt={userStats.userArmor} />{userStats.userArmor}</button>
        <button className="altanChooseHeadGear" value={userStats.userArmor} onClick={() => dispatch(GotoHeadGearEquipmentChoiceFn())}><img src={userStats.userArmorImg === null ? CottonShirt : userStats.userArmorImg} alt={userStats.userArmor} />{userStats.userArmor}</button> */}
        <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>back</button>
      </div>
    );
}

export default StartMenu;