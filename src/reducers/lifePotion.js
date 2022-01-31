const lifePotionReducer = (state = 0, action) => {
    switch(action.type){
        case 'increment':
        case 'buyPotion':
            return state + action.payload;
        case 'decrement':
        case 'usingLifePotion':
        case 'sellPotion':
            return state - 1;
        default:
            return state;
    }
}
export default lifePotionReducer;