import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn , DealerBuyFn, DealerSellFn, ResetDealerBuySellFn } from './actions';
import { BuyRedPotionFn , BuyYellowPotionFn, } from './actions';
import { SellRedPotionFn , SellYellowPotionFn, } from './actions';

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
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    const talkToToolDealerBuy = () => {
      $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][1].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][1].name}</p>`)
    }
    const talkToToolDealerSell = () => {
      $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][2].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][2].name}</p>`)
    }
    const talkToToolDealerBuyRedPotion = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 50):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            dispatch(BuyRedPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToToolDealerBuyYellowPotion = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 200):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            dispatch(BuyYellowPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToToolDealerSellRedPotion = () => {
      (() => {
        switch (true) {
          case (userGoldItem.RedPotion >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            dispatch(SellRedPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToToolDealerSellYellowPotion = () => {
      (() => {
        switch (true) {
          case (userGoldItem.YellowPotion >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            dispatch(SellYellowPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][5].name}</p>`)
        }
      })()
    }

    return(
      <div>
        <div className="storyMapScreen">
          <div>
              <p>Hiasfknsokagndsokgnasdokgnaoskdg</p>
              
              {npcControlRoom.DealerBuy ?
                <div>
                  <button onClick={() =>{talkToToolDealerBuyRedPotion();}}><img src={RedPotion} alt="RedPotion" /> -50z</button>
                  <button onClick={() =>{talkToToolDealerBuyYellowPotion();}}><img src={YellowPotion} alt="YellowPotion" /> -200z</button>
                </div>
                : npcControlRoom.DealerSell ?
                <div>
                  <button onClick={() =>{talkToToolDealerSellRedPotion();}}><img src={RedPotion} alt="RedPotion" /> +40z</button>
                  <button onClick={() =>{talkToToolDealerSellYellowPotion();}}><img src={YellowPotion} alt="YellowPotion" /> +160z</button>
                </div> : null
                }

          </div>
        </div>
      </div>
    );
}

export default StartMenu;