export const enemyAttackUserFn = (eAttack,uDefence) => {
    return {
        type: 'enemyAttackUserFn',
        payloadeAttack: eAttack,
        payloaduDefence: uDefence
    };
};

export const EnemyAttackBlockUserFn = () => {
    return {
        type: 'EnemyAttackBlockUserFn',
    };
};
export const UserAttackBlockEnemyFn = () => {
    return {
        type: 'UserAttackBlockEnemyFn',
    };
};
export const UserSkillBashEnemyFn = () => {
    return {
        type: 'UserSkillBashEnemyFn',
    };
};
export const UserSkillBashBlockEnemyFn = () => {
    return {
        type: 'UserSkillBashBlockEnemyFn',
    };
};
export const UserSkillMagnumBreakEnemyFn = () => {
    return {
        type: 'UserSkillMagnumBreakEnemyFn',
    };
};
export const UserSkillMagnumBreakBlockEnemyFn = () => {
    return {
        type: 'UserSkillMagnumBreakBlockEnemyFn',
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

export const userAttackEnemyFn = (userAttackStats) => {
        return {
            type: 'userAttackEnemyFn',
            payload: 10,
            userAttackStats: userAttackStats
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
export const ToolDealerBuyFn = () => {
    return {
        type: 'ToolDealerBuyFn'
    };
};
export const ToolDealerSellFn = () => {
    return {
        type: 'ToolDealerSellFn'
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


//Audio Interaction
export const AudioCurrentTimeSaverFn = (currentTime) => {
    return {
        type: 'AudioCurrentTimeSaverFn',
        currentTime: currentTime
    };
};

