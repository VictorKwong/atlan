import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentScreen } from './actions/screenActions';
import StartMenu from './StartMenu';

import StoryLineTalent from './StoryLineTalent'
import GameOption from './GameOption';
import StoryLineOne from './StoryLineOne'

import Footer from './Footer'
import audioStartUpGame from './audio/audioStartUpGame.mp3'
import LemonekkoMonkey from './img/Misc/monkey.png'



const audioBGM = new Audio(audioStartUpGame);

function App(){
    const currentScreen = useSelector((state) => state.screenControlRoom.currentScreen);
    const dispatch = useDispatch();

    useEffect(() => {
      const handleAudioEnded = () => {
        dispatch(setCurrentScreen("gameMenu"));
      };
    
      audioBGM.volume = 0.2;
      audioBGM.addEventListener('ended', handleAudioEnded);
      audioBGM.play();
    
      return () => {
        audioBGM.removeEventListener('ended', handleAudioEnded);
      };
      // Not Depend on audioControlRoom
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
      <div className="logoBackground">
        <div className="wrapper pageFix">
            <div className="allWrapping">
            {currentScreen === "gameMenu" ? <StartMenu/> :
            currentScreen === "startGameTalent" ? <StoryLineTalent /> :
            currentScreen === "gameMenuOptionScreen" ? <GameOption /> :
            currentScreen === "storyLineOne" ? <StoryLineOne /> :
            <div className="logoBox">
              <div className="logoLine1"></div>
              <div className="logoLine2"></div>
              <div className="logoLine3"></div>
              <div className="logoLine4"></div>
              <span className="logoLetter1">L</span>
              <span className="logoLetter2">e</span>
              <span className="logoLetter3">m</span>
              <span className="logoLetter4">o</span>
              <span className="logoLetter5">n</span>
              <span className="logoLetter6">E</span>
              <span className="logoLetter7">k</span>
              <span className="logoLetter8">k</span>
              <span className="logoLetter9">o</span>
              <span className="logoLetter10"><img src={LemonekkoMonkey} alt="LemonekkoMoney"></img></span>
            </div>
            }
            </div>
            <Footer />
        </div>
      </div>
    );
}

export default App;