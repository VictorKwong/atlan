import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineFourFn, typeWritterEffectFn, BattleLoadingScreenFn , GotoBattlePoringIslandMapFn} from './actions';
import GeffenDungeon3F from './GeffenDungeon3F'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import './css/storyLine.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

import Doppelganger from './img/Monster/Doppelganger.png'
import DoppelgangerBattle from './img/Character/Movie/Doppelganger/DoppelgangerBattle.gif'
import DoppelgangerAttack from './img/Monster/DoppelgangerAttack.gif'
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
        case(i < (storyLineOne['storyLineFour'][textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne['storyLineFour'][textReadAndSpeed.count].text).charAt(i)}`);
          console.log((storyLineOne['storyLineFour'][textReadAndSpeed.count].text).charAt(i))
          console.log(i)
          console.log(storyLineOne['storyLineFour'][textReadAndSpeed.count].text.length)
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne['storyLineFour'][textReadAndSpeed.count].text).length):
          console.log(storyLineOne['storyLineFour'].length);
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
        $('.storyCharacterOne').html(`${storyLineOne['storyLineFour'][textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
        Story = Story + 1;
      }
      const LoadingScreen2 = () => {
        dispatch(BattleLoadingScreenFn())
        setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("GeffenDungeon3FPath4",22)), 1000);
        setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
        setTimeout(() => dispatch(finishStoryLineFourFn()), 1000);
      }
    return(
      <div>
        {
        screenControlRoom.GeffenDungeon3F ? <GeffenDungeon3F />:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div className="storyScreenStoryLineFourBackground">
          <div className="storyScreenStoryLineFour">
          { Story === 5 ? <img src={DoppelgangerAttack} alt="DoppelgangerAttack" className="StoryImgFlip StoryImgFourBossMonster" /> : Story >= 3 ? <img src={DoppelgangerBattle} alt="DoppelgangerBattle" className="StoryImgFlip StoryImgFourBossMonster"/> : <img src={Doppelganger} alt="Doppelganger" className="StoryImgFlip StoryImgFourBossMonster" />}
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">???</legend>
          <p className="storySpeech">We met again... Atlan..</p>
            { (storyLineOne['storyLineFour'].length === textReadAndSpeed.count) ?
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