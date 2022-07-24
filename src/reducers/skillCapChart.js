const Fn = {
    //Level learning
    Bash: 5,
    Mammonite: 10,
    Kodoku: 13,
    MagnumBreak: 20,
    Quicken: 35,
    BowlingBash: 70,
    //Damage Amplifier
    BashDamage: 2.5,
    MammoniteDamage: 0.8,
    MagnumBreakDamage: 3.5,
    BowlingBashDamage: 5,
}


const skillCapChartReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default skillCapChartReducer;