import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn, ToolDealerBuyFn, ResetToolDealerBuyFn } from './actions';
import './css/mapPronteraToolDealer.css'
import $ from 'jquery'
import Prontera from './Prontera'
import RedPotion from './img/Item/RedPotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
// import useSound from 'use-sound';

// AudioCurrentTimeSaverFn
function StartMenu(){
    console.log('rerender')
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    useEffect(() => {
      $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][0].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][0].name}</p>`)
    }, [])

    const talkToToolDealerBuy = () => {
      $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][1].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][1].name}</p>`)
    }
    const talkToToolDealerBuyItem = () => {
      $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][2].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][2].name}</p>`)
    }
    
    return(
      <div>
        {screenControlRoom.Prontera ? <Prontera />:
        <div>
        <div className="storyMapScreen">
          <div className="PronteraToolDealerMap">
              <p>Hi</p>
              <button className="Prontera" onClick={() => {dispatch(GotoPronteraFn()); dispatch(ResetToolDealerBuyFn());}}>Prontera</button>
              {npcControlRoom.ToolDealerBuy ?
                <div>
                  <button onClick={() =>{talkToToolDealerBuyItem()}}><img src={RedPotion} alt="RedPotion" /> $50</button>
                  <button onClick={() =>{talkToToolDealerBuyItem()}}><img src={YellowPotion} alt="YellowPotion" /> $200</button>
                </div>  : null}
          </div>
          <div className="StoryHUD">
            <h1>HUD</h1>
          </div>
        </div>
        <fieldset className="storyChat">
        <legend className="storyCharacter"></legend>
        <p className="storySpeech">TestMap</p>
          <button className="kafraEmployeeHeal" onClick={() =>{dispatch(ToolDealerBuyFn()); talkToToolDealerBuy();}}>Buy</button>
        </fieldset>
      </div>
      }
      </div>
    );
}

export default StartMenu;