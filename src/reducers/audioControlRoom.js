const Fn = {
    AudioVolumeBGM: 0.15,
    AudioVolumeBGMFixed: 0.15
}

const audioControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'AudioVolumeBGMSaverFn':
            return {
                ...state,
                AudioVolumeBGM: state.AudioVolumeBGM + action.Volume,
                AudioVolumeBGMFixed: state.AudioVolumeBGM + action.Volume
                }
        default:
            return {
                ...state,
                }
    }
}
export default audioControlRoomReducer;