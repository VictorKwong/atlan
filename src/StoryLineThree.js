import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineThreeFn, typeWritterEffectFn, BattleLoadingScreenFn , GotoBattlePoringIslandMapFn} from './actions';
import PayonCave1F from './PayonCave1F'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import './css/storyLine.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'

import NineTail from './img/Character/Movie/NineTail/NineTail.gif'
import Wolyafa from './img/Monster/Wolyafa.gif'
import WolyafaAttack from './img/Monster/WolyafaAttack.gif'
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
        case(i < (storyLineOne['storyLineThree'][textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne['storyLineThree'][textReadAndSpeed.count].text).charAt(i)}`);
          console.log((storyLineOne['storyLineThree'][textReadAndSpeed.count].text).charAt(i))
          console.log(i)
          console.log(storyLineOne['storyLineThree'][textReadAndSpeed.count].text.length)
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne['storyLineThree'][textReadAndSpeed.count].text).length):
          console.log(storyLineOne['storyLineThree'].length);
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
        $('.storyCharacterOne').html(`${storyLineOne['storyLineThree'][textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
        Story = Story + 1;
      }
      const LoadingScreenThreeBoss = () => {
        dispatch(BattleLoadingScreenFn());
        setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("PayonCave3FPath4",15)), 1000);
        setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
        setTimeout(() => dispatch(finishStoryLineThreeFn()), 1000);
      }

    return(
      <div>
        {
        screenControlRoom.PayonCave1F ? <PayonCave1F />:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap /> :
        <div className="storyScreenStoryLineThreeBackground">
          <div className="storyScreenStoryLineThree">
          { Story >= 0 ? <img src={NineTail} alt="NineTail" className="StoryImgFlip StoryImgThreeMonster" /> : null}
          { Story === 3 ? <img src={WolyafaAttack} alt="WolyafaAttack" className="StoryImgFlip StoryImgThreeBossMonster" /> : Story >= 2 ? <img src={Wolyafa} alt="Wolyafa" className="StoryImgFlip StoryImgThreeBossMonster" /> : <img src={Wolyafa} alt="Wolyafa" className="StoryImgThreeBossMonster" />}
          { Story >= 0 ? <img src={NineTail} alt="NineTail" className="StoryImgFlip StoryImgThreeMonster" /> : null}
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">???</legend>
          <p className="storySpeech">Ringring..♬♬</p>
            { (storyLineOne['storyLineThree'].length === textReadAndSpeed.count) ?
              <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {LoadingScreenThreeBoss();}}>Continue</button>
              </div>
            : <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => nextLine()}>Next</button>
              </div>
            }
            <div>
              <button className="SkipButton SkipButtonPositon" onClick={() => {LoadingScreenThreeBoss();}}>Skip</button>
            </div>
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;