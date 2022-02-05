
const userGoldReducer = (state = 500, action) => {
    switch(action.type){
        case 'buyPotion':
            return state - 100;
        case 'sellPotion':
            return state + 100;
        case 'testwin':
            return state + 200;
        default:
            return state;
    }
}
export default userGoldReducer;