import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameFn, gameTitleOptionScreenFn } from './actions';
import Main from './Main'
import './css/storyLine.css'
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

    window.onclick = (e) =>{
        e.preventDefault();
        console.log('hehh')
    }
    useEffect(() => {
        document.addEventListener('keypress', (e) => {
            e.preventDefault();
            console.log(e.code)
            //KeyZ
        })
    }, [])

    return(
      <div>
        {screenControlRoom.storyLineOne ? <Main /> :
        <div>
          <div className="storyScreen">
            <h1>Screen</h1>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter">Altan</legend>
          <p className="storySpeech">Run to the village!</p>
            <div>
              <button onClick={startGameQtn}>New Game</button>
            </div>
            <div>
              <button onClick={() => dispatch(gameTitleOptionScreenFn())}>Options</button>
            </div>

        
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;