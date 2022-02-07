const Fn = {
    AudioCurrentTime: 0
}

const audioControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'AudioCurrentTimeSaverFn':
            return {
                ...state,
                AudioCurrentTime: action.currentTime,
                }
        default:
            return {
                ...state,
                }
    }
}
export default audioControlRoomReducer;