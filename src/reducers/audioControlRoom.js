const Fn = {
    AudioVolumeBGMFixed: 0.1,
    AudioChangeMapVolume: 0.00125,
    AudioChangePlaceVolume: 0.00225,
    AudioChangePlaceThreshold: 0.01,
    AudioVolumeSoundEffectFixed: 0.5
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
        case 'AudioVolumeSoundEffectSaverFn':
            return {
                ...state,
                AudioVolumeSoundEffectFixed: state.AudioVolumeSoundEffectFixed + action.Volume,
                }
        default:
            return {
                ...state,
                }
    }
}
export default audioControlRoomReducer;