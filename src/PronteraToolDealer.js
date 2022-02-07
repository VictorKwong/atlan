import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn , ToolDealerBuyFn, ToolDealerSellFn, ResetToolDealerBuySellFn } from './actions';
import { BuyRedPotionFn , BuyYellowPotionFn, } from './actions';
import { SellRedPotionFn , SellYellowPotionFn, } from './actions';

import './css/mapPronteraToolDealer.css'
import $ from 'jquery'
import Prontera from './Prontera'
import RedPotion from './img/Item/RedPotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
// import useSound from 'use-sound';
let confirmRedPotion = false;
let confirmYellowPotion = false;


// AudioCurrentTimeSaverFn
function StartMenu(){
    console.log('rerender')
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const userGoldItem = useSelector(state => state.userGoldItem)
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
    const talkToToolDealerSell = () => {
      $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][2].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][2].name}</p>`)
    }
    const talkToToolDealerBuyItem = () => {
      console.log(confirmRedPotion);
      (() => {
        switch (true) {
          case (userGoldItem.Gold >= 50 && confirmRedPotion === true):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            confirmRedPotion = false;
            dispatch(BuyRedPotionFn());
            break;
          case (userGoldItem.Gold >= 200 && confirmYellowPotion === true):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            confirmYellowPotion = false;
            dispatch(BuyYellowPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][4].name}</p>`)
            confirmRedPotion = false;
            confirmYellowPotion = false;
        }
      })()
    }
    const talkToToolDealerSellItem = () => {
      (() => {
        switch (true) {
          case (userGoldItem.RedPotion >= 1 && confirmRedPotion === true):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            confirmRedPotion = false;
            dispatch(SellRedPotionFn());
            break;
          case (userGoldItem.YellowPotion >= 1 && confirmYellowPotion === true):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            confirmYellowPotion = false;
            dispatch(SellYellowPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][5].name}</p>`)
            confirmRedPotion = false;
            confirmYellowPotion = false;
        }
      })()
    }

// Confirm Order
    const confirmRedPotionQtn = () => {
        confirmRedPotion = true;
    }
    const confirmYellowPotionQtn = () => { 
        confirmYellowPotion = true;
    }

    return(
      <div>
        {screenControlRoom.Prontera ? <Prontera />:
        <div>
        <div className="storyMapScreen">
          <div className="PronteraToolDealerMap">
              <p>Hi</p>
              
              {npcControlRoom.ToolDealerBuy ?
                <div>
                  <button onClick={() =>{talkToToolDealerBuyItem(); confirmRedPotionQtn();}}><img src={RedPotion} alt="RedPotion" /> -$50</button>
                  <button onClick={() =>{talkToToolDealerBuyItem(); confirmYellowPotionQtn(); }}><img src={YellowPotion} alt="YellowPotion" /> -$200</button>
                </div>
                : npcControlRoom.ToolDealerSell ?
                <div>
                  <button onClick={() =>{talkToToolDealerSellItem(); confirmRedPotionQtn();}}><img src={RedPotion} alt="RedPotion" /> +$40</button>
                  <button onClick={() =>{talkToToolDealerSellItem(); confirmYellowPotionQtn();}}><img src={YellowPotion} alt="YellowPotion" /> +$160</button>
                </div> : null
                }

          </div>
          <div className="StoryHUD">
            <h1>HUD</h1>
            <p>Gold {userGoldItem.Gold}</p>
            <p><img src={RedPotion} alt="RedPotion" />Red Potion {userGoldItem.RedPotion}</p>
            <p><img src={YellowPotion} alt="YellowPotion" />Yellow Potion {userGoldItem.YellowPotion}</p>
          </div>
        </div>
        <fieldset className="storyChat">
        <legend className="storyCharacter"></legend>
        <p className="storySpeech">TestMap</p>
          <button onClick={() =>{dispatch(ToolDealerBuyFn()); talkToToolDealerBuy();}}>Buy</button>
          <button onClick={() =>{dispatch(ToolDealerSellFn()); talkToToolDealerSell();}}>Sell</button>
          <button onClick={() => {dispatch(GotoPronteraFn()); dispatch(ResetToolDealerBuySellFn());}}>Leave</button>
        </fieldset>
      </div>
      }
      </div>
    );
}

export default StartMenu;