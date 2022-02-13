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
export const UserAttackEnemyFn = (Damage) => {
    return {
        type: 'UserAttackEnemyFn',
        DamageCalculation: Damage
    };
};

export const UserAttackBlockEnemyFn = (Damage) => {
    return {
        type: 'UserAttackBlockEnemyFn',
        DamageCalculation: Damage
    };
};
export const UserSkillBashEnemyFn = (Damage) => {
    return {
        type: 'UserSkillBashEnemyFn',
        DamageCalculation: Damage
    };
};
export const UserSkillBashBlockEnemyFn = (Damage) => {
    return {
        type: 'UserSkillBashBlockEnemyFn',
        DamageCalculation: Damage
    };
};
export const UserSkillBashMissedFn = () => {
    return {
        type: 'UserSkillBashMissedFn',
    };
};

export const UserSkillMagnumBreakEnemyFn = (Damage) => {
    return {
        type: 'UserSkillMagnumBreakEnemyFn',
        DamageCalculation: Damage
    };
};
export const UserSkillMagnumBreakBlockEnemyFn = (Damage) => {
    return {
        type: 'UserSkillMagnumBreakBlockEnemyFn',
        DamageCalculation: Damage
    };
};
export const UserSkillMagnumBreakMissedFn = () => {
    return {
        type: 'UserSkillMagnumBreakMissedFn',
    };
};
export const UserLevelUpFn = (Points) => {
    return {
        type: 'UserLevelUpFn',
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

export const GotoWeaponArmorDealerFn = () => {
    return {
        type: 'GotoWeaponArmorDealerFn',
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

export const GotoBattlePoringIslandMapFn = () => {
    return {
        type: 'GotoBattlePoringIslandMapFn',
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
export const UserWeaponImgFn = (WeaponBattleImg,WeaponAttackImg,WeaponDefendImg) => {
    return {
        type: 'UserWeaponImgFn',
        WeaponBattleImg: WeaponBattleImg,
        WeaponAttackImg: WeaponAttackImg,
        WeaponDefendImg: WeaponDefendImg
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
export const ResetTalktoFn = () => {
    return {
        type: 'ResetTalktoFn'
    };
};
export const ResetMyPointsFn = () => {
    return {
        type: 'ResetMyPointsFn'
    };
};


export const KafraEmployeeHealFn = () => {
    return {
        type: 'KafraEmployeeHealFn'
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

export const ResetDealerBuySellFn = () => {
    return {
        type: 'ResetDealerBuySellFn'
    };
};

// ITEM BUY SELL
export const BuyRedPotionFn = () => {
    return {
        type: 'BuyRedPotionFn',
    };
};
export const BuyYellowPotionFn = () => {
    return {
        type: 'BuyYellowPotionFn'
    };
};
export const SellRedPotionFn = () => {
    return {
        type: 'SellRedPotionFn'
    };
};
export const SellYellowPotionFn = () => {
    return {
        type: 'SellYellowPotionFn'
    };
};

//WEAPON BUY SELL
export const BuyKatanaFn = () => {
    return {
        type: 'BuyKatanaFn',
    };
};
export const SellKatanaFn = () => {
    return {
        type: 'SellKatanaFn',
    };
};
export const BuyBastardSwordFn = () => {
    return {
        type: 'BuyBastardSwordFn',
    };
};
export const SellBastardSwordFn = () => {
    return {
        type: 'SellBastardSwordFn',
    };
};
export const BuyGaiaSwordFn = () => {
    return {
        type: 'BuyGaiaSwordFn',
    };
};
export const SellGaiaSwordFn = () => {
    return {
        type: 'SellGaiaSwordFn',
    };
};
export const BuyTwinEdgeofNaghtSiegerFn = () => {
    return {
        type: 'BuyTwinEdgeofNaghtSiegerFn',
    };
};
export const SellTwinEdgeofNaghtSiegerFn = () => {
    return {
        type: 'SellTwinEdgeofNaghtSiegerFn',
    };
};
export const BuyVioletFearFn = () => {
    return {
        type: 'BuyVioletFearFn',
    };
};
export const SellVioletFearFn = () => {
    return {
        type: 'SellVioletFearFn',
    };
};
//ARMOR BUY SELL

export const BuyCottonShirtFn = () => {
    return {
        type: 'BuyCottonShirtFn',
    };
};
export const SellCottonShirtFn = () => {
    return {
        type: 'SellCottonShirtFn',
    };
};
export const BuyAdventureSuitFn = () => {
    return {
        type: 'BuyAdventureSuitFn',
    };
};
export const SellAdventureSuitFn = () => {
    return {
        type: 'SellAdventureSuitFn',
    };
};
export const BuyWoodenMailFn = () => {
    return {
        type: 'BuyWoodenMailFn',
    };
};
export const SellWoodenMailFn = () => {
    return {
        type: 'SellWoodenMailFn',
    };
};
export const BuyCoatFn = () => {
    return {
        type: 'BuyCoatFn',
    };
};
export const SellCoatFn = () => {
    return {
        type: 'SellCoatFn',
    };
};
export const BuyPaddedArmorFn = () => {
    return {
        type: 'BuyPaddedArmorFn',
    };
};
export const SellPaddedArmorFn = () => {
    return {
        type: 'SellPaddedArmorFn',
    };
};
export const BuyChainMailFn = () => {
    return {
        type: 'BuyChainMailFn',
    };
};
export const SellChainMailFn = () => {
    return {
        type: 'SellChainMailFn',
    };
};
export const BuyFullPlateFn = () => {
    return {
        type: 'BuyFullPlateFn',
    };
};
export const SellFullPlateFn = () => {
    return {
        type: 'SellFullPlateFn',
    };
};

//ITEMS USEAGE
export const UseRedPotionFn = () => {
    return {
        type: 'UseRedPotionFn'
    };
};
export const UseYellowPotionFn = () => {
    return {
        type: 'UseYellowPotionFn'
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
export const VITPointsFn = (ReqPoints) => {
    return {
        type: 'VITPointsFn',
        ReqPoints: ReqPoints
    };
};
export const INTPointsFn = (ReqPoints) => {
    return {
        type: 'INTPointsFn',
        ReqPoints: ReqPoints
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
//Audio Interaction
export const AudioCurrentTimeSaverFn = (currentTime) => {
    return {
        type: 'AudioCurrentTimeSaverFn',
        currentTime: currentTime
    };
};

