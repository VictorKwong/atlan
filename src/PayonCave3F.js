import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn, GotoPayonCave2FFn } from './actions';
//Loading Screen
import { BattleLoadingScreenFn } from './actions'
//CHEST
import { ChestBoss2VisitRepeatFn } from './actions'


import WorldMap from './WorldMap'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import TreasurePoringIslandMap from './TreasurePoringIslandMap'
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCavePath1",13)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCavePath1",14)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
    return(
        <div className="PayonCave3FMap">
          <button className="ReturnHUDBugFix"></button>
          <h3 className="PayonCave3FMapTitle">Payon Cave 3F</h3>
          {/* Path 0 */}
          <button className="PayonCaveBase PayonCave3FToPayonCave2F" onClick={() => {dispatch(GotoPayonCave2FFn()); changePlaceFadeAudio();}}>PayonCave2F</button>
          {/* Path 1 */}
          <button className="PayonCaveBase PayonCave3FPath1" onClick={() => {LoadingScreen0(); changeMapFadeAudio();}}>Cave1</button>
          {/* Path 2 */}
          <button className={Math.random() <= 0.5 && npcControlRoom.BossWolyafaDefeat ? "PayonCaveBase PayonCave3FPath2 PayonCave3FPath2Pic2" : "PayonCaveBase PayonCave3FPath2"} onClick={() => {LoadingScreen1(); changeMapFadeAudio();}}>Boss</button>
          {/* Path 3 */}
          <button className="PayonCaveBase PayonCave3FPath3" onClick={npcControlRoom.ChestBoss2 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest2")); dispatch(ChestBoss2VisitRepeatFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("BossChest2"));}}>shiny chest</button>
          {/* Path 4 */}
          <button className="PayonCaveBase PayonCave3FPath4" onClick={() => {dispatch(GotoPayonCave2FFn()); changePlaceFadeAudio();}}>Hidden1</button>
          {/* Path 5 */}
          <button className="PayonCaveBase PayonCave3FPath5" onClick={() => {dispatch(GotoPayonCave2FFn()); changePlaceFadeAudio();}}>Hidden2</button>
        </div>
    );
}

export default PayonCave3F;