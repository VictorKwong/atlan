import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



import { OpenChestBoss1Fn, RedPotionFn } from './actions'
import './css/mapTreasurePoringIsland.css'
// import useSound from 'use-sound';

import treasureBox from './img/NPC/TreasureBox.gif'
import treasureBoxOpen from './img/NPC/TreasureBoxOpen.gif'


function StartMenu(){
    const npcControlRoom = useSelector(state => state.npcControlRoom)

    //QUEST
    const RewardBox = [
      {id: 1, Get1Fn:RedPotionFn, OpenFn:OpenChestBoss1Fn},
    ]
  
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    return(
      <div className="TreasurePoringIslandMap">
          {RewardBox.map(Reward => {
            return (
              <span key={Reward.id}>
                {npcControlRoom.ChestBoss1 && !npcControlRoom.ChestBoss1VisitRepeat ?  
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>Received 3000z!</p>
                  </div>
                </div> :
                npcControlRoom.ChestBoss1 && npcControlRoom.ChestBoss1VisitRepeat ? 
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>Empty Chest</p>
                  </div>
                </div> :
                <div className="chest1Background">
                 <button className="chest1Box" onClick={() => {dispatch(Reward.Get1Fn(3000,0)); dispatch(Reward.OpenFn())}}><img src={treasureBox} alt="Treasure Box" /></button>
                </div>}
              </span>
            )
          })}
      </div>
    );
}

export default StartMenu;