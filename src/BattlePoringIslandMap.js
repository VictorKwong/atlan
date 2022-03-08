import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery'
import { GotoPoringIslandFn, EnemyAttackUserFn, UserAttackEnemyFn, EnemyOnHitAnimationFn, ResetEnemyOnHitAnimationFn, UserAttackAnimationFn, ResetUserAttackAnimationFn, UserOnHitAnimationFn, ResetUserOnHitAnimationFn, UserIsDeadAnimationFn , ResetUserIsDeadAnimationFn, UserIsDyingAnimationFn, ResetUserIsDyingAnimationFn , UserIsBlockAnimationFn , ResetUserIsBlockAnimationFn, UserChannelAnimationFn, ResetUserChannelAnimationFn, UserWeaponImgFn, UserPickUpAnimationFn, EnemyAttackAnimationFn, EnemyDeadAnimationFn , EnemyDodgeAnimationFn, UserIsDodgeAnimationFn, UserIsCritAnimationFn , EnemyOnCritAnimationFn} from './actions';
//Battle UI
import { ReturnUserInSelectSkillFn, UserInSelectSkillFn , UserInSelectItemFn , ReturnUserInSelectItemFn } from './actions';
//Clock
import { UserTurnFn , ResetUserTurnFn, EnemyTurnFn, ResetEnemyTurnFn, userClockDefendFn, enemyClockDefendFn, TickingClockFn } from './actions';
//Game Result (Victory/Defeat)
import { WinResultFn, ResetEnemyCurrentHealthFn, UserLevelUpFn } from './actions';
import { ReturnCheckPointFn } from './actions'
//Skills T/F
import { UserTurnBlockFn, ResetUserTurnBlockFn , EnemyTurnBlockFn, ResetEnemyTurnBlockFn, UserSkillQuickenFn , UserSkillQuickenClockTickFn, ResetUserSkillQuickenClockFn} from './actions'
//Battle Calculation
import { EnemyAttackBlockUserFn , UserSkillBashEnemyFn , UserSkillMagnumBreakEnemyFn , UserSkillBashMissedFn, UserSkillMagnumBreakMissedFn, UserSkillBowlingBashEnemyFn, UserSkillBowlingBashMissedFn} from './actions'
//ITEMS
import { UseRedPotionFn, UseOrangePotionFn, UseYellowPotionFn, UseWhitePotionFn, UseAnniversaryCakeFn, UseMastelaFruitFn, UseBluePotionFn, UseYggdrasilBerryFn } from './actions'
//QUEST
import { ProgressQuestDialogFn } from './actions'
//Win ETC Items
import { WinJellopyFn , WinEmptyBottleFn , WinStickyMucusFn, WinFeatherFn , WinCloverFn } from './actions'
import { WinFourLeafCloverFn, WinGlassBeadFn, WinOpalFn} from './actions'
//PATH UNLOCK
import { GotoPoringIslandPath1Fn, GotoPoringIslandPath2Fn } from './actions'
import { GotoPoringIslandPath5Fn } from './actions'



import './css/mapBattle.css'
import './index.css'
import PoringIsland from './PoringIsland'
import Poring from './img/Monster/Poring.gif'
import PoringHit from './img/Monster/PoringHit.png'
import PoringAttack from './img/Monster/PoringAttack.gif'
import PoringDead from './img/Monster/PoringDead.png'
import Lunatic from './img/Monster/Lunatic.gif'
import LunaticHit from './img/Monster/LunaticHit.png'
import LunaticAttack from './img/Monster/LunaticAttack.gif'
import LunaticDead from './img/Monster/LunaticDead.png'

import Eclipse from './img/Monster/Eclipse.gif'
import EclipseHit from './img/Monster/EclipseHit.png'
import EclipseAttack from './img/Monster/EclipseAttack.gif'
import EclipseDead from './img/Monster/EclipseDead.png'

//SKILLS
import skillBash from './img/Skill/sm_bash.gif'
import skillMagnum from './img/Skill/sm_magnum.gif'
import skillQuicken from './img/Skill/sm_quicken.gif'
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
import UserChannelPost_LordKahosHorn from './img/Character//LordKahosHorn/UserChannel1_LordKahosHorn.png'
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
import UserChannelPost_TeddybearHat from './img/Character//TeddybearHat/UserChannel1_TeddybearHat.png'
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
import UserChannelPost_Crown from './img/Character//Crown/UserChannel1_Crown.png'
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
import UserChannelPost_Helm from './img/Character//Helm/UserChannel1_Helm.png'
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
import UserChannelPost_PandaHat from './img/Character//PandaHat/UserChannel1_PandaHat.png'
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
import UserChannelPost_ChefHat from './img/Character//ChefHat/UserChannel1_ChefHat.png'
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
import UserChannelPost_SantaPoringHat from './img/Character//SantaPoringHat/UserChannel1_SantaPoringHat.png'
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

import FourLeafClover from './img/Etc/Eclipse_FourLeafClover.gif'
import GlassBead from './img/Etc/Eclipse_GlassBead80.gif'
import Opal from './img/Etc/Eclipse_Opal50.gif'

import audioStrugardenNEOBattle1 from './audio/StrugardenNEOBattle1.mp3'
import audioRustyHeartsWings from './audio/RustyHeartsWings.mp3'
import SwordHit from './audio/SoundEffect/SwordHit.wav'
import EmptyHandHit from './audio/SoundEffect/EmptyHandHit.wav'
import AttackMiss from './audio/SoundEffect/AttackMiss.wav'
import Heal from './audio/SoundEffect/HealSoundEffect.mp3'
import UserHit from './audio/SoundEffect/UserHit.wav'
import SkillBash from './audio/SoundEffect/BashSoundEffect.mp3'
import SkillMagBreak from './audio/SoundEffect/MagnumBreakSoundEffect.mp3'
import SkillQuicken from './audio/SoundEffect/QuickenSoundEffect.mp3'
const audioBGM = new Audio(audioStrugardenNEOBattle1);
const audioBGMBoss = new Audio(audioRustyHeartsWings);
const audioHit = new Audio(SwordHit);
const audioEmptyHandHit = new Audio(EmptyHandHit);
const audioMiss = new Audio(AttackMiss);
const audioHeal = new Audio(Heal);
const audioUserHit = new Audio(UserHit);
const audioSkillBash = new Audio(SkillBash);
const audioSkillMagBreak = new Audio(SkillMagBreak);
const audioSkillQuicken = new Audio(SkillQuicken);

let clockBarObject = {
  userClockBar: 0,
  enemyClockBar: 0,
}
let Damage = 0;
//Monster Random Number 0 1 
// let i = Math.round(Math.random())
let Uclock = 0;
let clockCheck = 0;

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
  {id: 100, num: 5, name: "Four Leaf Clover", img: FourLeafClover , percent: 1, Gain: WinFourLeafCloverFn},
  {id: 101, num: 5, name: "Glass Bead", img: GlassBead , percent: 0.8, Gain: WinGlassBeadFn},
  {id: 102, num: 5, name: "Opal", img: Opal , percent: 0.5, Gain: WinOpalFn},
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

function Main(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const ImageControlRoom = useSelector(state => state.ImageControlRoom)
    const SkillControlRoom = useSelector(state => state.SkillControlRoom)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userAttribute = useSelector(state => state.userAttribute)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const enemyStats = useSelector(state => state.enemyStats)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const dispatch = useDispatch();
    //Monster Random Number 0 1 
    let i = screenControlRoom.BattlePoringIslandMapMonsterID
    useEffect(() => {
      audioHit.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioEmptyHandHit.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioMiss.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioHeal.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioUserHit.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioSkillBash.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioSkillMagBreak.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      audioSkillQuicken.volume = audioControlRoom.AudioVolumeSoundEffectFixed.toFixed(5);
      (() => {
        let playPromise;
        switch (true) {
          case(screenControlRoom.BattlePoringIslandMapMonsterID === 5):
              audioBGMBoss.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
              playPromise = audioBGMBoss.play();
              if (playPromise !== undefined) {
                playPromise.then(_ => {
                  // Automatic playback started!
                  audioBGMBoss.loop = true;
                  audioBGMBoss.play()
                })
                .catch(error => {
                  // Auto-play was prevented
                });
              }
              break;
          default:
            audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5);
            playPromise = audioBGM.play();
            if (playPromise !== undefined) {
              playPromise.then(_ => {
                // Automatic playback started!
                audioBGM.loop = true;
                audioBGM.play()
              })
              .catch(error => {
                // Auto-play was prevented
              });
            }
            break;
      }
      })()
      //ANIMATION PART
      AnimationBox.map(Animation => {
        if(userStats.userWeapon === Animation.weaponName && userStats.userHeadGear === Animation.headGearName){
          dispatch(UserWeaponImgFn(Animation.Battle, Animation.Attack, Animation.Defend, Animation.OnHit, Animation.Dying, Animation.Dead, Animation.Channel, Animation.PickUp))
        }
        return null;
      })
      // switch(true){
      //   case (userStats.userWeapon === "Katana"):
      //     return dispatch(UserWeaponImgFn(UserBattlePostKatana1,UserAttackPostKatana1,UserDefendPostKatana1))
      //   case (userStats.userWeapon === "Bastard Sword"):
      //     return dispatch(UserWeaponImgFn(UserBattlePostBastardSword1,UserAttackPostBastardSword1,UserDefendPostBastardSword1))
      //   case (userStats.userWeapon === "Gaia Sword"):
      //     return dispatch(UserWeaponImgFn(UserBattlePostGaiaSword1,UserAttackPostGaiaSword1,UserDefendPostGaiaSword1))
      //   case (userStats.userWeapon === "Twin Edge of Naght Sieger"):
      //     return dispatch(UserWeaponImgFn(UserBattlePostTwinEdgeofNaghtSieger1,UserAttackPostTwinEdgeofNaghtSieger1,UserDefendPostTwinEdgeofNaghtSieger1))
      //   case (userStats.userWeapon === "Violet Fear"):
      //     return dispatch(UserWeaponImgFn(UserBattlePostVioletFear1,UserAttackPostVioletFear1,UserDefendPostVioletFear1))
      //   default:
      //     return dispatch(UserWeaponImgFn(UserBattlePostKatana1,UserAttackPostKatana1,UserDefendPostKatana1))
      // }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const changeMapFadeAudio = () => {
      let i = 0;
      let fadeAudio;
          switch (true) {
            case(screenControlRoom.BattlePoringIslandMapMonsterID === 5):
                fadeAudio = setInterval(() => {
                    if (audioBGMBoss.volume === parseFloat(audioControlRoom.AudioVolumeBGMFixed.toFixed(5))){
                      i = i + 1;
                    }
                    if (audioBGMBoss.volume !== 0) {
                      audioBGMBoss.volume -= parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))
                      audioBGMBoss.volume = audioBGMBoss.volume.toFixed(5)
                    }
                    if (audioBGMBoss.volume < parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))) {
                        audioBGMBoss.volume = 0;
                        audioBGMBoss.pause();
                        audioBGMBoss.currentTime = 0;
                      clearInterval(fadeAudio);
                    }else if (i >= 2){
                      audioBGMBoss.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5)
                      clearInterval(fadeAudio);
                    }
                  }, 10);
                  break;
            default:
                fadeAudio = setInterval(() => {
                  if (audioBGM.volume === parseFloat(audioControlRoom.AudioVolumeBGMFixed.toFixed(5))){
                    i = i + 1;
                  }
                  if (audioBGM.volume !== 0) {
                    audioBGM.volume -= parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))
                    audioBGM.volume = audioBGM.volume.toFixed(5)
                  }
                  if (audioBGM.volume < parseFloat(audioControlRoom.AudioChangeMapVolume.toFixed(5))) {
                      audioBGM.volume = 0;
                      audioBGM.pause();
                      audioBGM.currentTime = 0;
                    clearInterval(fadeAudio);
                  }else if (i >= 2){
                    audioBGM.volume = audioControlRoom.AudioVolumeBGMFixed.toFixed(5)
                    clearInterval(fadeAudio);
                  }
                }, 10);
                break;
          }
    }

    // VICTORY FUCNTION
    // EXP FUNCTION + QUEST FUNCTION
    useEffect(() => {
      if (enemyStats[i].currentHealth <= 0){
        
        dispatch(EnemyDeadAnimationFn(true))
        setTimeout(() => (clockCheck = 1), 300);
        dispatch(WinResultFn(enemyStats[i].Experience,enemyStats[i].Zeny));
        $('.storySpeech').html(`<p>Victory! Received +${enemyStats[i].Experience} EXP, +${enemyStats[i].Zeny} Zeny.</p>`)
        //PATH
        switch (true) {
          case (screenControlRoom.UserUnlockPath === "Path1"):
            dispatch(GotoPoringIslandPath1Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "Path2"):
            dispatch(GotoPoringIslandPath2Fn());
            break;
          case (screenControlRoom.UserUnlockPath === "Path5"):
            dispatch(GotoPoringIslandPath5Fn());
            break;
          default:
            break;
        }
        //ETC items
        EtcBox.map(EtcItems => {
          if((i === EtcItems.num) && (EtcItems.percent > Math.random())){
            if (obtain === false){
              setTimeout(() => dispatch(UserPickUpAnimationFn(true)), 1050);
              setTimeout(() => dispatch(UserPickUpAnimationFn(false)), 1350);
              $('.storySpeech').append(`<span>Obtained: </span>`)
              obtain = true;
            }
            dispatch((EtcItems.Gain)(1));
            $('.storySpeech').append(`<span key=${EtcItems.id}><img src=${EtcItems.img} alt=${EtcItems.name}/> ${EtcItems.name} </span>`)
          }
          return null;
        })
        //QUEST
          switch (true) {
            //accept QUEST & Correct Event monster
            case ((questControlRoom.QuestDialog).indexOf("Poring") > -1 && i === 0):
              return dispatch(ProgressQuestDialogFn("Poring"));
            case ((questControlRoom.QuestDialog).indexOf("Lunatic") > -1 && i === 1):
              return dispatch(ProgressQuestDialogFn("Lunatic"));
            case ((questControlRoom.QuestDialog).indexOf("Eclipse") > -1 && i === 5):
              return dispatch(ProgressQuestDialogFn("Eclipse"));
            default:
              return null;
          }
      }
      // QuestBoard, screen not depend
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enemyStats, dispatch]);
    // DEFEAT FUNCTION
      useEffect(() => {
        if (userStats.currentHealth <= 0){
          setTimeout(() => (clockCheck = 1), 300);
          $('.storySpeech').html(`Defeat... Altan Fainted......`)
          // $('.goGoAttack').prop("disabled", true);
        }
      }, [userStats.currentHealth , dispatch]);
    // RESET CLOCK
    const resetClockButton = () => {
                //Reset Clock;
                $('.storySpeech').html();
                clockBarObject.userClockBar = 0;
                clockBarObject.enemyClockBar = 0;
                // i = Math.round(Math.random());
                Uclock = 0;
                clockCheck = 0;
                obtain = false;
                dispatch(EnemyDeadAnimationFn(false));
                dispatch(ResetEnemyTurnFn());
                dispatch(ResetUserTurnFn());
                dispatch(ResetEnemyTurnBlockFn());
                dispatch(ResetUserTurnBlockFn());
                dispatch(ReturnUserInSelectSkillFn());
                dispatch(ReturnUserInSelectItemFn());
                dispatch(ResetUserSkillQuickenClockFn());
    }
    // LEVEL FUNCTION
    useEffect(() => {
      if (enemyStats[i].currentHealth <= 0){
        //MAX Lv10
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
          $('.storySpeech').append(`\n <p>Altan has Level Up to Lv${userStats.Level + 1}</p>`)
            switch (true) {
              case((userStats.Level + 1) === 5):
                 return $('.storySpeech').append(`\n <p>Altan has Unlock Skill Bash <img src=${skillBash} alt="skillBash" /> !</p>`)
              case((userStats.Level + 1) === 20):
                return $('.storySpeech').append(`\n <p>Altan has Unlock Skill Magnum Break<img src=${skillMagnum} alt="skillMagnumBreak" />!</p>`)
              case((userStats.Level + 1) === 35):
                return $('.storySpeech').append(`\n <p>Altan has Unlock Skill Quicken<img src=${skillQuicken} alt="skillQuicken" />!</p>`)
              case((userStats.Level + 1) === 70):
                return $('.storySpeech').append(`\n <p>Altan has Unlock Skill Bowling Bash<img src=${skillBowlingBash} alt="skillBowlingBash" />!</p>`)
              default:
                return 0;
            }
        }
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight
    }, [enemyStats, dispatch, userStats, baseEXPChart]);


    // USER DEAD ANIMATION
      useEffect(() => {
        if (userStats.currentHealth <= 0){
          setTimeout(() => dispatch(UserIsDyingAnimationFn()), 250);
          setTimeout(() => dispatch(ResetUserIsDyingAnimationFn()), 400);
          dispatch(UserIsDeadAnimationFn());
          // $('.goGoAttack').prop("disabled", true);
        }
    }, [userStats, dispatch]);

  
    // COMBAT FUNCTION
    const userAttackEnemyButton = () => {
      Damage = Math.floor(userStats.attack +  userStats.Level + userAttribute.str*3 + userAttribute.dex/2 + userAttribute.luk + userStats.BaseWeaponDamage*( 1 + 0.05*userAttribute.str) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      setTimeout(() => (Uclock = 0), 300);
      dispatch(UserAttackAnimationFn());
       
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      //Rerender, Block or not block
      
      (() => {
        switch (true) {
          // ENEMY BLOCK
          // CRIT RATE & BLOCKING
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()) && (userStats.critRate - enemyStats[i].critResist >= Math.random())):
              //Audio SoundEffect
              if (userStats.userWeapon === "Empty"){
                audioEmptyHandHit.play();
              }else{
                audioHit.play();
              }
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
              Math.sign((Damage - enemyStats[i].defencebuffer)*1.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*1.5) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Critial Hit! ${enemyStats[i].name} Received ${Damage} damage</p>`)
              //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackEnemyFn(Damage,i), 300));
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
              //Audio SoundEffect
              if (userStats.userWeapon === "Empty"){
                audioEmptyHandHit.play();
              }else{
                audioHit.play();
              }
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
              Math.sign((Damage - enemyStats[i].defencebuffer)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Altan Attack! ${enemyStats[i].name} Received ${Damage} damage</p>`)
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackEnemyFn(Damage,i)), 300)
          // ENEMY HIT
          // CRIT RATE
          case(((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()) && (userStats.critRate - enemyStats[i].critResist >= Math.random())):
              //Audio SoundEffect
              if (userStats.userWeapon === "Empty"){
                audioEmptyHandHit.play();
              }else{
                audioHit.play();
              }
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
              Math.sign((Damage - enemyStats[i].defence)*1.5) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*1.5) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Critial Hit! ${enemyStats[i].name} Received ${Damage} damage</p>`)
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackEnemyFn(Damage,i)), 300);
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
              //Audio SoundEffect
              if (userStats.userWeapon === "Empty"){
                audioEmptyHandHit.play();
              }else{
                audioHit.play();
              }
              dispatch(EnemyOnHitAnimationFn());
              setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
              Math.sign((Damage - enemyStats[i].defence)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)) : Damage = 1;
              // Text display
              $('.storySpeech').append(`<p>Altan Attack! ${enemyStats[i].name} Received ${Damage} damage</p>`)
              // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
              return setTimeout(() => dispatch(UserAttackEnemyFn(Damage,i)), 300);
          // ENEMY DODGE
          default:
            //Audio Sound Effect
            audioMiss.play();
            dispatch(EnemyDodgeAnimationFn(true));
            setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
            $('.storySpeech').append(`<p>Altan Attack! ${enemyStats[i].name} dodge the attack.</p>`)
            //Rerender
            return setTimeout(() => dispatch(userClockDefendFn()), 300);
        }
        })()
      // End turn
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());

    }
    const userDefendButton = () => {
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(userClockDefendFn()), 300);
      dispatch(UserIsBlockAnimationFn());
      dispatch(UserTurnBlockFn());
      // Text display
      $('.storySpeech').append('<p>Altan Defend himself!</p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 70;
      dispatch(ResetUserTurnFn());
    }

    

    //COMBAT SKILLS
    const userSkillBashButton = () => {
      if (userStats.currentSP >= 40){
      //Audio SoundEffect
      audioSkillBash.play();
      Damage = Math.floor(userStats.attack + userStats.Level + userAttribute.str*3 + userAttribute.dex/2 + userAttribute.luk + userStats.BaseWeaponDamage*( 1 + 0.05*userAttribute.str) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE && BLOCKING
            switch (true) {
              case(userStats.critRate - enemyStats[i].critResist >= Math.random()):
                //Audio SoundEffect
                if (userStats.userWeapon === "Empty"){
                  setTimeout(() => audioEmptyHandHit.play() , 100)
                }else{
                  setTimeout(() => audioHit.play(), 100)
                }
              dispatch(EnemyOnCritAnimationFn(true));
              setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
                Math.sign((Damage - enemyStats[i].defencebuffer)*1.5*2.5*(1+0.03*userAttribute.int)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*1.5*2.5*(1+0.03*userAttribute.int)) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Bash!! ${enemyStats[i].name} Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage,i)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defencebuffer)*2.5*(1+0.03*userAttribute.int)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*2.5*(1+0.03*userAttribute.int)) : Damage = 1;
                Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*2.5)
                // Text display
                $('.storySpeech').append(`<p>Altan use Bash! ${enemyStats[i].name} Received ${Damage} damage</p>`)
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk     
                return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage,i)), 300);
              }
          // ENEMY HIT
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
              //Audio SoundEffect
              if (userStats.userWeapon === "Empty"){
                setTimeout(() => audioEmptyHandHit.play() , 100)
              }else{
                setTimeout(() => audioHit.play(), 100)
              }
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch (true) {
              case (userStats.critRate - enemyStats[i].critResist >= Math.random()):
                dispatch(EnemyOnCritAnimationFn(true));
                setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
                Math.sign((Damage - enemyStats[i].defence)*1.5*2.5*(1+0.03*userAttribute.int)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*1.5*2.5*(1+0.03*userAttribute.int)) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Bash!! ${enemyStats[i].name} Received ${userStats.attack} damage</p>`)
                //Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage,i)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defence)*2.5*(1+0.03*userAttribute.int)) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*2.5*(1+0.03*userAttribute.int)) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Bash! ${enemyStats[i].name} Received ${userStats.attack} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBashEnemyFn(Damage,i)), 300);
              }
          // ENEMY DODGE
          default:
            //Audio SoundEffect
            setTimeout(() => audioMiss.play(), 250)
            $('.storySpeech').append(`<p>Altan Attack! ${enemyStats[i].name} dodge the attack.</p>`)
            dispatch(EnemyDodgeAnimationFn(true));
            setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
            // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
            return setTimeout(() => dispatch(UserSkillBashMissedFn()), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }
    const userSkillMagnumBreakButton = () => {
      if (userStats.currentSP >= 100){
      //Audio SoundEffect
      audioSkillMagBreak.play();
      Damage = Math.floor(userStats.attack + userStats.Level + userAttribute.str*3 + userAttribute.dex/2 + userAttribute.luk + userStats.BaseWeaponDamage*( 1 + 0.05*userAttribute.str) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE && BLOCKING
            switch(true){
              case(userStats.critRate - enemyStats[i].critResist >= Math.random()):
                dispatch(EnemyOnCritAnimationFn(true));
                setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
                Math.sign((Damage - enemyStats[i].defencebuffer)*1.5*3.5*(1+0.03*userAttribute.int) + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*1.5*3.5*(1+0.03*userAttribute.int) + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Magnum Break!! Enemy Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(Damage,i)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defencebuffer)*3.5*(1+0.03*userAttribute.int) + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*3.5*(1+0.03*userAttribute.int) + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Magnum Break! Enemy Received ${Damage} damage</p>`)
                // Rerender
                return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(Damage,i)), 300);
            }
          // ENEMY HIT
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch(true){
              case(userStats.critRate - enemyStats[i].critResist >= Math.random()):
                dispatch(EnemyOnCritAnimationFn(true));
                setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
                Math.sign((Damage - enemyStats[i].defence)*1.5*3.5*(1+0.03*userAttribute.int) + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*1.5*3.5*(1+0.03*userAttribute.int) + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Magnum Break!! Enemy Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(Damage,i)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defence)*3.5*(1+0.03*userAttribute.int) + 100) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*3.5*(1+0.03*userAttribute.int) + 100) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Magnum Break!! Enemy Received ${Damage} damage</p>`)
                // Rerender
                return setTimeout(() => dispatch(UserSkillMagnumBreakEnemyFn(Damage,i)), 300);
              }
          // ENEMY DODGE 
          default:  
              //Audio SoundEffect
              setTimeout(() => audioMiss.play(), 250)
              dispatch(EnemyDodgeAnimationFn(true));
              setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p>Altan Attack! ${enemyStats[i].name} dodge the attack.</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserSkillMagnumBreakMissedFn()), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }
    const userSkillBowlingBashButton = () => {
      if (userStats.currentSP >= 250){
        //Audio SoundEffect
        audioSkillBash.play();
      Damage = Math.floor(userStats.attack + userStats.Level + userAttribute.str*5 + userAttribute.dex/2 + userAttribute.luk + userStats.BaseWeaponDamage*( 1 + 0.05*userAttribute.str) + userStats.BaseWeaponDamage * (Math.random() * 0.5) - 0.25);
      dispatch(UserAttackAnimationFn());
      setTimeout(() => dispatch(ResetUserAttackAnimationFn()), 1200);
      setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      (() => {
        switch (true) {
          // ENEMY BLOCK
          case(SkillControlRoom['Enemy'].EnemyBlock && ((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random())):
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch(true){
              case(userStats.critRate - enemyStats[i].critResist >= Math.random()):
                  //Audio SoundEffect
                  if (userStats.userWeapon === "Empty"){
                    setTimeout(() => audioEmptyHandHit.play() , 100)
                  }else{
                    setTimeout(() => audioHit.play(), 100)
                  }
                dispatch(EnemyOnCritAnimationFn(true));
                setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
                Math.sign((Damage - enemyStats[i].defencebuffer)*1.5*5*(1+0.03*userAttribute.int) + 200) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*1.5*5*(1+0.03*userAttribute.int) + 200) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Bowling Bash!! Enemy Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBowlingBashEnemyFn(Damage,i)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defencebuffer)*5*(1+0.03*userAttribute.int) + 200) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defencebuffer)*5*(1+0.03*userAttribute.int) + 200) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Bowling Bash! Enemy Received ${Damage} damage</p>`)
                // Rerender
                return setTimeout(() => dispatch(UserSkillBowlingBashEnemyFn(Damage,i)), 300);
            }
          // ENEMY HIT
          case((userStats.hitRate - enemyStats[i].dodgeRate).toFixed(3) >= Math.random()):
              //Audio SoundEffect
              if (userStats.userWeapon === "Empty"){
                setTimeout(() => audioEmptyHandHit.play() , 100)
              }else{
                setTimeout(() => audioHit.play(), 100)
              }
            dispatch(EnemyOnHitAnimationFn());
            setTimeout(() => dispatch(ResetEnemyOnHitAnimationFn()), 1000);
            //CRIT RATE
            switch(true){
              case(userStats.critRate - enemyStats[i].critResist >= Math.random()):
                dispatch(EnemyOnCritAnimationFn(true));
                setTimeout(() => dispatch(EnemyOnCritAnimationFn(false)), 1000);
                Math.sign((Damage - enemyStats[i].defence)*1.5*5*(1+0.03*userAttribute.int) + 200) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*1.5*5*(1+0.03*userAttribute.int) + 200) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Critical Hit Bowling Bash!! Enemy Received ${Damage} damage</p>`)
                // Rerender, (Level + Str*3 + Dex/2 + Luk + BWD + BWD*(0.25) - Def)*Crit*BuffAtk
                return setTimeout(() => dispatch(UserSkillBowlingBashEnemyFn(Damage,i)), 300);
              default:
                Math.sign((Damage - enemyStats[i].defence)*5*(1+0.03*userAttribute.int) + 200) > 0 ? Damage = Math.floor((Damage - enemyStats[i].defence)*5*(1+0.03*userAttribute.int) + 200) : Damage = 1;
                // Text display
                $('.storySpeech').append(`<p>Altan use Bowling Bash!! Enemy Received ${Damage} damage</p>`)
                // Rerender
                return setTimeout(() => dispatch(UserSkillBowlingBashEnemyFn(Damage,i)), 300);
              }
          // ENEMY DODGE 
          default:
              dispatch(EnemyDodgeAnimationFn(true));
              setTimeout(() => dispatch(EnemyDodgeAnimationFn(false)), 1000);
              $('.storySpeech').append(`<p>Altan Attack! ${enemyStats[i].name} dodge the attack.</p>`)
              //Rerender
              return setTimeout(() => dispatch(UserSkillBowlingBashMissedFn()), 300);
        }
        })()
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
      }else{
        $('.storySpeech').append(`<p>Not enough SP.</p>`)
      }
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
    }

    const userSkillQuickenButton = () => {
      if (userStats.currentSP >= 180){
      //Audio SoundEffect
      audioSkillQuicken.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      setTimeout(() => (Uclock = 0), 300);
      //Rerender, Block or not block
      dispatch(UserSkillQuickenFn(180));
      $('.storySpeech').append(`<p>Altan use skill Quicken! Attack Speed has increase a period of time!</p>`)  
        // End turn
        clockCheck = 0;
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
        //Rerender
        setTimeout(() => (Uclock = 0), 300);
        setTimeout(() => dispatch(UseRedPotionFn(userAttribute.vit)), 300);
        // Text display
        $('.storySpeech').append('<p style="color:#3fff00;">Altan use red potion! Recover ' + Math.floor(50*(1+userAttribute.vit*0.02)) + ' hp </p>')
        listResult = document.getElementsByClassName('storyChat')[0];
        listResult.scrollTop = listResult.scrollHeight;
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
    }
    const userItemOrangePotionButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseOrangePotionFn(userAttribute.vit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Altan use orange potion! Recover ' + Math.floor(150*(1+userAttribute.vit*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
    }
    const userItemYellowPotionButton = () => {
        //Audio Sound Effect
        audioHeal.play();
        dispatch(UserChannelAnimationFn());
        setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
        //Rerender
        setTimeout(() => (Uclock = 0), 300);
        setTimeout(() => dispatch(UseYellowPotionFn(userAttribute.vit)), 300);
        // Text display
        $('.storySpeech').append('<p style="color:#3fff00;">Altan use yellow potion! Recover ' + Math.floor(400*(1+userAttribute.vit*0.02)) + ' hp </p>')
        listResult = document.getElementsByClassName('storyChat')[0];
        listResult.scrollTop = listResult.scrollHeight;
        // End turn
        clockCheck = 0;
        clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
        dispatch(ResetUserTurnFn());
    }
    const userItemWhitePotionButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseWhitePotionFn(userAttribute.vit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Altan use white potion!Recover ' + Math.floor(800*(1+userAttribute.vit*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
    }
    const userItemAnniversaryCakeButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseAnniversaryCakeFn(userAttribute.vit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Altan use anniversary cake! Recover ' + Math.floor(1200*(1+userAttribute.vit*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
    }
    const userItemMastelaFruitButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseMastelaFruitFn(userAttribute.vit)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Altan use mastela fruit! Recover ' + Math.floor(2000*(1+userAttribute.vit*0.02)) + ' hp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
    }
    const userItemBluePotionButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseBluePotionFn(userAttribute.int)), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Altan use blue potion! Recover ' + Math.floor(60*(1+userAttribute.int*0.02)) + ' sp </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
    }
    const userItemYggdrasilBerryButton = () => {
      //Audio Sound Effect
      audioHeal.play();
      dispatch(UserChannelAnimationFn());
      setTimeout(() => dispatch(ResetUserChannelAnimationFn()), 500);
      //Rerender
      setTimeout(() => (Uclock = 0), 300);
      setTimeout(() => dispatch(UseYggdrasilBerryFn()), 300);
      // Text display
      $('.storySpeech').append('<p style="color:#3fff00;">Altan use Yggdrasil Berry!! HP SP fully recover! </p>')
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      // End turn
      clockCheck = 0;
      clockBarObject.userClockBar = clockBarObject.userClockBar - 100;
      dispatch(ResetUserTurnFn());
    }
    // Enemy AI
    const enemyDecisionQFn = () => {
      setTimeout(() => (Uclock = 0), 300);
      Damage = Math.floor(((enemyStats[i].attack * (userStats.BaseArmorDef + userStats.BaseHeadGearDef + 2000) / (((userStats.BaseArmorDef + userStats.BaseHeadGearDef) * 10) + 2000)) - (userAttribute.vit*2 + userAttribute.agi/2 + userStats.Level) * (Math.random() * 0.5) - 0.25));
      (() => {
          switch (true) {
          //EnemyAttack & Hit
            case(Math.random() <= 0.9):
              //Rerender, Block or not block
              (() => {
              switch (true) {
                // USER BLOCK
                case (SkillControlRoom['User'].UserBlock && ((enemyStats[i].hitRate - userStats.dodgeRate).toFixed(3) >= Math.random())):
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
                      Math.sign((Damage * 1.5) - userStats.defencebuffer) > 0 ? Damage = Math.floor((Damage * 1.5) - userStats.defencebuffer) : Damage = 1;
                      // Text display
                      $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Critical Hit Attack!! Altan Received ${Damage} damage</p>`)
                      //Rerender
                      return dispatch(EnemyAttackBlockUserFn(Damage));
                    default:
                      //Audio Sound Effect
                       audioUserHit.play();
                      Math.sign(Damage - userStats.defencebuffer) > 0 ? Damage = Damage - userStats.defencebuffer : Damage = 1;
                      // Text display
                      $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Altan Received ${Damage} damage</p>`)
                      //Rerender
                      return dispatch(EnemyAttackBlockUserFn(Damage));
                  }
                // USER HIT
                case ((enemyStats[i].hitRate - userStats.dodgeRate).toFixed(3) >= Math.random()):
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
                    Math.sign((Damage * 1.5) - userStats.defence) > 0 ? Damage = Math.floor((Damage * 1.5) - userStats.defence) : Damage = 1;
                    // Text display
                    $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Critical Hit Attack!!Altan Received ${Damage} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(Damage));
                  default:
                    //Audio Sound Effect
                    audioUserHit.play();
                    Math.sign(Damage - userStats.defence) > 0 ? Damage = Damage - userStats.defence : Damage = 1;
                    // Text display
                    $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Altan Received ${Damage} damage</p>`)
                    //Rerender
                    return dispatch(EnemyAttackUserFn(Damage));                     
                  }
                // USER DODGE
                default:
                  //Audio Sound Effect
                  audioMiss.play();
                  dispatch(UserIsDodgeAnimationFn(true));
                  setTimeout(() => dispatch(UserIsDodgeAnimationFn(false)), 1040);
                  $('.storySpeech').append(`<p style="color:red">${enemyStats[i].name} Attack! Altan dodge the attack!</p>`)
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
              clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
              return dispatch(ResetEnemyTurnFn());
            }
      })()
      // End turn
      listResult = document.getElementsByClassName('storyChat')[0];
      listResult.scrollTop = listResult.scrollHeight;
      clockCheck = 0;
      clockBarObject.enemyClockBar = clockBarObject.enemyClockBar - 100;
      dispatch(ResetEnemyTurnFn());
    }


  const clockBaseQtn = () => {
    if (enemyStats[i].currentHealth > 0 && userStats.currentHealth > 0 && Uclock === 0){
      const ClockTurn = setInterval(() => {
        // *study
        (() => {
          switch (true) {
            case ((clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (parseInt(userStats.speed) >= enemyStats[i].speed)) || (clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar < 100)):
              //Reset All Block
              dispatch(ResetUserIsBlockAnimationFn());
              dispatch(ResetUserTurnBlockFn());
              dispatch(ReturnUserInSelectSkillFn());
              dispatch(ReturnUserInSelectItemFn());
              //Skill Quicken count
              dispatch(UserSkillQuickenClockTickFn());
              clockCheck = 1;
              dispatch(UserTurnFn());
              $('.storySpeech').append('<p>--------- Altan Turn ---------</p>')
              listResult = document.getElementsByClassName('storyChat')[0];
              listResult.scrollTop = listResult.scrollHeight;
              // console.log('UserTurn is good')
              return clearInterval(ClockTurn);
            case ((clockBarObject.userClockBar >= 100 && clockBarObject.enemyClockBar >= 100 && (parseInt(userStats.speed) < enemyStats[i].speed)) || (clockBarObject.userClockBar < 100 && clockBarObject.enemyClockBar >= 100)):
              dispatch(ResetEnemyTurnBlockFn());
              clockCheck = 1;
              dispatch(EnemyTurnFn());
              $('.storySpeech').append(`<p style="color:red">--------- ${enemyStats[i].name} Turn ---------</p>\n`)
              listResult = document.getElementsByClassName('storyChat')[0];
              listResult.scrollTop = listResult.scrollHeight;
              enemyDecisionQFn();
              // console.log('EnemyTurn is good')
              return clearInterval(ClockTurn);
            default:
              // console.log(`userClock: ${clockBarObject.userClockBar}`)
              // console.log(`enemyClock: ${clockBarObject.enemyClockBar}`)
              
              switch (true) {
                case (SkillControlRoom['User'].userClockQuicken >= 1):
                  Uclock = 1
                  return clockBarObject = {
                            userClockBar: clockBarObject.userClockBar + parseInt(userStats.speed) + 10,
                            enemyClockBar: clockBarObject.enemyClockBar + enemyStats[i].speed,
                          }
                default:
                  Uclock = 1
                  return clockBarObject = {
                          userClockBar: clockBarObject.userClockBar + parseInt(userStats.speed),
                          enemyClockBar: clockBarObject.enemyClockBar + enemyStats[i].speed,
                        }
              }
          }
        })()
        // console.log('ticking')
        }, 100);
    }
  }

    // Longest Animation 1.2 = 0.3 onhit + 0.9 delay
    useEffect(() => {
      setTimeout(() => clockBaseQtn(), 900);
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
      setTimeout(() => clockRenderQtn(), 900);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStats,enemyStats, dispatch]);

    return(
      <div>
        {
        screenControlRoom.PoringIsland ? <PoringIsland />:
        <div className={ImageControlRoom.EnemyOnCrit || ImageControlRoom.UserIsCrit ? "battleScreenShake" : null}>
            <div className="storyMapScreen">
              <div className="battleScreen">
                <div className="enemyBox"> 
                    {
                      i === 0 ? 
                      <div className="EnemyImageBox">
                        <img className={ImageControlRoom.EnemyOnHit ? `onHitAnimate imgFlip` : `imgFlip`} src={ImageControlRoom.EnemyOnHit ? PoringHit : ImageControlRoom.EnemyAttack ? PoringAttack : ImageControlRoom.EnemyDead ? PoringDead : Poring } alt={enemyStats[i].name} />
                          <p className={(ImageControlRoom.EnemyOnHit && ImageControlRoom.EnemyOnCrit) || ImageControlRoom.EnemyDodge ? `DamageResultNumberCrit` : ImageControlRoom.EnemyOnHit || ImageControlRoom.EnemyDodge ? `DamageResultNumber` : `DamageResultNumberHide`}>{ImageControlRoom.EnemyDodge ? "MISS" : Damage}</p>
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
                    }                    
                     <progress className="purpleHP" value={(enemyStats[i].currentHealth/enemyStats[i].maxHealth)*100} max="100" title={enemyStats[i].currentHealth + "/" + enemyStats[i].maxHealth}></progress>
                     <h2 className="wordCenter titleName">{enemyStats[i].name}</h2>
                    {/* <p>Enemy Level {enemyStats[i].level}</p>
                    <p>Enemy Attack {enemyStats[i].attack}</p>
                    <p>Enemy Power {enemyStats[i].power}</p>
                    <p>Enemy Defence {enemyStats[i].defence}</p>
                    <p>Enemy Speed {enemyStats[i].speed}</p>
                    <p>Enemy Hit Rate {enemyStats[i].hitRate}</p>
                    <p>Enemy Dodge Rate {enemyStats[i].dodgeRate}</p>
                    <p>Enemy Crit Rate {enemyStats[i].critRate}</p> */}
                </div>
                <div className="UserImageBox">
                  {/* User attack Post */}
                  {ImageControlRoom.UserAttack ? <img src={ImageControlRoom.UserAttackImg} alt="UserAttackPost" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"} /> :
                  ImageControlRoom.UserOnHit ? <img src={ImageControlRoom.UserOnHitImg} alt="UserOnHitPost" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                  ImageControlRoom.UserIsDying ? <img src={ImageControlRoom.UserDyingImg} alt="UserIsDyingPost" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                  ImageControlRoom.UserIsDead ? <img src={ImageControlRoom.UserDeadImg} alt="UserIsDeadPost" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"}/> : 
                  // User Defend Post
                  ImageControlRoom.UserIsDefend ? <img src={ImageControlRoom.UserDefendImg} alt="UserDefendPost" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                  ImageControlRoom.UserChannel ? <img src={ImageControlRoom.UserChannelImg} alt="UserChannelPost" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                  ImageControlRoom.UserPickUp ? <img src={ImageControlRoom.UserPickUpImg} alt="UserPickUp" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"}/> :
                  // User Battle Post
                  <img src={ImageControlRoom.UserBattleImg} alt="UserBattlePost" className={SkillControlRoom['User'].userClockQuicken >= 1 ? " AtlanQuicken altanImg" : "altanImg"}/>}
                  <p className={(ImageControlRoom.EnemyAttack && ImageControlRoom.UserIsCrit) || ImageControlRoom.UserIsDodge ? `DamageResultNumberCritUser` : ImageControlRoom.EnemyAttack || ImageControlRoom.UserIsDodge ? `DamageResultNumberUser` : `DamageResultNumberHide`}>{ImageControlRoom.UserIsDodge ? "MISS" : Damage}</p>  
                  <progress className={userStats.currentHealth/userStats.maxHealth > 0.3 ? `greenHP` : userStats.currentHealth/userStats.maxHealth > 0.1 ? `yellowHP` : `redHP`} value={(userStats.currentHealth/userStats.maxHealth)*100} max="100" title={"HP:" + userStats.currentHealth + "/" + userStats.maxHealth}/>
                  <progress className="blueSP" value={(userStats.currentSP/userStats.maxSP)*100} max="100" title={"SP:" + userStats.currentSP + "/" + userStats.maxSP}/>
                  <h2 className="wordCenter titleName userNamePosition">Altan</h2>
                </div>
              </div>  
              <div className="StoryHUD">
                <p className="basicStatsHUD">Basic Info</p>
                <p className="nameStatsHUD destextHUD">Altan</p>
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
                    {/* <p>Player Attack {userStats.attack}</p>
                    <p>Player Defence {userStats.defence}</p>
                    <p>Player Speed {userStats.speed}</p>
                    <p>Player Hit Rate {userStats.hitRate}</p>
                    <p>Player Dodge Rate {userStats.dodgeRate}</p>
                    <p>Player Crit Rate {userStats.critRate}</p>
                    <p>Player Exp {userStats.Experience}</p> */}
                    {userStats.Level >= 99 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                <div className="zenytextHUD clockHUD">
                      <p className="clockName">Altan: {clockBarObject.userClockBar}</p>
                      <progress value={clockBarObject.userClockBar} max="100" className="BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={"Altan: " + clockBarObject.userClockBar}/>
                      <p className="clockName">{enemyStats[i].name}: {clockBarObject.enemyClockBar}</p>
                      <progress value={clockBarObject.enemyClockBar} max="100" className=" BarBasicHUD clockBarBasicHUD expBarBasicHUD" title={enemyStats[i].name + ": " + clockBarObject.enemyClockBar}/>
                </div>
                <div>
                      
                      { SkillControlRoom['User'].BattleSkillScreen && SkillControlRoom['User'].UserTurn ? 
                      <div className="userSkillBox">
                        {userStats.Level >= 5 ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillBashButton()}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillBash} alt="skillBash" /> Bash</p>
                              <span className={userStats.currentSP >= 40 ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillBash} alt="skillBash"/> <span className="goGoButtonHide">SP</span>:40</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= 20 ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillMagnumBreakButton()}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillMagnum} alt="skillMagnumBreak"/> Mag<span className="goGoButtonHide">num</span> Break</p>
                              <span className={userStats.currentSP >= 100 ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillMagnum} alt="skillMagnumBreak" /> <span className="goGoButtonHide">SP</span>:100</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= 35 ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillQuickenButton()}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillQuicken} alt="skillQuicken"/> Quick<span className="goGoButtonHide">en</span></p>
                              <span className={userStats.currentSP >= 180 ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillQuicken} alt="skillQuicken" /> <span className="goGoButtonHide">SP</span>:180</span>
                            </figcaption>
                          </button>
                        : null}
                        {userStats.Level >= 70 ? 
                          <button className="goGoButtonSkills" onClick={() => userSkillBowlingBashButton()}>
                            <figcaption className="goGoButtonFig">
                              <p className="goGoButtonName"><img src={skillBowlingBash} alt="skillBowlingBash" /> Bowl<span className="goGoButtonHide">ing</span> Bash</p>
                              <span className={userStats.currentSP >= 250 ? "goGoButtonSkillBash" : "goGoButtonSkillBash insufficentSP"}><img src={skillBowlingBash} alt="skillBowlingBash"/> <span className="goGoButtonHide">SP</span>:250</span>
                            </figcaption>
                          </button>
                        : null}
                        <button className="goGoButton" onClick={() => dispatch(ReturnUserInSelectSkillFn())}>
                          <figcaption className="goGoButtonFig">
                            <p className="goGoButtonName">Back</p>
                          </figcaption>
                        </button>
                      </div>
                      : SkillControlRoom['User'].BattleItemScreen && SkillControlRoom['User'].UserTurn ? 
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
                      : SkillControlRoom['User'].UserTurn ? 
                      <div className="userSkillBox">
                        <button className="goGoButton" onClick={() => userAttackEnemyButton()}>
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
                        <button className="goGoButton" onClick={() => {dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>
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

            {enemyStats[i].currentHealth <= 0 && clockCheck === 1? 
            <div className="storyScreen">
              <button className="ReturnCheckPoint" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button>
            </div>
            : userStats.currentHealth <= 0 && clockCheck === 1? 
            <div className="storyScreen">
              <button className="ReturnCheckPoint" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); dispatch(ResetUserIsDeadAnimationFn()); dispatch(ReturnCheckPointFn()); resetClockButton(); changeMapFadeAudio();}}>Goto CheckPoint</button>
            </div> : null}

          </fieldset>
        </div>
        }
      </div>
    );
}
export default Main;