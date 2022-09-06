import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineTwoFn, typeWritterEffectFn, BattleLoadingScreenFn , GotoBattlePoringIslandMapFn} from './actions';
import PoringIsland from './PoringIsland'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import './css/storyLine.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

import Lunatic from './img/Monster/Lunatic.gif'
import Eclipse from './img/Monster/Eclipse.gif'
import EclipseAttack from './img/Monster/EclipseAttack.gif'

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
        case(i < (storyLineOne['storyLineTwo'][textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne['storyLineTwo'][textReadAndSpeed.count].text).charAt(i)}`);
          console.log((storyLineOne['storyLineTwo'][textReadAndSpeed.count].text).charAt(i))
          console.log(i)
          console.log(storyLineOne['storyLineTwo'][textReadAndSpeed.count].text.length)
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne['storyLineTwo'][textReadAndSpeed.count].text).length):
          console.log(storyLineOne['storyLineTwo'].length);
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
        $('.storyCharacterOne').html(`${storyLineOne['storyLineTwo'][textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
        Story = Story + 1;
      }
      const LoadingScreenThreeBoss = () => {
        dispatch(BattleLoadingScreenFn())
        setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("Path5",5)), 1000);
        setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
        setTimeout(() => dispatch(finishStoryLineTwoFn()), 1000);
      }

    return(
      <div>
        {
        screenControlRoom.PoringIsland ? <PoringIsland />:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div className="storyScreenStoryLineTwoBackground">
          <div className="storyScreenStoryLineTwo">
            { Story >= 0 ? <img src={Lunatic} alt="Lunatic" className="StoryImgFlip StoryImgTwoMonster" /> : null}
            { Story >= 2 ? <img src={Lunatic} alt="Lunatic" className="StoryImgFlip StoryImgTwoMonster" /> : <img src={Lunatic} alt="Lunatic" className="StoryImgTwoMonster" /> }
            { Story === 4 ? <img src={EclipseAttack} alt="EclipseAttack" className="StoryImgFlip StoryImgTwoBossMonster" /> : Story >= 2 ? <img src={Eclipse} alt="Eclipse" className="StoryImgFlip StoryImgTwoBossMonster" /> : <img src={Eclipse} alt="Eclipse" className="StoryImgTwoBossMonster" />}
            { Story >= 2 ? <img src={Lunatic} alt="Lunatic" className="StoryImgFlip StoryImgTwoMonster" /> : <img src={Lunatic} alt="Lunatic" className="StoryImgTwoMonster" /> }
            { Story >= 0 ? <img src={Lunatic} alt="Lunatic" className="StoryImgFlip StoryImgTwoMonster" /> : null}
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">Lunatic</legend>
          <p className="storySpeech">♪♪♪♪~</p>
            { (storyLineOne['storyLineTwo'].length === textReadAndSpeed.count) ?
              <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {LoadingScreenThreeBoss();}}>Continue</button>
              </div>
            : <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => nextLine()}>Next</button>
              </div>
            }
            <div>
              <button className={(storyLineOne['storyLineTwo'].length === textReadAndSpeed.count) ? "SkipButton SkipButtonPositon SkipButtonContinue" : "SkipButton SkipButtonPositon"} onClick={() => {LoadingScreenThreeBoss();}}>Skip</button>
            </div>
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;