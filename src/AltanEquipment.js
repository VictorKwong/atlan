import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanEquipmentFn } from './actions';
import { GotoWeaponEquipmentChoiceFn, GotoArmorEquipmentChoiceFn, GotoHeadGearEquipmentChoiceFn} from './actions'
import './css/mapAltanEquipment.css'
// import useSound from 'use-sound';

import UserStandPost from './img/Character/UserStand.png'
import UserStand_LordKahosHorn from './img/Character/UserStand_LordKahosHorn.png'
import UserStand_TeddybearHat from './img/Character/UserStand_TeddybearHat.png'
import UserStand_Crown from './img/Character/UserStand_Crown.png'
import UserStand_Helm from './img/Character/UserStand_Helm.png'
import UserStand_PandaHat from './img/Character/UserStand_PandaHat.png'
import UserStand_ChefHat from './img/Character/UserStand_ChefHat.png'
import UserStand_SantaPoringHat from './img/Character/UserStand_SantaPoringHat.png'

// WEAPON IMAGE
// import Katana from './img/Equipment/Weapon/Katana.gif'
// import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
// import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
// import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
// import VioletFear from './img/Equipment/Weapon/VioletFear.gif'

import Katana from './img/Equipment/Weapon/Katana.gif'
import CottonShirt from './img/Equipment/Armor/CottonShirt.gif'

function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    let GotoList = [
      {id:90001, name:userStats.userWeapon, DirectTo: GotoWeaponEquipmentChoiceFn(), Img:userStats.userWeaponImg, preload: Katana, wordDisplay:"Weapon:"},
      {id:90002, name:userStats.userArmor, DirectTo: GotoArmorEquipmentChoiceFn(), Img:userStats.userArmorImg, preload: CottonShirt, wordDisplay:"Armor:"},
      {id:90003, name:userStats.userHeadGear, DirectTo: GotoHeadGearEquipmentChoiceFn(), Img:userStats.userHeadGearImg, preload: '', wordDisplay:"HeadGear:"},
    ]

    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanEquipmentMap">
        <h2 className="altanEquipTitle">Equipment</h2>
        <div className="equipBox">
        {userStats.userHeadGear === "Lord Kaho`s Horn" ? <img src={UserStand_LordKahosHorn} alt="UserStand_LordKahosHorn" className="ImgStandEquip"/> : 
        userStats.userHeadGear === "Teddybear Hat" ? <img src={UserStand_TeddybearHat} alt="UserStand_TeddybearHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Crown" ? <img src={UserStand_Crown} alt="UserStand_Crown" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Helm" ? <img src={UserStand_Helm} alt="UserStand_Helm" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Panda Hat" ? <img src={UserStand_PandaHat} alt="UserStand_PandaHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Chef Hat" ? <img src={UserStand_ChefHat} alt="UserStand_ChefHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Santa Poring Hat" ? <img src={UserStand_SantaPoringHat} alt="UserStand_SantaPoringHat" className="ImgStandEquip"/> : 
        <img src={UserStandPost} alt="UserStandPost" className="ImgStandEquip"/>}

        <div className="equipDescript">
        {GotoList.map(Equip => {
          return(
            <div key={Equip.id} className="descriptBox">
              <p className="equipWording">{Equip.wordDisplay}</p>
              <button value={Equip.name} onClick={() => dispatch(Equip.DirectTo)} className="altanEquipmentGearButton altanEquipmentButtonFix">
                <div className="adjImgCenterBox">
                    <p className="adjImgCenter"><img src={Equip.Img === 'initial' ? Equip.preload : Equip.Img === null ? '' : Equip.Img} alt={Equip.Img === null ? '' : Equip.name} />{Equip.name === null ? `Empty` : Equip.name}</p> 
                </div>
                </button>
            </div>
          )
        })}
        </div>
        {/* <button className="altanChooseWeapon" value={userStats.userWeapon} onClick={() => dispatch(GotoWeaponEquipmentChoiceFn())}><img src={userStats.userWeaponImg === null ? Katana : userStats.userWeaponImg} alt={userStats.userWeapon} />{userStats.userWeapon}</button>
        <button className="altanChooseArmor" value={userStats.userArmor} onClick={() => dispatch(GotoArmorEquipmentChoiceFn())}><img src={userStats.userArmorImg === null ? CottonShirt : userStats.userArmorImg} alt={userStats.userArmor} />{userStats.userArmor}</button>
        <button className="altanChooseHeadGear" value={userStats.userArmor} onClick={() => dispatch(GotoHeadGearEquipmentChoiceFn())}><img src={userStats.userArmorImg === null ? CottonShirt : userStats.userArmorImg} alt={userStats.userArmor} />{userStats.userArmor}</button> */}
        </div>
        <div className="equipBackPosition">
          <button className="altanEquipmentGearButton equipBackButtonPosition" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>back</button>
        </div>
      </div>
    );
}

export default StartMenu;