const Fn = {
    KafraEmployee: false,
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
        default:
            return state;
    }
}
export default npcControlRoomReducer;