import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



import { OpenChest1Fn, GetStatsPointFn } from './actions'
import { OpenChest2Fn, RedPotionFn , AdventureSuitFn } from './actions'
import { OpenChestBoss1Fn, SpiritOfEclipseFn } from './actions'
import { OpenPayonCaveChest3Fn } from './actions'
import './css/mapTreasurePoringIsland.css'
// import useSound from 'use-sound';

import treasureBox from './img/NPC/TreasureBox.gif'
import treasureBoxOpen from './img/NPC/TreasureBoxOpen.gif'
import SpiritOfEclipse from './img/Etc/SpiritOfEclipse.gif'

function StartMenu(){
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const screenControlRoom = useSelector(state => state.screenControlRoom)

    //Reward, Get1,2,3 function some filling for map fn
    const RewardBox = [
      {id: 1, Path:"Chest1", Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChest1Fn,itemQuantity1:0, itemQuantity2:0,itemQuantity3:10,ZenyQuantity:0,Condition1:npcControlRoom.Chest1, Condition2:npcControlRoom.Chest1VisitRepeat, RewardDisplay:"Received 10 Stats Point!"},
      {id: 2, Path:"Chest2", Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChest2Fn,itemQuantity1:10,itemQuantity2:1,itemQuantity3:0,ZenyQuantity:0,Condition1:npcControlRoom.Chest2, Condition2:npcControlRoom.Chest2VisitRepeat, RewardDisplay:"Received 10 Red Health Potion & 1 Adventure Suit!"},
      {id: 3, Path:"BossChest1", Get1Fn:SpiritOfEclipseFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenChestBoss1Fn,itemQuantity1:1,itemQuantity2:0,itemQuantity3:0, ZenyQuantity:3000, Condition1:npcControlRoom.ChestBoss1,Condition2:npcControlRoom.ChestBoss1VisitRepeat, RewardDisplay:`Received 3000z & Spirit Of Eclipse(Important)!`, img1:SpiritOfEclipse, img1alt:"SpiritOfEclipse"},
      {id: 4, Path:"PayonCaveChest3", Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, Get3Fn:GetStatsPointFn, OpenFn:OpenPayonCaveChest3Fn,itemQuantity1:0, itemQuantity2:0,itemQuantity3:15,ZenyQuantity:0,Condition1:npcControlRoom.PayonCaveChest3, Condition2:npcControlRoom.PayonCaveChest3VisitRepeat, RewardDisplay:"Received 15 Stats Point!"},
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
      <div className="TreasurePoringIslandMap">
          {RewardBox.map(Reward => {
            return (
              <span key={Reward.id} className={screenControlRoom.TreasurePath === Reward.Path ? null : 'displayNoneTreasure'}>
                {Reward.Condition1 && !Reward.Condition2 ?  
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>{Reward.RewardDisplay} <img src={Reward.img1} alt={Reward.img1alt}/> </p>
                  </div>
                </div> :
                Reward.Condition1 && Reward.Condition2 ? 
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>Empty Chest</p>
                  </div>
                </div> :
                <div className="chest1Background">
                 <button className="chest1Box" onClick={() => {ChestRewardFn(Reward.Get1Fn,Reward.ZenyQuantity,Reward.itemQuantity1,Reward.Get2Fn,Reward.itemQuantity2,Reward.Get3Fn,Reward.itemQuantity3); dispatch(Reward.OpenFn());}}><img src={treasureBox} alt="Treasure Box" /></button>
                </div>}
              </span>
            )
          })}
      </div>
    );
}

export default StartMenu;