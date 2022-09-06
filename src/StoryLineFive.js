import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineFiveFn, typeWritterEffectFn, GotoGeffenDungeon3FFn} from './actions';
import GeffenDungeon3F from './GeffenDungeon3F'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import './css/storyLine.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

import DoppelgangerDead from './img/Monster/DoppelgangerDead.png'
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
        case(i < (storyLineOne['storyLineFive'][textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne['storyLineFive'][textReadAndSpeed.count].text).charAt(i)}`);
          console.log((storyLineOne['storyLineFive'][textReadAndSpeed.count].text).charAt(i))
          console.log(i)
          console.log(storyLineOne['storyLineFive'][textReadAndSpeed.count].text.length)
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne['storyLineFive'][textReadAndSpeed.count].text).length):
          console.log(storyLineOne['storyLineFive'].length);
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
        $('.storyCharacterOne').html(`${storyLineOne['storyLineFive'][textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
        Story = Story + 1;
      }
      const LoadingScreen2 = () => {
        dispatch(GotoGeffenDungeon3FFn());
        dispatch(finishStoryLineFiveFn());
      }
    return(
      <div>
        {
        screenControlRoom.GeffenDungeon3F ? <GeffenDungeon3F />:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div className="storyScreenStoryLineFiveBackground">
          <div className="storyScreenStoryLineFive">
          { Story >= 0 ? <img src={DoppelgangerDead} alt="DoppelgangerDead" className="StoryImgFlip StoryImgFiveBossMonster" /> : null}
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">Doppelganger</legend>
          <p className="storySpeech">Cough..Cough...</p>
            { (storyLineOne['storyLineFive'].length === textReadAndSpeed.count) ?
              <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {LoadingScreen2();}}>Continue</button>
              </div>
            : <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => nextLine()}>Next</button>
              </div>
            }
            <div>
              <button className={(storyLineOne['storyLineFive'].length === textReadAndSpeed.count) ? "SkipButton SkipButtonPositon SkipButtonContinue" : "SkipButton SkipButtonPositon"} onClick={() => {LoadingScreen2();}}>Skip</button>
            </div>
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;