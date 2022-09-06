import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineSevenFn, typeWritterEffectFn, cutsceneEndFn} from './actions';
import StoryLineEnd from './StoryLineEnd'
import './css/storyLine.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

import BaphometDead from './img/Monster/BaphometDead.png'
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
        case(i < (storyLineOne['storyLineSeven'][textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne['storyLineSeven'][textReadAndSpeed.count].text).charAt(i)}`);
          console.log((storyLineOne['storyLineSeven'][textReadAndSpeed.count].text).charAt(i))
          console.log(i)
          console.log(storyLineOne['storyLineSeven'][textReadAndSpeed.count].text.length)
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne['storyLineSeven'][textReadAndSpeed.count].text).length):
          console.log(storyLineOne['storyLineSeven'].length);
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
        $('.storyCharacterOne').html(`${storyLineOne['storyLineSeven'][textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
        Story = Story + 1;
      }
      const LoadingScreen2 = () => {
        dispatch(cutsceneEndFn());
        dispatch(finishStoryLineSevenFn());
      }
    return(
      <div>
        {
        screenControlRoom.cutsceneEnd ? <StoryLineEnd /> :
        <div className="storyScreenStoryLineSevenBackground">
          <div className="storyScreenStoryLineSeven">
          { Story >= 0 ? <img src={BaphometDead} alt="BaphometDead" className="StoryImgFlip StoryImgSevenBossMonster" /> : null}
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">Baphomet</legend>
          <p className="storySpeech">Arhhhhhhhh......</p>
            { (storyLineOne['storyLineSeven'].length === textReadAndSpeed.count) ?
              <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {LoadingScreen2();}}>Continue</button>
              </div>
            : <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => nextLine()}>Next</button>
              </div>
            }
            <div>
              <button className="SkipButton SkipButtonPositon" onClick={() => {LoadingScreen2();}}>Skip</button>
            </div>
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;