import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanItemFn, GotoItemChoiceFn , GotoEquipChoiceFn, GotoETCChoiceFn} from './actions';
import $ from 'jquery'
//ITEM
import { UseRedPotionFn, UseOrangePotionFn, UseYellowPotionFn, UseWhitePotionFn, UseAnniversaryCakeFn, UseMastelaFruitFn, UseBluePotionFn, UseYggdrasilBerryFn } from './actions'

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
//HEADGEAR
import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'
import TeddybearHat from './img/Equipment/HeadGear/TeddybearHat.gif'
import Crown from './img/Equipment/HeadGear/Crown.gif'
import Helm from './img/Equipment/HeadGear/Helm.gif'
import PandaHat from './img/Equipment/HeadGear/PandaHat.gif'
import ChefHat from './img/Equipment/HeadGear/ChefHat.gif'
import SantaPoringHat from './img/Equipment/HeadGear/SantaPoringHat.gif'
//ITEMS
import RedPotion from './img/Item/RedPotion.gif'
import OrangePotion from './img/Item/OrangePotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
import WhitePotion from './img/Item/WhitePotion.gif'
import AnniversaryCake from './img/Item/AnniversaryCake.gif'
import MastelaFruit from './img/Item/MastelaFruit.gif'
import BluePotion from './img/Item/BluePotion.gif'
import YggdrasilBerry from './img/Item/YggdrasilBerry.gif'
//ETC
import Jellopy from './img/Etc/Poring_Jellopy70.gif'
import EmptyBottle from './img/Etc/Poring_EmptyBottle15.gif'
import StickyMucus from './img/Etc/Poring_StickyMucus004.gif'
import Clover from './img/Etc/Lunatic_Clover65.gif'
import Feather from './img/Etc/Lunatic_Feather10.gif'

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
    
    let ItemBox = [
      //WEAPON
      {id:20001, Img:RedPotion, name:"Red Potion", itemCheck:userGoldItem.RedPotion, useItem:UseRedPotionFn()},
      {id:20002, Img:OrangePotion, name:"Orange Potion", itemCheck:userGoldItem.OrangePotion, useItem:UseOrangePotionFn()},
      {id:20003, Img:YellowPotion, name:"Yellow Potion", itemCheck:userGoldItem.YellowPotion, useItem:UseYellowPotionFn()},
      {id:20004, Img:WhitePotion, name:"White Potion", itemCheck:userGoldItem.WhitePotion, useItem:UseWhitePotionFn()},
      {id:20005, Img:AnniversaryCake, name:"Anniversary Cake", itemCheck:userGoldItem.AnniversaryCake, useItem:UseAnniversaryCakeFn()},
      {id:20006, Img:MastelaFruit, name:"Mastela Fruit", itemCheck:userGoldItem.MastelaFruit, useItem:UseMastelaFruitFn()},
      {id:20007, Img:BluePotion, name:"Blue Potion", itemCheck:userGoldItem.BluePotion, useItem:UseBluePotionFn()},
      {id:20008, Img:YggdrasilBerry, name:"Yggdrasil Berry", itemCheck:userGoldItem.YggdrasilBerry, useItem:UseYggdrasilBerryFn()},
    ]
    let EquipBox = [
      //WEAPON
      {id:10001, Img:Katana, name:"Katana", itemCheck:userGoldItem.Katana},
      {id:10002, Img:BastardSword, name:"Bastard Sword", itemCheck:userGoldItem.BastardSword},
      {id:10003, Img:GaiaSword, name:"Gaia Sword", itemCheck:userGoldItem.GaiaSword},
      {id:10004, Img:TwinEdgeofNaghtSieger, name:"Twin Edge of Naght Sieger", itemCheck:userGoldItem.TwinEdgeofNaghtSieger},
      {id:10005, Img:VioletFear, name:"VioletFear", itemCheck:userGoldItem.VioletFear},
      //ARMOR
      {id:10006, Img:CottonShirt, name:"Cotton Shirt", itemCheck:userGoldItem.CottonShirt},
      {id:10007, Img:AdventureSuit, name:"Adventure Suit", itemCheck:userGoldItem.AdventureSuit},
      {id:10008, Img:WoodenMail, name:"WoodenMail", itemCheck:userGoldItem.WoodenMail},
      {id:10009, Img:Coat, name:"Coat", itemCheck:userGoldItem.Coat},
      {id:10010, Img:PaddedArmor, name:"PaddedArmor", itemCheck:userGoldItem.PaddedArmor},
      {id:10011, Img:ChainMail, name:"ChainMail", itemCheck:userGoldItem.ChainMail},
      {id:10012, Img:FullPlate, name:"FullPlate", itemCheck:userGoldItem.FullPlate},
      //HeadGear
      {id:10013, Img:LordKahosHorn, name:"Lord Kaho`s Horn", itemCheck:userGoldItem.LordKahosHorn},
      {id:10014, Img:TeddybearHat, name:"Teddybea Hat", itemCheck:userGoldItem.TeddybearHat},
      {id:10015, Img:Crown, name:"Crown", itemCheck:userGoldItem.Crown},
      {id:10016, Img:Helm, name:"Helm", itemCheck:userGoldItem.Helm},
      {id:10017, Img:PandaHat, name:"Panda Hat", itemCheck:userGoldItem.PandaHat},
      {id:10018, Img:ChefHat, name:"Chef Hat", itemCheck:userGoldItem.ChefHat},
      {id:10019, Img:SantaPoringHat, name:"Santa Poring Hat", itemCheck:userGoldItem.SantaPoringHat}
    ]
    let EtcBox = [
      {id:1000, Img:Jellopy, name:"Jellopy", itemCheck:userGoldItem.Jellopy},
      {id:1001, Img:EmptyBottle, name:"EmptyBottle", itemCheck:userGoldItem.EmptyBottle},
      {id:1002, Img:StickyMucus, name:"StickyMucus", itemCheck:userGoldItem.StickyMucus},
      {id:1003, Img:Clover, name:"Clover", itemCheck:userGoldItem.Clover},
      {id:1004, Img:Feather, name:"Feather", itemCheck:userGoldItem.Feather}
    ]
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});

    const dispatch = useDispatch();
    return(
      <div className="AltanEquipmentMap">
        <h2>Inventory</h2>
        <button className="itemChoice" onClick={() => dispatch(GotoItemChoiceFn())}>item</button>
        <button className="weaponChoice" onClick={() => dispatch(GotoEquipChoiceFn())}>equip</button>
        <button className="armorChoice" onClick={() => dispatch(GotoETCChoiceFn())}>etc</button>
        {screenControlRoom.ItemChoice ?
          <div>
              {ItemBox.map(Item => {
                return( 
                  <div key={Item.id}>
                    {Item.itemCheck >= 1 ? <button onClick={() => dispatch((Item.useItem))}><img src={Item.Img} alt={Item.name} />x{Item.itemCheck} {Item.name}</button> : null}
                  </div>
                )})}
            {/* {userGoldItem.RedPotion >= 1 ? <button onClick={() => dispatch(UseRedPotionFn())}><img src={RedPotion} alt="RedPotion" /> RedPotion x{userGoldItem.RedPotion}</button> : null}
            {userGoldItem.YellowPotion >= 1 ? <button onClick={() => dispatch(UseYellowPotionFn())}><img src={YellowPotion} alt="YellowPotion" /> YellowPotion x{userGoldItem.YellowPotion}</button> : null } */}
          </div>: null }
        {screenControlRoom.EquipChoice ?
          <div>
            {EquipBox.map(Equip => {
                return( 
                  <div key={Equip.id}>
                    {Equip.itemCheck >= 1 ? <p><img src={Equip.Img} alt={Equip.name} />x{Equip.itemCheck} {Equip.name}</p> : null}
                  </div>
                )})}
            {/* {userGoldItem.Katana >= 1 ? <p><img src={Katana} alt="Katana" />x{userGoldItem.Katana} Katana</p> : null}
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
            {userGoldItem.FullPlate >= 1 ? <p><img src={FullPlate} alt="FullPlate" />x{userGoldItem.FullPlate} FullPlate</p> : null} */}
          </div> : null }
        {screenControlRoom.ETCChoice ?
          <div>
              {EtcBox.map(Etc => {
                return( 
                  <div key={Etc.id}>
                    {Etc.itemCheck >= 1 ? <p><img src={Etc.Img} alt={Etc.name} />x{Etc.itemCheck} {Etc.name}</p> : null}
                  </div>
                )})}
          </div> : null }
        <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanItemFn());}}>back</button>
      </div>
    );
}

export default StartMenu;