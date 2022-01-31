
const enemyCurrentHealthReducer = (state = 100, action) => {
    switch(action.type){
        case 'userAttackEnemyFn':
            console.log(action.userUpgradeAttack);
            return state - action.userUpgradeAttack;
        default:
            return state;
    }
}
export default enemyCurrentHealthReducer;