const Fn = {
    KafraEmployee: false,
    ToolDealerBuy: false,
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
            }
        case 'ResetToolDealerBuyFn':
            return {
                ...state,
                ToolDealerBuy: false,
            }
        
        default:
            return state;
    }
}
export default npcControlRoomReducer;