import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DealerBuySuccessFn , DealerBuyFailureFn , DealerSellSuccessFn , DealerSellFailureFn} from './actions';
import { LordKahosHornFn } from './actions';

import './css/mapPronteraToolDealer.css'
import $ from 'jquery'
import Prontera from './Prontera'
import RedPotion from './img/Item/RedPotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'
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


    return(
      <div>
        <div className="storyMapScreen">
          <div>
              <p>Hiasfknsokagndsokgnasdokgnaoskdg</p>
              
              {npcControlRoom.DealerBuy ?
                <div>
                  {/* 1.Zeny, 2.Buy or sell */}
                  {/* If you have enough money, you will get item. if you don't, pass failure */}
                  <button onClick={userGoldItem.Zeny >= 100 ? () =>{dispatch(LordKahosHornFn(-100,1)); dispatch(DealerBuySuccessFn());} : () => {dispatch(DealerBuyFailureFn());}}><img src={LordKahosHorn} alt="LordKahosHorn" /> -100z</button>
                </div>
                : npcControlRoom.DealerSell ?
                <div>
                  <button onClick={userGoldItem.LordKahosHorn >= 1 ? () =>{dispatch(LordKahosHornFn(80,-1)); dispatch(DealerSellSuccessFn());} : () => {dispatch(DealerSellFailureFn());}}><img src={LordKahosHorn} alt="LordKahosHorn" /> +80z</button>
                </div> : null}

          </div>
        </div>
      </div>
    );
}

export default StartMenu;