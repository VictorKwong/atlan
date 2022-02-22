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
export const UserSkillBowlingBashEnemyFn = (Damage) => {
    return {
        type: 'UserSkillBowlingBashEnemyFn',
        DamageCalculation: Damage
    };
};
export const UserSkillBowlingBashMissedFn = () => {
    return {
        type: 'UserSkillBowlingBashMissedFn',
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
export const GotoHeadGearEquipmentChoiceFn = () => {
    return {
        type: 'GotoHeadGearEquipmentChoiceFn',
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
export const KafraEmployeeHealStateFn = () => {
    return {
        type: 'KafraEmployeeHealStateFn'
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
export const VITPointsFn = (ReqPoints,vit) => {
    return {
        type: 'VITPointsFn',
        ReqPoints: ReqPoints,
        Vit:vit
    };
};
export const INTPointsFn = (ReqPoints,int) => {
    return {
        type: 'INTPointsFn',
        ReqPoints: ReqPoints,
        Int:int
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
//WIN Etc Items
//PORING
export const WinJellopyFn = () => {
    return {
        type: 'WinJellopyFn'
    };
};
export const WinEmptyBottleFn = () => {
    return {
        type: 'WinEmptyBottleFn'
    };
};
export const WinStickyMucusFn = () => {
    return {
        type: 'WinStickyMucusFn'
    };
};
//LUNATIC
export const WinCloverFn = () => {
    return {
        type: 'WinCloverFn'
    };
};
export const WinFeatherFn = () => {
    return {
        type: 'WinFeatherFn'
    };
};
export const WinGrasshoppersLegFn = () => {
    return {
        type: 'WinGrasshoppersLegFn'
    };
};


//Audio Interaction
export const AudioVolumeBGMSaverFn = (Volume) => {
    return {
        type: 'AudioVolumeBGMSaverFn',
        Volume: Volume,
    };
};

