import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn , DealerBuyFn, DealerSellFn, ResetDealerBuySellFn } from './actions';

//BUY WEAPON
import { BuyKatanaFn, BuyBastardSwordFn , BuyGaiaSwordFn , BuyTwinEdgeofNaghtSiegerFn , BuyVioletFearFn } from './actions';
import { SellKatanaFn, SellBastardSwordFn , SellGaiaSwordFn , SellTwinEdgeofNaghtSiegerFn , SellVioletFearFn} from './actions';

import { SellRedPotionFn , SellYellowPotionFn, } from './actions';

import './css/mapPronteraToolDealer.css'
import $ from 'jquery'
import Prontera from './Prontera'
// Weapon
import Katana from './img/Equipment/Weapon/Katana.gif'
import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
import VioletFear from './img/Equipment/Weapon/VioletFear.gif'
//Armor
import CottonShirt from './img/Equipment/Armor/CottonShirt.gif'
import AdventureSuit from './img/Equipment/Armor/AdventurersSuit.gif'
import WoodenMail from './img/Equipment/Armor/WoodenMail.gif'
import Coat from './img/Equipment/Armor/Coat.gif'
import PaddedArmor from './img/Equipment/Armor/PaddedArmor.gif'
import AssaulterPlate from './img/Equipment/Armor/AssaulterPlate.gif'
import ChainMail from './img/Equipment/Armor/ChainMail.gif'
//Item Sell
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

    const talkToWeaponArmorDealerBuy = () => {
      $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][1].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][1].name}</p>`)
    }
    const talkToWeaponArmorDealerSell = () => {
      $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][2].text}</p>`)
      $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][2].name}</p>`)
    }
    // BUY WEAPON
    const talkToWeaponArmorDealerBuyKatana = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 100):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyKatanaFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerBuyBastardSword = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 300):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyBastardSwordFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerBuyGaiaSword = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 800):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyGaiaSwordFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerBuyTwinEdgeofNaghtSieger = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 2000):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyTwinEdgeofNaghtSiegerFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerBuyVioletFear = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 4880):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyVioletFearFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }

    //SELL ITEMS
    const talkToWeaponArmorDealerSellRedPotion = () => {
      (() => {
        switch (true) {
          case (userGoldItem.RedPotion >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellRedPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerSellYellowPotion = () => {
      (() => {
        switch (true) {
          case (userGoldItem.YellowPotion >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellYellowPotionFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    //SELL WEAPONS
    const talkToWeaponArmorDealerSellKatana = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Katana >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellKatanaFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerSellBastardSword = () => {
      (() => {
        switch (true) {
          case (userGoldItem.BastardSword >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellBastardSwordFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerSellGaiaSword = () => {
      (() => {
        switch (true) {
          case (userGoldItem.GaiaSword >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellGaiaSwordFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerSellTwinEdgeofNaghtSieger = () => {
      (() => {
        switch (true) {
          case (userGoldItem.TwinEdgeofNaghtSieger >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellTwinEdgeofNaghtSiegerFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToWeaponArmorDealerSellVioletFear = () => {
      (() => {
        switch (true) {
          case (userGoldItem.VioletFear >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellVioletFearFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
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
              
              {npcControlRoom.DealerBuy ?
                <div>
                  <button onClick={() =>{talkToWeaponArmorDealerBuyKatana();}}><img src={Katana} alt="Katana" />Katana -$100</button>
                  <button onClick={() =>{talkToWeaponArmorDealerBuyBastardSword();}}><img src={BastardSword} alt="BastardSword" />Bastard Sword -$300</button>
                  <button onClick={() =>{talkToWeaponArmorDealerBuyGaiaSword();}}><img src={GaiaSword} alt="GaiaSword" />GaiaSword -$800</button>
                  <button onClick={() =>{talkToWeaponArmorDealerBuyTwinEdgeofNaghtSieger();}}><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger -$2000</button>
                  <button onClick={() =>{talkToWeaponArmorDealerBuyVioletFear();}}><img src={VioletFear} alt="VioletFear" />Violet Fear -$4880</button>
                </div>
                : npcControlRoom.DealerSell ?
                <div>
                  <button onClick={() =>{talkToWeaponArmorDealerSellRedPotion();}}><img src={RedPotion} alt="RedPotion" /> +$40</button>
                  <button onClick={() =>{talkToWeaponArmorDealerSellYellowPotion();}}><img src={YellowPotion} alt="YellowPotion" /> +$160</button>
                  <button onClick={() =>{talkToWeaponArmorDealerSellKatana();}}><img src={Katana} alt="Katana" />Katana +$80</button>
                  <button onClick={() =>{talkToWeaponArmorDealerSellBastardSword();}}><img src={BastardSword} alt="BastardSword" />Bastard Sword +$240</button>
                  <button onClick={() =>{talkToWeaponArmorDealerSellGaiaSword();}}><img src={GaiaSword} alt="GaiaSword" />GaiaSword +$640</button>
                  <button onClick={() =>{talkToWeaponArmorDealerSellTwinEdgeofNaghtSieger();}}><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger +$1600</button>
                  <button onClick={() =>{talkToWeaponArmorDealerSellVioletFear();}}><img src={VioletFear} alt="VioletFear" />Violet Fear -$3904</button>
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
                <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
            <p><img src={RedPotion} alt="RedPotion" />Red Potion {userGoldItem.RedPotion}</p>
            <p><img src={YellowPotion} alt="YellowPotion" />Yellow Potion {userGoldItem.YellowPotion}</p>
            <p><img src={Katana} alt="Katana" />Katana {userGoldItem.Katana}</p>
            <p><img src={BastardSword} alt="BastardSword" />BastardSword {userGoldItem.BastardSword}</p>
            <p><img src={GaiaSword} alt="GaiaSword" />GaiaSword {userGoldItem.GaiaSword}</p>
            <p><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />TwinEdgeofNaghtSieger {userGoldItem.TwinEdgeofNaghtSieger}</p>
            <p><img src={VioletFear} alt="VioletFear" />VioletFear {userGoldItem.VioletFear}</p>
          </div>
        </div>
        <fieldset className="storyChat">
        <legend className="storyCharacter">{npcSpeech['WeaponArmorDealer'][0].text}</legend>
        <p className="storySpeech">{npcSpeech['WeaponArmorDealer'][0].name}</p>
          <button onClick={() =>{dispatch(DealerBuyFn()); talkToWeaponArmorDealerBuy();}}>Buy Weapon</button>
          <button onClick={() =>{dispatch(DealerSellFn()); talkToWeaponArmorDealerSell();}}>Sell</button>
          <button onClick={() => {dispatch(GotoPronteraFn()); dispatch(ResetDealerBuySellFn());}}>Leave</button>
        </fieldset>
      </div>
      }
      </div>
    );
}

export default StartMenu;