
const enemyCurrentHealthReducer = (state = 100, action) => {
    switch(action.type){
        
        case 'userAttackEnemyFn':
            console.log(action.userAttackStats);
            return state - action.userAttackStats;
        default:
            return state;
    }
}
export default enemyCurrentHealthReducer;