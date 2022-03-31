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
          <button className="GeffenDungeonBase GeffenDungeon2FToGeffenDungeon1F" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio();}}>GeffenDungeon 1F</button>
          {/* Path 0 Split 0 */}
          <button className="GeffenDungeonBase GeffenDungeon2FPath0Split0" onClick={() => {LoadingScreen0(); changeMapFadeAudio();}}>Split0</button>
          {/* Path 1 Split 0 */}
          <button className={Math.random() <= 0.5 ? "GeffenDungeonBase GeffenDungeon2FPath1Split0" : "GeffenDungeonBase GeffenDungeon2FPath1Split0 GeffenDungeon2FPath1Split0Pic2"} onClick={() => {LoadingScreen1(); changeMapFadeAudio();}}>Road1</button>
          {/* Path 2 Split 0 */}
          <button className="GeffenDungeonBase GeffenDungeon2FPath2Split0" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio();}}>Road2</button>
          {/* Path 2 Split 0 Hidden*/}
          <button className="GeffenDungeonBase GeffenDungeon2FPathHidden1" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio();}}>Hidden Story</button>
          {/* Path 3 Split 0 */}
          <button className="GeffenDungeonBase TreasureBoxGeffenDungeon2F1" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio();}}>Treasure box</button>
          
          {/* Path 0 Split 1 */}
          <button className="GeffenDungeonBase GeffenDungeon2FPath0Split1" onClick={() => {LoadingScreen2(); changeMapFadeAudio();}}>Split1</button>
          {/* Path 1 Split 1 */}
          <button className="GeffenDungeonBase TreasureBoxGeffenDungeon2F2" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio();}}>Treasure box</button>
          <button className="GeffenDungeonBase GeffenDungeon2FPath1Split1" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changePlaceFadeAudio();}}>Road2B</button>
          {/* Path 2 Split 1 */}
          <button className="GeffenDungeonBase GeffenDungeon2FPath2Split1" onClick={() => {LoadingScreen3(); changeMapFadeAudio();}}>Road2B2</button>
          {/* Path 4 */}
          <button className="GeffenDungeonBase GeffenDungeon2FToGeffenDungeon3F" onClick={() => {dispatch(GotoGeffenDungeon1FFn()); changeMapFadeAudio();}}>GeffenDungeon 3F</button>
        </div>
    );
}

export default PayonCave2F;