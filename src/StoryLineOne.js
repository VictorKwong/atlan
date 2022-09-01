import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineOneFn, typeWritterEffectFn, GotoWorldMapFn } from './actions';
import WorldMap from './WorldMap'
import './css/storyLine.css'
import $ from 'jquery'

import Baphomet from './img/Monster/Baphomet.gif'
import BaphometAttack from './img/Monster/BaphometAttack.gif'
import MaiyaDead from './img/Character/Movie/Maiya/MaiyaDead1.png'
import MaiyaDying from './img/Character/Movie/Maiya/MaiyaDying.png'
import AtlanWalk2 from './img/Character/Movie/Altan/AltanWalk2.gif'
import AtlanFight2 from './img/Character/Movie/Altan/AltanFight2.gif'

let Story = 0;
function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const storyLineOne = useSelector(state => state.storyLineOne)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    const dispatch = useDispatch();
    let i = 0;

    const typeWrite = () => {
      switch(true){
        // Read text
        case(i < (storyLineOne['storyLineOne'][textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne['storyLineOne'][textReadAndSpeed.count].text).charAt(i)}`);
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne['storyLineOne'][textReadAndSpeed.count].text).length):
          $('.nextLine').prop("disabled", false);
          return null;
        default:
          return null;
        }
      }

      const nextLine = () => {
        $('.nextLine').prop("disabled", true);
        $('.storySpeech').html('');
        $('.storyCharacterOne').html(`${storyLineOne['storyLineOne'][textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
        Story = Story + 1;
      }

      
    return(
      <div>
        {screenControlRoom.storyLineOne ? <WorldMap  /> :
        <div className={Story >= 7 ? "storyScreenStoryfadeOut storyScreenStoryLineBackground" : "storyScreenStoryLineBackground"}>
          <div className="storyScreenStoryLineOne">
            { Story === 0 ? <img src={BaphometAttack} alt="BaphometAttack" className="StoryImgFlip StoryImgMonster" /> : Story >= 6 ? null : <img src={Baphomet} alt="Baphomet" className="StoryImgFlip StoryImgMonster"/>}
            { Story === 0 ? <img src={MaiyaDying} alt="MaiyaDying" className="StoryImgChar"/> : <img src={MaiyaDead} alt="MaiyaDead" className={ Story === 8 ? "StoryImgCharDead StoryImgCharfadeOne" : Story === 9 ? "StoryImgCharDead StoryImgCharfadeTwo" : "StoryImgCharDead"} />}
            { Story === 7 || Story === 8 || Story ===  9 ? <img src={AtlanWalk2} alt="AtlanWalk" className={ Story === 8 ? "StoryImgChar StoryImgCharfadeOne" : Story === 9 ? "StoryImgChar StoryImgCharfadeTwo" : "StoryImgChar"}/> : <img src={AtlanFight2} alt="AtlanFight" className="StoryImgChar" />}
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">???</legend>
          <p className="storySpeech">......</p>
            { (storyLineOne['storyLineOne'].length === textReadAndSpeed.count) ?
              <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {dispatch(finishStoryLineOneFn()); dispatch(GotoWorldMapFn());}}>Continue</button>
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