import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn, GotoGeffenDungeon3FFn } from './actions';
//Loading Screen
import { BattleLoadingScreenFn } from './actions'
//CHEST
import { GeffenDungeonChest2VisitRepeatFn , GeffenDungeonChest3VisitRepeatFn } from './actions'
//PATH
import { GotoGeffenDungeon2FPath3Fn, GotoGeffenDungeon2FPath5Fn, GotoGeffenDungeon2FPath6Fn} from './actions'
//NPC
import { GeffenDungeon2FSelfNPCFn, GeffenDungeon2FRekiNPCFn, ResetGeffenDungeonNPCFn } from './actions'

import './css/mapGeffenDungeon4F.css'
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
      $('.GeffenDungeon4FMapTitle').fadeIn(600);
      $('.GeffenDungeon4FMapTitle').delay(2400).fadeOut(600);
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon4FPath1",23)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
  const LoadingScreen1 = () => {
    dispatch(BattleLoadingScreenFn());
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("",24)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }

    return(
        <div className="GeffenDungeon4FMap">
          <button className="ReturnHUDBugFix"></button>
          <h3 className="GeffenDungeon4FMapTitle">Geffen Dungeon 4F</h3>
          {/* Path 0 */}
          <button className="GeffenDungeonBase GeffenDungeon4FToGeffenDungeon3F" onClick={() => {dispatch(GotoGeffenDungeon3FFn()); changePlaceFadeAudio(); dispatch(ResetGeffenDungeonNPCFn());}}>GeffenDungeon 3F</button>
          <button className="GeffenDungeonBase GeffenDungeon4FPath0" onClick={() => {LoadingScreen0(); changePlaceFadeAudio();}}>Wrath</button>
          {/* Path 1 */}
          {screenControlRoom.GeffenDungeon4FPath1 ?
          <button className="GeffenDungeonBase GeffenDungeon4FPath1" onClick={() => {LoadingScreen1(); changePlaceFadeAudio();}}>???</button> : null}
        </div>
    );
}

export default PayonCave2F;