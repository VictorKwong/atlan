import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn } from './actions';
import { LordKahosHornFn , TeddybearHatFn , CrownFn , HelmFn , PandaHatFn , ChefHatFn , SantaPoringHatFn } from './actions';

import { ClipFn, RosaryFn, VesperCore02Fn, BradiumEarringFn, GloriousRingFn, SprintRingFn, DiabolusRingFn, MedalofHonorFn, BakonawaAgimatTattooFn, BrisingamenFn, MegingjardFn } from './actions'

import './css/mapPronteraHeadGearDealer.css'
//HeadGear
import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'
import TeddybearHat from './img/Equipment/HeadGear/TeddybearHat.gif'
import Crown from './img/Equipment/HeadGear/Crown.gif'
import Helm from './img/Equipment/HeadGear/Helm.gif'
import PandaHat from './img/Equipment/HeadGear/PandaHat.gif'
import ChefHat from './img/Equipment/HeadGear/ChefHat.gif'
import SantaPoringHat from './img/Equipment/HeadGear/SantaPoringHat.gif'
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

    let HeadGearBuyBox = [
      //HeadGear
      {id:90000,cost: 100, Get:LordKahosHornFn(-100,1), Img: LordKahosHorn, name: "Lord Kaho`s Horn"},
      {id:90001,cost: 100, Get:TeddybearHatFn(-100,1), Img: TeddybearHat, name: "Teddybear Hat"},
      {id:90002,cost: 100, Get:CrownFn(-100,1), Img: Crown, name: "Crown"},
      {id:90003,cost: 100, Get:HelmFn(-100,1), Img: Helm, name: "Helm"},
      {id:90004,cost: 100, Get:PandaHatFn(-100,1), Img: PandaHat, name: "Panda Hat"},
      {id:90005,cost: 100, Get:ChefHatFn(-100,1), Img: ChefHat, name: "Chef Hat"},
      {id:90006,cost: 100, Get:SantaPoringHatFn(-100,1), Img: SantaPoringHat, name: "Santa Poring Hat"},
      
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