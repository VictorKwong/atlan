const Fn = {
    //Mini Talk
    Fountain: false,
    KafraEmployee: false,
    QuestBoard: false,
    //Shop Talk
    WeaponDealer: false,
    ArmorDealer: false,
    HeadGearDealer: false,
    DealerBuy: false,
    DealerSell: false,
    DealerBuySuccess: false,
    DealerBuyFailure: false,
    DealerSellSuccess: false,
    DealerSellFailure: false,
}

const npcControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'TalktoKafraEmployeeFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: true,
                QuestBoard: false,

            }
        case 'TalktoFountainFn':
            return {
                ...state,
                Fountain: true,
                KafraEmployee: false,
                QuestBoard: false,
            }
        case 'TalktoQuestBoardFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: true,
            }
        case 'ResetTalktoFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: false,
            }
        case 'TalktoWeaponDealerFn':
            return {
                ...state,
                WeaponDealer: true,
                ArmorDealer: false,
                HeadGearDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case 'TalktoArmorDealerFn':
            return {
                ...state,
                WeaponDealer: false,
                ArmorDealer: true,
                HeadGearDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case 'TalktoHeadGearDealerFn':
            return {
                ...state,
                WeaponDealer: false,
                ArmorDealer: false,
                HeadGearDealer: true,
                DealerBuy: false,
                DealerSell: false,
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
        case 'ResetDealerBuySellFn':
            return {
                ...state,
                DealerBuy: false,
                DealerSell: false,
                DealerBuySuccess: false,
                DealerBuyFailure: false,
                DealerSellSuccess: false,
                DealerSellFailure: false,
            }
        
        default:
            return state;
    }
}
export default npcControlRoomReducer;