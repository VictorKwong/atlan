import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NextWorldMapLoadingScreenFn } from './actions';
import { setCurrentScreen } from './actions/screenActions';

import './css/startMenu.css'

function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const dispatch = useDispatch();

    const startGameQtn = (e) => {
      e.preventDefault();

      dispatch(NextWorldMapLoadingScreenFn());
    
      const waitForFirstAction = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });
    
      waitForFirstAction.then(() => {
        dispatch(setCurrentScreen("startGameTalent"));
        dispatch(NextWorldMapLoadingScreenFn());
      });
    };

    
    return(
      <div>
        <div className={screenControlRoom.NextWorldMapLoadingScreen ? "menuBackground gameBGStart" : "menuBackground"}>
          <div className="menuTitle">
            <h1>Atlan - Ragnarok</h1>
          </div>
          <div className="menuSelect">
            <div>
              <button className="menuButton" onClick={startGameQtn}>New Game</button>
            </div>
            <div>
              <button className="menuButton" onClick={() => dispatch(setCurrentScreen("gameMenuOptionScreen"))}>Options</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default StartMenu;