const Fn = {
    KafraEmployee: false,
    ToolDealerBuy: false,
    ToolDealerSell: false,
}

const npcControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'TalktoKafraEmployeeFn':
            return {
                ...state,
                KafraEmployee: true,
            }
        case 'ResetTalktoKafraEmployeeFn':
            return {
                ...state,
                KafraEmployee: false,
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