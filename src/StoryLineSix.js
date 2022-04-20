import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineSixFn, typeWritterEffectFn, BattleLoadingScreenFn , GotoBattlePoringIslandMapFn} from './actions';
import BattlePoringIslandMap from './BattlePoringIslandMap'
import './css/storyLine.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

import Baphomet from './img/Monster/Baphomet.gif'
let Story = 0;
function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const storyLineOne = useSelector(state => state.storyLineOne)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    let i = 0;

    const typeWrite = () => {
      switch(true){
        // Read text
        case(i < (storyLineOne['storyLineSix'][textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne['storyLineSix'][textReadAndSpeed.count].text).charAt(i)}`);
          console.log((storyLineOne['storyLineSix'][textReadAndSpeed.count].text).charAt(i))
          console.log(i)
          console.log(storyLineOne['storyLineSix'][textReadAndSpeed.count].text.length)
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne['storyLineSix'][textReadAndSpeed.count].text).length):
          console.log(storyLineOne['storyLineSix'].length);
          $('.nextLine').prop("disabled", false);
          return null;
        default:
          return null;
        }

      }
      // End StoryLineOne
      // if(storyLineOne.length < textReadAndSpeed.count)

      const nextLine = () => {
        $('.nextLine').prop("disabled", true);
        $('.storySpeech').html('');
        $('.storyCharacterOne').html(`${storyLineOne['storyLineSix'][textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
        Story = Story + 1;
      }
      const LoadingScreen2 = () => {
        dispatch(BattleLoadingScreenFn());
        setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("FinalBoss",25)), 1000);
        setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
        dispatch(finishStoryLineSixFn());
      }
    return(
      <div>
        {
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div className="storyScreenStoryLineSixBackground">
          <div className="storyScreenStoryLineSix">
          { Story >= 0 ? <img src={Baphomet} alt="Baphomet" className="StoryImgFlip StoryImgSixBossMonster" /> : null}
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">Baphomet</legend>
          <p className="storySpeech">The time that we have prepare all of this...</p>
            { (storyLineOne['storyLineSix'].length === textReadAndSpeed.count) ?
              <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {LoadingScreen2();}}>Continue</button>
              </div>
            : <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => nextLine()}>Next</button>
              </div>
            }
        
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;