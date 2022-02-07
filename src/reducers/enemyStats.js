

const Fn = [
    //Poring
    {
        name: 'Poring',
        level: 1,
        maxHealth: 100,
        currentHealth: 100,
        attack: 5,
        power: 2,
        defence: 5,
        defencebuffer: 10, // 5+5
        speed: 5,
        hitRate: 0.7,
        dodgeRate: 0.05,
        critRate: 0.03,
        Experience: 1,
        enemyClockDefend: false,
    },
    {
        name: 'Lunatic',
        level: 2,
        maxHealth: 200,
        currentHealth: 200,
        attack: 10,
        power: 3,
        defence: 7,
        defencebuffer: 12, //7+5
        speed: 7,
        hitRate: 0.8,
        dodgeRate: 0.05,
        critRate: 0.03,
        Experience: 2,
        enemyClockDefend: false,
    },
]

const enemyStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'IfEnemyOnHitFn':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - 20
            },
            {
                ...state[1]
            }]
        case 'UserAttackBlockEnemyFn':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - 10
            },
            {
                ...state[1]
            }]
        case 'ResetEnemyCurrentHealthFn':
            return [{
                ...state[0],
                currentHealth: 100,
            },
            {
                ...state[1],
                currentHealth: 200,
            }]
        case 'enemyClockDefendFn':
            //Rerender Fn
            return [{
                ...state[0],
                enemyClockDefend: !state[0].enemyClockDefend,
            },
            {
                ...state[1],
                enemyClockDefend: !state[1].enemyClockDefend,
            }]
        default:
            return state;
    }
}
export default enemyStatsReducer;