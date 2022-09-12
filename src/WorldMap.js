import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoPronteraFn, GotoPoringIslandFn, GotoGeffenFn , GotoPayonCave1FFn, GotoChallengeTowerFn, userClockDefendFn} from './actions';
import { GotoAltanEquipmentFn, GotoAltanStatsFn , GotoAltanItemFn , GotoAltanQuestFn, GotoAltanSkillsFn } from './actions';
import { BattleLoadingScreenFn , GotoBattlePoringIslandMapFn } from './actions'
import { cutsceneSixFn } from './actions'
//Audio
import { gameTitleOptionScreenFn } from './actions'
//Skills
import { UserSkillFirstAidFn } from './actions'
//Choose Skill Level (ScreenControlRoom)
import {FirstAidTrainingFn, BashTrainingFn, MammoniteTrainingFn, KodokuTrainingFn, MagnumBreakTrainingFn, HeadCrushTrainingFn, QuickenTrainingFn, VitalStrikeTrainingFn, BowlingBashTrainingFn} from './actions'
//UpGrade Skill Level
import {FirstAidSkillLevelFn, BashSkillLevelFn, MammoniteSkillLevelFn, KodokuSkillLevelFn, MagnumBreakSkillLevelFn, HeadCrushSkillLevelFn, QuickenSkillLevelFn, VitalStrikeSkillLevelFn, BowlingBashSkillLevelFn} from './actions'


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
import AltanSkills from './AltanSkills'
import GameOption from './GameOption'
import './css/storyMainMap.css'
import $ from 'jquery'

// EQUIP ACTION
import {ReturnWeaponEquipmentChoiceFn, ReturnArmorEquipmentChoiceFn, ReturnHeadGearEquipmentChoiceFn, ReturnGarmentEquipmentChoiceFn, ReturnFootGearEquipmentChoiceFn, ReturnAccessoryOneEquipmentChoiceFn, ReturnAccessoryTwoEquipmentChoiceFn} from './actions'
// EQUIP ATTRI
import {BonusEquipPointsFn} from './actions'
//WEAPON
import { KatanaFn, BastardSwordFn , GaiaSwordFn , TwinEdgeofNaghtSiegerFn , VioletFearFn } from './actions'
//HEADGEAR
import { LordKahosHornFn , TeddybearHatFn , CrownFn , HelmFn , PandaHatFn , ChefHatFn , SantaPoringHatFn } from './actions'
//ARMOR
import { CottonShirtFn, AdventureSuitFn , WoodenMailFn , CoatFn , PaddedArmorFn, ChainMailFn , FullPlateFn } from './actions'
//FOOTGEAR
import { SandalsFn, ShoesFn, BootsFn, GreavesFn, BunnySlipperFn, TidalShoesFn, SiegeBootsFn, SiegeGreavesFn, VidarsBootsFn, VitalTreeShoesFn, VariantShoesFn, SleipnirFn} from './actions'
//GARMENT
import { HoodFn, MufflerFn, ManteauFn, FalconMufflerFn, ValisManteauFn, ValkyrianManteauFn, WoolScarfFn, FallenAngelWingFn, CloakofGrayFn, ElementalCapeFn, AsprikaFn} from './actions'
//Accessory
import { ClipFn, RosaryFn, VesperCore02Fn, BradiumEarringFn, GloriousRingFn, SprintRingFn, DiabolusRingFn, MedalofHonorFn, BakonawaAgimatTattooFn, BrisingamenFn, MegingjardFn } from './actions'

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
import TeddybearHat from './img/Equipment/HeadGear/TeddybearHat.gif'
import Crown from './img/Equipment/HeadGear/Crown.gif'
import Helm from './img/Equipment/HeadGear/Helm.gif'
import PandaHat from './img/Equipment/HeadGear/PandaHat.gif'
import ChefHat from './img/Equipment/HeadGear/ChefHat.gif'
import SantaPoringHat from './img/Equipment/HeadGear/SantaPoringHat.gif'
import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'
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

//SKILLS
import skillFirstAid from './img/Skill/nv_firstaid.gif'
import skillKodoku from './img/Skill/pr_kodoku.gif'
import skillBash from './img/Skill/sm_bash.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillHeadCrush from './img/Skill/lk_headcrush.gif'
import skillMammonite from './img/Skill/mc_mammonite.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
import skillVitalStrike from './img/Skill/lk_vitalstrike.gif'
import skillBowlingBash from './img/Skill/sm_blowingbash.gif'
import skillOut from './img/Skill/skill_out.gif'
import skillDown from './img/Skill/skill_down.gif'

import audioThemeOfProntera from './audio/108ThemeOfProntera.mp3'

let STRBufferWeapon = 0;
let AGIBufferWeapon = 0;
let VITBufferWeapon = 0;
let INTBufferWeapon = 0;
let DEXBufferWeapon = 0;
let LUKBufferWeapon = 0;
let BonusattackWeapon = 0;
let BonusspeedWeapon = 0;
let BonusdodgeRateWeapon = 0;
let BonusdefenceWeapon = 0;
let BonusdefencebufferWeapon = 0;
let BonushitRateWeapon = 0;
let BonuscritRateWeapon = 0;
let BonusHealthWeapon = 0;
let BonusSPWeapon = 0;


let STRBufferHeadGear = 0;
let AGIBufferHeadGear = 0;
let VITBufferHeadGear = 0;
let INTBufferHeadGear = 0;
let DEXBufferHeadGear = 0;
let LUKBufferHeadGear = 0;
let BonusattackHeadGear = 0;
let BonusspeedHeadGear = 0;
let BonusdodgeRateHeadGear = 0;
let BonusdefenceHeadGear = 0;
let BonusdefencebufferHeadGear = 0;
let BonushitRateHeadGear = 0;
let BonuscritRateHeadGear = 0;
let BonusHealthHeadGear = 0;
let BonusSPHeadGear = 0;

let STRBufferArmor = 0;
let AGIBufferArmor = 0;
let VITBufferArmor = 0;
let INTBufferArmor = 0;
let DEXBufferArmor = 0;
let LUKBufferArmor = 0;
let BonusattackArmor = 0;
let BonusspeedArmor = 0;
let BonusdodgeRateArmor = 0;
let BonusdefenceArmor = 0;
let BonusdefencebufferArmor = 0;
let BonushitRateArmor = 0;
let BonuscritRateArmor = 0;
let BonusHealthArmor = 0;
let BonusSPArmor = 0;

let STRBufferGarment = 0;
let AGIBufferGarment = 0;
let VITBufferGarment = 0;
let INTBufferGarment = 0;
let DEXBufferGarment = 0;
let LUKBufferGarment = 0;
let BonusattackGarment = 0;
let BonusspeedGarment = 0;
let BonusdodgeRateGarment = 0;
let BonusdefenceGarment = 0;
let BonusdefencebufferGarment = 0;
let BonushitRateGarment = 0;
let BonuscritRateGarment = 0;
let BonusHealthGarment = 0;
let BonusSPGarment = 0;

let STRBufferFootGear = 0;
let AGIBufferFootGear = 0;
let VITBufferFootGear = 0;
let INTBufferFootGear = 0;
let DEXBufferFootGear = 0;
let LUKBufferFootGear = 0;
let BonusattackFootGear = 0;
let BonusspeedFootGear = 0;
let BonusdodgeRateFootGear = 0;
let BonusdefenceFootGear = 0;
let BonusdefencebufferFootGear = 0;
let BonushitRateFootGear = 0;
let BonuscritRateFootGear = 0;
let BonusHealthFootGear = 0;
let BonusSPFootGear = 0;

let STRBufferAccessoryOne = 0;
let AGIBufferAccessoryOne = 0;
let VITBufferAccessoryOne = 0;
let INTBufferAccessoryOne = 0;
let DEXBufferAccessoryOne = 0;
let LUKBufferAccessoryOne = 0;
let BonusattackAccessoryOne = 0;
let BonusspeedAccessoryOne = 0;
let BonusdodgeRateAccessoryOne = 0;
let BonusdefenceAccessoryOne = 0;
let BonusdefencebufferAccessoryOne = 0;
let BonushitRateAccessoryOne = 0;
let BonuscritRateAccessoryOne = 0;
let BonusHealthAccessoryOne = 0;
let BonusSPAccessoryOne = 0;

let STRBufferAccessoryTwo = 0;
let AGIBufferAccessoryTwo = 0;
let VITBufferAccessoryTwo = 0;
let INTBufferAccessoryTwo = 0;
let DEXBufferAccessoryTwo = 0;
let LUKBufferAccessoryTwo = 0;
let BonusattackAccessoryTwo = 0;
let BonusspeedAccessoryTwo = 0;
let BonusdodgeRateAccessoryTwo = 0;
let BonusdefenceAccessoryTwo = 0;
let BonusdefencebufferAccessoryTwo = 0;
let BonushitRateAccessoryTwo = 0;
let BonuscritRateAccessoryTwo = 0;
let BonusHealthAccessoryTwo = 0;
let BonusSPAccessoryTwo = 0;

//Kanata
let CurrentWeapon = 0;  
//Armor
let CurrentArmor = 0;
//HeadGear, Garment, FootGear
let CurrentHeadGear = 0;
let CurrentGarment = 0;
let CurrentFootGear = 0;
let CurrentAccessoryOne = 0;
let CurrentAccessoryTwo = 0;

let listResult = document.getElementsByClassName('storyChat')[0];

const audioBGM = new Audio(audioThemeOfProntera);

function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const equipmentAllStats = useSelector(state => state.equipmentAllStats)
    const skillCapChart = useSelector(state => state.skillCapChart)
   
    const dispatch = useDispatch();

    let SkillsLevelingBox = [
      {id:20000, select:screenControlRoom.FirstAidTraining, Img:skillFirstAid, name:"First Aid", skillLevelCheck:skillCapChart.FirstAidSkillLevel, selection:FirstAidTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:FirstAidSkillLevelFn(), title:`SP:${skillCapChart.SPFirstAid} - Heal ${skillCapChart.FirstAidFlatHeal} of health`, Activate:UserSkillFirstAidFn(skillCapChart.SPFirstAid, skillCapChart.FirstAidFlatHeal)},

      {id:20001, select:screenControlRoom.BashTraining, Img:skillBash, name:"Bash", skillLevelCheck:skillCapChart.BashSkillLevel, selection:BashTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:BashSkillLevelFn(), 
      title:`SP:${skillCapChart.SPBash} - Strike the target with a strong blow ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage)} damage to target, it has a ${skillCapChart.BashStunChance*100}% chance of leaving the target stunned.`},

      {id:20002, select:screenControlRoom.MammoniteTraining, Img:skillMammonite, name:"Mammonite", skillLevelCheck:skillCapChart.MammoniteSkillLevel, selection:MammoniteTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:MammoniteSkillLevelFn(), title:`SP:${skillCapChart.SPMammonite} - Strike the target with a less lethal blow ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage)} damage to target, steal zeny from ${skillCapChart.MammoniteGain*100}% of the damage.`},

      {id:20003, select:screenControlRoom.KodokuTraining, Img:skillKodoku, name:"Kodoku", skillLevelCheck:skillCapChart.KodokuSkillLevel, selection:KodokuTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:KodokuSkillLevelFn(), title:`SP:${skillCapChart.SPKodoku} - inflict poison status on target for ${skillCapChart.KodokuPoisonTurn} turns. Poison target lose ${skillCapChart.KodokuPoisonPercent*100}% maximum health each turn.`},

      {id:20004, select:screenControlRoom.MagnumBreakTraining, Img:skillMagnum, name:"Magnum Break", skillLevelCheck:skillCapChart.MagnumBreakSkillLevel, selection:MagnumBreakTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:MagnumBreakSkillLevelFn(), title:`SP:${skillCapChart.SPMagnumBreak} - Instant fire property skill ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage)} damage to target, increase accuracy by ${Math.floor((skillCapChart.MagnumBreakAccuracyPercent - 1)*100)}% and apply additional ${Math.floor((skillCapChart.MagnumBreakFireAdditionalDamage - 1)*100)}% Fire attack for ${skillCapChart.MagnumBreakFireWeaponTurn} Turns`},

      {id:20005, select:screenControlRoom.HeadCrushTraining, Img:skillHeadCrush, name:"Head Crush", skillLevelCheck:skillCapChart.HeadCrushSkillLevel, selection:HeadCrushTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:HeadCrushSkillLevelFn(), title:`SP:${skillCapChart.SPHeadCrush} -	Strong hit against the target that has a chance to cause bleeding effect. Bleeding target lose ${skillCapChart.HeadCrushBleedingPercent*100}% maximum health each turn.`},
      {id:20006, select:screenControlRoom.QuickenTraining, Img:skillQuicken, name:"Quicken", skillLevelCheck:skillCapChart.QuickenSkillLevel, selection:QuickenTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:QuickenSkillLevelFn(), title:`SP:${skillCapChart.SPQuicken} - Increase speed by ${skillCapChart.QuickenSpeed} for ${skillCapChart.QuickenSpeedTurn} turns`},
      {id:20007, select:screenControlRoom.VitalStrikeTraining, Img:skillVitalStrike, name:"Vital Strike", skillLevelCheck:skillCapChart.VitalStrikeSkillLevel, selection:VitalStrikeTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:VitalStrikeSkillLevelFn(), title:`SP:${skillCapChart.SPVitalStrike} - Strikes the target with a painful blow ${Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.int)*8)} damage to target, decrease target defence ${skillCapChart.VitalStrikeDefenceBreakDown*100}% for 8 turns`},
      {id:20008, select:screenControlRoom.BowlingBashTraining, Img:skillBowlingBash, name:"BowlingBash", skillLevelCheck:skillCapChart.BowlingBashSkillLevel, selection:BowlingBashTrainingFn(), JobPoints:skillCapChart.JobPoints, Upgrade:BowlingBashSkillLevelFn(), title:`SP:${skillCapChart.SPBowlingBash} - Charge to target with a fatal blow ${Math.floor((userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage)*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage)} damage to target, target reduce movement speed by ${skillCapChart.BowlingBashSlowPercent*100}%`},
    ]

    let WeaponGearBox = [
      {id:1000, num: 1, EquipItem:ReturnWeaponEquipmentChoiceFn("Empty",null, 1), Img: null, name:"Empty", Equip: userClockDefendFn(), UnEquip: userClockDefendFn(),
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0, Bonusattack:0, Bonusspeed:0, BonusdodgeRate:0, Bonusdefence:0, Bonusdefencebuffer:0, BonushitRate:0, BonuscritRate:0, BonusHealth:0, BonusSP:0},
      {id:1001, num: userGoldItem.Katana, EquipItem:ReturnWeaponEquipmentChoiceFn("Katana",Katana, 60), Img:Katana, name:"Katana", Equip:KatanaFn(0,-1), UnEquip:KatanaFn(0,1),
      BonusSTR:equipmentAllStats.KatanaBonusSTR, BonusAGI:equipmentAllStats.KatanaBonusAGI, BonusVIT:equipmentAllStats.KatanaBonusVIT, BonusINT:equipmentAllStats.KatanaBonusINT, BonusDEX:equipmentAllStats.KatanaBonusDEX, BonusLUK:equipmentAllStats.KatanaBonusLUK, Bonusattack:equipmentAllStats.KatanaBonusAttack, Bonusspeed:equipmentAllStats.KatanaBonusSpeed, BonusdodgeRate:equipmentAllStats.KatanaBonusDodgeRate, Bonusdefence:equipmentAllStats.KatanaBonusDefence, Bonusdefencebuffer:equipmentAllStats.KatanaBonusDefenceBuffer, BonushitRate:equipmentAllStats.KatanaBonusHitRate, BonuscritRate:equipmentAllStats.KatanaBonusCritRate, BonusHealth:equipmentAllStats.KatanaBonusHealth, BonusSP:equipmentAllStats.KatanaBonusSP},
      {id:1002, num: userGoldItem.BastardSword, EquipItem:ReturnWeaponEquipmentChoiceFn("Bastard Sword",BastardSword, 115), Img:BastardSword, name:"Bastard Sword", Equip:BastardSwordFn(0,-1), UnEquip:BastardSwordFn(0,1),
      BonusSTR:equipmentAllStats.BastardSwordBonusSTR, BonusAGI:equipmentAllStats.BastardSwordBonusAGI, BonusVIT:equipmentAllStats.BastardSwordBonusVIT, BonusINT:equipmentAllStats.BastardSwordBonusINT, BonusDEX:equipmentAllStats.BastardSwordBonusDEX, BonusLUK:equipmentAllStats.BastardSwordBonusLUK, Bonusattack:equipmentAllStats.BastardSwordBonusAttack, Bonusspeed:equipmentAllStats.BastardSwordBonusSpeed, BonusdodgeRate:equipmentAllStats.BastardSwordBonusDodgeRate, Bonusdefence:equipmentAllStats.BastardSwordBonusDefence, Bonusdefencebuffer:equipmentAllStats.BastardSwordBonusDefenceBuffer, BonushitRate:equipmentAllStats.BastardSwordBonusHitRate, BonuscritRate:equipmentAllStats.BastardSwordBonusCritRate, BonusHealth:equipmentAllStats.BastardSwordBonusHealth, BonusSP:equipmentAllStats.BastardSwordBonusSP},
      {id:1003, num: userGoldItem.GaiaSword, EquipItem:ReturnWeaponEquipmentChoiceFn("Gaia Sword",GaiaSword, 140), Img:GaiaSword, name:"Gaia Sword", Equip:GaiaSwordFn(0,-1), UnEquip:GaiaSwordFn(0,1),
      BonusSTR:equipmentAllStats.GaiaSwordBonusSTR, BonusAGI:equipmentAllStats.GaiaSwordBonusAGI, BonusVIT:equipmentAllStats.GaiaSwordBonusVIT, BonusINT:equipmentAllStats.GaiaSwordBonusINT, BonusDEX:equipmentAllStats.GaiaSwordBonusDEX, BonusLUK:equipmentAllStats.GaiaSwordBonusLUK, Bonusattack:equipmentAllStats.GaiaSwordBonusAttack, Bonusspeed:equipmentAllStats.GaiaSwordBonusSpeed, BonusdodgeRate:equipmentAllStats.GaiaSwordBonusDodgeRate, Bonusdefence:equipmentAllStats.GaiaSwordBonusDefence, Bonusdefencebuffer:equipmentAllStats.GaiaSwordBonusDefenceBuffer, BonushitRate:equipmentAllStats.GaiaSwordBonusHitRate, BonuscritRate:equipmentAllStats.GaiaSwordBonusCritRate, BonusHealth:equipmentAllStats.GaiaSwordBonusHealth, BonusSP:equipmentAllStats.GaiaSwordBonusSP},
      {id:1004, num: userGoldItem.TwinEdgeofNaghtSieger, EquipItem:ReturnWeaponEquipmentChoiceFn("Twin Edge of Naght Sieger",TwinEdgeofNaghtSieger, 160), Equip:TwinEdgeofNaghtSiegerFn(0,-1), UnEquip:TwinEdgeofNaghtSiegerFn(0,1),Img:TwinEdgeofNaghtSieger, name:"Twin Edge of Naght Sieger", 
      BonusSTR:equipmentAllStats.TwinEdgeofNaghtSiegerBonusSTR, BonusAGI:equipmentAllStats.TwinEdgeofNaghtSiegerBonusAGI, BonusVIT:equipmentAllStats.TwinEdgeofNaghtSiegerBonusVIT, BonusINT:equipmentAllStats.TwinEdgeofNaghtSiegerBonusINT, BonusDEX:equipmentAllStats.TwinEdgeofNaghtSiegerBonusDEX, BonusLUK:equipmentAllStats.TwinEdgeofNaghtSiegerBonusLUK, Bonusattack:equipmentAllStats.TwinEdgeofNaghtSiegerBonusAttack, Bonusspeed:equipmentAllStats.TwinEdgeofNaghtSiegerBonusSpeed, BonusdodgeRate:equipmentAllStats.TwinEdgeofNaghtSiegerBonusDodgeRate, Bonusdefence:equipmentAllStats.TwinEdgeofNaghtSiegerBonusDefence, Bonusdefencebuffer:equipmentAllStats.TwinEdgeofNaghtSiegerBonusDefenceBuffer, BonushitRate:equipmentAllStats.TwinEdgeofNaghtSiegerBonusHitRate, BonuscritRate:equipmentAllStats.TwinEdgeofNaghtSiegerBonusCritRate, BonusHealth:equipmentAllStats.TwinEdgeofNaghtSiegerBonusHealth, BonusSP:equipmentAllStats.TwinEdgeofNaghtSiegerBonusSP},
      {id:1005, num: userGoldItem.VioletFear, EquipItem:ReturnWeaponEquipmentChoiceFn("Violet Fear",VioletFear, 275), Img:VioletFear, name:"Violet Fear", Equip:VioletFearFn(0,-1), UnEquip:VioletFearFn(0,1),
      BonusSTR:equipmentAllStats.VioletFearBonusSTR, BonusAGI:equipmentAllStats.VioletFearBonusAGI, BonusVIT:equipmentAllStats.VioletFearBonusVIT, BonusINT:equipmentAllStats.VioletFearBonusINT, BonusDEX:equipmentAllStats.VioletFearBonusDEX, BonusLUK:equipmentAllStats.VioletFearBonusLUK, Bonusattack:equipmentAllStats.VioletFearBonusAttack, Bonusspeed:equipmentAllStats.VioletFearBonusSpeed, BonusdodgeRate:equipmentAllStats.VioletFearBonusDodgeRate, Bonusdefence:equipmentAllStats.VioletFearBonusDefence, Bonusdefencebuffer:equipmentAllStats.VioletFearBonusDefenceBuffer, BonushitRate:equipmentAllStats.VioletFearBonusHitRate, BonuscritRate:equipmentAllStats.VioletFearBonusCritRate, BonusHealth:equipmentAllStats.VioletFearBonusHealth, BonusSP:equipmentAllStats.VioletFearBonusSP}
    ]
    let HeadGearBox = [
      {id:2000, num: 1, EquipItem:ReturnHeadGearEquipmentChoiceFn(null, null, 0), Img:null, name:"Empty", Equip: userClockDefendFn(), UnEquip: userClockDefendFn(),
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0, Bonusattack:0, Bonusspeed:0, BonusdodgeRate:0, Bonusdefence:0, Bonusdefencebuffer:0, BonushitRate:0, BonuscritRate:0, BonusHealth:0, BonusSP:0},
      {id:2002, num: userGoldItem.TeddybearHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Teddybear Hat", TeddybearHat, 20), Img:TeddybearHat, name:"Teddybear Hat", Equip:TeddybearHatFn(0,-1), UnEquip:TeddybearHatFn(0,1),
      BonusSTR:equipmentAllStats.TeddybearBonusSTR, BonusAGI:equipmentAllStats.TeddybearBonusAGI, BonusVIT:equipmentAllStats.TeddybearBonusVIT, BonusINT:equipmentAllStats.TeddybearBonusINT, BonusDEX:equipmentAllStats.TeddybearBonusDEX, BonusLUK:equipmentAllStats.TeddybearBonusLUK, Bonusattack:equipmentAllStats.TeddybearBonusAttack, Bonusspeed:equipmentAllStats.TeddybearBonusSpeed, BonusdodgeRate:equipmentAllStats.TeddybearBonusDodgeRate, Bonusdefence:equipmentAllStats.TeddybearBonusDefence, Bonusdefencebuffer:equipmentAllStats.TeddybearBonusDefenceBuffer, BonushitRate:equipmentAllStats.TeddybearBonusHitRate, BonuscritRate:equipmentAllStats.TeddybearBonusCritRate, BonusHealth:equipmentAllStats.TeddybearBonusHealth, BonusSP:equipmentAllStats.TeddybearBonusSP},
      {id:2003, num: userGoldItem.Crown, EquipItem:ReturnHeadGearEquipmentChoiceFn("Crown", Crown, 20), Img:Crown, name:"Crown", Equip:CrownFn(0,-1), UnEquip:CrownFn(0,1),
      BonusSTR:equipmentAllStats.CrownBonusSTR, BonusAGI:equipmentAllStats.CrownBonusAGI, BonusVIT:equipmentAllStats.CrownBonusVIT, BonusINT:equipmentAllStats.CrownBonusINT, BonusDEX:equipmentAllStats.CrownBonusDEX, BonusLUK:equipmentAllStats.CrownBonusLUK, Bonusattack:equipmentAllStats.CrownBonusAttack, Bonusspeed:equipmentAllStats.CrownBonusSpeed, BonusdodgeRate:equipmentAllStats.CrownBonusDodgeRate, Bonusdefence:equipmentAllStats.CrownBonusDefence, Bonusdefencebuffer:equipmentAllStats.CrownBonusDefenceBuffer, BonushitRate:equipmentAllStats.CrownBonusHitRate, BonuscritRate:equipmentAllStats.CrownBonusCritRate, BonusHealth:equipmentAllStats.CrownBonusHealth, BonusSP:equipmentAllStats.CrownBonusSP},
      {id:2004, num: userGoldItem.Helm, EquipItem:ReturnHeadGearEquipmentChoiceFn("Helm", Helm, 20), Img:Helm, name:"Helm", Equip:HelmFn(0,-1), UnEquip:HelmFn(0,1),
      BonusSTR:equipmentAllStats.HelmBonusSTR, BonusAGI:equipmentAllStats.HelmBonusAGI, BonusVIT:equipmentAllStats.HelmBonusVIT, BonusINT:equipmentAllStats.HelmBonusINT, BonusDEX:equipmentAllStats.HelmBonusDEX, BonusLUK:equipmentAllStats.HelmBonusLUK, Bonusattack:equipmentAllStats.HelmBonusAttack, Bonusspeed:equipmentAllStats.HelmBonusSpeed, BonusdodgeRate:equipmentAllStats.HelmBonusDodgeRate, Bonusdefence:equipmentAllStats.HelmBonusDefence, Bonusdefencebuffer:equipmentAllStats.HelmBonusDefenceBuffer, BonushitRate:equipmentAllStats.HelmBonusHitRate, BonuscritRate:equipmentAllStats.HelmBonusCritRate, BonusHealth:equipmentAllStats.HelmBonusHealth, BonusSP:equipmentAllStats.HelmBonusSP},
      {id:2005, num: userGoldItem.PandaHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Panda Hat", PandaHat, 20), Img:PandaHat, name:"Panda Hat", Equip:PandaHatFn(0,-1), UnEquip:PandaHatFn(0,1),
      BonusSTR:equipmentAllStats.PandaHatBonusSTR, BonusAGI:equipmentAllStats.PandaHatBonusAGI, BonusVIT:equipmentAllStats.PandaHatBonusVIT, BonusINT:equipmentAllStats.PandaHatBonusINT, BonusDEX:equipmentAllStats.PandaHatBonusDEX, BonusLUK:equipmentAllStats.PandaHatBonusLUK, Bonusattack:equipmentAllStats.PandaHatBonusAttack, Bonusspeed:equipmentAllStats.PandaHatBonusSpeed, BonusdodgeRate:equipmentAllStats.PandaHatBonusDodgeRate, Bonusdefence:equipmentAllStats.PandaHatBonusDefence, Bonusdefencebuffer:equipmentAllStats.PandaHatBonusDefenceBuffer, BonushitRate:equipmentAllStats.PandaHatBonusHitRate, BonuscritRate:equipmentAllStats.PandaHatBonusCritRate, BonusHealth:equipmentAllStats.PandaHatBonusHealth, BonusSP:equipmentAllStats.PandaHatBonusSP},
      {id:2006, num: userGoldItem.ChefHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Chef Hat", ChefHat, 20), Img:ChefHat, name:"Chef Hat", Equip:ChefHatFn(0,-1), UnEquip:ChefHatFn(0,1),
      BonusSTR:equipmentAllStats.ChefHatBonusSTR, BonusAGI:equipmentAllStats.ChefHatBonusAGI, BonusVIT:equipmentAllStats.ChefHatBonusVIT, BonusINT:equipmentAllStats.ChefHatBonusINT, BonusDEX:equipmentAllStats.ChefHatBonusDEX, BonusLUK:equipmentAllStats.ChefHatBonusLUK, Bonusattack:equipmentAllStats.ChefHatBonusAttack, Bonusspeed:equipmentAllStats.ChefHatBonusSpeed, BonusdodgeRate:equipmentAllStats.ChefHatBonusDodgeRate, Bonusdefence:equipmentAllStats.ChefHatBonusDefence, Bonusdefencebuffer:equipmentAllStats.ChefHatBonusDefenceBuffer, BonushitRate:equipmentAllStats.ChefHatBonusHitRate, BonuscritRate:equipmentAllStats.ChefHatBonusCritRate, BonusHealth:equipmentAllStats.ChefHatBonusHealth, BonusSP:equipmentAllStats.ChefHatBonusSP},
      {id:2007, num: userGoldItem.SantaPoringHat, EquipItem:ReturnHeadGearEquipmentChoiceFn("Santa Poring Hat", SantaPoringHat, 20), Img:SantaPoringHat, name:"Santa Poring Hat", Equip:SantaPoringHatFn(0,-1), UnEquip:SantaPoringHatFn(0,1),
      BonusSTR:equipmentAllStats.SantaPoringHatBonusSTR, BonusAGI:equipmentAllStats.SantaPoringHatBonusAGI, BonusVIT:equipmentAllStats.SantaPoringHatBonusVIT, BonusINT:equipmentAllStats.SantaPoringHatBonusINT, BonusDEX:equipmentAllStats.SantaPoringHatBonusDEX, BonusLUK:equipmentAllStats.SantaPoringHatBonusLUK, Bonusattack:equipmentAllStats.SantaPoringHatBonusAttack, Bonusspeed:equipmentAllStats.SantaPoringHatBonusSpeed, BonusdodgeRate:equipmentAllStats.SantaPoringHatBonusDodgeRate, Bonusdefence:equipmentAllStats.SantaPoringHatBonusDefence, Bonusdefencebuffer:equipmentAllStats.SantaPoringHatBonusDefenceBuffer, BonushitRate:equipmentAllStats.SantaPoringHatBonusHitRate, BonuscritRate:equipmentAllStats.SantaPoringHatBonusCritRate, BonusHealth:equipmentAllStats.SantaPoringHatBonusHealth, BonusSP:equipmentAllStats.SantaPoringHatBonusSP},
      {id:2008, num: userGoldItem.LordKahosHorn, EquipItem:ReturnHeadGearEquipmentChoiceFn("Lord Kaho`s Horn", LordKahosHorn, 20), Img:LordKahosHorn, name:"Lord Kaho`s Horn", Equip:LordKahosHornFn(0,-1), UnEquip:LordKahosHornFn(0,1),
      BonusSTR:equipmentAllStats.LordKahosHornBonusSTR, BonusAGI:equipmentAllStats.LordKahosHornBonusAGI, BonusVIT:equipmentAllStats.LordKahosHornBonusVIT, BonusINT:equipmentAllStats.LordKahosHornBonusINT, BonusDEX:equipmentAllStats.LordKahosHornBonusDEX, BonusLUK:equipmentAllStats.LordKahosHornBonusLUK, Bonusattack:equipmentAllStats.LordKahosHornBonusAttack, Bonusspeed:equipmentAllStats.LordKahosHornBonusSpeed, BonusdodgeRate:equipmentAllStats.LordKahosHornBonusDodgeRate, Bonusdefence:equipmentAllStats.LordKahosHornBonusDefence, Bonusdefencebuffer:equipmentAllStats.LordKahosHornBonusDefenceBuffer, BonushitRate:equipmentAllStats.LordKahosHornBonusHitRate, BonuscritRate:equipmentAllStats.LordKahosHornBonusCritRate, BonusHealth:equipmentAllStats.LordKahosHornBonusHealth, BonusSP:equipmentAllStats.LordKahosHornBonusSP},
    ]
    let ArmorGearBox = [
      {id:3000, num: 1, EquipItem:ReturnArmorEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty", Equip: userClockDefendFn(), UnEquip: userClockDefendFn(),
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0, Bonusattack:0, Bonusspeed:0, BonusdodgeRate:0, Bonusdefence:0, Bonusdefencebuffer:0, BonushitRate:0, BonuscritRate:0, BonusHealth:0, BonusSP:0},
      {id:3001, num:userGoldItem.CottonShirt, EquipItem:ReturnArmorEquipmentChoiceFn("Cotton Shirt",CottonShirt, 10), Img:CottonShirt, name:"Cotton Shirt", Equip:CottonShirtFn(0,-1), UnEquip:CottonShirtFn(0,1),
      BonusSTR:equipmentAllStats.CottonShirtBonusSTR, BonusAGI:equipmentAllStats.CottonShirtBonusAGI, BonusVIT:equipmentAllStats.CottonShirtBonusVIT, BonusINT:equipmentAllStats.CottonShirtBonusINT, BonusDEX:equipmentAllStats.CottonShirtBonusDEX, BonusLUK:equipmentAllStats.CottonShirtBonusLUK, Bonusattack:equipmentAllStats.CottonShirtBonusAttack, Bonusspeed:equipmentAllStats.CottonShirtBonusSpeed, BonusdodgeRate:equipmentAllStats.CottonShirtBonusDodgeRate, Bonusdefence:equipmentAllStats.CottonShirtBonusDefence, Bonusdefencebuffer:equipmentAllStats.CottonShirtBonusDefenceBuffer, BonushitRate:equipmentAllStats.CottonShirtBonusHitRate, BonuscritRate:equipmentAllStats.CottonShirtBonusCritRate, BonusHealth:equipmentAllStats.CottonShirtBonusHealth, BonusSP:equipmentAllStats.CottonShirtBonusSP},
      {id:3002, num:userGoldItem.AdventureSuit, EquipItem:ReturnArmorEquipmentChoiceFn("Adventure Suit",AdventureSuit, 30), Img:AdventureSuit, name:"Adventure Suit", Equip:AdventureSuitFn(0,-1), UnEquip:AdventureSuitFn(0,1), 
      BonusSTR:equipmentAllStats.AdventureSuitBonusSTR, BonusAGI:equipmentAllStats.AdventureSuitBonusAGI, BonusVIT:equipmentAllStats.AdventureSuitBonusVIT, BonusINT:equipmentAllStats.AdventureSuitBonusINT, BonusDEX:equipmentAllStats.AdventureSuitBonusDEX, BonusLUK:equipmentAllStats.AdventureSuitBonusLUK, Bonusattack:equipmentAllStats.AdventureSuitBonusAttack, Bonusspeed:equipmentAllStats.AdventureSuitBonusSpeed, BonusdodgeRate:equipmentAllStats.AdventureSuitBonusDodgeRate, Bonusdefence:equipmentAllStats.AdventureSuitBonusDefence, Bonusdefencebuffer:equipmentAllStats.AdventureSuitBonusDefenceBuffer, BonushitRate:equipmentAllStats.AdventureSuitBonusHitRate, BonuscritRate:equipmentAllStats.AdventureSuitBonusCritRate, BonusHealth:equipmentAllStats.AdventureSuitBonusHealth, BonusSP:equipmentAllStats.AdventureSuitBonusSP},
      {id:3003, num:userGoldItem.WoodenMail, EquipItem:ReturnArmorEquipmentChoiceFn("Wooden Mail",WoodenMail, 40), Img:WoodenMail, name:"Wooden Mail", Equip:WoodenMailFn(0,-1), UnEquip:WoodenMailFn(0,1),
      BonusSTR:equipmentAllStats.WoodenMailBonusSTR, BonusAGI:equipmentAllStats.WoodenMailBonusAGI, BonusVIT:equipmentAllStats.WoodenMailBonusVIT, BonusINT:equipmentAllStats.WoodenMailBonusINT, BonusDEX:equipmentAllStats.WoodenMailBonusDEX, BonusLUK:equipmentAllStats.WoodenMailBonusLUK, Bonusattack:equipmentAllStats.WoodenMailBonusAttack, Bonusspeed:equipmentAllStats.WoodenMailBonusSpeed, BonusdodgeRate:equipmentAllStats.WoodenMailBonusDodgeRate, Bonusdefence:equipmentAllStats.WoodenMailBonusDefence, Bonusdefencebuffer:equipmentAllStats.WoodenMailBonusDefenceBuffer, BonushitRate:equipmentAllStats.WoodenMailBonusHitRate, BonuscritRate:equipmentAllStats.WoodenMailBonusCritRate, BonusHealth:equipmentAllStats.WoodenMailBonusHealth, BonusSP:equipmentAllStats.WoodenMailBonusSP},
      {id:3004, num:userGoldItem.Coat, EquipItem:ReturnArmorEquipmentChoiceFn("Coat",Coat, 50), Img:Coat, name:"Coat", Equip:CoatFn(0,-1), UnEquip:CoatFn(0,1),
      BonusSTR:equipmentAllStats.CoatBonusSTR, BonusAGI:equipmentAllStats.CoatBonusAGI, BonusVIT:equipmentAllStats.CoatBonusVIT, BonusINT:equipmentAllStats.CoatBonusINT, BonusDEX:equipmentAllStats.CoatBonusDEX, BonusLUK:equipmentAllStats.CoatBonusLUK, Bonusattack:equipmentAllStats.CoatBonusAttack, Bonusspeed:equipmentAllStats.CoatBonusSpeed, BonusdodgeRate:equipmentAllStats.CoatBonusDodgeRate, Bonusdefence:equipmentAllStats.CoatBonusDefence, Bonusdefencebuffer:equipmentAllStats.CoatBonusDefenceBuffer, BonushitRate:equipmentAllStats.CoatBonusHitRate, BonuscritRate:equipmentAllStats.CoatBonusCritRate, BonusHealth:equipmentAllStats.CoatBonusHealth, BonusSP:equipmentAllStats.CoatBonusSP},
      {id:3005, num:userGoldItem.PaddedArmor, EquipItem:ReturnArmorEquipmentChoiceFn("Padded Armor",PaddedArmor, 70), Img:PaddedArmor, name:"Padded Armor", Equip:PaddedArmorFn(0,-1), UnEquip:PaddedArmorFn(0,1),
      BonusSTR:equipmentAllStats.PaddedArmorBonusSTR, BonusAGI:equipmentAllStats.PaddedArmorBonusAGI, BonusVIT:equipmentAllStats.PaddedArmorBonusVIT, BonusINT:equipmentAllStats.PaddedArmorBonusINT, BonusDEX:equipmentAllStats.PaddedArmorBonusDEX, BonusLUK:equipmentAllStats.PaddedArmorBonusLUK, Bonusattack:equipmentAllStats.PaddedArmorBonusAttack, Bonusspeed:equipmentAllStats.PaddedArmorBonusSpeed, BonusdodgeRate:equipmentAllStats.PaddedArmorBonusDodgeRate, Bonusdefence:equipmentAllStats.PaddedArmorBonusDefence, Bonusdefencebuffer:equipmentAllStats.PaddedArmorBonusDefenceBuffer, BonushitRate:equipmentAllStats.PaddedArmorBonusHitRate, BonuscritRate:equipmentAllStats.PaddedArmorBonusCritRate, BonusHealth:equipmentAllStats.PaddedArmorBonusHealth, BonusSP:equipmentAllStats.PaddedArmorBonusSP},
      {id:3006, num:userGoldItem.ChainMail, EquipItem:ReturnArmorEquipmentChoiceFn("Chain Mail",ChainMail, 80), Img:ChainMail, name:"Chain Mail", Equip:ChainMailFn(0,-1), UnEquip:ChainMailFn(0,1),
      BonusSTR:equipmentAllStats.ChainMailBonusSTR, BonusAGI:equipmentAllStats.ChainMailBonusAGI, BonusVIT:equipmentAllStats.ChainMailBonusVIT, BonusINT:equipmentAllStats.ChainMailBonusINT, BonusDEX:equipmentAllStats.ChainMailBonusDEX, BonusLUK:equipmentAllStats.ChainMailBonusLUK, Bonusattack:equipmentAllStats.ChainMailBonusAttack, Bonusspeed:equipmentAllStats.ChainMailBonusSpeed, BonusdodgeRate:equipmentAllStats.ChainMailBonusDodgeRate, Bonusdefence:equipmentAllStats.ChainMailBonusDefence, Bonusdefencebuffer:equipmentAllStats.ChainMailBonusDefenceBuffer, BonushitRate:equipmentAllStats.ChainMailBonusHitRate, BonuscritRate:equipmentAllStats.ChainMailBonusCritRate, BonusHealth:equipmentAllStats.ChainMailBonusHealth, BonusSP:equipmentAllStats.ChainMailBonusSP},
      {id:3007, num:userGoldItem.FullPlate, EquipItem:ReturnArmorEquipmentChoiceFn("Full Plate",FullPlate, 90), Img:FullPlate, name:"Full Plate", Equip:FullPlateFn(0,-1), UnEquip:FullPlateFn(0,1),
      BonusSTR:equipmentAllStats.FullPlateBonusSTR, BonusAGI:equipmentAllStats.FullPlateBonusAGI, BonusVIT:equipmentAllStats.FullPlateBonusVIT, BonusINT:equipmentAllStats.FullPlateBonusINT, BonusDEX:equipmentAllStats.FullPlateBonusDEX, BonusLUK:equipmentAllStats.FullPlateBonusLUK, Bonusattack:equipmentAllStats.FullPlateBonusAttack, Bonusspeed:equipmentAllStats.FullPlateBonusSpeed, BonusdodgeRate:equipmentAllStats.FullPlateBonusDodgeRate, Bonusdefence:equipmentAllStats.FullPlateBonusDefence, Bonusdefencebuffer:equipmentAllStats.FullPlateBonusDefenceBuffer, BonushitRate:equipmentAllStats.FullPlateBonusHitRate, BonuscritRate:equipmentAllStats.FullPlateBonusCritRate, BonusHealth:equipmentAllStats.FullPlateBonusHealth, BonusSP:equipmentAllStats.FullPlateBonusSP},
    ]
    let GarmentBox = [
      {id:4000, num: 1, EquipItem:ReturnGarmentEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty", Equip: userClockDefendFn(), UnEquip: userClockDefendFn(),
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0, Bonusattack:0, Bonusspeed:0, BonusdodgeRate:0, Bonusdefence:0, Bonusdefencebuffer:0, BonushitRate:0, BonuscritRate:0, BonusHealth:0, BonusSP:0},
      {id:4001, num: userGoldItem.Hood, EquipItem:ReturnGarmentEquipmentChoiceFn("Hood",Hood, 10), Img: Hood, name:"Hood", Equip:HoodFn(0,-1), UnEquip:HoodFn(0,1),
      BonusSTR:equipmentAllStats.HoodBonusSTR, BonusAGI:equipmentAllStats.HoodBonusAGI, BonusVIT:equipmentAllStats.HoodBonusVIT, BonusINT:equipmentAllStats.HoodBonusINT, BonusDEX:equipmentAllStats.HoodBonusDEX, BonusLUK:equipmentAllStats.HoodBonusLUK, Bonusattack:equipmentAllStats.HoodBonusAttack, Bonusspeed:equipmentAllStats.HoodBonusSpeed, BonusdodgeRate:equipmentAllStats.HoodBonusDodgeRate, Bonusdefence:equipmentAllStats.HoodBonusDefence, Bonusdefencebuffer:equipmentAllStats.HoodBonusDefenceBuffer, BonushitRate:equipmentAllStats.HoodBonusHitRate, BonuscritRate:equipmentAllStats.HoodBonusCritRate, BonusHealth:equipmentAllStats.HoodBonusHealth, BonusSP:equipmentAllStats.HoodBonusSP},
      {id:4002, num: userGoldItem.Muffler, EquipItem:ReturnGarmentEquipmentChoiceFn("Muffler",Muffler, 20), Img: Muffler, name:"Muffler", Equip:MufflerFn(0,-1), UnEquip:MufflerFn(0,1),
      BonusSTR:equipmentAllStats.MufflerBonusSTR, BonusAGI:equipmentAllStats.MufflerBonusAGI, BonusVIT:equipmentAllStats.MufflerBonusVIT, BonusINT:equipmentAllStats.MufflerBonusINT, BonusDEX:equipmentAllStats.MufflerBonusDEX, BonusLUK:equipmentAllStats.MufflerBonusLUK, Bonusattack:equipmentAllStats.MufflerBonusAttack, Bonusspeed:equipmentAllStats.MufflerBonusSpeed, BonusdodgeRate:equipmentAllStats.MufflerBonusDodgeRate, Bonusdefence:equipmentAllStats.MufflerBonusDefence, Bonusdefencebuffer:equipmentAllStats.MufflerBonusDefenceBuffer, BonushitRate:equipmentAllStats.MufflerBonusHitRate, BonuscritRate:equipmentAllStats.MufflerBonusCritRate, BonusHealth:equipmentAllStats.MufflerBonusHealth, BonusSP:equipmentAllStats.MufflerBonusSP},
      {id:4003, num: userGoldItem.Manteau, EquipItem:ReturnGarmentEquipmentChoiceFn("Manteau",Manteau, 30), Img: Manteau, name:"Manteau", Equip:ManteauFn(0,-1), UnEquip:ManteauFn(0,1),
      BonusSTR:equipmentAllStats.ManteauBonusSTR, BonusAGI:equipmentAllStats.ManteauBonusAGI, BonusVIT:equipmentAllStats.ManteauBonusVIT, BonusINT:equipmentAllStats.ManteauBonusINT, BonusDEX:equipmentAllStats.ManteauBonusDEX, BonusLUK:equipmentAllStats.ManteauBonusLUK, Bonusattack:equipmentAllStats.ManteauBonusAttack, Bonusspeed:equipmentAllStats.ManteauBonusSpeed, BonusdodgeRate:equipmentAllStats.ManteauBonusDodgeRate, Bonusdefence:equipmentAllStats.ManteauBonusDefence, Bonusdefencebuffer:equipmentAllStats.ManteauBonusDefenceBuffer, BonushitRate:equipmentAllStats.ManteauBonusHitRate, BonuscritRate:equipmentAllStats.ManteauBonusCritRate, BonusHealth:equipmentAllStats.ManteauBonusHealth, BonusSP:equipmentAllStats.ManteauBonusSP},
      {id:4004, num: userGoldItem.FalconMuffler, EquipItem:ReturnGarmentEquipmentChoiceFn("FalconMuffler",FalconMuffler, 40), Img: FalconMuffler, name:"Falcon Muffler", Equip:FalconMufflerFn(0,-1), UnEquip:FalconMufflerFn(0,1),
      BonusSTR:equipmentAllStats.FalconMufflerBonusSTR, BonusAGI:equipmentAllStats.FalconMufflerBonusAGI, BonusVIT:equipmentAllStats.FalconMufflerBonusVIT, BonusINT:equipmentAllStats.FalconMufflerBonusINT, BonusDEX:equipmentAllStats.FalconMufflerBonusDEX, BonusLUK:equipmentAllStats.FalconMufflerBonusLUK, Bonusattack:equipmentAllStats.FalconMufflerBonusAttack, Bonusspeed:equipmentAllStats.FalconMufflerBonusSpeed, BonusdodgeRate:equipmentAllStats.FalconMufflerBonusDodgeRate, Bonusdefence:equipmentAllStats.FalconMufflerBonusDefence, Bonusdefencebuffer:equipmentAllStats.FalconMufflerBonusDefenceBuffer, BonushitRate:equipmentAllStats.FalconMufflerBonusHitRate, BonuscritRate:equipmentAllStats.FalconMufflerBonusCritRate, BonusHealth:equipmentAllStats.FalconMufflerBonusHealth, BonusSP:equipmentAllStats.FalconMufflerBonusSP},
      {id:4005, num: userGoldItem.ValisManteau, EquipItem:ReturnGarmentEquipmentChoiceFn("Vali`s Manteau",ValisManteau, 50), Img: ValisManteau, name:"Vali`s Manteau", Equip:ValisManteauFn(0,-1), UnEquip:ValisManteauFn(0,1),
      BonusSTR:equipmentAllStats.ValisManteauBonusSTR, BonusAGI:equipmentAllStats.ValisManteauBonusAGI, BonusVIT:equipmentAllStats.ValisManteauBonusVIT, BonusINT:equipmentAllStats.ValisManteauBonusINT, BonusDEX:equipmentAllStats.ValisManteauBonusDEX, BonusLUK:equipmentAllStats.ValisManteauBonusLUK, Bonusattack:equipmentAllStats.ValisManteauBonusAttack, Bonusspeed:equipmentAllStats.ValisManteauBonusSpeed, BonusdodgeRate:equipmentAllStats.ValisManteauBonusDodgeRate, Bonusdefence:equipmentAllStats.ValisManteauBonusDefence, Bonusdefencebuffer:equipmentAllStats.ValisManteauBonusDefenceBuffer, BonushitRate:equipmentAllStats.ValisManteauBonusHitRate, BonuscritRate:equipmentAllStats.ValisManteauBonusCritRate, BonusHealth:equipmentAllStats.ValisManteauBonusHealth, BonusSP:equipmentAllStats.ValisManteauBonusSP},
      {id:4006, num: userGoldItem.ValkyrianManteau, EquipItem:ReturnGarmentEquipmentChoiceFn("Valkyrian Manteau",ValkyrianManteau, 60), Img: ValkyrianManteau, name:"Valkyrian Manteau", Equip:ValkyrianManteauFn(0,-1), UnEquip:ValkyrianManteauFn(0,1),
      BonusSTR:equipmentAllStats.ValkyrianManteauBonusSTR, BonusAGI:equipmentAllStats.ValkyrianManteauBonusAGI, BonusVIT:equipmentAllStats.ValkyrianManteauBonusVIT, BonusINT:equipmentAllStats.ValkyrianManteauBonusINT, BonusDEX:equipmentAllStats.ValkyrianManteauBonusDEX, BonusLUK:equipmentAllStats.ValkyrianManteauBonusLUK, Bonusattack:equipmentAllStats.ValkyrianManteauBonusAttack, Bonusspeed:equipmentAllStats.ValkyrianManteauBonusSpeed, BonusdodgeRate:equipmentAllStats.ValkyrianManteauBonusDodgeRate, Bonusdefence:equipmentAllStats.ValkyrianManteauBonusDefence, Bonusdefencebuffer:equipmentAllStats.ValkyrianManteauBonusDefenceBuffer, BonushitRate:equipmentAllStats.ValkyrianManteauBonusHitRate, BonuscritRate:equipmentAllStats.ValkyrianManteauBonusCritRate, BonusHealth:equipmentAllStats.ValkyrianManteauBonusHealth, BonusSP:equipmentAllStats.ValkyrianManteauBonusSP}, 
      {id:4007, num: userGoldItem.WoolScarf, EquipItem:ReturnGarmentEquipmentChoiceFn("Wool Scarf",WoolScarf, 70), Img: WoolScarf, name:"Wool Scarf", Equip:WoolScarfFn(0,-1), UnEquip:WoolScarfFn(0,1),
      BonusSTR:equipmentAllStats.WoolScarfBonusSTR, BonusAGI:equipmentAllStats.WoolScarfBonusAGI, BonusVIT:equipmentAllStats.WoolScarfBonusVIT, BonusINT:equipmentAllStats.WoolScarfBonusINT, BonusDEX:equipmentAllStats.WoolScarfBonusDEX, BonusLUK:equipmentAllStats.WoolScarfBonusLUK, Bonusattack:equipmentAllStats.WoolScarfBonusAttack, Bonusspeed:equipmentAllStats.WoolScarfBonusSpeed, BonusdodgeRate:equipmentAllStats.WoolScarfBonusDodgeRate, Bonusdefence:equipmentAllStats.WoolScarfBonusDefence, Bonusdefencebuffer:equipmentAllStats.WoolScarfBonusDefenceBuffer, BonushitRate:equipmentAllStats.WoolScarfBonusHitRate, BonuscritRate:equipmentAllStats.WoolScarfBonusCritRate, BonusHealth:equipmentAllStats.WoolScarfBonusHealth, BonusSP:equipmentAllStats.WoolScarfBonusSP},
      {id:4008, num: userGoldItem.FallenAngelWing, EquipItem:ReturnGarmentEquipmentChoiceFn("Fallen Angel Wing",FallenAngelWing, 80), Img: FallenAngelWing, name:"Fallen Ange lWing", Equip:FallenAngelWingFn(0,-1), UnEquip:FallenAngelWingFn(0,1),
      BonusSTR:equipmentAllStats.FallenAngelWingBonusSTR, BonusAGI:equipmentAllStats.FallenAngelWingBonusAGI, BonusVIT:equipmentAllStats.FallenAngelWingBonusVIT, BonusINT:equipmentAllStats.FallenAngelWingBonusINT, BonusDEX:equipmentAllStats.FallenAngelWingBonusDEX, BonusLUK:equipmentAllStats.FallenAngelWingBonusLUK, Bonusattack:equipmentAllStats.FallenAngelWingBonusAttack, Bonusspeed:equipmentAllStats.FallenAngelWingBonusSpeed, BonusdodgeRate:equipmentAllStats.FallenAngelWingBonusDodgeRate, Bonusdefence:equipmentAllStats.FallenAngelWingBonusDefence, Bonusdefencebuffer:equipmentAllStats.FallenAngelWingBonusDefenceBuffer, BonushitRate:equipmentAllStats.FallenAngelWingBonusHitRate, BonuscritRate:equipmentAllStats.FallenAngelWingBonusCritRate, BonusHealth:equipmentAllStats.FallenAngelWingBonusHealth, BonusSP:equipmentAllStats.FallenAngelWingBonusSP},
      {id:4009, num: userGoldItem.CloakofGray, EquipItem:ReturnGarmentEquipmentChoiceFn("Cloak of Gray",CloakofGray, 90), Img: CloakofGray, name:"Cloak of Gray", Equip:CloakofGrayFn(0,-1), UnEquip:CloakofGrayFn(0,1),
      BonusSTR:equipmentAllStats.CloakofGrayBonusSTR, BonusAGI:equipmentAllStats.CloakofGrayBonusAGI, BonusVIT:equipmentAllStats.CloakofGrayBonusVIT, BonusINT:equipmentAllStats.CloakofGrayBonusINT, BonusDEX:equipmentAllStats.CloakofGrayBonusDEX, BonusLUK:equipmentAllStats.CloakofGrayBonusLUK, Bonusattack:equipmentAllStats.CloakofGrayBonusAttack, Bonusspeed:equipmentAllStats.CloakofGrayBonusSpeed, BonusdodgeRate:equipmentAllStats.CloakofGrayBonusDodgeRate, Bonusdefence:equipmentAllStats.CloakofGrayBonusDefence, Bonusdefencebuffer:equipmentAllStats.CloakofGrayBonusDefenceBuffer, BonushitRate:equipmentAllStats.CloakofGrayBonusHitRate, BonuscritRate:equipmentAllStats.CloakofGrayBonusCritRate, BonusHealth:equipmentAllStats.CloakofGrayBonusHealth, BonusSP:equipmentAllStats.CloakofGrayBonusSP},
      {id:4010, num: userGoldItem.ElementalCape, EquipItem:ReturnGarmentEquipmentChoiceFn("Elemental Cape",ElementalCape, 100), Img: ElementalCape, name:"Elemental Cape", Equip:ElementalCapeFn(0,-1), UnEquip:ElementalCapeFn(0,1),
      BonusSTR:equipmentAllStats.ElementalCapeBonusSTR, BonusAGI:equipmentAllStats.ElementalCapeBonusAGI, BonusVIT:equipmentAllStats.ElementalCapeBonusVIT, BonusINT:equipmentAllStats.ElementalCapeBonusINT, BonusDEX:equipmentAllStats.ElementalCapeBonusDEX, BonusLUK:equipmentAllStats.ElementalCapeBonusLUK, Bonusattack:equipmentAllStats.ElementalCapeBonusAttack, Bonusspeed:equipmentAllStats.ElementalCapeBonusSpeed, BonusdodgeRate:equipmentAllStats.ElementalCapeBonusDodgeRate, Bonusdefence:equipmentAllStats.ElementalCapeBonusDefence, Bonusdefencebuffer:equipmentAllStats.ElementalCapeBonusDefenceBuffer, BonushitRate:equipmentAllStats.ElementalCapeBonusHitRate, BonuscritRate:equipmentAllStats.ElementalCapeBonusCritRate, BonusHealth:equipmentAllStats.ElementalCapeBonusHealth, BonusSP:equipmentAllStats.ElementalCapeBonusSP},
      {id:4011, num: userGoldItem.Asprika, EquipItem:ReturnGarmentEquipmentChoiceFn("Asprika",Asprika, 110), Img: Asprika, name:"Asprika", Equip:AsprikaFn(0,-1), UnEquip:AsprikaFn(0,1),
      BonusSTR:equipmentAllStats.AsprikaBonusSTR, BonusAGI:equipmentAllStats.AsprikaBonusAGI, BonusVIT:equipmentAllStats.AsprikaBonusVIT, BonusINT:equipmentAllStats.AsprikaBonusINT, BonusDEX:equipmentAllStats.AsprikaBonusDEX, BonusLUK:equipmentAllStats.AsprikaBonusLUK, Bonusattack:equipmentAllStats.AsprikaBonusAttack, Bonusspeed:equipmentAllStats.AsprikaBonusSpeed, BonusdodgeRate:equipmentAllStats.AsprikaBonusDodgeRate, Bonusdefence:equipmentAllStats.AsprikaBonusDefence, Bonusdefencebuffer:equipmentAllStats.AsprikaBonusDefenceBuffer, BonushitRate:equipmentAllStats.AsprikaBonusHitRate, BonuscritRate:equipmentAllStats.AsprikaBonusCritRate, BonusHealth:equipmentAllStats.AsprikaBonusHealth, BonusSP:equipmentAllStats.AsprikaBonusSP}
    ]

    let FootGearBox = [
      {id:5000, num: 1, EquipItem:ReturnFootGearEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty", Equip: userClockDefendFn(), UnEquip: userClockDefendFn(),
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0, Bonusattack:0, Bonusspeed:0, BonusdodgeRate:0, Bonusdefence:0, Bonusdefencebuffer:0, BonushitRate:0, BonuscritRate:0, BonusHealth:0, BonusSP:0},
      {id:5001, num: userGoldItem.Sandals, EquipItem:ReturnFootGearEquipmentChoiceFn("Sandals",Sandals, 10), Img: Sandals, name:"Sandals", Equip:SandalsFn(0,-1), UnEquip:SandalsFn(0,1),
      BonusSTR:equipmentAllStats.SandalsBonusSTR, BonusAGI:equipmentAllStats.SandalsBonusAGI, BonusVIT:equipmentAllStats.SandalsBonusVIT, BonusINT:equipmentAllStats.SandalsBonusINT, BonusDEX:equipmentAllStats.SandalsBonusDEX, BonusLUK:equipmentAllStats.SandalsBonusLUK, Bonusattack:equipmentAllStats.SandalsBonusAttack, Bonusspeed:equipmentAllStats.SandalsBonusSpeed, BonusdodgeRate:equipmentAllStats.SandalsBonusDodgeRate, Bonusdefence:equipmentAllStats.SandalsBonusDefence, Bonusdefencebuffer:equipmentAllStats.SandalsBonusDefenceBuffer, BonushitRate:equipmentAllStats.SandalsBonusHitRate, BonuscritRate:equipmentAllStats.SandalsBonusCritRate, BonusHealth:equipmentAllStats.SandalsBonusHealth, BonusSP:equipmentAllStats.SandalsBonusSP},
      {id:5002, num: userGoldItem.Shoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Shoes",Shoes, 20), Img: Shoes, name:"Shoes", Equip:ShoesFn(0,-1), UnEquip:ShoesFn(0,1),
      BonusSTR:equipmentAllStats.ShoesBonusSTR, BonusAGI:equipmentAllStats.ShoesBonusAGI, BonusVIT:equipmentAllStats.ShoesBonusVIT, BonusINT:equipmentAllStats.ShoesBonusINT, BonusDEX:equipmentAllStats.ShoesBonusDEX, BonusLUK:equipmentAllStats.ShoesBonusLUK, Bonusattack:equipmentAllStats.ShoesBonusAttack, Bonusspeed:equipmentAllStats.ShoesBonusSpeed, BonusdodgeRate:equipmentAllStats.ShoesBonusDodgeRate, Bonusdefence:equipmentAllStats.ShoesBonusDefence, Bonusdefencebuffer:equipmentAllStats.ShoesBonusDefenceBuffer, BonushitRate:equipmentAllStats.ShoesBonusHitRate, BonuscritRate:equipmentAllStats.ShoesBonusCritRate, BonusHealth:equipmentAllStats.ShoesBonusHealth, BonusSP:equipmentAllStats.ShoesBonusSP},
      {id:5003, num: userGoldItem.Boots, EquipItem:ReturnFootGearEquipmentChoiceFn("Boots",Boots, 30), Img: Boots, name:"Boots", Equip:BootsFn(0,-1), UnEquip:BootsFn(0,1),
      BonusSTR:equipmentAllStats.BootsBonusSTR, BonusAGI:equipmentAllStats.BootsBonusAGI, BonusVIT:equipmentAllStats.BootsBonusVIT, BonusINT:equipmentAllStats.BootsBonusINT, BonusDEX:equipmentAllStats.BootsBonusDEX, BonusLUK:equipmentAllStats.BootsBonusLUK, Bonusattack:equipmentAllStats.BootsBonusAttack, Bonusspeed:equipmentAllStats.BootsBonusSpeed, BonusdodgeRate:equipmentAllStats.BootsBonusDodgeRate, Bonusdefence:equipmentAllStats.BootsBonusDefence, Bonusdefencebuffer:equipmentAllStats.BootsBonusDefenceBuffer, BonushitRate:equipmentAllStats.BootsBonusHitRate, BonuscritRate:equipmentAllStats.BootsBonusCritRate, BonusHealth:equipmentAllStats.BootsBonusHealth, BonusSP:equipmentAllStats.BootsBonusSP},
      {id:5004, num: userGoldItem.Greaves, EquipItem:ReturnFootGearEquipmentChoiceFn("Greaves",Greaves, 35), Img: Greaves, name:"Greaves", Equip:GreavesFn(0,-1), UnEquip:GreavesFn(0,1),
      BonusSTR:equipmentAllStats.GreavesBonusSTR, BonusAGI:equipmentAllStats.GreavesBonusAGI, BonusVIT:equipmentAllStats.GreavesBonusVIT, BonusINT:equipmentAllStats.GreavesBonusINT, BonusDEX:equipmentAllStats.GreavesBonusDEX, BonusLUK:equipmentAllStats.GreavesBonusLUK, Bonusattack:equipmentAllStats.GreavesBonusAttack, Bonusspeed:equipmentAllStats.GreavesBonusSpeed, BonusdodgeRate:equipmentAllStats.GreavesBonusDodgeRate, Bonusdefence:equipmentAllStats.GreavesBonusDefence, Bonusdefencebuffer:equipmentAllStats.GreavesBonusDefenceBuffer, BonushitRate:equipmentAllStats.GreavesBonusHitRate, BonuscritRate:equipmentAllStats.GreavesBonusCritRate, BonusHealth:equipmentAllStats.GreavesBonusHealth, BonusSP:equipmentAllStats.GreavesBonusSP},
      {id:5005, num: userGoldItem.BunnySlipper, EquipItem:ReturnFootGearEquipmentChoiceFn("Bunny Slipper",BunnySlipper, 40), Img: BunnySlipper, name:"BunnySlipper", Equip:BunnySlipperFn(0,-1), UnEquip:BunnySlipperFn(0,1),
      BonusSTR:equipmentAllStats.BunnySlipperBonusSTR, BonusAGI:equipmentAllStats.BunnySlipperBonusAGI, BonusVIT:equipmentAllStats.BunnySlipperBonusVIT, BonusINT:equipmentAllStats.BunnySlipperBonusINT, BonusDEX:equipmentAllStats.BunnySlipperBonusDEX, BonusLUK:equipmentAllStats.BunnySlipperBonusLUK, Bonusattack:equipmentAllStats.BunnySlipperBonusAttack, Bonusspeed:equipmentAllStats.BunnySlipperBonusSpeed, BonusdodgeRate:equipmentAllStats.BunnySlipperBonusDodgeRate, Bonusdefence:equipmentAllStats.BunnySlipperBonusDefence, Bonusdefencebuffer:equipmentAllStats.BunnySlipperBonusDefenceBuffer, BonushitRate:equipmentAllStats.BunnySlipperBonusHitRate, BonuscritRate:equipmentAllStats.BunnySlipperBonusCritRate, BonusHealth:equipmentAllStats.BunnySlipperBonusHealth, BonusSP:equipmentAllStats.BunnySlipperBonusSP},
      {id:5006, num: userGoldItem.TidalShoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Tidal Shoes",TidalShoes, 50), Img: TidalShoes, name:"TidalShoes", Equip:TidalShoesFn(0,-1), UnEquip:TidalShoesFn(0,1),
      BonusSTR:equipmentAllStats.TidalShoesBonusSTR, BonusAGI:equipmentAllStats.TidalShoesBonusAGI, BonusVIT:equipmentAllStats.TidalShoesBonusVIT, BonusINT:equipmentAllStats.TidalShoesBonusINT, BonusDEX:equipmentAllStats.TidalShoesBonusDEX, BonusLUK:equipmentAllStats.TidalShoesBonusLUK, Bonusattack:equipmentAllStats.TidalShoesBonusAttack, Bonusspeed:equipmentAllStats.TidalShoesBonusSpeed, BonusdodgeRate:equipmentAllStats.TidalShoesBonusDodgeRate, Bonusdefence:equipmentAllStats.TidalShoesBonusDefence, Bonusdefencebuffer:equipmentAllStats.TidalShoesBonusDefenceBuffer, BonushitRate:equipmentAllStats.TidalShoesBonusHitRate, BonuscritRate:equipmentAllStats.TidalShoesBonusCritRate, BonusHealth:equipmentAllStats.TidalShoesBonusHealth, BonusSP:equipmentAllStats.TidalShoesBonusSP},
      {id:5007, num: userGoldItem.SiegeBoots, EquipItem:ReturnFootGearEquipmentChoiceFn("Siege Boots",SiegeBoots, 60), Img: SiegeBoots, name:"SiegeBoots", Equip:SiegeBootsFn(0,-1), UnEquip:SiegeBootsFn(0,1),
      BonusSTR:equipmentAllStats.SiegeBootsBonusSTR, BonusAGI:equipmentAllStats.SiegeBootsBonusAGI, BonusVIT:equipmentAllStats.SiegeBootsBonusVIT, BonusINT:equipmentAllStats.SiegeBootsBonusINT, BonusDEX:equipmentAllStats.SiegeBootsBonusDEX, BonusLUK:equipmentAllStats.SiegeBootsBonusLUK, Bonusattack:equipmentAllStats.SiegeBootsBonusAttack, Bonusspeed:equipmentAllStats.SiegeBootsBonusSpeed, BonusdodgeRate:equipmentAllStats.SiegeBootsBonusDodgeRate, Bonusdefence:equipmentAllStats.SiegeBootsBonusDefence, Bonusdefencebuffer:equipmentAllStats.SiegeBootsBonusDefenceBuffer, BonushitRate:equipmentAllStats.SiegeBootsBonusHitRate, BonuscritRate:equipmentAllStats.SiegeBootsBonusCritRate, BonusHealth:equipmentAllStats.SiegeBootsBonusHealth, BonusSP:equipmentAllStats.SiegeBootsBonusSP},
      {id:5008, num: userGoldItem.SiegeGreaves, EquipItem:ReturnFootGearEquipmentChoiceFn("Siege Greaves",SiegeGreaves, 70), Img: SiegeGreaves, name:"SiegeGreaves", Equip:SiegeGreavesFn(0,-1), UnEquip:SiegeGreavesFn(0,1),
      BonusSTR:equipmentAllStats.SiegeGreavesBonusSTR, BonusAGI:equipmentAllStats.SiegeGreavesBonusAGI, BonusVIT:equipmentAllStats.SiegeGreavesBonusVIT, BonusINT:equipmentAllStats.SiegeGreavesBonusINT, BonusDEX:equipmentAllStats.SiegeGreavesBonusDEX, BonusLUK:equipmentAllStats.SiegeGreavesBonusLUK, Bonusattack:equipmentAllStats.SiegeGreavesBonusAttack, Bonusspeed:equipmentAllStats.SiegeGreavesBonusSpeed, BonusdodgeRate:equipmentAllStats.SiegeGreavesBonusDodgeRate, Bonusdefence:equipmentAllStats.SiegeGreavesBonusDefence, Bonusdefencebuffer:equipmentAllStats.SiegeGreavesBonusDefenceBuffer, BonushitRate:equipmentAllStats.SiegeGreavesBonusHitRate, BonuscritRate:equipmentAllStats.SiegeGreavesBonusCritRate, BonusHealth:equipmentAllStats.SiegeGreavesBonusHealth, BonusSP:equipmentAllStats.SiegeGreavesBonusSP},
      {id:5009, num: userGoldItem.VidarsBoots, EquipItem:ReturnFootGearEquipmentChoiceFn("Vidar`s Boots",VidarsBoots, 80), Img: VidarsBoots, name:"VidarsBoots", Equip:VidarsBootsFn(0,-1), UnEquip:VidarsBootsFn(0,1),
      BonusSTR:equipmentAllStats.VidarsBootsBonusSTR, BonusAGI:equipmentAllStats.VidarsBootsBonusAGI, BonusVIT:equipmentAllStats.VidarsBootsBonusVIT, BonusINT:equipmentAllStats.VidarsBootsBonusINT, BonusDEX:equipmentAllStats.VidarsBootsBonusDEX, BonusLUK:equipmentAllStats.VidarsBootsBonusLUK, Bonusattack:equipmentAllStats.VidarsBootsBonusAttack, Bonusspeed:equipmentAllStats.VidarsBootsBonusSpeed, BonusdodgeRate:equipmentAllStats.VidarsBootsBonusDodgeRate, Bonusdefence:equipmentAllStats.VidarsBootsBonusDefence, Bonusdefencebuffer:equipmentAllStats.VidarsBootsBonusDefenceBuffer, BonushitRate:equipmentAllStats.VidarsBootsBonusHitRate, BonuscritRate:equipmentAllStats.VidarsBootsBonusCritRate, BonusHealth:equipmentAllStats.VidarsBootsBonusHealth, BonusSP:equipmentAllStats.VidarsBootsBonusSP},
      {id:5010, num: userGoldItem.VitalTreeShoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Vital Tree Shoes",VitalTreeShoes, 90), Img: VitalTreeShoes, name:"VitalTreeShoes", Equip:VitalTreeShoesFn(0,-1), UnEquip:VitalTreeShoesFn(0,1),
      BonusSTR:equipmentAllStats.VitalTreeShoesBonusSTR, BonusAGI:equipmentAllStats.VitalTreeShoesBonusAGI, BonusVIT:equipmentAllStats.VitalTreeShoesBonusVIT, BonusINT:equipmentAllStats.VitalTreeShoesBonusINT, BonusDEX:equipmentAllStats.VitalTreeShoesBonusDEX, BonusLUK:equipmentAllStats.VitalTreeShoesBonusLUK, Bonusattack:equipmentAllStats.VitalTreeShoesBonusAttack, Bonusspeed:equipmentAllStats.VitalTreeShoesBonusSpeed, BonusdodgeRate:equipmentAllStats.VitalTreeShoesBonusDodgeRate, Bonusdefence:equipmentAllStats.VitalTreeShoesBonusDefence, Bonusdefencebuffer:equipmentAllStats.VitalTreeShoesBonusDefenceBuffer, BonushitRate:equipmentAllStats.VitalTreeShoesBonusHitRate, BonuscritRate:equipmentAllStats.VitalTreeShoesBonusCritRate, BonusHealth:equipmentAllStats.VitalTreeShoesBonusHealth, BonusSP:equipmentAllStats.VitalTreeShoesBonusSP},
      {id:5011, num: userGoldItem.VariantShoes, EquipItem:ReturnFootGearEquipmentChoiceFn("Variant Shoes",VariantShoes, 100), Img: VariantShoes, name:"VariantShoes", Equip:VariantShoesFn(0,-1), UnEquip:VariantShoesFn(0,1),
      BonusSTR:equipmentAllStats.VariantShoesBonusSTR, BonusAGI:equipmentAllStats.VariantShoesBonusAGI, BonusVIT:equipmentAllStats.VariantShoesBonusVIT, BonusINT:equipmentAllStats.VariantShoesBonusINT, BonusDEX:equipmentAllStats.VariantShoesBonusDEX, BonusLUK:equipmentAllStats.VariantShoesBonusLUK, Bonusattack:equipmentAllStats.VariantShoesBonusAttack, Bonusspeed:equipmentAllStats.VariantShoesBonusSpeed, BonusdodgeRate:equipmentAllStats.VariantShoesBonusDodgeRate, Bonusdefence:equipmentAllStats.VariantShoesBonusDefence, Bonusdefencebuffer:equipmentAllStats.VariantShoesBonusDefenceBuffer, BonushitRate:equipmentAllStats.VariantShoesBonusHitRate, BonuscritRate:equipmentAllStats.VariantShoesBonusCritRate, BonusHealth:equipmentAllStats.VariantShoesBonusHealth, BonusSP:equipmentAllStats.VariantShoesBonusSP},
      {id:5012, num: userGoldItem.Sleipnir, EquipItem:ReturnFootGearEquipmentChoiceFn("Sleipnir",Sleipnir, 110), Img: Sleipnir, name:"Sleipnir", Equip:SleipnirFn(0,-1), UnEquip:SleipnirFn(0,1),
      BonusSTR:equipmentAllStats.SleipnirBonusSTR, BonusAGI:equipmentAllStats.SleipnirBonusAGI, BonusVIT:equipmentAllStats.SleipnirBonusVIT, BonusINT:equipmentAllStats.SleipnirBonusINT, BonusDEX:equipmentAllStats.SleipnirBonusDEX, BonusLUK:equipmentAllStats.SleipnirBonusLUK, Bonusattack:equipmentAllStats.SleipnirBonusAttack, Bonusspeed:equipmentAllStats.SleipnirBonusSpeed, BonusdodgeRate:equipmentAllStats.SleipnirBonusDodgeRate, Bonusdefence:equipmentAllStats.SleipnirBonusDefence, Bonusdefencebuffer:equipmentAllStats.SleipnirBonusDefenceBuffer, BonushitRate:equipmentAllStats.SleipnirBonusHitRate, BonuscritRate:equipmentAllStats.SleipnirBonusCritRate, BonusHealth:equipmentAllStats.SleipnirBonusHealth, BonusSP:equipmentAllStats.SleipnirBonusSP},
    ]
    //Accessory
    let AccessoryOneBox = [
      {id:6000, num: 1, EquipItem:ReturnAccessoryOneEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty", Equip: userClockDefendFn(), UnEquip: userClockDefendFn(),
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0, Bonusattack:0, Bonusspeed:0, BonusdodgeRate:0, Bonusdefence:0, Bonusdefencebuffer:0, BonushitRate:0, BonuscritRate:0, BonusHealth:0, BonusSP:0},
      {id:6001, num: userGoldItem.Clip, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Clip",Clip, 10), Img: Clip, name:"Clip", Equip: ClipFn(0,-1), UnEquip: ClipFn(0,1),
      BonusSTR:equipmentAllStats.ClipBonusSTR, BonusAGI:equipmentAllStats.ClipBonusAGI, BonusVIT:equipmentAllStats.ClipBonusVIT, BonusINT:equipmentAllStats.ClipBonusINT, BonusDEX:equipmentAllStats.ClipBonusDEX, BonusLUK:equipmentAllStats.ClipBonusLUK, Bonusattack:equipmentAllStats.ClipBonusAttack, Bonusspeed:equipmentAllStats.ClipBonusSpeed, BonusdodgeRate:equipmentAllStats.ClipBonusDodgeRate, Bonusdefence:equipmentAllStats.ClipBonusDefence, Bonusdefencebuffer:equipmentAllStats.ClipBonusDefenceBuffer, BonushitRate:equipmentAllStats.ClipBonusHitRate, BonuscritRate:equipmentAllStats.ClipBonusCritRate, BonusHealth:equipmentAllStats.ClipBonusHealth, BonusSP:equipmentAllStats.ClipBonusSP},
      {id:6002, num: userGoldItem.Rosary, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Rosary",Rosary, 20), Img: Rosary, name:"Rosary", Equip: RosaryFn(0,-1), UnEquip: RosaryFn(0,1),
      BonusSTR:equipmentAllStats.RosaryBonusSTR, BonusAGI:equipmentAllStats.RosaryBonusAGI, BonusVIT:equipmentAllStats.RosaryBonusVIT, BonusINT:equipmentAllStats.RosaryBonusINT, BonusDEX:equipmentAllStats.RosaryBonusDEX, BonusLUK:equipmentAllStats.RosaryBonusLUK, Bonusattack:equipmentAllStats.RosaryBonusAttack, Bonusspeed:equipmentAllStats.RosaryBonusSpeed, BonusdodgeRate:equipmentAllStats.RosaryBonusDodgeRate, Bonusdefence:equipmentAllStats.RosaryBonusDefence, Bonusdefencebuffer:equipmentAllStats.RosaryBonusDefenceBuffer, BonushitRate:equipmentAllStats.RosaryBonusHitRate, BonuscritRate:equipmentAllStats.RosaryBonusCritRate, BonusHealth:equipmentAllStats.RosaryBonusHealth, BonusSP:equipmentAllStats.RosaryBonusSP},
      {id:6003, num: userGoldItem.VesperCore02, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Vesper Core 02",VesperCore02, 30), Img: VesperCore02, name:"Vesper Core 02", Equip: VesperCore02Fn(0,-1), UnEquip: VesperCore02Fn(0,1),
      BonusSTR:equipmentAllStats.VesperCore02BonusSTR, BonusAGI:equipmentAllStats.VesperCore02BonusAGI, BonusVIT:equipmentAllStats.VesperCore02BonusVIT, BonusINT:equipmentAllStats.VesperCore02BonusINT, BonusDEX:equipmentAllStats.VesperCore02BonusDEX, BonusLUK:equipmentAllStats.VesperCore02BonusLUK, Bonusattack:equipmentAllStats.VesperCore02BonusAttack, Bonusspeed:equipmentAllStats.VesperCore02BonusSpeed, BonusdodgeRate:equipmentAllStats.VesperCore02BonusDodgeRate, Bonusdefence:equipmentAllStats.VesperCore02BonusDefence, Bonusdefencebuffer:equipmentAllStats.VesperCore02BonusDefenceBuffer, BonushitRate:equipmentAllStats.VesperCore02BonusHitRate, BonuscritRate:equipmentAllStats.VesperCore02BonusCritRate, BonusHealth:equipmentAllStats.VesperCore02BonusHealth, BonusSP:equipmentAllStats.VesperCore02BonusSP},
      {id:6004, num: userGoldItem.BradiumEarring, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Bradium Earring",BradiumEarring, 40), Img: BradiumEarring, name:"Bradium Earring", Equip: BradiumEarringFn(0,-1), UnEquip: BradiumEarringFn(0,1),
      BonusSTR:equipmentAllStats.BradiumEarringBonusSTR, BonusAGI:equipmentAllStats.BradiumEarringBonusAGI, BonusVIT:equipmentAllStats.BradiumEarringBonusVIT, BonusINT:equipmentAllStats.BradiumEarringBonusINT, BonusDEX:equipmentAllStats.BradiumEarringBonusDEX, BonusLUK:equipmentAllStats.BradiumEarringBonusLUK, Bonusattack:equipmentAllStats.BradiumEarringBonusAttack, Bonusspeed:equipmentAllStats.BradiumEarringBonusSpeed, BonusdodgeRate:equipmentAllStats.BradiumEarringBonusDodgeRate, Bonusdefence:equipmentAllStats.BradiumEarringBonusDefence, Bonusdefencebuffer:equipmentAllStats.BradiumEarringBonusDefenceBuffer, BonushitRate:equipmentAllStats.BradiumEarringBonusHitRate, BonuscritRate:equipmentAllStats.BradiumEarringBonusCritRate, BonusHealth:equipmentAllStats.BradiumEarringBonusHealth, BonusSP:equipmentAllStats.BradiumEarringBonusSP},
      {id:6005, num: userGoldItem.GloriousRing, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Glorious Ring",GloriousRing, 50), Img: GloriousRing, name:"Glorious Ring", Equip: GloriousRingFn(0,-1), UnEquip: GloriousRingFn(0,1),
      BonusSTR:equipmentAllStats.GloriousRingBonusSTR, BonusAGI:equipmentAllStats.GloriousRingBonusAGI, BonusVIT:equipmentAllStats.GloriousRingBonusVIT, BonusINT:equipmentAllStats.GloriousRingBonusINT, BonusDEX:equipmentAllStats.GloriousRingBonusDEX, BonusLUK:equipmentAllStats.GloriousRingBonusLUK, Bonusattack:equipmentAllStats.GloriousRingBonusAttack, Bonusspeed:equipmentAllStats.GloriousRingBonusSpeed, BonusdodgeRate:equipmentAllStats.GloriousRingBonusDodgeRate, Bonusdefence:equipmentAllStats.GloriousRingBonusDefence, Bonusdefencebuffer:equipmentAllStats.GloriousRingBonusDefenceBuffer, BonushitRate:equipmentAllStats.GloriousRingBonusHitRate, BonuscritRate:equipmentAllStats.GloriousRingBonusCritRate, BonusHealth:equipmentAllStats.GloriousRingBonusHealth, BonusSP:equipmentAllStats.GloriousRingBonusSP},
      {id:6006, num: userGoldItem.SprintRing, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Sprint Ring",SprintRing, 60), Img: SprintRing, name:"Sprint Ring", Equip: SprintRingFn(0,-1), UnEquip: SprintRingFn(0,1),
      BonusSTR:equipmentAllStats.SprintRingBonusSTR, BonusAGI:equipmentAllStats.SprintRingBonusAGI, BonusVIT:equipmentAllStats.SprintRingBonusVIT, BonusINT:equipmentAllStats.SprintRingBonusINT, BonusDEX:equipmentAllStats.SprintRingBonusDEX, BonusLUK:equipmentAllStats.SprintRingBonusLUK, Bonusattack:equipmentAllStats.SprintRingBonusAttack, Bonusspeed:equipmentAllStats.SprintRingBonusSpeed, BonusdodgeRate:equipmentAllStats.SprintRingBonusDodgeRate, Bonusdefence:equipmentAllStats.SprintRingBonusDefence, Bonusdefencebuffer:equipmentAllStats.SprintRingBonusDefenceBuffer, BonushitRate:equipmentAllStats.SprintRingBonusHitRate, BonuscritRate:equipmentAllStats.SprintRingBonusCritRate, BonusHealth:equipmentAllStats.SprintRingBonusHealth, BonusSP:equipmentAllStats.SprintRingBonusSP},
      {id:6007, num: userGoldItem.DiabolusRing, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Diabolus Ring",DiabolusRing, 70), Img: DiabolusRing, name:"Diabolus Ring", Equip: DiabolusRingFn(0,-1), UnEquip: DiabolusRingFn(0,1),
      BonusSTR:equipmentAllStats.DiabolusRingBonusSTR, BonusAGI:equipmentAllStats.DiabolusRingBonusAGI, BonusVIT:equipmentAllStats.DiabolusRingBonusVIT, BonusINT:equipmentAllStats.DiabolusRingBonusINT, BonusDEX:equipmentAllStats.DiabolusRingBonusDEX, BonusLUK:equipmentAllStats.DiabolusRingBonusLUK, Bonusattack:equipmentAllStats.DiabolusRingBonusAttack, Bonusspeed:equipmentAllStats.DiabolusRingBonusSpeed, BonusdodgeRate:equipmentAllStats.DiabolusRingBonusDodgeRate, Bonusdefence:equipmentAllStats.DiabolusRingBonusDefence, Bonusdefencebuffer:equipmentAllStats.DiabolusRingBonusDefenceBuffer, BonushitRate:equipmentAllStats.DiabolusRingBonusHitRate, BonuscritRate:equipmentAllStats.DiabolusRingBonusCritRate, BonusHealth:equipmentAllStats.DiabolusRingBonusHealth, BonusSP:equipmentAllStats.DiabolusRingBonusSP},
      {id:6008, num: userGoldItem.MedalofHonor, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Medal of Honor",MedalofHonor, 80), Img: MedalofHonor, name:"Medal of Honor", Equip: MedalofHonorFn(0,-1), UnEquip: MedalofHonorFn(0,1),
      BonusSTR:equipmentAllStats.MedalofHonorBonusSTR, BonusAGI:equipmentAllStats.MedalofHonorBonusAGI, BonusVIT:equipmentAllStats.MedalofHonorBonusVIT, BonusINT:equipmentAllStats.MedalofHonorBonusINT, BonusDEX:equipmentAllStats.MedalofHonorBonusDEX, BonusLUK:equipmentAllStats.MedalofHonorBonusLUK, Bonusattack:equipmentAllStats.MedalofHonorBonusAttack, Bonusspeed:equipmentAllStats.MedalofHonorBonusSpeed, BonusdodgeRate:equipmentAllStats.MedalofHonorBonusDodgeRate, Bonusdefence:equipmentAllStats.MedalofHonorBonusDefence, Bonusdefencebuffer:equipmentAllStats.MedalofHonorBonusDefenceBuffer, BonushitRate:equipmentAllStats.MedalofHonorBonusHitRate, BonuscritRate:equipmentAllStats.MedalofHonorBonusCritRate, BonusHealth:equipmentAllStats.MedalofHonorBonusHealth, BonusSP:equipmentAllStats.MedalofHonorBonusSP},
      {id:6009, num: userGoldItem.BakonawaAgimatTattoo, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Bakonawa Agimat Tattoo",BakonawaAgimatTattoo, 90), Img: BakonawaAgimatTattoo, name:"Bakonawa Agimat Tattoo", Equip: BakonawaAgimatTattooFn(0,-1), UnEquip: BakonawaAgimatTattooFn(0,1),
      BonusSTR:equipmentAllStats.BakonawaAgimatTattooBonusSTR, BonusAGI:equipmentAllStats.BakonawaAgimatTattooBonusAGI, BonusVIT:equipmentAllStats.BakonawaAgimatTattooBonusVIT, BonusINT:equipmentAllStats.BakonawaAgimatTattooBonusINT, BonusDEX:equipmentAllStats.BakonawaAgimatTattooBonusDEX, BonusLUK:equipmentAllStats.BakonawaAgimatTattooBonusLUK, Bonusattack:equipmentAllStats.BakonawaAgimatTattooBonusAttack, Bonusspeed:equipmentAllStats.BakonawaAgimatTattooBonusSpeed, BonusdodgeRate:equipmentAllStats.BakonawaAgimatTattooBonusDodgeRate, Bonusdefence:equipmentAllStats.BakonawaAgimatTattooBonusDefence, Bonusdefencebuffer:equipmentAllStats.BakonawaAgimatTattooBonusDefenceBuffer, BonushitRate:equipmentAllStats.BakonawaAgimatTattooBonusHitRate, BonuscritRate:equipmentAllStats.BakonawaAgimatTattooBonusCritRate, BonusHealth:equipmentAllStats.BakonawaAgimatTattooBonusHealth, BonusSP:equipmentAllStats.BakonawaAgimatTattooBonusSP},
      {id:6010, num: userGoldItem.Brisingamen, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Brisingamen",Brisingamen, 100), Img: Brisingamen, name:"Brisingamen", Equip: BrisingamenFn(0,-1), UnEquip: BrisingamenFn(0,1),
      BonusSTR:equipmentAllStats.BrisingamenBonusSTR, BonusAGI:equipmentAllStats.BrisingamenBonusAGI, BonusVIT:equipmentAllStats.BrisingamenBonusVIT, BonusINT:equipmentAllStats.BrisingamenBonusINT, BonusDEX:equipmentAllStats.BrisingamenBonusDEX, BonusLUK:equipmentAllStats.BrisingamenBonusLUK, Bonusattack:equipmentAllStats.BrisingamenBonusAttack, Bonusspeed:equipmentAllStats.BrisingamenBonusSpeed, BonusdodgeRate:equipmentAllStats.BrisingamenBonusDodgeRate, Bonusdefence:equipmentAllStats.BrisingamenBonusDefence, Bonusdefencebuffer:equipmentAllStats.BrisingamenBonusDefenceBuffer, BonushitRate:equipmentAllStats.BrisingamenBonusHitRate, BonuscritRate:equipmentAllStats.BrisingamenBonusCritRate, BonusHealth:equipmentAllStats.BrisingamenBonusHealth, BonusSP:equipmentAllStats.BrisingamenBonusSP},
      {id:6011, num: userGoldItem.Megingjard, EquipItem:ReturnAccessoryOneEquipmentChoiceFn("Megingjard",Megingjard, 110), Img: Megingjard, name:"Megingjard", Equip: MegingjardFn(0,-1), UnEquip: MegingjardFn(0,1),
      BonusSTR:equipmentAllStats.MegingjardBonusSTR, BonusAGI:equipmentAllStats.MegingjardBonusAGI, BonusVIT:equipmentAllStats.MegingjardBonusVIT, BonusINT:equipmentAllStats.MegingjardBonusINT, BonusDEX:equipmentAllStats.MegingjardBonusDEX, BonusLUK:equipmentAllStats.MegingjardBonusLUK, Bonusattack:equipmentAllStats.MegingjardBonusAttack, Bonusspeed:equipmentAllStats.MegingjardBonusSpeed, BonusdodgeRate:equipmentAllStats.MegingjardBonusDodgeRate, Bonusdefence:equipmentAllStats.MegingjardBonusDefence, Bonusdefencebuffer:equipmentAllStats.MegingjardBonusDefenceBuffer, BonushitRate:equipmentAllStats.MegingjardBonusHitRate, BonuscritRate:equipmentAllStats.MegingjardBonusCritRate, BonusHealth:equipmentAllStats.MegingjardBonusHealth, BonusSP:equipmentAllStats.MegingjardBonusSP},
    ]

    let AccessoryTwoBox = [
      {id:6000, num: 1, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn(null,null, 0), Img: null, name:"Empty", Equip: userClockDefendFn(), UnEquip: userClockDefendFn(),
      BonusSTR:0, BonusAGI:0, BonusVIT:0, BonusINT:0, BonusDEX:0, BonusLUK:0, Bonusattack:0, Bonusspeed:0, BonusdodgeRate:0, Bonusdefence:0, Bonusdefencebuffer:0, BonushitRate:0, BonuscritRate:0, BonusHealth:0, BonusSP:0},
      {id:6001, num: userGoldItem.Clip, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Clip",Clip, 10), Img: Clip, name:"Clip", Equip: ClipFn(0,-1), UnEquip: ClipFn(0,1),
      BonusSTR:equipmentAllStats.ClipBonusSTR, BonusAGI:equipmentAllStats.ClipBonusAGI, BonusVIT:equipmentAllStats.ClipBonusVIT, BonusINT:equipmentAllStats.ClipBonusINT, BonusDEX:equipmentAllStats.ClipBonusDEX, BonusLUK:equipmentAllStats.ClipBonusLUK, Bonusattack:equipmentAllStats.ClipBonusAttack, Bonusspeed:equipmentAllStats.ClipBonusSpeed, BonusdodgeRate:equipmentAllStats.ClipBonusDodgeRate, Bonusdefence:equipmentAllStats.ClipBonusDefence, Bonusdefencebuffer:equipmentAllStats.ClipBonusDefenceBuffer, BonushitRate:equipmentAllStats.ClipBonusHitRate, BonuscritRate:equipmentAllStats.ClipBonusCritRate, BonusHealth:equipmentAllStats.ClipBonusHealth, BonusSP:equipmentAllStats.ClipBonusSP},
      {id:6002, num: userGoldItem.Rosary, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Rosary",Rosary, 20), Img: Rosary, name:"Rosary", Equip: RosaryFn(0,-1), UnEquip: RosaryFn(0,1),
      BonusSTR:equipmentAllStats.RosaryBonusSTR, BonusAGI:equipmentAllStats.RosaryBonusAGI, BonusVIT:equipmentAllStats.RosaryBonusVIT, BonusINT:equipmentAllStats.RosaryBonusINT, BonusDEX:equipmentAllStats.RosaryBonusDEX, BonusLUK:equipmentAllStats.RosaryBonusLUK, Bonusattack:equipmentAllStats.RosaryBonusAttack, Bonusspeed:equipmentAllStats.RosaryBonusSpeed, BonusdodgeRate:equipmentAllStats.RosaryBonusDodgeRate, Bonusdefence:equipmentAllStats.RosaryBonusDefence, Bonusdefencebuffer:equipmentAllStats.RosaryBonusDefenceBuffer, BonushitRate:equipmentAllStats.RosaryBonusHitRate, BonuscritRate:equipmentAllStats.RosaryBonusCritRate, BonusHealth:equipmentAllStats.RosaryBonusHealth, BonusSP:equipmentAllStats.RosaryBonusSP},
      {id:6003, num: userGoldItem.VesperCore02, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Vesper Core 02",VesperCore02, 30), Img: VesperCore02, name:"Vesper Core 02", Equip: VesperCore02Fn(0,-1), UnEquip: VesperCore02Fn(0,1),
      BonusSTR:equipmentAllStats.VesperCore02BonusSTR, BonusAGI:equipmentAllStats.VesperCore02BonusAGI, BonusVIT:equipmentAllStats.VesperCore02BonusVIT, BonusINT:equipmentAllStats.VesperCore02BonusINT, BonusDEX:equipmentAllStats.VesperCore02BonusDEX, BonusLUK:equipmentAllStats.VesperCore02BonusLUK, Bonusattack:equipmentAllStats.VesperCore02BonusAttack, Bonusspeed:equipmentAllStats.VesperCore02BonusSpeed, BonusdodgeRate:equipmentAllStats.VesperCore02BonusDodgeRate, Bonusdefence:equipmentAllStats.VesperCore02BonusDefence, Bonusdefencebuffer:equipmentAllStats.VesperCore02BonusDefenceBuffer, BonushitRate:equipmentAllStats.VesperCore02BonusHitRate, BonuscritRate:equipmentAllStats.VesperCore02BonusCritRate, BonusHealth:equipmentAllStats.VesperCore02BonusHealth, BonusSP:equipmentAllStats.VesperCore02BonusSP},
      {id:6004, num: userGoldItem.BradiumEarring, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Bradium Earring",BradiumEarring, 40), Img: BradiumEarring, name:"Bradium Earring", Equip: BradiumEarringFn(0,-1), UnEquip: BradiumEarringFn(0,1),
      BonusSTR:equipmentAllStats.BradiumEarringBonusSTR, BonusAGI:equipmentAllStats.BradiumEarringBonusAGI, BonusVIT:equipmentAllStats.BradiumEarringBonusVIT, BonusINT:equipmentAllStats.BradiumEarringBonusINT, BonusDEX:equipmentAllStats.BradiumEarringBonusDEX, BonusLUK:equipmentAllStats.BradiumEarringBonusLUK, Bonusattack:equipmentAllStats.BradiumEarringBonusAttack, Bonusspeed:equipmentAllStats.BradiumEarringBonusSpeed, BonusdodgeRate:equipmentAllStats.BradiumEarringBonusDodgeRate, Bonusdefence:equipmentAllStats.BradiumEarringBonusDefence, Bonusdefencebuffer:equipmentAllStats.BradiumEarringBonusDefenceBuffer, BonushitRate:equipmentAllStats.BradiumEarringBonusHitRate, BonuscritRate:equipmentAllStats.BradiumEarringBonusCritRate, BonusHealth:equipmentAllStats.BradiumEarringBonusHealth, BonusSP:equipmentAllStats.BradiumEarringBonusSP},
      {id:6005, num: userGoldItem.GloriousRing, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Glorious Ring",GloriousRing, 50), Img: GloriousRing, name:"Glorious Ring", Equip: GloriousRingFn(0,-1), UnEquip: GloriousRingFn(0,1),
      BonusSTR:equipmentAllStats.GloriousRingBonusSTR, BonusAGI:equipmentAllStats.GloriousRingBonusAGI, BonusVIT:equipmentAllStats.GloriousRingBonusVIT, BonusINT:equipmentAllStats.GloriousRingBonusINT, BonusDEX:equipmentAllStats.GloriousRingBonusDEX, BonusLUK:equipmentAllStats.GloriousRingBonusLUK, Bonusattack:equipmentAllStats.GloriousRingBonusAttack, Bonusspeed:equipmentAllStats.GloriousRingBonusSpeed, BonusdodgeRate:equipmentAllStats.GloriousRingBonusDodgeRate, Bonusdefence:equipmentAllStats.GloriousRingBonusDefence, Bonusdefencebuffer:equipmentAllStats.GloriousRingBonusDefenceBuffer, BonushitRate:equipmentAllStats.GloriousRingBonusHitRate, BonuscritRate:equipmentAllStats.GloriousRingBonusCritRate, BonusHealth:equipmentAllStats.GloriousRingBonusHealth, BonusSP:equipmentAllStats.GloriousRingBonusSP},
      {id:6006, num: userGoldItem.SprintRing, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Sprint Ring",SprintRing, 60), Img: SprintRing, name:"Sprint Ring", Equip: SprintRingFn(0,-1), UnEquip: SprintRingFn(0,1),
      BonusSTR:equipmentAllStats.SprintRingBonusSTR, BonusAGI:equipmentAllStats.SprintRingBonusAGI, BonusVIT:equipmentAllStats.SprintRingBonusVIT, BonusINT:equipmentAllStats.SprintRingBonusINT, BonusDEX:equipmentAllStats.SprintRingBonusDEX, BonusLUK:equipmentAllStats.SprintRingBonusLUK, Bonusattack:equipmentAllStats.SprintRingBonusAttack, Bonusspeed:equipmentAllStats.SprintRingBonusSpeed, BonusdodgeRate:equipmentAllStats.SprintRingBonusDodgeRate, Bonusdefence:equipmentAllStats.SprintRingBonusDefence, Bonusdefencebuffer:equipmentAllStats.SprintRingBonusDefenceBuffer, BonushitRate:equipmentAllStats.SprintRingBonusHitRate, BonuscritRate:equipmentAllStats.SprintRingBonusCritRate, BonusHealth:equipmentAllStats.SprintRingBonusHealth, BonusSP:equipmentAllStats.SprintRingBonusSP},
      {id:6007, num: userGoldItem.DiabolusRing, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Diabolus Ring",DiabolusRing, 70), Img: DiabolusRing, name:"Diabolus Ring", Equip: DiabolusRingFn(0,-1), UnEquip: DiabolusRingFn(0,1),
      BonusSTR:equipmentAllStats.DiabolusRingBonusSTR, BonusAGI:equipmentAllStats.DiabolusRingBonusAGI, BonusVIT:equipmentAllStats.DiabolusRingBonusVIT, BonusINT:equipmentAllStats.DiabolusRingBonusINT, BonusDEX:equipmentAllStats.DiabolusRingBonusDEX, BonusLUK:equipmentAllStats.DiabolusRingBonusLUK, Bonusattack:equipmentAllStats.DiabolusRingBonusAttack, Bonusspeed:equipmentAllStats.DiabolusRingBonusSpeed, BonusdodgeRate:equipmentAllStats.DiabolusRingBonusDodgeRate, Bonusdefence:equipmentAllStats.DiabolusRingBonusDefence, Bonusdefencebuffer:equipmentAllStats.DiabolusRingBonusDefenceBuffer, BonushitRate:equipmentAllStats.DiabolusRingBonusHitRate, BonuscritRate:equipmentAllStats.DiabolusRingBonusCritRate, BonusHealth:equipmentAllStats.DiabolusRingBonusHealth, BonusSP:equipmentAllStats.DiabolusRingBonusSP},
      {id:6008, num: userGoldItem.MedalofHonor, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Medal of Honor",MedalofHonor, 80), Img: MedalofHonor, name:"Medal of Honor", Equip: MedalofHonorFn(0,-1), UnEquip: MedalofHonorFn(0,1),
      BonusSTR:equipmentAllStats.MedalofHonorBonusSTR, BonusAGI:equipmentAllStats.MedalofHonorBonusAGI, BonusVIT:equipmentAllStats.MedalofHonorBonusVIT, BonusINT:equipmentAllStats.MedalofHonorBonusINT, BonusDEX:equipmentAllStats.MedalofHonorBonusDEX, BonusLUK:equipmentAllStats.MedalofHonorBonusLUK, Bonusattack:equipmentAllStats.MedalofHonorBonusAttack, Bonusspeed:equipmentAllStats.MedalofHonorBonusSpeed, BonusdodgeRate:equipmentAllStats.MedalofHonorBonusDodgeRate, Bonusdefence:equipmentAllStats.MedalofHonorBonusDefence, Bonusdefencebuffer:equipmentAllStats.MedalofHonorBonusDefenceBuffer, BonushitRate:equipmentAllStats.MedalofHonorBonusHitRate, BonuscritRate:equipmentAllStats.MedalofHonorBonusCritRate, BonusHealth:equipmentAllStats.MedalofHonorBonusHealth, BonusSP:equipmentAllStats.MedalofHonorBonusSP},
      {id:6009, num: userGoldItem.BakonawaAgimatTattoo, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Bakonawa Agimat Tattoo",BakonawaAgimatTattoo, 90), Img: BakonawaAgimatTattoo, name:"Bakonawa Agimat Tattoo", Equip: BakonawaAgimatTattooFn(0,-1), UnEquip: BakonawaAgimatTattooFn(0,1),
      BonusSTR:equipmentAllStats.BakonawaAgimatTattooBonusSTR, BonusAGI:equipmentAllStats.BakonawaAgimatTattooBonusAGI, BonusVIT:equipmentAllStats.BakonawaAgimatTattooBonusVIT, BonusINT:equipmentAllStats.BakonawaAgimatTattooBonusINT, BonusDEX:equipmentAllStats.BakonawaAgimatTattooBonusDEX, BonusLUK:equipmentAllStats.BakonawaAgimatTattooBonusLUK, Bonusattack:equipmentAllStats.BakonawaAgimatTattooBonusAttack, Bonusspeed:equipmentAllStats.BakonawaAgimatTattooBonusSpeed, BonusdodgeRate:equipmentAllStats.BakonawaAgimatTattooBonusDodgeRate, Bonusdefence:equipmentAllStats.BakonawaAgimatTattooBonusDefence, Bonusdefencebuffer:equipmentAllStats.BakonawaAgimatTattooBonusDefenceBuffer, BonushitRate:equipmentAllStats.BakonawaAgimatTattooBonusHitRate, BonuscritRate:equipmentAllStats.BakonawaAgimatTattooBonusCritRate, BonusHealth:equipmentAllStats.BakonawaAgimatTattooBonusHealth, BonusSP:equipmentAllStats.BakonawaAgimatTattooBonusSP},
      {id:6010, num: userGoldItem.Brisingamen, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Brisingamen",Brisingamen, 100), Img: Brisingamen, name:"Brisingamen", Equip: BrisingamenFn(0,-1), UnEquip: BrisingamenFn(0,1),
      BonusSTR:equipmentAllStats.BrisingamenBonusSTR, BonusAGI:equipmentAllStats.BrisingamenBonusAGI, BonusVIT:equipmentAllStats.BrisingamenBonusVIT, BonusINT:equipmentAllStats.BrisingamenBonusINT, BonusDEX:equipmentAllStats.BrisingamenBonusDEX, BonusLUK:equipmentAllStats.BrisingamenBonusLUK, Bonusattack:equipmentAllStats.BrisingamenBonusAttack, Bonusspeed:equipmentAllStats.BrisingamenBonusSpeed, BonusdodgeRate:equipmentAllStats.BrisingamenBonusDodgeRate, Bonusdefence:equipmentAllStats.BrisingamenBonusDefence, Bonusdefencebuffer:equipmentAllStats.BrisingamenBonusDefenceBuffer, BonushitRate:equipmentAllStats.BrisingamenBonusHitRate, BonuscritRate:equipmentAllStats.BrisingamenBonusCritRate, BonusHealth:equipmentAllStats.BrisingamenBonusHealth, BonusSP:equipmentAllStats.BrisingamenBonusSP},
      {id:6011, num: userGoldItem.Megingjard, EquipItem:ReturnAccessoryTwoEquipmentChoiceFn("Megingjard",Megingjard, 110), Img: Megingjard, name:"Megingjard", Equip: MegingjardFn(0,-1), UnEquip: MegingjardFn(0,1),
      BonusSTR:equipmentAllStats.MegingjardBonusSTR, BonusAGI:equipmentAllStats.MegingjardBonusAGI, BonusVIT:equipmentAllStats.MegingjardBonusVIT, BonusINT:equipmentAllStats.MegingjardBonusINT, BonusDEX:equipmentAllStats.MegingjardBonusDEX, BonusLUK:equipmentAllStats.MegingjardBonusLUK, Bonusattack:equipmentAllStats.MegingjardBonusAttack, Bonusspeed:equipmentAllStats.MegingjardBonusSpeed, BonusdodgeRate:equipmentAllStats.MegingjardBonusDodgeRate, Bonusdefence:equipmentAllStats.MegingjardBonusDefence, Bonusdefencebuffer:equipmentAllStats.MegingjardBonusDefenceBuffer, BonushitRate:equipmentAllStats.MegingjardBonusHitRate, BonuscritRate:equipmentAllStats.MegingjardBonusCritRate, BonusHealth:equipmentAllStats.MegingjardBonusHealth, BonusSP:equipmentAllStats.MegingjardBonusSP},
    ]

    useEffect(() => {
        $('.mapTitle').fadeIn(600);
        $('.mapTitle').delay(2400).fadeOut(600);
      //Not Depend on audioControlRoom
      //eslint-disable-next-line react-hooks/exhaustive-deps
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
    const HeadGearEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK, EquipItem, UnEquipItem, BonusAttack, BonusSpeed, BonusDodgeRate, BonusDefence, BonusDefenceBuffer, BonusHitRate, BonusCritRate, BonusHealth, BonusSP) => {

      BonusattackHeadGear = BonusAttack;
      BonusspeedHeadGear = BonusSpeed;
      BonusdodgeRateHeadGear = BonusDodgeRate;
      BonusdefenceHeadGear = BonusDefence;
      BonusdefencebufferHeadGear = BonusDefenceBuffer;
      BonushitRateHeadGear = BonusHitRate;
      BonuscritRateHeadGear = BonusCritRate;
      BonusHealthHeadGear = BonusHealth;
      BonusSPHeadGear = BonusSP;

      dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferHeadGear, userAttribute.BonusAgi + BonusAGI - AGIBufferHeadGear, userAttribute.BonusVit + BonusVIT - VITBufferHeadGear, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferHeadGear, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferHeadGear, userAttribute.BonusLuk + BonusLUK - LUKBufferHeadGear, BonusSTR - STRBufferHeadGear, BonusAGI - AGIBufferHeadGear, BonusVIT - VITBufferHeadGear, BonusINT - INTBufferHeadGear, BonusDEX - DEXBufferHeadGear, BonusLUK - LUKBufferHeadGear,
      BonusattackWeapon + BonusattackHeadGear + BonusattackArmor + BonusattackGarment + BonusattackFootGear + BonusattackAccessoryOne + BonusattackAccessoryTwo + userStats.Trainingattack,
      BonusspeedWeapon + BonusspeedHeadGear + BonusspeedArmor + BonusspeedGarment + BonusspeedFootGear + BonusspeedAccessoryOne + BonusspeedAccessoryTwo + userStats.Trainingspeed,
      BonusdodgeRateWeapon + BonusdodgeRateHeadGear + BonusdodgeRateArmor + BonusdodgeRateGarment + BonusdodgeRateFootGear + BonusdodgeRateAccessoryOne + BonusdodgeRateAccessoryTwo + userStats.TrainingdodgeRate,
      BonusdefenceWeapon + BonusdefenceHeadGear + BonusdefenceArmor + BonusdefenceGarment + BonusdefenceFootGear + BonusdefenceAccessoryOne + BonusdefenceAccessoryTwo + userStats.Trainingdefence,
      BonusdefencebufferWeapon + BonusdefencebufferHeadGear + BonusdefencebufferArmor + BonusdefencebufferGarment + BonusdefencebufferFootGear + BonusdefencebufferAccessoryOne + BonusdefencebufferAccessoryTwo + userStats.Trainingdefencebuffer,
      BonushitRateWeapon + BonushitRateHeadGear + BonushitRateArmor + BonushitRateGarment + BonushitRateFootGear + BonushitRateAccessoryOne + BonushitRateAccessoryTwo + userStats.TraininghitRate,
      BonuscritRateWeapon + BonuscritRateHeadGear + BonuscritRateArmor + BonuscritRateGarment + BonuscritRateFootGear + BonuscritRateAccessoryOne + BonuscritRateAccessoryTwo + userStats.TrainingcritRate,
      BonusHealthWeapon + BonusHealthHeadGear + BonusHealthArmor + BonusHealthGarment + BonusHealthFootGear + BonusHealthAccessoryOne + BonusHealthAccessoryTwo,
      BonusSPWeapon + BonusSPHeadGear + BonusSPArmor + BonusSPGarment + BonusSPFootGear + BonusSPAccessoryOne + BonusSPAccessoryTwo));
      // Note Training = BonusSTR - STRBuffer
      // BonusSTRPointFn = Update Stats
      STRBufferHeadGear = BonusSTR;
      AGIBufferHeadGear = BonusAGI;
      VITBufferHeadGear = BonusVIT;
      INTBufferHeadGear = BonusINT;
      DEXBufferHeadGear = BonusDEX;
      LUKBufferHeadGear = BonusLUK;

      //Equip UnEquip ItemBonusStr
      dispatch(EquipItem);
      if (CurrentHeadGear !== 0){
        dispatch(CurrentHeadGear);
      }else{
        //Default Item
        dispatch(userClockDefendFn());
      }
      CurrentHeadGear = UnEquipItem;
    }

    const WeaponEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK, EquipItem, UnEquipItem, BonusAttack, BonusSpeed, BonusDodgeRate, BonusDefence, BonusDefenceBuffer, BonusHitRate, BonusCritRate, BonusHealth, BonusSP) => {

      BonusattackWeapon = BonusAttack;
      BonusspeedWeapon = BonusSpeed;
      BonusdodgeRateWeapon = BonusDodgeRate;
      BonusdefenceWeapon = BonusDefence;
      BonusdefencebufferWeapon = BonusDefenceBuffer;
      BonushitRateWeapon = BonusHitRate;
      BonuscritRateWeapon = BonusCritRate;
      BonusHealthWeapon = BonusHealth;
      BonusSPWeapon = BonusSP;

      dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferWeapon, userAttribute.BonusAgi + BonusAGI - AGIBufferWeapon, userAttribute.BonusVit + BonusVIT - VITBufferWeapon, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferWeapon, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferWeapon, userAttribute.BonusLuk + BonusLUK - LUKBufferWeapon, BonusSTR - STRBufferWeapon, BonusAGI - AGIBufferWeapon, BonusVIT - VITBufferWeapon, BonusINT - INTBufferWeapon, BonusDEX - DEXBufferWeapon, BonusLUK - LUKBufferWeapon, 
      BonusattackWeapon + BonusattackHeadGear + BonusattackArmor + BonusattackGarment + BonusattackFootGear + BonusattackAccessoryOne + BonusattackAccessoryTwo + userStats.Trainingattack,
      BonusspeedWeapon + BonusspeedHeadGear + BonusspeedArmor + BonusspeedGarment + BonusspeedFootGear + BonusspeedAccessoryOne + BonusspeedAccessoryTwo + userStats.Trainingspeed,
      BonusdodgeRateWeapon + BonusdodgeRateHeadGear + BonusdodgeRateArmor + BonusdodgeRateGarment + BonusdodgeRateFootGear + BonusdodgeRateAccessoryOne + BonusdodgeRateAccessoryTwo + userStats.TrainingdodgeRate,
      BonusdefenceWeapon + BonusdefenceHeadGear + BonusdefenceArmor + BonusdefenceGarment + BonusdefenceFootGear + BonusdefenceAccessoryOne + BonusdefenceAccessoryTwo + userStats.Trainingdefence,
      BonusdefencebufferWeapon + BonusdefencebufferHeadGear + BonusdefencebufferArmor + BonusdefencebufferGarment + BonusdefencebufferFootGear + BonusdefencebufferAccessoryOne + BonusdefencebufferAccessoryTwo + userStats.Trainingdefencebuffer,
      BonushitRateWeapon + BonushitRateHeadGear + BonushitRateArmor + BonushitRateGarment + BonushitRateFootGear + BonushitRateAccessoryOne + BonushitRateAccessoryTwo + userStats.TraininghitRate,
      BonuscritRateWeapon + BonuscritRateHeadGear + BonuscritRateArmor + BonuscritRateGarment + BonuscritRateFootGear + BonuscritRateAccessoryOne + BonuscritRateAccessoryTwo + userStats.TrainingcritRate,
      BonusHealthWeapon + BonusHealthHeadGear + BonusHealthArmor + BonusHealthGarment + BonusHealthFootGear + BonusHealthAccessoryOne + BonusHealthAccessoryTwo,
      BonusSPWeapon + BonusSPHeadGear + BonusSPArmor + BonusSPGarment + BonusSPFootGear + BonusSPAccessoryOne + BonusSPAccessoryTwo));
      // Note Training = BonusSTR - STRBuffer
      // BonusSTRPointFn = Update Stats
      STRBufferWeapon = BonusSTR;
      AGIBufferWeapon = BonusAGI;
      VITBufferWeapon = BonusVIT;
      INTBufferWeapon = BonusINT;
      DEXBufferWeapon = BonusDEX;
      LUKBufferWeapon = BonusLUK;

      //Equip UnEquip Item
      dispatch(EquipItem);
      if (CurrentWeapon !== 0){
        dispatch(CurrentWeapon);
      }else{
        //Default Item
        dispatch(KatanaFn(0,1));
      }
      CurrentWeapon = UnEquipItem;

  }

  const ArmorEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK, EquipItem, UnEquipItem, BonusAttack, BonusSpeed, BonusDodgeRate, BonusDefence, BonusDefenceBuffer, BonusHitRate, BonusCritRate, BonusHealth, BonusSP) => {

    BonusattackArmor = BonusAttack;
    BonusspeedArmor = BonusSpeed;
    BonusdodgeRateArmor = BonusDodgeRate;
    BonusdefenceArmor = BonusDefence;
    BonusdefencebufferArmor = BonusDefenceBuffer;
    BonushitRateArmor = BonusHitRate;
    BonuscritRateArmor = BonusCritRate;
    BonusHealthArmor = BonusHealth;
    BonusSPArmor = BonusSP;

    dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferArmor, userAttribute.BonusAgi + BonusAGI - AGIBufferArmor, userAttribute.BonusVit + BonusVIT - VITBufferArmor, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferArmor, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferArmor, userAttribute.BonusLuk + BonusLUK - LUKBufferArmor, BonusSTR - STRBufferArmor, BonusAGI - AGIBufferArmor, BonusVIT - VITBufferArmor, BonusINT - INTBufferArmor, BonusDEX - DEXBufferArmor, BonusLUK - LUKBufferArmor,
    BonusattackWeapon + BonusattackHeadGear + BonusattackArmor + BonusattackGarment + BonusattackFootGear + BonusattackAccessoryOne + BonusattackAccessoryTwo + userStats.Trainingattack,
    BonusspeedWeapon + BonusspeedHeadGear + BonusspeedArmor + BonusspeedGarment + BonusspeedFootGear + BonusspeedAccessoryOne + BonusspeedAccessoryTwo + userStats.Trainingspeed,
    BonusdodgeRateWeapon + BonusdodgeRateHeadGear + BonusdodgeRateArmor + BonusdodgeRateGarment + BonusdodgeRateFootGear + BonusdodgeRateAccessoryOne + BonusdodgeRateAccessoryTwo + userStats.TrainingdodgeRate,
    BonusdefenceWeapon + BonusdefenceHeadGear + BonusdefenceArmor + BonusdefenceGarment + BonusdefenceFootGear + BonusdefenceAccessoryOne + BonusdefenceAccessoryTwo + userStats.Trainingdefence,
    BonusdefencebufferWeapon + BonusdefencebufferHeadGear + BonusdefencebufferArmor + BonusdefencebufferGarment + BonusdefencebufferFootGear + BonusdefencebufferAccessoryOne + BonusdefencebufferAccessoryTwo + userStats.Trainingdefencebuffer,
    BonushitRateWeapon + BonushitRateHeadGear + BonushitRateArmor + BonushitRateGarment + BonushitRateFootGear + BonushitRateAccessoryOne + BonushitRateAccessoryTwo + userStats.TraininghitRate,
    BonuscritRateWeapon + BonuscritRateHeadGear + BonuscritRateArmor + BonuscritRateGarment + BonuscritRateFootGear + BonuscritRateAccessoryOne + BonuscritRateAccessoryTwo + userStats.TrainingcritRate,
    BonusHealthWeapon + BonusHealthHeadGear + BonusHealthArmor + BonusHealthGarment + BonusHealthFootGear + BonusHealthAccessoryOne + BonusHealthAccessoryTwo,
    BonusSPWeapon + BonusSPHeadGear + BonusSPArmor + BonusSPGarment + BonusSPFootGear + BonusSPAccessoryOne + BonusSPAccessoryTwo));
    // Note Training = BonusSTR - STRBuffer
    // BonusSTRPointFn = Update Stats
    STRBufferArmor = BonusSTR;
    AGIBufferArmor = BonusAGI;
    VITBufferArmor = BonusVIT;
    INTBufferArmor = BonusINT;
    DEXBufferArmor = BonusDEX;
    LUKBufferArmor = BonusLUK;

    //Equip UnEquip Item
    dispatch(EquipItem);
    if (CurrentArmor !== 0){
      dispatch(CurrentArmor);
    }else{
      //Default Item
      dispatch(CottonShirtFn(0,1));
    }
    CurrentArmor = UnEquipItem;
}

const GarmentEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK, EquipItem, UnEquipItem, BonusAttack, BonusSpeed, BonusDodgeRate, BonusDefence, BonusDefenceBuffer, BonusHitRate, BonusCritRate, BonusHealth, BonusSP) => {

  BonusattackGarment = BonusAttack;
  BonusspeedGarment = BonusSpeed;
  BonusdodgeRateGarment = BonusDodgeRate;
  BonusdefenceGarment = BonusDefence;
  BonusdefencebufferGarment = BonusDefenceBuffer;
  BonushitRateGarment = BonusHitRate;
  BonuscritRateGarment = BonusCritRate;
  BonusHealthGarment = BonusHealth;
  BonusSPGarment = BonusSP;

  dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferGarment, userAttribute.BonusAgi + BonusAGI - AGIBufferGarment, userAttribute.BonusVit + BonusVIT - VITBufferGarment, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferGarment, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferGarment, userAttribute.BonusLuk + BonusLUK - LUKBufferGarment, BonusSTR - STRBufferGarment, BonusAGI - AGIBufferGarment, BonusVIT - VITBufferGarment, BonusINT - INTBufferGarment, BonusDEX - DEXBufferGarment, BonusLUK - LUKBufferGarment,
  BonusattackWeapon + BonusattackHeadGear + BonusattackArmor + BonusattackGarment + BonusattackFootGear + BonusattackAccessoryOne + BonusattackAccessoryTwo + userStats.Trainingattack,
  BonusspeedWeapon + BonusspeedHeadGear + BonusspeedArmor + BonusspeedGarment + BonusspeedFootGear + BonusspeedAccessoryOne + BonusspeedAccessoryTwo + userStats.Trainingspeed,
  BonusdodgeRateWeapon + BonusdodgeRateHeadGear + BonusdodgeRateArmor + BonusdodgeRateGarment + BonusdodgeRateFootGear + BonusdodgeRateAccessoryOne + BonusdodgeRateAccessoryTwo + userStats.TrainingdodgeRate,
  BonusdefenceWeapon + BonusdefenceHeadGear + BonusdefenceArmor + BonusdefenceGarment + BonusdefenceFootGear + BonusdefenceAccessoryOne + BonusdefenceAccessoryTwo + userStats.Trainingdefence,
  BonusdefencebufferWeapon + BonusdefencebufferHeadGear + BonusdefencebufferArmor + BonusdefencebufferGarment + BonusdefencebufferFootGear + BonusdefencebufferAccessoryOne + BonusdefencebufferAccessoryTwo + userStats.Trainingdefencebuffer,
  BonushitRateWeapon + BonushitRateHeadGear + BonushitRateArmor + BonushitRateGarment + BonushitRateFootGear + BonushitRateAccessoryOne + BonushitRateAccessoryTwo + userStats.TraininghitRate,
  BonuscritRateWeapon + BonuscritRateHeadGear + BonuscritRateArmor + BonuscritRateGarment + BonuscritRateFootGear + BonuscritRateAccessoryOne + BonuscritRateAccessoryTwo + userStats.TrainingcritRate,
  BonusHealthWeapon + BonusHealthHeadGear + BonusHealthArmor + BonusHealthGarment + BonusHealthFootGear + BonusHealthAccessoryOne + BonusHealthAccessoryTwo,
  BonusSPWeapon + BonusSPHeadGear + BonusSPArmor + BonusSPGarment + BonusSPFootGear + BonusSPAccessoryOne + BonusSPAccessoryTwo));
  // Note Training = BonusSTR - STRBuffer
  // BonusSTRPointFn = Update Stats
  STRBufferGarment = BonusSTR;
  AGIBufferGarment = BonusAGI;
  VITBufferGarment = BonusVIT;
  INTBufferGarment = BonusINT;
  DEXBufferGarment = BonusDEX;
  LUKBufferGarment = BonusLUK;

  //Equip UnEquip Item
  dispatch(EquipItem);
  if (CurrentGarment !== 0){
    dispatch(CurrentGarment);
  }else{
    //Default Item
    dispatch(userClockDefendFn());
  }
  CurrentGarment = UnEquipItem;
}


const FootGearEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK, EquipItem, UnEquipItem, BonusAttack, BonusSpeed, BonusDodgeRate, BonusDefence, BonusDefenceBuffer, BonusHitRate, BonusCritRate, BonusHealth, BonusSP) => {

  BonusattackFootGear = BonusAttack;
  BonusspeedFootGear = BonusSpeed;
  BonusdodgeRateFootGear = BonusDodgeRate;
  BonusdefenceFootGear = BonusDefence;
  BonusdefencebufferFootGear = BonusDefenceBuffer;
  BonushitRateFootGear = BonusHitRate;
  BonuscritRateFootGear = BonusCritRate;
  BonusHealthFootGear = BonusHealth;
  BonusSPFootGear = BonusSP;

  dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferFootGear, userAttribute.BonusAgi + BonusAGI - AGIBufferFootGear, userAttribute.BonusVit + BonusVIT - VITBufferFootGear, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferFootGear, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferFootGear, userAttribute.BonusLuk + BonusLUK - LUKBufferFootGear, BonusSTR - STRBufferFootGear, BonusAGI - AGIBufferFootGear, BonusVIT - VITBufferFootGear, BonusINT - INTBufferFootGear, BonusDEX - DEXBufferFootGear, BonusLUK - LUKBufferFootGear,
  BonusattackWeapon + BonusattackHeadGear + BonusattackArmor + BonusattackGarment + BonusattackFootGear + BonusattackAccessoryOne + BonusattackAccessoryTwo + userStats.Trainingattack,
  BonusspeedWeapon + BonusspeedHeadGear + BonusspeedArmor + BonusspeedGarment + BonusspeedFootGear + BonusspeedAccessoryOne + BonusspeedAccessoryTwo + userStats.Trainingspeed,
  BonusdodgeRateWeapon + BonusdodgeRateHeadGear + BonusdodgeRateArmor + BonusdodgeRateGarment + BonusdodgeRateFootGear + BonusdodgeRateAccessoryOne + BonusdodgeRateAccessoryTwo + userStats.TrainingdodgeRate,
  BonusdefenceWeapon + BonusdefenceHeadGear + BonusdefenceArmor + BonusdefenceGarment + BonusdefenceFootGear + BonusdefenceAccessoryOne + BonusdefenceAccessoryTwo + userStats.Trainingdefence,
  BonusdefencebufferWeapon + BonusdefencebufferHeadGear + BonusdefencebufferArmor + BonusdefencebufferGarment + BonusdefencebufferFootGear + BonusdefencebufferAccessoryOne + BonusdefencebufferAccessoryTwo + userStats.Trainingdefencebuffer,
  BonushitRateWeapon + BonushitRateHeadGear + BonushitRateArmor + BonushitRateGarment + BonushitRateFootGear + BonushitRateAccessoryOne + BonushitRateAccessoryTwo + userStats.TraininghitRate,
  BonuscritRateWeapon + BonuscritRateHeadGear + BonuscritRateArmor + BonuscritRateGarment + BonuscritRateFootGear + BonuscritRateAccessoryOne + BonuscritRateAccessoryTwo + userStats.TrainingcritRate,
  BonusHealthWeapon + BonusHealthHeadGear + BonusHealthArmor + BonusHealthGarment + BonusHealthFootGear + BonusHealthAccessoryOne + BonusHealthAccessoryTwo,
  BonusSPWeapon + BonusSPHeadGear + BonusSPArmor + BonusSPGarment + BonusSPFootGear + BonusSPAccessoryOne + BonusSPAccessoryTwo));
  // Note Training = BonusSTR - STRBuffer
  // BonusSTRPointFn = Update Stats
  STRBufferFootGear = BonusSTR;
  AGIBufferFootGear = BonusAGI;
  VITBufferFootGear = BonusVIT;
  INTBufferFootGear = BonusINT;
  DEXBufferFootGear = BonusDEX;
  LUKBufferFootGear = BonusLUK;

  //Equip UnEquip Item
  dispatch(EquipItem);
  if (CurrentFootGear !== 0){
    dispatch(CurrentFootGear);
  }else{
    //Default Item
    dispatch(userClockDefendFn());
  }
  CurrentFootGear = UnEquipItem;
}

const AccessoryOneEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK, EquipItem, UnEquipItem, BonusAttack, BonusSpeed, BonusDodgeRate, BonusDefence, BonusDefenceBuffer, BonusHitRate, BonusCritRate, BonusHealth, BonusSP) => {

  BonusattackAccessoryOne = BonusAttack;
  BonusspeedAccessoryOne = BonusSpeed;
  BonusdodgeRateAccessoryOne = BonusDodgeRate;
  BonusdefenceAccessoryOne = BonusDefence;
  BonusdefencebufferAccessoryOne = BonusDefenceBuffer;
  BonushitRateAccessoryOne = BonusHitRate;
  BonuscritRateAccessoryOne = BonusCritRate;
  BonusHealthAccessoryOne = BonusHealth;
  BonusSPAccessoryOne = BonusSP;

  dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferAccessoryOne, userAttribute.BonusAgi + BonusAGI - AGIBufferAccessoryOne, userAttribute.BonusVit + BonusVIT - VITBufferAccessoryOne, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferAccessoryOne, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferAccessoryOne, userAttribute.BonusLuk + BonusLUK - LUKBufferAccessoryOne, BonusSTR - STRBufferAccessoryOne, BonusAGI - AGIBufferAccessoryOne, BonusVIT - VITBufferAccessoryOne, BonusINT - INTBufferAccessoryOne, BonusDEX - DEXBufferAccessoryOne, BonusLUK - LUKBufferAccessoryOne,
  BonusattackWeapon + BonusattackHeadGear + BonusattackArmor + BonusattackGarment + BonusattackFootGear + BonusattackAccessoryOne + BonusattackAccessoryTwo + userStats.Trainingattack,
  BonusspeedWeapon + BonusspeedHeadGear + BonusspeedArmor + BonusspeedGarment + BonusspeedFootGear + BonusspeedAccessoryOne + BonusspeedAccessoryTwo + userStats.Trainingspeed,
  BonusdodgeRateWeapon + BonusdodgeRateHeadGear + BonusdodgeRateArmor + BonusdodgeRateGarment + BonusdodgeRateFootGear + BonusdodgeRateAccessoryOne + BonusdodgeRateAccessoryTwo + userStats.TrainingdodgeRate,
  BonusdefenceWeapon + BonusdefenceHeadGear + BonusdefenceArmor + BonusdefenceGarment + BonusdefenceFootGear + BonusdefenceAccessoryOne + BonusdefenceAccessoryTwo + userStats.Trainingdefence,
  BonusdefencebufferWeapon + BonusdefencebufferHeadGear + BonusdefencebufferArmor + BonusdefencebufferGarment + BonusdefencebufferFootGear + BonusdefencebufferAccessoryOne + BonusdefencebufferAccessoryTwo + userStats.Trainingdefencebuffer,
  BonushitRateWeapon + BonushitRateHeadGear + BonushitRateArmor + BonushitRateGarment + BonushitRateFootGear + BonushitRateAccessoryOne + BonushitRateAccessoryTwo + userStats.TraininghitRate,
  BonuscritRateWeapon + BonuscritRateHeadGear + BonuscritRateArmor + BonuscritRateGarment + BonuscritRateFootGear + BonuscritRateAccessoryOne + BonuscritRateAccessoryTwo + userStats.TrainingcritRate,
  BonusHealthWeapon + BonusHealthHeadGear + BonusHealthArmor + BonusHealthGarment + BonusHealthFootGear + BonusHealthAccessoryOne + BonusHealthAccessoryTwo,
  BonusSPWeapon + BonusSPHeadGear + BonusSPArmor + BonusSPGarment + BonusSPFootGear + BonusSPAccessoryOne + BonusSPAccessoryTwo));
  // Note Training = BonusSTR - STRBuffer
  // BonusSTRPointFn = Update Stats
  STRBufferAccessoryOne = BonusSTR;
  AGIBufferAccessoryOne = BonusAGI;
  VITBufferAccessoryOne = BonusVIT;
  INTBufferAccessoryOne = BonusINT;
  DEXBufferAccessoryOne = BonusDEX;
  LUKBufferAccessoryOne = BonusLUK;
  //Equip UnEquip Item
  dispatch(EquipItem);
  if (CurrentAccessoryOne !== 0){
    dispatch(CurrentAccessoryOne);
  }else{
    //Default Item
    dispatch(userClockDefendFn());
  }
  CurrentAccessoryOne = UnEquipItem;
}

const AccessoryTwoEquipmentAttribute = (BonusSTR, BonusAGI, BonusVIT, BonusINT, BonusDEX, BonusLUK, EquipItem, UnEquipItem, BonusAttack, BonusSpeed, BonusDodgeRate, BonusDefence, BonusDefenceBuffer, BonusHitRate, BonusCritRate, BonusHealth, BonusSP) => {

  BonusattackAccessoryTwo = BonusAttack;
  BonusspeedAccessoryTwo = BonusSpeed;
  BonusdodgeRateAccessoryTwo = BonusDodgeRate;
  BonusdefenceAccessoryTwo = BonusDefence;
  BonusdefencebufferAccessoryTwo = BonusDefenceBuffer;
  BonushitRateAccessoryTwo = BonusHitRate;
  BonuscritRateAccessoryTwo = BonusCritRate;
  BonusHealthAccessoryTwo = BonusHealth;
  BonusSPAccessoryTwo = BonusSP;

  dispatch(BonusEquipPointsFn(userAttribute.BonusStr + BonusSTR - STRBufferAccessoryTwo, userAttribute.BonusAgi + BonusAGI - AGIBufferAccessoryTwo, userAttribute.BonusVit + BonusVIT - VITBufferAccessoryTwo, userAttribute.vit, userAttribute.BonusInt + BonusINT - INTBufferAccessoryTwo, userAttribute.int, userAttribute.BonusDex + BonusDEX - DEXBufferAccessoryTwo, userAttribute.BonusLuk + BonusLUK - LUKBufferAccessoryTwo, BonusSTR - STRBufferAccessoryTwo, BonusAGI - AGIBufferAccessoryTwo, BonusVIT - VITBufferAccessoryTwo, BonusINT - INTBufferAccessoryTwo, BonusDEX - DEXBufferAccessoryTwo, BonusLUK - LUKBufferAccessoryTwo,
  BonusattackWeapon + BonusattackHeadGear + BonusattackArmor + BonusattackGarment + BonusattackFootGear + BonusattackAccessoryOne + BonusattackAccessoryTwo + userStats.Trainingattack,
  BonusspeedWeapon + BonusspeedHeadGear + BonusspeedArmor + BonusspeedGarment + BonusspeedFootGear + BonusspeedAccessoryOne + BonusspeedAccessoryTwo + userStats.Trainingspeed,
  BonusdodgeRateWeapon + BonusdodgeRateHeadGear + BonusdodgeRateArmor + BonusdodgeRateGarment + BonusdodgeRateFootGear + BonusdodgeRateAccessoryOne + BonusdodgeRateAccessoryTwo + userStats.TrainingdodgeRate,
  BonusdefenceWeapon + BonusdefenceHeadGear + BonusdefenceArmor + BonusdefenceGarment + BonusdefenceFootGear + BonusdefenceAccessoryOne + BonusdefenceAccessoryTwo + userStats.Trainingdefence,
  BonusdefencebufferWeapon + BonusdefencebufferHeadGear + BonusdefencebufferArmor + BonusdefencebufferGarment + BonusdefencebufferFootGear + BonusdefencebufferAccessoryOne + BonusdefencebufferAccessoryTwo + userStats.Trainingdefencebuffer,
  BonushitRateWeapon + BonushitRateHeadGear + BonushitRateArmor + BonushitRateGarment + BonushitRateFootGear + BonushitRateAccessoryOne + BonushitRateAccessoryTwo + userStats.TraininghitRate,
  BonuscritRateWeapon + BonuscritRateHeadGear + BonuscritRateArmor + BonuscritRateGarment + BonuscritRateFootGear + BonuscritRateAccessoryOne + BonuscritRateAccessoryTwo + userStats.TrainingcritRate,
  BonusHealthWeapon + BonusHealthHeadGear + BonusHealthArmor + BonusHealthGarment + BonusHealthFootGear + BonusHealthAccessoryOne + BonusHealthAccessoryTwo,
  BonusSPWeapon + BonusSPHeadGear + BonusSPArmor + BonusSPGarment + BonusSPFootGear + BonusSPAccessoryOne + BonusSPAccessoryTwo));
  // Note Training = BonusSTR - STRBuffer
  // BonusSTRPointFn = Update Stats
  STRBufferAccessoryTwo = BonusSTR;
  AGIBufferAccessoryTwo = BonusAGI;
  VITBufferAccessoryTwo = BonusVIT;
  INTBufferAccessoryTwo = BonusINT;
  DEXBufferAccessoryTwo = BonusDEX;
  LUKBufferAccessoryTwo = BonusLUK;

  //Equip UnEquip Item
  dispatch(EquipItem);
  if (CurrentAccessoryTwo !== 0){
    dispatch(CurrentAccessoryTwo);
  }else{
    //Default Item
    dispatch(userClockDefendFn());
  }
  CurrentAccessoryTwo = UnEquipItem;
}


    return(
      <div className={screenControlRoom.BattleLoadingScreen && Math.random() <= 0.33 ? "loadingScreenBattle" : screenControlRoom.BattleLoadingScreen && Math.random() <= 0.33 ? "loadingScreenBattleTwo" : screenControlRoom.BattleLoadingScreen ? "loadingScreenBattleThree" : null}>
        {
        screenControlRoom.Prontera ? <Prontera ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/>:
        screenControlRoom.PronteraCastle ? <PronteraCastle ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/>:
        screenControlRoom.PoringIsland ? <PoringIsland ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/>:
        screenControlRoom.Geffen ? <Geffen ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox} GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/>:
        screenControlRoom.GeffenDungeon1F ? <GeffenDungeon1F ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/> :
        screenControlRoom.GeffenDungeon3F ? <GeffenDungeon3F ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/> :
        screenControlRoom.PayonCave1F ? <PayonCave1F ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute}HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/>:
        screenControlRoom.ChallengeTower ? <ChallengeTower ArmorGearBox={ArmorGearBox} WeaponGearBox={WeaponGearBox} HeadGearBox={HeadGearBox} FootGearBox={FootGearBox}  GarmentBox={GarmentBox} AccessoryOneBox={AccessoryOneBox} AccessoryTwoBox={AccessoryTwoBox} AccessoryOneEquipmentAttribute={AccessoryOneEquipmentAttribute} AccessoryTwoEquipmentAttribute={AccessoryTwoEquipmentAttribute} GarmentEquipmentAttribute={GarmentEquipmentAttribute} FootGearEquipmentAttribute={FootGearEquipmentAttribute} WeaponEquipmentAttribute={WeaponEquipmentAttribute} ArmorEquipmentAttribute={ArmorEquipmentAttribute} HeadGearEquipmentAttribute={HeadGearEquipmentAttribute} SkillsLevelingBox={SkillsLevelingBox}/>:
        screenControlRoom.BattlePoringIslandMap ? <BattlePoringIslandMap />:
        screenControlRoom.cutsceneTwo ? <StoryLineTwo /> :
        screenControlRoom.cutsceneThree ? <StoryLineThree /> :
        screenControlRoom.cutsceneFour ? <StoryLineFour /> :
        screenControlRoom.cutsceneFive ? <StoryLineFive /> :
        screenControlRoom.cutsceneSix ? <StoryLineSix /> :
        screenControlRoom.cutsceneSeven ? <StoryLineSeven /> :
        screenControlRoom.cutsceneEnd ? <StoryLineEnd /> :
        screenControlRoom.gameTitleOptionScreen ? <GameOption audioBGM={audioBGM}/> :
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
            screenControlRoom.AltanSkills ?
              <div className="ReturnParent">
                <AltanSkills SkillsLevelingBox={SkillsLevelingBox}/> 
                <button className="ReturnHUD" onClick={() =>{dispatch(GotoAltanSkillsFn());}}>x</button>
              </div>:
              <div className="StoryMap">
                <h3 className="mapTitle">World Map</h3>
                {/* click x trigger hover */}
                <button className="ReturnHUDBugFix"></button>
                <button className="Prontera" onClick={() => {dispatch(GotoPronteraFn()); }}>Prontera</button>
                <button className="PayonCave" onClick={() => {dispatch(GotoPayonCave1FFn()); }}>{
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
                      screenControlRoom.PayonCave3FPath4 ? <span>Payon Cave(⭐)</span> : <span>Payon Cave</span>}
                </button>
                <button className="SogratDesertPoringIsland" onClick={() => {dispatch(GotoPoringIslandFn()); }}>{
                    screenControlRoom.PoringIslandPath1 &&
                    screenControlRoom.PoringIslandPath2 &&
                    screenControlRoom.PoringIslandPath3 &&
                    screenControlRoom.PoringIslandPath4 &&
                    screenControlRoom.PoringIslandPath5 &&
                    screenControlRoom.PoringIslandPath6 &&
                    screenControlRoom.PoringIslandPath7 &&
                    screenControlRoom.PoringIslandPath8 ? <span>Poring Island(⭐)</span> : <span>Poring Island</span>}
                
                </button>
                <button className="Geffen" onClick={() => {dispatch(GotoGeffenFn()); }}>Geffen</button>
                {screenControlRoom.FinalBossPath ?
                <button className="FinalBoss" onClick={
                  screenControlRoom.storyLineSix ? 
                  () => {LoadingScreen0(); }:
                  () => {dispatch(cutsceneSixFn()); }}>Baphomet Gate💢</button> : null}
                <button className="ChallengeTower" onClick={() => {dispatch(GotoChallengeTowerFn()); }}>{
                    screenControlRoom.ChallengeTowerPath1 &&
                    screenControlRoom.ChallengeTowerPath2 &&
                    screenControlRoom.ChallengeTowerPath3 ? <span>RaidTower(⭐)</span> : <span>RaidTower</span>}
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
                  <button className="altanQuest" onClick={() => {dispatch(GotoAltanSkillsFn());}}>Skills</button>
                  <button className="altanQuest" onClick={() => {dispatch(gameTitleOptionScreenFn());}}>Option</button>
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
                        <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); WeaponEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); ArmorEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); HeadGearEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); FootGearEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); GarmentEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
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
            {/* ACCESSORY ONE */}
            {screenControlRoom.AccessoryOneEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Accessory Bag</p>
              {userGoldItem.Clip >= 1 || userGoldItem.Rosary  >= 1 || userGoldItem.VesperCore02 >= 1 || userGoldItem.BradiumEarring >= 1 || userGoldItem.GloriousRing >= 1 || userGoldItem.SprintRing >= 1 || userGoldItem.DiabolusRing >= 1 || userGoldItem.MedalofHonor >= 1 || userGoldItem.BakonawaAgimatTattoo >= 1 || userGoldItem.Brisingamen >= 1 || userGoldItem.Megingjard >= 1 ?
                <div>
                {AccessoryOneBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); AccessoryOneEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty Accessory Storage T^T</p>}
              </div> : null}
            {/* ACCESSORY TWO */}
            {screenControlRoom.AccessoryTwoEquipmentChoice ?
              <div className="textCenter">
                <p className="chatDescriptTitle">Accessory Bag</p>
              {userGoldItem.Clip >= 1 || userGoldItem.Rosary  >= 1 || userGoldItem.VesperCore02 >= 1 || userGoldItem.BradiumEarring >= 1 || userGoldItem.GloriousRing >= 1 || userGoldItem.SprintRing >= 1 || userGoldItem.DiabolusRing >= 1 || userGoldItem.MedalofHonor >= 1 || userGoldItem.BakonawaAgimatTattoo >= 1 || userGoldItem.Brisingamen >= 1 || userGoldItem.Megingjard >= 1 ?
                <div>
                {AccessoryTwoBox.map(Equip => {
                  return(
                    <span key={Equip.id}>
                      {Equip.num >= 1 ? 
                      <button className="altanEquipmentGearChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Equip.EquipItem); AccessoryTwoEquipmentAttribute(Equip.BonusSTR,Equip.BonusAGI,Equip.BonusVIT,Equip.BonusINT,Equip.BonusDEX,Equip.BonusLUK,Equip.Equip,Equip.UnEquip,Equip.Bonusattack,Equip.Bonusspeed,Equip.BonusdodgeRate, Equip.Bonusdefence,Equip.Bonusdefencebuffer, Equip.BonushitRate, Equip.BonuscritRate,Equip.BonusHealth,Equip.BonusSP);}}>
                        <div className="adjImgCenterBox">
                          <p className="adjImgCenter"><img src={Equip.Img} alt={Equip.Img === null ? "" : Equip.name} />{Equip.name}</p>
                        </div>
                      </button> : null}
                    </span>
                  )
                })}
                </div>
              : <p>Empty Accessory Storage T^T</p>}
              </div> : null}
            {/* Skills Room */}
            {(screenControlRoom.FirstAidTraining || screenControlRoom.BashTraining || screenControlRoom.MammoniteTraining || screenControlRoom.KodokuTraining || screenControlRoom.MagnumBreakTraining || screenControlRoom.HeadCrushTraining || screenControlRoom.QuickenTraining || screenControlRoom.VitalStrikeTraining || screenControlRoom.BowlingBashTraining) && 
              (screenControlRoom.AltanSkills) ?
                <div>
                  {SkillsLevelingBox.map(Skills => {
                    return(
                      <span key={Skills.id}>
                        {Skills.select ?
                          <p className="skillChatCenter">{Skills.title}</p>
                        : null}
                        {Skills.name === "First Aid" && screenControlRoom.FirstAidTraining ?
                        <button className={userStats.currentSP >= skillCapChart.SPFirstAid ? "altanSkillChatButton atlanSkillButtonFix atlanSkillButtonUse" : "altanSkillChatButton atlanSkillButtonFix atlanSkillButtonUse atlanSkillButtonNeedMoreSP"} title={Skills.title} onClick={
                          userStats.currentSP >= skillCapChart.SPFirstAid && userStats.currentHealth !== userStats.maxHealth?
                          () => dispatch(Skills.Activate) : null}>
                          <div className="adjImgCenterBox">
                            <p className="adjImgCenter"><img src={Skills.Img} alt={Skills.name} />Use {Skills.name} - Lv.{Skills.skillLevelCheck}</p>
                          </div>
                          </button> : null}
                        {Skills.select && skillCapChart.JobPoints >= 1 ?
                        <span>
                          <button className="altanSkillChatButton altanEquipmentButtonFix" onClick={() => {dispatch(Skills.Upgrade);}}>
                            <div className="adjImgCenterBox">
                              <p className="adjImgCenter" ><img className="skillLevelDisplay" src={skillOut} alt="skillOut"/><img className="skillLevelDisplayTwo" src={skillDown} alt="skillDown"/>LevelUp</p>
                            </div>
                          </button>
                        </span> :  null}
                      </span>
                    ) 
                  })}
                </div> : null}
          </fieldset>
        </div>
        : null }
      </div>
    );
}

export default StartMenu;