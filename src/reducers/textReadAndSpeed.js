
const Fn = {
    count: 0,
    speed: 30,
}

const textReadAndSpeedReducer = (state = Fn, action) => {
    switch(action.type){
        case 'typeWritterEffectFn':
            return {
                count: (state.count + 1),
                speed: state.speed
            }
        case 'resetTypeWritterEffectFn':
            return {
                count: state.count,
                speed: state.speed
            }
        default:
            return state;
    }
}
export default textReadAndSpeedReducer;