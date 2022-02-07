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
        case 'ToolDealerBuyFn':
            return {
                ...state,
                ToolDealerBuy: true,
                ToolDealerSell: false,
            }
        case 'ToolDealerSellFn':
            return {
                ...state,
                ToolDealerBuy: false,
                ToolDealerSell: true,
            }
        case 'ResetToolDealerBuySellFn':
            return {
                ...state,
                ToolDealerBuy: false,
                ToolDealerSell: false,
            }
        
        default:
            return state;
    }
}
export default npcControlRoomReducer;