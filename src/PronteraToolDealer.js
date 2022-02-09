import React from 'react';
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
        {screenControlRoom.Prontera ? <Prontera />:
        <div>
        <div className="storyMapScreen">
          <div className="PronteraToolDealerMap">
              <p>Hi</p>
              
              {npcControlRoom.ToolDealerBuy ?
                <div>
                  <button onClick={() =>{talkToToolDealerBuyRedPotion();}}><img src={RedPotion} alt="RedPotion" /> -$50</button>
                  <button onClick={() =>{talkToToolDealerBuyYellowPotion();}}><img src={YellowPotion} alt="YellowPotion" /> -$200</button>
                </div>
                : npcControlRoom.ToolDealerSell ?
                <div>
                  <button onClick={() =>{talkToToolDealerSellRedPotion();}}><img src={RedPotion} alt="RedPotion" /> +$40</button>
                  <button onClick={() =>{talkToToolDealerSellYellowPotion();}}><img src={YellowPotion} alt="YellowPotion" /> +$160</button>
                </div> : null
                }

          </div>
          <div className="StoryHUD">
              <p className="basicStatsHUD">Basic Info</p>
              <p className="nameStatsHUD destextHUD">Altan</p>
              <p className="destextHUD classTitle">Knight</p>
                <div className="HUDBox">
                  <p className="hptextHUD">HP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentHealth/userStats.maxHealth)*100} max="100" title={userStats.currentHealth + "/" + userStats.maxHealth}/>
                  <p className="hpPerHUD">{((userStats.currentHealth/userStats.maxHealth)*100).toFixed(0) + "%"}</p>
                </div>
                <div className="HUDBox">
                  <p className="sptextHUD">SP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentSP/userStats.maxSP)*100} max="100" title={userStats.currentSP + "/" + userStats.maxSP}/>
                  <p className="spPerHUD">{((userStats.currentSP/userStats.maxSP)*100).toFixed(0) + "%"}</p>
                </div>

                <div className="leveltextHUD">
                    <p className="destextHUD leveltext">Base Lv. {userStats.Level}</p>
                    {/* <p>Player Attack {userStats.attack}</p>
                    <p>Player Defence {userStats.defence}</p>
                    <p>Player Speed {userStats.speed}</p>
                    <p>Player Hit Rate {userStats.hitRate}</p>
                    <p>Player Dodge Rate {userStats.dodgeRate}</p>
                    <p>Player Crit Rate {userStats.critRate}</p>
                    <p>Player Exp {userStats.Experience}</p> */}
                    {userStats.Level >= 10 ? <progress className="BarBasicHUD expBarBasicHUD" value="100" max="100"></progress> : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                <p className="zenytextHUD">Zeny {userGoldItem.Zeny}</p>
            <p><img src={RedPotion} alt="RedPotion" />Red Potion {userGoldItem.RedPotion}</p>
            <p><img src={YellowPotion} alt="YellowPotion" />Yellow Potion {userGoldItem.YellowPotion}</p>
          </div>
        </div>
        <fieldset className="storyChat">
        <legend className="storyCharacter">{npcSpeech['ToolDealer'][0].text}</legend>
        <p className="storySpeech">{npcSpeech['ToolDealer'][0].name}</p>
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