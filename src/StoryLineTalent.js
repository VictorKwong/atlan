import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storyLineTalentFn, UserFirstGiftFn, UserSecondGiftFn } from './actions';
import { GiftOneFn, GiftTwoFn } from './actions';
import { NextWorldMapLoadingScreenFn } from './actions'
import StoryLineOne from './StoryLineOne'
import './css/storyLineTalent.css'
import $ from 'jquery'

import SwordMastery from './img/Gift/SwordMastery.gif'
import Swiftness from './img/Gift/Swiftness.gif'
import Gloria from './img/Gift/Gloria.gif'
import Endure from './img/Gift/Endure.gif'
import ImpositioManus from './img/Gift/ImpositioManus.gif'
import AttentionConcentrate from './img/Gift/AttentionConcentrate.gif'
import Blessing from './img/Gift/Blessing.gif'
import Magnificat from './img/Gift/Magnificat.gif'

import BGMTitle from './audio/Title.mp3'
import LoginSound from './audio/SoundEffect/RoomChat.mp3'
const audioBGM = new Audio(BGMTitle);
const audioSoundEffect = new Audio(LoginSound)

let Story = 0;
let FirstGift = 0;
let SecondGift = 0;

function StartMenu(){
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const dispatch = useDispatch();

    const pickedGifts = (giftNumber) => {
      audioSoundEffect.pause();
      audioSoundEffect.currentTime = 0;
      audioSoundEffect.play();
      (() => {
        switch (true) {
          case (giftNumber >= 1 && giftNumber <= 4):
            FirstGift = giftNumber;
            Story++;
            return dispatch(UserFirstGiftFn(true));
          default:
            SecondGift = giftNumber;
            Story++;
            return dispatch(UserSecondGiftFn(true));
        }  
      })()
    }
    const AcceptFunction = (First,Second) => {
      audioSoundEffect.pause();
      audioSoundEffect.currentTime = 0;
      audioSoundEffect.play();
      // audioBGM.pause();
      // audioBGM.currentTime = 0;
      dispatch(GiftOneFn(First));
      dispatch(GiftTwoFn(Second));
      dispatch(storyLineTalentFn(true));
    }
    const changeMapFadeAudio = () => {
      let i = 0;
      const fadeAudio = setInterval(() => {
          if (audioBGM.volume === parseFloat(audioControlRoom.AudioVolumeBGMFixed.toFixed(5))){
            i = i + 1;
          }
          if (audioBGM.volume !== 0) {
            audioBGM.volume -= parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))
            audioBGM.volume = audioBGM.volume.toFixed(5)
          }
          if (audioBGM.volume < parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))) {
              audioBGM.volume = 0;
              audioBGM.pause();
              audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }else if (i >= 2){
            audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5)
            clearInterval(fadeAudio);
          }
        }, 10);
    }

    const refuseFunction = () => {
      audioSoundEffect.pause();
      audioSoundEffect.currentTime = 0;
      audioSoundEffect.play();
      Story = 0;
      FirstGift = 0;
      SecondGift = 0;
      dispatch(UserFirstGiftFn(false));
      dispatch(UserSecondGiftFn(false));
    }

    useEffect(() => {
        audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
        audioSoundEffect.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
        let playPromise = audioBGM.play(); 
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            audioBGM.loop = true;
            audioBGM.play()
          })
          .catch(error => {
          });
        }
        dispatch(NextWorldMapLoadingScreenFn());
        setTimeout(() => {dispatch(NextWorldMapLoadingScreenFn())}, 1000);
      //Not Depend on audioControlRoom
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const GiftBox = [
      {id: 1, img: SwordMastery, imgAlt:"Sword Mastery", text:"Sword Master - Attack + 50", Result:1},
      {id: 2, img: Swiftness, imgAlt:"Swiftness", text:"Swiftness - Flee + 15", Result:2},
      {id: 3, img: Gloria, imgAlt:"Gloria", text:"Gloria - Luk + 10", Result:3},
      {id: 4, img: Endure, imgAlt:"Endure", text:"Endure - HP + 100 and SP + 30", Result:4},
    ]

    const GiftTwoBox = [
      {id: 5, img: ImpositioManus, imgAlt:"Impositio Manus", text:"Impositio Manus - Attack + 30", Result:5},
      {id: 6, img: AttentionConcentrate, imgAlt:"Attention Concentrate", text:"Attention Concentrate - AGI/DEX + 7", Result:6},
      {id: 7, img: Blessing, imgAlt:"Blessing", text:"Blessing - STR/DEX/INT + 5", Result:7},
      {id: 8, img: Magnificat, imgAlt:"Magnificat", text:"Magnificat - Recover HP + 30 SP + 5", Result:8},
    ]

    return(
      <div>
        {screenControlRoom.startGame && screenControlRoom.storyLineTalent ? <StoryLineOne /> :
        <div className={screenControlRoom.NextWorldMapLoadingScreen ? "storyScreenStoryLineTalentBackground talentBGStart" : "storyScreenStoryLineTalentBackground"}>
          {Story === 0 && !SkillControlRoom['User'].UserFirstGift ?
          <div className="storyScreenStoryLineTalent">
              <p className="giftTitle">Pick you 1st Gifts</p>
              {GiftBox.map(Gift => {
                  return(
                    <span key={Gift.id}>
                      <button className="TalentButton altanEquipmentButtonFix" onClick={() => {pickedGifts(Gift.Result)}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Gift.img} alt={Gift.img === null ? "" : Gift.imgAlt} />{Gift.text}</p>
                        </div>
                      </button>
                    </span>
                  )
                })}
          </div> :
          Story === 1 && !SkillControlRoom['User'].UserSecondGift ?
          <div className="storyScreenStoryLineTalent">
              <p className="giftTitle">Pick you 2nd Gifts</p>
              {GiftTwoBox.map(Gift => {
                  return(
                    <span key={Gift.id}>
                      <button className="TalentButton altanEquipmentButtonFix" onClick={() => {pickedGifts(Gift.Result)}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Gift.img} alt={Gift.img === null ? "" : Gift.imgAlt} />{Gift.text}</p>
                        </div>
                      </button>
                    </span>
                  )
                })}
          </div> : 
          Story === 2 ?
          <div className="storyScreenStoryLineTalent">
              <p className="giftTitle">Confirm?</p>
              {GiftBox.map(Gift => {
                  return(
                    <span key={Gift.id}>
                    {FirstGift === Gift.Result ?
                      <div className="TalentResult altanEquipmentButtonFix">
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Gift.img} alt={Gift.img === null ? "" : Gift.imgAlt} />{Gift.text}</p>
                        </div>
                      </div> : null}
                    </span> 
                  )
                })}
                {GiftTwoBox.map(Gift => {
                  return(
                    <span key={Gift.id}>
                      {SecondGift === Gift.Result ?
                      <div className="TalentResult altanEquipmentButtonFix">
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Gift.img} alt={Gift.img === null ? "" : Gift.imgAlt} />{Gift.text}</p>
                        </div>
                      </div> : null}
                    </span>
                  )
                })}
              <span>
                <button className="TalentButton altanEquipmentButtonFix" onClick={() => {AcceptFunction(FirstGift,SecondGift); changeMapFadeAudio();}}>
                  <div className="adjImgCenterBox">
                    <p className="adjImgCenter">YES</p>
                  </div>
                </button>
              </span>
              <span>
                <button className="TalentButton altanEquipmentButtonFix" onClick={() => {refuseFunction();}}>
                  <div className="adjImgCenterBox">
                    <p className="adjImgCenter">NO</p>
                  </div>
                </button>
              </span>
          </div> : null}
          <fieldset className="storyChat">
          <legend className="storyCharacterOne">Atlan</legend>
          <p className="storySpeech"></p>
              {/* <div>
                <button className="nextLine StoryButton StoryButtonPositon" onClick={() => {dispatch(storyLineTalentFn(true));}}>Continue</button>
              </div> */}
        
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;