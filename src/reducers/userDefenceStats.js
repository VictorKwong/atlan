const userDefenceStatsReducer = (state = 15, action) => {
    switch(action.type){
        case 'userArmorIncrement':
            return state + action.payload;
        default:
            return state;
    }
}
export default userDefenceStatsReducer;