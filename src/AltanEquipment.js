import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanEquipmentFn , GotoImageEquipmentFn} from './actions';
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

import UserSitPost from './img/Character/UserSit.png'
import UserSit_LordKahosHorn from './img/Character/UserSit_LordKahosHorn.png'
import UserSit_TeddybearHat from './img/Character/UserSit_TeddybearHat.png'
import UserSit_Crown from './img/Character/UserSit_Crown.png'
import UserSit_Helm from './img/Character/UserSit_Helm.png'
import UserSit_PandaHat from './img/Character/UserSit_PandaHat.png'
import UserSit_ChefHat from './img/Character/UserSit_ChefHat.png'
import UserSit_SantaPoringHat from './img/Character/UserSit_SantaPoringHat.png'

import UserStand2Post from './img/Character/UserStand2.png'
import UserStand2_LordKahosHorn from './img/Character/UserStand2_LordKahosHorn.png'
import UserStand2_TeddybearHat from './img/Character/UserStand2_TeddybearHat.png'
import UserStand2_Crown from './img/Character/UserStand2_Crown.png'
import UserStand2_Helm from './img/Character/UserStand2_Helm.png'
import UserStand2_PandaHat from './img/Character/UserStand2_PandaHat.png'
import UserStand2_ChefHat from './img/Character/UserStand2_ChefHat.png'
import UserStand2_SantaPoringHat from './img/Character/UserStand2_SantaPoringHat.png'

import UserStand3Post from './img/Character/UserStand3.png'
import UserStand3_LordKahosHorn from './img/Character/UserStand3_LordKahosHorn.png'
import UserStand3_TeddybearHat from './img/Character/UserStand3_TeddybearHat.png'
import UserStand3_Crown from './img/Character/UserStand3_Crown.png'
import UserStand3_Helm from './img/Character/UserStand3_Helm.png'
import UserStand3_PandaHat from './img/Character/UserStand3_PandaHat.png'
import UserStand3_ChefHat from './img/Character/UserStand3_ChefHat.png'
import UserStand3_SantaPoringHat from './img/Character/UserStand3_SantaPoringHat.png'
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

    let UserDisplay = [
      {id:0, name:"Lord Kaho`s Horn", img0:UserStand_LordKahosHorn , img1:UserSit_LordKahosHorn, img2:UserStand2_LordKahosHorn, img3:UserStand3_LordKahosHorn, explain:"User_LordKahosHorn" },
      {id:1, name:"Teddybear Hat", img0:UserStand_TeddybearHat , img1:UserSit_TeddybearHat, img2:UserStand2_TeddybearHat, img3:UserStand3_TeddybearHat, explain:"User_TeddybearHat" },
      {id:2, name:"Crown", img0:UserStand_Crown , img1:UserSit_Crown, img2:UserStand2_Crown, img3:UserStand3_Crown, explain:"User_Crown" },
      {id:3, name:"Helm", img0:UserStand_Helm , img1:UserSit_Helm, img2:UserStand2_Helm, img3:UserStand3_Helm, explain:"User_Helm" },
      {id:4, name:"Panda Hat", img0:UserStand_PandaHat , img1:UserSit_PandaHat, img2:UserStand2_PandaHat, img3:UserStand3_PandaHat, explain:"User_PandaHat" },
      {id:5, name:"Chef Hat", img0:UserStand_ChefHat , img1:UserSit_ChefHat, img2:UserStand2_ChefHat, img3:UserStand3_ChefHat, explain:"User_ChefHat" },
      {id:6, name:"Santa Poring Hat", img0:UserStand_SantaPoringHat , img1:UserSit_SantaPoringHat, img2:UserStand2_SantaPoringHat, img3:UserStand3_SantaPoringHat, explain:"User_SantaPoringHat" },
      {id:7, name:null, img0:UserStandPost , img1:UserSitPost, img2:UserStand2Post, img3:UserStand3Post, explain:"UserPost" },
    ]


    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanEquipmentMap">
        <h2 className="altanEquipTitle">Equipment</h2>
        <div className="equipBox">
        {UserDisplay.map(Image => {
          return(
            <div key={Image.id} className={userStats.userHeadGear === Image.name ? null : 'displayNone'}>
            {userStats.userHeadGear === Image.name ? <img src={(Math.random() <= 0.25) && screenControlRoom.ImageEquipment ? Image.img3 :(Math.random() <= 0.25) && screenControlRoom.ImageEquipment ? Image.img2 : (Math.random() <= 0.25) && screenControlRoom.ImageEquipment ? Image.img1 : Image.img0} alt={Image.explain} className="ImgStandEquip" onClick={() => {dispatch(GotoImageEquipmentFn());}}/> :null}
            </div>
          )
        })}
        {/* {userStats.userHeadGear === "Lord Kaho`s Horn" ? <img src={UserStand_LordKahosHorn} alt="User_LordKahosHorn" className="ImgStandEquip"/> : 
        userStats.userHeadGear === "Teddybear Hat" ? <img src={UserStand_TeddybearHat} alt="User_TeddybearHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Crown" ? <img src={UserStand_Crown} alt="User_Crown" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Helm" ? <img src={UserStand_Helm} alt="User_Helm" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Panda Hat" ? <img src={UserStand_PandaHat} alt="User_PandaHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Chef Hat" ? <img src={UserStand_ChefHat} alt="User_ChefHat" className="ImgStandEquip"/> :
        userStats.userHeadGear === "Santa Poring Hat" ? <img src={UserStand_SantaPoringHat} alt="User_SantaPoringHat" className="ImgStandEquip"/> : 
        <img src={UserStandPost} alt="UserStandPost" className="ImgStandEquip"/>} */}

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