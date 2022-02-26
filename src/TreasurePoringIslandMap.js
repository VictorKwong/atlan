import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GetStatsPointFn } from './actions'
import './css/mapTreasurePoringIsland.css'
// import useSound from 'use-sound';

function StartMenu(){
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)

    //QUEST
    const RewardBox = [
      {id: 1, GetFn:GetStatsPointFn, },
    ]
  
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    return(
      <div className="TreasurePoringIslandMap">
        <div>
          {RewardBox.map(Reward => {
            return (
              <span key={Reward.id}>
                <button onClick={() => dispatch(Reward.GetFn(10))}>Open Chest</button>
                <p>Received 10 Stats Point</p>
              </span>
            )
          })}
        </div>
      </div>
    );
}

export default StartMenu;