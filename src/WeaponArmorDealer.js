import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn , DealerBuyFn, DealerSellFn, ResetDealerBuySellFn } from './actions';

//NPC INTERACTION
import { TalktoWeaponDealerFn, TalktoArmorDealerFn, ResetTalktoFn} from './actions'

//WEAPON
import { BuyKatanaFn, BuyBastardSwordFn , BuyGaiaSwordFn , BuyTwinEdgeofNaghtSiegerFn , BuyVioletFearFn } from './actions';
import { SellKatanaFn, SellBastardSwordFn , SellGaiaSwordFn , SellTwinEdgeofNaghtSiegerFn , SellVioletFearFn} from './actions';

//ARMOR
import { BuyCottonShirtFn, BuyAdventureSuitFn , BuyWoodenMailFn , BuyCoatFn , BuyPaddedArmorFn, BuyChainMailFn , BuyFullPlateFn } from './actions';
import { SellCottonShirtFn, SellAdventureSuitFn , SellWoodenMailFn , SellCoatFn , SellPaddedArmorFn, SellChainMailFn, SellFullPlateFn } from './actions';

import { SellRedPotionFn , SellYellowPotionFn, } from './actions';

import './css/mapWeaponArmorDealer.css'
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
import ChainMail from './img/Equipment/Armor/ChainMail.gif'
import FullPlate from './img/Equipment/Armor/FullPlate.gif'


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
    const talkToWeaponDealerBuyKatana = () => {
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
    const talkToWeaponDealerBuyBastardSword = () => {
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
    const talkToWeaponDealerBuyGaiaSword = () => {
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
    const talkToWeaponDealerBuyTwinEdgeofNaghtSieger = () => {
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
    const talkToWeaponDealerBuyVioletFear = () => {
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
    //BUY ARMOR
    const talkToArmorDealerBuyCottonShirt = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 10):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyCottonShirtFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerBuyAdventureSuit = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 1000):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyAdventureSuitFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerBuyWoodenMail = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 5500):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyWoodenMailFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerBuyCoat = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 22000):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyCoatFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerBuyPaddedArmor = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 48000):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyPaddedArmorFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerBuyChainMail = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 65000):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyChainMailFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerBuyFullPlate = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Zeny >= 80000):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            return dispatch(BuyFullPlateFn());
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
        }
      })()
    }
    //SELL ITEMS
    const talkToWeaponDealerSellRedPotion = () => {
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
    const talkToWeaponDealerSellYellowPotion = () => {
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
    const talkToArmorDealerSellRedPotion = () => {
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
    const talkToArmorDealerSellYellowPotion = () => {
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
    const talkToWeaponDealerSellKatana = () => {
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
    const talkToWeaponDealerSellBastardSword = () => {
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
    const talkToWeaponDealerSellGaiaSword = () => {
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
    const talkToWeaponDealerSellTwinEdgeofNaghtSieger = () => {
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
    const talkToWeaponDealerSellVioletFear = () => {
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
    //SELL ARMOR
    const talkToArmorDealerSellCottonShirt = () => {
      (() => {
        switch (true) {
          case (userGoldItem.CottonShirt >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellCottonShirtFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerSellAdventureSuit = () => {
      (() => {
        switch (true) {
          case (userGoldItem.AdventureSuit >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellAdventureSuitFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerSellWoodenMail = () => {
      (() => {
        switch (true) {
          case (userGoldItem.WoodenMail >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellWoodenMailFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerSellCoat = () => {
      (() => {
        switch (true) {
          case (userGoldItem.Coat >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellCoatFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerSellPaddedArmor = () => {
      (() => {
        switch (true) {
          case (userGoldItem.PaddedArmor >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellPaddedArmorFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerSellChainMail = () => {
      (() => {
        switch (true) {
          case (userGoldItem.ChainMail >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellChainMailFn());
            break;
          default:
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][5].name}</p>`)
        }
      })()
    }
    const talkToArmorDealerSellFullPlate = () => {
      (() => {
        switch (true) {
          case (userGoldItem.FullPlate >= 1):
            $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
            dispatch(SellFullPlateFn());
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
          <div className="PronteraWeaponArmorDealerMapBoard">
              <p>Hi</p>
              {npcControlRoom.DealerBuy && npcControlRoom.WeaponDealer ?
                <div>
                  <button onClick={() =>{talkToWeaponDealerBuyKatana();}}><img src={Katana} alt="Katana" />Katana -100z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyBastardSword();}}><img src={BastardSword} alt="BastardSword" />Bastard Sword -300z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyGaiaSword();}}><img src={GaiaSword} alt="GaiaSword" />GaiaSword -800z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyTwinEdgeofNaghtSieger();}}><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger -2,000z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyVioletFear();}}><img src={VioletFear} alt="VioletFear" />Violet Fear -4,880z</button>
                </div>
              : npcControlRoom.DealerSell && npcControlRoom.WeaponDealer ?
                <div>
                  <button onClick={() =>{talkToWeaponDealerSellRedPotion();}}><img src={RedPotion} alt="RedPotion" /> +40z</button>
                  <button onClick={() =>{talkToWeaponDealerSellYellowPotion();}}><img src={YellowPotion} alt="YellowPotion" /> +160z</button>
                  <button onClick={() =>{talkToWeaponDealerSellKatana();}}><img src={Katana} alt="Katana" />Katana +80z</button>
                  <button onClick={() =>{talkToWeaponDealerSellBastardSword();}}><img src={BastardSword} alt="BastardSword" />Bastard Sword +240z</button>
                  <button onClick={() =>{talkToWeaponDealerSellGaiaSword();}}><img src={GaiaSword} alt="GaiaSword" />GaiaSword +640z</button>
                  <button onClick={() =>{talkToWeaponDealerSellTwinEdgeofNaghtSieger();}}><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger +1,600z</button>
                  <button onClick={() =>{talkToWeaponDealerSellVioletFear();}}><img src={VioletFear} alt="VioletFear" />Violet Fear +3,904z</button>
                </div>
              : npcControlRoom.DealerBuy && npcControlRoom.ArmorDealer ?
                <div>
                  <button onClick={() =>{talkToArmorDealerBuyCottonShirt();}}><img src={CottonShirt} alt="CottonShirt" />Cotton Shirt -10z</button>
                  <button onClick={() =>{talkToArmorDealerBuyAdventureSuit();}}><img src={AdventureSuit} alt="AdventureSuit" />Adventure Suit -1,000z</button>
                  <button onClick={() =>{talkToArmorDealerBuyWoodenMail();}}><img src={WoodenMail} alt="WoodenMail" />Wooden Mail -5,500z</button>
                  <button onClick={() =>{talkToArmorDealerBuyCoat();}}><img src={Coat} alt="Coat" />Coat -22,000z</button>
                  <button onClick={() =>{talkToArmorDealerBuyPaddedArmor();}}><img src={PaddedArmor} alt="PaddedArmor" />Padded Armor -48,000z</button>
                  <button onClick={() =>{talkToArmorDealerBuyChainMail();}}><img src={ChainMail} alt="ChainMail" />Chain Mail -65,000z</button>
                  <button onClick={() =>{talkToArmorDealerBuyFullPlate();}}><img src={FullPlate} alt="FullPlate" />Full Plate -80,000z</button>
                </div>
              : npcControlRoom.DealerSell && npcControlRoom.ArmorDealer ?
                <div>
                  <button onClick={() =>{talkToArmorDealerSellRedPotion();}}><img src={RedPotion} alt="RedPotion" /> +40z</button>
                  <button onClick={() =>{talkToArmorDealerSellYellowPotion();}}><img src={YellowPotion} alt="YellowPotion" /> +160z</button>
                  <button onClick={() =>{talkToArmorDealerSellCottonShirt();}}><img src={CottonShirt} alt="CottonShirt" />Cotton Shirt -10z</button>
                  <button onClick={() =>{talkToArmorDealerSellAdventureSuit();}}><img src={AdventureSuit} alt="AdventureSuit" />Adventure Suit -1,000z</button>
                  <button onClick={() =>{talkToArmorDealerSellWoodenMail();}}><img src={WoodenMail} alt="WoodenMail" />Wooden Mail -5,500z</button>
                  <button onClick={() =>{talkToArmorDealerSellCoat();}}><img src={Coat} alt="Coat" />Coat -22,000z</button>
                  <button onClick={() =>{talkToArmorDealerSellPaddedArmor();}}><img src={PaddedArmor} alt="PaddedArmor" />Padded Armor -48,000z</button>
                  <button onClick={() =>{talkToArmorDealerSellChainMail();}}><img src={ChainMail} alt="ChainMail" />Chain Mail -65,000z</button>
                  <button onClick={() =>{talkToArmorDealerSellFullPlate();}}><img src={FullPlate} alt="FullPlate" />Full Plate -80,000z</button>
                </div>
              :  <div className="PronteraWeaponArmorDealerMap">
                  <button className="armorDealer" onClick={() => {dispatch(TalktoArmorDealerFn()); dispatch(DealerBuyFn());}}>Armor Dealer</button>
                  <button className="weaponDealer" onClick={() => {dispatch(TalktoWeaponDealerFn()); dispatch(DealerBuyFn());}}>Weapon Dealer</button>
                </div>
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
                    {userStats.Level >= 10 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
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
                <p><img src={CottonShirt} alt="CottonShirt" />Red Potion {userGoldItem.CottonShirt}</p>
                <p><img src={AdventureSuit} alt="AdventureSuit" />Yellow Potion {userGoldItem.AdventureSuit}</p>
                <p><img src={WoodenMail} alt="WoodenMail" />WoodenMail {userGoldItem.WoodenMail}</p>
                <p><img src={Coat} alt="Coat" />Coat {userGoldItem.Coat}</p>
                <p><img src={PaddedArmor} alt="PaddedArmor" />PaddedArmor {userGoldItem.PaddedArmor}</p>
                <p><img src={ChainMail} alt="ChainMail" />ChainMail {userGoldItem.ChainMail}</p>
                <p><img src={FullPlate} alt="FullPlate" />FullPlate {userGoldItem.FullPlate}</p>

          </div>
        </div>
        <fieldset className="storyChat">
        <legend className="storyCharacter">{npcSpeech['WeaponArmorDealer'][0].name}</legend>
        <p className="storySpeech">{npcSpeech['WeaponArmorDealer'][0].text}</p>
        {npcControlRoom.WeaponDealer ?
          <div>
            <button onClick={() =>{dispatch(DealerBuyFn()); talkToWeaponArmorDealerBuy();}}>Buy Weapon</button>
            <button onClick={() =>{dispatch(DealerSellFn()); talkToWeaponArmorDealerSell();}}>Sell Weapon</button>
            <button onClick={() =>{dispatch(ResetTalktoFn());}}>Back</button>
          </div>
        : null}
        {npcControlRoom.ArmorDealer ?
          <div>
            <button onClick={() =>{dispatch(DealerBuyFn()); talkToWeaponArmorDealerBuy();}}>Buy Armor</button>
            <button onClick={() =>{dispatch(DealerSellFn()); talkToWeaponArmorDealerSell();}}>Sell Armor</button>
            <button onClick={() =>{dispatch(ResetTalktoFn());}}>Back</button>
          </div>
        : null}
          <button onClick={() => {dispatch(GotoPronteraFn()); dispatch(ResetDealerBuySellFn());}}>Leave</button>
        </fieldset>
      </div>
      }
      </div>
    );
}

export default StartMenu;