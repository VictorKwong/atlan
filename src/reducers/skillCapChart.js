const Fn = {
    //Level learning
    Bash: 5,
    Mammonite: 10,
    Kodoku: 13,
    MagnumBreak: 20,
    HeadCrush: 27,
    Quicken: 35,
    VitalStrike: 40,
    BowlingBash: 70,
    //Skill Level
    BashSkillLevel: 1,
    MammoniteSkillLevel: 1,
    KodokuSkillLevel: 1,
    MagnumBreakSkillLevel: 1,
    HeadCrushSkillLevel: 1,
    QuickenSkillLevel: 1,
    VitalStrikeSkillLevel: 1,
    BowlingBashSkillLevel: 1,
    //Damage Amplifier
    BashDamage: 2.5,
    MammoniteDamage: 0.8,
    MagnumBreakDamage: 3.5,
    HeadCrushDamage:2.5,
    BowlingBashDamage: 5,
    //Crit
    CritDamage: 1.5,
    //SP Usage
    SPFirstAid: 30,
    SPBash: 40,
    SPMammonite: 50,
    SPKodoku: 80,
    SPMagnumBreak: 100,
    SPHeadCrush: 100,
    SPQuicken: 180,
    SPVitalStrike: 100,
    SPBowlingBash: 250,


}


const skillCapChartReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default skillCapChartReducer;