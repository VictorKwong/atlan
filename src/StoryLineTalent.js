import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storyLineTalentFn, UserFirstGiftFn, UserSecondGiftFn } from './actions';
import StoryLineOne from './StoryLineOne'
import './css/storyLineTalent.css'
import $ from 'jquery'

let Story = 0;
function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const dispatch = useDispatch();



    const pickedGifts = () => {
      Story = 1;
      dispatch(UserFirstGiftFn(true));
    }

    return(
      <div>
        {screenControlRoom.startGame && screenControlRoom.storyLineTalent ? <StoryLineOne /> :
        <div className={"storyScreenStoryLineTalentBackground"}>
          {Story === 0 && !SkillControlRoom['User'].UserFirstGift?
          <div className="storyScreenStoryLineTalent">
              <p>Pick you 1st Gifts</p>
              <button onClick={() => {pickedGifts();}}>Sword Master - Attack + 50</button>
              <button onClick={() => {pickedGifts();}}>Swiftness - Flee + 15</button>
              <button onClick={() => {pickedGifts();}}>Gloria - Luk + 10</button>
              <button onClick={() => {pickedGifts();}}>Body Build - HP + 100 and SP + 30</button>
          </div> :
          <div className="storyScreenStoryLineTalent">
              <p>Pick you 2nd Gifts</p>
              <button>Changing Vector</button>
              <button>Bai</button>
              <button>Lurker</button>
              <button>Final</button>
          </div> }
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">???</legend>
          <p className="storySpeech">......</p>
              <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {dispatch(storyLineTalentFn(true));}}>Continue</button>
              </div>
        
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;