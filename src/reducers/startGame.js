
const startGameReducer = (state = false, action) => {
    switch(action.type){
        case 'startGameFn':
            return !state;

        default:
            return state;
    }
}
export default startGameReducer;