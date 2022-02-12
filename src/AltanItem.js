import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanItemFn, GotoItemChoiceFn , GotoEquipChoiceFn, GotoETCChoiceFn} from './actions';

//ITEM
import { UseRedPotionFn, UseYellowPotionFn} from './actions';
import $ from 'jquery'
import './css/mapAltanEquipment.css'
// import useSound from 'use-sound';
//WEAPON
import Katana from './img/Equipment/Weapon/Katana.gif'
import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
import VioletFear from './img/Equipment/Weapon/VioletFear.gif'
//ARMOR
import CottonShirt from './img/Equipment/Armor/CottonShirt.gif'
import AdventureSuit from './img/Equipment/Armor/AdventurersSuit.gif'
import WoodenMail from './img/Equipment/Armor/WoodenMail.gif'
import Coat from './img/Equipment/Armor/Coat.gif'
import PaddedArmor from './img/Equipment/Armor/PaddedArmor.gif'
import ChainMail from './img/Equipment/Armor/ChainMail.gif'
import FullPlate from './img/Equipment/Armor/FullPlate.gif'
//ITEMS
import RedPotion from './img/Item/RedPotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'

// AudioCurrentTimeSaverFn
function StartMenu(){
    console.log('rerender')
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});

    const dispatch = useDispatch();
    return(
      <div className="AltanEquipmentMap">
        <h2>Inventory</h2>
        <button className="itemChoice" onClick={() => dispatch(GotoItemChoiceFn())}>Item</button>
        <button className="weaponChoice" onClick={() => dispatch(GotoEquipChoiceFn())}>Equip</button>
        <button className="armorChoice" onClick={() => dispatch(GotoETCChoiceFn())}>Armor</button>
        {screenControlRoom.ItemChoice ?
          <div>
            {userGoldItem.RedPotion >= 1 ? <button onClick={() => dispatch(UseRedPotionFn())}><img src={RedPotion} alt="RedPotion" /> RedPotion x{userGoldItem.RedPotion}</button> : null}
            {userGoldItem.YellowPotion >= 1 ? <button onClick={() => dispatch(UseYellowPotionFn())}><img src={YellowPotion} alt="YellowPotion" /> YellowPotion x{userGoldItem.YellowPotion}</button> : null }
          </div>: null }
        {screenControlRoom.EquipChoice ?
          <div>
            {userGoldItem.Katana >= 1 ? <p><img src={Katana} alt="Katana" />x{userGoldItem.Katana} Katana</p> : null}
            {userGoldItem.BastardSword >= 1 ? <p><img src={BastardSword} alt="BastardSword" />x{userGoldItem.BastardSword} BastardSword </p> : null}
            {userGoldItem.GaiaSword >= 1 ? <p><img src={GaiaSword} alt="GaiaSword" />x{userGoldItem.GaiaSword} GaiaSword</p> : null}
            {userGoldItem.TwinEdgeofNaghtSieger >= 1 ? <p><img src={TwinEdgeofNaghtSieger} alt="TwinEdgeofNaghtSieger" />x{userGoldItem.TwinEdgeofNaghtSieger} TwinEdgeofNaghtSieger</p> : null}
            {userGoldItem.VioletFear >= 1 ? <p><img src={VioletFear} alt="VioletFear" />x{userGoldItem.VioletFear} VioletFear</p> : null}
            {userGoldItem.CottonShirt >= 1 ? <p><img src={CottonShirt} alt="CottonShirt" />x{userGoldItem.CottonShirt} Red Potion</p> : null}
            {userGoldItem.AdventureSuit >= 1 ? <p><img src={AdventureSuit} alt="AdventureSuit" />x{userGoldItem.AdventureSuit} Yellow Potion</p> : null}
            {userGoldItem.WoodenMail >= 1 ? <p><img src={WoodenMail} alt="WoodenMail" />x{userGoldItem.WoodenMail} WoodenMail</p> : null}
            {userGoldItem.Coat >= 1 ? <p><img src={Coat} alt="Coat" />x{userGoldItem.Coat} Coat</p> : null}
            {userGoldItem.PaddedArmor >= 1 ? <p><img src={PaddedArmor} alt="PaddedArmor" />x{userGoldItem.PaddedArmor} PaddedArmor</p> : null}
            {userGoldItem.ChainMail >= 1 ? <p><img src={ChainMail} alt="ChainMail" />x{userGoldItem.ChainMail} ChainMail</p> : null}
            {userGoldItem.FullPlate >= 1 ? <p><img src={FullPlate} alt="FullPlate" />x{userGoldItem.FullPlate} FullPlate</p> : null}
          </div> : null }
        {screenControlRoom.ETCChoice ?
          <div>
            <p>add later</p>
          </div> : null }
        <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanItemFn());}}>back</button>
      </div>
    );
}

export default StartMenu;