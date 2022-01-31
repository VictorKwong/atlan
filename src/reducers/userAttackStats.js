const userAttackStatsReducer = (state = 20, action) => {
    switch(action.type){
        case 'userAtkIncrement':
            return state + action.payload;
        default:
            return state;
    }
}
export default userAttackStatsReducer;