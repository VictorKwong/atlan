import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineEndFn, GotoWorldMapFn} from './actions';
import WorldMap from './WorldMap'
import './css/storyLine.css'

import BaphometDead from './img/Monster/BaphometDead.png'
let Story = 0;
function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const dispatch = useDispatch();
      // End StoryLineOne
      // if(storyLineOne.length < textReadAndSpeed.count)

      const LoadingScreen2 = () => {
        dispatch(GotoWorldMapFn());
        dispatch(finishStoryLineEndFn());
      }
    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap /> :
        <div className="storyScreenStoryLineEndBackground">
          <div className="storyScreenStoryLineEnd">
            <div className='endingDivision'>
              <h2>AUDIO</h2>
              <p>Ragnarok BGM - PeacefulForest, ThemeOfGeffen, ThroughTheTower, OutOfCuriosity, ThemeOfProntera, Streamside, OneStepCloser, ThemeOfJuno, AncientGroover</p>
              <p>AriaTheScarletAmmo - Soundtrack</p>
              <p>Gameboy Advance turn-on sound</p>
              <p>Laszlo - ImaginaryFriends</p>
              <p>LittleFighter2 - ThemeSong</p>
              <p>RustyHearts - Wings, Heartbroken</p>
              <p>StrugardenNEOBattle BGM</p>
              <p>Tobu - Infectious</p>
            </div>
            <div className='endingDivision'>
              <h2>GRAPHICS</h2>
              <p>Ragnarok Online</p>
              <p>Drawing pictures from Lemonekko</p>
            </div>
            <div className='endingDivision'>
              <h2>STORY LINE</h2>
              <p>Present by Lemonekko</p>
            </div>
            <div className='endingDivision'>
              <h2>~THANKS~</h2>
            </div>
          <div>
            <button className="nextLine StoryButton" onClick={() => LoadingScreen2()}>You're welcome :)</button>
          </div>
          </div>
        </div>
        }
      </div>
    );
}

export default StartMenu;