const Fn = [
    //1.Poring
    //2.Lunatic
    //3.Rocker
    //4.Ambernite
    //5.Ghostring (Secret)
    //6.Eclipse (Boss)
    //PayonCave
    //7.Zombie
    //8.Skeleton
    //9.SoldierSkeleton
    //10.ArcherSkeleton
    //11.Munak
    //12.Bongun
    //13.Sohee
    //14.Whisper
    //15.GiantWhisper
    //16.Wolyafa
    {
        name: 'Poring',
        level: 1,
        maxHealth: 2000,
        currentHealth: 2000,
        attack: 50,
        defence: 5,
        defencebuffer: 10, // 5+5
        speed: 5,
        hitRate: 0.7,
        dodgeRate: 0.05,
        critRate: 0.03, //0.03
        critResist: 0.05,
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
        defence: 7,
        defencebuffer: 12, //7+5
        speed: 7,
        hitRate: 0.8,
        dodgeRate: 0.05,
        critRate: 0.03,
        critResist: 0.05,
        Experience: 200,
        Zeny: (40 + Math.floor(Math.random() * 14)),
        enemyClockDefend: false,
    },
    {
        name: 'Rocker',
        level: 3,
        maxHealth: 300,
        currentHealth: 300,
        attack: 80,
        defence: 9,
        defencebuffer: 14, //7+5
        speed: 5,
        hitRate: 0.8,
        dodgeRate: 0.05,
        critRate: 0.03,
        critResist: 0.05,
        Experience: 200,
        Zeny: (60 + Math.floor(Math.random() * 14)),
        enemyClockDefend: false,
    },
    {
        name: 'Ambernite',
        level: 4,
        maxHealth: 400,
        currentHealth: 400,
        attack: 130,
        defence: 22,
        defencebuffer: 28, //+6
        speed: 3,
        hitRate: 0.8,
        dodgeRate: 0.01,
        critRate: 0.03,
        critResist: 0.05,
        Experience: 300,
        Zeny: (70 + Math.floor(Math.random() * 22)),
        enemyClockDefend: false,
    },
    {
        name: 'Ghostring',
        level: 30,
        maxHealth: 2000, //4400
        currentHealth: 2000,
        attack: 400,
        defence: 50,
        defencebuffer: 60, //+6
        speed: 10,
        hitRate: 0.85,
        dodgeRate: 0.3,
        critRate: 0.03,
        critResist: 0.05,
        Experience: 900,
        Zeny: (4000 + Math.floor(Math.random() * 100)),
        enemyClockDefend: false,
    },
    {
        name: 'Eclipse',
        level: 10,
        maxHealth: 1, //2000
        currentHealth: 1,
        attack: 100,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    //PayonCave
    {
        name: 'Zombie',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'Skeleton',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'SoldierSkeleton',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'ArcherSkeleton',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'Munak',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'Bongun',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'Sohee',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'Whisper',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'Giant Whisper',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
    {
        name: 'Wolyafa',
        level: 10,
        maxHealth: 1000, //2000
        currentHealth: 1000,
        attack: 60,
        defence: 19,
        defencebuffer: 25, //+6
        speed: 7,
        hitRate: 0.9,
        dodgeRate: 0.10,
        critRate: 0.05,
        critResist: 0.05,
        Experience: 500,
        Zeny: (2000 + Math.floor(Math.random() * 50)),
        enemyClockDefend: false,
    },
]

const enemyStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'UserAttackEnemyFn':
            // If i is the monster, update it's current health
            return state.map((content, i) => i === action.Target ? {...content, currentHealth: state[i].currentHealth - action.DamageCalculation} : content)                  
            // [{
            //     ...state[0], //20
            //     currentHealth: state[0].currentHealth - action.DamageCalculation
            // },
            // {
            //     ...state[1],
            //     currentHealth: state[1].currentHealth - action.DamageCalculation
            // },
            // {
            //     ...state[2],
            //     currentHealth: state[2].currentHealth - action.DamageCalculation
            // }]
        case 'UserSkillBashEnemyFn':
            // If i is the monster, update it's current health
            return state.map((content, i) => i === action.Target ? {...content, currentHealth: state[i].currentHealth - action.DamageCalculation} : content)  
            // [{
            //     ...state[0],
            //     currentHealth: state[0].currentHealth - action.DamageCalculation
            // },
            // {
            //     ...state[1],
            //     currentHealth: state[1].currentHealth - action.DamageCalculation
            // },
            // {
            //     ...state[2],
            //     currentHealth: state[2].currentHealth - action.DamageCalculation
            // }]
        case 'UserSkillMagnumBreakEnemyFn':
            // If i is the monster, update it's current health
            return state.map((content, i) => i === action.Target ? {...content, currentHealth: state[i].currentHealth - action.DamageCalculation} : content) 
        case 'UserSkillBowlingBashEnemyFn':
            // If i is the monster, update it's current health
            return state.map((content, i) => i === action.Target ? {...content, currentHealth: state[i].currentHealth - action.DamageCalculation} : content) 
        case 'UserLifeStealEnemyFn':
        case 'UserSkillLifeStealEnemyFn':
            return state.map((content, i) => i === action.Target ? {...content, currentHealth: state[i].currentHealth - action.DamageCalculation} : content)
        case 'EnemyAttackReflectUserFn':
            return state.map((content, i) => i === action.Target ? {...content, currentHealth: state[i].currentHealth - action.Reflecting} : content)
        case 'ResetEnemyCurrentHealthFn':
            // If i is the monster, update it's current health
            return state.map((content, i) => true ? {...content, currentHealth: state[i].maxHealth} : content) 
            // return [{
            //     ...state[0],
            //     currentHealth: 100,
            // },
            // {
            //     ...state[1],
            //     currentHealth: 200,
            // },
            // {
            //     ...state[2],
            //     currentHealth: 300,
            // }]
        case 'enemyClockDefendFn':
            //Rerender Fn
            // If i is the monster, update it's current health
            return state.map((content, i) => i === action.Target ? {...content, enemyClockDefend: !state[i].enemyClockDefend } : content) 
            // return [{
            //     ...state[0],
            //     enemyClockDefend: !state[0].enemyClockDefend,
            // },
            // {
            //     ...state[1],
            //     enemyClockDefend: !state[1].enemyClockDefend,
            // },
            // {
            //     ...state[2],
            //     enemyClockDefend: !state[2].enemyClockDefend,
            // }]
        default:
            return state;
    }
}
export default enemyStatsReducer;