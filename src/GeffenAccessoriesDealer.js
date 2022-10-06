import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn } from './actions';

import { ClipFn, RosaryFn, VesperCore02Fn, BradiumEarringFn, GloriousRingFn, SprintRingFn, DiabolusRingFn, MedalofHonorFn, BakonawaAgimatTattooFn, BrisingamenFn, MegingjardFn } from './actions'

import './css/mapGeffenAccessoriesDealer.css'
//Accessory
import Clip from './img/Equipment/Accessory/Clip.gif'
import Rosary from './img/Equipment/Accessory/Rosary.gif'
import VesperCore02 from './img/Equipment/Accessory/VesperCore02.gif'
import BradiumEarring from './img/Equipment/Accessory/BradiumEarring.gif'
import GloriousRing from './img/Equipment/Accessory/GloriousRing.gif'
import SprintRing from './img/Equipment/Accessory/SprintRing.gif'
import DiabolusRing from './img/Equipment/Accessory/DiabolusRing.gif'
import MedalofHonor from './img/Equipment/Accessory/MedalofHonor.gif'
import BakonawaAgimatTattoo from './img/Equipment/Accessory/BakonawaAgimatTattoo.gif'
import Brisingamen from './img/Equipment/Accessory/Brisingamen.gif'
import Megingjard from './img/Equipment/Accessory/Megingjard.gif'

// AudioCurrentTimeSaverFn
function StartMenu(){
    console.log('rerender')
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const itemPriceChart = useSelector(state => state.itemPriceChart)
    
    const dispatch = useDispatch();

    let HeadGearBuyBox = [
      //Accessory
      {id:100,cost: itemPriceChart.ClipBuy, Get:ClipFn(-itemPriceChart.ClipBuy,1), Img: Clip, name: "Clip"},
      {id:101,cost: itemPriceChart.RosaryBuy, Get:RosaryFn(-itemPriceChart.RosaryBuy,1), Img: Rosary, name: "Rosary"},
      {id:102,cost: itemPriceChart.VesperCore02Buy, Get:VesperCore02Fn(-itemPriceChart.VesperCore02Buy,1), Img: VesperCore02, name: "Vesper Core 02"},
      {id:103,cost: itemPriceChart.BradiumEarringBuy, Get:BradiumEarringFn(-itemPriceChart.BradiumEarringBuy,1), Img: BradiumEarring, name: "Bradium Earring"},
      {id:104,cost: itemPriceChart.GloriousRingBuy, Get:GloriousRingFn(-itemPriceChart.GloriousRingBuy,1), Img: GloriousRing, name: "Glorious Ring"},
      {id:105,cost: itemPriceChart.SprintRingBuy, Get:SprintRingFn(-itemPriceChart.SprintRingBuy,1), Img: SprintRing, name: "Sprint Ring"},
      {id:106,cost: itemPriceChart.DiabolusRingBuy, Get:DiabolusRingFn(-itemPriceChart.DiabolusRingBuy,1), Img: DiabolusRing, name: "Diabolus Ring"},
      {id:107,cost: itemPriceChart.MedalofHonorBuy, Get:MedalofHonorFn(-itemPriceChart.MedalofHonorBuy,1), Img: MedalofHonor, name: "Medal of Honor"},
      {id:108,cost: itemPriceChart.BakonawaAgimatTattooBuy, Get:BakonawaAgimatTattooFn(-itemPriceChart.BakonawaAgimatTattooBuy,1), Img: BakonawaAgimatTattoo, name: "Bakonawa Agimat Tattoo"},
      {id:109,cost: itemPriceChart.BrisingamenBuy, Get:BrisingamenFn(-itemPriceChart.BrisingamenBuy,1), Img: Brisingamen, name: "Brisingamen"},
      {id:110,cost: itemPriceChart.MegingjardBuy, Get:MegingjardFn(-itemPriceChart.MegingjardBuy,1), Img: Megingjard, name: "Megingjard"},
      
    ]
    let HeadGearSellBox = [
      //Accessory
      {id:200,cost: 80, Get:ClipFn(80,-1), Img: Clip, name: "Clip", Item: userGoldItem.Clip},
      {id:201,cost: 80, Get:RosaryFn(80,-1), Img: Rosary, name: "Rosary", Item: userGoldItem.Rosary},
      {id:202,cost: 80, Get:VesperCore02Fn(80,-1), Img: VesperCore02, name: "Vesper Core 02", Item: userGoldItem.VesperCore02},
      {id:203,cost: 80, Get:BradiumEarringFn(80,-1), Img: BradiumEarring, name: "Bradium Earring", Item: userGoldItem.BradiumEarring},
      {id:204,cost: 80, Get:GloriousRingFn(80,-1), Img: GloriousRing, name: "Glorious Ring", Item: userGoldItem.GloriousRing},
      {id:205,cost: 80, Get:SprintRingFn(80,-1), Img: SprintRing, name: "Sprint Ring", Item: userGoldItem.SprintRing},
      {id:206,cost: 80, Get:DiabolusRingFn(80,-1), Img: DiabolusRing, name: "Diabolus Ring", Item: userGoldItem.DiabolusRing},
      {id:207,cost: 80, Get:MedalofHonorFn(80,-1), Img: MedalofHonor, name: "Medal of Honor", Item: userGoldItem.MedalofHonor},
      {id:208,cost: 80, Get:BakonawaAgimatTattooFn(80,-1), Img: BakonawaAgimatTattoo, name: "Bakonawa Agimat Tattoo", Item: userGoldItem.BakonawaAgimatTattoo},
      {id:209,cost: 80, Get:BrisingamenFn(80,-1), Img: Brisingamen, name: "Brisingamen", Item: userGoldItem.Brisingamen},
      {id:210,cost: 80, Get:MegingjardFn(80,-1), Img: Megingjard, name: "Megingjard", Item: userGoldItem.Megingjard},
    ]
    return(
      <div className={npcControlRoom.DealerBuy || npcControlRoom.DealerSell ? "AccessoriesDealerMapSmile" : "AccessoriesDealerMap"}>
        <p className="AccessoriesDealerTitle">Accessories Shop</p>
        
        {npcControlRoom.DealerBuy ?
          <div className="accessoriesDealerGoodsBox">
            {/* 1.Zeny, 2.Buy or sell */}
            {/* If you have enough money, you will get item. if you don't, pass failure */}
            {HeadGearBuyBox.map(Buy => {
                return(
                  <span key={Buy.id}>
                          <button className="buyAccessoriesDealerItemButton accessoriesDealerGoodsButtonFix"  onClick={userGoldItem.Zeny >= Buy.cost ? () =>{dispatch(Buy.Get); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter"><img src={Buy.Img} alt={Buy.name} /> -{Buy.cost}z {Buy.name}</p>
                            </div>
                          </button>
                  </span>
                )
            })}
          </div>
          : npcControlRoom.DealerSell ?
          <div className="accessoriesDealerGoodsBox">
            {HeadGearSellBox.map(Sell => {
                return(
                  <span key={Sell.id}>
                          {/* We have item, and (item name is not our equip name or item is not have one) */}
                          {Sell.Item >= 1  && (userStats.userHeadGear !== Sell.name || Sell.Item !== 1 ) ? <button className="buyAccessoriesDealerItemButton accessoriesDealerGoodsButtonFix sellAccessoriesDealerItemButton"  onClick={() =>{dispatch(Sell.Get); dispatch(DealerSellSuccessFn());}}>
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