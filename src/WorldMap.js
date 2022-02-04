import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn, GotoPoringIslandFn, GotoAntHellFn} from './actions';
import BattlePoringIslandMap from './BattlePoringIslandMap'
import Prontera from './Prontera'
import PoringIsland from './PoringIsland'
import AntHell from './AntHell'
import './css/storyMainMap.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div>
        {
        screenControlRoom.Prontera ? <Prontera />:
        screenControlRoom.PoringIsland ? <PoringIsland />:
        screenControlRoom.AntHell ? <AntHell />:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap />: 
        <div>
          <div className="storyMapScreen">
            <div className="StoryMap">
              <button className="Prontera" onClick={() => {dispatch(GotoPronteraFn())}}>Prontera</button>
              <button className="SogratDesertPoringIsland" onClick={() => {dispatch(GotoPoringIslandFn())}}>Poring Island</button>
              <button className="AntHell" onClick={() => {dispatch(GotoAntHellFn())}}>AntHell</button>
            </div>
            <div className="StoryHUD">
              <h1>HUD</h1>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>
        
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;