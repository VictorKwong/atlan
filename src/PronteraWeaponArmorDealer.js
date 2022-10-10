import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn } from './actions';
//NPC INTERACTION
import { TalktoWeaponDealerFn, TalktoArmorDealerFn, TalktoGarmentDealerFn, TalktoShoesDealerFn} from './actions'
//WEAPON
import { KatanaFn, BastardSwordFn , GaiaSwordFn , TwinEdgeofNaghtSiegerFn , VioletFearFn } from './actions';
//ARMOR
import { CottonShirtFn, AdventureSuitFn , WoodenMailFn , CoatFn , PaddedArmorFn, ChainMailFn , FullPlateFn } from './actions';
//FOOTGEAR
import { SandalsFn, ShoesFn, BootsFn, GreavesFn, BunnySlipperFn, TidalShoesFn, SiegeBootsFn, SiegeGreavesFn, VidarsBootsFn, VitalTreeShoesFn, VariantShoesFn, SleipnirFn} from './actions'
//GARMENT
import { HoodFn, MufflerFn, ManteauFn, FalconMufflerFn, ValisManteauFn, ValkyrianManteauFn, WoolScarfFn, FallenAngelWingFn, CloakofGrayFn, ElementalCapeFn, AsprikaFn} from './actions'

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
//FootGear
import Sandals from './img/Equipment/FootGear/Sandals.gif'
import Shoes from './img/Equipment/FootGear/Shoes.gif'
import Boots from './img/Equipment/FootGear/Boots.gif'
import Greaves from './img/Equipment/FootGear/Greaves.gif'
import BunnySlipper from './img/Equipment/FootGear/BunnySlipper.gif'
import TidalShoes from './img/Equipment/FootGear/TidalShoes.gif'
import SiegeBoots from './img/Equipment/FootGear/SiegeBoots.gif'
import SiegeGreaves from './img/Equipment/FootGear/SiegeGreaves.gif'
import VidarsBoots from './img/Equipment/FootGear/VidarsBoots.gif'
import VitalTreeShoes from './img/Equipment/FootGear/VitalTreeShoes.gif'
import VariantShoes from './img/Equipment/FootGear/VariantShoes.gif'
import Sleipnir from './img/Equipment/FootGear/Sleipnir.gif'
//Garment
import Hood from './img/Equipment/Garment/Hood.gif'
import Muffler from './img/Equipment/Garment/Muffler.gif'
import Manteau from './img/Equipment/Garment/Manteau.gif'
import FalconMuffler from './img/Equipment/Garment/FalconMuffler.gif'
import ValisManteau from './img/Equipment/Garment/ValisManteau.gif'
import ValkyrianManteau from './img/Equipment/Garment/ValkyrianManteau.gif'
import WoolScarf from './img/Equipment/Garment/WoolScarf.gif'
import FallenAngelWing from './img/Equipment/Garment/FallenAngelWing.gif'
import CloakofGray from './img/Equipment/Garment/CloakofGray.gif'
import ElementalCape from './img/Equipment/Garment/ElementalCape.gif'
import Asprika from './img/Equipment/Garment/Asprika.gif'

import PronteraArmorDealerImg from './img/NPC/PronteraArmorDealer.gif'
import PronteraWeaponDealerImg from './img/NPC/PronteraWeaponDealer.gif'
import PronteraGarmentDealerImg from './img/NPC/PronteraGarmentDealer.gif'
import PronteraShoesDealerImg from './img/NPC/PronteraShoesDealer.gif'

// AudioCurrentTimeSaverFn
function StartMenu(){
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const itemPriceChart = useSelector(state => state.itemPriceChart)

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
      {id:91000,cost: itemPriceChart.KatanaBuy, Get:KatanaFn(-itemPriceChart.KatanaBuy,1), Img: Katana, name: "Katana"},
      {id:91001,cost: itemPriceChart.BastardSwordBuy, Get:BastardSwordFn(-itemPriceChart.BastardSwordBuy,1), Img: BastardSword, name: "Bastard Sword"},
      {id:91002,cost: itemPriceChart.GaiaSwordBuy, Get:GaiaSwordFn(-itemPriceChart.GaiaSwordBuy,1), Img: GaiaSword, name: "Gaia Sword"},
      {id:91003,cost: itemPriceChart.TwinEdgeofNaghtSiegerBuy, Get:TwinEdgeofNaghtSiegerFn(-itemPriceChart.TwinEdgeofNaghtSiegerBuy,1), Img: TwinEdgeofNaghtSieger, name: "Twin Edge of Naght Sieger"},
      {id:91004,cost: itemPriceChart.VioletFearBuy, Get:VioletFearFn(-itemPriceChart.VioletFearBuy,1), Img: VioletFear, name: "Violet Fear"},
    ]
    let WeaponSellBox = [
      {id:92000,cost: itemPriceChart.KatanaSell, Get:KatanaFn(itemPriceChart.KatanaSell,-1), Img: Katana, name: "Katana", Item: userGoldItem.Katana},
      {id:92001,cost: itemPriceChart.BastardSwordSell, Get:BastardSwordFn(itemPriceChart.BastardSwordSell,-1), Img: BastardSword, name: "Bastard Sword", Item: userGoldItem.BastardSword},
      {id:92002,cost: itemPriceChart.GaiaSwordSell, Get:GaiaSwordFn(itemPriceChart.GaiaSwordSell,-1), Img: GaiaSword, name: "Gaia Sword", Item: userGoldItem.GaiaSword},
      {id:92003,cost: itemPriceChart.TwinEdgeofNaghtSiegerSell, Get:TwinEdgeofNaghtSiegerFn(itemPriceChart.TwinEdgeofNaghtSiegerSell,-1), Img: TwinEdgeofNaghtSieger, name: "Twin Edge of Naght Sieger", Item: userGoldItem.TwinEdgeofNaghtSieger},
      {id:92004,cost: itemPriceChart.VioletFearSell, Get:VioletFearFn(itemPriceChart.VioletFearSell,-1), Img: VioletFear, name: "Violet Fear", Item: userGoldItem.VioletFear},
    ]
    let ArmorBuyBox = [
      //Armor
      {id:93000,cost: itemPriceChart.CottonShirtBuy, Get:CottonShirtFn(-itemPriceChart.CottonShirtBuy,1), Img: CottonShirt, name: "Cotton Shirt"},
      {id:93001,cost: itemPriceChart.AdventureSuitBuy, Get:AdventureSuitFn(-itemPriceChart.AdventureSuitBuy,1), Img: AdventureSuit, name: "Adventure Suit"},
      {id:93002,cost: 5500, Get:WoodenMailFn(-5500,1), Img: WoodenMail, name: "Wooden Mail"},
      {id:93003,cost: 22000, Get:CoatFn(-22000,1), Img: Coat, name: "Coat"},
      {id:93004,cost: 48000, Get:PaddedArmorFn(-48000,1), Img: PaddedArmor, name: "Padded Armor"},
      {id:93005,cost: 65000, Get:ChainMailFn(-65000,1), Img: ChainMail, name: "Chain Mail"},
      {id:93006,cost: 80000, Get:FullPlateFn(-80000,1), Img: FullPlate, name: "Full Plate"},
    ]
    let ArmorSellBox = [
      //Armor
      {id:94000,cost: 8, Get:CottonShirtFn(8,-1), Img: CottonShirt, name: "Cotton Shirt", Item: userGoldItem.CottonShirt},
      {id:94001,cost: 800, Get:AdventureSuitFn(800,-1), Img: AdventureSuit, name: "Adventure Suit", Item: userGoldItem.AdventureSuit},
      {id:94002,cost: 4400, Get:WoodenMailFn(4400,-1), Img: WoodenMail, name: "WoodenMail", Item: userGoldItem.WoodenMail},
      {id:94003,cost: 17600, Get:CoatFn(17600,-1), Img: Coat, name: "Coat", Item: userGoldItem.Coat},
      {id:94004,cost: 38400, Get:PaddedArmorFn(38400,-1), Img: PaddedArmor, name: "Padded Armor", Item: userGoldItem.PaddedArmor},
      {id:94005,cost: 52000, Get:ChainMailFn(52000,-1), Img: ChainMail, name: "Chain Mail", Item: userGoldItem.ChainMail},
      {id:94006,cost: 64000, Get:FullPlateFn(640000,-1), Img: FullPlate, name: "Full Plate", Item: userGoldItem.FullPlate},
    ]
    let GarmentBuyBox = [
      //Garment
      {id:5000, cost: 10, Get:HoodFn(-10,1), Img:Hood, name:"Hood"},
      {id:5001, cost: 20, Get:MufflerFn(-20,1), Img:Muffler, name:"Muffler"},
      {id:5002, cost: 30, Get:ManteauFn(-30,1), Img:Manteau, name:"Manteau"},
      {id:5003, cost: 40, Get:FalconMufflerFn(-40,1), Img:FalconMuffler, name:"Falcon Muffler"},
      {id:5004, cost: 50, Get:ValisManteauFn(-50,1), Img:ValisManteau, name:"Vali`s Manteau"},
      {id:5005, cost: 60, Get:ValkyrianManteauFn(-60,1), Img:ValkyrianManteau, name:"Valkyrian Manteau"},
      {id:5006, cost: 70, Get:WoolScarfFn(-70,1), Img:WoolScarf, name:"Wool Scarf"},
      {id:5007, cost: 80, Get:FallenAngelWingFn(-80,1), Img:FallenAngelWing, name:"Fallen Angel Wing"},
      {id:5008, cost: 90, Get:CloakofGrayFn(-90,1), Img:CloakofGray, name:"Cloak of Gray"},
      {id:5009, cost: 100, Get:ElementalCapeFn(-100,1), Img:ElementalCape, name:"Elemental Cape"},
      {id:5010, cost: 110, Get:AsprikaFn(-110,1), Img:Asprika, name:"Asprika"},
    ]
    let GarmentSellBox = [
      //Garment
      {id:6000, cost: 10, Get:HoodFn(10,-1), Img:Hood, name:"Hood", Item: userGoldItem.Hood},
      {id:6001, cost: 10, Get:MufflerFn(10,-1), Img:Muffler, name:"Muffler", Item: userGoldItem.Muffler},
      {id:6002, cost: 10, Get:ManteauFn(10,-1), Img:Manteau, name:"Manteau", Item: userGoldItem.Manteau},
      {id:6003, cost: 10, Get:FalconMufflerFn(10,-1), Img:FalconMuffler, name:"Falcon Muffler", Item: userGoldItem.FalconMuffler},
      {id:6004, cost: 10, Get:ValisManteauFn(10,-1), Img:ValisManteau, name:"Vali`s Manteau", Item: userGoldItem.ValisManteau},
      {id:6005, cost: 10, Get:ValkyrianManteauFn(10,-1), Img:ValkyrianManteau, name:"Valkyrian Manteau", Item: userGoldItem.ValkyrianManteau},
      {id:6006, cost: 10, Get:WoolScarfFn(10,-1), Img:WoolScarf, name:"Wool Scarf", Item: userGoldItem.WoolScarf},
      {id:6007, cost: 10, Get:FallenAngelWingFn(10,-1), Img:FallenAngelWing, name:"Fallen Angel Wing", Item: userGoldItem.FallenAngelWing},
      {id:6008, cost: 10, Get:CloakofGrayFn(10,-1), Img:CloakofGray, name:"Cloak of Gray", Item: userGoldItem.CloakofGray},
      {id:6009, cost: 10, Get:ElementalCapeFn(10,-1), Img:ElementalCape, name:"Elemental Cape", Item: userGoldItem.ElementalCape},
      {id:6010, cost: 10, Get:AsprikaFn(10,-1), Img:Asprika, name:"Asprika", Item: userGoldItem.Asprika},
    ]
    let ShoesBuyBox = [
      //Shoes
      {id:3000, cost: 10, Get:SandalsFn(-10,1), Img:Sandals, name:"Sandals"},
      {id:3001, cost: 20, Get:ShoesFn(-20,1),Img:Shoes, name:"Shoes"},
      {id:3002, cost: 30, Get:BootsFn(-30,1),Img:Boots,name:"Boots"},
      {id:3003, cost: 40, Get:GreavesFn(-40,1),Img:Greaves,name:"Greaves"},
      {id:3004, cost: 50, Get:BunnySlipperFn(-50,1),Img:BunnySlipper,name:"Bunny Slipper"},
      {id:3005, cost: 60, Get:TidalShoesFn(-60,1),Img:TidalShoes,name:"Tidal Shoes"},
      {id:3006, cost: 70, Get:SiegeBootsFn(-70,1),Img:SiegeBoots,name:"Siege Boots"},
      {id:3007, cost: 80, Get:SiegeGreavesFn(-80,1),Img:SiegeGreaves,name:"Siege Greaves"},
      {id:3008, cost: 90, Get:VidarsBootsFn(-90,1),Img:VidarsBoots,name:"Vidar`s Boots"},
      {id:3009, cost: 100, Get:VitalTreeShoesFn(-100,1),Img:VitalTreeShoes,name:"Vital Tree Shoes"},
      {id:3010, cost: 110, Get:VariantShoesFn(-110,1),Img:VariantShoes,name:"Variant Shoes"},
      {id:3011, cost: 120, Get:SleipnirFn(-120,1),Img:Sleipnir,name:"Sleipnir"},
    ]
    let ShoesSellBox = [
      //Shoes
      {id:4000, cost: 10, Get:SandalsFn(10,-1), Img:Sandals, name:"Sandals", Item: userGoldItem.Sandals},
      {id:4001, cost: 10, Get:ShoesFn(10,-1), Img:Shoes, name:"Shoes", Item: userGoldItem.Shoes},
      {id:4002, cost: 10, Get:BootsFn(10,-1), Img:Boots ,name:"Boots", Item: userGoldItem.Boots},
      {id:4003, cost: 10, Get:GreavesFn(10,-1), Img:Greaves, name:"Greaves", Item: userGoldItem.Greaves},
      {id:4004, cost: 10, Get:BunnySlipperFn(10,-1), Img:BunnySlipper, name:"Bunny Slipper", Item: userGoldItem.BunnySlipper},
      {id:4005, cost: 10, Get:TidalShoesFn(10,-1), Img:TidalShoes, name:"Tidal Shoes", Item: userGoldItem.TidalShoes},
      {id:4006, cost: 10, Get:SiegeBootsFn(10,-1), Img:SiegeBoots, name:"Siege Boots", Item: userGoldItem.SiegeBoots},
      {id:4007, cost: 10, Get:SiegeGreavesFn(10,-1), Img:SiegeGreaves, name:"Siege Greaves", Item: userGoldItem.SiegeGreaves},
      {id:4008, cost: 10, Get:VidarsBootsFn(10,-1), Img:VidarsBoots, name:"Vidar`s Boots", Item: userGoldItem.VidarsBoots},
      {id:4009, cost: 10, Get:VitalTreeShoesFn(10,-1), Img:VitalTreeShoes, name:"Vital Tree Shoes", Item: userGoldItem.VitalTreeShoes},
      {id:4010, cost: 10, Get:VariantShoesFn(10,-1), Img:VariantShoes, name:"Variant Shoes", Item: userGoldItem.VariantShoes},
      {id:4011, cost: 10, Get:SleipnirFn(10,-1), Img:Sleipnir, name:"Sleipnir", Item: userGoldItem.Sleipnir},
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
                : npcControlRoom.GarmentDealer && npcControlRoom.DealerBuy ?
                <div className="WeaponArmorDealerGoodsBox">
                  {/* 1.Zeny, 2.Buy or sell */}
                  {/* If you have enough money, you will get item. if you don't, pass failure */}
                  {GarmentBuyBox.map(Buy => {
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
                : npcControlRoom.GarmentDealer && npcControlRoom.DealerSell ?
                <div className="WeaponArmorDealerGoodsBox">
                  {GarmentSellBox.map(Sell => {
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
                : npcControlRoom.ShoesDealer && npcControlRoom.DealerBuy ?
                <div className="WeaponArmorDealerGoodsBox">
                  {/* 1.Zeny, 2.Buy or sell */}
                  {/* If you have enough money, you will get item. if you don't, pass failure */}
                  {ShoesBuyBox.map(Buy => {
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
                : npcControlRoom.ShoesDealer && npcControlRoom.DealerSell ?
                <div className="WeaponArmorDealerGoodsBox">
                  {ShoesSellBox.map(Sell => {
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
                    <button className="garmentDealer" onClick={() => {dispatch(TalktoGarmentDealerFn())}}><img src={PronteraGarmentDealerImg} alt="PronteraGarmentDealer" /></button>
                    <button className="shoesDealer" onClick={() => {dispatch(TalktoShoesDealerFn())}}><img src={PronteraShoesDealerImg} alt="PronteraShoesDealer" /></button>
                    <button className="armorDealer" onClick={() => {dispatch(TalktoArmorDealerFn())}}><img src={PronteraArmorDealerImg} alt="PronteraArmorDealer" /></button>
                    <button className="weaponDealer" onClick={() => {dispatch(TalktoWeaponDealerFn())}}><img src={PronteraWeaponDealerImg} alt="PronteraWeaponDealer" /></button>
                  </div>}
      </div>
    );
}

export default StartMenu;