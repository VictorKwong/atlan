import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn , DealerSellFailureFn} from './actions';
import { LordKahosHornFn , TeddybearHatFn , CrownFn , HelmFn , PandaHatFn , ChefHatFn , SantaPoringHatFn } from './actions';

import './css/mapPronteraToolDealer.css'
import $ from 'jquery'
import Prontera from './Prontera'
import RedPotion from './img/Item/RedPotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'
import TeddybearHat from './img/Equipment/HeadGear/TeddybearHat.gif'
import Crown from './img/Equipment/HeadGear/Crown.gif'
import Helm from './img/Equipment/HeadGear/Helm.gif'
import PandaHat from './img/Equipment/HeadGear/PandaHat.gif'
import ChefHat from './img/Equipment/HeadGear/ChefHat.gif'
import SantaPoringHat from './img/Equipment/HeadGear/SantaPoringHat.gif'
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

    let HeadGearBuyBox = [
      {id:90000,cost: 100, Get:LordKahosHornFn(-100,1), Img: LordKahosHorn, name: "Lord Kaho`s Horn"},
      {id:90001,cost: 100, Get:TeddybearHatFn(-100,1), Img: TeddybearHat, name: "Teddybear Hat"},
      {id:90002,cost: 100, Get:CrownFn(-100,1), Img: Crown, name: "Crown"},
      {id:90003,cost: 100, Get:HelmFn(-100,1), Img: Helm, name: "Helm"},
      {id:90004,cost: 100, Get:PandaHatFn(-100,1), Img: PandaHat, name: "Panda Hat"},
      {id:90005,cost: 100, Get:ChefHatFn(-100,1), Img: ChefHat, name: "Chef Hat"},
      {id:90006,cost: 100, Get:SantaPoringHatFn(-100,1), Img: SantaPoringHat, name: "Santa Poring Hat"}
    ]
    let HeadGearSellBox = [
      {id:90000,cost: 80, Get:LordKahosHornFn(80,-1), Img: LordKahosHorn, name: "Lord Kaho`s Horn", Item: userGoldItem.LordKahosHorn},
      {id:90001,cost: 80, Get:TeddybearHatFn(80,-1), Img: TeddybearHat, name: "Teddybear Hat", Item: userGoldItem.TeddybearHat},
      {id:90002,cost: 80, Get:CrownFn(80,-1), Img: Crown, name: "Crown", Item: userGoldItem.Crown},
      {id:90003,cost: 80, Get:HelmFn(80,-1), Img: Helm, name: "Helm", Item: userGoldItem.Helm},
      {id:90004,cost: 80, Get:PandaHatFn(80,-1), Img: PandaHat, name: "Panda Hat", Item: userGoldItem.PandaHat},
      {id:90005,cost: 80, Get:ChefHatFn(80,-1), Img: ChefHat, name: "Chef Hat", Item: userGoldItem.ChefHat},
      {id:90006,cost: 80, Get:SantaPoringHatFn(80,-1), Img: SantaPoringHat, name: "Santa Poring Hat", Item: userGoldItem.SantaPoringHat}
    ]
    return(
      <div>
        <div className="storyMapScreen">
          <div>
              <p>Hiasfknsokagndsokgnasdokgnaoskdg</p>
              
              {npcControlRoom.DealerBuy ?
                <div>
                  {/* 1.Zeny, 2.Buy or sell */}
                  {/* If you have enough money, you will get item. if you don't, pass failure */}
                  {HeadGearBuyBox.map(Buy => {
                      return(
                        <div key={Buy.id}>
                          <button onClick={userGoldItem.Zeny >= Buy.cost ? () =>{dispatch(Buy.Get); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}><img src={Buy.Img} alt={Buy.name} /> -{Buy.cost}z {Buy.name}</button>
                        </div>
                      )
                  })}
                </div>
                : npcControlRoom.DealerSell ?
                <div>
                  {HeadGearSellBox.map(Sell => {
                      return(
                        <div key={Sell.id}>
                          <button onClick={Sell.Item >= 1 ? () =>{dispatch(Sell.Get); dispatch(DealerSellSuccessFn());} : () => {dispatch(DealerSellFailureFn());}}><img src={Sell.Img} alt={Sell.name} /> +{Sell.cost}z {Sell.name}</button>
                        </div>
                      )
                  })}
                </div> : null}

          </div>
        </div>
      </div>
    );
}

export default StartMenu;