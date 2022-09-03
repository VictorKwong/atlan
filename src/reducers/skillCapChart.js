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
    FirstAidSkillLevel: 1,
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
    //Base flat Damage
    FirstAidFlatHeal: 150,
    BashBaseDamage: 50,
    MammoniteBaseDamage: 30,
    BowlingBashBaseDamage: 200,
    //Special Effect
    BashStunChance: 0.5,
    MammoniteGain: 0.2,
    HeadCrushBleedingChance: 0.7,
    QuickenSpeed: 10,
    VitalStrikeDefenceBreakDown: 0.25,
    //DOT Effect
    KodokuPoisonTurn: 5,
    KodokuPoisonPercent: 0.05,
    HeadCrushBleedingTurn: 4,
    HeadCrushBleedingPercent: 0.02,
    QuickenSpeedTurn: 5,
    VitalStrikeDefenceBreakDownTurn: 8,
    BowlingBashSlowClockTurn: 10,
    BowlingBashSlowPercent: 0.25

}


const skillCapChartReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default skillCapChartReducer;