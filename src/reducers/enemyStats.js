

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
        speed: 1,
        hitRate: 0.7,
        dodgeRate: 0.05,
        critRate: 0.03
    },
    {
        name: 'Lunatic',
        level: 2,
        maxHealth: 200,
        currentHealth: 200,
        attack: 10,
        power: 3,
        defence: 7,
        speed: 2,
        hitRate: 0.8,
        dodgeRate: 0.05,
        critRate: 0.03
    },
    

]

const enemyStatsReducer = (state = Fn, action) => {
    switch(action.type){
        case 'testnana':
            return [{
                ...state[0],
                currentHealth: state[0].currentHealth - 20
            },
            {
                ...state[1]
            }]
            
        default:
            return state;
    }
}
export default enemyStatsReducer;