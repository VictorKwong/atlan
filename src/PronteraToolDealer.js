import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn } from './actions';
import { RedPotionFn , OrangePotionFn, YellowPotionFn, WhitePotionFn, AnniversaryCakeFn, MastelaFruitFn, BluePotionFn, YggdrasilBerryFn, LampFn , PoringIslandMapFn , PayonCaveMapFn, GeffenDungeonMapFn} from './actions';

import './css/mapPronteraToolDealer.css'
import $ from 'jquery'

import RedPotion from './img/Item/RedPotion.gif'
import OrangePotion from './img/Item/OrangePotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
import WhitePotion from './img/Item/WhitePotion.gif'
import AnniversaryCake from './img/Item/AnniversaryCake.gif'
import MastelaFruit from './img/Item/MastelaFruit.gif'
import BluePotion from './img/Item/BluePotion.gif'
import YggdrasilBerry from './img/Item/YggdrasilBerry.gif'
import Lamp from './img/Item/Lamp.gif'
import PoringIslandMap from './img/Etc/PoringIslandMap.gif'
import PayonCaveMap from './img/Etc/PayonCaveMap.gif'
import GeffenDungeonMap from './img/Etc/GeffenDungeonMap.gif'

function StartMenu(){
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const userGoldItem = useSelector(state => state.userGoldItem)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    let MiscBuyBox = [
      {id:90000,cost: 50, Get:RedPotionFn(-50,1), Img: RedPotion, name: "Red Potion"},
      {id:90001,cost: 100, Get:OrangePotionFn(-100,1), Img: OrangePotion, name: "Orange Potion"},
      {id:90002,cost: 200, Get:YellowPotionFn(-200,1), Img: YellowPotion, name: "Yellow Potion"},
      {id:90003,cost: 500, Get:WhitePotionFn(-500,1), Img: WhitePotion, name: "White Potion"},
      {id:90004,cost: 1000, Get:AnniversaryCakeFn(-1000,1), Img: AnniversaryCake, name: "Anniversary Cake"},
      {id:90005,cost: 2000, Get:MastelaFruitFn(-2000,1), Img: MastelaFruit, name: "Mastela Fruit"},
      {id:90006,cost: 400, Get:BluePotionFn(-400,1), Img: BluePotion, name: "Blue Potion"},
      {id:90007,cost: 4000, Get:YggdrasilBerryFn(-4000,1), Img: YggdrasilBerry, name: "Yggdrasil Berry"},
      {id:91001,cost: 10, Get:LampFn(-10,1), Img: Lamp, name: "Lamp"},
    ]
    let MiscBuyUniqueBox = [ 
      {id:93000,cost: 1, Get:PoringIslandMapFn(-1,1), Img: PoringIslandMap, name: "PoringIsland Map", Item: userGoldItem.PoringIslandMap},
      {id:93001,cost: 1, Get:PayonCaveMapFn(-1,1), Img: PayonCaveMap, name: "PayonCave Map", Item: userGoldItem.PayonCaveMap},
      {id:93002,cost: 1, Get:GeffenDungeonMapFn(-1,1), Img: GeffenDungeonMap, name: "GeffenDungeon Map", Item: userGoldItem.GeffenDungeonMap}
    ]
  
    let MiscSellBox = [
      {id:100000,cost: 40, Get:RedPotionFn(40,-1), Img: RedPotion, name: "Red Potion", Item: userGoldItem.RedPotion},
      {id:100001,cost: 80, Get:OrangePotionFn(80,-1), Img: OrangePotion, name: "Orange Potion", Item: userGoldItem.OrangePotion},
      {id:100002,cost: 160, Get:YellowPotionFn(160,-1), Img: YellowPotion, name: "Yellow Potion", Item: userGoldItem.YellowPotion},
      {id:100003,cost: 400, Get:WhitePotionFn(400,-1), Img: WhitePotion, name: "White Potion", Item: userGoldItem.WhitePotion},
      {id:100004,cost: 800, Get:AnniversaryCakeFn(800,-1), Img: AnniversaryCake, name: "Anniversary Cake", Item: userGoldItem.AnniversaryCake},
      {id:100005,cost: 1600, Get:MastelaFruitFn(1600,-1), Img: MastelaFruit, name: "Mastela Fruit", Item: userGoldItem.MastelaFruit},
      {id:100006,cost: 320, Get:BluePotionFn(320,-1), Img: BluePotion, name: "Blue Potion", Item: userGoldItem.BluePotion},
      {id:100007,cost: 3200, Get:YggdrasilBerryFn(3200,-1), Img: YggdrasilBerry, name: "Yggdrasil Berry", Item: userGoldItem.YggdrasilBerry},
      {id:200001,cost: 8, Get:LampFn(8,-1), Img: Lamp, name: "Lamp", Item: userGoldItem.Lamp},
    ]
    return(
        <div className="toolDealerMap">
            <p className="toolDealerTitle">Tool Shop</p>
              {npcControlRoom.DealerBuy ?
                <div className="toolDealerGoodsBox">
                  {/* 1.Zeny, 2.Buy or sell */}
                  {/* If you have enough money, you will get item. if you don't, pass failure */}
                  {MiscBuyBox.map(Buy => {
                      return(
                        <span key={Buy.id}>
                          <button className="buyToolDealerItemButton toolDealerGoodsButtonFix"  onClick={userGoldItem.Zeny >= Buy.cost ? () =>{dispatch(Buy.Get); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter"><img src={Buy.Img} alt={Buy.name} /> -{Buy.cost}z {Buy.name}</p>
                            </div>
                          </button>
                        </span>
                      )
                  })}
                  {MiscBuyUniqueBox.map(Buy => {
                      return(
                        <span key={Buy.id}>
                          {Buy.Item === 0 ?
                          <button className="buyToolDealerItemButton toolDealerGoodsButtonFix"  onClick={userGoldItem.Zeny >= Buy.cost ? () =>{dispatch(Buy.Get); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter"><img src={Buy.Img} alt={Buy.name} /> -{Buy.cost}z {Buy.name}</p>
                            </div>
                          </button> : null}
                        </span>
                      )
                  })}
                </div>
                : npcControlRoom.DealerSell ?
                <div className="toolDealerGoodsBox">
                  {MiscSellBox.map(Sell => {
                      return(
                        <span key={Sell.id}>
                          {Sell.Item >= 1 ? <button className="buyToolDealerItemButton toolDealerGoodsButtonFix sellToolDealerItemButton"  onClick={() =>{dispatch(Sell.Get); dispatch(DealerSellSuccessFn());}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter">{Sell.Item}x <img src={Sell.Img} alt={Sell.name} /> +{Sell.cost}z {Sell.name}</p>
                            </div>
                          </button> : null}
                        </span>
                      )
                  })}
                </div> : null}
        </div>
    );

}
export default StartMenu;