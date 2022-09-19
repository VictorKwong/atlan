import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameFn, gameTitleOptionScreenFn, NextWorldMapLoadingScreenFn } from './actions';
import StoryLineTalent from './StoryLineTalent'
import GameOption from './GameOption';
import './css/startMenu.css'



function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const dispatch = useDispatch();

    const startGameQtn = (e) => {
      e.preventDefault();
      //nextMapBackgroundExchange
      dispatch(startGameFn());
    };

    
    return(
      <div>
        {/* Click startGame goes to Main */}
        {screenControlRoom.startGame ? <StoryLineTalent />
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