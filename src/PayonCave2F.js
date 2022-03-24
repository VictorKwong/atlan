import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn, GotoPayonCave1FFn, GotoPayonCave3FFn } from './actions';
//Loading Screen
import { BattleLoadingScreenFn } from './actions'
//CHEST
import { PayonCaveChest4VisitRepeatFn } from './actions'
//PATH
import { GotoPayonCave2FPath3Fn , GotoPayonCave2FPath4Fn , GotoPayonCave2FPath6Fn} from './actions'


import WorldMap from './WorldMap'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import TreasurePoringIslandMap from './TreasurePoringIslandMap'
import './css/mapPayonCave2F.css'
import $ from 'jquery'

const PayonCave2F = (data) =>{
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
      $('.PayonCave2FMapTitle').fadeIn(600);
      $('.PayonCave2FMapTitle').delay(2400).fadeOut(600);
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave2FPath1",Math.floor(Math.random() * 2) + 8)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave2FPath2",Math.floor(Math.random() * 2) + 8)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen2 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave2FPath5",10)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen3 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave2FPath7",Math.floor(Math.random() * 2) + 8)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen4 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave2FPath8",11)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreenMiniBoss = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("",12)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
    return(
        <div className="PayonCave2FMap">
          <button className="ReturnHUDBugFix"></button>
          <h3 className="PayonCave2FMapTitle">Payon Cave 2F</h3>
          {/* Path 0 */}
          <button className="PayonCaveBase PayonCave2FToPayonCave1F" onClick={() => {dispatch(GotoPayonCave1FFn()); changePlaceFadeAudio();}}>PayonCave1F</button>
          <button className={Math.random() <= 0.5 ? "PayonCaveBase PayonCave2FPath0 PayonCave2FPath0Pic2" : "PayonCaveBase PayonCave2FPath0"} onClick={() => {LoadingScreen0(); changeMapFadeAudio();}}>Road1</button>
          {/* Path 1 */}
          {screenControlRoom.PayonCave2FPath1 ?
          <button className={Math.random() <= 0.5 ? "PayonCaveBase PayonCave2FPath1 PayonCave2FPath0Pic2" : "PayonCaveBase PayonCave2FPath1"} onClick={() => {LoadingScreen1(); changeMapFadeAudio();}}>Road2</button> : null }
          {/* Path 2 */}
          {screenControlRoom.PayonCave2FPath2 ?
          <button className="PayonCaveBase PayonCave2FPath2" onClick={() => {dispatch(GotoPayonCave2FPath3Fn()); changePlaceFadeAudio();}}>Cross Path</button> : null }
          {/* Path 3 */}
          {screenControlRoom.PayonCave2FPath3 ?
          <button className="PayonCaveBase PayonCave2FPath3" onClick={() => {dispatch(GotoPayonCave2FPath4Fn()); changePlaceFadeAudio();}}>Road3</button> : null }
          {screenControlRoom.PayonCave2FPath3 ?
          <button className="PayonCaveBase PayonCave2FPath9" onClick={() => {LoadingScreenMiniBoss(); changeMapFadeAudio();}}>???</button> : null}
          {/* Path 4 */}
          {screenControlRoom.PayonCave2FPath4 ?
          <button className="PayonCaveBase PayonCave2FPath4" onClick={() => {LoadingScreen2(); changeMapFadeAudio();}}>Road4</button> : null}
          {/* Path 5 */}
          {screenControlRoom.PayonCave2FPath5 ?
          <button className="PayonCaveBase PayonCave2FPath5" onClick={() => {dispatch(GotoPayonCave2FPath6Fn()); changePlaceFadeAudio();}}>CaveNPC</button> : null}
          {/* Path 6 */}
          {screenControlRoom.PayonCave2FPath6 ?
          <button className={Math.random() <= 0.5 ? "PayonCaveBase PayonCave2FPath6 PayonCave2FPath1Pic2" : "PayonCaveBase PayonCave2FPath6"} onClick={() => {LoadingScreen3(); changeMapFadeAudio();}}>Road6</button> : null }
          {screenControlRoom.PayonCave2FPath6 ?
          <button className="PayonCaveBase PayonCave2FPath10" onClick={npcControlRoom.PayonCaveChest4 ? () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("PayonCaveChest4")); dispatch(PayonCaveChest4VisitRepeatFn());} : () => {changePlaceFadeAudio(); dispatch(GotoTreasurePoringIslandMapFn("PayonCaveChest4"));}}>treasure chest</button> : null }
          {/* Path 7 */}
          {screenControlRoom.PayonCave2FPath7 ?
          <button className="PayonCaveBase PayonCave2FPath7" onClick={() => {LoadingScreen4(); changeMapFadeAudio();}}>Road7</button> : null}
          {/* Path 8 */}
          {screenControlRoom.PayonCave2FPath8 ?
          <button className="PayonCaveBase PayonCave2FToPayonCave3F" onClick={() => {dispatch(GotoPayonCave3FFn()); changePlaceFadeAudio();}}>PayonCave3F</button> : null}
        </div>
    );
}

export default PayonCave2F;