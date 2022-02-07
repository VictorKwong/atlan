
const Fn = {
    level: 1,
    Experience: 0,
    maxHealth: 100,
    currentHealth: 100,
    attack: 25,
    power: 10,
    defence: 18,
    defencebuffer: 28, // 18 + 10
    speed: 10,
    hitRate: 0.8,
    dodgeRate: 0.1,
    critRate: 0.05,
    userClockDefend: false,
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
                currentHealth: state.currentHealth - 20,
                //(action.payloadeAttack)/(action.payloaduDefence)
            }
        case 'EnemyAttackBlockUserFn':
            return {
                ...state,
                currentHealth: state.currentHealth - 10,
                //(action.payloadeAttack)/(action.payloaduDefence)
        }
        case 'WinResultFn':
            return{
                ...state,
                Experience: state.Experience + action.enemyExperience,
            }
        case 'ReturnCheckPointFn':
            return{
                ...state,
                currentHealth: 1,
            }
        case 'KafraEmployeeHealFn':
            return{
                ...state,
                currentHealth: state.maxHealth,
            }
        //Rerender Fn
        case 'userClockDefendFn':
            return {
                ...state,
                userClockDefend: !state.userClockDefend,
            }
        default:
            return state;
    }
}
export default userStatsReducer;