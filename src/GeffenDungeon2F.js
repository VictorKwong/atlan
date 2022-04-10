import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn, GotoGeffenDungeon1FFn, GotoGeffenDungeon3FFn , ProgressQuestDialogFn} from './actions';
//Loading Screen
import { BattleLoadingScreenFn } from './actions'
//CHEST
import { GeffenDungeonChest2VisitRepeatFn , GeffenDungeonChest3VisitRepeatFn } from './actions'
//PATH
import { GotoGeffenDungeon2FPath3Fn, GotoGeffenDungeon2FPath5Fn, GotoGeffenDungeon2FPath6Fn} from './actions'
//NPC
import { GeffenDungeon2FSelfNPCFn, GeffenDungeon2FRekiNPCFn, ResetGeffenDungeonNPCFn , GeffenDungeon2FSelfNPCHiddenFn} from './actions'

import './css/mapGeffenDungeon2F.css'
import $ from 'jquery'

const PayonCave2F = (data) =>{
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const userAttribute = useSelector(state => state.userAttribute)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    useEffect(() => {
      data.audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
      $('.GeffenDungeon2FMapTitle').fadeIn(600);
      $('.GeffenDungeon2FMapTitle').delay(2400).fadeOut(600);
      //Not Depend on audioControlRoom
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const changeMapFadeAudio = () => {
      let i = 0;
      const fadeAudio = setInterval(() => {
          if (data.audioBGM.volume === parseFloat(audioControlRoom.AudioVolumeBGMFixed.toFixed(5))){
            i = i + 1;
          }
          if (data.audioBGM.volume !== 0) {
            data.audioBGM.volume -= parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))
            data.audioBGM.volume = data.audioBGM.volume.toFixed(5)
          }
          if (data.audioBGM.volume < parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))) {
              data.audioBGM.volume = 0;
              data.audioBGM.pause();
              data.audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }else if (i >= 2){
            data.audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5)
            clearInterval(fadeAudio);
          }
        }, 10);
    }
    const changePlaceFadeAudio = () => {
      const fadeAudioOut = setInterval(() => {
        if (data.audioBGM.volume > parseFloat(audioControlRoom.AudioChangePlaceThreshold.toFixed(5))) {
          data.audioBGM.volume -= parseFloat(audioControlRoom.AudioChangePlaceVolume.toFixed(5))
          data.audioBGM.volume = data.audioBGM.volume.toFixed(5)
        }
          if (data.audioBGM.volume <= parseFloat(audioControlRoom.AudioChangePlaceThreshold.toFixed(5))) {
            data.audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
            clearInterval(fadeAudioOut);
          }
      }, 10);
  }



  const LoadingScreen0 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon2FPath1",18)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon2FPath2",Math.floor(Math.random() * 2) + 18)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen2 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon2FPath4",18)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen3 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon2FPath6",Math.floor(Math.random() * 2) + 18)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
    return(
        <div className="GeffenDungeon2FMap">
          <button className="ReturnHUDBugFix"></button>
          <h3 className="GeffenDungeon2FMapTitle">Geffen Dungeon 2F</h3>
          <button className="GeffenDungeonBase GeffenDungeon2FToGeffenDungeon1F" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>GeffenDungeon 1F</button>
          {/* Path 0 Split 0 */}
          <button className="GeffenDungeonBase GeffenDungeon2FPath0Split0" onClick={() => {LoadingScreen0(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Split0</button>
          {/* Path 1 Split 0 */}
          {screenControlRoom.GeffenDungeon2FPath1 ?
          <button className={Math.random() <= 0.5 ? "GeffenDungeonBase GeffenDungeon2FPath1Split0" : "GeffenDungeonBase GeffenDungeon2FPath1Split0 GeffenDungeon2FPath1Split0Pic2"} onClick={() => {LoadingScreen1(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Road1</button> : null}
          {/* Path 2 Split 0 */}
          {screenControlRoom.GeffenDungeon2FPath2 ?
          <button className="GeffenDungeonBase GeffenDungeon2FPath2Split0" onClick={() => {dispatch(GotoGeffenDungeon2FPath3Fn()); dispatch(GotoGeffenDungeon2FPath6Fn()); changePlaceFadeAudio(); dispatch(GeffenDungeon2FSelfNPCFn());}}>Road2</button> : null}
          {/* Path 2 Split 0 Hidden*/}
          {screenControlRoom.GeffenDungeon2FPath7Hidden ?
          <button className="GeffenDungeonBase GeffenDungeon2FPathHidden1" onClick={
            ((questControlRoom.QuestDialog).indexOf("Lemonstory") > -1 && (questControlRoom.CompleteQuestDialog).indexOf("Lemonstory") === -1) && (questControlRoom.ProgressQuestDialog).indexOf("Lemonstorythree") === -1  && (questControlRoom.ProgressQuestDialog).indexOf("Lemonstorytwo") > -1 ?
            () => {changePlaceFadeAudio(); dispatch(GeffenDungeon2FSelfNPCHiddenFn()); dispatch(ProgressQuestDialogFn("Lemonstorythree")); } :
            () => {changePlaceFadeAudio(); dispatch(GeffenDungeon2FSelfNPCHiddenFn()); }}>Hidden Story</button> : null}
          {/* Path 3 Split 0 */}
          {screenControlRoom.GeffenDungeon2FPath3 ?
          <button className="GeffenDungeonBase TreasureBoxGeffenDungeon2F1" onClick={npcControlRoom.GeffenDungeonChest2 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("GeffenDungeonChest2")); dispatch(GeffenDungeonChest2VisitRepeatFn()); dispatch(ResetGeffenDungeonNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("GeffenDungeonChest2")); dispatch(ResetGeffenDungeonNPCFn());}}>Treasure chest</button> : null}
          
          {/* Path 0 Split 1 */}
          <button className="GeffenDungeonBase GeffenDungeon2FPath0Split1" onClick={() => {LoadingScreen2(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Split1</button>
          {/* Path 1 Split 1 */}
          {screenControlRoom.GeffenDungeon2FPath4 ?
          <button className="GeffenDungeonBase TreasureBoxGeffenDungeon2F2" onClick={npcControlRoom.GeffenDungeonChest3 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("GeffenDungeonChest3")); dispatch(GeffenDungeonChest3VisitRepeatFn()); dispatch(ResetGeffenDungeonNPCFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("GeffenDungeonChest3")); dispatch(ResetGeffenDungeonNPCFn());}}>Treasure chest</button> : null}
          {screenControlRoom.GeffenDungeon2FPath4 ?
          <button className="GeffenDungeonBase GeffenDungeon2FPath1Split1" onClick={() => {dispatch(GotoGeffenDungeon2FPath5Fn()); changePlaceFadeAudio(); dispatch(GeffenDungeon2FRekiNPCFn());}}>Road2B</button> : null}
          {/* Path 2 Split 1 */}
          {screenControlRoom.GeffenDungeon2FPath5 ?
          <button className="GeffenDungeonBase GeffenDungeon2FPath2Split1" onClick={() => {LoadingScreen3(); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>Road2B2</button> : null}
          {/* Path 4 */}
          {screenControlRoom.GeffenDungeon2FPath6 ?
          <button className="GeffenDungeonBase GeffenDungeon2FToGeffenDungeon3F" onClick={() => {dispatch(GotoGeffenDungeon3FFn()); changeMapFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>GeffenDungeon 3F</button> : null}
        </div>
    );
}

export default PayonCave2F;