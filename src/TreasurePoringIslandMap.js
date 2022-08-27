import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



import { OpenChest1Fn, GetStatsPointFn } from './actions'
import { OpenChest2Fn, RedPotionFn , AdventureSuitFn, OrangePotionFn, YellowPotionFn , AnniversaryCakeFn } from './actions'
import { OpenChestBoss1Fn, SpiritOfEclipseFn } from './actions'
import { OpenChestBoss2Fn, SpiritOfWolyafaFn } from './actions'
import { OpenChestBoss3Fn, SpiritOfDoppelgangerFn } from './actions'
import { OpenPayonCaveChest3Fn, OpenPayonCaveChest4Fn , OpenPayonCaveChest5Fn, OpenPayonCaveChest6Fn} from './actions'
import { OpenGeffenDungeonChest1Fn , OpenGeffenDungeonChest2Fn , OpenGeffenDungeonChest3Fn, OpenGeffenDungeonChest4Fn} from './actions'
import './css/mapTreasurePoringIsland.css'
// import useSound from 'use-sound';

import treasureBox from './img/NPC/TreasureBox.gif'
import treasureBoxOpen from './img/NPC/TreasureBoxOpen.gif'
import SpiritOfBoss from './img/Etc/SpiritOfEclipse.gif'

function StartMenu(){
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const screenControlRoom = useSelector(state => state.screenControlRoom)

    //Reward, Get1,2,3 function some filling for map fn
    const RewardBox = [
      {id: 1, Path:"Chest1", Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChest1Fn,itemQuantity1:0, itemQuantity2:0,itemQuantity3:10,ZenyQuantity:0,Condition1:npcControlRoom.Chest1, Condition2:npcControlRoom.Chest1VisitRepeat, RewardDisplay:"Received 10 Stats Point!"},
      {id: 2, Path:"Chest2", Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChest2Fn,itemQuantity1:10,itemQuantity2:1,itemQuantity3:0,ZenyQuantity:0,Condition1:npcControlRoom.Chest2, Condition2:npcControlRoom.Chest2VisitRepeat, RewardDisplay:"Received 10 Red Health Potion & 1 Adventure Suit!"},
      {id: 3, Path:"BossChest1", Get1Fn:SpiritOfEclipseFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChestBoss1Fn,itemQuantity1:1,itemQuantity2:0,itemQuantity3:0, ZenyQuantity:3000, Condition1:npcControlRoom.ChestBoss1,Condition2:npcControlRoom.ChestBoss1VisitRepeat, RewardDisplay:`Received 3000z & Spirit Of Eclipse(Important)!`, img1:SpiritOfBoss, img1alt:"SpiritOfEclipse"},
      {id: 4, Path:"PayonCaveChest3", Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenPayonCaveChest3Fn,itemQuantity1:0, itemQuantity2:0,itemQuantity3:15,ZenyQuantity:0,Condition1:npcControlRoom.PayonCaveChest3, Condition2:npcControlRoom.PayonCaveChest3VisitRepeat, RewardDisplay:"Received 15 Stats Point!"},
      {id: 5, Path:"PayonCaveChest4", Get1Fn:OrangePotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenPayonCaveChest4Fn,itemQuantity1:5, itemQuantity2:0,itemQuantity3:0,ZenyQuantity:0,Condition1:npcControlRoom.PayonCaveChest4, Condition2:npcControlRoom.PayonCaveChest4VisitRepeat, RewardDisplay:"Received 5 Orange Potion!"},
      {id: 6, Path:"PayonCaveChest5", Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenPayonCaveChest5Fn,itemQuantity1:0, itemQuantity2:0,itemQuantity3:10,ZenyQuantity:0,Condition1:npcControlRoom.PayonCaveChest5, Condition2:npcControlRoom.PayonCaveChest5VisitRepeat, RewardDisplay:"Received 10 Stats Point!"},
      {id: 7, Path:"PayonCaveChest6", Get1Fn:YellowPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenPayonCaveChest6Fn,itemQuantity1:3, itemQuantity2:0,itemQuantity3:0,ZenyQuantity:0,Condition1:npcControlRoom.PayonCaveChest6, Condition2:npcControlRoom.PayonCaveChest6VisitRepeat, RewardDisplay:"Received 3 Yellow Potion!"},
      {id: 8, Path:"BossChest2", Get1Fn:SpiritOfWolyafaFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChestBoss2Fn,itemQuantity1:1,itemQuantity2:0,itemQuantity3:0, ZenyQuantity:4000, Condition1:npcControlRoom.ChestBoss2,Condition2:npcControlRoom.ChestBoss2VisitRepeat, RewardDisplay:`Received 4000z & Spirit Of Wolyafa(Important)!`, img1:SpiritOfBoss, img1alt:"SpiritOfWolyafa"},
      {id: 9, Path:"GeffenDungeonChest1", Get1Fn:AnniversaryCakeFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenGeffenDungeonChest1Fn,itemQuantity1:5, itemQuantity2:0,itemQuantity3:0,ZenyQuantity:500,Condition1:npcControlRoom.GeffenDungeonChest1, Condition2:npcControlRoom.GeffenDungeonChest1VisitRepeat, RewardDisplay:"Received 3 Anniversary Cake & 500z!"},
      {id: 10, Path:"GeffenDungeonChest2", Get1Fn:AnniversaryCakeFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenGeffenDungeonChest2Fn,itemQuantity1:0, itemQuantity2:0,itemQuantity3:10,ZenyQuantity:0,Condition1:npcControlRoom.GeffenDungeonChest2, Condition2:npcControlRoom.GeffenDungeonChest2VisitRepeat, RewardDisplay:"Received 10 Stats Point!"},
      {id: 11, Path:"GeffenDungeonChest3", Get1Fn:AnniversaryCakeFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenGeffenDungeonChest3Fn,itemQuantity1:5, itemQuantity2:0,itemQuantity3:0,ZenyQuantity:3000,Condition1:npcControlRoom.GeffenDungeonChest3, Condition2:npcControlRoom.GeffenDungeonChest3VisitRepeat, RewardDisplay:"Received 3 Anniversary Cake & 3000z!"},
      {id: 12, Path:"GeffenDungeonChest4", Get1Fn:AnniversaryCakeFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenGeffenDungeonChest4Fn,itemQuantity1:5, itemQuantity2:0,itemQuantity3:0,ZenyQuantity:3000,Condition1:npcControlRoom.GeffenDungeonChest4, Condition2:npcControlRoom.GeffenDungeonChest4VisitRepeat, RewardDisplay:"Received 3 Anniversary Cake & 3000z!"},
      {id: 13, Path:"BossChest3", Get1Fn:SpiritOfDoppelgangerFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChestBoss3Fn,itemQuantity1:1,itemQuantity2:0,itemQuantity3:0, ZenyQuantity:5000, Condition1:npcControlRoom.ChestBoss3,Condition2:npcControlRoom.ChestBoss3VisitRepeat, RewardDisplay:`Received 5000z & Spirit Of Doppelganger(Important)!`, img1:SpiritOfBoss, img1alt:"SpiritOfDoppelganger"},
    ]
    const dispatch = useDispatch();

    const ChestRewardFn = (Get1Fn,ZenyQuantity,itemQuantity1,Get2Fn,itemQuantity2,Get3Fn,itemQuantity3) => {
      // dispatch(Reward.Get1Fn(Reward.ZenyQuantity,Reward.itemQuantity1)); 
      // dispatch(Reward.Get2Fn(0,Reward.itemQuantity2)); 
      // dispatch(Reward.Get3Fn(Reward.itemQuantity3)); <--Stats
      // At least 1 GetFn is occur, Prevent unnecessary dispatch
      (() => {
        switch (true) {
          case((ZenyQuantity !== 0 || itemQuantity1 !== 0) && itemQuantity2 !== 0 && itemQuantity3 !== 0):
            dispatch(Get1Fn(ZenyQuantity,itemQuantity1)); 
            dispatch(Get2Fn(0,itemQuantity2)); 
            dispatch(Get3Fn(itemQuantity3)); 
            break;
          case((ZenyQuantity !== 0 || itemQuantity1 !== 0) && itemQuantity2 !== 0):
            dispatch(Get1Fn(ZenyQuantity,itemQuantity1)); 
            dispatch(Get2Fn(0,itemQuantity2));
            break;
          case((ZenyQuantity !== 0 || itemQuantity1 !== 0) && itemQuantity3 !== 0):
            dispatch(Get1Fn(ZenyQuantity,itemQuantity1)); 
            dispatch(Get3Fn(itemQuantity3)); 
            break;
          case(itemQuantity2 !== 0 && itemQuantity3 !== 0):
            dispatch(Get2Fn(0,itemQuantity2));  
            dispatch(Get3Fn(itemQuantity3)); 
            break;
          case(itemQuantity2 !== 0):
            dispatch(Get2Fn(0,itemQuantity2));  
            break;
          case(itemQuantity3 !== 0):
            dispatch(Get3Fn(itemQuantity3)); 
            break;
          default:
            dispatch(Get1Fn(ZenyQuantity,itemQuantity1)); 
            break;
        }
        })()
    }

    return(
      <div className={screenControlRoom.PoringIsland ? "TreasurePoringIslandMap" : screenControlRoom.PayonCave1F ? "TreasurePoringIslandMap TreasurePayonCaveMap" : screenControlRoom.GeffenDungeon1F || screenControlRoom.GeffenDungeon3F ? "TreasurePoringIslandMap TreasureGeffenDungeonMap" : null}>
          {RewardBox.map(Reward => {
            return (
              <span key={Reward.id} className={screenControlRoom.TreasurePath === Reward.Path ? null : "displayNoneTreasure"}>
                {Reward.Condition1 && !Reward.Condition2 ?  
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p className={Reward.id <= 3 ? "treasureTextDisplay1" : Reward.id <= 8 ? "treasureTextDisplay1 chest2Box" : "treasureTextDisplay1 chest3Box"}>{Reward.RewardDisplay} <img src={Reward.img1} alt={Reward.img1alt}/> </p>
                  </div>
                </div> :
                Reward.Condition1 && Reward.Condition2 ? 
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p className={Reward.id <= 3 ? "treasureTextDisplay1" : Reward.id <= 8 ? "treasureTextDisplay1 chest2Box" : "treasureTextDisplay1 chest3Box"}>Empty Chest</p>
                  </div>
                </div> :
                <div className="chest1Background">
                 <button className={Reward.id <= 3 ? "chest1Box" : Reward.id <= 8 ? "chest1Box chest2Box" : "chest1Box chest3Box"} onClick={() => {ChestRewardFn(Reward.Get1Fn,Reward.ZenyQuantity,Reward.itemQuantity1,Reward.Get2Fn,Reward.itemQuantity2,Reward.Get3Fn,Reward.itemQuantity3); dispatch(Reward.OpenFn());}}><img src={treasureBox} alt="Treasure Box" /></button>
                </div>}
              </span>
            )
          })}
      </div>
    );
}

export default StartMenu;