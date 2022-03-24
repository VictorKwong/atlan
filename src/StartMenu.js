import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameFn, gameTitleOptionScreenFn } from './actions';
import StoryLineOne from './StoryLineOne'
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
      dispatch(startGameFn());
    };

    
    return(
      <div>
        {/* Click startGame goes to Main */}
        {screenControlRoom.startGame && !screenControlRoom.gameTitleOptionScreen ? <StoryLineOne />
        // Click Option goes to GameOption
        : !screenControlRoom.startGame && screenControlRoom.gameTitleOptionScreen ? <GameOption /> 
        : 
        <div className="menuBackground">
          <div className="menuTitle">
            <h1>Atlan - Ragnarok</h1>
          </div>
          <div className="menuSelect">
            <div>
              <button className="menuButton" onClick={startGameQtn}>New Game</button>
            </div>
            <div>
              <button className="menuButton" onClick={() => dispatch(gameTitleOptionScreenFn())}>Options</button>
            </div>
          </div>
        </div>
        }
      </div>
    );
}

export default StartMenu;