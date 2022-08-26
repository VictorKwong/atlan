export const EnemyAttackUserFn = (Damage) => {
    return {
        type: 'EnemyAttackUserFn',
        DamageCalculation: Damage
    };
};

export const EnemyAttackBlockUserFn = (Damage) => {
    return {
        type: 'EnemyAttackBlockUserFn',
        DamageCalculation: Damage
    };
};
export const EnemyAttackReflectUserFn = (Damage,Target,Reflecting) => {
    return {
        type: 'EnemyAttackReflectUserFn',
        DamageCalculation: Damage,
        Target: Target,
        Reflecting: Reflecting
    }
};
export const UserLifeStealEnemyFn = (Damage,Target,LifeSteal) => {
    return {
        type: 'UserLifeStealEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
        LifeSteal: LifeSteal
    }
};
export const UserSkillLifeStealEnemyFn = (Damage,Target,LifeSteal,Consume) => {
    return {
        type: 'UserSkillLifeStealEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
        LifeSteal: LifeSteal,
        Consume: Consume
    }
};

export const AmuletRecoveryFn = (HPHeal,SPHeal) => {
    return {
        type: 'AmuletRecoveryFn',
        HPHeal:HPHeal,
        SPHeal:SPHeal
    }
};
export const UserSkillKodokuEnemyFn = () => {
    return {
        type: 'UserSkillKodokuEnemyFn',
    }
};



export const UserAttackEnemyFn = (Damage,Target) => {
    return {
        type: 'UserAttackEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
    };
};
export const UserSkillFirstAidFn = (sp) => {
    return {
        type: 'UserSkillFirstAidFn',
        sp:sp
    };
};

export const UserSkillBashEnemyFn = (Damage,Target,sp) => {
    return {
        type: 'UserSkillBashEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
        sp:sp
    };
};

export const UserSkillBashMissedFn = (sp) => {
    return {
        type: 'UserSkillBashMissedFn',
        sp:sp
    };
};

export const UserSkillMammoniteEnemyFn = (Damage,Target,sp) => {
    return {
        type: 'UserSkillMammoniteEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
        sp:sp
    };
};
export const UserSkillMammoniteMissedFn = (sp) => {
    return {
        type: 'UserSkillMammoniteMissedFn',
        sp:sp
    };
};
export const UserSkillMagnumBreakEnemyFn = (Damage,Target,sp) => {
    return {
        type: 'UserSkillMagnumBreakEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
        sp:sp
    };
};
export const UserSkillMagnumBreakMissedFn = (sp) => {
    return {
        type: 'UserSkillMagnumBreakMissedFn',
        sp:sp
    };
};
export const UserSkillBowlingBashEnemyFn = (Damage,Target,sp) => {
    return {
        type: 'UserSkillBowlingBashEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
        sp:sp
    };
};
export const UserSkillBowlingBashMissedFn = (sp) => {
    return {
        type: 'UserSkillBowlingBashMissedFn',
        sp:sp
    };
};
export const UserSkillQuickenFn = (sp) => {
    return {
        type: 'UserSkillQuickenFn',
        sp:sp
    };
};
export const UserSkillKodokuFn = (sp) => {
    return {
        type: 'UserSkillKodokuFn',
        sp: sp
    };
};
export const UserSkillMagnumBreakFn = () => {
    return {
        type: 'UserSkillMagnumBreakFn',
    };
};
export const UserSkillHeadCrushFn = (sp) => {
    return {
        type: 'UserSkillHeadCrushFn',
        sp:sp
    };
};
export const UserSkillVitalStrikeFn = (sp) => {
    return {
        type: 'UserSkillVitalStrikeFn',
        sp:sp
    };
};

export const UserSkillQuickenClockTickFn = () => {
    return {
        type: 'UserSkillQuickenClockTickFn'
    };
};
export const ResetUserSkillQuickenClockFn = () => {
    return {
        type: 'ResetUserSkillQuickenClockFn'
    };
};
export const UserLearnDoubleAttackFn = (learn) => {
    return {
        type: 'UserLearnDoubleAttackFn',
        learn: learn,
    };
};
export const UserLearnReflectAttackFn = (learn) => {
    return {
        type: 'UserLearnReflectAttackFn',
        learn:learn
    };
};
export const UserLearnLifeStealAttackFn = (learn) => {
    return {
        type: 'UserLearnLifeStealAttackFn',
        learn:learn
    };
};
export const UserLearnMasterItemFn = (learn) => {
    return {
        type: 'UserLearnMasterItemFn',
        learn:learn
    };
};
export const UserLearnAmuletRecoveryFn = (learn) => {
    return {
        type: 'UserLearnAmuletRecoveryFn',
        learn:learn
    };
};
export const UserTriggerMasterItemFn = (trigger) => {
    return {
        type: 'UserTriggerMasterItemFn',
        trigger:trigger
    };
};


export const UserLevelUpFn = (Points) => {
    return {
        type: 'UserLevelUpFn',
        Points: Points
    };
};
export const GetStatsPointFn = (Points) => {
    return {
        type: 'GetStatsPointFn',
        Points: Points
    };
};

export const startGameFn = () => {
    return {
        type: 'startGameFn',
    };
};

export const authorLogoFn = () => {
    return {
        type: 'authorLogoFn',
    };
};

export const gameTitleOptionScreenFn = () => {
    return {
        type: 'gameTitleOptionScreenFn',
    };
};

export const returnToTitleScreenFn = () => {
    return {
        type: 'returnToTitleScreenFn',
    };
};

export const finishStoryLineOneFn = () => {
    return {
        type: 'finishStoryLineOneFn',
    };
};
export const cutsceneTwoFn = () => {
    return {
        type: 'cutsceneTwoFn',
    };
};
export const finishStoryLineTwoFn = () => {
    return {
        type: 'finishStoryLineTwoFn',
    };
};
export const cutsceneThreeFn = () => {
    return {
        type: 'cutsceneThreeFn',
    };
};
export const finishStoryLineThreeFn = () => {
    return {
        type: 'finishStoryLineThreeFn',
    };
};
export const cutsceneFourFn = () => {
    return {
        type: 'cutsceneFourFn',
    };
};
export const finishStoryLineFourFn = () => {
    return {
        type: 'finishStoryLineFourFn',
    };
};
export const cutsceneFiveFn = () => {
    return {
        type: 'cutsceneFiveFn',
    };
};
export const finishStoryLineFiveFn = () => {
    return {
        type: 'finishStoryLineFiveFn',
    };
};
export const cutsceneSixFn = () => {
    return {
        type: 'cutsceneSixFn',
    };
};
export const finishStoryLineSixFn = () => {
    return {
        type: 'finishStoryLineSixFn',
    };
};
export const cutsceneSevenFn = () => {
    return {
        type: 'cutsceneSevenFn',
    };
};
export const finishStoryLineSevenFn = () => {
    return {
        type: 'finishStoryLineSevenFn',
    };
};
export const cutsceneEndFn = () => {
    return {
        type: 'cutsceneEndFn',
    };
};
export const finishStoryLineEndFn = () => {
    return {
        type: 'finishStoryLineEndFn',
    };
};
//Mini Screen
export const GotoAltanEquipmentFn = () => {
    return {
        type: 'GotoAltanEquipmentFn',
    };
};
export const GotoAltanStatsFn = () => {
    return {
        type: 'GotoAltanStatsFn',
    };
};
export const GotoAltanItemFn = () => {
    return {
        type: 'GotoAltanItemFn',
    };
};
export const GotoAltanQuestFn = () => {
    return {
        type: 'GotoAltanQuestFn',
    };
};



export const GotoWeaponEquipmentChoiceFn = () => {
    return {
        type: 'GotoWeaponEquipmentChoiceFn',
    };
};
export const GotoArmorEquipmentChoiceFn = () => {
    return {
        type: 'GotoArmorEquipmentChoiceFn',
    };
};
export const GotoHeadGearEquipmentChoiceFn = () => {
    return {
        type: 'GotoHeadGearEquipmentChoiceFn',
    };
};
export const GotoFootGearEquipmentChoiceFn = () => {
    return {
        type: 'GotoFootGearEquipmentChoiceFn',
    };
};
export const GotoGarmentEquipmentChoiceFn = () => {
    return {
        type: 'GotoGarmentEquipmentChoiceFn',
    };
};
export const GotoAccessoryOneEquipmentChoiceFn = () => {
    return {
        type: 'GotoAccessoryOneEquipmentChoiceFn',
    };
};
export const GotoAccessoryTwoEquipmentChoiceFn = () => {
    return {
        type: 'GotoAccessoryTwoEquipmentChoiceFn',
    };
};

export const GotoImageEquipmentFn = () => {
    return {
        type: 'GotoImageEquipmentFn',
    };
};
export const GotoItemChoiceFn = () => {
    return {
        type: 'GotoItemChoiceFn',
    };
};
export const GotoEquipChoiceFn = () => {
    return {
        type: 'GotoEquipChoiceFn',
    };
};
export const GotoETCChoiceFn = () => {
    return {
        type: 'GotoETCChoiceFn',
    };
};
export const GotoStatsChoiceFn = () => {
    return {
        type: 'GotoStatsChoiceFn',
    };
};
export const GotoSkillChoiceFn = () => {
    return {
        type: 'GotoSkillChoiceFn',
    };
};
export const GotoGuildChoiceFn = () => {
    return {
        type: 'GotoGuildChoiceFn',
    };
};


//EQUIPMENT SCREEN
export const ReturnWeaponEquipmentChoiceFn = (Weapon,WeaponImg,WeaponDamage) => {
    return {
        type: 'ReturnWeaponEquipmentChoiceFn',
        Weapon: Weapon,
        WeaponImg: WeaponImg,
        WeaponDamage: WeaponDamage
    };
};
export const ReturnArmorEquipmentChoiceFn = (Armor,ArmorImg,ArmorDef) => {
    return {
        type: 'ReturnArmorEquipmentChoiceFn',
        Armor: Armor,
        ArmorImg: ArmorImg,
        ArmorDef: ArmorDef
    };
};
export const ReturnHeadGearEquipmentChoiceFn = (HeadGear,HeadGearImg,HeadGearDef) => {
    return {
        type: 'ReturnHeadGearEquipmentChoiceFn',
        HeadGear: HeadGear,
        HeadGearImg: HeadGearImg,
        HeadGearDef: HeadGearDef
    };
};
export const ReturnGarmentEquipmentChoiceFn = (Garment,GarmentImg,GarmentDef) => {
    return {
        type: 'ReturnGarmentEquipmentChoiceFn',
        Garment: Garment,
        GarmentImg: GarmentImg,
        GarmentDef: GarmentDef
    };
};



export const ReturnFootGearEquipmentChoiceFn = (FootGear,FootGearImg,FootGearDef) => {
    return {
        type: 'ReturnFootGearEquipmentChoiceFn',
        FootGear: FootGear,
        FootGearImg: FootGearImg,
        FootGearDef: FootGearDef
    };
};
export const ReturnAccessoryOneEquipmentChoiceFn = (AccessoryOne,AccessoryOneImg,AccessoryOneDef) => {
    return {
        type: 'ReturnAccessoryOneEquipmentChoiceFn',
        AccessoryOne: AccessoryOne,
        AccessoryOneImg: AccessoryOneImg,
        AccessoryOneDef: AccessoryOneDef
    };
};

export const ReturnAccessoryTwoEquipmentChoiceFn = (AccessoryTwo,AccessoryTwoImg,AccessoryTwoDef) => {
    return {
        type: 'ReturnAccessoryTwoEquipmentChoiceFn',
        AccessoryTwo: AccessoryTwo,
        AccessoryTwoImg: AccessoryTwoImg,
        AccessoryTwoDef: AccessoryTwoDef
    };
};



//WORLD MAP
export const GotoWorldMapFn = () => {
    return {
        type: 'GotoWorldMapFn',
    };
};

export const GotoPronteraFn = () => {
    return {
        type: 'GotoPronteraFn',
    };
};
export const GotoPronteraToolDealerFn = () => {
    return {
        type: 'GotoPronteraToolDealerFn',
    };
};

export const GotoPronteraWeaponArmorDealerFn = () => {
    return {
        type: 'GotoPronteraWeaponArmorDealerFn',
    };
};

export const GotoPronteraHeadGearDealerFn = () => {
    return {
        type: 'GotoPronteraHeadGearDealerFn',
    };
};
export const GotoPronteraCastleFn = () => {
    return {
        type: 'GotoPronteraCastleFn',
    };
};

export const GotoChallengeTowerFn = () => {
    return {
        type: 'GotoChallengeTowerFn',
    };
};

export const GotoPoringIslandFn = () => {
    return {
        type: 'GotoPoringIslandFn',
    };
};
export const GotoGeffenFn = () => {
    return {
        type: 'GotoGeffenFn',
    };
};
export const GotoGeffenDungeon1FFn = () => {
    return {
        type: 'GotoGeffenDungeon1FFn',
    };
};
export const GotoGeffenDungeon2FFn = () => {
    return {
        type: 'GotoGeffenDungeon2FFn',
    };
};
export const GotoGeffenDungeon3FFn = () => {
    return {
        type: 'GotoGeffenDungeon3FFn',
    };
};
export const GotoGeffenDungeon4FFn = () => {
    return {
        type: 'GotoGeffenDungeon4FFn',
    };
};


export const GotoPayonCave1FFn = () => {
    return {
        type: 'GotoPayonCave1FFn',
    };
};
export const GotoPayonCave2FFn = () => {
    return {
        type: 'GotoPayonCave2FFn',
    };
};
export const GotoPayonCave3FFn = () => {
    return {
        type: 'GotoPayonCave3FFn',
    };
};

export const GotoBattlePoringIslandMapFn = (Path,MonsterID) => {
    return {
        type: 'GotoBattlePoringIslandMapFn',
        Path:Path,
        num:MonsterID
    };
};
export const GotoBattlePoringIslandMapTwoFn = (Path) => {
    return {
        type: 'GotoBattlePoringIslandMapTwoFn',
        Path:Path
    };
};
export const GotoBattlePoringIslandMapTwoSecretFn = () => {
    return {
        type: 'GotoBattlePoringIslandMapTwoSecretFn',
    };
};
export const GotoBattlePoringIslandMapBossFn = (Path) => {
    return {
        type: 'GotoBattlePoringIslandMapBossFn',
        Path:Path
    };
};



export const GotoTreasurePoringIslandMapFn = (Path) => {
    return {
        type: 'GotoTreasurePoringIslandMapFn',
        Path:Path
    };
};
export const GotoPoringIslandHouseMapFn = () => {
    return {
        type: 'GotoPoringIslandHouseMapFn',
    };
};


export const typeWritterEffectFn = () => {
    return {
        type: 'typeWritterEffectFn',
    };
};
export const resetTypeWritterEffectFn = () => {
    return {
        type: 'resetTypeWritterEffectFn',
    };
};


export const easterEggFn = () => {
    return {
        type: 'easterEggFn',
    };
};

export const supportOnceFn = () => {
    return {
        type: 'supportOnceFn',
    };
};


// Animation
export const UserAttackAnimationFn = () => {
    return {
        type: 'UserAttackAnimationFn'
    };
};
export const ResetUserAttackAnimationFn = () => {
    return {
        type: 'ResetUserAttackAnimationFn'
    };
};
export const UserOnHitAnimationFn = () => {
    return {
        type: 'UserOnHitAnimationFn'
    };
};
export const ResetUserOnHitAnimationFn = () => {
    return {
        type: 'ResetUserOnHitAnimationFn'
    };
};

export const EnemyOnHitAnimationFn = () => {
    return {
        type: 'EnemyOnHitAnimationFn'
    };
};
export const ResetEnemyOnHitAnimationFn = () => {
    return {
        type: 'ResetEnemyOnHitAnimationFn'
    };
};
export const UserIsDyingAnimationFn = () => {
    return {
        type: 'UserIsDyingAnimationFn'
    };
};
export const ResetUserIsDyingAnimationFn = () => {
    return {
        type: 'ResetUserIsDyingAnimationFn'
    };
};

export const UserIsDeadAnimationFn = () => {
    return {
        type: 'UserIsDeadAnimationFn'
    };
};
export const ResetUserIsDeadAnimationFn = () => {
    return {
        type: 'ResetUserIsDeadAnimationFn'
    };
};
export const UserIsBlockAnimationFn = () => {
    return {
        type: 'UserIsBlockAnimationFn'
    };
};
export const ResetUserIsBlockAnimationFn = () => {
    return {
        type: 'ResetUserIsBlockAnimationFn'
    };
};
export const UserChannelAnimationFn = () => {
    return {
        type: 'UserChannelAnimationFn'
    };
};
export const ResetUserChannelAnimationFn = () => {
    return {
        type: 'ResetUserChannelAnimationFn'
    };
};
export const EnemyDodgeAnimationFn = (animation) => {
    return {
        type: 'EnemyDodgeAnimationFn',
        animation: animation
    };
};
export const UserIsDodgeAnimationFn = (animation) => {
    return {
        type: 'UserIsDodgeAnimationFn',
        animation: animation
    };
};
export const UserIsCritAnimationFn = (animation) => {
    return {
        type: 'UserIsCritAnimationFn',
        animation: animation
    };
};
export const EnemyOnCritAnimationFn = (animation) => {
    return {
        type: 'EnemyOnCritAnimationFn',
        animation: animation
    };
};
export const EnemyOnHitDoubleAnimationFn = (animation) => {
    return {
        type: 'EnemyOnHitDoubleAnimationFn',
        animation: animation
    };
};
export const EnemyOnReflectNumberFn = (animation) => {
    return {
        type: 'EnemyOnReflectNumberFn',
        animation: animation
    };
};
export const UserOnLifeStealAnimationFn = (animation) => {
    return {
        type: 'UserOnLifeStealAnimationFn',
        animation: animation
    };
};
export const UserOnHPHealAnimationFn = (animation) => {
    return {
        type: 'UserOnHPHealAnimationFn',
        animation: animation
    };
};
export const UserOnSPHealAnimationFn = (animation) => {
    return {
        type: 'UserOnSPHealAnimationFn',
        animation: animation
    };
};


export const UserWeaponImgFn = (WeaponBattleImg,WeaponAttackImg,WeaponDefendImg,WeaponOnHitImg,WeaponDyingImg,WeaponDeadImg,WeaponChannelImg,WeaponPickUpImg) => {
    return {
        type: 'UserWeaponImgFn',
        WeaponBattleImg: WeaponBattleImg,
        WeaponAttackImg: WeaponAttackImg,
        WeaponDefendImg: WeaponDefendImg,
        WeaponOnHitImg: WeaponOnHitImg,
        WeaponDyingImg: WeaponDyingImg,
        WeaponDeadImg: WeaponDeadImg,
        WeaponChannelImg: WeaponChannelImg,
        WeaponPickUpImg: WeaponPickUpImg
        
    };
};
export const UserPickUpAnimationFn = (Turn) => {
    return {
        type: 'UserPickUpAnimationFn',
        Turn: Turn
    };
};
export const EnemyAttackAnimationFn = (Turn) => {
    return {
        type: 'EnemyAttackAnimationFn',
        Turn: Turn
    };
};
export const EnemyDeadAnimationFn = (Turn) => {
    return {
        type: 'EnemyDeadAnimationFn',
        Turn: Turn
    };
};

//Skills
export const UserInSelectSkillFn = () => {
    return {
        type: 'UserInSelectSkillFn'
    };
};
export const ReturnUserInSelectSkillFn = () => {
    return {
        type: 'ReturnUserInSelectSkillFn'
    };
};
export const UserInSelectItemFn= () => {
    return {
        type: 'UserInSelectItemFn'
    };
};
export const ReturnUserInSelectItemFn = () => {
    return {
        type: 'ReturnUserInSelectItemFn'
    };
};


export const EnemyTurnFn = () => {
    return {
        type: 'EnemyTurnFn'
    };
};
export const ResetEnemyTurnFn = () => {
    return {
        type: 'ResetEnemyTurnFn'
    };
};
export const UserTurnBlockFn = () => {
    return {
        type: 'UserTurnBlockFn'
    };
};
export const ResetUserTurnBlockFn = () => {
    return {
        type: 'ResetUserTurnBlockFn'
    };
};
export const UserTurnFn = () => {
    return {
        type: 'UserTurnFn'
    };
};
export const ResetUserTurnFn = () => {
    return {
        type: 'ResetUserTurnFn'
    };
};
export const EnemyTurnBlockFn = () => {
    return {
        type: 'EnemyTurnBlockFn'
    };
};
export const ResetEnemyTurnBlockFn = () => {
    return {
        type: 'ResetEnemyTurnBlockFn'
    };
};




//Win & Lose Reset
export const WinResultFn = (EnemyExperience, EnemyZeny) => {
    return {
        type: 'WinResultFn',
        enemyExperience: EnemyExperience,
        enemyZeny: EnemyZeny
    };
};

export const ResetEnemyCurrentHealthFn = () => {
    return {
        type: 'ResetEnemyCurrentHealthFn'
    };
};
export const ReturnCheckPointFn = () => {
    return {
        type: 'ReturnCheckPointFn'
    };
};

//NPC Interaction
export const TalktoKafraEmployeeFn = () => {
    return {
        type: 'TalktoKafraEmployeeFn'
    };
};
export const TalktoFountainFn = () => {
    return {
        type: 'TalktoFountainFn'
    };
};
export const TalktoQuestBoardFn = () => {
    return {
        type: 'TalktoQuestBoardFn'
    };
};
export const TalktoSoldierGuard1Fn = () => {
    return {
        type: 'TalktoSoldierGuard1Fn'
    };
};
export const TalktoSoldierGuard2Fn = () => {
    return {
        type: 'TalktoSoldierGuard2Fn'
    };
};
export const TalktoPronteraKingFn = () => {
    return {
        type: 'TalktoPronteraKingFn'
    };
};
export const TalktoRoyalGuard1Fn = () => {
    return {
        type: 'TalktoRoyalGuard1Fn'
    };
};
export const TalktoRoyalGuard2Fn = () => {
    return {
        type: 'TalktoRoyalGuard2Fn'
    };
};
export const TalktoPronteraAssistantFn = () => {
    return {
        type: 'TalktoPronteraAssistantFn'
    };
};
export const TalktoPronteraAssistantContinueFn = () => {
    return {
        type: 'TalktoPronteraAssistantContinueFn'
    };
};
export const TalktoPronteraAssistantLearnedFn = () => {
    return {
        type: 'TalktoPronteraAssistantLearnedFn'
    };
};

export const TalktoKiwiFn = () => {
    return {
        type: 'TalktoKiwiFn'
    };
};
export const TalktoLemonFn = () => {
    return {
        type: 'TalktoLemonFn'
    };
};
export const TalktoChocolateFn = () => {
    return {
        type: 'TalktoChocolateFn'
    };
};
export const TalktoIWantToJoinGuildFn = () => {
    return {
        type: 'TalktoIWantToJoinGuildFn'
    };
};
export const TalktoKiwiGuildFn = () => {
    return {
        type: 'TalktoKiwiGuildFn'
    };
};
export const TalktoChocolateGuildFn = () => {
    return {
        type: 'TalktoChocolateGuildFn'
    };
};
export const TalktoLemonGuildFn = () => {
    return {
        type: 'TalktoLemonGuildFn'
    };
};



export const TalktoLemonResponseFn = () => {
    return {
        type: 'TalktoLemonResponseFn'
    };
};

export const TalktoLemonCompleteFn = () => {
    return {
        type: 'TalktoLemonCompleteFn'
    };
};



export const TalktoWeaponDealerFn = () => {
    return {
        type: 'TalktoWeaponDealerFn'
    };
};
export const TalktoArmorDealerFn = () => {
    return {
        type: 'TalktoArmorDealerFn'
    };
};
export const TalktoHeadGearDealerFn = () => {
    return {
        type: 'TalktoHeadGearDealerFn'
    };
};
export const TalktoToolDealerFn = () => {
    return {
        type: 'TalktoToolDealerFn'
    };
};


export const ResetTalktoFn = () => {
    return {
        type: 'ResetTalktoFn'
    };
};
export const ResetMyPointsFn = (BonusVit,BonusInt) => {
    return {
        type: 'ResetMyPointsFn',
        BonusVit:BonusVit,
        BonusInt:BonusInt
    };
};


export const KafraEmployeeHealFn = () => {
    return {
        type: 'KafraEmployeeHealFn'
    };
};
export const KafraEmployeeHealStateFn = () => {
    return {
        type: 'KafraEmployeeHealStateFn'
    };
};
export const ResetStatsPointFn = () => {
    return {
        type: 'ResetStatsPointFn'
    };
};


export const DealerBuyFn = () => {
    return {
        type: 'DealerBuyFn'
    };
};
export const DealerSellFn = () => {
    return {
        type: 'DealerSellFn'
    };
};
//Inside BuySell Fn
export const DealerBuySuccessFn = () => {
    return {
        type: 'DealerBuySuccessFn'
    };
};
export const DealerBuyFailureFn = () => {
    return {
        type: 'DealerBuyFailureFn'
    };
};
export const DealerSellSuccessFn = () => {
    return {
        type: 'DealerSellSuccessFn'
    };
};
export const DealerSellFailureFn = () => {
    return {
        type: 'DealerSellFailureFn'
    };
};



export const ResetDealerBuySellHealFn = () => {
    return {
        type: 'ResetDealerBuySellHealFn'
    };
};


//Geffen
export const GeffenGoblinYulaNPCFn = () => {
    return {
        type: 'GeffenGoblinYulaNPCFn'
    };
};
export const GeffenGoblinYulaNPCInterestFn = () => {
    return {
        type: 'GeffenGoblinYulaNPCInterestFn'
    };
};
export const GeffenGoblinYulaNPCLearnedFn = () => {
    return {
        type: 'GeffenGoblinYulaNPCLearnedFn'
    };
};
export const GeffenCitizenNPCContinueFn = () => {
    return {
        type: 'GeffenCitizenNPCContinueFn'
    };
};

export const GeffenCitizenNPCFn = () => {
    return {
        type: 'GeffenCitizenNPCFn'
    };
};
export const GeffenQuestBoardFn = () => {
    return {
        type: 'GeffenQuestBoardFn'
    };
};

export const GeffenTimerNPCFn = () => {
    return {
        type: 'GeffenTimerNPCFn'
    };
};
export const GeffenGrandmaNPCFn = () => {
    return {
        type: 'GeffenGrandmaNPCFn'
    };
};
export const GeffenSoldierNPCFn = () => {
    return {
        type: 'GeffenSoldierNPCFn'
    };
};
export const ResetGeffenNPCFn = () => {
    return {
        type: 'ResetGeffenNPCFn'
    };
};

//Training Fn
export const TrainingSuccesFn = (name,level) => {
    return {
        type: 'TrainingSuccesFn',
        name: name,
        level:level
    };
};
export const TrainingFailureFn = (name,level) => {
    return {
        type: 'TrainingFailureFn',
        name: name,
        level:level
    };
};
export const ResetTrainingRateFn = () => {
    return {
        type: 'ResetTrainingRateFn'
    };
};

export const GotoHouseTrainingSTRFn = () => {
    return {
        type: 'GotoHouseTrainingSTRFn'
    };
};
export const GotoHouseTrainingAGIFn = () => {
    return {
        type: 'GotoHouseTrainingAGIFn'
    };
};
export const GotoHouseTrainingVITFn = () => {
    return {
        type: 'GotoHouseTrainingVITFn'
    };
};
export const GotoHouseTrainingINTFn = () => {
    return {
        type: 'GotoHouseTrainingINTFn'
    };
};
export const GotoHouseTrainingDEXFn = () => {
    return {
        type: 'GotoHouseTrainingDEXFn'
    };
};
export const GotoHouseTrainingLUKFn = () => {
    return {
        type: 'GotoHouseTrainingLUKFn'
    };
};
export const ResetHouseTrainingFn = () => {
    return {
        type: 'ResetHouseTrainingFn'
    };
};


// ITEM BUY SELL
export const RedPotionFn = (Zeny,Item) => {
    return {
        type: 'RedPotionFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const OrangePotionFn = (Zeny,Item) => {
    return {
        type: 'OrangePotionFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const YellowPotionFn = (Zeny,Item) => {
    return {
        type: 'YellowPotionFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const WhitePotionFn = (Zeny,Item) => {
    return {
        type: 'WhitePotionFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const AnniversaryCakeFn = (Zeny,Item) => {
    return {
        type: 'AnniversaryCakeFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const MastelaFruitFn = (Zeny,Item) => {
    return {
        type: 'MastelaFruitFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const BluePotionFn = (Zeny,Item) => {
    return {
        type: 'BluePotionFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const YggdrasilBerryFn = (Zeny,Item) => {
    return {
        type: 'YggdrasilBerryFn',
        Zeny: Zeny,
        Item: Item
    };
};
//MISC
export const LampFn = (Zeny,Item) => {
    return {
        type: 'LampFn',
        Zeny: Zeny,
        Item: Item
    };
};

//ETC important
export const PoringIslandMapFn = (Zeny,Item) => {
    return {
        type: 'PoringIslandMapFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const PayonCaveMapFn = (Zeny,Item) => {
    return {
        type: 'PayonCaveMapFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const GeffenDungeonMapFn = (Zeny,Item) => {
    return {
        type: 'GeffenDungeonMapFn',
        Zeny: Zeny,
        Item: Item
    };
};

//MISSION
export const SpiritOfEclipseFn = (Zeny,Item) => {
    return {
        type: 'SpiritOfEclipseFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const SpiritOfWolyafaFn = (Zeny,Item) => {
    return {
        type: 'SpiritOfWolyafaFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const SpiritOfDoppelgangerFn = (Zeny,Item) => {
    return {
        type: 'SpiritOfDoppelgangerFn',
        Zeny: Zeny,
        Item: Item
    };
};

//WEAPON BUY SELL
export const KatanaFn = (Zeny,Item) => {
    return {
        type: 'KatanaFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const BastardSwordFn = (Zeny,Item) => {
    return {
        type: 'BastardSwordFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const GaiaSwordFn = (Zeny,Item) => {
    return {
        type: 'GaiaSwordFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const TwinEdgeofNaghtSiegerFn = (Zeny,Item) => {
    return {
        type: 'TwinEdgeofNaghtSiegerFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const VioletFearFn = (Zeny,Item) => {
    return {
        type: 'VioletFearFn',
        Zeny: Zeny,
        Item: Item
    };
};
//ARMOR BUY SELL

export const CottonShirtFn = (Zeny,Item) => {
    return {
        type: 'CottonShirtFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const AdventureSuitFn = (Zeny,Item) => {
    return {
        type: 'AdventureSuitFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const WoodenMailFn = (Zeny,Item) => {
    return {
        type: 'WoodenMailFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const CoatFn = (Zeny,Item) => {
    return {
        type: 'CoatFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const PaddedArmorFn = (Zeny,Item) => {
    return {
        type: 'PaddedArmorFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const ChainMailFn = (Zeny,Item) => {
    return {
        type: 'ChainMailFn',
        Zeny: Zeny,
        Item: Item
    };
};

export const FullPlateFn = (Zeny,Item) => {
    return {
        type: 'FullPlateFn',
        Zeny: Zeny,
        Item: Item
    };
};

//HeadGear
export const LordKahosHornFn = (Zeny,Item) => {
    return {
        type: 'LordKahosHornFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const TeddybearHatFn = (Zeny,Item) => {
    return {
        type: 'TeddybearHatFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const CrownFn = (Zeny,Item) => {
    return {
        type: 'CrownFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const HelmFn = (Zeny,Item) => {
    return {
        type: 'HelmFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const PandaHatFn = (Zeny,Item) => {
    return {
        type: 'PandaHatFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const ChefHatFn = (Zeny,Item) => {
    return {
        type: 'ChefHatFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const SantaPoringHatFn = (Zeny,Item) => {
    return {
        type: 'SantaPoringHatFn',
        Zeny: Zeny,
        Item: Item
    };
};
//FootGear Buy Sell
//SandslsFn, ShoesFn, BootsFn, GreavesFn, BunnySlipperFn, TidalShoesFn, SiegeBootsFn, SiegeGreavesFn, VidarsBootsFn, VitalTreeShoesFn, VariantShoesFn, SleipnirFn
export const SandalsFn = (Zeny,Item) => {
    return {
        type: 'SandalsFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const ShoesFn = (Zeny,Item) => {
    return {
        type: 'ShoesFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const BootsFn = (Zeny,Item) => {
    return {
        type: 'BootsFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const GreavesFn = (Zeny,Item) => {
    return {
        type: 'GreavesFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const BunnySlipperFn = (Zeny,Item) => {
    return {
        type: 'BunnySlipperFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const TidalShoesFn = (Zeny,Item) => {
    return {
        type: 'TidalShoesFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const SiegeBootsFn = (Zeny,Item) => {
    return {
        type: 'SiegeBootsFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const SiegeGreavesFn = (Zeny,Item) => {
    return {
        type: 'SiegeGreavesFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const VidarsBootsFn = (Zeny,Item) => {
    return {
        type: 'VidarsBootsFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const VitalTreeShoesFn = (Zeny,Item) => {
    return {
        type: 'VitalTreeShoesFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const VariantShoesFn = (Zeny,Item) => {
    return {
        type: 'VariantShoesFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const SleipnirFn = (Zeny,Item) => {
    return {
        type: 'SleipnirFn',
        Zeny: Zeny,
        Item: Item
    };
};
//GARMENT
export const HoodFn = (Zeny,Item) => {
    return {
        type: 'HoodFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const MufflerFn = (Zeny,Item) => {
    return {
        type: 'MufflerFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const ManteauFn = (Zeny,Item) => {
    return {
        type: 'ManteauFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const FalconMufflerFn = (Zeny,Item) => {
    return {
        type: 'FalconMufflerFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const ValisManteauFn = (Zeny,Item) => {
    return {
        type: 'ValisManteauFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const ValkyrianManteauFn = (Zeny,Item) => {
    return {
        type: 'ValkyrianManteauFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const WoolScarfFn = (Zeny,Item) => {
    return {
        type: 'WoolScarfFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const FallenAngelWingFn = (Zeny,Item) => {
    return {
        type: 'FallenAngelWingFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const CloakofGrayFn = (Zeny,Item) => {
    return {
        type: 'CloakofGrayFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const ElementalCapeFn = (Zeny,Item) => {
    return {
        type: 'ElementalCapeFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const AsprikaFn = (Zeny,Item) => {
    return {
        type: 'AsprikaFn',
        Zeny: Zeny,
        Item: Item
    };
};
//Accessory
export const ClipFn = (Zeny,Item) => {
    return {
        type: 'ClipFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const RosaryFn = (Zeny,Item) => {
    return {
        type: 'RosaryFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const VesperCore02Fn = (Zeny,Item) => {
    return {
        type: 'VesperCore02Fn',
        Zeny: Zeny,
        Item: Item
    };
};
export const BradiumEarringFn = (Zeny,Item) => {
    return {
        type: 'BradiumEarringFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const GloriousRingFn = (Zeny,Item) => {
    return {
        type: 'GloriousRingFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const SprintRingFn = (Zeny,Item) => {
    return {
        type: 'SprintRingFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const DiabolusRingFn = (Zeny,Item) => {
    return {
        type: 'DiabolusRingFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const MedalofHonorFn = (Zeny,Item) => {
    return {
        type: 'MedalofHonorFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const BakonawaAgimatTattooFn = (Zeny,Item) => {
    return {
        type: 'BakonawaAgimatTattooFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const BrisingamenFn = (Zeny,Item) => {
    return {
        type: 'BrisingamenFn',
        Zeny: Zeny,
        Item: Item
    };
};
export const MegingjardFn = (Zeny,Item) => {
    return {
        type: 'MegingjardFn',
        Zeny: Zeny,
        Item: Item
    };
};

//ITEMS USEAGE
export const UseRedPotionFn = (vit) => {
    return {
        type: 'UseRedPotionFn',
        Vit:vit
    };
};
export const UseOrangePotionFn = (vit) => {
    return {
        type: 'UseOrangePotionFn',
        Vit:vit
    };
};
export const UseYellowPotionFn = (vit) => {
    return {
        type: 'UseYellowPotionFn',
        Vit:vit
    };
};
export const UseWhitePotionFn = (vit) => {
    return {
        type: 'UseWhitePotionFn',
        Vit:vit
    };
};

export const UseAnniversaryCakeFn = (vit) => {
    return {
        type: 'UseAnniversaryCakeFn',
        Vit:vit,
    };
};

export const UseMastelaFruitFn = (vit) => {
    return {
        type: 'UseMastelaFruitFn',
        Vit:vit
    };
};

export const UseBluePotionFn = (int) => {
    return {
        type: 'UseBluePotionFn',
        Int:int
    };
};

export const UseYggdrasilBerryFn = () => {
    return {
        type: 'UseYggdrasilBerryFn'
    };
};

//ATTRIBUTES
export const STRPointsFn = (ReqPoints) => {
    return {
        type: 'STRPointsFn',
        ReqPoints: ReqPoints
    };
};
export const AGIPointsFn = (ReqPoints) => {
    return {
        type: 'AGIPointsFn',
        ReqPoints: ReqPoints
    };
};
export const VITPointsFn = (ReqPoints,vit,BonusVit) => {
    return {
        type: 'VITPointsFn',
        ReqPoints: ReqPoints,
        Vit:vit,
        BonusVit:BonusVit
    };
};
export const INTPointsFn = (ReqPoints,int,BonusInt) => {
    return {
        type: 'INTPointsFn',
        ReqPoints: ReqPoints,
        Int:int,
        BonusInt: BonusInt
    };
};
export const DEXPointsFn = (ReqPoints) => {
    return {
        type: 'DEXPointsFn',
        ReqPoints: ReqPoints
    };
};
export const LUKPointsFn = (ReqPoints) => {
    return {
        type: 'LUKPointsFn',
        ReqPoints: ReqPoints
    };
};
//Bonus Attributes
export const TrainingSTRFn = (num) => {
    return {
        type: 'TrainingSTRFn',
        num: num 
    };
};
export const TrainingAGIFn = (num) => {
    return {
        type: 'TrainingAGIFn',
        num: num 
    };
};
export const TrainingVITFn = (num) => {
    return {
        type: 'TrainingVITFn',
        num: num 
    };
};
export const TrainingINTFn = (num) => {
    return {
        type: 'TrainingINTFn',
        num: num 
    };
};
export const TrainingDEXFn = (num) => {
    return {
        type: 'TrainingDEXFn',
        num: num 
    };
};
export const TrainingLUKFn = (num) => {
    return {
        type: 'TrainingLUKFn',
        num: num 
    };
};
export const BonusSTRPointsFn = (BonusStr,BonusDex,BonusLuk) => {
    return {
        type: 'BonusSTRPointsFn',
        BonusStr: BonusStr,
        BonusDex: BonusDex,
        BonusLuk: BonusLuk,
    };
};
export const BonusAGIPointsFn = (BonusAgi,BonusDex) => {
    return {
        type: 'BonusAGIPointsFn',
        BonusAgi: BonusAgi,
        BonusDex: BonusDex,
    };
};
export const BonusVITPointsFn = (BonusVit,Vit) => {
    return {
        type: 'BonusVITPointsFn',
        Vit:Vit,
        BonusVit: BonusVit
    };
};
export const BonusINTPointsFn = (BonusInt,Int) => {
    return {
        type: 'BonusINTPointsFn',
        Int:Int,
        BonusInt: BonusInt
    };
};
export const BonusDEXPointsFn = (BonusStr,BonusAgi,BonusDex,BonusLuk) => {
    return {
        type: 'BonusDEXPointsFn',
        BonusStr: BonusStr,
        BonusAgi: BonusAgi,
        BonusDex: BonusDex,
        BonusLuk: BonusLuk,
    };
};
export const BonusLUKPointsFn = (BonusStr,BonusDex,BonusLuk) => {
    return {
        type: 'BonusLUKPointsFn',
        BonusStr: BonusStr,
        BonusDex: BonusDex,
        BonusLuk: BonusLuk,
    };
};
export const BonusEquipPointsFn = (BonusStr,BonusAgi,BonusVit,Vit,BonusInt,Int,BonusDex,BonusLuk,STRPoint,AGIPoint,VITPoint,INTPoint,DEXPoint,LUKPoint, Bonusattack, Bonusspeed, BonusdodgeRate, Bonusdefence, Bonusdefencebuffer, BonushitRate, BonuscritRate) => {
    return {
        type: 'BonusEquipPointsFn',
        BonusStr: BonusStr,
        BonusAgi: BonusAgi,
        Vit:Vit,
        BonusVit: BonusVit,
        Int:Int,
        BonusInt: BonusInt,
        BonusDex: BonusDex,
        BonusLuk: BonusLuk,
        STRPoint: STRPoint,
        AGIPoint: AGIPoint,
        VITPoint: VITPoint,
        INTPoint: INTPoint,
        DEXPoint: DEXPoint,
        LUKPoint: LUKPoint,
        Bonusattack: Bonusattack,
        Bonusspeed: Bonusspeed,
        BonusdodgeRate: BonusdodgeRate,
        Bonusdefence: Bonusdefence,
        Bonusdefencebuffer: Bonusdefencebuffer,
        BonushitRate: BonushitRate,
        BonuscritRate: BonuscritRate

    };
};

//Clock Fixing
export const userClockDefendFn = () => {
    return {
        type: 'userClockDefendFn'
    };
};
export const enemyClockDefendFn = () => {
    return {
        type: 'enemyClockDefendFn'
    };
};
//Clock Fn
export const TickingClockFn = () => {
    return {
        type: 'TickingClockFn'
    };
};
//QUEST
export const AcceptQuestDialogFn = (Num) => {
    return {
        type: 'AcceptQuestDialogFn',
        Number: Num
    };
};
export const ReturnQuestDialogFn = (Num) => {
    return {
        type: 'ReturnQuestDialogFn',
        Number: Num
    };
};
export const ReturnSpecialQuestDialogFn = (Story, Num1, Num2, Num3) => {
    return {
        type: 'ReturnSpecialQuestDialogFn',
        Story: Story,
        Number1: Num1,
        Number2: Num2,
        Number3: Num3,
    };
};

export const ProgressQuestDialogFn = (Num) => {
    return {
        type: 'ProgressQuestDialogFn',
        Number: Num
    };
};
//WIN Etc Items
//PORING
export const WinJellopyFn = (Zeny,Num) => {
    return {
        type: 'WinJellopyFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinEmptyBottleFn = (Zeny,Num) => {
    return {
        type: 'WinEmptyBottleFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinStickyMucusFn = (Zeny,Num) => {
    return {
        type: 'WinStickyMucusFn',
        Number: Num,
        Zeny: Zeny
    };
};
//LUNATIC
export const WinCloverFn = (Zeny,Num) => {
    return {
        type: 'WinCloverFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinFeatherFn = (Zeny,Num) => {
    return {
        type: 'WinFeatherFn',
        Number: Num,
        Zeny: Zeny
    };
};
//ROCKER
export const WinGrasshoppersLegFn = (Zeny,Num) => {
    return {
        type: 'WinGrasshoppersLegFn',
        Number: Num,
        Zeny: Zeny
    };
};
//AMBERNITE
export const WinSnailsShellFn = (Zeny,Num) => {
    return {
        type: 'WinSnailsShellFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinShellFn = (Zeny,Num) => {
    return {
        type: 'WinShellFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinGarletFn = (Zeny,Num) => {
    return {
        type: 'WinGarletFn',
        Number: Num,
        Zeny: Zeny
    };
};
//GHOSTRING
export const WinEmperiumFn = (Zeny,Num) => {
    return {
        type: 'WinEmperiumFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinFabricFn = (Zeny,Num) => {
    return {
        type: 'WinFabricFn',
        Number: Num,
        Zeny: Zeny
    };
};
//ECLIPSE
export const WinFourLeafCloverFn = (Zeny,Num) => {
    return {
        type: 'WinFourLeafCloverFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinGlassBeadFn = (Zeny,Num) => {
    return {
        type: 'WinGlassBeadFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinOpalFn = (Zeny,Num) => {
    return {
        type: 'WinOpalFn',
        Number: Num,
        Zeny: Zeny
    };
};
//ZOMBIE
export const WinDecayedNailFn = (Zeny,Num) => {
    return {
        type: 'WinDecayedNailFn',
        Number: Num,
        Zeny: Zeny
    };
};
//SKELETON
export const WinSkelBoneFn = (Zeny,Num) => {
    return {
        type: 'WinSkelBoneFn',
        Number: Num,
        Zeny: Zeny
    };
};
//MUNAK
export const WinDaenggieFn = (Zeny,Num) => {
    return {
        type: 'WinDaenggieFn',
        Number: Num,
        Zeny: Zeny
    };
};
//BONGUN
export const WinShortDaenggieFn = (Zeny,Num) => {
    return {
        type: 'WinShortDaenggieFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinOldPortraitFn = (Zeny,Num) => {
    return {
        type: 'WinOldPortraitFn',
        Number: Num,
        Zeny: Zeny
    };
};
//SOHEE
export const WinBlackHairFn = (Zeny,Num) => {
    return {
        type: 'WinBlackHairFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinAuthoritativeBadgeFn = (Zeny,Num) => {
    return {
        type: 'WinAuthoritativeBadgeFn',
        Number: Num,
        Zeny: Zeny
    };
};
//WOLYAFA
export const WinNineTailsFn = (Zeny,Num) => {
    return {
        type: 'WinNineTailsFn',
        Number: Num,
        Zeny: Zeny
    };
};
//POISON SPORE
export const WinPoisonSporeFn = (Zeny,Num) => {
    return {
        type: 'WinPoisonSporeFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinMushroomSporeFn = (Zeny,Num) => {
    return {
        type: 'WinMushroomSporeFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinKarvodailnirolFn = (Zeny,Num) => {
    return {
        type: 'WinKarvodailnirolFn',
        Number: Num,
        Zeny: Zeny
    };
};
//JAKK
export const WinJackPumpkinFn = (Zeny,Num) => {
    return {
        type: 'WinJackPumpkinFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinZargonFn = (Zeny,Num) => {
    return {
        type: 'WinZargonFn',
        Number: Num,
        Zeny: Zeny
    };
};
//GHOUL
export const WinHorrendousMouthFn = (Zeny,Num) => {
    return {
        type: 'WinHorrendousMouthFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinMementoFn = (Zeny,Num) => {
    return {
        type: 'WinMementoFn',
        Number: Num,
        Zeny: Zeny
    };
};
//MARIONETTE
export const WinGoldenHairFn = (Zeny,Num) => {
    return {
        type: 'WinGoldenHairFn',
        Number: Num,
        Zeny: Zeny
    };
};
//WRAITH
export const WinRedGemstoneFn = (Zeny,Num) => {
    return {
        type: 'WinRedGemstoneFn',
        Number: Num,
        Zeny: Zeny
    };
};
//DOPPELGANGER
export const WinCursedRubyFn = (Zeny,Num) => {
    return {
        type: 'WinCursedRubyFn',
        Number: Num,
        Zeny: Zeny
    };
};
//WRAITH DEAD
export const WinDiamondFn = (Zeny,Num) => {
    return {
        type: 'WinDiamondFn',
        Number: Num,
        Zeny: Zeny
    };
};
//HELLIONREVENANT
export const WinEyeOfHellionFn = (Zeny,Num) => {
    return {
        type: 'WinEyeOfHellionFn',
        Number: Num,
        Zeny: Zeny
    };
};
//GoldenThiefBug
export const WinGoldFn = (Zeny,Num) => {
    return {
        type: 'WinGoldFn',
        Number: Num,
        Zeny: Zeny
    };
};
//Drake
export const WinAmethystFn = (Zeny,Num) => {
    return {
        type: 'WinAmethystFn',
        Number: Num,
        Zeny: Zeny
    };
};
//Phreeoni
export const WinTongueFn = (Zeny,Num) => {
    return {
        type: 'WinTongueFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinAntJawFn = (Zeny,Num) => {
    return {
        type: 'WinAntJawFn',
        Number: Num,
        Zeny: Zeny
    };
};
//Stormy Knight
export const WinMysticFrozenFn = (Zeny,Num) => {
    return {
        type: 'WinMysticFrozenFn',
        Number: Num,
        Zeny: Zeny
    };
};
export const WinAquamarineFn = (Zeny,Num) => {
    return {
        type: 'WinAquamarineFn',
        Number: Num,
        Zeny: Zeny
    };
};

//PORING ISLAND CHEST
export const OpenChest1Fn = () => {
    return {
        type: 'OpenChest1Fn',
    };
};

export const Chest1VisitRepeatFn = () => {
    return {
        type: 'Chest1VisitRepeatFn',
    };
};
export const OpenChest2Fn = () => {
    return {
        type: 'OpenChest2Fn',
    };
};

export const Chest2VisitRepeatFn = () => {
    return {
        type: 'Chest2VisitRepeatFn',
    };
};
export const OpenChestBoss1Fn = () => {
    return {
        type: 'OpenChestBoss1Fn',
    };
};
export const ChestBoss1VisitRepeatFn = () => {
    return {
        type: 'ChestBoss1VisitRepeatFn',
    };
};
//PAYONCAVE1F CHEST
export const OpenPayonCaveChest3Fn = () => {
    return {
        type: 'OpenPayonCaveChest3Fn',
    };
};

export const PayonCaveChest3VisitRepeatFn = () => {
    return {
        type: 'PayonCaveChest3VisitRepeatFn',
    };
};
export const OpenPayonCaveChest4Fn = () => {
    return {
        type: 'OpenPayonCaveChest4Fn',
    };
};

export const PayonCaveChest4VisitRepeatFn = () => {
    return {
        type: 'PayonCaveChest4VisitRepeatFn',
    };
};
//PAYONCAVE2F CHEST
export const OpenPayonCaveChest5Fn = () => {
    return {
        type: 'OpenPayonCaveChest5Fn',
    };
};

export const PayonCaveChest5VisitRepeatFn = () => {
    return {
        type: 'PayonCaveChest5VisitRepeatFn',
    };
};
export const OpenPayonCaveChest6Fn = () => {
    return {
        type: 'OpenPayonCaveChest6Fn',
    };
};

export const PayonCaveChest6VisitRepeatFn = () => {
    return {
        type: 'PayonCaveChest6VisitRepeatFn',
    };
};
export const OpenChestBoss2Fn = () => {
    return {
        type: 'OpenChestBoss2Fn',
    };
};
export const ChestBoss2VisitRepeatFn = () => {
    return {
        type: 'ChestBoss2VisitRepeatFn',
    };
};
//GEFFEN DUNGEON
export const OpenGeffenDungeonChest1Fn = () => {
    return {
        type: 'OpenGeffenDungeonChest1Fn',
    };
};
export const GeffenDungeonChest1VisitRepeatFn = () => {
    return {
        type: 'GeffenDungeonChest1VisitRepeatFn',
    };
};
export const OpenGeffenDungeonChest2Fn = () => {
    return {
        type: 'OpenGeffenDungeonChest2Fn',
    };
};
export const GeffenDungeonChest2VisitRepeatFn = () => {
    return {
        type: 'GeffenDungeonChest2VisitRepeatFn',
    };
};
export const OpenGeffenDungeonChest3Fn = () => {
    return {
        type: 'OpenGeffenDungeonChest3Fn',
    };
};
export const GeffenDungeonChest3VisitRepeatFn = () => {
    return {
        type: 'GeffenDungeonChest3VisitRepeatFn',
    };
};
export const OpenGeffenDungeonChest4Fn = () => {
    return {
        type: 'OpenGeffenDungeonChest4Fn',
    };
};
export const GeffenDungeonChest4VisitRepeatFn = () => {
    return {
        type: 'GeffenDungeonChest4VisitRepeatFn',
    };
};

export const OpenChestBoss3Fn = () => {
    return {
        type: 'OpenChestBoss3Fn',
    };
};
export const ChestBoss3VisitRepeatFn = () => {
    return {
        type: 'ChestBoss3VisitRepeatFn',
    };
};
//PORING ISLAND BOSS
export const BossEclipseDefeatFn = () => {
    return {
        type: 'BossEclipseDefeatFn',
    };
};
export const PoringIslandBridgeNPCFn = () => {
    return {
        type: 'PoringIslandBridgeNPCFn',
    };
};
export const PoringIslandBridgeNPCSelectOneFn = () => {
    return {
        type: 'PoringIslandBridgeNPCSelectOneFn',
    };
};
export const PoringIslandBridgeNPCSelectTwoFn = () => {
    return {
        type: 'PoringIslandBridgeNPCSelectTwoFn',
    };
};
export const PoringIslandBridgeNPCSelectThreeFn = () => {
    return {
        type: 'PoringIslandBridgeNPCSelectThreeFn',
    };
};
export const PoringIslandFairyNPC1Fn = () => {
    return {
        type: 'PoringIslandFairyNPC1Fn',
    };
};
export const PoringIslandFairyNPC2Fn = () => {
    return {
        type: 'PoringIslandFairyNPC2Fn',
    };
};
export const PoringIslandFairyNPCSelectOneFn = () => {
    return {
        type: 'PoringIslandFairyNPCSelectOneFn',
    };
};
export const PoringIslandFairyNPCSelectTwoFn = () => {
    return {
        type: 'PoringIslandFairyNPCSelectTwoFn',
    };
};

export const ResetPoringIslandNPCFn = () => {
    return {
        type: 'ResetPoringIslandNPCFn',
    };
};


//PORING ISLAND PATH
export const GotoPoringIslandPath1Fn = () => {
    return {
        type: 'GotoPoringIslandPath1Fn',
    };
};
export const GotoPoringIslandPath2Fn = () => {
    return {
        type: 'GotoPoringIslandPath2Fn',
    };
};
export const GotoPoringIslandPath3Fn = () => {
    return {
        type: 'GotoPoringIslandPath3Fn',
    };
};
export const GotoPoringIslandPath4Fn = () => {
    return {
        type: 'GotoPoringIslandPath4Fn',
    };
};

export const GotoPoringIslandPath5Fn = () => {
    return {
        type: 'GotoPoringIslandPath5Fn',
    };
};
export const GotoPoringIslandPath6Fn = () => {
    return {
        type: 'GotoPoringIslandPath6Fn',
    }
};
export const GotoPoringIslandPath7Fn = () => {
    return {
        type: 'GotoPoringIslandPath7Fn',
    };
};
export const GotoPoringIslandPath8Fn = () => {
    return {
        type: 'GotoPoringIslandPath8Fn',
    };
};

export const ReturnPoringIslandPathFn = () => {
    return {
        type: 'ReturnPoringIslandPathFn',
    };
};
//PayonCave1F Path
export const GotoPayonCave1FPath1Fn = () => {
    return {
        type: 'GotoPayonCave1FPath1Fn',
    };
};
export const GotoPayonCave1FPath2HiddenFn = () => {
    return {
        type: 'GotoPayonCave1FPath2HiddenFn',
    };
};
export const GotoPayonCave1FPath3HiddenFn = () => {
    return {
        type: 'GotoPayonCave1FPath3HiddenFn',
    };
};
//2F
export const GotoPayonCave2FPath1Fn = () => {
    return {
        type: 'GotoPayonCave2FPath1Fn',
    };
};
export const GotoPayonCave2FPath2Fn = () => {
    return {
        type: 'GotoPayonCave2FPath2Fn',
    };
};
export const GotoPayonCave2FPath3Fn = () => {
    return {
        type: 'GotoPayonCave2FPath3Fn',
    };
};
export const GotoPayonCave2FPath4Fn = () => {
    return {
        type: 'GotoPayonCave2FPath4Fn',
    };
};
export const GotoPayonCave2FPath5Fn = () => {
    return {
        type: 'GotoPayonCave2FPath5Fn',
    };
};
export const GotoPayonCave2FPath6Fn = () => {
    return {
        type: 'GotoPayonCave2FPath6Fn',
    };
};
export const GotoPayonCave2FPath7Fn = () => {
    return {
        type: 'GotoPayonCave2FPath7Fn',
    };
};
export const GotoPayonCave2FPath8Fn = () => {
    return {
        type: 'GotoPayonCave2FPath8Fn',
    };
};
export const GotoPayonCave2FPath9HiddenFn = () => {
    return {
        type: 'GotoPayonCave2FPath9HiddenFn',
    };
};
export const GotoPayonCave2FPath10HiddenFn = () => {
    return {
        type: 'GotoPayonCave2FPath10HiddenFn',
    };
};
export const GotoPayonCave3FPath1Fn = () => {
    return {
        type: 'GotoPayonCave3FPath1Fn',
    };
};
export const GotoPayonCave3FPath2Fn = () => {
    return {
        type: 'GotoPayonCave3FPath2Fn',
    };
};
export const GotoPayonCave3FPath3Fn = () => {
    return {
        type: 'GotoPayonCave3FPath3Fn',
    };
};
export const GotoPayonCave3FPath4Fn = () => {
    return {
        type: 'GotoPayonCave3FPath4Fn',
    };
};
export const ReturnPayonCavePathFn = () => {
    return {
        type: 'ReturnPayonCavePathFn',
    };
}

//PayonCave Boss
export const BossWolyafaDefeatFn = () => {
    return {
        type: 'BossWolyafaDefeatFn',
    };
};

export const PayonCave1FSelfNPCHiddenFn = () => {
    return {
        type: 'PayonCave1FSelfNPCHiddenFn',
    };
};
export const PayonCave2FSelfNPCFn = () => {
    return {
        type: 'PayonCave2FSelfNPCFn',
    };
};
export const PayonCave2FFairyNPC1Fn = () => {
    return {
        type: 'PayonCave2FFairyNPC1Fn',
    };
};
export const PayonCave2FSelfNPCHiddenFn = () => {
    return {
        type: 'PayonCave2FSelfNPCHiddenFn',
    };
};
export const PayonCave2FCaveNPCFn = () => {
    return {
        type: 'PayonCave2FCaveNPCFn',
    };
};
export const PayonCave3FCaveNPCFn = () => {
    return {
        type: 'PayonCave3FCaveNPCFn',
    };
};
export const ResetPayonCaveNPCFn = () => {
    return {
        type: 'ResetPayonCaveNPCFn',
    };
};
//GEFFEN DUNGEON 1F
export const GotoGeffenDungeon1FPath1Fn = () => {
    return {
        type: 'GotoGeffenDungeon1FPath1Fn',
    };
};
export const GotoGeffenDungeon1FPath2Fn = () => {
    return {
        type: 'GotoGeffenDungeon1FPath2Fn',
    };
};
export const GotoGeffenDungeon1FPath3Fn = () => {
    return {
        type: 'GotoGeffenDungeon1FPath3Fn',
    };
};
export const GotoGeffenDungeon1FPath4Fn = () => {
    return {
        type: 'GotoGeffenDungeon1FPath4Fn',
    };
};
//GEFFEN DUNGEON 2F
export const GotoGeffenDungeon2FPath1Fn = () => {
    return {
        type: 'GotoGeffenDungeon2FPath1Fn',
    };
};
export const GotoGeffenDungeon2FPath2Fn = () => {
    return {
        type: 'GotoGeffenDungeon2FPath2Fn',
    };
};
export const GotoGeffenDungeon2FPath3Fn = () => {
    return {
        type: 'GotoGeffenDungeon2FPath3Fn',
    };
};
export const GotoGeffenDungeon2FPath4Fn = () => {
    return {
        type: 'GotoGeffenDungeon2FPath4Fn',
    };
};
export const GotoGeffenDungeon2FPath5Fn = () => {
    return {
        type: 'GotoGeffenDungeon2FPath5Fn',
    };
};
export const GotoGeffenDungeon2FPath6Fn = () => {
    return {
        type: 'GotoGeffenDungeon2FPath6Fn',
    };
};
export const GotoGeffenDungeon2FPath7HiddenFn = () => {
    return {
        type: 'GotoGeffenDungeon2FPath7HiddenFn',
    };
};

export const GotoGeffenDungeon3FPath1Fn = () => {
    return {
        type: 'GotoGeffenDungeon3FPath1Fn',
    };
};
export const GotoGeffenDungeon3FPath2Fn = () => {
    return {
        type: 'GotoGeffenDungeon3FPath2Fn',
    };
};
export const GotoGeffenDungeon3FPath3Fn = () => {
    return {
        type: 'GotoGeffenDungeon3FPath3Fn',
    };
};
export const GotoGeffenDungeon3FPath4Fn = () => {
    return {
        type: 'GotoGeffenDungeon3FPath4Fn',
    };
};
export const GotoGeffenDungeon3FPath5HiddenFn = () => {
    return {
        type: 'GotoGeffenDungeon3FPath5HiddenFn',
    };
};
export const GotoGeffenDungeon4FPath1Fn = () => {
    return {
        type: 'GotoGeffenDungeon4FPath1Fn',
    };
};


export const ReturnGeffenDungeonPathFn = () => {
    return {
        type: 'ReturnGeffenDungeonPathFn',
    };
};

//Challenge Tower
export const GotoChallengeTowerPath1Fn = () => {
    return {
        type: 'GotoChallengeTowerPath1Fn',
    };
};
export const GotoChallengeTowerPath2Fn = () => {
    return {
        type: 'GotoChallengeTowerPath2Fn',
    };
};
export const GotoChallengeTowerPath3Fn = () => {
    return {
        type: 'GotoChallengeTowerPath3Fn',
    };
};
export const ReturnChallengeTowerPathFn = () => {
    return {
        type: 'ReturnChallengeTowerPathFn',
    };
};

//GEFFEN DUNGEON BOSS & NPC
export const BossDoppelgangerDefeatFn = () => {
    return {
        type: 'BossDoppelgangerDefeatFn',
    };
};
export const GeffenDungeon1FSelfNPCFn = () => {
    return {
        type: 'GeffenDungeon1FSelfNPCFn',
    };
};
export const GeffenDungeon1FNiaNPCFn = () => {
    return {
        type: 'GeffenDungeon1FNiaNPCFn',
    };
};
export const GeffenDungeon2FSelfNPCFn = () => {
    return {
        type: 'GeffenDungeon2FSelfNPCFn',
    };
};

export const GeffenDungeon2FRekiNPCFn = () => {
    return {
        type: 'GeffenDungeon2FRekiNPCFn',
    };
};
export const GeffenDungeon2FSelfNPCHiddenFn = () => {
    return {
        type: 'GeffenDungeon2FSelfNPCHiddenFn',
    };
};



export const GeffenDungeon3FNiaNPCFn = () => {
    return {
        type: 'GeffenDungeon3FNiaNPCFn',
    };
};




export const ResetGeffenDungeonNPCFn = () => {
    return {
        type: 'ResetGeffenDungeonNPCFn',
    };
};

//Final Boss
export const FinalBossPathFn = () => {
    return {
        type: 'FinalBossPathFn',
    };
};

export const BossBaphometDefeatFn = () => {
    return {
        type: 'BossBaphometDefeatFn',
    };
};


//Audio Interaction
export const AudioVolumeBGMSaverFn = (Volume,map,Place,Threshold) => {
    return {
        type: 'AudioVolumeBGMSaverFn',
        Volume: Volume,
        Map: map,
        Place: Place,
        Threshold: Threshold
    };
};
export const AudioVolumeSoundEffectSaverFn = (Volume) => {
    return {
        type: 'AudioVolumeSoundEffectSaverFn',
        Volume: Volume,
    };
};



//Battle Loading Screen
export const BattleLoadingScreenFn = () => {
    return {
        type: 'BattleLoadingScreenFn',
    };
};
//Battle Reset Fn
export const ResetAllBattleMapFn = (Turn) => {
    return {
        type: 'ResetAllBattleMapFn',
        Turn: Turn
    };
};
//User Battle Fn
export const UserBattleStatsFn = () => {
    return {
        type: 'UserBattleStatsFn',
    };
};
//Emeny Battle Fn
export const EnemyBattleStatsFn = () => {
    return {
        type: 'EnemyBattleStatsFn',
    };
};

export const TrainingLoadingScreenFn = () => {
    return {
        type: 'TrainingLoadingScreenFn',
    };
};
export const TrainingLoadingScreenDelayFn = () => {
    return {
        type: 'TrainingLoadingScreenDelayFn',
    };
};

export const ResetGameFn = () => {
    return {
        type: 'ResetGameFn',
    };
};