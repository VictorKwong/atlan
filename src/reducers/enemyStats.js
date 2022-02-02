
const Fn = {
    level: 1,
    maxHealth: 100,
    currentHealth: 100,
    attack: 5,
    power: 2,
    defence: 5,
    speed: 1,
    hitRate: 0.7,
    dodgeRate: 0.05,
    critRate: 0.03
}

const enemyStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'testnana':
            return {
                level: state.level,
                maxHealth: state.maxHealth,
                currentHealth: state.currentHealth,
                attack: state.attack++,
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
export default enemyStatsReducer;