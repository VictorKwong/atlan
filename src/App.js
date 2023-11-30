import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentScreen } from './actions/screenActions';
import StartMenu from './StartMenu';

import StoryLineTalent from './StoryLineTalent'
import GameOption from './GameOption';
import StoryLineOne from './StoryLineOne'
import WorldMap from './WorldMap'

import BattlePoringIslandMap from './BattlePoringIslandMap'
import Prontera from './Prontera'
import PronteraCastle from './PronteraCastle'
import PoringIsland from './PoringIsland'
import Geffen from './Geffen'
import GeffenDungeon1F from './GeffenDungeon1F'
import GeffenDungeon3F from './GeffenDungeon3F'
import PayonCave1F from './PayonCave1F'
import ChallengeTower from './ChallengeTower'
import StoryLineTwo from './StoryLineTwo'
import StoryLineThree from './StoryLineThree'
import StoryLineFour from './StoryLineFour'
import StoryLineFive from './StoryLineFive'
import StoryLineSix from './StoryLineSix'
import StoryLineSeven from './StoryLineSeven'
import StoryLineEnd from './StoryLineEnd'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import AltanSkills from './AltanSkills'

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
            currentScreen === "BattlePoringIslandMap" ? <BattlePoringIslandMap /> :
            currentScreen === "storyLineOne" ? <StoryLineOne /> :
            currentScreen === "PoringIsland" ? <PoringIsland  /> :
            currentScreen === "Geffen" ? <Geffen  /> :
            currentScreen === "GeffenDungeon1F" ? <GeffenDungeon1F  /> :
            currentScreen === "GeffenDungeon3F" ? <GeffenDungeon3F  /> :
            currentScreen === "PayonCave1F" ? <PayonCave1F  /> :
            currentScreen === "ChallengeTower" ? <ChallengeTower  /> :
            currentScreen === "StoryLineTwo" ? <StoryLineTwo  /> :
            currentScreen === "StoryLineThree" ? <StoryLineThree  /> :
            currentScreen === "StoryLineFour" ? <StoryLineFour  /> :
            currentScreen === "StoryLineFive" ? <StoryLineFive  /> :
            currentScreen === "StoryLineSix" ? <StoryLineSix  /> :
            currentScreen === "StoryLineSeven" ? <StoryLineSeven  /> :
            currentScreen === "StoryLineEnd" ? <StoryLineEnd  /> :
            currentScreen === "AltanEquipment" ? <AltanEquipment  /> :
            currentScreen === "AltanStats" ? <AltanStats  /> :
            currentScreen === "AltanItem" ? <AltanItem  /> :
            currentScreen === "AltanQuest" ? <AltanQuest  /> :
            currentScreen === "AltanSkills" ? <AltanSkills  /> :
            currentScreen === "opening" ?
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
            </div> : null
            }
            </div>
            <Footer />
        </div>
      </div>
    );
}

export default App;