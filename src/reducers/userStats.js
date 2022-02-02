
const Fn = {
    level: 1,
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
                level: state.level,
                maxHealth: state.maxHealth,
                currentHealth: state.currentHealth,
                attack: ++state.attack,
                power: state.power,
                defence: state.defence,
                speed: state.speed,
                hitRate: state.hitRate,
                dodgeRate: state.dodgeRate,
                critRate: state.critRate
            }
        case 'enemyAttackUserFn':
            return {
                level: state.level,
                maxHealth: state.maxHealth,
                currentHealth: state.currentHealth - (action.payloadeAttack)/(action.payloaduDefence),
                attack: state.attack,
                power: state.power,
                defence: state.defence,
                speed: state.speed,
                hitRate: state.hitRate,
                dodgeRate: state.dodgeRate,
                critRate: state.critRate
            }

        default:
            return state;
    }
}
export default userStatsReducer;