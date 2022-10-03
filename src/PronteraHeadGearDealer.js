import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn } from './actions';
import { LordKahosHornFn , TeddybearHatFn , CrownFn , HelmFn , PandaHatFn , ChefHatFn , SantaPoringHatFn } from './actions';


import './css/mapPronteraHeadGearDealer.css'
//HeadGear
import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'
import TeddybearHat from './img/Equipment/HeadGear/TeddybearHat.gif'
import Crown from './img/Equipment/HeadGear/Crown.gif'
import Helm from './img/Equipment/HeadGear/Helm.gif'
import PandaHat from './img/Equipment/HeadGear/PandaHat.gif'
import ChefHat from './img/Equipment/HeadGear/ChefHat.gif'
import SantaPoringHat from './img/Equipment/HeadGear/SantaPoringHat.gif'

// AudioCurrentTimeSaverFn
function StartMenu(){
    console.log('rerender')
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const itemPriceChart = useSelector(state => state.itemPriceChart)
    
    const dispatch = useDispatch();

    let HeadGearBuyBox = [
      //HeadGear
      {id:90000,cost: itemPriceChart.LordKahosHornBuy, Get:LordKahosHornFn(-itemPriceChart.LordKahosHornBuy,1), Img: LordKahosHorn, name: "Lord Kaho`s Horn"},
      {id:90001,cost: itemPriceChart.TeddybearHatBuy, Get:TeddybearHatFn(-itemPriceChart.TeddybearHatBuy,1), Img: TeddybearHat, name: "Teddybear Hat"},
      {id:90002,cost: itemPriceChart.CrownBuy, Get:CrownFn(-itemPriceChart.CrownBuy,1), Img: Crown, name: "Crown"},
      {id:90003,cost: itemPriceChart.HelmBuy, Get:HelmFn(-itemPriceChart.HelmBuy,1), Img: Helm, name: "Helm"},
      {id:90004,cost: itemPriceChart.PandaHatBuy, Get:PandaHatFn(-itemPriceChart.PandaHatBuy,1), Img: PandaHat, name: "Panda Hat"},
      {id:90005,cost: itemPriceChart.ChefHatBuy, Get:ChefHatFn(-itemPriceChart.ChefHatBuy,1), Img: ChefHat, name: "Chef Hat"},
      {id:90006,cost: itemPriceChart.SantaPoringHatBuy, Get:SantaPoringHatFn(-itemPriceChart.SantaPoringHatBuy,1), Img: SantaPoringHat, name: "Santa Poring Hat"},
      
    ]
    let HeadGearSellBox = [
      //HeadGear
      {id:80000,cost: 80, Get:LordKahosHornFn(80,-1), Img: LordKahosHorn, name: "Lord Kaho`s Horn", Item: userGoldItem.LordKahosHorn},
      {id:80001,cost: 80, Get:TeddybearHatFn(80,-1), Img: TeddybearHat, name: "Teddybear Hat", Item: userGoldItem.TeddybearHat},
      {id:80002,cost: 80, Get:CrownFn(80,-1), Img: Crown, name: "Crown", Item: userGoldItem.Crown},
      {id:80003,cost: 80, Get:HelmFn(80,-1), Img: Helm, name: "Helm", Item: userGoldItem.Helm},
      {id:80004,cost: 80, Get:PandaHatFn(80,-1), Img: PandaHat, name: "Panda Hat", Item: userGoldItem.PandaHat},
      {id:80005,cost: 80, Get:ChefHatFn(80,-1), Img: ChefHat, name: "Chef Hat", Item: userGoldItem.ChefHat},
      {id:80006,cost: 80, Get:SantaPoringHatFn(80,-1), Img: SantaPoringHat, name: "Santa Poring Hat", Item: userGoldItem.SantaPoringHat},
    ]
    return(
      <div className={npcControlRoom.DealerBuy || npcControlRoom.DealerSell ? "HeadGearDealerMapSmile" : "HeadGearDealerMap"}>
        <p className="HeadGearDealerTitle">Head Gear Shop</p>
        
        {npcControlRoom.DealerBuy ?
          <div className="headGearDealerGoodsBox">
            {/* 1.Zeny, 2.Buy or sell */}
            {/* If you have enough money, you will get item. if you don't, pass failure */}
            {HeadGearBuyBox.map(Buy => {
                return(
                  <span key={Buy.id}>
                          <button className="buyHeadGearDealerItemButton headGearDealerGoodsButtonFix"  onClick={userGoldItem.Zeny >= Buy.cost ? () =>{dispatch(Buy.Get); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter"><img src={Buy.Img} alt={Buy.name} /> -{Buy.cost}z {Buy.name}</p>
                            </div>
                          </button>
                  </span>
                )
            })}
          </div>
          : npcControlRoom.DealerSell ?
          <div className="headGearDealerGoodsBox">
            {HeadGearSellBox.map(Sell => {
                return(
                  <span key={Sell.id}>
                          {/* We have item, and (item name is not our equip name or item is not have one) */}
                          {Sell.Item >= 1  && (userStats.userHeadGear !== Sell.name || Sell.Item !== 1 ) ? <button className="buyHeadGearDealerItemButton headGearDealerGoodsButtonFix sellHeadGearDealerItemButton"  onClick={() =>{dispatch(Sell.Get); dispatch(DealerSellSuccessFn());}}>
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