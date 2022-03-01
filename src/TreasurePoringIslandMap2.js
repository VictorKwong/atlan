import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



import { OpenChest2Fn, RedPotionFn , AdventureSuitFn } from './actions'
import './css/mapTreasurePoringIsland.css'
// import useSound from 'use-sound';

import treasureBox from './img/NPC/TreasureBox.gif'
import treasureBoxOpen from './img/NPC/TreasureBoxOpen.gif'


function StartMenu(){
    const npcControlRoom = useSelector(state => state.npcControlRoom)

    //QUEST
    const RewardBox = [
      {id: 1, Get1Fn:RedPotionFn, Get2Fn: AdventureSuitFn, OpenFn:OpenChest2Fn},
    ]
  
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    return(
      <div className="TreasurePoringIslandMap">
          {RewardBox.map(Reward => {
            return (
              <span key={Reward.id}>
                {npcControlRoom.Chest2 && !npcControlRoom.Chest2VisitRepeat ?  
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>Received 10 Red Health Potion & 1 Adventure Suit!</p>
                  </div>
                </div> :
                npcControlRoom.Chest2 && npcControlRoom.Chest2VisitRepeat ? 
                <div className="chest1Background">
                  <div className="chest1BoxCenter">
                    <img src={treasureBoxOpen} alt="Treasure Box Open" /> 
                    <p>Empty Chest</p>
                  </div>
                </div> :
                <div className="chest1Background">
                 <button className="chest1Box" onClick={() => {dispatch(Reward.Get1Fn(0,10)); dispatch(Reward.Get2Fn(0,1)); dispatch(Reward.OpenFn())}}><img src={treasureBox} alt="Treasure Box" /></button>
                </div>}
              </span>
            )
          })}
      </div>
    );
}

export default StartMenu;