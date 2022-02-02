
const Fn = {
    gaga: 24,
    rara: 2
}

const userStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'testgaga':
            return {gaga: ++state.gaga};
        default:
            return state;
    }
}
export default userStatsReducer;