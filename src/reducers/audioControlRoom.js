const Fn = {
    AudioVolumeBGMFixed: 0.1,
    AudioChangeMapVolume: 0.00125,
    AudioChangePlaceVolume: 0.00225,
    AudioChangePlaceThreshold: 0.01
}

const audioControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'AudioVolumeBGMSaverFn':
            return {
                ...state,
                AudioVolumeBGMFixed: state.AudioVolumeBGMFixed + action.Volume,
                AudioChangeMapVolume: state.AudioChangeMapVolume + action.Map,
                AudioChangePlaceVolume: state.AudioChangePlaceVolume + action.Place,
                AudioChangePlaceThreshold: state.AudioChangePlaceThreshold + action.Threshold
                }
        default:
            return {
                ...state,
                }
    }
}
export default audioControlRoomReducer;