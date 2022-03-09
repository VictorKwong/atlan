import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {TrainingSuccesFn, TrainingFailureFn} from './actions'

import { TrainingSTRFn , TrainingAGIFn , TrainingVITFn , TrainingINTFn , TrainingDEXFn , TrainingLUKFn } from './actions'
import { BonusSTRPointsFn , BonusAGIPointsFn , BonusVITPointsFn , BonusINTPointsFn , BonusDEXPointsFn , BonusLUKPointsFn } from './actions'
import './css/mapHousePoringIsland.css'
// import useSound from 'use-sound';
import TrainingSuccess from './audio/SoundEffect/TrainingSuccess.mp3'
import TrainingFailure from './audio/SoundEffect/TrainingFailure.mp3'
const audioTrainingSuccess = new Audio (TrainingSuccess)
const audioTrainingFailure = new Audio (TrainingFailure)


function StartMenu(){
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const trainingSuccessRate = useSelector(state => state.trainingSuccessRate)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    useEffect(() => {
      audioTrainingSuccess.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioTrainingFailure.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    let TrainingBox = [
      //WEAPON
      {id:20001, Img:"", name:"STR Training", result:"Complete + 10 STR Training", Points:userAttribute.BonusStr, Attr:TrainingSTRFn(1), effect:BonusSTRPointsFn(userAttribute.BonusStr,userAttribute.BonusDex,userAttribute.BonusLuk)},
      {id:20002, Img:"", name:"AGI Training", result:"Complete + 10 AGI Training", Points:userAttribute.BonusAgi, Attr:TrainingAGIFn(1), effect:BonusAGIPointsFn(userAttribute.BonusAgi)},
      {id:20003, Img:"", name:"VIT Training", result:"Complete + 10 VIT Training", Points:userAttribute.BonusVit, Attr:TrainingVITFn(1), effect:BonusVITPointsFn(userAttribute.BonusVit,userAttribute.vit)},
      {id:20004, Img:"", name:"INT Training", result:"Complete + 10 INT Training", Points:userAttribute.BonusInt, Attr:TrainingINTFn(1), effect:BonusINTPointsFn(userAttribute.BonusInt,userAttribute.int)},
      {id:20005, Img:"", name:"DEX Training", result:"Complete + 10 DEX Training", Points:userAttribute.BonusDex, Attr:TrainingDEXFn(1), effect:BonusDEXPointsFn(userAttribute.BonusStr,userAttribute.BonusDex,userAttribute.BonusLuk)},
      {id:20006, Img:"", name:"LUK Training", result:"Complete + 10 LUK Training", Points:userAttribute.BonusLuk, Attr:TrainingLUKFn(1), effect:BonusLUKPointsFn(userAttribute.BonusStr,userAttribute.BonusDex,userAttribute.BonusLuk)}
    ]
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    const SuccessAudio = () => {
      audioTrainingSuccess.pause();
      audioTrainingSuccess.currentTime = 0;
      audioTrainingSuccess.play();
    }
    const FailureAudio = () => {
      audioTrainingFailure.pause();
      audioTrainingFailure.currentTime = 0;
      audioTrainingFailure.play();
    }

    return(
      <div className="HousePoringIslandMap">
              {TrainingBox.map(Train => {
                return( 
                  <span key={Train.id}>
                      {Train.Points < 10 ? 
                      <button className="housePoringIslandTrainingButton housePoringIslandTrainingButtonFix" 
                      onClick={trainingSuccessRate[Train.Points] >= Math.random() ?
                        () => {dispatch(Train.Attr); dispatch(Train.effect); dispatch(TrainingSuccesFn()); SuccessAudio();} : () => {dispatch(TrainingFailureFn()); FailureAudio();}}>
                        <div className="houseImgCenterBox">
                          <p className="houseImgCenter">{Train.name} Lv.{Train.Points + 1} - {trainingSuccessRate[Train.Points]*100}%</p>
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