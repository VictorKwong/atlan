import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GotoHouseTrainingSTRFn, GotoHouseTrainingAGIFn, GotoHouseTrainingVITFn, GotoHouseTrainingINTFn , GotoHouseTrainingDEXFn, GotoHouseTrainingLUKFn } from './actions'

import { RedPotionFn } from './actions'

//Training Success Failure Reset
import {ResetTrainingRateFn} from './actions'

import './css/mapHousePoringIsland.css'
// import useSound from 'use-sound';
import TrainingSuccess from './audio/SoundEffect/TrainingSuccess.mp3'
import TrainingFailure from './audio/SoundEffect/TrainingFailure.mp3'
const audioTrainingSuccess = new Audio (TrainingSuccess)
const audioTrainingFailure = new Audio (TrainingFailure)


function StartMenu(){
    const userAttribute = useSelector(state => state.userAttribute)
    const trainingSuccessRate = useSelector(state => state.trainingSuccessRate)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const trainingSuccessRequire = useSelector(state => state.trainingSuccessRequire)
    const userGoldItem = useSelector(state => state.userGoldItem)
    useEffect(() => {
      audioTrainingSuccess.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioTrainingFailure.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    let TrainingBox = [
      //WEAPON
      {id:20001, Img:"", name:"STR Training", result:"Complete + 10 STR Training", Points:userAttribute.BonusStr, Confirm:GotoHouseTrainingSTRFn()},
      {id:20002, Img:"", name:"AGI Training", result:"Complete + 10 AGI Training", Points:userAttribute.BonusAgi, Confirm:GotoHouseTrainingAGIFn()},
      {id:20003, Img:"", name:"VIT Training", result:"Complete + 10 VIT Training", Points:userAttribute.BonusVit, Confirm:GotoHouseTrainingVITFn()},
      {id:20004, Img:"", name:"INT Training", result:"Complete + 10 INT Training", Points:userAttribute.BonusInt, Confirm:GotoHouseTrainingINTFn()},
      {id:20005, Img:"", name:"DEX Training", result:"Complete + 10 DEX Training", Points:userAttribute.BonusDex, Confirm:GotoHouseTrainingDEXFn()},
      {id:20006, Img:"", name:"LUK Training", result:"Complete + 10 LUK Training", Points:userAttribute.BonusLuk, Confirm:GotoHouseTrainingLUKFn()}
    ]
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();



    return(
      <div className="HousePoringIslandMap">
              {TrainingBox.map(Train => {
                return( 
                  <span key={Train.id}>
                      {Train.Points < 10 && userGoldItem.Zeny >= trainingSuccessRequire[Train.Points] ? 
                      <button className="housePoringIslandTrainingButton housePoringIslandTrainingButtonFix" 
                      onClick={() => {dispatch(Train.Confirm); dispatch(ResetTrainingRateFn());}}>
                        <div className="houseImgCenterBox">
                          <p className="houseImgCenter">{Train.name} Lv.{Train.Points + 1} - {trainingSuccessRequire[Train.Points]}Z - @{trainingSuccessRate[Train.Points]*100}% </p>
                        </div>
                      </button>: 
                      Train.Points < 10 && userGoldItem.Zeny < trainingSuccessRequire[Train.Points] ? 
                      <button className="housePoringIslandTrainingButton housePoringIslandTrainingButtonFix housePoringIslandTrainingButtonRequirement" disabled>
                        <div className="houseImgCenterBox">
                          <p className="houseImgCenter">{Train.name} Lv.{Train.Points + 1} - Require {trainingSuccessRequire[Train.Points]}z</p>
                        </div>
                      </button>:
                      <button className="housePoringIslandTrainingButtonFix houseButtonDisable" disabled>
                        <div className="houseImgCenterBox">
                          <p className="houseImgCenter">{Train.result}</p>
                        </div>
                      </button>}
                  </span>
                )})}
      </div>
    );
}

export default StartMenu;
