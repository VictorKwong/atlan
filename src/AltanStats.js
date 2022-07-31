import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanStatsFn, GotoImageEquipmentFn } from './actions';
import './css/mapAltanStats.css'

import { STRPointsFn , AGIPointsFn , VITPointsFn , INTPointsFn , DEXPointsFn , LUKPointsFn } from './actions'
import { GotoStatsChoiceFn , GotoSkillChoiceFn , GotoGuildChoiceFn } from './actions'

//Skills
import { UserSkillFirstAidFn } from './actions'

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
//SKILLS
import skillFirstAid from './img/Skill/nv_firstaid.gif'
import skillBash from './img/Skill/sm_bash.gif'
import skillMammonite from './img/Skill/mc_mammonite.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillHeadCrush from './img/Skill/lk_headcrush.gif'
import skillKodoku from './img/Skill/pr_kodoku.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
import skillBowlingBash from './img/Skill/sm_blowingbash.gif'

function StartMenu(){
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    const dispatch = useDispatch();
    let SkillBox = [
      //1,5,20,35,70
      {id:20000, Img:skillFirstAid, name:"First Aid", skillLevelCheck:1, title:"SP:30, Heal small amount of health", Activate:UserSkillFirstAidFn()},
      {id:20001, Img:skillBash, name:"Bash", skillLevelCheck:1, title:"Deal damage to enemy"},
      {id:20002, Img:skillMammonite, name:"Mammonite", skillLevelCheck:1, title:"Deal small amount damage to enemy and recieved zeny"},
      {id:20003, Img:skillKodoku, name:"Kodoku", skillLevelCheck:1, title:"Make target enemy become poison for 5 rounds"},
      {id:20004, Img:skillMagnum, name:"Magnum Break", skillLevelCheck:1, title:"Deal damage to enemy"},
      {id:20005, Img:skillHeadCrush, name:"Head Crush", skillLevelCheck:1, title:"Deal damage to enemy"},
      {id:20006, Img:skillQuicken, name:"Quicken", skillLevelCheck:1, title:"Increase speed by 10 for 5 turns"},
      {id:20007, Img:skillBowlingBash, name:"BowlingBash", skillLevelCheck:1, title:"Deal damage to enemy"},
    ]
    let GuildBox = [
      {id:100, Img:skillBash, name:"Bash", skillLevelCheck:1, title:"Deal Damage to enemy"},
      {id:101, Img:skillMagnum, name:"Magnum Break", skillLevelCheck:1, title:"Deal Damage to enemy"},
      {id:102, Img:skillQuicken, name:"Quicken", skillLevelCheck:1, title:"Increase speed by 10 for 5 turns"},
      {id:103, Img:skillBowlingBash, name:"BowlingBash", skillLevelCheck:1, title:"Deal Damage to enemy"},
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

    return(
      <div className="AltanStatsMap">
        <h2 className="altanStatsTitle">Status</h2>
        <button className={screenControlRoom.StatsChoice ? "StatusSelectionButton StatusSelctionButtonBeingSelect" : "StatusSelectionButton"} onClick={() => dispatch(GotoStatsChoiceFn())}>Stats</button>
        <button className={screenControlRoom.SkillChoice ? "StatusSelectionButton StatusSelctionButtonBeingSelect" : "StatusSelectionButton"} onClick={() => dispatch(GotoSkillChoiceFn())}>Skill</button>
        <button className={screenControlRoom.GuildChoice ? "StatusSelectionButton StatusSelctionButtonBeingSelect" : "StatusSelectionButton"} onClick={() => dispatch(GotoGuildChoiceFn())}>Guild</button>
        {screenControlRoom.StatsChoice ?
        <div className="statsBoxDisplay">
          <div className="statsBox">
          {UserDisplay.map(Image => {
            return(
              <div key={Image.id} className={userStats.userHeadGear === Image.name ? null : 'displayNone'}>
                {userStats.userHeadGear === Image.name ? <img src={(Math.random() <= 0.25) && screenControlRoom.ImageEquipment ? Image.img3 :(Math.random() <= 0.25) && screenControlRoom.ImageEquipment ? Image.img2 : (Math.random() <= 0.25) && screenControlRoom.ImageEquipment ? Image.img1 : Image.img0} alt={Image.explain} className="ImgStandEquip" onClick={() => {dispatch(GotoImageEquipmentFn());}}/> :null}
              </div>
            )
          })}
          {/* {userStats.userHeadGear === "Lord Kaho`s Horn" ? <img src={UserStand_LordKahosHorn} alt="UserStand_LordKahosHorn" className="ImgStandEquip"/> : 
          userStats.userHeadGear === "Teddybear Hat" ? <img src={UserStand_TeddybearHat} alt="UserStand_TeddybearHat" className="ImgStandEquip"/> :
          userStats.userHeadGear === "Crown" ? <img src={UserStand_Crown} alt="UserStand_Crown" className="ImgStandEquip"/> :
          userStats.userHeadGear === "Helm" ? <img src={UserStand_Helm} alt="UserStand_Helm" className="ImgStandEquip"/> :
          userStats.userHeadGear === "Panda Hat" ? <img src={UserStand_PandaHat} alt="UserStand_PandaHat" className="ImgStandEquip"/> :
          userStats.userHeadGear === "Chef Hat" ? <img src={UserStand_ChefHat} alt="UserStand_ChefHat" className="ImgStandEquip"/> :
          userStats.userHeadGear === "Santa Poring Hat" ? <img src={UserStand_SantaPoringHat} alt="UserStand_SantaPoringHat" className="ImgStandEquip"/> : 
          <img src={UserStandPost} alt="UserStandPost" className="ImgStandEquip"/>} */}
          <div className="statsDescript">
          <p className="str1">STR </p> 
          <p className="str2">{userAttribute.str}</p> 
          {userAttribute.BonusStr > 0 ? <p className="str3">+{userAttribute.BonusStr}</p> : null}
          {((userAttribute.str <= 11 && userAttribute.Points >= 2) || (userAttribute.str <= 21 && userAttribute.Points >= 3) || (userAttribute.str <= 31 && userAttribute.Points >= 4) || (userAttribute.str <= 41 && userAttribute.Points >= 5) || (userAttribute.str <= 51 && userAttribute.Points >= 6) || (userAttribute.str <= 61 && userAttribute.Points >= 7) || (userAttribute.str <= 71 && userAttribute.Points >= 8) || (userAttribute.str <= 81 && userAttribute.Points >= 9) || (userAttribute.str <= 91 && userAttribute.Points >= 10) || (userAttribute.str <= 98 && userAttribute.Points >= 11)) ? <button className="str4 altanStatsButton" onClick={
            userAttribute.str <= 11 ? () => dispatch(STRPointsFn(2)) : 
            userAttribute.str <= 21 ? () => dispatch(STRPointsFn(3)) :
            userAttribute.str <= 31 ? () => dispatch(STRPointsFn(4)) : 
            userAttribute.str <= 41 ? () => dispatch(STRPointsFn(5)) : 
            userAttribute.str <= 51 ? () => dispatch(STRPointsFn(6)) : 
            userAttribute.str <= 61 ? () => dispatch(STRPointsFn(7)) : 
            userAttribute.str <= 71 ? () => dispatch(STRPointsFn(8)) : 
            userAttribute.str <= 81 ? () => dispatch(STRPointsFn(9)) : 
            userAttribute.str <= 91 ? () => dispatch(STRPointsFn(10)) : 
            userAttribute.str <= 98 ? () => dispatch(STRPointsFn(11)) : null }>&gt;</button>: null} <p className="str5">{
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
          <p className="agi6">AGI </p>
          <p className="agi7">{userAttribute.agi}</p> 
          {userAttribute.BonusAgi > 0 ? <p className="agi8">+{userAttribute.BonusAgi}</p> : null}
          {((userAttribute.agi <= 11 && userAttribute.Points >= 2) || (userAttribute.agi <= 21 && userAttribute.Points >= 3) || (userAttribute.agi <= 31 && userAttribute.Points >= 4) || (userAttribute.agi <= 41 && userAttribute.Points >= 5) || (userAttribute.agi <= 51 && userAttribute.Points >= 6) || (userAttribute.agi <= 61 && userAttribute.Points >= 7) || (userAttribute.agi <= 71 && userAttribute.Points >= 8) || (userAttribute.agi <= 81 && userAttribute.Points >= 9) || (userAttribute.agi <= 91 && userAttribute.Points >= 10) || (userAttribute.agi <= 98 && userAttribute.Points >= 11)) ? <button className="agi9 altanStatsButton" onClick={
            userAttribute.agi <= 11 ? () => dispatch(AGIPointsFn(2)) : 
            userAttribute.agi <= 21 ? () => dispatch(AGIPointsFn(3)) :
            userAttribute.agi <= 31 ? () => dispatch(AGIPointsFn(4)) : 
            userAttribute.agi <= 41 ? () => dispatch(AGIPointsFn(5)) : 
            userAttribute.agi <= 51 ? () => dispatch(AGIPointsFn(6)) : 
            userAttribute.agi <= 61 ? () => dispatch(AGIPointsFn(7)) : 
            userAttribute.agi <= 71 ? () => dispatch(AGIPointsFn(8)) : 
            userAttribute.agi <= 81 ? () => dispatch(AGIPointsFn(9)) : 
            userAttribute.agi <= 91 ? () => dispatch(AGIPointsFn(10)) : 
            userAttribute.agi <= 98 ? () => dispatch(AGIPointsFn(11)) : null }>&gt;</button>: null} <p className="agi10">{
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
          <p className="vit11">VIT </p>
          <p className="vit12"> {userAttribute.vit}</p> 
          {userAttribute.BonusVit > 0 ? <p className="vit13">+{userAttribute.BonusVit}</p> : null}
          {((userAttribute.vit <= 11 && userAttribute.Points >= 2) || (userAttribute.vit <= 21 && userAttribute.Points >= 3) || (userAttribute.vit <= 31 && userAttribute.Points >= 4) || (userAttribute.vit <= 41 && userAttribute.Points >= 5) || (userAttribute.vit <= 51 && userAttribute.Points >= 6) || (userAttribute.vit <= 61 && userAttribute.Points >= 7) || (userAttribute.vit <= 71 && userAttribute.Points >= 8) || (userAttribute.vit <= 81 && userAttribute.Points >= 9) || (userAttribute.vit <= 91 && userAttribute.Points >= 10) || (userAttribute.vit <= 98 && userAttribute.Points >= 11)) ? <button className="vit14 altanStatsButton" onClick={
            userAttribute.vit <= 11 ? () => dispatch(VITPointsFn(2,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 21 ? () => dispatch(VITPointsFn(3,userAttribute.vit,userAttribute.BonusVit)) :
            userAttribute.vit <= 31 ? () => dispatch(VITPointsFn(4,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 41 ? () => dispatch(VITPointsFn(5,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 51 ? () => dispatch(VITPointsFn(6,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 61 ? () => dispatch(VITPointsFn(7,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 71 ? () => dispatch(VITPointsFn(8,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 81 ? () => dispatch(VITPointsFn(9,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 91 ? () => dispatch(VITPointsFn(10,userAttribute.vit,userAttribute.BonusVit)) : 
            userAttribute.vit <= 98 ? () => dispatch(VITPointsFn(11,userAttribute.vit,userAttribute.BonusVit)) : null }>&gt;</button>: null} <p className="vit15">{
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
          <p className="int16">INT </p>
          <p className="int17">{userAttribute.int}</p>
          {userAttribute.BonusInt > 0 ? <p className="int18">+{userAttribute.BonusInt}</p> : null}
          {((userAttribute.int <= 11 && userAttribute.Points >= 2) || (userAttribute.int <= 21 && userAttribute.Points >= 3) || (userAttribute.int <= 31 && userAttribute.Points >= 4) || (userAttribute.int <= 41 && userAttribute.Points >= 5) || (userAttribute.int <= 51 && userAttribute.Points >= 6) || (userAttribute.int <= 61 && userAttribute.Points >= 7) || (userAttribute.int <= 71 && userAttribute.Points >= 8) || (userAttribute.int <= 81 && userAttribute.Points >= 9) || (userAttribute.int <= 91 && userAttribute.Points >= 10) || (userAttribute.int <= 98 && userAttribute.Points >= 11)) ? <button className="int19 altanStatsButton" onClick={
            userAttribute.int <= 11 ? () => dispatch(INTPointsFn(2,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 21 ? () => dispatch(INTPointsFn(3,userAttribute.int,userAttribute.BonusInt)) :
            userAttribute.int <= 31 ? () => dispatch(INTPointsFn(4,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 41 ? () => dispatch(INTPointsFn(5,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 51 ? () => dispatch(INTPointsFn(6,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 61 ? () => dispatch(INTPointsFn(7,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 71 ? () => dispatch(INTPointsFn(8,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 81 ? () => dispatch(INTPointsFn(9,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 91 ? () => dispatch(INTPointsFn(10,userAttribute.int,userAttribute.BonusInt)) : 
            userAttribute.int <= 98 ? () => dispatch(INTPointsFn(11,userAttribute.int,userAttribute.BonusInt)) : null }>&gt;</button>: null} <p className="int20">{
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
          <p className="dex21">DEX </p>
          <p className="dex22">{userAttribute.dex}</p>
          {userAttribute.BonusDex > 0 ? <p className="dex23">+{userAttribute.BonusDex}</p> : null}
          {((userAttribute.dex <= 11 && userAttribute.Points >= 2) || (userAttribute.dex <= 21 && userAttribute.Points >= 3) || (userAttribute.dex <= 31 && userAttribute.Points >= 4) || (userAttribute.dex <= 41 && userAttribute.Points >= 5) || (userAttribute.dex <= 51 && userAttribute.Points >= 6) || (userAttribute.dex <= 61 && userAttribute.Points >= 7) || (userAttribute.dex <= 71 && userAttribute.Points >= 8) || (userAttribute.dex <= 81 && userAttribute.Points >= 9) || (userAttribute.dex <= 91 && userAttribute.Points >= 10) || (userAttribute.dex <= 98 && userAttribute.Points >= 11)) ? <button className="dex24 altanStatsButton" onClick={
            userAttribute.dex <= 11 ? () => dispatch(DEXPointsFn(2)) : 
            userAttribute.dex <= 21 ? () => dispatch(DEXPointsFn(3)) :
            userAttribute.dex <= 31 ? () => dispatch(DEXPointsFn(4)) : 
            userAttribute.dex <= 41 ? () => dispatch(DEXPointsFn(5)) : 
            userAttribute.dex <= 51 ? () => dispatch(DEXPointsFn(6)) : 
            userAttribute.dex <= 61 ? () => dispatch(DEXPointsFn(7)) : 
            userAttribute.dex <= 71 ? () => dispatch(DEXPointsFn(8)) : 
            userAttribute.dex <= 81 ? () => dispatch(DEXPointsFn(9)) : 
            userAttribute.dex <= 91 ? () => dispatch(DEXPointsFn(10)) : 
            userAttribute.dex <= 98 ? () => dispatch(DEXPointsFn(11)) : null }>&gt;</button>: null} <p className="dex25">{
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
          <p className="luk26">LUK </p>
          <p className="luk27">{userAttribute.luk}</p>
          {userAttribute.BonusLuk > 0 ? <p className="luk28">+{userAttribute.BonusLuk}</p> : null}
          {((userAttribute.luk <= 11 && userAttribute.Points >= 2) || (userAttribute.luk <= 21 && userAttribute.Points >= 3) || (userAttribute.luk <= 31 && userAttribute.Points >= 4) || (userAttribute.luk <= 41 && userAttribute.Points >= 5) || (userAttribute.luk <= 51 && userAttribute.Points >= 6) || (userAttribute.luk <= 61 && userAttribute.Points >= 7) || (userAttribute.luk <= 71 && userAttribute.Points >= 8) || (userAttribute.luk <= 81 && userAttribute.Points >= 9) || (userAttribute.luk <= 91 && userAttribute.Points >= 10) || (userAttribute.luk <= 98 && userAttribute.Points >= 11)) ? <button className="luk29 altanStatsButton" onClick={
            userAttribute.luk <= 11 ? () => dispatch(LUKPointsFn(2)) : 
            userAttribute.luk <= 21 ? () => dispatch(LUKPointsFn(3)) :
            userAttribute.luk <= 31 ? () => dispatch(LUKPointsFn(4)) : 
            userAttribute.luk <= 41 ? () => dispatch(LUKPointsFn(5)) : 
            userAttribute.luk <= 51 ? () => dispatch(LUKPointsFn(6)) : 
            userAttribute.luk <= 61 ? () => dispatch(LUKPointsFn(7)) : 
            userAttribute.luk <= 71 ? () => dispatch(LUKPointsFn(8)) : 
            userAttribute.luk <= 81 ? () => dispatch(LUKPointsFn(9)) : 
            userAttribute.luk <= 91 ? () => dispatch(LUKPointsFn(10)) : 
            userAttribute.luk <= 98 ? () => dispatch(LUKPointsFn(11)) : null }>&gt;</button>: null} <p className="luk30">{
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
            <p className="stats31">POINTS {userAttribute.Points}</p>
          </div>
        </div>
        <div className="statsDescriptDetails">
            <p className="hp1">HP</p>
            <p className="hp2">{Math.floor(userStats.currentHealth)}/{Math.floor(userStats.maxHealth)}</p>
            <p className="sp3">SP</p>
            <p className="sp4">{Math.floor(userStats.currentSP)}/{Math.floor(userStats.maxSP)}</p>
            <p className="atk1">Atk</p>
            <p className="atk2">{Math.floor(userStats.attack)} + {(userStats.BaseWeaponDamage + userStats.Bonusattack).toFixed(1)}</p>
            <p className="def3">Def</p>
            <p className="def4">{Math.floor(userStats.defence)} + {userStats.BaseHeadGearDef + userStats.BaseArmorDef + userStats.Bonusdefence}</p>
            <p className="hit5">Hit</p>
            <p className="hit6">{Math.floor(userStats.hitRate *100)} {userStats.BonushitRate > 0 ? "+ " + Math.floor(userStats.BonushitRate * 100) : null}</p>
            <p className="fle7">Flee</p>
            <p className="fle8">{Math.floor(userStats.dodgeRate *100)} {userStats.BonusdodgeRate > 0 ? "+ " + Math.floor(userStats.BonusdodgeRate * 100) : null}</p>
            <p className="crit9">Crit</p>
            <p className="crit10">{Math.floor(userStats.critRate *100)} {userStats.BonuscritRate > 0 ? "+ " + Math.floor(userStats.BonuscritRate * 100) : null}</p>
            <p className="aspd11">Aspd</p>
            <p className="aspd12">{Math.floor(userStats.speed)} {userStats.Bonusspeed > 0 ? "+ " + userStats.Bonusspeed.toFixed(1) : null}</p>
        </div> 
          <div className="statsBackPosition">
            <button className="altanStatsButton statsBackButtonPosition" onClick={() =>{dispatch(GotoAltanStatsFn());}}>back</button>
          </div>
        </div> : null}
        {screenControlRoom.SkillChoice ?
          <div className="skillBoxDisplay">
            {SkillBox.map(Skill => {
              return( 
                <span key={Skill.id}>
                  {Skill.name === "First Aid" ?
                  <button className={userStats.currentSP >= 30 ? "atlanSkillButton atlanSkillButtonFix" : "atlanSkillButton atlanSkillButtonFix atlanSkillButtonNeedMoreSP"} title={Skill.title} onClick={
                    userStats.currentSP >= 30 && userStats.currentHealth !== userStats.maxHealth?
                    () => dispatch(Skill.Activate) : null}>
                    <div className="adjImgCenterBox">
                      <p className="adjImgCenter"><img src={Skill.Img} alt={Skill.name} />{Skill.name} - Lv.{Skill.skillLevelCheck}</p>
                    </div>
                    </button> :
                  userStats.Level >= Skill.skillLevelCheck ? <button className="atlanSkillButton atlanSkillButtonFix" title={Skill.title} disabled>
                    <div className="adjImgCenterBox">
                      <p className="adjImgCenter"><img src={Skill.Img} alt={Skill.name} />{Skill.name} - Lv.{Skill.skillLevelCheck}</p>
                    </div>
                    </button> : null}
                </span>
              )})}
            </div>: null }
        {screenControlRoom.GuildChoice ?
          <div className="guildBoxDisplay">
            {GuildBox.map(Guild => {
              return( 
                <span key={Guild.id}>
                  {userStats.Level >= Guild.skillLevelCheck ? <button className="atlanGuildButton atlanGuildButtonFix" title={Guild.title} disabled>
                    <div className="adjImgCenterBox">
                      <p className="adjImgCenter"><img src={Guild.Img} alt={Guild.name} />{Guild.name}</p>
                    </div>
                    </button> : null}
                </span>
              )})}
            </div>: null }
      </div> 
    );
}

export default StartMenu;