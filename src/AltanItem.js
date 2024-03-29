import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanItemFn, GotoItemChoiceFn , GotoEquipChoiceFn, GotoETCChoiceFn} from './actions';
//ITEM
import { UseRedPotionFn, UseOrangePotionFn, UseYellowPotionFn, UseWhitePotionFn, UseAnniversaryCakeFn, UseMastelaFruitFn, UseBluePotionFn, UseYggdrasilBerryFn,LampFn } from './actions'

//Result
import { GotoPoringIslandPath6Fn , GotoPayonCave1FPath2HiddenFn , GotoPayonCave2FPath9HiddenFn , GotoGeffenDungeon3FPath5HiddenFn } from './actions'

import './css/mapAltanItem.css'
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

//ITEMS
import RedPotion from './img/Item/RedPotion.gif'
import OrangePotion from './img/Item/OrangePotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
import WhitePotion from './img/Item/WhitePotion.gif'
import AnniversaryCake from './img/Item/AnniversaryCake.gif'
import MastelaFruit from './img/Item/MastelaFruit.gif'
import BluePotion from './img/Item/BluePotion.gif'
import YggdrasilBerry from './img/Item/YggdrasilBerry.gif'
import Lamp from './img/Item/Lamp.gif'
//ETC
import Jellopy from './img/Etc/Poring_Jellopy70.gif'
import EmptyBottle from './img/Etc/Poring_EmptyBottle15.gif'
import StickyMucus from './img/Etc/Poring_StickyMucus004.gif'
import Clover from './img/Etc/Lunatic_Clover65.gif'
import Feather from './img/Etc/Lunatic_Feather10.gif'
import GrasshoppersLeg from './img/Etc/Rocker_GrasshoppersLeg95.gif'
import SnailsShell from './img/Etc/Ambernite_SnailsShell90.gif'
import Shell from './img/Etc/Ambernite_Shell30.gif'
import Garlet from './img/Etc/Ambernite_Garlet12.gif'
import Emperium from './img/Etc/Ghostring_Emperium.gif'
import Fabric from './img/Etc/Ghostring_Fabric80.gif'
import FourLeafClover from './img/Etc/Eclipse_FourLeafClover.gif'
import GlassBead from './img/Etc/Eclipse_GlassBead80.gif'
import Opal from './img/Etc/Eclipse_Opal50.gif'
import DecayedNail from './img/Etc/Zombie_DecayedNail90.gif'
import SkelBone from './img/Etc/Skeleton_Skel-Bone8.gif'
import Daenggie from './img/Etc/Munak_Daenggie90.gif'
import ShortDaenggie from './img/Etc/Bongun_ShortDaenggie55.gif'
import OldPortrait from './img/Etc/BonGun_OldPortrait10.gif'
import BlackHair from './img/Etc/Sohee_BlackHair90.gif'
import AuthoritativeBadge from './img/Etc/Sohee_AuthoritativeBadge10.gif'
import NineTails from './img/Etc/Wolyafa_NineTails55.gif'
import PoisonSporeItem from './img/Etc/PoisonSpore_PoisonSpore90.gif'
import MushroomSpore from './img/Etc/PoisonSpore_MushroomSpore12.gif'
import Karvodailnirol from './img/Etc/PoisonSpore_Karvodailnirol5.gif'
import JackPumpkin from './img/Etc/Jakk_JackPumpkin90.gif'
import Zargon from './img/Etc/Jakk_Zargon9.gif'
import HorrendousMouth from './img/Etc/Ghoul_HorrendousMouth65.gif'
import Memento from './img/Etc/Ghoul_Memento20.gif'
import GoldenHair from './img/Etc/Marionette_GoldenHair90.gif'
import RedGemstone from './img/Etc/Wraith_RedGemstone10.gif'
import CursedRuby from './img/Etc/Doppelganger_CursedRuby80.gif'
import Diamond from './img/Etc/WraithDead_Diamond10.gif'
import EyeOfHellion from './img/Etc/HellionRevenant_EyeOfHellion80.gif'
import Gold from './img/Etc/GoldenThiefBug_Gold100.gif'
import Amethyst from './img/Etc/Drake_Amethyst100.gif'
import Tongue from './img/Etc/Phreeoni_Tongue100.gif'
import AntJaw from './img/Etc/Phreeoni_AntJaw90.gif'
import MysticFrozen from './img/Etc/StormyKnight_MysticFrozen90.gif'
import Aquamarine from './img/Etc/StormyKnight_Aquamarine80.gif'
//IMPORTANT
import PoringIslandMap from './img/Etc/PoringIslandMap.gif'
import PayonCaveMap from './img/Etc/PayonCaveMap.gif'
import GeffenDungeonMap from './img/Etc/GeffenDungeonMap.gif'
//MISSION
import SpiritOfBoss from './img/Etc/SpiritOfEclipse.gif'

function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const userGoldItem = useSelector(state => state.userGoldItem)

    
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
    let ItemSpecialBox = [
      {id:30000, Img:Lamp, name:"Lamp", itemCheck:userGoldItem.Lamp, useItem:LampFn(0,-1), condit1:npcControlRoom.PoringIslandBridgeNPC, result1:GotoPoringIslandPath6Fn(), condit2:screenControlRoom.UserUnlockPath, result2:GotoPayonCave1FPath2HiddenFn(), condit3:npcControlRoom.PayonCave2FSelfNPC , result3: GotoPayonCave2FPath9HiddenFn(), condit4:screenControlRoom.UserUnlockPath, result4:GotoGeffenDungeon3FPath5HiddenFn()}
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
      {id:10019, Img:SantaPoringHat, name:"Santa Poring Hat", itemCheck:userGoldItem.SantaPoringHat},
      //Garment
      {id:2000, Img:Hood, name:"Hood", itemCheck:userGoldItem.Hood},
      {id:2001, Img:Muffler, name:"Muffler", itemCheck:userGoldItem.Muffler},
      {id:2002, Img:Manteau, name:"Manteau", itemCheck:userGoldItem.Manteau},
      {id:2003, Img:FalconMuffler, name:"Falcon Muffler", itemCheck:userGoldItem.FalconMuffler},
      {id:2004, Img:ValisManteau, name:"Vali`s Manteau", itemCheck:userGoldItem.ValisManteau},
      {id:2005, Img:ValkyrianManteau, name:"Valkyrian Manteau", itemCheck:userGoldItem.ValkyrianManteau},
      {id:2006, Img:WoolScarf, name:"Wool Scarf", itemCheck:userGoldItem.WoolScarf},
      {id:2007, Img:FallenAngelWing, name:"Fallen Angel Wing", itemCheck:userGoldItem.FallenAngelWing},
      {id:2008, Img:CloakofGray, name:"Cloak of Gray", itemCheck:userGoldItem.CloakofGray},
      {id:2009, Img:ElementalCape, name:"Elemental Cape", itemCheck:userGoldItem.ElementalCape},
      {id:2010, Img:Asprika, name:"Asprika", itemCheck:userGoldItem.Asprika},
      //FootGear
      {id:3000, Img:Sandals, name:"Sandals", itemCheck:userGoldItem.Sandals},
      {id:3001, Img:Shoes, name:"Shoes", itemCheck:userGoldItem.Shoes},
      {id:3002, Img:Boots, name:"Boots", itemCheck:userGoldItem.Boots},
      {id:3003, Img:Greaves, name:"Greaves", itemCheck:userGoldItem.Greaves},
      {id:3004, Img:BunnySlipper, name:"Bunny Slipper", itemCheck:userGoldItem.BunnySlipper},
      {id:3005, Img:TidalShoes, name:"Tidal Shoes", itemCheck:userGoldItem.TidalShoes},
      {id:3006, Img:SiegeBoots, name:"Siege Boots", itemCheck:userGoldItem.SiegeBoots},
      {id:3007, Img:SiegeGreaves, name:"Siege Greaves", itemCheck:userGoldItem.SiegeGreaves},
      {id:3008, Img:VidarsBoots, name:"Vidars Boots", itemCheck:userGoldItem.VidarsBoots},
      {id:3009, Img:VitalTreeShoes, name:"Vital Tree Shoes", itemCheck:userGoldItem.VitalTreeShoes},
      {id:3010, Img:VariantShoes, name:"Variant Shoes", itemCheck:userGoldItem.VariantShoes},
      {id:3011, Img:Sleipnir, name:"Sleipnir", itemCheck:userGoldItem.Sleipnir},
      //Accessory
      {id:4000, Img: Clip, name: "Clip", Item: userGoldItem.Clip},
      {id:4001, Img: Rosary, name: "Rosary", Item: userGoldItem.Rosary},
      {id:4002, Img: VesperCore02, name: "Vesper Core 02", Item: userGoldItem.VesperCore02},
      {id:4003, Img: BradiumEarring, name: "Bradium Earring", Item: userGoldItem.BradiumEarring},
      {id:4004, Img: GloriousRing, name: "Glorious Ring", Item: userGoldItem.GloriousRing},
      {id:4005, Img: SprintRing, name: "Sprint Ring", Item: userGoldItem.SprintRing},
      {id:4006, Img: DiabolusRing, name: "Diabolus Ring", Item: userGoldItem.DiabolusRing},
      {id:4007, Img: MedalofHonor, name: "Medal of Honor", Item: userGoldItem.MedalofHonor},
      {id:4008, Img: BakonawaAgimatTattoo, name: "Bakonawa Agimat Tattoo", Item: userGoldItem.BakonawaAgimatTattoo},
      {id:4009, Img: Brisingamen, name: "Brisingamen", Item: userGoldItem.Brisingamen},
      {id:4010, Img: Megingjard, name: "Megingjard", Item: userGoldItem.Megingjard},
    ]
    let EtcBox = [
      {id:1000, Img:Jellopy, name:"Jellopy", itemCheck:userGoldItem.Jellopy},
      {id:1001, Img:EmptyBottle, name:"EmptyBottle", itemCheck:userGoldItem.EmptyBottle},
      {id:1002, Img:StickyMucus, name:"StickyMucus", itemCheck:userGoldItem.StickyMucus},
      {id:1003, Img:Clover, name:"Clover", itemCheck:userGoldItem.Clover},
      {id:1004, Img:Feather, name:"Feather", itemCheck:userGoldItem.Feather},

      {id:1005, Img:GrasshoppersLeg, name:"Grasshopper`s Leg", itemCheck:userGoldItem.GrasshoppersLeg},
      {id:1006, Img:SnailsShell, name:"Snail`s Shell", itemCheck:userGoldItem.SnailsShell},
      {id:1007, Img:Shell, name:"Shell", itemCheck:userGoldItem.Shell},
      {id:1008, Img:Garlet, name:"Garlet", itemCheck:userGoldItem.Garlet},
      {id:1009, Img:Emperium, name:"Emperium", itemCheck:userGoldItem.Emperium},
      {id:1010, Img:Fabric, name:"Fabric", itemCheck:userGoldItem.Fabric},
      {id:1011, Img:FourLeafClover, name:"FourLeafClover", itemCheck:userGoldItem.FourLeafClover},
      {id:1012, Img:GlassBead, name:"GlassBead", itemCheck:userGoldItem.GlassBead},
      {id:1013, Img:Opal, name:"Opal", itemCheck:userGoldItem.Opal},
      {id:1014, Img:DecayedNail, name:"Decayed Nail", itemCheck:userGoldItem.DecayedNail},
      {id:1015, Img:SkelBone, name:"Skel-Bone", itemCheck:userGoldItem.SkelBone},
      {id:1016, Img:Daenggie, name:"Daenggie", itemCheck:userGoldItem.Daenggie},
      {id:1017, Img:ShortDaenggie, name:"Short Daenggie", itemCheck:userGoldItem.ShortDaenggie},
      {id:1018, Img:OldPortrait, name:"Old Portrait", itemCheck:userGoldItem.OldPortrait},
      {id:1019, Img:BlackHair, name:"Black Hair", itemCheck:userGoldItem.BlackHair},
      {id:1020, Img:AuthoritativeBadge, name:"Authoritative Badge", itemCheck:userGoldItem.AuthoritativeBadge},
      {id:1021, Img:NineTails, name:"Nine Tails", itemCheck:userGoldItem.NineTails},
      {id:1022, Img:PoisonSporeItem, name:"Poison Spore", itemCheck:userGoldItem.PoisonSpore},
      {id:1023, Img:MushroomSpore, name:"Mushroom Spore", itemCheck:userGoldItem.MushroomSpore},
      {id:1024, Img:Karvodailnirol, name:"Karvodailnirol", itemCheck:userGoldItem.Karvodailnirol},
      {id:1025, Img:JackPumpkin, name:"Jack Pumpkin", itemCheck:userGoldItem.JackPumpkin},
      {id:1026, Img:Zargon, name:"Zargon", itemCheck:userGoldItem.Zargon},
      {id:1027, Img:HorrendousMouth, name:"Horrendous Mouth", itemCheck:userGoldItem.HorrendousMouth},
      {id:1028, Img:Memento, name:"Memento", itemCheck:userGoldItem.Memento},
      {id:1029, Img:GoldenHair, name:"Golden Hair", itemCheck:userGoldItem.GoldenHair},
      {id:1030, Img:RedGemstone, name:"Red Gemstone", itemCheck:userGoldItem.RedGemstone},
      {id:1031, Img:CursedRuby, name:"Cursed Ruby", itemCheck:userGoldItem.CursedRuby},
      {id:1032, Img:Diamond, name:"Diamond", itemCheck:userGoldItem.Diamond},
      {id:1033, Img:EyeOfHellion, name:"Eye Of Hellion", itemCheck:userGoldItem.EyeOfHellion},
      {id:1034, Img:Gold, name:"Gold", itemCheck:userGoldItem.Gold},
      {id:1035, Img:Amethyst, name:"Amethyst", itemCheck:userGoldItem.Amethyst},
      {id:1036, Img:Tongue, name:"Tongue", itemCheck:userGoldItem.Tongue},
      {id:1037, Img:AntJaw, name:"AntJaw", itemCheck:userGoldItem.AntJaw},
      {id:1038, Img:MysticFrozen, name:"Mystic Frozen", itemCheck:userGoldItem.MysticFrozen},
      {id:1039, Img:Aquamarine, name:"Aquamarine", itemCheck:userGoldItem.Aquamarine},
      
      

      {id:91000, Img:PoringIslandMap, name:"PoringIsland Map", itemCheck:userGoldItem.PoringIslandMap},
      {id:91001, Img:PayonCaveMap, name:"PayonCave Map", itemCheck:userGoldItem.PayonCaveMap},
      {id:91002, Img:GeffenDungeonMap, name:"GeffenDungeon Map", itemCheck:userGoldItem.GeffenDungeonMap},
      {id:100001, Img:SpiritOfBoss, name:"Spirit Of Eclipse", itemCheck:userGoldItem.SpiritOfEclipse},
      {id:100002, Img:SpiritOfBoss, name:"Spirit Of Wolyafa", itemCheck:userGoldItem.SpiritOfWolyafa},
      {id:100003, Img:SpiritOfBoss, name:"Spirit Of Doppelganger", itemCheck:userGoldItem.SpiritOfDoppelganger}
    ]
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});

    const dispatch = useDispatch();
    return(
      <div className="AltanItemMap">
        <h2 className="altanItemTitle">Inventory</h2>
        <button className={screenControlRoom.ItemChoice ? "ItemSelectionButton ItemSelctionButtonBeingSelect" : "ItemSelectionButton"} onClick={() => dispatch(GotoItemChoiceFn())}>Item</button>
        <button className={screenControlRoom.EquipChoice ? "ItemSelectionButton ItemSelctionButtonBeingSelect" : "ItemSelectionButton"} onClick={() => dispatch(GotoEquipChoiceFn())}>Equip</button>
        <button className={screenControlRoom.ETCChoice ? "ItemSelectionButton ItemSelctionButtonBeingSelect" : "ItemSelectionButton"} onClick={() => dispatch(GotoETCChoiceFn())}>Etc</button>
        {screenControlRoom.ItemChoice ?
          <div className="itemBoxDisplay">
              {ItemBox.map(Item => {
                return( 
                  <span key={Item.id}>
                    {Item.itemCheck >= 1 ? <button className="altanItemButton altanItemButtonFix" onClick={() => dispatch((Item.useItem))}>
                      <div className="adjImgCenterBox">
                        <p className="adjImgCenter">{Item.itemCheck}x <img src={Item.Img} alt={Item.name} /> {Item.name}</p>
                      </div>
                      </button> : null}
                  </span>
                )})}
              {ItemSpecialBox.map(Item => {
                return( 
                  <span key={Item.id}>
                    {/* if item use in specific spot, unlock result */}
                    {Item.itemCheck >= 1 ? <button className="altanItemButton altanItemButtonFix" onClick={
                      Item.condit1 ? () => {dispatch((Item.useItem)); dispatch((Item.result1));} : 
                      Item.condit2 === "PayonCave1FPath1" ? () => {dispatch((Item.useItem)); dispatch((Item.result2));} : 
                      Item.condit3 ? () => {dispatch((Item.useItem)); dispatch((Item.result3));} : 
                      Item.condit4 === "GeffenDungeon3FPath5Hidden" ? () => {dispatch((Item.useItem)); dispatch((Item.result4));} :
                      () => dispatch((Item.useItem))}>
                      <div className="adjImgCenterBox">
                        <p className="adjImgCenter">{Item.itemCheck}x <img src={Item.Img} alt={Item.name} /> {Item.name}</p>
                      </div>
                      </button> : null}
                  </span>
                )})}
            {/* {userGoldItem.RedPotion >= 1 ? <button onClick={() => dispatch(UseRedPotionFn())}><img src={RedPotion} alt="RedPotion" /> RedPotion x{userGoldItem.RedPotion}</button> : null}
            {userGoldItem.YellowPotion >= 1 ? <button onClick={() => dispatch(UseYellowPotionFn())}><img src={YellowPotion} alt="YellowPotion" /> YellowPotion x{userGoldItem.YellowPotion}</button> : null } */}
          </div>: null }
        {screenControlRoom.EquipChoice ?
          <div className="equipBoxDisplay">
            {EquipBox.map(Equip => {
                return( 
                  <span key={Equip.id}>
                    {Equip.itemCheck >= 1 ? 
                    <button className="equipDisplayList">
                      <div className="adjImgCenterBoxEquip">
                        <p className="adjImgCenterEquip">{Equip.itemCheck}x <img src={Equip.Img} alt={Equip.name} /> {Equip.name}</p> 
                      </div>
                    </button>: null}
                  </span>
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
          <div className="etcBoxDisplay">
              {EtcBox.map(Etc => {
                return( 
                  <span key={Etc.id}>
                    {Etc.itemCheck >= 1 ? 
                      <button className="equipDisplayList">
                        <div className="adjImgCenterBoxEquip">
                          <p className="adjImgCenterEquip">{Etc.itemCheck}x <img src={Etc.Img} alt={Etc.name} />{Etc.name}</p>
                        </div>
                      </button> : null}
                  </span>
                )})}
          </div> : null }
        <div className="itemBackPosition">
          <button className="altanItemButton itemBackButtonPosition" onClick={() =>{dispatch(GotoAltanItemFn());}}>back</button>
        </div>
      </div>
    );
}

export default StartMenu;