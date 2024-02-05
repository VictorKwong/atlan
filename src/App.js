import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentScreen } from './actions/screenActions';
import StartMenu from './StartMenu';

import StoryLineTalent from './StoryLineTalent'
import StoryLineOne from './StoryLineOne'
import StoryLineTwo from './StoryLineTwo'
import StoryLineThree from './StoryLineThree'
import StoryLineFour from './StoryLineFour'
import StoryLineFive from './StoryLineFive'
import StoryLineSix from './StoryLineSix'
import StoryLineSeven from './StoryLineSeven'
import StoryLineEnd from './StoryLineEnd'

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
            currentScreen === "storyLineOne" ? <StoryLineOne /> :
            currentScreen === "opening" ?
            <div className="logoBox">
              <div className="logoLine1"></div>
              <div className="logoLine2"></div>
              <div className="logoLine3"></div>
              <div className="logoLine4"></div>
              <span className="logoLetter1">C</span>
              <span className="logoLetter2">o</span>
              <span className="logoLetter3">d</span>
              <span className="logoLetter4">e</span>
              <span className="logoLetter5">L</span>
              <span className="logoLetter6">e</span>
              <span className="logoLetter7">m</span>
              <span className="logoLetter8">o</span>
              <span className="logoLetter9">n</span>
              <span className="logoLetter10">i</span>
              <span className="logoLetter11">x</span>
              <span className="logoLetter12"><img src={LemonekkoMonkey} alt="LemonekkoMoney"></img></span>
            </div> : null
            }
            </div>
            <Footer />
        </div>
      </div>
    );
}

export default App;