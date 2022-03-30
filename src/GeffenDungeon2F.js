import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoBattlePoringIslandMapFn, GotoTreasurePoringIslandMapFn, GotoGeffenDungeon1FFn, GotoPayonCave3FFn } from './actions';
//Loading Screen
import { BattleLoadingScreenFn } from './actions'
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
    setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave2FPath1",Math.floor(Math.random() * 2) + 8)), 1000);
    setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
  }
    return(
        <div className="GeffenDungeon2FMap">
          <button className="ReturnHUDBugFix"></button>
          <h3 className="GeffenDungeon2FMapTitle">Geffen Dungeon 2F</h3>
          {/* Path 0 */}
          <button className="GeffenDungeonBase GeffenDungeonBase2FToGeffenDungeonBase1F" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio();}}>GeffenDungeon 1F</button>
          
        </div>
    );
}

export default PayonCave2F;