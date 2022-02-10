const Fn = {
    KafraEmployee: false,
    WeaponDealer: false,
    ArmorDealer: false,
    DealerBuy: false,
    DealerSell: false,
}

const npcControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'TalktoKafraEmployeeFn':
            return {
                ...state,
                KafraEmployee: true,
            }
        case 'ResetTalktoFn':
            return {
                ...state,
                KafraEmployee: false,
                WeaponDealer: false,
                ArmorDealer: false
            }
        case 'TalktoWeaponDealerFn':
            return {
                ...state,
                WeaponDealer: true,
                ArmorDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case 'TalktoArmorDealerFn':
            return {
                ...state,
                WeaponDealer: false,
                ArmorDealer: true,
                DealerBuy: false,
                DealerSell: false,
            }
        case 'DealerBuyFn':
            return {
                ...state,
                DealerBuy: true,
                DealerSell: false,
            }
        case 'DealerSellFn':
            return {
                ...state,
                DealerBuy: false,
                DealerSell: true,
            }
        case 'ResetDealerBuySellFn':
            return {
                ...state,
                DealerBuy: false,
                DealerSell: false,
            }
        
        default:
            return state;
    }
}
export default npcControlRoomReducer;