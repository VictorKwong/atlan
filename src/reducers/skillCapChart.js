const Fn = {
    //Level
    Bash: 5,
    Mammonite: 10,
    Kodoku: 13,
    MagnumBreak: 20,
    Quicken: 35,
    BowlingBash: 70,
    //Damage Amplifier
    BashDamage: 2.5,
}


const skillCapChartReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default skillCapChartReducer;