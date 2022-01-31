
const userCurrentHealthReducer = (state = 100, action) => {
        switch(action.type){
            case 'usingLifePotion':
                return state + action.payload;
            case 'userDecrementHealth':
                return state - action.payload;
            default:
                return state;
        }
}
export default userCurrentHealthReducer;