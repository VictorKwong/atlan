const Fn = [
    //Poring
    {
        name: 'Poring',
        level: 1,
        maxHealth: 100,
        currentHealth: 100,
        attack: 50,
        power: 2,
        defence: 5,
        defencebuffer: 10, // 5+5
        speed: 5,
        hitRate: 0.7,
        dodgeRate: 0.05,
        critRate: 0.03,
        Experience: 99999999,
        Zeny: (30 + Math.floor(Math.random() * 14)),
        enemyClockDefend: false,
    },
    {
        name: 'Lunatic',
        level: 2,
        maxHealth: 200,
        currentHealth: 200,
        attack: 70,
        power: 3,
        defence: 7,
        defencebuffer: 12, //7+5
        speed: 7,
        hitRate: 0.8,
        dodgeRate: 0.05,
        critRate: 0.03,
        Experience: 1,
        Zeny: (40 + Math.floor(Math.random() * 14)),
        enemyClockDefend: false,
    },
    {
        name: 'Rocker',
        level: 3,
        maxHealth: 300,
        currentHealth: 300,
        attack: 80,
        power: 4,
        defence: 9,
        defencebuffer: 14, //7+5
        speed: 5,
        hitRate: 0.8,
        dodgeRate: 0.05,
        critRate: 0.03,
        Experience: 200,
        Zeny: (60 + Math.floor(Math.random() * 14)),
        enemyClockDefend: false,
    },
]

const enemyStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'UserAttackEnemyFn':
            return [{
                ...state[0], //20
                currentHealth: state[0].currentHealth - action.DamageCalculation
            },
            {
                ...state[1],
                currentHealth: state[1].currentHealth - action.DamageCalculation
            },
            {
                ...state[2],
                currentHealth: state[2].currentHealth - action.DamageCalculation
            }]
        case 'UserAttackBlockEnemyFn':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - action.DamageCalculation
            },
            {
                ...state[1],
                currentHealth: state[1].currentHealth - action.DamageCalculation
            },
            {
                ...state[2],
                currentHealth: state[2].currentHealth - action.DamageCalculation
            }]
        case 'UserSkillBashEnemyFn':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - action.DamageCalculation
            },
            {
                ...state[1],
                currentHealth: state[1].currentHealth - action.DamageCalculation
            },
            {
                ...state[2],
                currentHealth: state[2].currentHealth - action.DamageCalculation
            }]
        case 'UserSkillBashBlockEnemyFn':
        return [{
            ...state[0],
            currentHealth: state[0].currentHealth - action.DamageCalculation
        },
        {
            ...state[1],
            currentHealth: state[1].currentHealth - action.DamageCalculation
        },
        {
            ...state[2],
            currentHealth: state[2].currentHealth - action.DamageCalculation
        }]
        
        case 'UserSkillMagnumBreakEnemyFn':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - action.DamageCalculation
            },
            {
                ...state[1],
                currentHealth: state[1].currentHealth - action.DamageCalculation
            },
            {
                ...state[2],
                currentHealth: state[2].currentHealth - action.DamageCalculation
            }]
        case 'UserSkillMagnumBreakBlockEnemyFn':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - action.DamageCalculation
            },
            {
                ...state[1],
                currentHealth: state[1].currentHealth - action.DamageCalculation
            },
            {
                ...state[2],
                currentHealth: state[2].currentHealth - action.DamageCalculation
            }]
        case 'UserSkillBowlingBashEnemyFn':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - action.DamageCalculation
            },
            {
                ...state[1],
                currentHealth: state[1].currentHealth - action.DamageCalculation
            },
            {
                ...state[2],
                currentHealth: state[2].currentHealth - action.DamageCalculation
            }]
            
        


        case 'ResetEnemyCurrentHealthFn':
            return [{
                ...state[0],
                currentHealth: 100,
            },
            {
                ...state[1],
                currentHealth: 200,
            },
            {
                ...state[2],
                currentHealth: 300,
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
            },
            {
                ...state[2],
                enemyClockDefend: !state[2].enemyClockDefend,
            }]
        default:
            return state;
    }
}
export default enemyStatsReducer;