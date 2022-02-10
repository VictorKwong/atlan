export const EnemyAttackUserFn = (Crit) => {
    return {
        type: 'EnemyAttackUserFn',
        CriticalAttack: Crit
    };
};

export const EnemyAttackBlockUserFn = (Crit) => {
    return {
        type: 'EnemyAttackBlockUserFn',
        CriticalAttack: Crit
    };
};
export const UserAttackEnemyFn = (Crit) => {
    return {
        type: 'UserAttackEnemyFn',
        CriticalAttack: Crit,
        TestCalcuation: (Crit * 50)
    };
};
export const UserAttackBlockEnemyFn = (Crit) => {
    return {
        type: 'UserAttackBlockEnemyFn',
        CritialAttack: Crit,
        TestCalcuation: (Crit * 50)
    };
};
export const UserSkillBashEnemyFn = (Crit) => {
    return {
        type: 'UserSkillBashEnemyFn',
        CriticalAttack: Crit
    };
};
export const UserSkillBashBlockEnemyFn = (Crit) => {
    return {
        type: 'UserSkillBashBlockEnemyFn',
        CriticalAttack: Crit
    };
};
export const UserSkillBashMissedFn = () => {
    return {
        type: 'UserSkillBashMissedFn',
    };
};

export const UserSkillMagnumBreakEnemyFn = (Crit) => {
    return {
        type: 'UserSkillMagnumBreakEnemyFn',
        CriticalAttack: Crit
    };
};
export const UserSkillMagnumBreakBlockEnemyFn = (Crit) => {
    return {
        type: 'UserSkillMagnumBreakBlockEnemyFn',
        CriticalAttack: Crit
    };
};
export const UserSkillMagnumBreakMissedFn = () => {
    return {
        type: 'UserSkillMagnumBreakMissedFn',
    };
};
export const UserLevelUpFn = () => {
    return {
        type: 'UserLevelUpFn',
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
export const ResetTalktoKafraEmployeeFn = () => {
    return {
        type: 'ResetTalktoKafraEmployeeFn'
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

export const ResetToolDealerBuySellFn = () => {
    return {
        type: 'ResetToolDealerBuySellFn'
    };
};
export const BuyRedPotionFn = () => {
    return {
        type: 'BuyRedPotionFn'
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

//ITEMS

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

//Audio Interaction
export const AudioCurrentTimeSaverFn = (currentTime) => {
    return {
        type: 'AudioCurrentTimeSaverFn',
        currentTime: currentTime
    };
};

