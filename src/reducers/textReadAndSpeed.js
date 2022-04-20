
const Fn = {
    count: 0,
    speed: 15,
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
        case 'finishStoryLineOneFn':
        case 'finishStoryLineTwoFn':
        case 'finishStoryLineThreeFn':
        case 'finishStoryLineFourFn':
        case 'finishStoryLineFiveFn':
        case 'finishStoryLineSixFn':
        case 'finishStoryLineSevenFn':
            return{
                ...state,
                count: 0
            }
        default:
            return state;
    }
}
export default textReadAndSpeedReducer;