const Fn = {
    //Mini Talk
    Fountain: false,
    KafraEmployee: false,
    QuestBoard: false,
    SoldierGuard1: false,
    SoldierGuard2: false,
    PronteraKing: false,
    RoyalGuard1: false,
    RoyalGuard2: false,
    PronteraAssistant: false,
    //Shop Talk
    WeaponDealer: false,
    ArmorDealer: false,
    HeadGearDealer: false,
    ToolDealer: false,
    //Shop Trade Fn
    DealerBuy: false,
    DealerSell: false,
    DealerBuySuccess: false,
    DealerBuyFailure: false,
    DealerSellSuccess: false,
    DealerSellFailure: false,
    //Training Rate Fn
    TrainingSuccess: false,
    TrainingFailure: false,
    TrainingMaterial: "",
    //Heal & Rest Fn
    KafraEmployeeHealState: false,
    ResetStatsPoint: false,
    //PoringIsland Dungeon
    Chest1: false,
    Chest1VisitRepeat: false,
    Chest2: false,
    Chest2VisitRepeat: false,
    ChestBoss1: false,
    ChestBoss1VisitRepeat: false,
    PoringIslandBridgeNPC: false,
    BossEclipseDefeat: false,
}

const npcControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'TalktoKafraEmployeeFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: true,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                KafraEmployeeHealState: false,
                ResetStatsPoint: false,

            }
        case 'TalktoFountainFn':
            return {
                ...state,
                Fountain: true,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                ResetStatsPoint: false,
            }
        case 'TalktoQuestBoardFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: true,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                ResetStatsPoint: false,
            }
        case 'TalktoSoldierGuard1Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: true,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoSoldierGuard2Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: true,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoPronteraKingFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: true,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoRoyalGuard1Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: true,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoRoyalGuard2Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: true,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoPronteraAssistantFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: true,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'ResetTalktoFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                ResetStatsPoint: false,
            }
        case 'TalktoWeaponDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: true,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoArmorDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: true,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoHeadGearDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: true,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'TalktoToolDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
                ToolDealer: true,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
            }
        case 'DealerBuyFn':
            return {
                ...state,
                DealerBuy: true,
                DealerSell: false,
                DealerBuySuccess: false,
                DealerBuyFailure: false,
                DealerSellSuccess: false,
                DealerSellFailure: false,
            }
        case 'DealerSellFn':
            return {
                ...state,
                DealerBuy: false,
                DealerSell: true,
                DealerBuySuccess: false,
                DealerBuyFailure: false,
                DealerSellSuccess: false,
                DealerSellFailure: false,
            }
        //Inside BuySell Fn
        case 'DealerBuySuccessFn':
            return {
                ...state,
                DealerBuySuccess: true,
                DealerBuyFailure: false,
            }
        case 'DealerBuyFailureFn':
            return {
                ...state,
                DealerBuySuccess: false,
                DealerBuyFailure: true,
            }
        case 'DealerSellSuccessFn':
            return {
                ...state,
                DealerSellSuccess: true,
                DealerSellFailure: false,
            }
        case 'DealerSellFailureFn':
            return {
                ...state,
                DealerSellSuccess: false,
                DealerSellFailure: true,
            }
        //HEAL
        case 'KafraEmployeeHealStateFn':
            return{
                ...state,
                KafraEmployeeHealState: true,
            }
        //RESET STATS POINT
        case 'ResetStatsPointFn':
            return{
                ...state,
                ResetStatsPoint: true,
            }
         
        case 'ResetDealerBuySellHealFn':
            return {
                ...state,
                DealerBuy: false,
                DealerSell: false,
                DealerBuySuccess: false,
                DealerBuyFailure: false,
                DealerSellSuccess: false,
                DealerSellFailure: false,
                KafraEmployeeHealState: false,
                ResetStatsPoint: false,
            }
        // Training Fn
        case 'TrainingSuccesFn':
            return {
                ...state,
                TrainingSuccess: true,
                TrainingFailure: false,
                TrainingMaterial: action.name
            }
        case 'TrainingFailureFn':
            return {
                ...state,
                TrainingSuccess: false,
                TrainingFailure: true,
                TrainingMaterial: action.name
            }
        case 'ResetTrainingRateFn':
            return {
                ...state,
                TrainingSuccess: false,
                TrainingFailure: false,
            }
        // DUNGEON
        case 'OpenChest1Fn':
            return {
                ...state,
                Chest1: true
            }
        case 'Chest1VisitRepeatFn':
            return {
                ...state,
                Chest1VisitRepeat: true
            }
        case 'OpenChest2Fn':
            return {
                ...state,
                Chest2: true
            }
        case 'Chest2VisitRepeatFn':
            return {
                ...state,
                Chest2VisitRepeat: true
            }
        case 'OpenChestBoss1Fn':
            return {
                ...state,
                ChestBoss1: true
            }
        case 'ChestBoss1VisitRepeatFn':
            return {
                ...state,
                ChestBoss1VisitRepeat: true
            }
        case 'BossEclipseDefeatFn':
            return {
                ...state,
                BossEclipseDefeat: true
            }
        case 'PoringIslandBridgeNPCFn':
            return {
                ...state,
                PoringIslandBridgeNPC: true,
            }
        case 'ResetPoringIslandNPCFn':
            return {
                ...state,
                PoringIslandBridgeNPC: false,
            }
        default:
            return state;
    }
}
export default npcControlRoomReducer;