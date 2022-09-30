import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn, GotoPayonCave2FFn } from './actions';
//Loading Screen
import { BattleLoadingScreenFn, NextMapLoadingScreenFn } from './actions'
//CHEST
import { ChestBoss2VisitRepeatFn } from './actions'
//PATH
import { GotoPayonCave3FPath3Fn } from './actions'
//NPC
import { PayonCave3FCaveNPCFn , ResetPayonCaveNPCFn } from './actions'
//Story
import { cutsceneThreeFn } from './actions'
import './css/mapPayonCave3F.css'
import $ from 'jquery'

const PayonCave3F = (data) =>{
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const userAttribute = useSelector(state => state.userAttribute)
    const miscControlRoom = useSelector(state => state.miscControlRoom)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    useEffect(() => {
      data.audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
      $('.PayonCave3FMapTitle').fadeIn(600);
      $('.PayonCave3FMapTitle').delay(2400).fadeOut(600);
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave3FPath1",13)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave3FPath2",14)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreenBoss = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave3FPath4",15)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const NextMapProteraFn = (num) => {
    dispatch(NextMapLoadingScreenFn());
    setTimeout(() => dispatch(NextMapLoadingScreenFn()), miscControlRoom.MiniMap);
    //1.PayonCave2F
    switch(true){
      case (num === 1):
        return setTimeout(() => dispatch(GotoPayonCave2FFn()), miscControlRoom.MiniChangeMap);
      default:
        break;
    }
  }

    return(
        <div className="PayonCave3FMap">
          <button className="ReturnHUDBugFix"></button>
          <h3 className="PayonCave3FMapTitle">Payon Cave 3F</h3>
          {/* Path 0 */}
          <button className="PayonCaveBase PayonCave3FToPayonCave2F" onClick={() => {NextMapProteraFn(1); dispatch(ResetPayonCaveNPCFn()); changePlaceFadeAudio();}}>PayonCave2F</button>
          <button className="PayonCaveBase PayonCave3FPath0" onClick={() => {LoadingScreen0(); dispatch(ResetPayonCaveNPCFn()); changeMapFadeAudio();}}>Ghost?</button>
          {/* Path 1 */}
          {screenControlRoom.PayonCave3FPath1 ?
          <button className="PayonCaveBase PayonCave3FPath1" onClick={() => {LoadingScreen1(); dispatch(ResetPayonCaveNPCFn()); changeMapFadeAudio();}}>Ghost Path</button> : null }
          {/* Path 2 */}
          {screenControlRoom.PayonCave3FPath2 ?
          <button className="PayonCaveBase PayonCave3FPath2" onClick={() => {dispatch(PayonCave3FCaveNPCFn()); dispatch(GotoPayonCave3FPath3Fn()); changePlaceFadeAudio();}}>Scared Acolyte</button> : null}
          {/* Path 3 */}
          {screenControlRoom.PayonCave3FPath3 ?
          <button className={Math.random() <= 0.5 && npcControlRoom.BossWolyafaDefeat ? "PayonCaveBase PayonCave3FPath3 PayonCave3FPath3Pic2" : "PayonCaveBase PayonCave3FPath3"} onClick={
            screenControlRoom.storyLineThree ? 
            () => {LoadingScreenBoss(); dispatch(ResetPayonCaveNPCFn()); changeMapFadeAudio();} :
            () => {dispatch(cutsceneThreeFn()); dispatch(ResetPayonCaveNPCFn()); changeMapFadeAudio();}}>Boss💢</button> : null}
          {/* Path 4 */}
          {screenControlRoom.PayonCave3FPath4 ?
          <button className="PayonCaveBase PayonCave3FPath4" onClick={npcControlRoom.ChestBoss2 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest2")); dispatch(ChestBoss2VisitRepeatFn()); dispatch(ResetPayonCaveNPCFn()); } : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest2")); dispatch(ResetPayonCaveNPCFn());}}>☆Shiny treasure☆</button> : null}
        </div>
    );
}

export default PayonCave3F;