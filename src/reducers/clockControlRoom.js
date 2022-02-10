const Fn = {
    Rerender: false
}

const clockControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'TickingClockFn':
            return {
                    Rerender: !state.Rerender
                }
        default:
            return {
                ...state,
                }
    }
}
export default clockControlRoomReducer;