import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



import { OpenChest1Fn, GetStatsPointFn } from './actions'
import './css/mapTreasurePoringIsland.css'
// import useSound from 'use-sound';

import treasureBox from './img/NPC/TreasureBox.gif'
import treasureBoxOpen from './img/NPC/TreasureBoxOpen.gif'


function StartMenu(){
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)

    //QUEST
    const RewardBox = [
      {id: 1, GetFn:GetStatsPointFn, OpenFn:OpenChest1Fn},
    ]
  
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    return(
      <div className="TreasurePoringIslandMap">
          {RewardBox.map(Reward => {
            return (
              <span key={Reward.id}>
                {npcControlRoom.Chest1 && !npcControlRoom.Chest1VisitRepeat ?  
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>Received 10 Stats Point!</p>
                  </div>
                </div> :
                npcControlRoom.Chest1 && npcControlRoom.Chest1VisitRepeat ? 
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>Empty Chest</p>
                  </div>
                </div> :
                <div className="chest1Background">
                 <button className="chest1Box" onClick={() => {dispatch(Reward.GetFn(10)); dispatch(Reward.OpenFn())}}><img src={treasureBox} alt="Treasure Box" /></button>
                </div>}
              </span>
            )
          })}
      </div>
    );
}

export default StartMenu;