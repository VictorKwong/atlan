
const Fn = {
    level: 1,
    Experience: 0,
    maxHealth: 100,
    currentHealth: 100,
    attack: 25,
    power: 10,
    defence: 18,
    speed: 10,
    hitRate: 0.8,
    dodgeRate: 0.1,
    critRate: 0.05
}

const userStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'testgaga':
            return {
                ...state,
                attack: ++state.attack,
            }
        case 'enemyAttackUserFn':
            return {
                ...state,
                currentHealth: state.currentHealth - (action.payloadeAttack)/(action.payloaduDefence),
            }
        case 'testwin':
            return{
                ...state,
                Experience: state.Experience + 10
            }
        default:
            return state;
    }
}
export default userStatsReducer;