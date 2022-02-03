import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameFn, gameTitleOptionScreenFn } from './actions';
import Main from './Main';
import GameOption from './GameOption';
import './css/startMenu.css'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    const startGameQtn = (e) => {
      e.preventDefault();
      setTimeout(() => {
        dispatch(startGameFn())}, 1000);
    };
    
    return(
      <div>
        {/* Click startGame goes to Main */}
        {screenControlRoom.startGame && !screenControlRoom.gameTitleOptionScreen ? <Main />
        // Click Option goes to GameOption
        : !screenControlRoom.startGame && screenControlRoom.gameTitleOptionScreen ? <GameOption /> 
        : 
        <div>
          <div className="menuTitle">
            <h1>Atlan Adventure</h1>
          </div>
          <div className="menuSelect">
            <div>
              <button onClick={startGameQtn}>Start</button>
            </div>
            <div>
              <button onClick={() => dispatch(gameTitleOptionScreenFn())}>Option</button>
            </div>
          </div>
        </div>
        }
      </div>
    );
}

export default StartMenu;