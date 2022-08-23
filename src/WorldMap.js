import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn, GotoPoringIslandFn, GotoGeffenFn , GotoPayonCave1FFn, GotoChallengeTowerFn} from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn } from './actions';
import { BattleLoadingScreenFn , GotoBattlePoringIslandMapFn } from './actions'
import { cutsceneSixFn } from './actions'
import BattlePoringIslandMap from './BattlePoringIslandMap'
import Prontera from './Prontera'
import PronteraCastle from './PronteraCastle'
import PoringIsland from './PoringIsland'
import Geffen from './Geffen'
import GeffenDungeon1F from './GeffenDungeon1F'
import GeffenDungeon3F from './GeffenDungeon3F'
import PayonCave1F from './PayonCave1F'
import ChallengeTower from './ChallengeTower'
import StoryLineTwo from './StoryLineTwo'
import StoryLineThree from './StoryLineThree'
import StoryLineFour from './StoryLineFour'
import StoryLineFive from './StoryLineFive'
import StoryLineSix from './StoryLineSix'
import StoryLineSeven from './StoryLineSeven'
import StoryLineEnd from './StoryLineEnd'
import AltanEquipment from './AltanEquipment'
import AltanStats from './AltanStats'
import AltanItem from './AltanItem'
import AltanQuest from './AltanQuest'
import './css/storyMainMap.css'
import $ from 'jquery'

// EQUIP ACTION
import {ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn, ReturnHeadGearEquipmentChoiceFn, ReturnGarmentEquipmentChoiceFn, ReturnFootGearEquipmentChoiceFn} from './actions'

// EQUIP ATTRI
import {BonusEquipPointsFn} from './actions'

// WEAPON IMAGE
import Katana from './img/Equipment/Weapon/Katana.gif'
import BastardSword from './img/Equipment/Weapon/BastardSword.gif'
import GaiaSword from './img/Equipment/Weapon/GaiaSword.gif'
import TwinEdgeofNaghtSieger from './img/Equipment/Weapon/TwinEdgeofNaghtSieger.gif'
import VioletFear from './img/Equipment/Weapon/VioletFear.gif'
// ARMOR IMAGE
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

let STRBufferWeapon = 0;
let AGIBufferWeapon = 0;
let VITBufferWeapon = 0;
let INTBufferWeapon = 0;
let DEXBufferWeapon = 0;
let LUKBufferWeapon = 0;

let STRBufferHeadGear = 0;
let AGIBufferHeadGear = 0;
let VITBufferHeadGear = 0;
let INTBufferHeadGear = 0;
let DEXBufferHeadGear = 0;
let LUKBufferHeadGear = 0;

let STRBufferArmor = 0;
let AGIBufferArmor = 0;
let VITBufferArmor = 0;
let INTBufferArmor = 0;
let DEXBufferArmor = 0;
let LUKBufferArmor = 0;

let STRBufferGarment = 0;
let AGIBufferGarment = 0;
let VITBufferGarment = 0;
let INTBufferGarment = 0;
let DEXBufferGarment = 0;
let LUKBufferGarment = 0;

let STRBufferFootGear = 0;
let AGIBufferFootGear = 0;
let VITBufferFootGear = 0;
let INTBufferFootGear = 0;
let DEXBufferFootGear = 0;
let LUKBufferFootGear = 0;

let listResult = document.getElementsByClassName('storyChat')[0];

function StartMenu(){

    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGoldItem = useSelector(state => state.userGoldItem)
   
    const dispatch = useDispatch();
    let WeaponGearBox = [
      {id:1000, num: 1, EquipItem:ReturnWeaponEquipmentChoiceFn("Empty",null, 1), Img: null, name:"Empty", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:1001, num: userGoldItem.Katana, EquipItem:ReturnWeaponEquipmentChoiceFn("Katana",Katana, 60), Img:Katana, name:"Katana", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:1002, num: userGoldItem.BastardSword, EquipItem:ReturnWeaponEquipmentChoiceFn("Bastard Sword",BastardSword, 115), Img:BastardSword, name:"Bastard Sword", BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:1003, num: userGoldItem.GaiaSword, EquipItem:ReturnWeaponEquipmentChoiceFn("Gaia Sword",GaiaSword, 140), Img:GaiaSword, name:"Gaia Sword", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:1004, num: userGoldItem.TwinEdgeofNaghtSieger, EquipItem:ReturnWeaponEquipmentChoiceFn("Twin Edge of Naght Sieger",TwinEdgeofNaghtSieger, 160), Img:TwinEdgeofNaghtSieger, name:"Twin Edge of Naght Sieger", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:1005, num: userGoldItem.VioletFear, EquipItem:ReturnWeaponEquipmentChoiceFn("Violet Fear",VioletFear, 275), Img:VioletFear, name:"Violet Fear", 
      BonusSTR:7, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0}
    ]
    let HeadGearBox = [
      {id:2000, num: 1, EquipItem:ReturnHeadGearEquipmentChoiceFn(null, null, 0), Img:null, name:"Empty", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:2002, num: userGoldItem.TeddybearHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Teddybear Hat", TeddybearHat, 20), Img:TeddybearHat, name:"Teddybear Hat", 
      BonusSTR:3, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:2003, num: userGoldItem.Crown, EquipItem:ReturnHeadGearEquipmentChoiceFn("Crown", Crown, 20), Img:Crown, name:"Crown", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:20, BonusDEX:0, BonusLUK:0},
      {id:2004, num: userGoldItem.Helm, EquipItem:ReturnHeadGearEquipmentChoiceFn("Helm", Helm, 20), Img:Helm, name:"Helm", 
      BonusSTR:0, BonusAGI:0, BonusVIT:5, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:2005, num: userGoldItem.PandaHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Panda Hat", PandaHat, 20), Img:PandaHat, name:"Panda Hat", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:2006, num: userGoldItem.ChefHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Chef Hat", ChefHat, 20), Img:ChefHat, name:"Chef Hat", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:2007, num: userGoldItem.SantaPoringHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Santa Poring Hat", SantaPoringHat, 20), Img:SantaPoringHat, name:"Santa Poring Hat", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:2008, num: userGoldItem.LordKahosHorn, EquipItem:ReturnHeadGearEquipmentChoiceFn("Lord Kaho`s Horn", LordKahosHorn, 20), Img:LordKahosHorn, name:"Lord Kaho`s Horn", 
      BonusSTR:10, BonusAGI:10, BonusVIT:10, BonusINT:10, BonusDEX:10, BonusLUK:10},
    ]
    let ArmorGearBox = [
      {id:3000, num: 1, EquipItem:ReturnArmorEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:3001, num:userGoldItem.CottonShirt, EquipItem:ReturnArmorEquipmentChoiceFn("Cotton Shirt",CottonShirt, 10), Img:CottonShirt, name:"Cotton Shirt", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:3002, num:userGoldItem.AdventureSuit, EquipItem:ReturnArmorEquipmentChoiceFn("Adventure Suit",AdventureSuit, 30), Img:AdventureSuit, name:"Adventure Suit", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:3003, num:userGoldItem.WoodenMail, EquipItem:ReturnArmorEquipmentChoiceFn("Wooden Mail",WoodenMail, 40), Img:WoodenMail, name:"Wooden Mail", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:3004, num:userGoldItem.Coat, EquipItem:ReturnArmorEquipmentChoiceFn("Coat",Coat, 50), Img:Coat, name:"Coat", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:3005, num:userGoldItem.PaddedArmor, EquipItem:ReturnArmorEquipmentChoiceFn("Padded Armor",PaddedArmor, 70), Img:PaddedArmor, name:"Padded Armor", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:3006, num:userGoldItem.ChainMail, EquipItem:ReturnArmorEquipmentChoiceFn("Chain Mail",ChainMail, 80), Img:ChainMail, name:"Chain Mail", 
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:3007, num:userGoldItem.FullPlate, EquipItem:ReturnArmorEquipmentChoiceFn("Full Plate",FullPlate, 90), Img:FullPlate, name:"Full Plate", 
      BonusSTR:4, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
    ]
    let GarmentBox = [
      {id:4000, num: 1, EquipItem:ReturnGarmentEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4001, num: userGoldItem.Hood, EquipItem:ReturnGarmentEquipmentChoiceFn("Hood",Hood, 10), Img: Hood, name:"Hood",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4002, num: userGoldItem.Muffler, EquipItem:ReturnGarmentEquipmentChoiceFn("Muffler",Muffler, 20), Img: Muffler, name:"Muffler",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4003, num: userGoldItem.Manteau, EquipItem:ReturnGarmentEquipmentChoiceFn("Manteau",Manteau, 30), Img: Manteau, name:"Manteau",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4004, num: userGoldItem.FalconMuffler, EquipItem:ReturnGarmentEquipmentChoiceFn("FalconMuffler",FalconMuffler, 40), Img: FalconMuffler, name:"Falcon Muffler",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4005, num: userGoldItem.ValisManteau, EquipItem:ReturnGarmentEquipmentChoiceFn("Vali`s Manteau",ValisManteau, 50), Img: ValisManteau, name:"Vali`s Manteau",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4006, num: userGoldItem.ValkyrianManteau, EquipItem:ReturnGarmentEquipmentChoiceFn("Valkyrian Manteau",ValkyrianManteau, 60), Img: ValkyrianManteau, name:"Valkyrian Manteau",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4007, num: userGoldItem.WoolScarf, EquipItem:ReturnGarmentEquipmentChoiceFn("Wool Scarf",WoolScarf, 70), Img: WoolScarf, name:"Wool Scarf",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4008, num: userGoldItem.FallenAngelWing, EquipItem:ReturnGarmentEquipmentChoiceFn("Fallen Angel Wing",FallenAngelWing, 80), Img: FallenAngelWing, name:"Fallen Ange lWing",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4009, num: userGoldItem.CloakofGray, EquipItem:ReturnGarmentEquipmentChoiceFn("Cloak of Gray",CloakofGray, 90), Img: CloakofGray, name:"Cloak of Gray",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4010, num: userGoldItem.ElementalCape, EquipItem:ReturnGarmentEquipmentChoiceFn("Elemental Cape",ElementalCape, 100), Img: ElementalCape, name:"Elemental Cape",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:4011, num: userGoldItem.Asprika, EquipItem:ReturnGarmentEquipmentChoiceFn("Asprika",Asprika, 110), Img: Asprika, name:"Asprika",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0}
    ]

    let FootGearBox = [
      {id:5000, num: 1, EquipItem:ReturnFootGearEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5001, num: userGoldItem.Sandals, EquipItem:ReturnFootGearEquipmentChoiceFn("Sandals",Sandals, 10), Img: Sandals, name:"Sandals",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5002, num: userGoldItem.Shoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Shoes",Shoes, 20), Img: Shoes, name:"Shoes",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5003, num: userGoldItem.Boots, EquipItem:ReturnFootGearEquipmentChoiceFn("Boots",Boots, 30), Img: Boots, name:"Boots",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5004, num: userGoldItem.Greaves, EquipItem:ReturnFootGearEquipmentChoiceFn("Greaves",Greaves, 35), Img: Greaves, name:"Greaves",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5005, num: userGoldItem.BunnySlipper, EquipItem:ReturnFootGearEquipmentChoiceFn("Bunny Slipper",BunnySlipper, 40), Img: BunnySlipper, name:"BunnySlipper",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5006, num: userGoldItem.TidalShoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Tidal Shoes",TidalShoes, 50), Img: TidalShoes, name:"TidalShoes",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5007, num: userGoldItem.SiegeBoots, EquipItem:ReturnFootGearEquipmentChoiceFn("Siege Boots",SiegeBoots, 60), Img: SiegeBoots, name:"SiegeBoots",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5008, num: userGoldItem.SiegeGreaves, EquipItem:ReturnFootGearEquipmentChoiceFn("Siege Greaves",SiegeGreaves, 70), Img: SiegeGreaves, name:"SiegeGreaves",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5009, num: userGoldItem.VidarsBoots, EquipItem:ReturnFootGearEquipmentChoiceFn("Vidar`s Boots",VidarsBoots, 80), Img: VidarsBoots, name:"VidarsBoots",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5010, num: userGoldItem.VitalTreeShoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Vital Tree Shoes",VitalTreeShoes, 90), Img: VitalTreeShoes, name:"VitalTreeShoes",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5011, num: userGoldItem.VariantShoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Variant Shoes",VariantShoes, 100), Img: VariantShoes, name:"VariantShoes",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
      {id:5012, num: userGoldItem.Sleipnir, EquipItem:ReturnFootGearEquipmentChoiceFn("Sleipnir",Sleipnir, 110), Img: Sleipnir, name:"Sleipnir",
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0},
    ]


    useEffect(() => {
        $('.mapTitle').fadeIn(600);
        $('.mapTitle').delay(2400).fadeOut(600);
    }, [screenControlRoom])
    
    //LEVEL FUNCTION
    useEffect(() => {
      //MAX Lv99
    listResult = document.getElementsByClassName('storyChat')[0];
    listResult.scrollTop = listResult.scrollHeight;
  }, [dispatch, userStats, baseEXPChart]);


    const LoadingScreen0 = () => {
      dispatch(BattleLoadingScreenFn());
      setTimeout(() => dispatch(GotoBattlePoringIslandMapFn("FinalBoss",25)), 1000);
      setTimeout(() => dispatch(BattleLoadingScreenFn()), 1000);
    }
    const HeadGearEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK) => {
        dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferHeadGear, userAttribute.BonusAgi + BonusAGI - AGIBufferHeadGear, userAttribute.BonusVit + BonusVIT - VITBufferHeadGear, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferHeadGear, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferHeadGear, userAttribute.BonusLuk + BonusLUK - LUKBufferHeadGear, BonusSTR - STRBufferHeadGear, BonusAGI - AGIBufferHeadGear, BonusVIT - VITBufferHeadGear, BonusINT - INTBufferHeadGear, BonusDEX - DEXBufferHeadGear, BonusLUK - LUKBufferHeadGear));
        // Note Training = BonusSTR - STRBuffer
        // BonusSTRPointFn = Update Stats
        STRBufferHeadGear = BonusSTR;
        AGIBufferHeadGear = BonusAGI;
        VITBufferHeadGear = BonusVIT;
        INTBufferHeadGear = BonusINT;
        DEXBufferHeadGear = BonusDEX;
        LUKBufferHeadGear = BonusLUK;
    }

    const WeaponEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK) => {
      dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferWeapon, userAttribute.BonusAgi + BonusAGI - AGIBufferWeapon, userAttribute.BonusVit + BonusVIT - VITBufferWeapon, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferWeapon, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferWeapon, userAttribute.BonusLuk + BonusLUK - LUKBufferWeapon, BonusSTR - STRBufferWeapon, BonusAGI - AGIBufferWeapon, BonusVIT - VITBufferWeapon, BonusINT - INTBufferWeapon, BonusDEX - DEXBufferWeapon, BonusLUK - LUKBufferWeapon));
      // Note Training = BonusSTR - STRBuffer
      // BonusSTRPointFn = Update Stats
      STRBufferWeapon = BonusSTR;
      AGIBufferWeapon = BonusAGI;
      VITBufferWeapon = BonusVIT;
      INTBufferWeapon = BonusINT;
      DEXBufferWeapon = BonusDEX;
      LUKBufferWeapon = BonusLUK;
  }

  const ArmorEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK) => {
    dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferArmor, userAttribute.BonusAgi + BonusAGI - AGIBufferArmor, userAttribute.BonusVit + BonusVIT - VITBufferArmor, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferArmor, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferArmor, userAttribute.BonusLuk + BonusLUK - LUKBufferArmor, BonusSTR - STRBufferArmor, BonusAGI - AGIBufferArmor, BonusVIT - VITBufferArmor, BonusINT - INTBufferArmor, BonusDEX - DEXBufferArmor, BonusLUK - LUKBufferArmor));
    // Note Training = BonusSTR - STRBuffer
    // BonusSTRPointFn = Update Stats
    STRBufferArmor = BonusSTR;
    AGIBufferArmor = BonusAGI;
    VITBufferArmor = BonusVIT;
    INTBufferArmor = BonusINT;
    DEXBufferArmor = BonusDEX;
    LUKBufferArmor = BonusLUK;
}

const GarmentEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK) => {
  dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferGarment, userAttribute.BonusAgi + BonusAGI - AGIBufferGarment, userAttribute.BonusVit + BonusVIT - VITBufferGarment, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferGarment, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferGarment, userAttribute.BonusLuk + BonusLUK - LUKBufferGarment, BonusSTR - STRBufferGarment, BonusAGI - AGIBufferGarment, BonusVIT - VITBufferGarment, BonusINT - INTBufferGarment, BonusDEX - DEXBufferGarment, BonusLUK - LUKBufferGarment));
  // Note Training = BonusSTR - STRBuffer
  // BonusSTRPointFn = Update Stats
  STRBufferGarment = BonusSTR;
  AGIBufferGarment = BonusAGI;
  VITBufferGarment = BonusVIT;
  INTBufferGarment = BonusINT;
  DEXBufferGarment = BonusDEX;
  LUKBufferGarment = BonusLUK;
}


const FootGearEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK) => {
  dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferFootGear, userAttribute.BonusAgi + BonusAGI - AGIBufferFootGear, userAttribute.BonusVit + BonusVIT - VITBufferFootGear, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferFootGear, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferFootGear, userAttribute.BonusLuk + BonusLUK - LUKBufferFootGear, BonusSTR - STRBufferFootGear, BonusAGI - AGIBufferFootGear, BonusVIT - VITBufferFootGear, BonusINT - INTBufferFootGear, BonusDEX - DEXBufferFootGear, BonusLUK - LUKBufferFootGear));
  // Note Training = BonusSTR - STRBuffer
  // BonusSTRPointFn = Update Stats
  STRBufferFootGear = BonusSTR;
  AGIBufferFootGear = BonusAGI;
  VITBufferFootGear = BonusVIT;
  INTBufferFootGear = BonusINT;
  DEXBufferFootGear = BonusDEX;
  LUKBufferFootGear = BonusLUK;
}

    return(
      <div className={screenControlRoom.BattleLoadingScreen && Math.random() <= 0.33 ? "loadingScreenBattle" : screenControlRoom.BattleLoadingScreen && Math.random() <= 0.33 ? "loadingScreenBattleTwo" : screenControlRoom.BattleLoadingScreen ? "loadingScreenBattleThree" : null}>
        {
        screenControlRoom.Prontera ? <Prontera ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/>:
        screenControlRoom.PronteraCastle ? <PronteraCastle ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/>:
        screenControlRoom.PoringIsland ? <PoringIsland ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/>:
        screenControlRoom.Geffen ? <Geffen ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/>:
        screenControlRoom.GeffenDungeon1F ? <GeffenDungeon1F ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/> :
        screenControlRoom.GeffenDungeon3F ? <GeffenDungeon3F ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/> :
        screenControlRoom.PayonCave1F ? <PayonCave1F ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute}HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/>:
        screenControlRoom.ChallengeTower ? <ChallengeTower ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute}/>:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap />:
        screenControlRoom.cutsceneTwo ? <StoryLineTwo /> :
        screenControlRoom.cutsceneThree ? <StoryLineThree /> :
        screenControlRoom.cutsceneFour ? <StoryLineFour /> :
        screenControlRoom.cutsceneFive ? <StoryLineFive /> :
        screenControlRoom.cutsceneSix ? <StoryLineSix /> :
        screenControlRoom.cutsceneSeven ? <StoryLineSeven /> :
        screenControlRoom.cutsceneEnd ? <StoryLineEnd /> :
        screenControlRoom.WorldMap ?
        <div className="StoryMapBackground">
          <div className="storyMapScreen">
            {screenControlRoom.AltanEquipment ?
              <div className="ReturnParent">
                <AltanEquipment/>
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>x</button>
              </div>:
            screenControlRoom.AltanStats ? 
              <div className="ReturnParent">
                <AltanStats />
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanStatsFn());}}>x</button>
              </div>:
            screenControlRoom.AltanItem ? 
              <div className="ReturnParent">
                <AltanItem />
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanItemFn());}}>x</button>
              </div>:
            screenControlRoom.AltanQuest ?
              <div className="ReturnParent">
                <AltanQuest /> 
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanQuestFn());}}>x</button>
              </div>:

              <div className="StoryMap">
                <h3 className="mapTitle">World Map</h3>
                {/* click x trigger hover */}
                <button className="ReturnHUDBugFix"></button>
                <button className="Prontera" onClick={() => {dispatch(GotoPronteraFn())}}>Prontera</button>
                <button className="PayonCave" onClick={() => dispatch(GotoPayonCave1FFn())}>{
                      screenControlRoom.PayonCave1FPath1 &&
                      screenControlRoom.PayonCave1FPath2Hidden &&
                      screenControlRoom.PayonCave1FPath3Hidden &&
                      screenControlRoom.PayonCave2FPath1 &&
                      screenControlRoom.PayonCave2FPath2 &&
                      screenControlRoom.PayonCave2FPath3 &&
                      screenControlRoom.PayonCave2FPath4 &&
                      screenControlRoom.PayonCave2FPath5 &&
                      screenControlRoom.PayonCave2FPath6 &&
                      screenControlRoom.PayonCave2FPath7 &&
                      screenControlRoom.PayonCave2FPath8 &&
                      screenControlRoom.PayonCave2FPath9Hidden &&
                      screenControlRoom.PayonCave2FPath10Hidden &&
                      screenControlRoom.PayonCave3FPath1 &&
                      screenControlRoom.PayonCave3FPath2 &&
                      screenControlRoom.PayonCave3FPath3 &&
                      screenControlRoom.PayonCave3FPath4 ? <span>Payon Cave(⭐⭐)</span> : <span>Payon Cave</span>}
                </button>
                <button className="SogratDesertPoringIsland" onClick={() => {dispatch(GotoPoringIslandFn())}}>{
                    screenControlRoom.PoringIslandPath1 &&
                    screenControlRoom.PoringIslandPath2 &&
                    screenControlRoom.PoringIslandPath3 &&
                    screenControlRoom.PoringIslandPath4 &&
                    screenControlRoom.PoringIslandPath5 &&
                    screenControlRoom.PoringIslandPath6 &&
                    screenControlRoom.PoringIslandPath7 &&
                    screenControlRoom.PoringIslandPath8 ? <span>Poring Island(⭐)</span> : <span>Poring Island</span>}
                
                </button>
                <button className="Geffen" onClick={() => {dispatch(GotoGeffenFn())}}>Geffen</button>
                {screenControlRoom.FinalBossPath ?
                <button className="FinalBoss" onClick={
                  screenControlRoom.storyLineSix ? 
                  () => {LoadingScreen0();}:
                  () => {dispatch(cutsceneSixFn());}}>Baphomet Gate💢</button> : null}
                <button className="ChallengeTower" onClick={() => {dispatch(GotoChallengeTowerFn())}}>{
                    screenControlRoom.ChallengeTowerPath1 &&
                    screenControlRoom.ChallengeTowerPath2 &&
                    screenControlRoom.ChallengeTowerPath3 ? <span>RaidTower(⭐⭐⭐⭐)</span> : <span>RaidTower</span>}
                </button>
              </div>
            }               
            <div className="StoryHUD">
              <p className="basicStatsHUD">Basic Info</p>
              <p className="nameStatsHUD destextHUD">Atlan</p>
              <p className="destextHUD classTitle">Knight</p>
                <div className="HUDBox">
                  <p className="hptextHUD">HP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentHealth/userStats.maxHealth)*100} max="100" title={userStats.currentHealth + "/" + userStats.maxHealth}/>
                  <p className="hpPerHUD">{((userStats.currentHealth/userStats.maxHealth)*100).toFixed(0) + "%"}</p>
                </div>
                <div className="HUDBox">
                  <p className="sptextHUD">SP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentSP/userStats.maxSP)*100} max="100" title={userStats.currentSP + "/" + userStats.maxSP}/>
                  <p className="spPerHUD">{((userStats.currentSP/userStats.maxSP)*100).toFixed(0) + "%"}</p>
                </div>

                <div className="leveltextHUD">
                    <p className="destextHUD leveltext">Base Lv. {userStats.Level}</p>
                    {userStats.Level >= 99 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                </div>
                <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <div>
                  <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanEquipmentFn());}}>Equip</button>
                  <button className="altanItems" onClick={() =>{dispatch(GotoAltanItemFn());}}>Items</button>
                  <button className="altanStats" onClick={() => {dispatch(GotoAltanStatsFn());}}>Stats</button>
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanQuestFn());}}>Quest</button>
                </div>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech"></p>
            {/* WEAPONS */}
            {screenControlRoom.WeaponEquipmentChoice ? 
              <div className="textCenter">
                {userGoldItem.Katana >= 1 || userGoldItem.BastardSword >= 1 || userGoldItem.GaiaSword >= 1 || userGoldItem.TwinEdgeofNaghtSieger >= 1 || userGoldItem.VioletFear >= 1 ?
                  <div>
                    <p className="chatDescriptTitle">Weapon Bag</p>
                  {WeaponGearBox.map(Equip => {
                    return(
                      <span key={Equip.id}>
                        {Equip.num >= 1 ? 
                        <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); WeaponEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK);}}>
                          <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                          </div>
                        </button> : null}
                      </span>
                    )
                  })}
                  </div>
                : <p>Empty WeaponGear Storage T^T</p>}
              </div> : null} 
            {/* ARMOR */}
            {screenControlRoom.ArmorEquipmentChoice ?
              <div className="textCenter">
              {userGoldItem.CottonShirt >= 1 || userGoldItem.AdventureSuit >= 1 || userGoldItem.WoodenMail >= 1 || userGoldItem.Coat >= 1 || userGoldItem.PaddedArmor >= 1 || userGoldItem.ChainMail >= 1 || userGoldItem.FullPlate >= 1 ?
                <div>
                  <p className="chatDescriptTitle">Armor Bag</p>
                {ArmorGearBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); ArmorEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty ArmorGear Storage T^T</p>}
              </div> : null}
            {/* HEADGEAR */}
            {screenControlRoom.HeadGearEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Head Gear Bag</p>
              {userGoldItem.LordKahosHorn >= 1 || userGoldItem.TeddybearHat >= 1 || userGoldItem.Crown >= 1 || userGoldItem.Helm >= 1 || userGoldItem.PandaHat >= 1 || userGoldItem.ChefHat >= 1 || userGoldItem.SantaPoringHat >= 1 ?
                <div>
                {HeadGearBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); HeadGearEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty HeadGear Storage T^T</p>}
              </div> : null}
            {/* FOOTGEAR */}
            {screenControlRoom.FootGearEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Foot Gear Bag</p>
              {userGoldItem.Sandals >= 1 || userGoldItem.Shoes >= 1 || userGoldItem.Boots >= 1 || userGoldItem.Greaves >= 1 || userGoldItem.BunnySlipper >= 1 || userGoldItem.TidalShoes >= 1 || userGoldItem.SiegeBoots >= 1 || userGoldItem.SiegeGreaves >= 1 || userGoldItem.VidarsBoots >= 1 || userGoldItem.VitalTreeShoes >= 1 || userGoldItem.VariantShoes >= 1 || userGoldItem.Sleipnir >= 1 ?
                <div>
                {FootGearBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); FootGearEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty FootGear Storage T^T</p>}
              </div> : null}
            {/* GARMENT */}
            {screenControlRoom.GarmentEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Foot Gear Bag</p>
              {userGoldItem.Hood >= 1 || userGoldItem.Muffler  >= 1 || userGoldItem.Manteau >= 1 || userGoldItem.FalconMuffler >= 1 || userGoldItem.ValisManteau >= 1 || userGoldItem.ValkyrianManteau >= 1 || userGoldItem.WoolScarf >= 1 || userGoldItem.FallenAngelWing >= 1 || userGoldItem.CloakofGray >= 1 || userGoldItem.ElementalCape >= 1 || userGoldItem.Asprika >= 1 ?
                <div>
                {GarmentBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); GarmentEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty Garment Storage T^T</p>}
              </div> : null}
          </fieldset>
        </div>
        : null }
      </div>
    );
}

export default StartMenu;