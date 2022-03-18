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



export const UserAttackEnemyFn = (Damage,Target) => {
    return {
        type: 'UserAttackEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
    };
};

export const UserSkillBashEnemyFn = (Damage,Target) => {
    return {
        type: 'UserSkillBashEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
    };
};

export const UserSkillBashMissedFn = () => {
    return {
        type: 'UserSkillBashMissedFn',
    };
};

export const UserSkillMagnumBreakEnemyFn = (Damage,Target) => {
    return {
        type: 'UserSkillMagnumBreakEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
    };
};
export const UserSkillMagnumBreakMissedFn = () => {
    return {
        type: 'UserSkillMagnumBreakMissedFn',
    };
};
export const UserSkillBowlingBashEnemyFn = (Damage,Target) => {
    return {
        type: 'UserSkillBowlingBashEnemyFn',
        DamageCalculation: Damage,
        Target: Target,
    };
};
export const UserSkillBowlingBashMissedFn = () => {
    return {
        type: 'UserSkillBowlingBashMissedFn',
    };
};
export const UserSkillQuickenFn = () => {
    return {
        type: 'UserSkillQuickenFn',
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
export const UserDoubleAttackFn = (learn) => {
    return {
        type: 'UserDoubleAttackFn',
        learn:learn
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



export const GotoPoringIslandFn = () => {
    return {
        type: 'GotoPoringIslandFn',
    };
};
export const GotoAntHellFn = () => {
    return {
        type: 'GotoAntHellFn',
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
//MISSION
export const SpiritOfEclipseFn = (Zeny,Item) => {
    return {
        type: 'SpiritOfEclipseFn',
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
        Vit:vit
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
export const BonusAGIPointsFn = (BonusAgi) => {
    return {
        type: 'BonusAGIPointsFn',
        BonusAgi: BonusAgi
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
export const BonusDEXPointsFn = (BonusStr,BonusDex,BonusLuk) => {
    return {
        type: 'BonusDEXPointsFn',
        BonusStr: BonusStr,
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
export const AcceptClearPoringQuestFn = () => {
    return {
        type: 'AcceptClearPoringQuestFn'
    };
};
export const ReturnClearPoringQuestFn = () => {
    return {
        type: 'ReturnClearPoringQuestFn'
    };
};
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

export const ChestBoss1VisitRepeatFn = () => {
    return {
        type: 'ChestBoss1VisitRepeatFn',
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
//PayonCave Path
export const GotoPayonCave1FPath1Fn = () => {
    return {
        type: 'GotoPayonCave1FPath1Fn',
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

