import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery'
import { GotoWorldMapFn, GotoPoringIslandFn, GotoPayonCave1FFn, GotoPayonCave2FFn, GotoPayonCave3FFn , GotoGeffenDungeon1FFn , GotoGeffenDungeon2FFn , GotoGeffenDungeon3FFn , GotoGeffenDungeon4FFn, GotoChallengeTowerFn, EnemyAttackUserFn, UserAttackEnemyFn, EnemyOnHitAnimationFn, ResetEnemyOnHitAnimationFn, UserAttackAnimationFn, ResetUserAttackAnimationFn, UserOnHitAnimationFn, ResetUserOnHitAnimationFn, UserIsDeadAnimationFn , ResetUserIsDeadAnimationFn, UserIsDyingAnimationFn, ResetUserIsDyingAnimationFn , UserIsBlockAnimationFn , UserChannelAnimationFn, ResetUserChannelAnimationFn, UserWeaponImgFn, UserPickUpAnimationFn, EnemyAttackAnimationFn, EnemyDeadAnimationFn , EnemyDodgeAnimationFn, UserIsDodgeAnimationFn, UserIsCritAnimationFn , EnemyOnCritAnimationFn , EnemyOnHitDoubleAnimationFn, EnemyOnReflectNumberFn, UserOnLifeStealAnimationFn, UserOnSPHealAnimationFn, UserOnHPHealAnimationFn, AmuletRecoveryFn, UserOnHPMagnificatFn, UserOnSPMagnificatFn} from './actions';
//Battle Reset
import { ResetAllBattleMapFn, UserBattleStatsFn, EnemyBattleStatsFn } from './actions';
//Battle UI
import { ReturnUserInSelectSkillFn, UserInSelectSkillFn , UserInSelectItemFn , ReturnUserInSelectItemFn, UserInSelectEnemyFn, UserInSelectUserFn } from './actions';
//Clock
import { UserTurnFn , ResetUserTurnFn, ResetEnemyTurnFn, userClockDefendFn, enemyClockDefendFn, TickingClockFn } from './actions';
//Game Result (Victory/Defeat)
import { WinResultFn, ResetEnemyCurrentHealthFn, UserLevelUpFn, UserJobLevelUpFn } from './actions';
import { ReturnCheckPointFn } from './actions'
//BOSS Defeat
import { BossEclipseDefeatFn, BossWolyafaDefeatFn, BossDoppelgangerDefeatFn ,BossBaphometDefeatFn } from './actions'
//Skills T/F
import { UserTurnBlockFn , EnemyTurnBlockFn, UserSkillQuickenFn , UserSkillKodokuFn, UserSkillFirstAidFn, UserTriggerMasterItemFn, UserClockFireAttackAttributesFn} from './actions'
//OBS: ResetUserSkillQuickenClockFn, ResetUserTurnBlockFn
//Battle Calculation
import { EnemyAttackBlockUserFn , UserSkillBashEnemyFn , UserSkillMagnumBreakEnemyFn , UserSkillMammoniteEnemyFn, UserSkillMammoniteMissedFn , UserSkillBashMissedFn, UserSkillMagnumBreakMissedFn, UserSkillBowlingBashEnemyFn, UserSkillBowlingBashMissedFn, EnemyAttackReflectUserFn, UserLifeStealEnemyFn, UserSkillLifeStealEnemyFn, UserSkillKodokuEnemyFn, UserSkillMagnumBreakFn, UserSkillHeadCrushFn, UserSkillVitalStrikeFn} from './actions'
//ITEMS
import { UseRedPotionFn, UseOrangePotionFn, UseYellowPotionFn, UseWhitePotionFn, UseAnniversaryCakeFn, UseMastelaFruitFn, UseBluePotionFn, UseYggdrasilBerryFn } from './actions'
//QUEST
import { ProgressQuestDialogFn } from './actions'
//Win ETC Items
import { WinJellopyFn , WinEmptyBottleFn , WinStickyMucusFn, WinFeatherFn , WinCloverFn } from './actions'
import { WinGrasshoppersLegFn, WinSnailsShellFn, WinShellFn ,WinGarletFn } from './actions'
import { WinEmperiumFn, WinFabricFn } from './actions'
import { WinFourLeafCloverFn, WinGlassBeadFn, WinOpalFn} from './actions'
import { WinDecayedNailFn } from './actions'
import { WinSkelBoneFn } from './actions'
import { WinDaenggieFn , WinShortDaenggieFn , WinOldPortraitFn} from './actions'
import { WinBlackHairFn , WinAuthoritativeBadgeFn } from './actions'
import { WinNineTailsFn } from './actions'
import { WinPoisonSporeFn, WinMushroomSporeFn, WinKarvodailnirolFn} from './actions'
import { WinJackPumpkinFn, WinZargonFn} from './actions'
import { WinHorrendousMouthFn, WinMementoFn} from './actions'
import { WinGoldenHairFn } from './actions'
import { WinRedGemstoneFn } from './actions'
import { WinCursedRubyFn } from './actions'
import { WinDiamondFn } from './actions'
import { WinEyeOfHellionFn } from './actions'
import { LordKahosHornFn } from './actions'
import { WinGoldFn , WinAmethystFn, WinTongueFn, WinAntJawFn , WinMysticFrozenFn , WinAquamarineFn } from './actions'
//PATH UNLOCK
import { GotoPoringIslandPath1Fn, GotoPoringIslandPath2Fn } from './actions'
import { GotoPoringIslandPath3Fn } from './actions'
import { GotoPoringIslandPath5Fn } from './actions'
import { GotoPayonCave1FPath1Fn } from './actions'
import { GotoPayonCave2FPath1Fn, GotoPayonCave2FPath2Fn, GotoPayonCave2FPath5Fn , GotoPayonCave2FPath7Fn , GotoPayonCave2FPath8Fn, GotoPayonCave3FPath1Fn, GotoPayonCave3FPath2Fn, GotoPayonCave3FPath4Fn } from './actions'
import { GotoGeffenDungeon1FPath1Fn, GotoGeffenDungeon1FPath3Fn, GotoGeffenDungeon2FPath1Fn, GotoGeffenDungeon2FPath2Fn, GotoGeffenDungeon2FPath4Fn, GotoGeffenDungeon2FPath6Fn, GotoGeffenDungeon3FPath1Fn , GotoGeffenDungeon3FPath2Fn , GotoGeffenDungeon3FPath4Fn , GotoGeffenDungeon4FPath1Fn } from './actions'
import { GotoChallengeTowerPath1Fn, GotoChallengeTowerPath2Fn, GotoChallengeTowerPath3Fn} from './actions'
//cutsence
import {cutsceneFiveFn, cutsceneSevenFn} from './actions'

import './css/mapBattle.css'
import './index.css'
import PoringIsland from './PoringIsland'
import PayonCave1F from './PayonCave1F'
import GeffenDungeon1F from './GeffenDungeon1F'
import GeffenDungeon3F from './GeffenDungeon3F'
import WorldMap from './WorldMap'
import ChallengeTower from './ChallengeTower'
//PoringIsland
import Poring from './img/Monster/Poring.gif'
import PoringHit from './img/Monster/PoringHit.png'
import PoringAttack from './img/Monster/PoringAttack.gif'
import PoringDead from './img/Monster/PoringDead.png'
import Lunatic from './img/Monster/Lunatic.gif'
import LunaticHit from './img/Monster/LunaticHit.png'
import LunaticAttack from './img/Monster/LunaticAttack.gif'
import LunaticDead from './img/Monster/LunaticDead.png'

import Rocker from './img/Monster/Rocker.gif'
import RockerHit from './img/Monster/RockerHit.png'
import RockerAttack from './img/Monster/RockerAttack.gif'
import RockerDead from './img/Monster/RockerDead.png'
import Ambernite from './img/Monster/Ambernite.gif'
import AmberniteHit from './img/Monster/AmberniteHit.png'
import AmberniteAttack from './img/Monster/AmberniteAttack.gif'
import AmberniteDead from './img/Monster/AmberniteDead.png'

import Ghostring from './img/Monster/Ghostring.gif'
import GhostringHit from './img/Monster/GhostringHit.png'
import GhostringAttack from './img/Monster/GhostringAttack.gif'
import GhostringDead from './img/Monster/GhostringDead.png'

import Eclipse from './img/Monster/Eclipse.gif'
import EclipseHit from './img/Monster/EclipseHit.png'
import EclipseAttack from './img/Monster/EclipseAttack.gif'
import EclipseDead from './img/Monster/EclipseDead.png'
//PayonCave
import Zombie from './img/Monster/Zombie.gif'
import ZombieHit from './img/Monster/ZombieHit.png'
import ZombieAttack from './img/Monster/ZombieAttack.gif'
import ZombieDead from './img/Monster/ZombieDead.png'

import Skeleton from './img/Monster/Skeleton.gif'
import SkeletonHit from './img/Monster/SkeletonHit.png'
import SkeletonAttack from './img/Monster/SkeletonAttack.gif'
import SkeletonDead from './img/Monster/SkeletonDead.png'
//PayonCave2F
import SoldierSkeleton from './img/Monster/Soldierskeleton.gif'
import SoldierSkeletonHit from './img/Monster/SoldierskeletonHit.png'
import SoldierSkeletonAttack from './img/Monster/SoldierskeletonAttack.gif'
import SoldierSkeletonDead from './img/Monster/SoldierskeletonDead.png'

import ArcherSkeleton from './img/Monster/Archerskeleton.gif'
import ArcherSkeletonHit from './img/Monster/ArcherskeletonHit.png'
import ArcherSkeletonAttack from './img/Monster/ArcherskeletonAttack.gif'
import ArcherSkeletonDead from './img/Monster/ArcherskeletonDead.png'

import Munak from './img/Monster/Munak.gif'
import MunakHit from './img/Monster/MunakHit.png'
import MunakAttack from './img/Monster/MunakAttack.gif'
import MunakDead from './img/Monster/MunakDead.png'

import Bongun from './img/Monster/Bongun.gif'
import BongunHit from './img/Monster/BongunHit.png'
import BongunAttack from './img/Monster/BongunAttack.gif'
import BongunDead from './img/Monster/BongunDead.png'

import Sohee from './img/Monster/Sohee.gif'
import SoheeHit from './img/Monster/SoheeHit.png'
import SoheeAttack from './img/Monster/SoheeAttack.gif'
import SoheeDead from './img/Monster/SoheeDead.png'

import Whisper from './img/Monster/Whisper.gif'
import WhisperHit from './img/Monster/WhisperHit.png'
import WhisperAttack from './img/Monster/WhisperAttack.gif'
import WhisperDead from './img/Monster/WhisperDead.png'

import GiantWhisper from './img/Monster/GiantWhisper.gif'
import GiantWhisperHit from './img/Monster/GiantWhisperHit.png'
import GiantWhisperAttack from './img/Monster/GiantWhisperAttack.gif'
import GiantWhisperDead from './img/Monster/GiantWhisperDead.png'

import Wolyafa from './img/Monster/Wolyafa.gif'
import WolyafaHit from './img/Monster/WolyafaHit.png'
import WolyafaAttack from './img/Monster/WolyafaAttack.gif'
import WolyafaDead from './img/Monster/WolyafaDead.png'

import Poporing from './img/Monster/Poporing.gif'
import PoporingHit from './img/Monster/PoporingHit.png'
import PoporingAttack from './img/Monster/PoporingAttack.gif'
import PoporingDead from './img/Monster/PoporingDead.png'

import PoisonSpore from './img/Monster/Poisonspore.gif'
import PoisonSporeHit from './img/Monster/PoisonsporeHit.png'
import PoisonSporeAttack from './img/Monster/PoisonsporeAttack.gif'
import PoisonSporeDead from './img/Monster/PoisonsporeDead.png'

import Jakk from './img/Monster/Jakk.gif'
import JakkHit from './img/Monster/JakkHit.png'
import JakkAttack from './img/Monster/JakkAttack.gif'
import JakkDead from './img/Monster/JakkDead.png'

import Ghoul from './img/Monster/Ghoul.gif'
import GhoulHit from './img/Monster/GhoulHit.png'
import GhoulAttack from './img/Monster/GhoulAttack.gif'
import GhoulDead from './img/Monster/GhoulDead.png'

import Marionette from './img/Monster/Marionette.gif'
import MarionetteHit from './img/Monster/MarionetteHit.png'
import MarionetteAttack from './img/Monster/MarionetteAttack.gif'
import MarionetteDead from './img/Monster/MarionetteDead.png'

import Wraith from './img/Monster/Wraith.gif'
import WraithHit from './img/Monster/WraithHit.png'
import WraithAttack from './img/Monster/WraithAttack.gif'
import WraithDead from './img/Monster/WraithDead.png'

import Doppelganger from './img/Monster/Doppelganger.png'
import DoppelgangerHit from './img/Monster/DoppelgangerHit.png'
import DoppelgangerAttack from './img/Monster/DoppelgangerAttack.gif'
import DoppelgangerDead from './img/Monster/DoppelgangerDead.png'

import Wraithdead from './img/Monster/Wraithdead.gif'
import WraithdeadHit from './img/Monster/WraithdeadHit.png'
import WraithdeadAttack from './img/Monster/WraithdeadAttack.gif'
import WraithdeadDead from './img/Monster/WraithdeadDead.png'

import HellionRevenant from './img/Monster/HellionRevenant.gif'
import HellionRevenantHit from './img/Monster/HellionRevenantHit.png'
import HellionRevenantAttack from './img/Monster/HellionRevenantAttack.gif'
import HellionRevenantDead from './img/Monster/HellionRevenantDead.png'

import Baphomet from './img/Monster/Baphomet.gif'
import BaphometHit from './img/Monster/BaphometHit.png'
import BaphometAttack from './img/Monster/BaphometAttack.gif'
import BaphometDead from './img/Monster/BaphometDead.png'

import GoldenThiefBug from './img/Monster/GoldenThiefBug.gif'
import GoldenThiefBugHit from './img/Monster/GoldenThiefBugHit.png'
import GoldenThiefBugAttack from './img/Monster/GoldenThiefBugAttack.gif'
import GoldenThiefBugDead from './img/Monster/GoldenThiefBugDead.png'

import Drake from './img/Monster/Drake.gif'
import DrakeHit from './img/Monster/DrakeHit.png'
import DrakeAttack from './img/Monster/DrakeAttack.gif'
import DrakeDead from './img/Monster/DrakeDead.png'

import Phreeoni from './img/Monster/Phreeoni.gif'
import PhreeoniHit from './img/Monster/PhreeoniHit.png'
import PhreeoniAttack from './img/Monster/PhreeoniAttack.gif'
import PhreeoniDead from './img/Monster/PhreeoniDead.png'

import StormyKnight from './img/Monster/StormyKnight.gif'
import StormyKnightHit from './img/Monster/StormyKnightHit.png'
import StormyKnightAttack from './img/Monster/StormyKnightAttack.gif'
import StormyKnightDead from './img/Monster/StormyKnightDead.png'

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

//ITEMS
import RedPotion from './img/Item/RedPotion.gif'
import OrangePotion from './img/Item/OrangePotion.gif'
import YellowPotion from './img/Item/YellowPotion.gif'
import WhitePotion from './img/Item/WhitePotion.gif'
import AnniversaryCake from './img/Item/AnniversaryCake.gif'
import MastelaFruit from './img/Item/MastelaFruit.gif'
import BluePotion from './img/Item/BluePotion.gif'
import YggdrasilBerry from './img/Item/YggdrasilBerry.gif'

//stats
import BurningEffect from './img/Stats/Burning.png'
import PoisonEffect from './img/Stats/Poison.png'
import StunEffect from './img/Stats/Stun.png'
import SlowEffect from './img/Stats/Slow.png'
import BleedingEffect from './img/Stats/Bleeding.png'
import DefenceDownEffect from './img/Stats/DefDecrease.png'

//buff
import QuickenEffect from './img/Stats/TwoHandQuicken.png'
import FireWeaponEffect from './img/Stats/Fire.png'

import UserOnHitPost from './img/Character/UserOnHitPost1.gif'
import UserIsDyingPost from './img/Character/UserDyingPost1.png'
import UserIsDeadPost from './img/Character/UserDeadPost1.png'
import UserChannelPost from './img/Character/UserChannel1.png'
import UserPickUp from './img/Character/UserPickUp1.gif'

// EMPTY HAND
import UserBattleEmptyHand1 from './img/Character/UserBattlePostEmptyHand1.gif'
import UserAttackEmptyHand1 from './img/Character/UserAttackPostEmptyHand1.gif'
import UserDefendEmptyHand1 from './img/Character/UserDefendPostEmptyHand1.gif'
// KATANA
import UserBattlePostKatana1 from './img/Character/UserBattlePostKatana1.gif'
import UserAttackPostKatana1 from './img/Character/UserAttackPostKatana1.gif'
import UserDefendPostKatana1 from './img/Character/UserDefendPostKatana1.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1 from './img/Character/UserBattlePostBastardSword1.gif'
import UserAttackPostBastardSword1 from './img/Character/UserAttackPostBastardSword1.gif'
import UserDefendPostBastardSword1 from './img/Character/UserDefendPostBastardSword1.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1 from './img/Character/UserBattlePostGaiaSword1.gif'
import UserAttackPostGaiaSword1 from './img/Character/UserAttackPostGaiaSword1.gif'
import UserDefendPostGaiaSword1 from './img/Character/UserDefendPostGaiaSword1.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1 from './img/Character/UserBattlePostTwinEdgeofNaghtSieger1.gif'
import UserAttackPostTwinEdgeofNaghtSieger1 from './img/Character/UserAttackPostTwinEdgeofNaghtSieger1.gif'
import UserDefendPostTwinEdgeofNaghtSieger1 from './img/Character/UserDefendPostTwinEdgeofNaghtSieger1.gif'
//Violet Fear
import UserBattlePostVioletFear1 from './img/Character/UserBattlePostVioletFear1.gif'
import UserAttackPostVioletFear1 from './img/Character/UserAttackPostVioletFear1.gif'
import UserDefendPostVioletFear1 from './img/Character/UserDefendPostVioletFear1.gif'

//LordKahosHorn
import UserOnHitPost_LordKahosHorn from './img/Character/LordKahosHorn/UserOnHitPost1_LordKahosHorn.gif'
import UserIsDyingPost_LordKahosHorn from './img/Character/LordKahosHorn/UserDyingPost1_LordKahosHorn.png'
import UserIsDeadPost_LordKahosHorn from './img/Character/LordKahosHorn/UserDeadPost1_LordKahosHorn.png'
import UserChannelPost_LordKahosHorn from './img/Character/LordKahosHorn/UserChannel1_LordKahosHorn.png'
import UserPickUp_LordKahosHorn from './img/Character/LordKahosHorn/UserPickUp1_LordKahosHorn.gif'
// EMPTY HAND
import UserBattlePostEmptyHand1_LordKahosHorn from './img/Character/LordKahosHorn/UserBattlePostEmptyHand1_LordKahosHorn.gif'
import UserAttackPostEmptyHand1_LordKahosHorn from './img/Character/LordKahosHorn/UserAttackPostEmptyHand1_LordKahosHorn.gif'
import UserDefendPostEmptyHand1_LordKahosHorn from './img/Character/LordKahosHorn/UserDefendPostEmptyHand1_LordKahosHorn.gif'
// KATANA
import UserBattlePostKatana1_LordKahosHorn from './img/Character/LordKahosHorn/UserBattlePostKatana1_LordKahosHorn.gif'
import UserAttackPostKatana1_LordKahosHorn from './img/Character/LordKahosHorn/UserAttackPostKatana1_LordKahosHorn.gif'
import UserDefendPostKatana1_LordKahosHorn from './img/Character/LordKahosHorn/UserDefendPostKatana1_LordKahosHorn.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1_LordKahosHorn from './img/Character/LordKahosHorn/UserBattlePostBastardSword1_LordKahosHorn.gif'
import UserAttackPostBastardSword1_LordKahosHorn from './img/Character/LordKahosHorn/UserAttackPostBastardSword1_LordKahosHorn.gif'
import UserDefendPostBastardSword1_LordKahosHorn from './img/Character/LordKahosHorn/UserDefendPostBastardSword1_LordKahosHorn.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1_LordKahosHorn from './img/Character/LordKahosHorn/UserBattlePostGaiaSword1_LordKahosHorn.gif'
import UserAttackPostGaiaSword1_LordKahosHorn from './img/Character/LordKahosHorn/UserAttackPostGaiaSword1_LordKahosHorn.gif'
import UserDefendPostGaiaSword1_LordKahosHorn from './img/Character/LordKahosHorn/UserDefendPostGaiaSword1_LordKahosHorn.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1_LordKahosHorn from './img/Character/LordKahosHorn/UserBattlePostTwinEdgeofNaghtSieger1_LordKahosHorn.gif'
import UserAttackPostTwinEdgeofNaghtSieger1_LordKahosHorn from './img/Character/LordKahosHorn/UserAttackPostTwinEdgeofNaghtSieger1_LordKahosHorn.gif'
import UserDefendPostTwinEdgeofNaghtSieger1_LordKahosHorn from './img/Character/LordKahosHorn/UserDefendPostTwinEdgeofNaghtSieger1_LordKahosHorn.gif'
//Violet Fear
import UserBattlePostVioletFear1_LordKahosHorn from './img/Character/LordKahosHorn/UserBattlePostVioletFear1_LordKahosHorn.gif'
import UserAttackPostVioletFear1_LordKahosHorn from './img/Character/LordKahosHorn/UserAttackPostVioletFear1_LordKahosHorn.gif'
import UserDefendPostVioletFear1_LordKahosHorn from './img/Character/LordKahosHorn/UserDefendPostVioletFear1_LordKahosHorn.gif'

//TeddybearHat
import UserOnHitPost_TeddybearHat from './img/Character/TeddybearHat/UserOnHitPost1_TeddybearHat.gif'
import UserIsDyingPost_TeddybearHat from './img/Character/TeddybearHat/UserDyingPost1_TeddybearHat.png'
import UserIsDeadPost_TeddybearHat from './img/Character/TeddybearHat/UserDeadPost1_TeddybearHat.png'
import UserChannelPost_TeddybearHat from './img/Character/TeddybearHat/UserChannel1_TeddybearHat.png'
import UserPickUp_TeddybearHat from './img/Character/TeddybearHat/UserPickUp1_TeddybearHat.gif'
// EMPTY HAND
import UserBattlePostEmptyHand1_TeddybearHat from './img/Character/TeddybearHat/UserBattlePostEmptyHand1_TeddybearHat.gif'
import UserAttackPostEmptyHand1_TeddybearHat from './img/Character/TeddybearHat/UserAttackPostEmptyHand1_TeddybearHat.gif'
import UserDefendPostEmptyHand1_TeddybearHat from './img/Character/TeddybearHat/UserDefendPostEmptyHand1_TeddybearHat.gif'
// KATANA
import UserBattlePostKatana1_TeddybearHat from './img/Character/TeddybearHat/UserBattlePostKatana1_TeddybearHat.gif'
import UserAttackPostKatana1_TeddybearHat from './img/Character/TeddybearHat/UserAttackPostKatana1_TeddybearHat.gif'
import UserDefendPostKatana1_TeddybearHat from './img/Character/TeddybearHat/UserDefendPostKatana1_TeddybearHat.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1_TeddybearHat from './img/Character/TeddybearHat/UserBattlePostBastardSword1_TeddybearHat.gif'
import UserAttackPostBastardSword1_TeddybearHat from './img/Character/TeddybearHat/UserAttackPostBastardSword1_TeddybearHat.gif'
import UserDefendPostBastardSword1_TeddybearHat from './img/Character/TeddybearHat/UserDefendPostBastardSword1_TeddybearHat.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1_TeddybearHat from './img/Character/TeddybearHat/UserBattlePostGaiaSword1_TeddybearHat.gif'
import UserAttackPostGaiaSword1_TeddybearHat from './img/Character/TeddybearHat/UserAttackPostGaiaSword1_TeddybearHat.gif'
import UserDefendPostGaiaSword1_TeddybearHat from './img/Character/TeddybearHat/UserDefendPostGaiaSword1_TeddybearHat.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1_TeddybearHat from './img/Character/TeddybearHat/UserBattlePostTwinEdgeofNaghtSieger1_TeddybearHat.gif'
import UserAttackPostTwinEdgeofNaghtSieger1_TeddybearHat from './img/Character/TeddybearHat/UserAttackPostTwinEdgeofNaghtSieger1_TeddybearHat.gif'
import UserDefendPostTwinEdgeofNaghtSieger1_TeddybearHat from './img/Character/TeddybearHat/UserDefendPostTwinEdgeofNaghtSieger1_TeddybearHat.gif'
//Violet Fear
import UserBattlePostVioletFear1_TeddybearHat from './img/Character/TeddybearHat/UserBattlePostVioletFear1_TeddybearHat.gif'
import UserAttackPostVioletFear1_TeddybearHat from './img/Character/TeddybearHat/UserAttackPostVioletFear1_TeddybearHat.gif'
import UserDefendPostVioletFear1_TeddybearHat from './img/Character/TeddybearHat/UserDefendPostVioletFear1_TeddybearHat.gif'

//Crown
import UserOnHitPost_Crown from './img/Character/Crown/UserOnHitPost1_Crown.gif'
import UserIsDyingPost_Crown from './img/Character/Crown/UserDyingPost1_Crown.png'
import UserIsDeadPost_Crown from './img/Character/Crown/UserDeadPost1_Crown.png'
import UserChannelPost_Crown from './img/Character/Crown/UserChannel1_Crown.png'
import UserPickUp_Crown from './img/Character/Crown/UserPickUp1_Crown.gif'
// EMPTY HAND
import UserBattlePostEmptyHand1_Crown from './img/Character/Crown/UserBattlePostEmptyHand1_Crown.gif'
import UserAttackPostEmptyHand1_Crown from './img/Character/Crown/UserAttackPostEmptyHand1_Crown.gif'
import UserDefendPostEmptyHand1_Crown from './img/Character/Crown/UserDefendPostEmptyHand1_Crown.gif'
// KATANA
import UserBattlePostKatana1_Crown from './img/Character/Crown/UserBattlePostKatana1_Crown.gif'
import UserAttackPostKatana1_Crown from './img/Character/Crown/UserAttackPostKatana1_Crown.gif'
import UserDefendPostKatana1_Crown from './img/Character/Crown/UserDefendPostKatana1_Crown.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1_Crown from './img/Character/Crown/UserBattlePostBastardSword1_Crown.gif'
import UserAttackPostBastardSword1_Crown from './img/Character/Crown/UserAttackPostBastardSword1_Crown.gif'
import UserDefendPostBastardSword1_Crown from './img/Character/Crown/UserDefendPostBastardSword1_Crown.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1_Crown from './img/Character/Crown/UserBattlePostGaiaSword1_Crown.gif'
import UserAttackPostGaiaSword1_Crown from './img/Character/Crown/UserAttackPostGaiaSword1_Crown.gif'
import UserDefendPostGaiaSword1_Crown from './img/Character/Crown/UserDefendPostGaiaSword1_Crown.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1_Crown from './img/Character/Crown/UserBattlePostTwinEdgeofNaghtSieger1_Crown.gif'
import UserAttackPostTwinEdgeofNaghtSieger1_Crown from './img/Character/Crown/UserAttackPostTwinEdgeofNaghtSieger1_Crown.gif'
import UserDefendPostTwinEdgeofNaghtSieger1_Crown from './img/Character/Crown/UserDefendPostTwinEdgeofNaghtSieger1_Crown.gif'
//Violet Fear
import UserBattlePostVioletFear1_Crown from './img/Character/Crown/UserBattlePostVioletFear1_Crown.gif'
import UserAttackPostVioletFear1_Crown from './img/Character/Crown/UserAttackPostVioletFear1_Crown.gif'
import UserDefendPostVioletFear1_Crown from './img/Character/Crown/UserDefendPostVioletFear1_Crown.gif'

//Helm
import UserOnHitPost_Helm from './img/Character/Helm/UserOnHitPost1_Helm.gif'
import UserIsDyingPost_Helm from './img/Character/Helm/UserDyingPost1_Helm.png'
import UserIsDeadPost_Helm from './img/Character/Helm/UserDeadPost1_Helm.png'
import UserChannelPost_Helm from './img/Character/Helm/UserChannel1_Helm.png'
import UserPickUp_Helm from './img/Character/Helm/UserPickUp1_Helm.gif'
// EMPTY HAND
import UserBattlePostEmptyHand1_Helm from './img/Character/Helm/UserBattlePostEmptyHand1_Helm.gif'
import UserAttackPostEmptyHand1_Helm from './img/Character/Helm/UserAttackPostEmptyHand1_Helm.gif'
import UserDefendPostEmptyHand1_Helm from './img/Character/Helm/UserDefendPostEmptyHand1_Helm.gif'
// KATANA
import UserBattlePostKatana1_Helm from './img/Character/Helm/UserBattlePostKatana1_Helm.gif'
import UserAttackPostKatana1_Helm from './img/Character/Helm/UserAttackPostKatana1_Helm.gif'
import UserDefendPostKatana1_Helm from './img/Character/Helm/UserDefendPostKatana1_Helm.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1_Helm from './img/Character/Helm/UserBattlePostBastardSword1_Helm.gif'
import UserAttackPostBastardSword1_Helm from './img/Character/Helm/UserAttackPostBastardSword1_Helm.gif'
import UserDefendPostBastardSword1_Helm from './img/Character/Helm/UserDefendPostBastardSword1_Helm.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1_Helm from './img/Character/Helm/UserBattlePostGaiaSword1_Helm.gif'
import UserAttackPostGaiaSword1_Helm from './img/Character/Helm/UserAttackPostGaiaSword1_Helm.gif'
import UserDefendPostGaiaSword1_Helm from './img/Character/Helm/UserDefendPostGaiaSword1_Helm.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1_Helm from './img/Character/Helm/UserBattlePostTwinEdgeofNaghtSieger1_Helm.gif'
import UserAttackPostTwinEdgeofNaghtSieger1_Helm from './img/Character/Helm/UserAttackPostTwinEdgeofNaghtSieger1_Helm.gif'
import UserDefendPostTwinEdgeofNaghtSieger1_Helm from './img/Character/Helm/UserDefendPostTwinEdgeofNaghtSieger1_Helm.gif'
//Violet Fear
import UserBattlePostVioletFear1_Helm from './img/Character/Helm/UserBattlePostVioletFear1_Helm.gif'
import UserAttackPostVioletFear1_Helm from './img/Character/Helm/UserAttackPostVioletFear1_Helm.gif'
import UserDefendPostVioletFear1_Helm from './img/Character/Helm/UserDefendPostVioletFear1_Helm.gif'

//PandaHat
import UserOnHitPost_PandaHat from './img/Character/PandaHat/UserOnHitPost1_PandaHat.gif'
import UserIsDyingPost_PandaHat from './img/Character/PandaHat/UserDyingPost1_PandaHat.png'
import UserIsDeadPost_PandaHat from './img/Character/PandaHat/UserDeadPost1_PandaHat.png'
import UserChannelPost_PandaHat from './img/Character/PandaHat/UserChannel1_PandaHat.png'
import UserPickUp_PandaHat from './img/Character/PandaHat/UserPickUp1_PandaHat.gif'
// EMPTY HAND
import UserBattlePostEmptyHand1_PandaHat from './img/Character/PandaHat/UserBattlePostEmptyHand1_PandaHat.gif'
import UserAttackPostEmptyHand1_PandaHat from './img/Character/PandaHat/UserAttackPostEmptyHand1_PandaHat.gif'
import UserDefendPostEmptyHand1_PandaHat from './img/Character/PandaHat/UserDefendPostEmptyHand1_PandaHat.gif'
// KATANA
import UserBattlePostKatana1_PandaHat from './img/Character/PandaHat/UserBattlePostKatana1_PandaHat.gif'
import UserAttackPostKatana1_PandaHat from './img/Character/PandaHat/UserAttackPostKatana1_PandaHat.gif'
import UserDefendPostKatana1_PandaHat from './img/Character/PandaHat/UserDefendPostKatana1_PandaHat.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1_PandaHat from './img/Character/PandaHat/UserBattlePostBastardSword1_PandaHat.gif'
import UserAttackPostBastardSword1_PandaHat from './img/Character/PandaHat/UserAttackPostBastardSword1_PandaHat.gif'
import UserDefendPostBastardSword1_PandaHat from './img/Character/PandaHat/UserDefendPostBastardSword1_PandaHat.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1_PandaHat from './img/Character/PandaHat/UserBattlePostGaiaSword1_PandaHat.gif'
import UserAttackPostGaiaSword1_PandaHat from './img/Character/PandaHat/UserAttackPostGaiaSword1_PandaHat.gif'
import UserDefendPostGaiaSword1_PandaHat from './img/Character/PandaHat/UserDefendPostGaiaSword1_PandaHat.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1_PandaHat from './img/Character/PandaHat/UserBattlePostTwinEdgeofNaghtSieger1_PandaHat.gif'
import UserAttackPostTwinEdgeofNaghtSieger1_PandaHat from './img/Character/PandaHat/UserAttackPostTwinEdgeofNaghtSieger1_PandaHat.gif'
import UserDefendPostTwinEdgeofNaghtSieger1_PandaHat from './img/Character/PandaHat/UserDefendPostTwinEdgeofNaghtSieger1_PandaHat.gif'
//Violet Fear
import UserBattlePostVioletFear1_PandaHat from './img/Character/PandaHat/UserBattlePostVioletFear1_PandaHat.gif'
import UserAttackPostVioletFear1_PandaHat from './img/Character/PandaHat/UserAttackPostVioletFear1_PandaHat.gif'
import UserDefendPostVioletFear1_PandaHat from './img/Character/PandaHat/UserDefendPostVioletFear1_PandaHat.gif'

//ChefHat
import UserOnHitPost_ChefHat from './img/Character/ChefHat/UserOnHitPost1_ChefHat.gif'
import UserIsDyingPost_ChefHat from './img/Character/ChefHat/UserDyingPost1_ChefHat.png'
import UserIsDeadPost_ChefHat from './img/Character/ChefHat/UserDeadPost1_ChefHat.png'
import UserChannelPost_ChefHat from './img/Character/ChefHat/UserChannel1_ChefHat.png'
import UserPickUp_ChefHat from './img/Character/ChefHat/UserPickUp1_ChefHat.gif'
// EMPTY HAND
import UserBattlePostEmptyHand1_ChefHat from './img/Character/ChefHat/UserBattlePostEmptyHand1_ChefHat.gif'
import UserAttackPostEmptyHand1_ChefHat from './img/Character/ChefHat/UserAttackPostEmptyHand1_ChefHat.gif'
import UserDefendPostEmptyHand1_ChefHat from './img/Character/ChefHat/UserDefendPostEmptyHand1_ChefHat.gif'
// KATANA
import UserBattlePostKatana1_ChefHat from './img/Character/ChefHat/UserBattlePostKatana1_ChefHat.gif'
import UserAttackPostKatana1_ChefHat from './img/Character/ChefHat/UserAttackPostKatana1_ChefHat.gif'
import UserDefendPostKatana1_ChefHat from './img/Character/ChefHat/UserDefendPostKatana1_ChefHat.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1_ChefHat from './img/Character/ChefHat/UserBattlePostBastardSword1_ChefHat.gif'
import UserAttackPostBastardSword1_ChefHat from './img/Character/ChefHat/UserAttackPostBastardSword1_ChefHat.gif'
import UserDefendPostBastardSword1_ChefHat from './img/Character/ChefHat/UserDefendPostBastardSword1_ChefHat.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1_ChefHat from './img/Character/ChefHat/UserBattlePostGaiaSword1_ChefHat.gif'
import UserAttackPostGaiaSword1_ChefHat from './img/Character/ChefHat/UserAttackPostGaiaSword1_ChefHat.gif'
import UserDefendPostGaiaSword1_ChefHat from './img/Character/ChefHat/UserDefendPostGaiaSword1_ChefHat.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1_ChefHat from './img/Character/ChefHat/UserBattlePostTwinEdgeofNaghtSieger1_ChefHat.gif'
import UserAttackPostTwinEdgeofNaghtSieger1_ChefHat from './img/Character/ChefHat/UserAttackPostTwinEdgeofNaghtSieger1_ChefHat.gif'
import UserDefendPostTwinEdgeofNaghtSieger1_ChefHat from './img/Character/ChefHat/UserDefendPostTwinEdgeofNaghtSieger1_ChefHat.gif'
//Violet Fear
import UserBattlePostVioletFear1_ChefHat from './img/Character/ChefHat/UserBattlePostVioletFear1_ChefHat.gif'
import UserAttackPostVioletFear1_ChefHat from './img/Character/ChefHat/UserAttackPostVioletFear1_ChefHat.gif'
import UserDefendPostVioletFear1_ChefHat from './img/Character/ChefHat/UserDefendPostVioletFear1_ChefHat.gif'

//SantaPoringHat
import UserOnHitPost_SantaPoringHat from './img/Character/SantaPoringHat/UserOnHitPost1_SantaPoringHat.gif'
import UserIsDyingPost_SantaPoringHat from './img/Character/SantaPoringHat/UserDyingPost1_SantaPoringHat.png'
import UserIsDeadPost_SantaPoringHat from './img/Character/SantaPoringHat/UserDeadPost1_SantaPoringHat.png'
import UserChannelPost_SantaPoringHat from './img/Character/SantaPoringHat/UserChannel1_SantaPoringHat.png'
import UserPickUp_SantaPoringHat from './img/Character/SantaPoringHat/UserPickUp1_SantaPoringHat.gif'
// EMPTY HAND
import UserBattlePostEmptyHand1_SantaPoringHat from './img/Character/SantaPoringHat/UserBattlePostEmptyHand1_SantaPoringHat.gif'
import UserAttackPostEmptyHand1_SantaPoringHat from './img/Character/SantaPoringHat/UserAttackPostEmptyHand1_SantaPoringHat.gif'
import UserDefendPostEmptyHand1_SantaPoringHat from './img/Character/SantaPoringHat/UserDefendPostEmptyHand1_SantaPoringHat.gif'
// KATANA
import UserBattlePostKatana1_SantaPoringHat from './img/Character/SantaPoringHat/UserBattlePostKatana1_SantaPoringHat.gif'
import UserAttackPostKatana1_SantaPoringHat from './img/Character/SantaPoringHat/UserAttackPostKatana1_SantaPoringHat.gif'
import UserDefendPostKatana1_SantaPoringHat from './img/Character/SantaPoringHat/UserDefendPostKatana1_SantaPoringHat.gif'
// BASTARD SWORD
import UserBattlePostBastardSword1_SantaPoringHat from './img/Character/SantaPoringHat/UserBattlePostBastardSword1_SantaPoringHat.gif'
import UserAttackPostBastardSword1_SantaPoringHat from './img/Character/SantaPoringHat/UserAttackPostBastardSword1_SantaPoringHat.gif'
import UserDefendPostBastardSword1_SantaPoringHat from './img/Character/SantaPoringHat/UserDefendPostBastardSword1_SantaPoringHat.gif'
// GAIA SWORD
import UserBattlePostGaiaSword1_SantaPoringHat from './img/Character/SantaPoringHat/UserBattlePostGaiaSword1_SantaPoringHat.gif'
import UserAttackPostGaiaSword1_SantaPoringHat from './img/Character/SantaPoringHat/UserAttackPostGaiaSword1_SantaPoringHat.gif'
import UserDefendPostGaiaSword1_SantaPoringHat from './img/Character/SantaPoringHat/UserDefendPostGaiaSword1_SantaPoringHat.gif'
//Twin Edge of Naght Sieger
import UserBattlePostTwinEdgeofNaghtSieger1_SantaPoringHat from './img/Character/SantaPoringHat/UserBattlePostTwinEdgeofNaghtSieger1_SantaPoringHat.gif'
import UserAttackPostTwinEdgeofNaghtSieger1_SantaPoringHat from './img/Character/SantaPoringHat/UserAttackPostTwinEdgeofNaghtSieger1_SantaPoringHat.gif'
import UserDefendPostTwinEdgeofNaghtSieger1_SantaPoringHat from './img/Character/SantaPoringHat/UserDefendPostTwinEdgeofNaghtSieger1_SantaPoringHat.gif'
//Violet Fear
import UserBattlePostVioletFear1_SantaPoringHat from './img/Character/SantaPoringHat/UserBattlePostVioletFear1_SantaPoringHat.gif'
import UserAttackPostVioletFear1_SantaPoringHat from './img/Character/SantaPoringHat/UserAttackPostVioletFear1_SantaPoringHat.gif'
import UserDefendPostVioletFear1_SantaPoringHat from './img/Character/SantaPoringHat/UserDefendPostVioletFear1_SantaPoringHat.gif'


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

import LordKahosHorn from './img/Equipment/HeadGear/LordKahosHorn.gif'

import Gold from './img/Etc/GoldenThiefBug_Gold100.gif'

import Amethyst from './img/Etc/Drake_Amethyst100.gif'

import Tongue from './img/Etc/Phreeoni_Tongue100.gif'
import AntJaw from './img/Etc/Phreeoni_AntJaw90.gif'

import MysticFrozen from './img/Etc/StormyKnight_MysticFrozen90.gif'
import Aquamarine from './img/Etc/StormyKnight_Aquamarine80.gif'

import audioStrugardenNEOBattle1 from './audio/StrugardenNEOBattle1.mp3'
import audioLittleFighter2ThemeSong from './audio/LittleFighter2ThemeSong.mp3'
import audioPayonCave from './audio/Tobu-Infectious.mp3'
import audioRustyHeartsWings from './audio/RustyHeartsWings.mp3'
import audioGeffenDungeon from './audio/AriaTheScarletAmmoSoundtrackHysteriaMode.mp3'
import audioImaginaryFriends from './audio/Laszlo-ImaginaryFriends.mp3'
import audioRustyHeartsHeartbroken from './audio/RustyHeartsHeartbroken.mp3'
import audioDreamersDream from './audio/27DreamersDream.mp3'
import SwordHit from './audio/SoundEffect/SwordHit.wav'
import EmptyHandHit from './audio/SoundEffect/EmptyHandHit.wav'
import AttackMiss from './audio/SoundEffect/AttackMiss.wav'
import Heal from './audio/SoundEffect/HealSoundEffect.mp3'
import Poison from './audio/SoundEffect/PoisonSoundEffect.mp3'
import UserHit from './audio/SoundEffect/UserHit.wav'
import SkillBash from './audio/SoundEffect/BashSoundEffect.mp3'
import SkillMammonite from './audio/SoundEffect/MammoniteSoundEffect.mp3'
import SkillMagBreak from './audio/SoundEffect/MagnumBreakSoundEffect.mp3'
import SkillQuicken from './audio/SoundEffect/QuickenSoundEffect.mp3'
import SkillHeadCrush from './audio/SoundEffect/HeadCrushSoundEffect.mp3'
import SkillVitalStrike from './audio/SoundEffect/VitialStrikeSoundEffect.mp3'
import LevelUpSoundEffect from './audio/SoundEffect/LevelUpSoundEffect.mp3'
import UserBlock from './audio/SoundEffect/UserBlock.mp3'
const audioBGM = new Audio(audioStrugardenNEOBattle1);
const audioBGMBoss = new Audio(audioLittleFighter2ThemeSong);
const audioPayonCaveBGM = new Audio(audioPayonCave);
const audioPayonCaveBossBGM = new Audio(audioRustyHeartsWings);
const audioGeffenDungeonBGM = new Audio(audioGeffenDungeon);
const audioGeffenDungeonBossBGM = new Audio(audioImaginaryFriends);
const audioFinalBossBGM = new Audio(audioRustyHeartsHeartbroken);
const audioChallengeTowerBGM = new Audio(audioDreamersDream);
const audioHit = new Audio(SwordHit);
const audioEmptyHandHit = new Audio(EmptyHandHit);
const audioMiss = new Audio(AttackMiss);
const audioHeal = new Audio(Heal);
const audioPoison = new Audio(Poison);
const audioUserHit = new Audio(UserHit);
const audioSkillBash = new Audio(SkillBash);
const audioSkillMammonite = new Audio(SkillMammonite);
const audioSkillMagBreak = new Audio(SkillMagBreak);
const audioSkillQuicken = new Audio(SkillQuicken);
const audioSkillHeadCrush = new Audio(SkillHeadCrush);
const audioSkillVitalStrike = new Audio(SkillVitalStrike);
const audioLevelUp = new Audio(LevelUpSoundEffect);
const audioUserBlock = new Audio(UserBlock)

let clockBarObject = {
  userClockBar: 0,
  enemyClockBar: 0,
  enemyTwoClockBar: 0,
  enemyThreeClockBar: 0,
}
let Damage = 0;
let HPHeal = 0;
let SPHeal = 0;
let HPMagnificat = 0;
let SPMagnificat = 0;
let Reflecting = 0;
//Monster Random Number 0 1
let EnemyStunClockArr = [-1,-1,-1];
let EnemySlowClockArr = [-1,-1,-1];
let EnemyDefenceDebuffArr = [-1,-1,-1];
// let i = Math.round(Math.random())
let Uclock = 0;
let clockCheck = 0;
//Target Enemy
let enemyTarget;
let displayEnemyName;
let EnemyOneName;
let EnemyTwoName;
let EnemyThreeName;
//Chat reading
let listResult = document.getElementsByClassName('storyChat')[0];

//ETC Drops
//Obtain Once
let obtain = false;
const EtcBox = [
  {id: 0, num: 0, name: "Jellopy", img: Jellopy , percent: 0.7, Gain: WinJellopyFn},
  {id: 1, num: 0, name: "Empty Bottle", img: EmptyBottle , percent: 1, Gain: WinEmptyBottleFn},
  {id: 2, num: 0, name: "Sticky Mucus", img: StickyMucus , percent: 1, Gain: WinStickyMucusFn},
  {id: 3, num: 1, name: "Clover", img: Clover , percent: 0.65, Gain: WinCloverFn},
  {id: 4, num: 1, name: "Feather", img: Feather , percent: 0.1, Gain: WinFeatherFn},
  {id: 5, num: 2, name: "GrasshoppersLeg", img: GrasshoppersLeg , percent: 0.95, Gain: WinGrasshoppersLegFn},
  {id: 6, num: 3, name: "Snail`s Shell", img: SnailsShell , percent: 0.9, Gain: WinSnailsShellFn},
  {id: 7, num: 3, name: "Shell", img: Shell , percent: 0.3, Gain: WinShellFn},
  {id: 8, num: 3, name: "Garlet", img: Garlet , percent: 0.12, Gain: WinGarletFn},
  {id: 9, num: 4, name: "Emperium", img: Emperium , percent: 1, Gain: WinEmperiumFn},
  {id: 10, num: 4, name: "Fabric", img: Fabric , percent: 0.8, Gain: WinFabricFn},
  {id: 1000, num: 5, name: "Four Leaf Clover", img: FourLeafClover , percent: 1, Gain: WinFourLeafCloverFn},
  {id: 1001, num: 5, name: "Glass Bead", img: GlassBead , percent: 0.8, Gain: WinGlassBeadFn},
  {id: 1002, num: 5, name: "Opal", img: Opal , percent: 0.5, Gain: WinOpalFn},
  {id: 11, num: 6, name: "Decayed Nail", img: DecayedNail , percent: 0.9, Gain: WinDecayedNailFn},
  {id: 12, num: 6, name: "Sticky Mucus", img: StickyMucus , percent: 0.1, Gain: WinStickyMucusFn},
  {id: 13, num: 7, name: "Skel-Bone", img: SkelBone , percent: 0.08, Gain: WinSkelBoneFn },
  {id: 14, num: 7, name: "Jellopy", img: Jellopy , percent: 0.3, Gain: WinJellopyFn},
  {id: 15, num: 8, name: "Skel-Bone", img: SkelBone , percent: 0.55, Gain: WinSkelBoneFn },
  {id: 16, num: 9, name: "Skel-Bone", img: SkelBone , percent: 0.45, Gain: WinSkelBoneFn },
  {id: 17, num: 10, name: "Daenggie", img: Daenggie , percent: 0.9, Gain: WinDaenggieFn },
  {id: 18, num: 11, name: "Short Daenggie", img: ShortDaenggie , percent: 0.55, Gain: WinShortDaenggieFn },
  {id: 19, num: 11, name: "Old Portrait", img: OldPortrait , percent: 0.45, Gain: WinOldPortraitFn },
  {id: 20, num: 12, name: "Black Hair", img: BlackHair , percent: 0.9, Gain: WinBlackHairFn },
  {id: 21, num: 12, name: "Authoritative Badge", img: AuthoritativeBadge , percent: 0.1, Gain: WinAuthoritativeBadgeFn },
  {id: 22, num: 13, name: "Fabric", img: Fabric , percent: 0.55, Gain: WinFabricFn},
  {id: 22, num: 14, name: "Fabric", img: Fabric , percent: 0.8, Gain: WinFabricFn},
  {id: 23, num: 15, name: "Nine Tails", img: NineTails , percent: 0.55, Gain: WinNineTailsFn},
  {id: 24, num: 16, name: "Sticky Mucus", img: StickyMucus , percent: 0.55, Gain: WinStickyMucusFn},
  {id: 25, num: 16, name: "Garlet", img: Garlet , percent: 0.3, Gain: WinGarletFn},
  {id: 26, num: 17, name: "Poison Spore", img: PoisonSporeItem , percent: 0.9, Gain: WinPoisonSporeFn},
  {id: 27, num: 17, name: "Mushroom Spore", img: MushroomSpore , percent: 0.3, Gain: WinMushroomSporeFn},
  {id: 28, num: 17, name: "Karvodailnirol", img: Karvodailnirol , percent: 0.05, Gain: WinKarvodailnirolFn},
  {id: 29, num: 18, name: "JackPumpkin", img: JackPumpkin , percent: 0.9, Gain: WinJackPumpkinFn},
  {id: 30, num: 18, name: "Zargon", img: Zargon , percent: 0.09, Gain: WinZargonFn},
  {id: 31, num: 19, name: "HorrendousMouth", img: HorrendousMouth , percent: 0.9, Gain: WinHorrendousMouthFn},
  {id: 32, num: 19, name: "Memento", img: Memento , percent: 0.2, Gain: WinMementoFn},
  {id: 33, num: 20, name: "Golden Hair", img: GoldenHair , percent: 0.9, Gain: WinGoldenHairFn},
  {id: 34, num: 21, name: "Fabric", img: Fabric , percent: 0.55, Gain: WinFabricFn},
  {id: 35, num: 21, name: "Red Gemstone", img: RedGemstone , percent: 0.1, Gain: WinRedGemstoneFn},
  {id: 36, num: 22, name: "Cursed Ruby", img: CursedRuby , percent: 0.8, Gain: WinCursedRubyFn},
  {id: 37, num: 23, name: "Fabric", img: Fabric , percent: 0.8, Gain: WinFabricFn},
  {id: 38, num: 23, name: "Diamond", img: Diamond , percent: 0.1, Gain: WinDiamondFn},
  {id: 39, num: 24, name: "Eye Of Hellion", img: EyeOfHellion , percent: 0.8, Gain: WinEyeOfHellionFn},
  {id: 40, num: 25, name: "Lord Kaho`s Horn", img: LordKahosHorn , percent: 1, Gain: LordKahosHornFn},
  {id: 41, num: 26, name: "Gold", img: Gold , percent: 1, Gain: WinGoldFn},
  {id: 42, num: 27, name: "Amethyst", img: Amethyst , percent: 1, Gain: WinAmethystFn},
  {id: 43, num: 28, name: "Tongue", img: Tongue , percent: 1, Gain: WinTongueFn},
  {id: 44, num: 28, name: "Ant Jaw", img: AntJaw , percent: 0.9, Gain: WinAntJawFn},
  {id: 45, num: 29, name: "Mystic Frozen", img: MysticFrozen , percent: 0.9, Gain: WinMysticFrozenFn},
  {id: 46, num: 29, name: "Aquamarine", img: Aquamarine , percent: 0.8, Gain: WinAquamarineFn},

]
//ANIMATION PART, 1.Battle, 2.Attack, 3.Defend, 4.OnHit, 5.Dying, 6.Dead, 7.Channel, 8.PickUp
const AnimationBox =[
  {weaponName: "Empty", headGearName: null, Battle: UserBattleEmptyHand1, Attack: UserAttackEmptyHand1, Defend: UserDefendEmptyHand1, OnHit: UserOnHitPost, Dying: UserIsDyingPost, Dead: UserIsDeadPost, Channel: UserChannelPost, PickUp:UserPickUp},
  {weaponName: "Katana", headGearName: null, Battle: UserBattlePostKatana1, Attack: UserAttackPostKatana1, Defend: UserDefendPostKatana1, OnHit: UserOnHitPost, Dying: UserIsDyingPost, Dead: UserIsDeadPost, Channel: UserChannelPost, PickUp:UserPickUp},
  {weaponName: "Bastard Sword", headGearName: null , Battle: UserBattlePostBastardSword1, Attack: UserAttackPostBastardSword1, Defend: UserDefendPostBastardSword1, OnHit: UserOnHitPost, Dying: UserIsDyingPost, Dead: UserIsDeadPost, Channel: UserChannelPost, PickUp:UserPickUp},
  {weaponName: "Gaia Sword", headGearName: null , Battle: UserBattlePostGaiaSword1, Attack: UserAttackPostGaiaSword1, Defend:  UserDefendPostGaiaSword1, OnHit: UserOnHitPost, Dying: UserIsDyingPost, Dead: UserIsDeadPost, Channel: UserChannelPost, PickUp:UserPickUp},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: null , Battle: UserBattlePostTwinEdgeofNaghtSieger1, Attack: UserAttackPostTwinEdgeofNaghtSieger1, Defend: UserDefendPostTwinEdgeofNaghtSieger1, OnHit: UserOnHitPost, Dying: UserIsDyingPost, Dead: UserIsDeadPost, Channel: UserChannelPost, PickUp:UserPickUp},
  {weaponName: "Violet Fear", headGearName: null , Battle: UserBattlePostVioletFear1, Attack: UserAttackPostVioletFear1, Defend: UserDefendPostVioletFear1, OnHit: UserOnHitPost, Dying: UserIsDyingPost, Dead: UserIsDeadPost, Channel: UserChannelPost, PickUp:UserPickUp},
  //LordKahosHorn
  {weaponName: "Empty", headGearName: "Lord Kaho`s Horn", Battle: UserBattlePostEmptyHand1_LordKahosHorn, Attack: UserAttackPostEmptyHand1_LordKahosHorn, Defend: UserDefendPostEmptyHand1_LordKahosHorn, OnHit: UserOnHitPost_LordKahosHorn, Dying: UserIsDyingPost_LordKahosHorn, Dead: UserIsDeadPost_LordKahosHorn, Channel: UserChannelPost_LordKahosHorn, PickUp:UserPickUp_LordKahosHorn},
  {weaponName: "Katana", headGearName: "Lord Kaho`s Horn", Battle: UserBattlePostKatana1_LordKahosHorn, Attack: UserAttackPostKatana1_LordKahosHorn, Defend: UserDefendPostKatana1_LordKahosHorn, OnHit: UserOnHitPost_LordKahosHorn, Dying: UserIsDyingPost_LordKahosHorn, Dead: UserIsDeadPost_LordKahosHorn, Channel: UserChannelPost_LordKahosHorn, PickUp:UserPickUp_LordKahosHorn},
  {weaponName: "Bastard Sword", headGearName: "Lord Kaho`s Horn" , Battle: UserBattlePostBastardSword1_LordKahosHorn, Attack: UserAttackPostBastardSword1_LordKahosHorn, Defend: UserDefendPostBastardSword1_LordKahosHorn, OnHit: UserOnHitPost_LordKahosHorn, Dying: UserIsDyingPost_LordKahosHorn, Dead: UserIsDeadPost_LordKahosHorn, Channel: UserChannelPost_LordKahosHorn, PickUp:UserPickUp_LordKahosHorn},
  {weaponName: "Gaia Sword", headGearName: "Lord Kaho`s Horn" , Battle: UserBattlePostGaiaSword1_LordKahosHorn, Attack: UserAttackPostGaiaSword1_LordKahosHorn, Defend:  UserDefendPostGaiaSword1_LordKahosHorn, OnHit: UserOnHitPost_LordKahosHorn, Dying: UserIsDyingPost_LordKahosHorn, Dead: UserIsDeadPost_LordKahosHorn, Channel: UserChannelPost_LordKahosHorn, PickUp:UserPickUp_LordKahosHorn},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: "Lord Kaho`s Horn" , Battle: UserBattlePostTwinEdgeofNaghtSieger1_LordKahosHorn, Attack: UserAttackPostTwinEdgeofNaghtSieger1_LordKahosHorn, Defend: UserDefendPostTwinEdgeofNaghtSieger1_LordKahosHorn, OnHit: UserOnHitPost_LordKahosHorn, Dying: UserIsDyingPost_LordKahosHorn, Dead: UserIsDeadPost_LordKahosHorn, Channel: UserChannelPost_LordKahosHorn, PickUp:UserPickUp_LordKahosHorn},
  {weaponName: "Violet Fear", headGearName: "Lord Kaho`s Horn" , Battle: UserBattlePostVioletFear1_LordKahosHorn, Attack: UserAttackPostVioletFear1_LordKahosHorn, Defend: UserDefendPostVioletFear1_LordKahosHorn, OnHit: UserOnHitPost_LordKahosHorn, Dying: UserIsDyingPost_LordKahosHorn, Dead: UserIsDeadPost_LordKahosHorn, Channel: UserChannelPost_LordKahosHorn, PickUp:UserPickUp_LordKahosHorn},
  //TeddybearHat
  {weaponName: "Empty", headGearName: "Teddybear Hat", Battle: UserBattlePostEmptyHand1_TeddybearHat, Attack: UserAttackPostEmptyHand1_TeddybearHat, Defend: UserDefendPostEmptyHand1_TeddybearHat, OnHit: UserOnHitPost_TeddybearHat, Dying: UserIsDyingPost_TeddybearHat, Dead: UserIsDeadPost_TeddybearHat, Channel: UserChannelPost_TeddybearHat, PickUp:UserPickUp_TeddybearHat},
  {weaponName: "Katana", headGearName: "Teddybear Hat", Battle: UserBattlePostKatana1_TeddybearHat, Attack: UserAttackPostKatana1_TeddybearHat, Defend: UserDefendPostKatana1_TeddybearHat, OnHit: UserOnHitPost_TeddybearHat, Dying: UserIsDyingPost_TeddybearHat, Dead: UserIsDeadPost_TeddybearHat, Channel: UserChannelPost_TeddybearHat, PickUp:UserPickUp_TeddybearHat},
  {weaponName: "Bastard Sword", headGearName: "Teddybear Hat" , Battle: UserBattlePostBastardSword1_TeddybearHat, Attack: UserAttackPostBastardSword1_TeddybearHat, Defend: UserDefendPostBastardSword1_TeddybearHat, OnHit: UserOnHitPost_TeddybearHat, Dying: UserIsDyingPost_TeddybearHat, Dead: UserIsDeadPost_TeddybearHat, Channel: UserChannelPost_TeddybearHat, PickUp:UserPickUp_TeddybearHat},
  {weaponName: "Gaia Sword", headGearName: "Teddybear Hat" , Battle: UserBattlePostGaiaSword1_TeddybearHat, Attack: UserAttackPostGaiaSword1_TeddybearHat, Defend:  UserDefendPostGaiaSword1_TeddybearHat, OnHit: UserOnHitPost_TeddybearHat, Dying: UserIsDyingPost_TeddybearHat, Dead: UserIsDeadPost_TeddybearHat, Channel: UserChannelPost_TeddybearHat, PickUp:UserPickUp_TeddybearHat},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: "Teddybear Hat" , Battle: UserBattlePostTwinEdgeofNaghtSieger1_TeddybearHat, Attack: UserAttackPostTwinEdgeofNaghtSieger1_TeddybearHat, Defend: UserDefendPostTwinEdgeofNaghtSieger1_TeddybearHat, OnHit: UserOnHitPost_TeddybearHat, Dying: UserIsDyingPost_TeddybearHat, Dead: UserIsDeadPost_TeddybearHat, Channel: UserChannelPost_TeddybearHat, PickUp:UserPickUp_TeddybearHat},
  {weaponName: "Violet Fear", headGearName: "Teddybear Hat" , Battle: UserBattlePostVioletFear1_TeddybearHat, Attack: UserAttackPostVioletFear1_TeddybearHat, Defend: UserDefendPostVioletFear1_TeddybearHat, OnHit: UserOnHitPost_TeddybearHat, Dying: UserIsDyingPost_TeddybearHat, Dead: UserIsDeadPost_TeddybearHat, Channel: UserChannelPost_TeddybearHat, PickUp:UserPickUp_TeddybearHat},
  //Crown
  {weaponName: "Empty", headGearName: "Crown", Battle: UserBattlePostEmptyHand1_Crown, Attack: UserAttackPostEmptyHand1_Crown, Defend: UserDefendPostEmptyHand1_Crown, OnHit: UserOnHitPost_Crown, Dying: UserIsDyingPost_Crown, Dead: UserIsDeadPost_Crown, Channel: UserChannelPost_Crown, PickUp:UserPickUp_Crown},
  {weaponName: "Katana", headGearName: "Crown", Battle: UserBattlePostKatana1_Crown, Attack: UserAttackPostKatana1_Crown, Defend: UserDefendPostKatana1_Crown, OnHit: UserOnHitPost_Crown, Dying: UserIsDyingPost_Crown, Dead: UserIsDeadPost_Crown, Channel: UserChannelPost_Crown, PickUp:UserPickUp_Crown},
  {weaponName: "Bastard Sword", headGearName: "Crown" , Battle: UserBattlePostBastardSword1_Crown, Attack: UserAttackPostBastardSword1_Crown, Defend: UserDefendPostBastardSword1_Crown, OnHit: UserOnHitPost_Crown, Dying: UserIsDyingPost_Crown, Dead: UserIsDeadPost_Crown, Channel: UserChannelPost_Crown, PickUp:UserPickUp_Crown},
  {weaponName: "Gaia Sword", headGearName: "Crown" , Battle: UserBattlePostGaiaSword1_Crown, Attack: UserAttackPostGaiaSword1_Crown, Defend:  UserDefendPostGaiaSword1_Crown, OnHit: UserOnHitPost_Crown, Dying: UserIsDyingPost_Crown, Dead: UserIsDeadPost_Crown, Channel: UserChannelPost_Crown, PickUp:UserPickUp_Crown},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: "Crown" , Battle: UserBattlePostTwinEdgeofNaghtSieger1_Crown, Attack: UserAttackPostTwinEdgeofNaghtSieger1_Crown, Defend: UserDefendPostTwinEdgeofNaghtSieger1_Crown, OnHit: UserOnHitPost_Crown, Dying: UserIsDyingPost_Crown, Dead: UserIsDeadPost_Crown, Channel: UserChannelPost_Crown, PickUp:UserPickUp_Crown},
  {weaponName: "Violet Fear", headGearName: "Crown" , Battle: UserBattlePostVioletFear1_Crown, Attack: UserAttackPostVioletFear1_Crown, Defend: UserDefendPostVioletFear1_Crown, OnHit: UserOnHitPost_Crown, Dying: UserIsDyingPost_Crown, Dead: UserIsDeadPost_Crown, Channel: UserChannelPost_Crown, PickUp:UserPickUp_Crown},
  //Helm
  {weaponName: "Empty", headGearName: "Helm", Battle: UserBattlePostEmptyHand1_Helm, Attack: UserAttackPostEmptyHand1_Helm, Defend: UserDefendPostEmptyHand1_Helm, OnHit: UserOnHitPost_Helm, Dying: UserIsDyingPost_Helm, Dead: UserIsDeadPost_Helm, Channel: UserChannelPost_Helm, PickUp:UserPickUp_Helm},
  {weaponName: "Katana", headGearName: "Helm", Battle: UserBattlePostKatana1_Helm, Attack: UserAttackPostKatana1_Helm, Defend: UserDefendPostKatana1_Helm, OnHit: UserOnHitPost_Helm, Dying: UserIsDyingPost_Helm, Dead: UserIsDeadPost_Helm, Channel: UserChannelPost_Helm, PickUp:UserPickUp_Helm},
  {weaponName: "Bastard Sword", headGearName: "Helm" , Battle: UserBattlePostBastardSword1_Helm, Attack: UserAttackPostBastardSword1_Helm, Defend: UserDefendPostBastardSword1_Helm, OnHit: UserOnHitPost_Helm, Dying: UserIsDyingPost_Helm, Dead: UserIsDeadPost_Helm, Channel: UserChannelPost_Helm, PickUp:UserPickUp_Helm},
  {weaponName: "Gaia Sword", headGearName: "Helm" , Battle: UserBattlePostGaiaSword1_Helm, Attack: UserAttackPostGaiaSword1_Helm, Defend:  UserDefendPostGaiaSword1_Helm, OnHit: UserOnHitPost_Helm, Dying: UserIsDyingPost_Helm, Dead: UserIsDeadPost_Helm, Channel: UserChannelPost_Helm, PickUp:UserPickUp_Helm},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: "Helm" , Battle: UserBattlePostTwinEdgeofNaghtSieger1_Helm, Attack: UserAttackPostTwinEdgeofNaghtSieger1_Helm, Defend: UserDefendPostTwinEdgeofNaghtSieger1_Helm, OnHit: UserOnHitPost_Helm, Dying: UserIsDyingPost_Helm, Dead: UserIsDeadPost_Helm, Channel: UserChannelPost_Helm, PickUp:UserPickUp_Helm},
  {weaponName: "Violet Fear", headGearName: "Helm" , Battle: UserBattlePostVioletFear1_Helm, Attack: UserAttackPostVioletFear1_Helm, Defend: UserDefendPostVioletFear1_Helm, OnHit: UserOnHitPost_Helm, Dying: UserIsDyingPost_Helm, Dead: UserIsDeadPost_Helm, Channel: UserChannelPost_Helm, PickUp:UserPickUp_Helm},
  //PandaHat
  {weaponName: "Empty", headGearName: "Panda Hat", Battle: UserBattlePostEmptyHand1_PandaHat, Attack: UserAttackPostEmptyHand1_PandaHat, Defend: UserDefendPostEmptyHand1_PandaHat, OnHit: UserOnHitPost_PandaHat, Dying: UserIsDyingPost_PandaHat, Dead: UserIsDeadPost_PandaHat, Channel: UserChannelPost_PandaHat, PickUp:UserPickUp_PandaHat},
  {weaponName: "Katana", headGearName: "Panda Hat", Battle: UserBattlePostKatana1_PandaHat, Attack: UserAttackPostKatana1_PandaHat, Defend: UserDefendPostKatana1_PandaHat, OnHit: UserOnHitPost_PandaHat, Dying: UserIsDyingPost_PandaHat, Dead: UserIsDeadPost_PandaHat, Channel: UserChannelPost_PandaHat, PickUp:UserPickUp_PandaHat},
  {weaponName: "Bastard Sword", headGearName: "Panda Hat" , Battle: UserBattlePostBastardSword1_PandaHat, Attack: UserAttackPostBastardSword1_PandaHat, Defend: UserDefendPostBastardSword1_PandaHat, OnHit: UserOnHitPost_PandaHat, Dying: UserIsDyingPost_PandaHat, Dead: UserIsDeadPost_PandaHat, Channel: UserChannelPost_PandaHat, PickUp:UserPickUp_PandaHat},
  {weaponName: "Gaia Sword", headGearName: "Panda Hat" , Battle: UserBattlePostGaiaSword1_PandaHat, Attack: UserAttackPostGaiaSword1_PandaHat, Defend:  UserDefendPostGaiaSword1_PandaHat, OnHit: UserOnHitPost_PandaHat, Dying: UserIsDyingPost_PandaHat, Dead: UserIsDeadPost_PandaHat, Channel: UserChannelPost_PandaHat, PickUp:UserPickUp_PandaHat},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: "Panda Hat" , Battle: UserBattlePostTwinEdgeofNaghtSieger1_PandaHat, Attack: UserAttackPostTwinEdgeofNaghtSieger1_PandaHat, Defend: UserDefendPostTwinEdgeofNaghtSieger1_PandaHat, OnHit: UserOnHitPost_PandaHat, Dying: UserIsDyingPost_PandaHat, Dead: UserIsDeadPost_PandaHat, Channel: UserChannelPost_PandaHat, PickUp:UserPickUp_PandaHat},
  {weaponName: "Violet Fear", headGearName: "Panda Hat" , Battle: UserBattlePostVioletFear1_PandaHat, Attack: UserAttackPostVioletFear1_PandaHat, Defend: UserDefendPostVioletFear1_PandaHat, OnHit: UserOnHitPost_PandaHat, Dying: UserIsDyingPost_PandaHat, Dead: UserIsDeadPost_PandaHat, Channel: UserChannelPost_PandaHat, PickUp:UserPickUp_PandaHat},
  //ChefHat
  {weaponName: "Empty", headGearName: "Chef Hat", Battle: UserBattlePostEmptyHand1_ChefHat, Attack: UserAttackPostEmptyHand1_ChefHat, Defend: UserDefendPostEmptyHand1_ChefHat, OnHit: UserOnHitPost_ChefHat, Dying: UserIsDyingPost_ChefHat, Dead: UserIsDeadPost_ChefHat, Channel: UserChannelPost_ChefHat, PickUp:UserPickUp_ChefHat},
  {weaponName: "Katana", headGearName: "Chef Hat", Battle: UserBattlePostKatana1_ChefHat, Attack: UserAttackPostKatana1_ChefHat, Defend: UserDefendPostKatana1_ChefHat, OnHit: UserOnHitPost_ChefHat, Dying: UserIsDyingPost_ChefHat, Dead: UserIsDeadPost_ChefHat, Channel: UserChannelPost_ChefHat, PickUp:UserPickUp_ChefHat},
  {weaponName: "Bastard Sword", headGearName: "Chef Hat" , Battle: UserBattlePostBastardSword1_ChefHat, Attack: UserAttackPostBastardSword1_ChefHat, Defend: UserDefendPostBastardSword1_ChefHat, OnHit: UserOnHitPost_ChefHat, Dying: UserIsDyingPost_ChefHat, Dead: UserIsDeadPost_ChefHat, Channel: UserChannelPost_ChefHat, PickUp:UserPickUp_ChefHat},
  {weaponName: "Gaia Sword", headGearName: "Chef Hat" , Battle: UserBattlePostGaiaSword1_ChefHat, Attack: UserAttackPostGaiaSword1_ChefHat, Defend:  UserDefendPostGaiaSword1_ChefHat, OnHit: UserOnHitPost_ChefHat, Dying: UserIsDyingPost_ChefHat, Dead: UserIsDeadPost_ChefHat, Channel: UserChannelPost_ChefHat, PickUp:UserPickUp_ChefHat},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: "Chef Hat" , Battle: UserBattlePostTwinEdgeofNaghtSieger1_ChefHat, Attack: UserAttackPostTwinEdgeofNaghtSieger1_ChefHat, Defend: UserDefendPostTwinEdgeofNaghtSieger1_ChefHat, OnHit: UserOnHitPost_ChefHat, Dying: UserIsDyingPost_ChefHat, Dead: UserIsDeadPost_ChefHat, Channel: UserChannelPost_ChefHat, PickUp:UserPickUp_ChefHat},
  {weaponName: "Violet Fear", headGearName: "Chef Hat" , Battle: UserBattlePostVioletFear1_ChefHat, Attack: UserAttackPostVioletFear1_ChefHat, Defend: UserDefendPostVioletFear1_ChefHat, OnHit: UserOnHitPost_ChefHat, Dying: UserIsDyingPost_ChefHat, Dead: UserIsDeadPost_ChefHat, Channel: UserChannelPost_ChefHat, PickUp:UserPickUp_ChefHat},
  //SantaPoringHat
  {weaponName: "Empty", headGearName: "Santa Poring Hat", Battle: UserBattlePostEmptyHand1_SantaPoringHat, Attack: UserAttackPostEmptyHand1_SantaPoringHat, Defend: UserDefendPostEmptyHand1_SantaPoringHat, OnHit: UserOnHitPost_SantaPoringHat, Dying: UserIsDyingPost_SantaPoringHat, Dead: UserIsDeadPost_SantaPoringHat, Channel: UserChannelPost_SantaPoringHat, PickUp:UserPickUp_SantaPoringHat},
  {weaponName: "Katana", headGearName: "Santa Poring Hat", Battle: UserBattlePostKatana1_SantaPoringHat, Attack: UserAttackPostKatana1_SantaPoringHat, Defend: UserDefendPostKatana1_SantaPoringHat, OnHit: UserOnHitPost_SantaPoringHat, Dying: UserIsDyingPost_SantaPoringHat, Dead: UserIsDeadPost_SantaPoringHat, Channel: UserChannelPost_SantaPoringHat, PickUp:UserPickUp_SantaPoringHat},
  {weaponName: "Bastard Sword", headGearName: "Santa Poring Hat" , Battle: UserBattlePostBastardSword1_SantaPoringHat, Attack: UserAttackPostBastardSword1_SantaPoringHat, Defend: UserDefendPostBastardSword1_SantaPoringHat, OnHit: UserOnHitPost_SantaPoringHat, Dying: UserIsDyingPost_SantaPoringHat, Dead: UserIsDeadPost_SantaPoringHat, Channel: UserChannelPost_SantaPoringHat, PickUp:UserPickUp_SantaPoringHat},
  {weaponName: "Gaia Sword", headGearName: "Santa Poring Hat" , Battle: UserBattlePostGaiaSword1_SantaPoringHat, Attack: UserAttackPostGaiaSword1_SantaPoringHat, Defend:  UserDefendPostGaiaSword1_SantaPoringHat, OnHit: UserOnHitPost_SantaPoringHat, Dying: UserIsDyingPost_SantaPoringHat, Dead: UserIsDeadPost_SantaPoringHat, Channel: UserChannelPost_SantaPoringHat, PickUp:UserPickUp_SantaPoringHat},
  {weaponName: "Twin Edge of Naght Sieger", headGearName: "Santa Poring Hat" , Battle: UserBattlePostTwinEdgeofNaghtSieger1_SantaPoringHat, Attack: UserAttackPostTwinEdgeofNaghtSieger1_SantaPoringHat, Defend: UserDefendPostTwinEdgeofNaghtSieger1_SantaPoringHat, OnHit: UserOnHitPost_SantaPoringHat, Dying: UserIsDyingPost_SantaPoringHat, Dead: UserIsDeadPost_SantaPoringHat, Channel: UserChannelPost_SantaPoringHat, PickUp:UserPickUp_SantaPoringHat},
  {weaponName: "Violet Fear", headGearName: "Santa Poring Hat" , Battle: UserBattlePostVioletFear1_SantaPoringHat, Attack: UserAttackPostVioletFear1_SantaPoringHat, Defend: UserDefendPostVioletFear1_SantaPoringHat, OnHit: UserOnHitPost_SantaPoringHat, Dying: UserIsDyingPost_SantaPoringHat, Dead: UserIsDeadPost_SantaPoringHat, Channel: UserChannelPost_SantaPoringHat, PickUp:UserPickUp_SantaPoringHat},
]

const EnemyBox = [
  {id:0, number:0, FlipCSS: 'imgFlip', GetHit:PoringHit, GetAttack:PoringAttack, GetDead: PoringDead, GetStand: Poring},
  {id:1, number:1, FlipCSS: 'imgFlip', GetHit:LunaticHit, GetAttack:LunaticAttack, GetDead: LunaticDead, GetStand: Lunatic},
  {id:2, number:2, FlipCSS: 'imgFlipTwo', GetHit:RockerHit, GetAttack:RockerAttack, GetDead: RockerDead, GetStand: Rocker},
  {id:3, number:3, FlipCSS: 'imgFlipTwo', GetHit:AmberniteHit, GetAttack:AmberniteAttack, GetDead: AmberniteDead, GetStand: Ambernite},
  {id:4, number:4, FlipCSS: 'imgFlip', GetHit:GhostringHit, GetAttack:GhostringAttack, GetDead: GhostringDead, GetStand: Ghostring},
  {id:5, number:5, FlipCSS: 'imgFlip', GetHit:EclipseHit, GetAttack:EclipseAttack, GetDead: EclipseDead, GetStand: Eclipse},
  {id:6, number:6, FlipCSS: 'imgFlipTwo', GetHit:ZombieHit, GetAttack:ZombieAttack, GetDead: ZombieDead, GetStand: Zombie},
  {id:7, number:7, FlipCSS: 'imgFlipTwo', GetHit:SkeletonHit, GetAttack:SkeletonAttack, GetDead: SkeletonDead, GetStand: Skeleton},
  {id:8, number:8, FlipCSS: 'imgFlipTwo', GetHit:SoldierSkeletonHit, GetAttack:SoldierSkeletonAttack, GetDead: SoldierSkeletonDead, GetStand: SoldierSkeleton},
  {id:9, number:9, FlipCSS: 'imgFlipTwo', GetHit:ArcherSkeletonHit, GetAttack:ArcherSkeletonAttack, GetDead: ArcherSkeletonDead, GetStand: ArcherSkeleton},
  {id:10, number:10, FlipCSS: 'imgFlipTwo', GetHit:MunakHit, GetAttack:MunakAttack, GetDead: MunakDead, GetStand: Munak},
  {id:11, number:11, FlipCSS: 'imgFlipTwo', GetHit:BongunHit, GetAttack:BongunAttack, GetDead: BongunDead, GetStand: Bongun},
  {id:12, number:12, FlipCSS: 'imgFlipTwo', GetHit:SoheeHit, GetAttack:SoheeAttack, GetDead: SoheeDead, GetStand: Sohee},
  {id:13, number:13, FlipCSS: 'imgFlip', GetHit:WhisperHit, GetAttack:WhisperAttack, GetDead: WhisperDead, GetStand: Whisper},
  {id:14, number:14, FlipCSS: 'imgFlipTwo', GetHit:GiantWhisperHit, GetAttack:GiantWhisperAttack, GetDead: GiantWhisperDead, GetStand: GiantWhisper},
  {id:15, number:15, FlipCSS: 'imgFlipTwo', GetHit:WolyafaHit, GetAttack:WolyafaAttack, GetDead: WolyafaDead, GetStand: Wolyafa},
  {id:16, number:16, FlipCSS: 'imgFlip', GetHit:PoporingHit, GetAttack:PoporingAttack, GetDead: PoporingDead, GetStand: Poporing},
  {id:17, number:17, FlipCSS: 'imgFlipTwo', GetHit:PoisonSporeHit, GetAttack:PoisonSporeAttack, GetDead: PoisonSporeDead, GetStand: PoisonSpore},
  {id:18, number:18, FlipCSS: 'imgFlipTwo', GetHit:JakkHit, GetAttack:JakkAttack, GetDead: JakkDead, GetStand: Jakk},
  {id:19, number:19, FlipCSS: 'imgFlipTwo', GetHit:GhoulHit, GetAttack:GhoulAttack, GetDead: GhoulDead, GetStand: Ghoul},
  {id:20, number:20, FlipCSS: 'imgFlipTwo', GetHit:MarionetteHit, GetAttack:MarionetteAttack, GetDead: MarionetteDead, GetStand: Marionette},
  {id:21, number:21, FlipCSS: 'imgFlipTwo', GetHit:WraithHit, GetAttack:WraithAttack, GetDead: WraithDead, GetStand: Wraith},
  {id:22, number:22, FlipCSS: 'imgFlipThree', GetHit:DoppelgangerHit, GetAttack:DoppelgangerAttack, GetDead: DoppelgangerDead, GetStand: Doppelganger},
  {id:23, number:23, FlipCSS: 'imgFlipTwo', GetHit:WraithdeadHit, GetAttack:WraithdeadAttack, GetDead: WraithdeadDead, GetStand: Wraithdead},
  {id:24, number:24, FlipCSS: 'imgFlipTwo', GetHit:HellionRevenantHit, GetAttack:HellionRevenantAttack, GetDead: HellionRevenantDead, GetStand: HellionRevenant},
  {id:25, number:25, FlipCSS: 'imgFlipTwo', GetHit:BaphometHit, GetAttack:BaphometAttack, GetDead: BaphometDead, GetStand: Baphomet},
  {id:26, number:26, FlipCSS: 'imgFlipTwo', GetHit:GoldenThiefBugHit, GetAttack:GoldenThiefBugAttack, GetDead: GoldenThiefBugDead, GetStand: GoldenThiefBug},
  {id:27, number:27, FlipCSS: 'imgFlipTwo', GetHit:DrakeHit, GetAttack:DrakeAttack, GetDead: DrakeDead, GetStand: Drake},
  {id:28, number:28, FlipCSS: 'imgFlipTwo', GetHit:PhreeoniHit, GetAttack:PhreeoniAttack, GetDead: PhreeoniDead, GetStand: Phreeoni},
  {id:29, number:29, FlipCSS: 'imgFlipTwo', GetHit:StormyKnightHit, GetAttack:StormyKnightAttack, GetDead: StormyKnightDead, GetStand: StormyKnight},
]

function Main(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const ImageControlRoom = useSelector(state => state.ImageControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const baseJobEXPChart = useSelector(state => state.baseJobEXPChart)
    const skillCapChart = useSelector(state => state.skillCapChart)
    const userStats = useSelector(state => state.userStats)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const enemyStats = useSelector(state => state.enemyStats)
    const enemyStatsTwo = useSelector(state => state.enemyStatsTwo)
    const enemyStatsThree = useSelector(state => state.enemyStatsThree)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const dispatch = useDispatch();
    //Monster Random Number 0 1 
    let i = screenControlRoom.BattlePoringIslandMapMonsterID
    let j = screenControlRoom.BattlePoringIslandMapMonsterIDTwo
    let k = screenControlRoom.BattlePoringIslandMapMonsterIDThree

    if(i !== undefined){
      (enemyStats[i].name === enemyStatsTwo[j].name && j !== undefined) || (enemyStats[i].name === enemyStatsThree[k].name && k !== undefined) ?
      EnemyOneName = enemyStats[i].name + " 1" : EnemyOneName = enemyStats[i].name
        
    }
    if(j !== undefined){
      (enemyStats[i].name === enemyStatsTwo[j].name && j !== undefined) ?
      EnemyTwoName = enemyStatsTwo[j].name + " 2" : (enemyStatsTwo[j].name === enemyStatsThree[k].name && k !== undefined && j !== undefined)
      ? EnemyTwoName = enemyStatsTwo[j].name + " 1" : EnemyTwoName = enemyStatsTwo[j].name

    }
    if(k !== undefined){
      (enemyStats[i].name === enemyStatsThree[k].name && k !== undefined) && (enemyStatsTwo[j].name === enemyStatsThree[k].name && k !== undefined && j !== undefined) ?
      EnemyThreeName = enemyStatsThree[k].name + " 3" : (enemyStats[i].name === enemyStatsThree[k].name && k !== undefined) || (enemyStatsTwo[j].name === enemyStatsThree[k].name && k !== undefined && j !== undefined) ? EnemyThreeName = enemyStatsThree[k].name + " 2" : EnemyThreeName = enemyStatsThree[k].name
    }
    let skillRoomStringArray = ['Enemy', 'EnemyTwo', 'EnemyThree'];
    let enemyTargetArray = [enemyStats[i], enemyStatsTwo[j], enemyStatsThree[k]];
    let displayNameArray = [EnemyOneName,EnemyTwoName,EnemyThreeName];
    let idArray = [i,j,k];

    useEffect(() => {
      audioHit.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioEmptyHandHit.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioMiss.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioHeal.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioUserHit.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioSkillBash.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioSkillMagBreak.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioSkillQuicken.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioLevelUp.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioUserBlock.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioSkillVitalStrike.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);

      let memoryAudio;
      let playPromise;
      if(screenControlRoom.BattlePoringIslandMapMonsterID === 5){
        memoryAudio = audioBGMBoss;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID === 15){
        memoryAudio = audioPayonCaveBossBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID === 22){
        memoryAudio = audioGeffenDungeonBossBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID === 25){
        memoryAudio = audioFinalBossBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID > 5 && screenControlRoom.BattlePoringIslandMapMonsterID <= 14){
        memoryAudio = audioPayonCaveBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID >= 16 && screenControlRoom.BattlePoringIslandMapMonsterID <= 25){
        memoryAudio = audioGeffenDungeonBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID >= 26 && screenControlRoom.BattlePoringIslandMapMonsterID <= 29){
        memoryAudio = audioChallengeTowerBGM;
      }else{
        memoryAudio = audioBGM;
      }
      memoryAudio.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
      playPromise = memoryAudio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          memoryAudio.loop = true;
          memoryAudio.play()
        })
        .catch(error => {
          // Auto-play was prevented
        });
      }
      //ANIMATION PART
      AnimationBox.map(Animation => {
        if(userStats.userWeapon === Animation.weaponName && userStats.userHeadGear === Animation.headGearName){
          dispatch(UserWeaponImgFn(Animation.Battle, Animation.Attack, Animation.Defend, Animation.OnHit, Animation.Dying, Animation.Dead, Animation.Channel, Animation.PickUp))
        }
        return null;
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changeMapFadeAudio = () => {
      let i = 0;
      let fadeAudio;
      let memoryAudio;
      if(screenControlRoom.BattlePoringIslandMapMonsterID === 5){
        memoryAudio = audioBGMBoss;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID === 15){
        memoryAudio = audioPayonCaveBossBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID === 22){
        memoryAudio = audioGeffenDungeonBossBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID === 25){
        memoryAudio = audioFinalBossBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID > 5 && screenControlRoom.BattlePoringIslandMapMonsterID <= 14){
        memoryAudio = audioPayonCaveBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID >= 16 && screenControlRoom.BattlePoringIslandMapMonsterID <= 25){
        memoryAudio = audioGeffenDungeonBGM;
      }else if(screenControlRoom.BattlePoringIslandMapMonsterID >= 26 && screenControlRoom.BattlePoringIslandMapMonsterID <= 29){
        memoryAudio = audioChallengeTowerBGM;
      }else{
        memoryAudio = audioBGM;
      }
      fadeAudio = setInterval(() => {
        if (memoryAudio.volume === parseFloat(audioControlRoom.AudioVolumeBGMFixed.toFixed(5))){
          i = i + 1;
        }
        if (memoryAudio.volume !== 0) {
          memoryAudio.volume -= parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))
          memoryAudio.volume = memoryAudio.volume.toFixed(5)
        }
        if (memoryAudio.volume < parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))) {
          memoryAudio.volume = 0;
          memoryAudio.pause();
          memoryAudio.currentTime = 0;
          clearInterval(fadeAudio);
        }else if (i >= 2){
          memoryAudio.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5)
          clearInterval(fadeAudio);
        }
      }, 10);
    }

    // VICTORY FUCNTION
    // EXP FUNCTION + QUEST FUNCTION
    useEffect(() => {
      if (userStats.currentHealth >= 0 && 
        // 1. First Enemy Only
        ((enemyStats[i].currentHealth <= 0) ||
        // 2. First and Second Enemy
        (enemyStats[i].currentHealth <= 0 && j !== undefined && enemyStatsTwo[j].currentHealth <= 0) ||
        // 3. 3 Enemies
        (enemyStats[i].currentHealth <= 0 && j !== undefined && enemyStatsTwo[j].currentHealth <= 0 && k !== undefined && enemyStatsThree[k].currentHealth <= 0)
        )){
        let WinExp = 0
        let WinJobExp = 0
        let WinZeny = 0
        dispatch(EnemyDeadAnimationFn(true))
        setTimeout(() => (clockCheck = 1), 300)

        let WinResultIDArr = [screenControlRoom.BattlePoringIslandMapMonsterID,screenControlRoom.BattlePoringIslandMapMonsterIDTwo,screenControlRoom.BattlePoringIslandMapMonsterIDThree]
        let WinResultExpArr = [enemyStats[i].Experience, enemyStatsTwo[j].Experience, enemyStatsThree[k].Experience]
        let WinResultJobExpArr = [enemyStats[i].JobExperience, enemyStatsTwo[j].JobExperience, enemyStatsThree[k].JobExperience]
        let WinResultZenyArr = [enemyStats[i].Zeny, enemyStatsTwo[j].Zeny, enemyStatsThree[k].Zeny]

        for(let x = 0; x < 3; x++){
          if(WinResultIDArr[x] !== undefined){
            WinExp += WinResultExpArr[i]
            WinJobExp += WinResultJobExpArr[i]
            WinZeny += WinResultZenyArr[i]
          }
        }

        dispatch(WinResultFn(WinExp,WinJobExp,WinZeny));
        $('.storySpeech').html(`<p>Victory! Received +${WinExp} EXP +${WinJobExp} JobEXP, +${WinZeny} Zeny.</p>`)
        //PATH
        switch (true) {
          case (screenControlRoom.UserUnlockPath === "Path1"):
            dispatch(GotoPoringIslandPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "Path2"):
            dispatch(GotoPoringIslandPath2Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "Path3"):
            dispatch(GotoPoringIslandPath3Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "Path5"):
            dispatch(GotoPoringIslandPath5Fn());
            break;
          //PayonCave1F
          case (screenControlRoom.UserUnlockPath === "PayonCave1FPath1"):
            dispatch(GotoPayonCave1FPath1Fn());
            break;
          //PayonCave2F
          case (screenControlRoom.UserUnlockPath === "PayonCave2FPath1"):
            dispatch(GotoPayonCave2FPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "PayonCave2FPath2"):
            dispatch(GotoPayonCave2FPath2Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "PayonCave2FPath5"):
            dispatch(GotoPayonCave2FPath5Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "PayonCave2FPath7"):
            dispatch(GotoPayonCave2FPath7Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "PayonCave2FPath8"):
            dispatch(GotoPayonCave2FPath8Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "PayonCave3FPath1"):
            dispatch(GotoPayonCave3FPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "PayonCave3FPath2"):
            dispatch(GotoPayonCave3FPath2Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "PayonCave3FPath4"):
            dispatch(GotoPayonCave3FPath4Fn());
            break;
          //Geffen Dungeon
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon1FPath1"):
            dispatch(GotoGeffenDungeon1FPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon1FPath3"):
            dispatch(GotoGeffenDungeon1FPath3Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon2FPath1"):
            dispatch(GotoGeffenDungeon2FPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon2FPath2"):
            dispatch(GotoGeffenDungeon2FPath2Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon2FPath4"):
            dispatch(GotoGeffenDungeon2FPath4Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon2FPath6"):
            dispatch(GotoGeffenDungeon2FPath6Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon3FPath1"):
            dispatch(GotoGeffenDungeon3FPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon3FPath2"):
            dispatch(GotoGeffenDungeon3FPath2Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon3FPath4"):
            dispatch(GotoGeffenDungeon3FPath4Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "GeffenDungeon4FPath1"):
            dispatch(GotoGeffenDungeon4FPath1Fn());
            break;
          //Challenge Tower
          case (screenControlRoom.UserUnlockPath === "ChallengeTowerPath1"):
            dispatch(GotoChallengeTowerPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "ChallengeTowerPath2"):
            dispatch(GotoChallengeTowerPath2Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "ChallengeTowerPath3"):
            dispatch(GotoChallengeTowerPath3Fn());
            break;
          default:
            break;
        }
        //ETC items
        EtcBox.map(EtcItems => {
          if((i === EtcItems.num) && (EtcItems.percent >= Math.random())){
            if (obtain === false){
              setTimeout(() => dispatch(UserPickUpAnimationFn(true)), 1050);
              setTimeout(() => dispatch(UserPickUpAnimationFn(false)), 1350);
              $('.storySpeech').append(`<span>Obtained: </span>`)
              obtain = true;
            }
            //Zeny,Item
            dispatch((EtcItems.Gain)(0,1));
            $('.storySpeech').append(`<span key=${EtcItems.id}><img src=${EtcItems.img} alt=${EtcItems.name}/> ${EtcItems.name} </span>`)
          }
          if(j !== undefined){
            if((j === EtcItems.num) && (EtcItems.percent >= Math.random())){
              if (obtain === false){
                setTimeout(() => dispatch(UserPickUpAnimationFn(true)), 1050);
                setTimeout(() => dispatch(UserPickUpAnimationFn(false)), 1350);
                $('.storySpeech').append(`<span>Obtained: </span>`)
                obtain = true;
              }
              //Zeny,Item
              dispatch((EtcItems.Gain)(0,1));
              $('.storySpeech').append(`<span key=${EtcItems.id}><img src=${EtcItems.img} alt=${EtcItems.name}/> ${EtcItems.name} </span>`)
            }
          }
          if(k !== undefined){
            if((k === EtcItems.num) && (EtcItems.percent >= Math.random())){
              if (obtain === false){
                setTimeout(() => dispatch(UserPickUpAnimationFn(true)), 1050);
                setTimeout(() => dispatch(UserPickUpAnimationFn(false)), 1350);
                $('.storySpeech').append(`<span>Obtained: </span>`)
                obtain = true;
              }
              //Zeny,Item
              dispatch((EtcItems.Gain)(0,1));
              $('.storySpeech').append(`<span key=${EtcItems.id}><img src=${EtcItems.img} alt=${EtcItems.name}/> ${EtcItems.name} </span>`)
            }
          }

          return null;
        })
        switch (true) {
          case (i === 5):
            dispatch(BossEclipseDefeatFn());;
            break;
          case (i === 15):
            dispatch(BossWolyafaDefeatFn());
            break;
          case (i === 22):
            dispatch(BossDoppelgangerDefeatFn());
            break;
          case (i === 25):
            dispatch(BossBaphometDefeatFn());
            break;
          default:
            break;
        }
        //QUEST
        let MonsterNameArr = ["Poring", "Lunatic", "Rocker", "Ambernite", "Ghostring", "Eclipse", "Zombie", "Skeleton", "Soldierskeleton", "Archerskeleton", "Munak", "Bogun", "Sohee", "Whisper", "Giantwhisper", "Wolyafa", "Poporing", "Poisonspore", "Jakk", "Ghoul", "Marionette", "Wraith", "Doppelganger", "Wraithdead", "Hellionrevenant", "Baphomet", "GoldenThiefBug", "Drake", "Phreeoni", "StormyKnight"]
        let MonsterNameID = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
        for(let x = 0; x < 3; x++){
          if(WinResultIDArr[x] !== undefined){
            for(let y = 0; y < MonsterNameID.length; y++){
              //accept QUEST & Correct Event monster
              if((questControlRoom.QuestDialog).indexOf(MonsterNameArr[y]) > -1 && WinResultIDArr[x] === MonsterNameID[y]){
                dispatch(ProgressQuestDialogFn(MonsterNameArr[y]));
              }
            }
          }
        }

      }
      // QuestBoard, screen not depend
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enemyStats, dispatch]);
    // DEFEAT FUNCTION
      useEffect(() => {
        if (userStats.currentHealth <= 0){
          // USER DEAD ANIMATION
          setTimeout(() => dispatch(UserIsDyingAnimationFn()), 250);
          setTimeout(() => dispatch(ResetUserIsDyingAnimationFn()), 400);
          dispatch(UserIsDeadAnimationFn());
          setTimeout(() => (clockCheck = 1), 300);
          $('.storySpeech').html(`Defeat... Atlan Fainted......`)
          // $('.goGoAttack').prop("disabled", true);
        }
      }, [userStats.currentHealth , dispatch]);
    // RESET CLOCK
    const resetClockButton = () => {
                //Reset Clock;
                $('.storySpeech').html();
                clockBarObject.userClockBar = 0;
                clockBarObject.enemyClockBar = 0;
                clockBarObject.enemyTwoClockBar = 0;
                clockBarObject.enemyThreeClockBar = 0;
                // i = Math.round(Math.random());
                Uclock = 0;
                clockCheck = 0;
                obtain = false;
                EnemyStunClockArr = [-1,-1,-1];
                EnemySlowClockArr = [-1,-1,-1];
                EnemyDefenceDebuffArr = [-1,-1,-1];
                //Summerize: ResetAllBattleMapFn
                dispatch(ResetAllBattleMapFn(false));
                // dispatch(EnemyDeadAnimationFn(false));
                // dispatch(ResetEnemyTurnFn());
                // dispatch(ResetUserTurnFn());
                // dispatch(ResetEnemyTurnBlockFn());
                // dispatch(ResetUserTurnBlockFn());
                // dispatch(ResetUserIsBlockAnimationFn());
                // dispatch(ReturnUserInSelectSkillFn());
                // dispatch(ReturnUserInSelectItemFn());
                // dispatch(ResetUserSkillQuickenClockFn());
    }
    // LEVEL + JobLevel FUNCTION
    //setup the exp i j k
    useEffect(() => {
      if (userStats.currentHealth >= 0 && 
        // 1. First Enemy Only
        ((enemyStats[i].currentHealth <= 0) ||
        // 2. First and Second Enemy
        (enemyStats[i].currentHealth <= 0 && j !== undefined && enemyStatsTwo[j].currentHealth <= 0) ||
        // 3. 3 Enemies
        (enemyStats[i].currentHealth <= 0 && j !== undefined && enemyStatsTwo[j].currentHealth <= 0 && k !== undefined && enemyStatsThree[k].currentHealth <= 0)
        )){
        //MAX Lv99
        if((userStats.Level < 99) && (userStats.Experience >= baseEXPChart[userStats.Level])){
          (() => {
            switch (true) {
              case((userStats.Level + 1) <= 4):
                return dispatch(UserLevelUpFn(3));
              case((userStats.Level + 1) <= 9):
                return dispatch(UserLevelUpFn(4));
              case((userStats.Level + 1) <= 14):
                return dispatch(UserLevelUpFn(5));
              case((userStats.Level + 1) <= 19):
                return dispatch(UserLevelUpFn(6));
              case((userStats.Level + 1) <= 24):
                return dispatch(UserLevelUpFn(7));
              case((userStats.Level + 1) <= 29):
                return dispatch(UserLevelUpFn(8));
              case((userStats.Level + 1) <= 34):
                return dispatch(UserLevelUpFn(9));
              case((userStats.Level + 1) <= 39):
                return dispatch(UserLevelUpFn(10));
              case((userStats.Level + 1) <= 44):
                return dispatch(UserLevelUpFn(11));
              case((userStats.Level + 1) <= 49):
                return dispatch(UserLevelUpFn(12));
              case((userStats.Level + 1) <= 54):
                return dispatch(UserLevelUpFn(13));
              case((userStats.Level + 1) <= 59):
                return dispatch(UserLevelUpFn(14));
              case((userStats.Level + 1) <= 64):
                return dispatch(UserLevelUpFn(15));
              case((userStats.Level + 1) <= 69):
                return dispatch(UserLevelUpFn(16));
              case((userStats.Level + 1) <= 74):
                return dispatch(UserLevelUpFn(17));
              case((userStats.Level + 1) <= 79):
                return dispatch(UserLevelUpFn(18));
              case((userStats.Level + 1) <= 84):
                return dispatch(UserLevelUpFn(19));
              case((userStats.Level + 1) <= 89):
                return dispatch(UserLevelUpFn(20));
              case((userStats.Level + 1) <= 94):
                return dispatch(UserLevelUpFn(21));
              case((userStats.Level + 1) <= 98):
                return dispatch(UserLevelUpFn(22));
              default:
                return dispatch(UserLevelUpFn(23));
            }
            })()
          audioLevelUp.play();
          $('.storySpeech').append(`\n <p>Atlan has Level Up to Lv${userStats.Level + 1}</p>`)
            switch (true) {
              case((userStats.Level + 1) === skillCapChart.Bash):
                 return $('.storySpeech').append(`\n <p>Atlan has Unlock Skill Bash <img src=${skillBash} alt="skillBash" /> !</p>`)
              case((userStats.Level + 1) === skillCapChart.Mammonite):
                 return $('.storySpeech').append(`\n <p>Atlan has Unlock Skill Mammonite<img src=${skillMammonite} alt="skillMammonite" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.Kodoku):
                 return $('.storySpeech').append(`\n <p>Atlan has Unlock Skill Kodoku<img src=${skillKodoku} alt="Kodoku" />!</p>`) 
              case((userStats.Level + 1) === skillCapChart.MagnumBreak):
                return $('.storySpeech').append(`\n <p>Atlan has Unlock Skill Magnum Break<img src=${skillMagnum} alt="skillMagnumBreak" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.Quicken):
                return $('.storySpeech').append(`\n <p>Atlan has Unlock Skill Quicken<img src=${skillQuicken} alt="skillQuicken" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.VitalStrike):
                return $('.storySpeech').append(`\n <p>Atlan has Unlock Skill Vital Strike<img src=${skillVitalStrike} alt="skillVitalStrike" />!</p>`)
              case((userStats.Level + 1) === skillCapChart.BowlingBash):
                return $('.storySpeech').append(`\n <p>Atlan has Unlock Skill Bowling Bash<img src=${skillBowlingBash} alt="skillBowlingBash" />!</p>`)
              default:
                return 0;
            }
        }
      if((userStats.JobLevel < 70) && (userStats.JobExperience >= baseJobEXPChart[userStats.JobLevel])){
        (() => {
          switch (true) {
            default:
              return dispatch(UserJobLevelUpFn(1));
          }
        })()
          $('.storySpeech').append(`\n <p>Atlan JobLvl has Level Up to Lv${userStats.JobLevel + 1}</p>`);
        }
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight
      // dependance i
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enemyStats, dispatch, userStats, baseEXPChart, baseJobEXPChart, skillCapChart]);



    // COMBAT FUNCTION
    const userAttackEnemyButton = (enemyIJK,enemyReduceTarget) => {
      Damage = Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      // setTimeout(() => (Uclock = 0), 300);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      //Rerender, Block or not block
      let Khit = Math.random();
      //Target
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }

      (() => {
        switch (true) {
          // Is it Hit? Either Crit 100% or Hit or Stun
          case(((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit) || ((userStats.hitRate + userStats.BonushitRate - enemyTarget.dodgeRate).toFixed(3) >= Khit) || (EnemyStunClockArr[0] >= 0)):
            //if Crit
            if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              // Crit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1]) *skillCapChart.CritDamage) : Damage = 1;
              }
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
            //if Hit or Stun
            }else{
              //Hit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])) : Damage = 1;
              }
            }
            if(skillCapChart.MagnumBreakFireWeaponTurn >= 0){
              Damage = Math.floor(Damage * skillCapChart.MagnumBreakFireAdditionalDamage)
            }
              //Audio SoundEffect
              userStats.userWeapon === "Empty" ? setTimeout(() => audioEmptyHandHit.play() , 100) : setTimeout(() => audioHit.play(), 100);
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              if(SkillControlRoom['User'].UserLearnDoubleAttack === true && SkillControlRoom['User'].UserLearnLifeStealAttack === true){
                //Audio SoundEffect
                userStats.userWeapon === "Empty" ? setTimeout(() => audioEmptyHandHit.play() , 150) : setTimeout(() => audioHit.play(), 150);
                // Text display
                //if Crit
                if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
                  $('.storySpeech').append(`<p>Critial Hit! ${displayEnemyName} Received ${Math.floor(Damage)} damage</p>`)
                  $('.storySpeech').append(`<p>Critial Hit! ${displayEnemyName} Received ${Math.floor(Damage*SkillControlRoom['User'].UserDoubleAttackScale)} damage</p>`)
                }else{
                  $('.storySpeech').append(`<p>${displayEnemyName} Received ${Math.floor(Damage)} damage</p>`)
                  $('.storySpeech').append(`<p>${displayEnemyName} Received ${Math.floor(Damage*SkillControlRoom['User'].UserDoubleAttackScale)} damage</p>`)
                }
                $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)} hp</p>`)
                $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack*SkillControlRoom['User'].UserDoubleAttackScale)} hp</p>`)
                dispatch(UserOnLifeStealAnimationFn(true));
                setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);
                setTimeout(() => dispatch(EnemyOnHitDoubleAnimationFn(true)), 100);
                setTimeout(() => dispatch(EnemyOnHitDoubleAnimationFn(false)), 1100);
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserLifeStealEnemyFn((Math.floor(Damage) + Math.floor(Damage * SkillControlRoom['User'].UserDoubleAttackScale)),enemyIJK,(Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack) + Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack*SkillControlRoom['User'].UserDoubleAttackScale))), 300));
              }else if(SkillControlRoom['User'].UserLearnDoubleAttack === true){
                //Audio SoundEffect
                userStats.userWeapon === "Empty" ? setTimeout(() => audioEmptyHandHit.play() , 150) : setTimeout(() => audioHit.play(), 150);
                // Text display
                if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
                  $('.storySpeech').append(`<p>Critial Hit! ${displayEnemyName} Received ${Math.floor(Damage)} damage</p>`)
                  $('.storySpeech').append(`<p>Critial Hit! ${displayEnemyName} Received ${Math.floor(Damage*SkillControlRoom['User'].UserDoubleAttackScale)} damage</p>`)
                }else{
                  $('.storySpeech').append(`<p>${displayEnemyName} Received ${Math.floor(Damage)} damage</p>`)
                  $('.storySpeech').append(`<p>${displayEnemyName} Received ${Math.floor(Damage*SkillControlRoom['User'].UserDoubleAttackScale)} damage</p>`)
                }
                setTimeout(() => dispatch(EnemyOnHitDoubleAnimationFn(true)), 100);
                setTimeout(() => dispatch(EnemyOnHitDoubleAnimationFn(false)), 1100);
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserAttackEnemyFn((Math.floor(Damage) + Math.floor(Damage * SkillControlRoom['User'].UserDoubleAttackScale))),enemyIJK), 300);
              }else if(SkillControlRoom['User'].UserLearnLifeStealAttack === true){
                 // Text display
                dispatch(UserOnLifeStealAnimationFn(true));
                setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);
                if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
                  $('.storySpeech').append(`<p>Critial Hit! ${displayEnemyName} Received ${Damage} damage</p>`)
                }else{
                  $('.storySpeech').append(`<p>${displayEnemyName} Received ${Damage} damage</p>`)
                }
                $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)} hp</p>`)
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserLifeStealEnemyFn(Damage,enemyIJK,Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)), 300));
              }else{
                // Text display
                if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
                  $('.storySpeech').append(`<p>Critial Hit! ${displayEnemyName} Received ${Damage} damage</p>`)
                }else{
                  $('.storySpeech').append(`<p>${displayEnemyName} Received ${Damage} damage</p>`)
                }
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserAttackEnemyFn(Damage,enemyIJK), 300));
              }
          // ENEMY DODGE
          default:
            //Audio Sound Effect
            audioMiss.play();
            dispatch(EnemyDodgeAnimationFn(true));
            setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
            //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
            if( SkillControlRoom['User'].UserLearnDoubleAttack === true ){
              // Text display
              setTimeout(() => dispatch(EnemyOnHitDoubleAnimationFn(true)), 100);
              setTimeout(() => dispatch(EnemyOnHitDoubleAnimationFn(false)), 1100);
            }
            $('.storySpeech').append(`<p>Atlan Attack! ${displayEnemyName} dodge the attack.</p>`)
            //Rerender
            return setTimeout(() => dispatch(userClockDefendFn()), 300);
        }
        })()
      // End turn
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      clockCheck = 0;
      Uclock = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
    }

    const userDefendButton = () => {
      //Audio SoundEffect
      audioUserBlock.play();
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      dispatch(UserIsBlockAnimationFn());
      dispatch(UserTurnBlockFn());
      // Text display
      $('.storySpeech').append('<p>Atlan Defend himself!</p>')
      Math.floor(userStats.maxHealth*0.05*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) > 0 ? HPHeal = Math.floor(userStats.maxHealth*0.05*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) : HPHeal = 3;
      Math.floor(userStats.maxSP*0.02*(1+(userAttribute.int + userAttribute.BonusInt)*0.02)) > 0 ? SPHeal = Math.floor(userStats.maxSP*0.02*(1+(userAttribute.int + userAttribute.BonusInt)*0.02)) : SPHeal = 1;
      if(SkillControlRoom['User'].UserLearnAmuletRecovery === true){
        dispatch(UserOnHPHealAnimationFn(true));
        setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
        setTimeout(() => dispatch(UserOnSPHealAnimationFn(true)), 100);
        setTimeout(() => dispatch(UserOnSPHealAnimationFn(false)), 1100);
        setTimeout(() => dispatch(AmuletRecoveryFn(HPHeal,SPHeal)), 300);
        // Text display
        $('.storySpeech').append(`<p style="color:#3fff00;">Amulet Recovery heals ${HPHeal}HP ${SPHeal}SP!</p>`);
      }else{
        setTimeout(() => dispatch(userClockDefendFn()), 300);
      }

      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 70;
      dispatch(ResetUserTurnFn());
      
    }

    //COMBAT SKILLS
    const userSkillFirstAidButton = () => {
      if (userStats.currentSP >= skillCapChart.SPFirstAid){
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      dispatch(UserOnLifeStealAnimationFn(true));
      setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);
      Damage = 150;
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UserSkillFirstAidFn(skillCapChart.SPFirstAid, skillCapChart.FirstAidFlatHeal)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Atlan use First Aid!Recover ' + Damage + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
      }
    }



    const userSkillBashButton = (enemyIJK,enemyReduceTarget) => {
      if (userStats.currentSP >= skillCapChart.SPBash){
      //Audio SoundEffect
      audioSkillBash.play();
      Damage = Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      // setTimeout(() => (Uclock = 0), 300);
      let Khit = Math.random();
      //Rerender, Block or not block
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }

      (() => {
        switch (true) {
          case((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit) || ((userStats.hitRate + userStats.BonushitRate - enemyTarget.dodgeRate).toFixed(3) >= Khit || (EnemyStunClockArr[0] >= 0)):
            //Audio SoundEffect
            userStats.userWeapon === "Empty" ? audioEmptyHandHit.play() : audioHit.play();
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //if Crit
            if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              // Crit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) : Damage = 1;
              }
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
            //if Hit
            }else{
              //Hit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BashBaseDamage) : Damage = 1;
              }
            }
            if(skillCapChart.BashStunChance >= Math.random()){
              EnemyStunClockArr[enemyReduceTarget - 1] = 5;
              $('.storySpeech').append(`<p>Bash Stun!${displayEnemyName} suffer a period of stun time...</p>`)
            }
            if(skillCapChart.MagnumBreakFireWeaponTurn >= 0){
              Damage = Math.floor(Damage * skillCapChart.MagnumBreakFireAdditionalDamage)
            }
            //Display Damage
            if((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              $('.storySpeech').append(`<p>Critical Hit Bash!! ${displayEnemyName} Received ${Damage} damage</p>`)
            }else{
              $('.storySpeech').append(`<p>Bash!! ${displayEnemyName} Received ${Damage} damage</p>`)
            }
            if(SkillControlRoom['User'].UserLearnLifeStealAttack === true){
              dispatch(UserOnLifeStealAnimationFn(true));
              setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)} hp</p>`)
              //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserSkillLifeStealEnemyFn(Damage,enemyIJK,Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack),skillCapChart.SPBash,0), 300));
            }else{
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage,enemyIJK,skillCapChart.SPBash)), 300);
            }
          // ENEMY DODGE
          default:
            //Audio SoundEffect
            setTimeout(() => audioMiss.play(), 250)
            $('.storySpeech').append(`<p>Atlan use Bash! ${displayEnemyName} dodge the attack.</p>`)
            dispatch(EnemyDodgeAnimationFn(true));
            setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
            // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
            return setTimeout(() => dispatch(UserSkillBashMissedFn(skillCapChart.SPBash)), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }

    const userSkillMammoniteButton = (enemyIJK,enemyReduceTarget) => {
      if (userStats.currentSP >= skillCapChart.SPMammonite){
      //Audio SoundEffect
      audioSkillMammonite.play();
      Damage = Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      // setTimeout(() => (Uclock = 0), 300);
      let Khit = Math.random();
      //Rerender, Block or not block
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }

      (() => {
        switch (true) {
          case((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit) || ((userStats.hitRate + userStats.BonushitRate - enemyTarget.dodgeRate).toFixed(3) >= Khit || (EnemyStunClockArr[0] >= 0)):
            //Audio SoundEffect
            userStats.userWeapon === "Empty" ? setTimeout(() => audioEmptyHandHit.play() , 100) : setTimeout(() => audioHit.play(), 100);
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              // Crit Block/No	-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) : Damage = 1;
              }
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
            //if Hit
            }else{
              //Hit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MammoniteDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MammoniteBaseDamage) : Damage = 1;
              }
            }

            if(skillCapChart.MagnumBreakFireWeaponTurn >= 0){
              Damage = Math.floor(Damage * skillCapChart.MagnumBreakFireAdditionalDamage)
            }
            //Display Damage
            if((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              $('.storySpeech').append(`<p>Critical Hit Mammonite!! ${displayEnemyName} Received ${Damage} damage. ${Math.floor(Damage*skillCapChart.MammoniteGain)}z Receieved~</p>`)
            }else{
              $('.storySpeech').append(`<p>Mammonite!! ${displayEnemyName} Received ${Damage} damage. ${Math.floor(Damage*skillCapChart.MammoniteGain)}z Receieved~</p>`)
            }
            if(SkillControlRoom['User'].UserLearnLifeStealAttack === true){
              dispatch(UserOnLifeStealAnimationFn(true));
              setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)} hp. ${Math.floor(Damage*skillCapChart.MammoniteGain)}z Receieved~</p>`)
              //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserSkillLifeStealEnemyFn(Damage,enemyIJK,Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack),skillCapChart.SPMammonite,skillCapChart.MammoniteGain), 300));
            }else{
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserSkillMammoniteEnemyFn(Damage,enemyIJK,skillCapChart.SPMammonite,skillCapChart.MammoniteGain)), 300);
            }
          // ENEMY DODGE 
          default:  
            //Audio SoundEffect
            setTimeout(() => audioMiss.play(), 250)
            dispatch(EnemyDodgeAnimationFn(true));
            setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
            $('.storySpeech').append(`<p>Atlan use Mammonite! ${displayEnemyName} dodge the attack.</p>`)
            //Rerender
            return setTimeout(() => dispatch(UserSkillMammoniteMissedFn(skillCapChart.SPMammonite)), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }

    const userSkillKodokuButton = (enemyIJK,enemyReduceTarget) => {
      if (userStats.currentSP >= skillCapChart.SPKodoku){
      //Audio SoundEffect
      audioPoison.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      // setTimeout(() => (Uclock = 0), 300);
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }

      //Rerender, Block or not block
      setTimeout(() => dispatch(UserSkillKodokuFn(skillCapChart.SPKodoku,skillCapChart.KodokuPoisonTurn)), 300);
      Damage = Math.floor(userStats.attack + userStats.Bonusattack*3 + userStats.Level*30 + (userAttribute.int)*8)
      dispatch(UserAttackEnemyFn(parseInt(Damage),enemyIJK));
      $('.storySpeech').append(`<p>Atlan use skill Kodoku! Enemy is become poison.</p>`)
      $('.storySpeech').append(`<p>${displayEnemyName} Received ${Damage} damage</p>`)
        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }

    const userSkillVitalStrikeButton = (enemyIJK,enemyReduceTarget) => {
      if (userStats.currentSP >= skillCapChart.SPVitalStrike){
      //Audio SoundEffect
      audioSkillVitalStrike.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      dispatch(EnemyOnHitAnimationFn());
      setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
      // setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }

      setTimeout(() => dispatch(UserSkillVitalStrikeFn(skillCapChart.SPVitalStrike, skillCapChart.VitalStrikeDefenceBreakDownTurn)), 300);
      Damage = Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.int)*8)
      dispatch(UserAttackEnemyFn(parseInt(Damage),enemyIJK));
      $('.storySpeech').append(`<p>Atlan use skill Vital Strike! Enemy defence is breaking down...</p>`)
      $('.storySpeech').append(`<p>${displayEnemyName} Received ${Damage} damage</p>`)
      EnemyDefenceDebuffArr[enemyReduceTarget - 1] = Math.floor(enemyTarget.defence * skillCapChart.VitalStrikeDefenceBreakDown);
        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }


    const userSkillMagnumBreakButton = (enemyIJK,enemyReduceTarget) => {
      if (userStats.currentSP >= skillCapChart.SPMagnumBreak){
      //Audio SoundEffect
      audioSkillMagBreak.play();
      Damage = Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      // setTimeout(() => (Uclock = 0), 300);
      let Khit = Math.random();
      //Rerender, Block or not block
      dispatch(UserClockFireAttackAttributesFn(skillCapChart.MagnumBreakFireWeaponTurn));
      $('.storySpeech').append(`<p>Atlan Weapon endowed with Fire Attributes for ${skillCapChart.MagnumBreakFireWeaponTurn} turns</p>`);
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }


      (() => {
        switch (true) {
          // ENEMY BLOCK
          case((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit) || (((userStats.hitRate + userStats.BonushitRate) * skillCapChart.MagnumBreakAccuracyPercent - enemyTarget.dodgeRate).toFixed(3) >= Khit || (EnemyStunClockArr[0] >= 0)):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //if Crit
            if ((userStats.critRate + userStats.BonuscritRate- enemyTarget.critResist).toFixed(3) >= Khit){
              // Crit Block/No	-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) : Damage = 1;
              }
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
            //if Hit
            }else{
              //Hit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.MagnumBreakDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.MagnumBreakBaseDamage) : Damage = 1;
              }
            }
            if(skillCapChart.MagnumBreakFireWeaponTurn >= 0){
              Damage = Math.floor(Damage * skillCapChart.MagnumBreakFireAdditionalDamage)
            }
            if((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              $('.storySpeech').append(`<p>Critical Hit Magnum Break!! ${displayEnemyName} Received ${Damage} damage</p>`)
            }else{
              $('.storySpeech').append(`<p>Magnum Break!! ${displayEnemyName} Received ${Damage} damage</p>`)
            }

              if(SkillControlRoom['User'].UserLearnLifeStealAttack === true){
                dispatch(UserOnLifeStealAnimationFn(true));
                setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);
                $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)} hp</p>`)
                dispatch(UserSkillMagnumBreakFn(skillCapChart.MagnumBreakBurningTurn));
                $('.storySpeech').append(`<p>${displayEnemyName} affect by burning</p>`)
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillLifeStealEnemyFn(Damage,enemyIJK,Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack),skillCapChart.SPMagnumBreak,0), 300));
              }else{
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                dispatch(UserSkillMagnumBreakFn(skillCapChart.MagnumBreakBurningTurn));
                $('.storySpeech').append(`<p>${displayEnemyName} affect by burning</p>`)
                return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(Damage,enemyIJK,skillCapChart.SPMagnumBreak)), 300);
              }
          // ENEMY DODGE 
          default:  
              //Audio SoundEffect
              setTimeout(() => audioMiss.play(), 250)
              dispatch(EnemyDodgeAnimationFn(true));
              setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p>Atlan use Magnum Break! ${displayEnemyName} dodge the attack.</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakMissedFn(skillCapChart.SPMagnumBreak)), 300);
        }
        })()

        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }

    const userSkillHeadCrushButton = (enemyIJK,enemyReduceTarget) => {
      if (userStats.currentSP >= skillCapChart.SPHeadCrush){
      //Audio SoundEffect
      audioSkillHeadCrush.play();
      Damage = Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      // setTimeout(() => (Uclock = 0), 300);
      let Khit = Math.random();
      //Rerender, Block or not block
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }

      (() => {
        switch (true) {
          // ENEMY BLOCK
          case((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit) || ((userStats.hitRate + userStats.BonushitRate - enemyTarget.dodgeRate).toFixed(3) >= Khit || (EnemyStunClockArr[0] >= 0)):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //if Crit
            if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              // Crit Block/No	-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) : Damage = 1;
              }
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
            //if Hit
            }else{
              //Hit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.HeadCrushDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + 100) : Damage = 1;
              }
            }
            if(skillCapChart.MagnumBreakFireWeaponTurn >= 0){
              Damage = Math.floor(Damage * skillCapChart.MagnumBreakFireAdditionalDamage)
            }
            if((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              $('.storySpeech').append(`<p>Critical Hit Head Crush!! ${displayEnemyName} Received ${Damage} damage</p>`)
            }else{
              $('.storySpeech').append(`<p>Head Crush!! ${displayEnemyName} Received ${Damage} damage</p>`)
            }

            //Bleeding?
            if(skillCapChart.HeadCrushBleedingChance >= Math.random()){
              dispatch(UserSkillHeadCrushFn(skillCapChart.SPHeadCrush,skillCapChart.HeadCrushBleedingTurn));
              $('.storySpeech').append(`<p>${displayEnemyName} suffers Head Crush injury - (Bleeding Effect).</p>`)
            }

            if(SkillControlRoom['User'].UserLearnLifeStealAttack === true){
              dispatch(UserOnLifeStealAnimationFn(true));
              setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)} hp</p>`)
              //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserSkillLifeStealEnemyFn(Damage,enemyIJK,Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack),skillCapChart.SPHeadCrush,0), 300));
            }else{
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage,enemyIJK,skillCapChart.SPHeadCrush)), 300);
            }
          // ENEMY DODGE 
          default:  
              //Audio SoundEffect
              setTimeout(() => audioMiss.play(), 250)
              dispatch(EnemyDodgeAnimationFn(true));
              setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p>Atlan use Head Cursh! ${displayEnemyName} dodge the attack.</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakMissedFn(skillCapChart.SPHeadCrush)), 300);
        }
        })()

        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }

    const userSkillBowlingBashButton = (enemyIJK,enemyReduceTarget) => {
      if (userStats.currentSP >= skillCapChart.SPBowlingBash){
        //Audio SoundEffect
        audioSkillBash.play();
        Damage = Math.floor(userStats.attack + userStats.Bonusattack + userStats.Level + (userAttribute.str + userAttribute.BonusStr)*3 + (userAttribute.dex + userAttribute.BonusDex)/2 + (userAttribute.luk + userAttribute.BonusLuk) + userStats.BaseWeaponDamage*( 1 + 0.05*(userAttribute.str + userAttribute.BonusStr)) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      // setTimeout(() => (Uclock = 0), 300);
      let Khit = Math.random();
      //Rerender, Block or not block
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }

      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit) || ((userStats.hitRate + userStats.BonushitRate - enemyTarget.dodgeRate).toFixed(3) >= Khit) || (EnemyStunClockArr[0] >= 0)):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //if Crit
            if ((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
              // Crit Block/No	-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.CritDamage*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) : Damage = 1;
              }
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
            //if Hit
            }else{
              //Hit Block/No-Block Calculation
              if (SkillControlRoom['Enemy'].EnemyBlock){
                //blocking
                Math.sign((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defencebuffer + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) : Damage = 1;
              }else{
                //not blocking
                Math.sign((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) > 0 ? Damage = Math.floor((Damage - enemyTarget.defence + EnemyDefenceDebuffArr[enemyReduceTarget - 1])*skillCapChart.BowlingBashDamage*(1+0.03*(userAttribute.int + userAttribute.BonusInt)) + skillCapChart.BowlingBashBaseDamage) : Damage = 1;
              }
            }
            EnemySlowClockArr[enemyReduceTarget - 1] = skillCapChart.BowlingBashSlowClockTurn;

            if(skillCapChart.MagnumBreakFireWeaponTurn >= 0){
              Damage = Math.floor(Damage * skillCapChart.MagnumBreakFireAdditionalDamage)
            }
              $('.storySpeech').append(`<p>Bowling Bash!${displayEnemyName} suffer a period of slow time...</p>`)
              if((userStats.critRate + userStats.BonuscritRate - enemyTarget.critResist).toFixed(3) >= Khit){
                $('.storySpeech').append(`<p>Critical Hit Bowling Bash!! ${displayEnemyName} Received ${Damage} damage</p>`)
              }else{
                $('.storySpeech').append(`<p>Bowling Bash!! ${displayEnemyName} Received ${Damage} damage</p>`)
              }
              if(SkillControlRoom['User'].UserLearnLifeStealAttack === true){
                dispatch(UserOnLifeStealAnimationFn(true));
                setTimeout(() => dispatch(UserOnLifeStealAnimationFn(false)), 1000);     
                $('.storySpeech').append(`<p style="color:#3fff00;">Atlan lifesteal recover ${Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)} hp</p>`)
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillLifeStealEnemyFn(Damage,enemyIJK,Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack),skillCapChart.SPBowlingBash,0), 300));
              }else{
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBowlingBashEnemyFn(Damage,enemyIJK,skillCapChart.SPBowlingBash)), 300);
              }
          // ENEMY DODGE 
          default:
              dispatch(EnemyDodgeAnimationFn(true));
              setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p>Atlan use Bowling Bash! ${displayEnemyName} dodge the attack.</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserSkillBowlingBashMissedFn(skillCapChart.SPBowlingBash)), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }

    const userSkillQuickenButton = () => {
      if (userStats.currentSP >= skillCapChart.SPQuicken){
      //Audio SoundEffect
      audioSkillQuicken.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      // setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      setTimeout(() => dispatch(UserSkillQuickenFn(skillCapChart.SPQuicken,skillCapChart.QuickenSpeedTurn)), 300);
      $('.storySpeech').append(`<p>Atlan use skill Quicken! Attack Speed has increase a period of time!</p>`)  
        // End turn
        clockCheck = 0;
        Uclock = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }
    //ITEMS
    const userItemRedPotionButton = () => {
        //Audio Sound Effect
        audioHeal.play();
        dispatch(UserChannelAnimationFn());
        setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
        dispatch(UserOnHPHealAnimationFn(true));
        setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
        HPHeal = Math.floor(50*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02));
        //Rerender
        // setTimeout(() => (Uclock = 0), 300);
        setTimeout(() => dispatch(UseRedPotionFn(userAttribute.vit + userAttribute.BonusVit)), 300);
        // Text display
        $('.storySpeech').append('<p style="color:#3fff00;">Atlan use red potion! Recover ' + Math.floor(50*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) + ' hp </p>')
        listResult = document.getElementsByClassName('storyChat')[0];
        listResult.scrollTop = listResult.scrollHeight;
        // End turn
        clockCheck = 0;
        Uclock = 0;
        if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
          dispatch(UserTriggerMasterItemFn(false));
        }else{
          clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
          dispatch(UserTriggerMasterItemFn(true));
        }
        dispatch(ResetUserTurnFn());
    }
    const userItemOrangePotionButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      dispatch(UserOnHPHealAnimationFn(true));
      setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
      HPHeal = Math.floor(150*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02))
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseOrangePotionFn(userAttribute.vit + userAttribute.BonusVit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Atlan use orange potion! Recover ' + Math.floor(150*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
        dispatch(UserTriggerMasterItemFn(false));
      }else{
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(UserTriggerMasterItemFn(true));
      }
      dispatch(ResetUserTurnFn());
    }
    const userItemYellowPotionButton = () => {
        //Audio Sound Effect
        audioHeal.play();
        dispatch(UserChannelAnimationFn());
        setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
        dispatch(UserOnHPHealAnimationFn(true));
        setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
        HPHeal = Math.floor(400*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02));
        //Rerender
        // setTimeout(() => (Uclock = 0), 300);
        setTimeout(() => dispatch(UseYellowPotionFn(userAttribute.vit + userAttribute.BonusVit)), 300);
        // Text display
        $('.storySpeech').append('<p style="color:#3fff00;">Atlan use yellow potion! Recover ' + Math.floor(400*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) + ' hp </p>')
        listResult = document.getElementsByClassName('storyChat')[0];
        listResult.scrollTop = listResult.scrollHeight;
        // End turn
        clockCheck = 0;
        Uclock = 0;
        if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
          dispatch(UserTriggerMasterItemFn(false));
        }else{
          clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
          dispatch(UserTriggerMasterItemFn(true));
        }
        dispatch(ResetUserTurnFn());
    }
    const userItemWhitePotionButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      dispatch(UserOnHPHealAnimationFn(true));
      setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
      HPHeal = Math.floor(800*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02));
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseWhitePotionFn(userAttribute.vit + userAttribute.BonusVit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Atlan use white potion!Recover ' + Math.floor(800*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
        dispatch(UserTriggerMasterItemFn(false));
      }else{
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(UserTriggerMasterItemFn(true));
      }
      dispatch(ResetUserTurnFn());
    }
    const userItemAnniversaryCakeButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      dispatch(UserOnHPHealAnimationFn(true));
      setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
      HPHeal = Math.floor(1200*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02));
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseAnniversaryCakeFn(userAttribute.vit + userAttribute.BonusVit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Atlan use anniversary cake! Recover ' + Math.floor(1200*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
        dispatch(UserTriggerMasterItemFn(false));
      }else{
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(UserTriggerMasterItemFn(true));
      }
      dispatch(ResetUserTurnFn());
    }
    const userItemMastelaFruitButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      dispatch(UserOnHPHealAnimationFn(true));
      setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
      HPHeal = Math.floor(2000*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02));
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseMastelaFruitFn(userAttribute.vit + userAttribute.BonusVit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Atlan use mastela fruit! Recover ' + Math.floor(2000*(1+(userAttribute.vit + userAttribute.BonusVit)*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
        dispatch(UserTriggerMasterItemFn(false));
      }else{
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(UserTriggerMasterItemFn(true));
      }
      dispatch(ResetUserTurnFn());
    }
    const userItemBluePotionButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseBluePotionFn(userAttribute.int + userAttribute.BonusInt)), 300);
      dispatch(UserOnSPHealAnimationFn(true));
      setTimeout(() => dispatch(UserOnSPHealAnimationFn(false)), 1000);
      SPHeal = Math.floor(60*(1+(userAttribute.int + userAttribute.BonusInt)*0.02));
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Atlan use blue potion! Recover ' + Math.floor(60*(1+(userAttribute.int + userAttribute.BonusInt)*0.02)) + ' sp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
        dispatch(UserTriggerMasterItemFn(false));
      }else{
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(UserTriggerMasterItemFn(true));
      }
      dispatch(ResetUserTurnFn());
    }
    const userItemYggdrasilBerryButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      dispatch(UserOnHPHealAnimationFn(true));
      setTimeout(() => dispatch(UserOnHPHealAnimationFn(false)), 1000);
      setTimeout(() => dispatch(UserOnSPHealAnimationFn(true)), 100);
      setTimeout(() => dispatch(UserOnSPHealAnimationFn(false)), 1100);
      HPHeal = userStats.maxHealth;
      SPHeal = userStats.maxSP;
      //Rerender
      // setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseYggdrasilBerryFn()), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Atlan use Yggdrasil Berry!! HP SP fully recover! </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      Uclock = 0;
      if(SkillControlRoom['User'].UserLearnMasterItem === true && SkillControlRoom['User'].UserTriggerMasterItem === true){
        dispatch(UserTriggerMasterItemFn(false));
      }else{
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(UserTriggerMasterItemFn(true));
      }
      dispatch(ResetUserTurnFn());
    }
    // Enemy AI
    const enemyDecisionQFn = (enemyIJK,enemyReduceTarget) => {
      // setTimeout(() => (Uclock = 0), 300);
      if(enemyReduceTarget === 1){
        enemyTarget = enemyStats[enemyIJK]
        displayEnemyName = EnemyOneName
          
      }else if(enemyReduceTarget === 2){
        enemyTarget = enemyStatsTwo[enemyIJK]
        displayEnemyName = EnemyTwoName

      }else if(enemyReduceTarget === 3){
        enemyTarget = enemyStatsThree[enemyIJK]
        displayEnemyName = EnemyThreeName
      }
      Damage = Math.floor(((enemyStats[i].attack * (userStats.BaseArmorDef + userStats.BaseHeadGearDef + userStats.BaseFootGearDef + userStats.BaseGarmentDef + userStats.BaseAccessoryOneDef + userStats.BaseAccessoryTwoDef + 2000) / (((userStats.BaseArmorDef + userStats.BaseHeadGearDef + userStats.BaseFootGearDef + userStats.BaseGarmentDef + userStats.BaseAccessoryOneDef + userStats.BaseAccessoryTwoDef) * 10) + 2000)) - ((userAttribute.vit + userAttribute.BonusVit)*2 + (userAttribute.agi + userAttribute.BonusAgi)/2 + userStats.Level) * (Math.random() * 0.5) - 0.25));
      let Khit = Math.random();
      
      (() => {
          switch (true) {
          //EnemyAttack & Hit
            case(Math.random() <= 0.9):
              //Rerender, Block or not block
              (() => {
              switch (true) {
                // USER BLOCK
                case (SkillControlRoom['User'].UserBlock && ((enemyStats[i].hitRate - userStats.dodgeRate - userStats.BonusdodgeRate).toFixed(3) >= Khit)):
                  dispatch(EnemyAttackAnimationFn(true));
                  setTimeout(() => dispatch(EnemyAttackAnimationFn(false)), 1050);
                  dispatch(UserOnHitAnimationFn());
                  setTimeout(() => dispatch(ResetUserOnHitAnimationFn()), 300);
                  //CRIT RATE
                  switch (true) {
                    case(enemyStats[i].critRate >= Math.random()):
                      //Audio Sound Effect
                      audioUserBlock.play();
                      dispatch(UserIsCritAnimationFn(true));
                      setTimeout(() => dispatch(UserIsCritAnimationFn(false)), 1050);
                      Math.sign((Damage * 1.5) - userStats.defencebuffer - userStats.Bonusdefencebuffer) > 0 ? Damage = Math.floor((Damage * 1.5) - userStats.defencebuffer - userStats.Bonusdefencebuffer) : Damage = 1;

                      //ReflectSkill
                      if( SkillControlRoom['User'].UserLearnReflectAttack === true ){
                        Math.sign(Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale)) > 0 ? Reflecting = Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale) : Reflecting = 1;
                        // Text display
                        $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Critical Hit Attack!! Atlan Received ${Damage} damage</p>`)
                        $('.storySpeech').append(`<p>Atlan Reflects ${enemyStats[i].name}!! ${enemyStats[i].name} Received ${Reflecting} damage</p>`)
                        dispatch(EnemyOnReflectNumberFn(true));
                        setTimeout(() => dispatch(EnemyOnReflectNumberFn(false)), 1000);
                        //Rerender
                        return setTimeout(() => dispatch(EnemyAttackReflectUserFn(Damage,i,Reflecting), 300));
                      }else{
                        // Text display
                        $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Critical Hit Attack!! Atlan Received ${Damage} damage</p>`)
                        //Rerender
                        return dispatch(EnemyAttackBlockUserFn(Damage));
                      }
                    default:
                      //Audio Sound Effect
                      audioUserBlock.play();
                      Math.sign(Damage - userStats.defencebuffer - userStats.Bonusdefencebuffer) > 0 ? Damage = Damage - userStats.defencebuffer - userStats.Bonusdefencebuffer : Damage = 1;
                      //ReflectSkill
                      if( SkillControlRoom['User'].UserLearnReflectAttack === true ){
                        Math.sign(Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale)) > 0 ? Reflecting = Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale) : Reflecting = 1;
                        // Text display
                        $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Atlan Received ${Damage} damage</p>`)
                        $('.storySpeech').append(`<p>Atlan Reflects ${enemyStats[i].name}!! ${enemyStats[i].name} Received ${Reflecting} damage</p>`)
                        dispatch(EnemyOnReflectNumberFn(true));
                        setTimeout(() => dispatch(EnemyOnReflectNumberFn(false)), 1000);
                        //Rerender
                        return setTimeout(() => dispatch(EnemyAttackReflectUserFn(Damage,i,Reflecting), 300));
                      }else{
                      // Text display
                      $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Atlan Received ${Damage} damage</p>`)
                      //Rerender
                      return dispatch(EnemyAttackBlockUserFn(Damage));
                      }
                  }
                // USER HIT
                case ((enemyStats[i].hitRate - userStats.dodgeRate - userStats.BonusdodgeRate).toFixed(3) >= Khit):
                  dispatch(EnemyAttackAnimationFn(true));
                  setTimeout(() => dispatch(EnemyAttackAnimationFn(false)), 1050);
                  dispatch(UserOnHitAnimationFn());
                  setTimeout(() => dispatch(ResetUserOnHitAnimationFn()), 300);
                  //CRIT RATE
                  switch (true) {
                  case(enemyStats[i].critRate >= Math.random()):
                    //Audio Sound Effect
                    audioUserHit.play();
                    dispatch(UserIsCritAnimationFn(true));
                    setTimeout(() => dispatch(UserIsCritAnimationFn(false)), 1050);
                    Math.sign((Damage * 1.5) - userStats.defence - userStats.Bonusdefence) > 0 ? Damage = Math.floor((Damage * 1.5) - userStats.defence - userStats.Bonusdefence) : Damage = 1;
                    //ReflectSkill
                    if( SkillControlRoom['User'].UserLearnReflectAttack === true ){
                      Math.sign(Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale)) > 0 ? Reflecting = Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale) : Reflecting = 1;
                      // Text display
                      $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Critical Hit Attack!! Atlan Received ${Damage} damage</p>`)
                      $('.storySpeech').append(`<p>Atlan Reflects ${enemyStats[i].name}!! ${enemyStats[i].name} Received ${Reflecting} damage</p>`)
                      dispatch(EnemyOnReflectNumberFn(true));
                      setTimeout(() => dispatch(EnemyOnReflectNumberFn(false)), 1000);
                      //Rerender
                      return setTimeout(() => dispatch(EnemyAttackReflectUserFn(Damage,i,Reflecting), 300));
                    }else{
                    // Text display
                    $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Critical Hit Attack!!Atlan Received ${Damage} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(Damage));
                    }


                  default:
                    //Audio Sound Effect
                    audioUserHit.play();
                    Math.sign(Damage - userStats.defence - userStats.Bonusdefence) > 0 ? Damage = Damage - userStats.defence - userStats.Bonusdefence : Damage = 1;

                    //ReflectSkill
                    if( SkillControlRoom['User'].UserLearnReflectAttack === true ){
                      Math.sign(Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale)) > 0 ? Reflecting = Math.floor(Damage*SkillControlRoom['User'].UserReflectAttackScale) : Reflecting = 1;
                      // Text display
                      $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Atlan Received ${Damage} damage</p>`)
                      $('.storySpeech').append(`<p>Atlan Reflects ${enemyStats[i].name}!! ${enemyStats[i].name} Received ${Reflecting} damage</p>`)
                      dispatch(EnemyOnReflectNumberFn(true));
                      setTimeout(() => dispatch(EnemyOnReflectNumberFn(false)), 1000);  
                      //Rerender
                      return setTimeout(() => dispatch(EnemyAttackReflectUserFn(Damage,i,Reflecting), 300));
                    }else{
                    // Text display
                    $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Atlan Received ${Damage} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(Damage));      
                    }
                  }
                // USER DODGE
                default:
                  //Audio Sound Effect
                  audioMiss.play();
                  dispatch(EnemyAttackAnimationFn(true));
                  setTimeout(() => dispatch(EnemyAttackAnimationFn(false)), 1050);
                  dispatch(UserIsDodgeAnimationFn(true));
                  setTimeout(() => dispatch(UserIsDodgeAnimationFn(false)), 1050);
                  $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Atlan dodge the attack!</p>`)
                  //Rerender
                  return setTimeout(() => dispatch(enemyClockDefendFn()), 300);
              }
              })()
            break;
            //Enemy Defend itself
            case(true):
              dispatch(EnemyTurnBlockFn());
              // Text display
              $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Defend itself...</p>`)
              //Rerender
              return setTimeout(() => dispatch(enemyClockDefendFn()), 300);
            default:
              clockCheck = 0;
              Uclock = 0;
              clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
              return dispatch(ResetEnemyTurnFn());
            }
      })()
      // End turn
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      clockCheck = 0;
      Uclock = 0;
      clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
      dispatch(ResetEnemyTurnFn());
    }
    


  const clockBaseQtn = () => {
          // 1. First Enemy Only
    if ((userStats.currentHealth > 0 && Uclock === 0 && enemyStats[i].currentHealth > 0) ||
          // 2. First and Second Enemy
        (userStats.currentHealth > 0 && Uclock === 0 && enemyStats[i].currentHealth > 0 && j !== undefined && enemyStatsTwo[j].currentHealth > 0) ||
        // 3. 3 Enemies
        (userStats.currentHealth > 0 && Uclock === 0 && enemyStats[i].currentHealth > 0 && j !== undefined && enemyStatsTwo[j].currentHealth > 0 && k !== undefined && enemyStatsThree[k].currentHealth > 0)
        ){
      const ClockTurn = setInterval(() => {
        // *study
        (() => {
          switch (true) {
            case (
              (clockBarObject.userClockBar >= 100 && parseInt(userStats.speed + userStats.Bonusspeed) >= enemyStats[i].speed) 
            || (clockBarObject.userClockBar >= 100 && j !== undefined && parseInt(userStats.speed + userStats.Bonusspeed) >= enemyStatsTwo[j].speed) 
            || (clockBarObject.userClockBar >= 100 && k !== undefined && parseInt(userStats.speed + userStats.Bonusspeed) >= enemyStatsThree[k].speed)
            || (clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar < 100 && (j !== undefined && clockBarObject.enemyTwoClockBar < 100) && (k !== undefined && clockBarObject.enemyThreeClockBar < 100)
            || (clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar < 100 && (j !== undefined && clockBarObject.enemyTwoClockBar < 100))
            || (clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar < 100)
            )
            ):
              //Reset All Block
              // dispatch(ResetUserIsBlockAnimationFn());
              // dispatch(ResetUserTurnBlockFn());
              // dispatch(ReturnUserInSelectSkillFn());
              // dispatch(ReturnUserInSelectItemFn());
              //ResetAllBattleStats
              dispatch(UserBattleStatsFn());
              //testing
              dispatch(EnemyAttackUserFn(1));
              clockCheck = 1;
              dispatch(UserTurnFn());
              $('.storySpeech').append('<p>--------- Atlan Turn ---------</p>')
              if(SkillControlRoom['User'].UserLearnMagnificat){
                //Magnificat user AmuletRecoveryFn
                audioHeal.play();
                HPMagnificat = 30;
                SPMagnificat = 5;
                dispatch(UserOnHPMagnificatFn(true));
                setTimeout(() => dispatch(UserOnHPMagnificatFn(false)), 1000);
                setTimeout(() => dispatch(UserOnSPMagnificatFn(true)), 100);
                setTimeout(() => dispatch(UserOnSPMagnificatFn(false)), 1100);
                dispatch(AmuletRecoveryFn(HPMagnificat,SPMagnificat));
                $('.storySpeech').append(`<p style="color:#3fff00;">Magnificat Buff, Atlan Recovers ${HPMagnificat}HP ${SPMagnificat}SP.</p>\n`)
              }
              listResult = document.getElementsByClassName('storyChat')[0];
              listResult.scrollTop = listResult.scrollHeight;
              // console.log('UserTurn is good')
              //continue enempyStats[i,j,k]
              for(let h = 0; h < 3; ++h){
                if(idArray[h] !== undefined){
                  if (enemyTargetArray[h].currentHealth - parseInt(enemyTargetArray[h].maxHealth*skillCapChart.KodokuPoisonPercent) > 0 && SkillControlRoom[skillRoomStringArray[h]].EnemyPoison >= 0){
                    dispatch(UserAttackEnemyFn(parseInt(enemyTargetArray[h].maxHealth*skillCapChart.KodokuPoisonPercent),i));
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Kodoku Posion, Received ${parseInt(enemyTargetArray[h].maxHealth*skillCapChart.KodokuPoisonPercent)} damage</p>\n`)
                  }else if(SkillControlRoom[skillRoomStringArray[h]].EnemyPoison >= 0) {
                    dispatch(UserSkillKodokuEnemyFn());
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Kodoku Posion...</p>\n`)
                  }
                  if (enemyTargetArray[h].currentHealth - parseInt(enemyTargetArray[h].maxHealth*skillCapChart.HeadCrushBleedingPercent) > 0 && SkillControlRoom[skillRoomStringArray[h]].EnemyBurning >= 0){
                    dispatch(UserAttackEnemyFn(parseInt(enemyTargetArray[h].maxHealth*skillCapChart.HeadCrushBleedingPercent),i));
                    $('.storySpeech').append(`<p>${displayNameArray} affect by MagnumBreak Burning, Received ${parseInt(enemyTargetArray[h].maxHealth*skillCapChart.HeadCrushBleedingPercent)} damage</p>\n`)
                  }else if(SkillControlRoom[skillRoomStringArray[h]].EnemyBurning >= 0){
                    dispatch(UserSkillKodokuEnemyFn());
                    $('.storySpeech').append(`<p>${displayNameArray} affect by MagnumBreak Burning...</p>\n`)
                  }
                  if (enemyTargetArray[h].currentHealth - parseInt(enemyTargetArray[h].maxHealth*skillCapChart.MagnumBreakBurningPercent) > 0 && SkillControlRoom[skillRoomStringArray[h]].EnemyBleeding >= 0){
                    dispatch(UserAttackEnemyFn(parseInt(enemyTargetArray[h].maxHealth*skillCapChart.MagnumBreakBurningPercent),i));
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Head Crush Bleeding, Received ${parseInt(enemyTargetArray[h].maxHealth*skillCapChart.MagnumBreakBurningPercent)} damage</p>\n`)
                  }else if(SkillControlRoom[skillRoomStringArray[h]].EnemyBleeding >= 0){
                    dispatch(UserSkillKodokuEnemyFn());
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Head Crush Bleeding...</p>\n`)
                  }  
                  if (SkillControlRoom[skillRoomStringArray[h]].EnemyDefenceBreak < 0){
                    EnemyDefenceDebuffArr[0] = 0;
                  }else if (SkillControlRoom[skillRoomStringArray[h]].EnemyDefenceBreak >= 0){
                    $('.storySpeech').append(`<p>${displayNameArray} defence is shredding...</p>\n`)
                  }
                }
              }
            // if (enemyStats[i].currentHealth - parseInt(enemyStats[i].maxHealth*skillCapChart.KodokuPoisonPercent) > 0 && SkillControlRoom['Enemy'].EnemyPoison >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStats[i].maxHealth*skillCapChart.KodokuPoisonPercent),i));
            //     $('.storySpeech').append(`<p>${enemyStats[i].name} affect by Kodoku Posion, Received ${parseInt(enemyStats[i].maxHealth*skillCapChart.KodokuPoisonPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['Enemy'].EnemyPoison >= 0) {
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${enemyStats[i].name} affect by Kodoku Posion...</p>\n`)
            //   }
            //   if (enemyStats[i].currentHealth - parseInt(enemyStats[i].maxHealth*skillCapChart.HeadCrushBleedingPercent) > 0 && SkillControlRoom['Enemy'].EnemyBurning >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStats[i].maxHealth*skillCapChart.HeadCrushBleedingPercent),i));
            //     $('.storySpeech').append(`<p>${enemyStats[i].name} affect by MagnumBreak Burning, Received ${parseInt(enemyStats[i].maxHealth*skillCapChart.HeadCrushBleedingPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['Enemy'].EnemyBurning >= 0){
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${enemyStats[i].name} affect by MagnumBreak Burning...</p>\n`)
            //   }
            //   if (enemyStats[i].currentHealth - parseInt(enemyStats[i].maxHealth*skillCapChart.MagnumBreakBurningPercent) > 0 && SkillControlRoom['Enemy'].EnemyBleeding >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStats[i].maxHealth*skillCapChart.MagnumBreakBurningPercent),i));
            //     $('.storySpeech').append(`<p>${enemyStats[i].name} affect by Head Crush Bleeding, Received ${parseInt(enemyStats[i].maxHealth*skillCapChart.MagnumBreakBurningPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['Enemy'].EnemyBleeding >= 0){
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${enemyStats[i].name} affect by Head Crush Bleeding...</p>\n`)
            //   }  
            //   if (SkillControlRoom['Enemy'].EnemyDefenceBreak < 0){
            //     EnemyDefenceDebuffArr[0] = 0;
            //   }else if (SkillControlRoom['Enemy'].EnemyDefenceBreak >= 0){
            //     $('.storySpeech').append(`<p>${enemyStats[i].name} defence is shredding...</p>\n`)
            //   }

            // if(j !== undefined){
            //   (enemyStats[i].name === enemyStatsTwo[j].name && j !== undefined) || (enemyStatsTwo[j].name === enemyStatsThree[k].name && k !== undefined && j !== undefined) ?
            //   displayEnemyName = enemyStatsTwo[i].name + " 2" : displayEnemyName = enemyStatsTwo[i].name

            //   if (enemyStatsTwo[j].currentHealth - parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.KodokuPoisonPercent) > 0 && SkillControlRoom['EnemyTwo'].EnemyPoison >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.KodokuPoisonPercent),i));
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Kodoku Posion, Received ${parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.KodokuPoisonPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['EnemyTwo'].EnemyPoison >= 0) {
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Kodoku Posion...</p>\n`)
            //   }
            //   if (enemyStatsTwo[j].currentHealth - parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.HeadCrushBleedingPercent) > 0 && SkillControlRoom['EnemyTwo'].EnemyBurning >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.HeadCrushBleedingPercent),i));
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by MagnumBreak Burning, Received ${parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.HeadCrushBleedingPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['EnemyTwo'].EnemyBurning >= 0){
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by MagnumBreak Burning...</p>\n`)
            //   }
            //   if (enemyStatsTwo[j].currentHealth - parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.MagnumBreakBurningPercent) > 0 && SkillControlRoom['EnemyTwo'].EnemyBleeding >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.MagnumBreakBurningPercent),i));
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Head Crush Bleeding, Received ${parseInt(enemyStatsTwo[j].maxHealth*skillCapChart.MagnumBreakBurningPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['EnemyTwo'].EnemyBleeding >= 0){
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Head Crush Bleeding...</p>\n`)
            //   }  
            //   if (SkillControlRoom['EnemyTwo'].EnemyDefenceBreak < 0){
            //     EnemyDefenceDebuffArr[1] = 0;
            //   }else if (SkillControlRoom['EnemyTwo'].EnemyDefenceBreak >= 0){
            //     $('.storySpeech').append(`<p>${displayEnemyName} defence is shredding...</p>\n`)
            //   }
            // }

            // if(k !== undefined){
            //   (enemyStats[i].name === enemyStatsThree[k].name && k !== undefined) || (enemyStatsTwo[j].name === enemyStatsThree[k].name && k !== undefined && j !== undefined) ?
            //   displayEnemyName = enemyStatsThree[k].name + " 3" : displayEnemyName = enemyStatsThree[k].name

            //   if (enemyStatsThree[k].currentHealth - parseInt(enemyStatsThree[k].maxHealth*skillCapChart.KodokuPoisonPercent) > 0 && SkillControlRoom['EnemyTwo'].EnemyPoison >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStatsThree[k].maxHealth*skillCapChart.KodokuPoisonPercent),i));
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Kodoku Posion, Received ${parseInt(enemyStatsThree[k].maxHealth*skillCapChart.KodokuPoisonPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['EnemyTwo'].EnemyPoison >= 0) {
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Kodoku Posion...</p>\n`)
            //   }
            //   if (enemyStatsThree[k].currentHealth - parseInt(enemyStatsThree[k].maxHealth*skillCapChart.HeadCrushBleedingPercent) > 0 && SkillControlRoom['EnemyTwo'].EnemyBurning >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStatsThree[k].maxHealth*skillCapChart.HeadCrushBleedingPercent),i));
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by MagnumBreak Burning, Received ${parseInt(enemyStatsThree[k].maxHealth*skillCapChart.HeadCrushBleedingPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['EnemyTwo'].EnemyBurning >= 0){
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by MagnumBreak Burning...</p>\n`)
            //   }
            //   if (enemyStatsThree[k].currentHealth - parseInt(enemyStatsThree[k].maxHealth*skillCapChart.MagnumBreakBurningPercent) > 0 && SkillControlRoom['EnemyTwo'].EnemyBleeding >= 0){
            //     dispatch(UserAttackEnemyFn(parseInt(enemyStatsThree[k].maxHealth*skillCapChart.MagnumBreakBurningPercent),i));
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Head Crush Bleeding, Received ${parseInt(enemyStatsThree[k].maxHealth*skillCapChart.MagnumBreakBurningPercent)} damage</p>\n`)
            //   }else if(SkillControlRoom['EnemyTwo'].EnemyBleeding >= 0){
            //     dispatch(UserSkillKodokuEnemyFn());
            //     $('.storySpeech').append(`<p>${displayEnemyName} affect by Head Crush Bleeding...</p>\n`)
            //   }  
            //   if (SkillControlRoom['EnemyTwo'].EnemyDefenceBreak < 0){
            //     EnemyDefenceDebuffArr[2] = 0;
            //   }else if (SkillControlRoom['EnemyTwo'].EnemyDefenceBreak >= 0){
            //     $('.storySpeech').append(`<p>${displayEnemyName} defence is shredding...</p>\n`)
            //   }
            // }

              return clearInterval(ClockTurn);
            case (
              (clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (parseInt(userStats.speed) < enemyStats[i].speed)) 
              || (clockBarObject.userClockBar >= 100 && j !== undefined && parseInt(userStats.speed + userStats.Bonusspeed) < enemyStatsTwo[j].speed) 
              || (clockBarObject.userClockBar >= 100 && k !== undefined && parseInt(userStats.speed + userStats.Bonusspeed) < enemyStatsThree[k].speed)
              || (clockBarObject.userClockBar < 100 && (clockBarObject.enemyClockBar >= 100 || (j !== undefined && clockBarObject.enemyTwoClockBar >= 100) || (k !== undefined && clockBarObject.enemyThreeClockBar >= 100)))
              || (clockBarObject.userClockBar < 100 && (clockBarObject.enemyClockBar >= 100 || (j !== undefined && clockBarObject.enemyTwoClockBar >= 100)))
              || (clockBarObject.userClockBar < 100 && clockBarObject.enemyClockBar >= 100)
              ):

              // dispatch(ResetEnemyTurnBlockFn());
              // dispatch(EnemyTurnFn());
              dispatch(EnemyBattleStatsFn());
              $('.storySpeech').append(`<p style="color:red">--------- ${enemyStats[i].name} Turn ---------</p>\n`)
              listResult = document.getElementsByClassName('storyChat')[0];
              listResult.scrollTop = listResult.scrollHeight;
              clockCheck = 1;
              //Prevent Rerender
              for(let h = 0; h < 3; ++h){
                if(idArray[h] !== undefined){
                  if (enemyTargetArray[h].currentHealth - parseInt(enemyTargetArray[h].maxHealth*skillCapChart.KodokuPoisonPercent) > 0 && SkillControlRoom[skillRoomStringArray[h]].EnemyPoison >= 0){
                    dispatch(UserAttackEnemyFn(parseInt(enemyTargetArray[h].maxHealth*skillCapChart.KodokuPoisonPercent),i));
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Kodoku Posion, Received ${parseInt(enemyTargetArray[h].maxHealth*skillCapChart.KodokuPoisonPercent)} damage</p>\n`)
                  }else if(SkillControlRoom[skillRoomStringArray[h]].EnemyPoison >= 0) {
                    dispatch(UserSkillKodokuEnemyFn());
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Kodoku Posion...</p>\n`)
                  }
                  if (enemyTargetArray[h].currentHealth - parseInt(enemyTargetArray[h].maxHealth*skillCapChart.HeadCrushBleedingPercent) > 0 && SkillControlRoom[skillRoomStringArray[h]].EnemyBurning >= 0){
                    dispatch(UserAttackEnemyFn(parseInt(enemyTargetArray[h].maxHealth*skillCapChart.HeadCrushBleedingPercent),i));
                    $('.storySpeech').append(`<p>${displayNameArray} affect by MagnumBreak Burning, Received ${parseInt(enemyTargetArray[h].maxHealth*skillCapChart.HeadCrushBleedingPercent)} damage</p>\n`)
                  }else if(SkillControlRoom[skillRoomStringArray[h]].EnemyBurning >= 0){
                    dispatch(UserSkillKodokuEnemyFn());
                    $('.storySpeech').append(`<p>${displayNameArray} affect by MagnumBreak Burning...</p>\n`)
                  }
                  if (enemyTargetArray[h].currentHealth - parseInt(enemyTargetArray[h].maxHealth*skillCapChart.MagnumBreakBurningPercent) > 0 && SkillControlRoom[skillRoomStringArray[h]].EnemyBleeding >= 0){
                    dispatch(UserAttackEnemyFn(parseInt(enemyTargetArray[h].maxHealth*skillCapChart.MagnumBreakBurningPercent),i));
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Head Crush Bleeding, Received ${parseInt(enemyTargetArray[h].maxHealth*skillCapChart.MagnumBreakBurningPercent)} damage</p>\n`)
                  }else if(SkillControlRoom[skillRoomStringArray[h]].EnemyBleeding >= 0){
                    dispatch(UserSkillKodokuEnemyFn());
                    $('.storySpeech').append(`<p>${displayNameArray} affect by Head Crush Bleeding...</p>\n`)
                  }  
                  if (SkillControlRoom[skillRoomStringArray[h]].EnemyDefenceBreak < 0){
                    EnemyDefenceDebuffArr[0] = 0;
                  }else if (SkillControlRoom[skillRoomStringArray[h]].EnemyDefenceBreak >= 0){
                    $('.storySpeech').append(`<p>${displayNameArray} defence is shredding...</p>\n`)
                  }
                }
              }
              enemyDecisionQFn();
              // console.log('EnemyTurn is good')
              return clearInterval(ClockTurn);
            default:
              let arr = [SkillControlRoom['User'].userClockQuicken,EnemySlowClockArr[0],enemyStats[i].currentHealth,EnemySlowClockArr[1],enemyStatsTwo[j].currentHealth,EnemySlowClockArr[2],enemyStatsThree[k].currentHealth]
              //Quicken,Slow1,Health1,Slow2,Health2,Slow3,Health3
              let commonResult = [0,0,0,0,0,0,0];
              for (let g = 0; g < 7; g++){
                if(arr[g] >= 0){
                  commonResult[g] = 1
                }else{
                  commonResult[g] = 0
                }
              }
              let stunResult = [0,0,0]
              for (let g = 0; g < 3; g++){
                if(EnemyStunClockArr[g] >= 0){
                  stunResult[g] = 0
                }else{
                  stunResult[g] = 1
                }
              }
                  Uclock = 1;
                  for(let p = 0; p < EnemyStunClockArr.length ; p++){
                    if(EnemyStunClockArr[p] >= 0){
                      EnemyStunClockArr[p] = EnemyStunClockArr[p] - 1
                    }
                  }
                  for(let p = 0; p < EnemySlowClockArr.length ; p++){
                    if(EnemySlowClockArr[p] >= 0){
                      EnemySlowClockArr[p] = EnemySlowClockArr[p] - 1
                    }
                  }

                  return clockBarObject = {
                            userClockBar: clockBarObject.userClockBar + parseInt(userStats.speed + userStats.Bonusspeed) + skillCapChart.QuickenSpeed * commonResult[0],
                            enemyClockBar: clockBarObject.enemyClockBar + (parseInt(enemyStats[i].speed * (1 - skillCapChart.BowlingBashSlowPercent * commonResult[1]))) * stunResult[0] * commonResult[2],
                            enemyTwoClockBar: clockBarObject.enemyTwoClockBar + (parseInt(enemyStatsTwo[j].speed * (1 - skillCapChart.BowlingBashSlowPercent * commonResult[3]))) * stunResult[1] * commonResult[4],
                            enemyThreeClockBar: clockBarObject.enemyThreeClockBar + (parseInt(enemyStatsThree[k].speed * (1 - skillCapChart.BowlingBashSlowPercent * commonResult[5]))) * stunResult[2] * commonResult[6],
                          }
          }
        })()
        // console.log('ticking')
        }, 100);
    }
  }

    // Longest Animation 1.2 = 0.3 onhit + 0.9 delay
    useEffect(() => {
      if (Uclock === 0 && clockCheck === 0){
        setTimeout(() => clockBaseQtn(), 900);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStats,enemyStats, dispatch]);

    //Rerender Clock FN
    const clockRenderQtn = () => {
      if (Uclock === 0){
      const ClockTurn = setInterval(() => {
        (() => {
          switch (true) {
           case(clockCheck === 1 || userStats.currentHealth <= 0 || enemyStats[i].currentHealth <= 0):
              listResult = document.getElementsByClassName('storyChat')[0];
              listResult.scrollTop = listResult.scrollHeight;
              return clearInterval(ClockTurn);
           default:
              return dispatch(TickingClockFn());
          }
        })()
      },100)
      }
    }
    //Rerender Clock FN
    //Uclock, clockCheck = 0;
    useEffect(() => {
        if (Uclock === 0){
          setTimeout(() => clockRenderQtn(), 900);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStats,enemyStats, dispatch]);

    return(
      <div>
        {
        screenControlRoom.PoringIsland ? <PoringIsland />:
        screenControlRoom.PayonCave1F ? <PayonCave1F />:
        screenControlRoom.GeffenDungeon1F ? <GeffenDungeon1F />:
        screenControlRoom.GeffenDungeon3F ? <GeffenDungeon3F />:
        screenControlRoom.ChallengeTower ? <ChallengeTower />:
        screenControlRoom.WorldMap ? <WorldMap /> :
        <div className={ImageControlRoom.EnemyOnCrit || ImageControlRoom.UserIsCrit ? "battleScreenShakeMore" : ImageControlRoom.EnemyOnHit || ImageControlRoom.UserOnHit ? "battleScreenShake" : null}>
            <div className="storyMapScreen">
              <div className={i <= 5 ? "battleScreenBase" : i <= 15 ? "battleScreenBase battleScreenPayonCave" : i <= 24 ? "battleScreenBase battleScreenGeffenDungeon" : "battleScreenBase battleScreenFinalBoss"}>
                <div className="enemyBox"> 
                      {EnemyBox.map(Enemy => {
                        return( 
                          <div key={Enemy.id}>
                            {i === Enemy.number ? 
                            <div className="EnemyImageBox">
                              <img className={ImageControlRoom.EnemyOnHit && SkillControlRoom['Enemy'].EnemyPoison >= 1 ? `onHitAnimate imgPosion ${Enemy.FlipCSS}` : SkillControlRoom['Enemy'].EnemyPoison >= 1? `imgPosion ${Enemy.FlipCSS}` : ImageControlRoom.EnemyOnHit ? `onHitAnimate ${Enemy.FlipCSS}` : `${Enemy.FlipCSS}`} src={ImageControlRoom.EnemyOnHit ? Enemy.GetHit : ImageControlRoom.EnemyAttack ? Enemy.GetAttack : ImageControlRoom.EnemyDead ? Enemy.GetDead : Enemy.GetStand } alt={enemyStats[i].name} />
                              <p className={(ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnCrit) || ImageControlRoom.EnemyDodge ? `DamageResultNumberCrit` : ImageControlRoom.EnemyOnHit || ImageControlRoom.EnemyDodge ? `DamageResultNumber` : `DamageResultNumberHide`}>{ImageControlRoom.EnemyDodge ? "MISS" : Damage}</p>
                              <p className={(ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnCrit && ImageControlRoom.EnemyOnHitDouble) || (ImageControlRoom.EnemyDodge && ImageControlRoom.EnemyOnHitDouble) ? `DamageResultNumberCrit` : (ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnHitDouble) || (ImageControlRoom.EnemyDodge && ImageControlRoom.EnemyOnHitDouble) ? `DamageResultNumber` : `DamageResultNumberHide`}>{ImageControlRoom.EnemyDodge ? "MISS" : Math.floor(Damage*SkillControlRoom['User'].UserDoubleAttackScale)}</p>
                              <p className={ImageControlRoom.EnemyOnReflectNumber ? `DamageResultNumber` : `DamageResultNumberHide`}>{Reflecting}</p>
                            </div> : null}
                          </div>
                      )})}
                    {/* {
                      i === 0 ? 
                      <div className="EnemyImageBox">
                        <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={ImageControlRoom.EnemyOnHit ? PoringHit : ImageControlRoom.EnemyAttack ? PoringAttack : ImageControlRoom.EnemyDead ? PoringDead : Poring } alt={enemyStats[i].name} />
                          <p className={(ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnCrit) || ImageControlRoom.EnemyDodge ? `DamageResultNumberCrit` : ImageControlRoom.EnemyOnHit || ImageControlRoom.EnemyDodge ? `DamageResultNumber` : `DamageResultNumberHide`}>{ImageControlRoom.EnemyDodge ? "MISS" : Damage}</p>
                          <p className={(ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnCrit && ImageControlRoom.EnemyOnHitDouble) || (ImageControlRoom.EnemyDodge && ImageControlRoom.EnemyOnHitDouble) ? `DamageResultNumberCrit` : (ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnHitDouble) || (ImageControlRoom.EnemyDodge && ImageControlRoom.EnemyOnHitDouble) ? `DamageResultNumber` : `DamageResultNumberHide`}>{ImageControlRoom.EnemyDodge ? "MISS" : Damage}</p>
                      </div> :
                      i === 1 ? 
                      <div className="EnemyImageBox">
                        <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={ImageControlRoom.EnemyOnHit ? LunaticHit : ImageControlRoom.EnemyAttack ? LunaticAttack : ImageControlRoom.EnemyDead ? LunaticDead : Lunatic } alt={enemyStats[i].name} />
                          <p className={(ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnCrit) || ImageControlRoom.EnemyDodge ? `DamageResultNumberCrit` : ImageControlRoom.EnemyOnHit || ImageControlRoom.EnemyDodge ? `DamageResultNumber` : `DamageResultNumberHide`}>{ImageControlRoom.EnemyDodge ? "MISS" : Damage}</p>
                      </div> :
                      i === 5 ? 
                      <div className="EnemyImageBox">
                        <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={ImageControlRoom.EnemyOnHit ? EclipseHit : ImageControlRoom.EnemyAttack ? EclipseAttack : ImageControlRoom.EnemyDead ? EclipseDead : Eclipse } alt={enemyStats[i].name} />
                          <p className={(ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnCrit) || ImageControlRoom.EnemyDodge ? `DamageResultNumberCrit` : ImageControlRoom.EnemyOnHit || ImageControlRoom.EnemyDodge ? `DamageResultNumber` : `DamageResultNumberHide`}>{ImageControlRoom.EnemyDodge ? "MISS" : Damage}</p>
                      </div> :
                      null
                    }*/}
                     <progress className="purpleHP" value={(enemyStats[i].currentHealth/enemyStats[i].maxHealth)*100} max="100" title={enemyStats[i].currentHealth + "/" + enemyStats[i].maxHealth}></progress>
                     <h2 className="wordCenter titleName">{EnemyOneName}</h2>
                     <div>
                      {EnemyStunClockArr[0] >= 0 ? <img src={StunEffect} alt="StunEffectImage" title="Stun"></img>: null}
                      {EnemySlowClockArr[0] >= 0 ? <img src={SlowEffect} alt="SlowEffectImage" title="Slow"></img>: null}
                      {SkillControlRoom['Enemy'].EnemyPoison >= 0 ? <img src={PoisonEffect} alt="PoisonEffectImage" title="Poison"></img>: null}
                      {SkillControlRoom['Enemy'].EnemyBurning >= 0 ? <img src={BurningEffect} alt="BurningEffectImage" title="Burn"></img>: null}
                      {SkillControlRoom['Enemy'].EnemyBleeding >= 0 ? <img src={BleedingEffect} alt="BleedingEffectImage" title="Bleed"></img>: null}
                      {SkillControlRoom['Enemy'].EnemyDefenceBreak >= 0? <img src={DefenceDownEffect} alt="DefenceDownEffectImage" title="Def Break"></img>: null}
                     </div>
                </div>
                <div className="UserBox">
                  <div className="UserImageBox">
                    {/* User attack Post */}
                    {ImageControlRoom.UserAttack ? <img src={ImageControlRoom.UserAttackImg} alt="UserAttackPost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"} /> :
                    ImageControlRoom.UserIsDefend && ImageControlRoom.UserOnHit ? <img src={ImageControlRoom.UserDefendImg} alt="UserDefendPost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg battleScreenShake" : "altanImg battleScreenShake"}/> :
                    ImageControlRoom.UserOnHit ? <img src={ImageControlRoom.UserOnHitImg} alt="UserOnHitPost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                    ImageControlRoom.UserIsDying ? <img src={ImageControlRoom.UserDyingImg} alt="UserIsDyingPost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                    ImageControlRoom.UserIsDead ? <img src={ImageControlRoom.UserDeadImg} alt="UserIsDeadPost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"}/> : 
                    // User Defend Post
                    ImageControlRoom.UserIsDefend ? <img src={ImageControlRoom.UserDefendImg} alt="UserDefendPost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                    ImageControlRoom.UserChannel ? <img src={ImageControlRoom.UserChannelImg} alt="UserChannelPost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                    ImageControlRoom.UserPickUp ? <img src={ImageControlRoom.UserPickUpImg} alt="UserPickUp" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                    // User Battle Post
                    <img src={ImageControlRoom.UserBattleImg} alt="UserBattlePost" className={SkillControlRoom['User'].userClockQuicken >= 0 ? " AtlanQuicken altanImg" : "altanImg"}/>}
                    <p className={(ImageControlRoom.EnemyAttack && ImageControlRoom.UserIsCrit) || ImageControlRoom.UserIsDodge ? `DamageResultNumberCritUser` : ImageControlRoom.EnemyAttack || ImageControlRoom.UserIsDodge ? `DamageResultNumberUser` : `DamageResultNumberHide`}>{ImageControlRoom.UserIsDodge ? "MISS" : Damage}</p>
                    <p className={ ImageControlRoom.UserOnLifeStealAnimation ? `HealResultNumberUser` : `DamageResultNumberHide`}>{Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack)}</p>
                    <p className={ ImageControlRoom.UserOnHPHealAnimation ? `HealResultNumberUser` : `DamageResultNumberHide`}>{Math.floor(HPHeal)}</p>
                    <p className={ ImageControlRoom.UserOnLifeStealAnimation && ImageControlRoom.EnemyOnHitDouble ? `HealResultNumberUser` : `DamageResultNumberHide`}>{Math.floor(Damage*SkillControlRoom['User'].UserLifeStealAttack*SkillControlRoom['User'].UserDoubleAttackScale)}</p>
                    <p className={ ImageControlRoom.UserOnSPHealAnimation ? `HealSPResultNumberUser` : `DamageResultNumberHide`}>{SPHeal}</p>
                    <p className={ ImageControlRoom.UserOnHPMagnificat ? `HealResultNumberUser` : `DamageResultNumberHide`}>{Math.floor(HPMagnificat)}</p>
                    <p className={ ImageControlRoom.UserOnSPMagnificat ? `HealSPResultNumberUser` : `DamageResultNumberHide`}>{SPMagnificat}</p>
                    <progress className={userStats.currentHealth/userStats.maxHealth > 0.3 ? `greenHP` : userStats.currentHealth/userStats.maxHealth > 0.1 ? `yellowHP` : `redHP`} value={(userStats.currentHealth/userStats.maxHealth)*100} max="100" title={"HP:" + userStats.currentHealth + "/" + userStats.maxHealth}/>
                    <progress className="blueSP" value={(userStats.currentSP/userStats.maxSP)*100} max="100" title={"SP:" + userStats.currentSP + "/" + userStats.maxSP}/>
                    <h2 className="wordCenter titleName userNamePosition">Atlan</h2>
                    <div>
                      {SkillControlRoom['User'].userClockQuicken >= 0 ? <img src={QuickenEffect} alt="QuickenEffect"></img>: null}
                      {SkillControlRoom['User'].userClockFireAttackAttributes >= 0 ? <img src={FireWeaponEffect} alt="FireWeaponEffect"></img>: null}
                     </div>
                  </div>
                </div>
              </div>  
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
                    <p className="destextHUD leveltext">Job Lv. {userStats.Level}</p>
                    {userStats.Level >= 70 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.JobExperience - baseJobEXPChart[userStats.JobLevel - 1])/(baseJobEXPChart[userStats.JobLevel] - baseJobEXPChart[userStats.JobLevel - 1])*100} max="100" title={userStats.JobExperience + "/" + baseJobEXPChart[userStats.JobLevel]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <div className="zenytextHUD clockHUD">
                      <p className="clockName">Atlan: {clockBarObject.userClockBar}</p>
                      <progress value={clockBarObject.userClockBar} max="100" className="BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={"Atlan: " + clockBarObject.userClockBar}/>
                      <p className="clockName">{EnemyOneName}: {clockBarObject.enemyClockBar}</p>
                      <progress value={clockBarObject.enemyClockBar} max="100" className=" BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={EnemyOneName + ": " + clockBarObject.enemyClockBar}/>
                      {j !== undefined ? <p className="clockName">{EnemyTwoName}: {clockBarObject.enemyTwoClockBar}</p> : null}
                      {j !== undefined ? <progress value={clockBarObject.enemyTwoClockBar} max="100" className=" BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={EnemyTwoName + ": " + clockBarObject.enemyTwoClockBar}/> : null}
                      {k !== undefined ? <p className="clockName">{EnemyThreeName}: {clockBarObject.enemyThreeClockBar}</p> : null}
                      {k !== undefined ? <progress value={clockBarObject.enemyThreeClockBar} max="100" className=" BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={EnemyThreeName + ": " + clockBarObject.enemyThreeClockBar}/> : null}
                </div>
                <div>
                      
                      { SkillControlRoom['User'].BattleSkillScreen && SkillControlRoom['User'].UserTurn && clockBarObject.userClockBar >= 100 ? 
                      <div className="userSkillBox">
                          <button className="goGoButtonSkills" onClick={() => userSkillFirstAidButton()}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillFirstAid} alt="skillFirstAid" /> First Aid</p>
                              <span className={userStats.currentSP >= skillCapChart.SPFirstAid ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillFirstAid} alt="skillFirstAid"/> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPFirstAid}</span>
                            </figcaption>
                          </button>
                        {userStats.Level >= skillCapChart.Bash ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillBashButton(i,1)}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillBash} alt="skillBash" /> Bash</p>
                              <span className={userStats.currentSP >= skillCapChart.SPBash ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillBash} alt="skillBash"/> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPBash}</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= skillCapChart.Mammonite ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillMammoniteButton(i,1)}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillMammonite} alt="skillMammonite"/> Mam<span className="goGoButtonHide">monite</span></p>
                              <span className={userStats.currentSP >= skillCapChart.SPMammonite ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillMammonite} alt="skillMammonite" /> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPMammonite}</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= skillCapChart.Kodoku ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillKodokuButton(i,1)}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillKodoku} alt="skillKodoku"/> Kodoku</p>
                              <span className={userStats.currentSP >= skillCapChart.SPKodoku ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillKodoku} alt="skillKodoku" /> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPKodoku}</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= skillCapChart.MagnumBreak ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillMagnumBreakButton(i,1)}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillMagnum} alt="skillMagnumBreak"/> Mag<span className="goGoButtonHide">num</span> Break</p>
                              <span className={userStats.currentSP >= skillCapChart.SPMagnumBreak ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillMagnum} alt="skillMagnumBreak" /> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPMagnumBreak}</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= skillCapChart.HeadCrush ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillHeadCrushButton(i,1)}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillHeadCrush} alt="skillMagnumBreak"/> Head Crush</p>
                              <span className={userStats.currentSP >= skillCapChart.SPHeadCrush ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillHeadCrush} alt="skillHeadCrush" /> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPHeadCrush}</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= skillCapChart.Quicken ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillQuickenButton()}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillQuicken} alt="skillQuicken"/> Quick<span className="goGoButtonHide">en</span></p>
                              <span className={userStats.currentSP >= skillCapChart.SPQuicken ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillQuicken} alt="skillQuicken" /> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPQuicken}</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= skillCapChart.VitalStrike ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillVitalStrikeButton(i,1)}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillVitalStrike} alt="skillVitalStrike"/> Vit<span className="goGoButtonHide">ial</span> S<span className="goGoButtonHide">tri</span>k<span className="goGoButtonHide">e</span></p>
                              <span className={userStats.currentSP >= skillCapChart.SPVitalStrike ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillVitalStrike} alt="skillVitalStrike" /> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPVitalStrike}</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= skillCapChart.BowlingBash ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillBowlingBashButton(i,1)}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillBowlingBash} alt="skillBowlingBash" /> Bowl<span className="goGoButtonHide">ing</span> Bash</p>
                              <span className={userStats.currentSP >= skillCapChart.SPBowlingBash ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillBowlingBash} alt="skillBowlingBash"/> <span className="goGoButtonHide">SP</span>:{skillCapChart.SPBowlingBash}</span>
                            </figcaption>
                          </button>
                        : null}
                        <button className="goGoButton" onClick={() => dispatch(ReturnUserInSelectSkillFn())}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Back</p>
                          </figcaption>
                        </button>
                      </div>
                      : SkillControlRoom['User'].BattleItemScreen && SkillControlRoom['User'].UserTurn && clockBarObject.userClockBar >= 100 ? 
                      <div className="userSkillBox">
                        {userGoldItem.RedPotion >= 1 ?
                            <button className="goGoButton" onClick={() => userItemRedPotionButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={RedPotion} alt="RedPotion"/> <span className="goGoButtonHide">Red Potion</span> x{userGoldItem.RedPotion}</p>
                              </figcaption>
                            </button>: null}
                        {userGoldItem.OrangePotion >= 1 ?
                            <button className="goGoButton" onClick={() => userItemOrangePotionButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={OrangePotion} alt="OrangePotion"/> <span className="goGoButtonHide">Orange Potion</span> x{userGoldItem.OrangePotion}</p>
                              </figcaption>
                            </button>: null}
                        {userGoldItem.YellowPotion >= 1 ?
                            <button className="goGoButton" onClick={() => userItemYellowPotionButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={YellowPotion} alt="YellowPotion"/> <span className="goGoButtonHide">Yellow Potion</span> x{userGoldItem.YellowPotion}</p>
                              </figcaption>
                            </button>: null}
                        {userGoldItem.WhitePotion >= 1 ?
                            <button className="goGoButton" onClick={() => userItemWhitePotionButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={WhitePotion} alt="WhitePotion"/> <span className="goGoButtonHide">White Potion</span> x{userGoldItem.WhitePotion}</p>
                              </figcaption>
                            </button>: null}
                        {userGoldItem.AnniversaryCake >= 1 ?
                            <button className="goGoButton" onClick={() => userItemAnniversaryCakeButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={AnniversaryCake} alt="AnniversaryCake"/> <span className="goGoButtonHide">Anniversary Cake</span> x{userGoldItem.AnniversaryCake}</p>
                              </figcaption>
                            </button>: null}
                        {userGoldItem.MastelaFruit >= 1 ?
                            <button className="goGoButton" onClick={() => userItemMastelaFruitButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={MastelaFruit} alt="MastelaFruit"/> <span className="goGoButtonHide">Mastela Fruit</span> x{userGoldItem.MastelaFruit}</p>
                              </figcaption>
                            </button>: null}
                        {userGoldItem.BluePotion >= 1 ?
                            <button className="goGoButton" onClick={() => userItemBluePotionButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={BluePotion} alt="BluePotion"/> <span className="goGoButtonHide">Blue Potion</span> x{userGoldItem.BluePotion}</p>
                              </figcaption>
                            </button>: null}
                        {userGoldItem.YggdrasilBerry >= 1 ?
                            <button className="goGoButton" onClick={() => userItemYggdrasilBerryButton()}>
                              <figcaption className="goGoButtonFig">
                                <p className="goGoButtonName"><img src={YggdrasilBerry} alt="YggdrasilBerry"/> <span className="goGoButtonHide">Yggdrasil Berry</span> x{userGoldItem.YggdrasilBerry}</p>
                              </figcaption>
                            </button>: null}
                        <button className="goGoButton" onClick={() => dispatch(ReturnUserInSelectItemFn())}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Back</p>
                          </figcaption>
                        </button>
                      </div>
                      : SkillControlRoom['User'].BattleTargetEnemyScreen && SkillControlRoom['User'].UserTurn && clockBarObject.userClockBar >= 100? 
                      <div className="userSkillBox">
                        {enemyStats[i].currentHealth > 0 ?
                        <button className="goGoButton" onClick={
                          SkillControlRoom['User'].UserAttackSelect ? () => userAttackEnemyButton(i,1) :
                          SkillControlRoom['User'].SkillBashSelect ? () => userSkillBashButton(i,1) :
                          SkillControlRoom['User'].SkillMammoniteSelect ? () => userSkillMammoniteButton(i,1) :
                          SkillControlRoom['User'].SkillKodokuSelect ? () => userSkillKodokuButton(i,1) :
                          SkillControlRoom['User'].SkillMagnumBreakSelect ? () => userSkillMagnumBreakButton(i,1) :
                          SkillControlRoom['User'].SkillHeadCrushSelect ? () => userSkillHeadCrushButton(i,1) :
                          SkillControlRoom['User'].SkillVitalStrikeSelect ? () => userSkillVitalStrikeButton(i,1) :
                          SkillControlRoom['User'].SkillBowlingBashSelect ? () => userSkillBowlingBashButton(i,1)
                        : null}>
                          <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName">{EnemyOneName}</p>
                          </figcaption>
                        </button> : null }
                        {enemyStatsTwo[j].currentHealth > 0 && j !== undefined ?
                        <button className="goGoButton" onClick={
                          SkillControlRoom['User'].UserAttackSelect ? () => userAttackEnemyButton(j,2) :
                          SkillControlRoom['User'].SkillBashSelect ? () => userSkillBashButton(j,2) :
                          SkillControlRoom['User'].SkillMammoniteSelect ? () => userSkillMammoniteButton(j,2) :
                          SkillControlRoom['User'].SkillKodokuSelect ? () => userSkillKodokuButton(j,2) :
                          SkillControlRoom['User'].SkillMagnumBreakSelect ? () => userSkillMagnumBreakButton(j,2) :
                          SkillControlRoom['User'].SkillHeadCrushSelect ? () => userSkillHeadCrushButton(j,2) :
                          SkillControlRoom['User'].SkillVitalStrikeSelect ? () => userSkillVitalStrikeButton(j,2) :
                          SkillControlRoom['User'].SkillBowlingBashSelect ? () => userSkillBowlingBashButton(j,2)
                        : null}>
                          <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName">{EnemyTwoName}</p>
                          </figcaption>
                        </button> : null }
                        {enemyStatsThree[k].currentHealth > 0 && k !== undefined ?
                        <button className="goGoButton" onClick={
                          SkillControlRoom['User'].UserAttackSelect ? () => userAttackEnemyButton(k,3) :
                          SkillControlRoom['User'].SkillBashSelect ? () => userSkillBashButton(k,3) :
                          SkillControlRoom['User'].SkillMammoniteSelect ? () => userSkillMammoniteButton(k,3) :
                          SkillControlRoom['User'].SkillKodokuSelect ? () => userSkillKodokuButton(k,3) :
                          SkillControlRoom['User'].SkillMagnumBreakSelect ? () => userSkillMagnumBreakButton(k,3) :
                          SkillControlRoom['User'].SkillHeadCrushSelect ? () => userSkillHeadCrushButton(k,3) :
                          SkillControlRoom['User'].SkillVitalStrikeSelect ? () => userSkillVitalStrikeButton(k,3) :
                          SkillControlRoom['User'].SkillBowlingBashSelect ? () => userSkillBowlingBashButton(k,3)
                        : null}>
                          <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName">{EnemyThreeName}</p>
                          </figcaption>
                        </button> : null }
                        {/* (Enemy, Attack, Bash, Mammonite, Kodoku, MagnumBreak, HeadCrush, VitalStrike, BowlingBash) */}
                        <button className="goGoButton" onClick={() => dispatch(UserInSelectEnemyFn(false,false,false,false,false,false,false,false,false))}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Back</p>
                          </figcaption>
                        </button>
                      </div>
                      : SkillControlRoom['User'].BattleTargetUserScreen && SkillControlRoom['User'].UserTurn && clockBarObject.userClockBar >= 100? 
                      <div className="userSkillBox">
                        <button className="goGoButton" onClick={() => userAttackEnemyButton()}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Altan</p>
                          </figcaption>
                        </button>
                          <button className="goGoButton" onClick={() => dispatch(UserInSelectUserFn(false,false,false,false,false,false,false,false,false))}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Back</p>
                          </figcaption>
                        </button>
                      </div>
                      : SkillControlRoom['User'].UserTurn && userStats.currentHealth > 0 && clockBarObject.userClockBar >= 100? 
                      <div className="userSkillBox">
                        <button className="goGoButton" onClick={() => userAttackEnemyButton(i,1)}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Attack</p>
                          </figcaption>
                        </button>
                        <button className="goGoButton" onClick={() => userDefendButton()}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Defend</p>
                          </figcaption>
                        </button>
                        <button className="goGoButton" onClick={() => dispatch(UserInSelectSkillFn())}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Skills</p>
                          </figcaption>
                        </button>
                        <button className="goGoButton" onClick={() => dispatch(UserInSelectItemFn())}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Item</p>
                          </figcaption>
                        </button>
                        <button className="goGoButton" onClick={
                          i <= 5 ?
                          () =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 7 ?
                          () =>{dispatch(GotoPayonCave1FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 12 ?
                          () =>{dispatch(GotoPayonCave1FFn()); dispatch(GotoPayonCave2FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 15 ?
                          () =>{dispatch(GotoPayonCave1FFn()); dispatch(GotoPayonCave3FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 17 ?
                          () =>{dispatch(GotoGeffenDungeon1FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 19 ?
                          () =>{dispatch(GotoGeffenDungeon2FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 22 ?
                          () =>{dispatch(GotoGeffenDungeon3FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 24 ?
                          () =>{dispatch(GotoGeffenDungeon4FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 25 ?
                          () =>{dispatch(GotoWorldMapFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}:
                          i <= 29 ?
                          () =>{dispatch(GotoChallengeTowerFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}: null
                        }>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Run</p>
                          </figcaption>
                        </button>
                      </div>
                      : null }
                </div>
              </div>
          </div>
          <fieldset className="wordCenter storyChat">
            <legend className="storyCharacter"></legend>
            <p className="storySpeech">-------- The Battle begins ------</p>
            {/* <button onClick={() =>{changeMapFadeAudio()}}>Stop Music</button> */}

            {((userStats.currentHealth <= 0 && enemyStats[i].currentHealth <= 0) || userStats.currentHealth <= 0) && clockCheck === 1? 
            <div className="storyScreen">
              <button className={ 
                i <= 5 ? "ReturnCheckPoint" : 
                i <= 15 ? "ReturnCheckPoint ReturnCheckPointPayonCave" : 
                i <= 33 ? "ReturnCheckPoint ReturnCheckGeffenDungeon" : null} onClick={
                i <= 5 ?
                () =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} :
                i <= 7 ?
                () =>{dispatch(GotoPayonCave1FFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} :
                i <= 12 ?
                () =>{dispatch(GotoPayonCave1FFn()); dispatch(GotoPayonCave2FFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} : 
                i <= 15 ?
                () =>{dispatch(GotoPayonCave1FFn()); dispatch(GotoPayonCave3FFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} :
                i <= 17 ?
                () =>{dispatch(GotoGeffenDungeon1FFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} :
                i <= 19 ?
                () =>{dispatch(GotoGeffenDungeon2FFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} :
                i <= 22 ?
                () =>{dispatch(GotoGeffenDungeon3FFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} :
                i <= 24 ?
                () =>{dispatch(GotoGeffenDungeon4FFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} : 
                i <= 25 ?
                () =>{dispatch(GotoWorldMapFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} :
                i <= 29 ?
                () =>{dispatch(GotoChallengeTowerFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();} : null
              }>Goto CheckPoint</button>
            </div> 
            : enemyStats[i].currentHealth <= 0 && clockCheck === 1? 
            <div className="storyScreen">
              <button className={ 
                i <= 5 ? "ReturnCheckPoint" : 
                i <= 15 ? "ReturnCheckPoint ReturnCheckPointPayonCave" : 
                i <= 33 ? "ReturnCheckPoint ReturnCheckGeffenDungeon" : null} onClick={
                i === 22 && !screenControlRoom.storyLineFive ?
                () =>{dispatch(cutsceneFiveFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i === 25 && !screenControlRoom.storyLineSeven ?
                () =>{dispatch(cutsceneSevenFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 5 ?
                () =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 7 ?
                () =>{dispatch(GotoPayonCave1FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 12 ?
                () =>{dispatch(GotoPayonCave1FFn()); dispatch(GotoPayonCave2FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 15 ?
                () =>{dispatch(GotoPayonCave1FFn()); dispatch(GotoPayonCave3FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 17 ?
                () =>{dispatch(GotoGeffenDungeon1FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 19 ?
                () =>{dispatch(GotoGeffenDungeon2FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 22 ?
                () =>{dispatch(GotoGeffenDungeon3FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 24 ?
                () =>{dispatch(GotoGeffenDungeon4FFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} : 
                i <= 25 ?
                () =>{dispatch(GotoWorldMapFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :
                i <= 29 ?
                () =>{dispatch(GotoChallengeTowerFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();} :  null
                }>Press to Continue</button>
            </div> : null}

          </fieldset>
        </div>
        }
      </div>
    );
}
export default Main;