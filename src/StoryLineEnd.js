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
          <p>Thanks for Playing!</p>
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