const AudioRoomReducer = (state = false, action) => {
    switch(action.type){
        case 'switchOnAudio':
            return !state;
        case 'switchOffAudio':
            return false;
        default:
            return state;
    }
};

export default AudioRoomReducer;