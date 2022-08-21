import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn } from './actions';
//NPC INTERACTION
import { TalktoWeaponDealerFn, TalktoArmorDealerFn} from './actions'
//WEAPON
import { KatanaFn, BastardSwordFn , GaiaSwordFn , TwinEdgeofNaghtSiegerFn , VioletFearFn } from './actions';
//ARMOR
import { CottonShirtFn, AdventureSuitFn , WoodenMailFn , CoatFn , PaddedArmorFn, ChainMailFn , FullPlateFn } from './actions';

import './css/mapWeaponArmorDealer.css'
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

import PronteraArmorDealerImg from './img/NPC/PronteraArmorDealer.gif'
import PronteraWeaponDealerImg from './img/NPC/PronteraWeaponDealer.gif'
// import useSound from 'use-sound';

// AudioCurrentTimeSaverFn
function StartMenu(){
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
  
    const dispatch = useDispatch();

    // const talkToWeaponArmorDealerBuy = () => {
    //   $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][1].text}</p>`)
    //   $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][1].name}</p>`)
    // }
    // const talkToWeaponArmorDealerSell = () => {
    //   $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][2].text}</p>`)
    //   $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][2].name}</p>`)
    // }
    // // BUY WEAPON
    // const talkToWeaponDealerBuyKatana = () => {
    //   (() => {
    //     switch (true) {
    //       case (userGoldItem.Zeny >= 100):
    //         $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][3].text}</p>`)
    //         $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][3].name}</p>`)
    //         return dispatch(BuyKatanaFn());
    //       default:
    //         $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][4].text}</p>`)
    //         $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][4].name}</p>`)
    //     }
    //   })()
    // }

    let WeaponBuyBox = [
      {id:91000,cost: 100, Get:KatanaFn(-100,1), Img: Katana, name: "Katana"},
      {id:91001,cost: 300, Get:BastardSwordFn(-300,1), Img: BastardSword, name: "Bastard Sword"},
      {id:91002,cost: 800, Get:GaiaSwordFn(-800,1), Img: GaiaSword, name: "Gaia Sword"},
      {id:91003,cost: 3000, Get:TwinEdgeofNaghtSiegerFn(-3000,1), Img: TwinEdgeofNaghtSieger, name: "Twin Edge of Naght Sieger"},
      {id:91004,cost: 4880, Get:VioletFearFn(-4880,1), Img: VioletFear, name: "Violet Fear"},
    ]
    let WeaponSellBox = [
      {id:92000,cost: 80, Get:KatanaFn(80,-1), Img: Katana, name: "Katana", Item: userGoldItem.Katana},
      {id:92001,cost: 240, Get:BastardSwordFn(240,-1), Img: BastardSword, name: "Bastard Sword", Item: userGoldItem.BastardSword},
      {id:92002,cost: 640, Get:GaiaSwordFn(640,-1), Img: GaiaSword, name: "Gaia Sword", Item: userGoldItem.GaiaSword},
      {id:92003,cost: 1600, Get:TwinEdgeofNaghtSiegerFn(1600,-1), Img: TwinEdgeofNaghtSieger, name: "Twin Edge of Naght Sieger", Item: userGoldItem.TwinEdgeofNaghtSieger},
      {id:92004,cost: 3904, Get:VioletFearFn(3904,-1), Img: VioletFear, name: "Violet Fear", Item: userGoldItem.VioletFear},
    ]
    let ArmorBuyBox = [
      {id:93000,cost: 10, Get:CottonShirtFn(-10,1), Img: CottonShirt, name: "Cotton Shirt"},
      {id:93001,cost: 1000, Get:AdventureSuitFn(-1000,1), Img: AdventureSuit, name: "Adventure Suit"},
      {id:93002,cost: 5500, Get:WoodenMailFn(-5500,1), Img: WoodenMail, name: "Wooden Mail"},
      {id:93003,cost: 22000, Get:CoatFn(-22000,1), Img: Coat, name: "Coat"},
      {id:93004,cost: 48000, Get:PaddedArmorFn(-48000,1), Img: PaddedArmor, name: "Padded Armor"},
      {id:93005,cost: 65000, Get:ChainMailFn(-65000,1), Img: ChainMail, name: "Chain Mail"},
      {id:93006,cost: 80000, Get:FullPlateFn(-80000,1), Img: FullPlate, name: "Full Plate"}
    ]
    let ArmorSellBox = [
      {id:94000,cost: 8, Get:CottonShirtFn(8,-1), Img: CottonShirt, name: "Cotton Shirt", Item: userGoldItem.CottonShirt},
      {id:94001,cost: 800, Get:AdventureSuitFn(800,-1), Img: AdventureSuit, name: "Adventure Suit", Item: userGoldItem.AdventureSuit},
      {id:94002,cost: 4400, Get:WoodenMailFn(4400,-1), Img: WoodenMail, name: "WoodenMail", Item: userGoldItem.WoodenMail},
      {id:94003,cost: 17600, Get:CoatFn(17600,-1), Img: Coat, name: "Coat", Item: userGoldItem.Coat},
      {id:94004,cost: 38400, Get:PaddedArmorFn(38400,-1), Img: PaddedArmor, name: "Padded Armor", Item: userGoldItem.PaddedArmor},
      {id:94005,cost: 52000, Get:ChainMailFn(52000,-1), Img: ChainMail, name: "Chain Mail", Item: userGoldItem.ChainMail},
      {id:94006,cost: 64000, Get:FullPlateFn(640000,-1), Img: FullPlate, name: "Full Plate", Item: userGoldItem.FullPlate}
    ]


    return(
      <div className="WeaponArmorDealerMap">
              <p className="WeaponArmorDealerTitle">Equip Shop</p>
              {/* {npcControlRoom.DealerBuy && npcControlRoom.WeaponDealer ?
                <div>
                  <button onClick={() =>{talkToWeaponDealerBuyKatana();}}><img src={Katana} alt="Katana" />Katana -100z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyBastardSword();}}><img src={BastardSword} alt="BastardSword" />Bastard Sword -300z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyGaiaSword();}}><img src={GaiaSword} alt="GaiaSword" />GaiaSword -800z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyTwinEdgeofNaghtSieger();}}><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />Twin Edge of Naght Sieger -2,000z</button>
                  <button onClick={() =>{talkToWeaponDealerBuyVioletFear();}}><img src={VioletFear} alt="VioletFear" />Violet Fear -4,880z</button>
                </div>
              : npcControlRoom.DealerSell && npcControlRoom.WeaponDealer ?
                <div>
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
              } */}
              {npcControlRoom.WeaponDealer && npcControlRoom.DealerBuy ?
                <div className="WeaponArmorDealerGoodsBox">
                  {/* 1.Zeny, 2.Buy or sell */}
                  {/* If you have enough money, you will get item. if you don't, pass failure */}
                  {WeaponBuyBox.map(Buy => {
                      return(
                        <span key={Buy.id}>
                          <button className="buyWeaponArmorDealerItemButton WeaponArmorDealerGoodsButtonFix"  onClick={userGoldItem.Zeny >= Buy.cost ? () =>{dispatch(Buy.Get); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter"><img src={Buy.Img} alt={Buy.name} /> -{Buy.cost}z {Buy.name}</p>
                            </div>
                          </button>
                        </span>
                      )
                  })}
                </div>
                : npcControlRoom.WeaponDealer && npcControlRoom.DealerSell ?
                <div className="WeaponArmorDealerGoodsBox">
                  {WeaponSellBox.map(Sell => {
                      return(
                        <span key={Sell.id}>
                          {/* We have item, and (item name is not our equip name or item is not have one) */}
                          {Sell.Item >= 1  && (userStats.userWeapon !== Sell.name || Sell.Item !== 1 ) ? <button className="buyWeaponArmorDealerItemButton WeaponArmorDealerGoodsButtonFix sellWeaponArmorDealerItemButton"  onClick={() =>{dispatch(Sell.Get); dispatch(DealerSellSuccessFn());}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter">{Sell.Item}x <img src={Sell.Img} alt={Sell.name} /> +{Sell.cost}z {Sell.name}</p>
                            </div>
                          </button> :null}
                        </span>
                      )
                  })}
                </div> 
                : npcControlRoom.ArmorDealer && npcControlRoom.DealerBuy ?
                  <div className="WeaponArmorDealerGoodsBox">
                    {/* 1.Zeny, 2.Buy or sell */}
                    {/* If you have enough money, you will get item. if you don't, pass failure */}
                    {ArmorBuyBox.map(Buy => {
                        return(
                          <span key={Buy.id}>
                            <button className="buyWeaponArmorDealerItemButton WeaponArmorDealerGoodsButtonFix buyArmorDealerItemButton"  onClick={userGoldItem.Zeny >= Buy.cost ? () =>{dispatch(Buy.Get); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}>
                              <div className="adjImgCenterBox">
                                <p className="adjImgCenter"><img src={Buy.Img} alt={Buy.name} /> -{Buy.cost}z {Buy.name}</p>
                              </div>
                            </button>
                          </span>
                        )
                    })}
                  </div>
                  : npcControlRoom.ArmorDealer && npcControlRoom.DealerSell ?
                  <div className="WeaponArmorDealerGoodsBox">
                    {ArmorSellBox.map(Sell => {
                        return(
                          <span key={Sell.id}>
                            {/* We have item, and (item name is not our equip name or item is not have one) */}
                            {Sell.Item >= 1  && (userStats.userArmor !== Sell.name || Sell.Item !== 1 ) ? <button className="buyWeaponArmorDealerItemButton WeaponArmorDealerGoodsButtonFix sellWeaponArmorDealerItemButton"  onClick={() =>{dispatch(Sell.Get); dispatch(DealerSellSuccessFn());}}>
                              <div className="adjImgCenterBox">
                                <p className="adjImgCenter">{Sell.Item}x <img src={Sell.Img} alt={Sell.name} /> +{Sell.cost}z {Sell.name}</p>
                              </div>
                            </button> :null}
                          </span>
                        )
                    })}
                  </div> 
                :  <div className="PronteraWeaponArmorDealerMap">
                    <button className="armorDealer" onClick={() => {dispatch(TalktoArmorDealerFn())}}><img src={PronteraArmorDealerImg} alt="PronteraArmorDealer" /></button>
                    <button className="weaponDealer" onClick={() => {dispatch(TalktoWeaponDealerFn())}}><img src={PronteraWeaponDealerImg} alt="PronteraWeaponDealer" /></button>
                  </div>}
      </div>
    );
}

export default StartMenu;