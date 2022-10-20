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
    MagnumBreakBaseDamage: 100,
    BowlingBashBaseDamage: 200,
    //Special Effect
    BashStunChance: 0.5,
    MammoniteGain: 0.2,
    HeadCrushBleedingChance: 0.7,
    QuickenSpeed: 10,
    VitalStrikeDefenceBreakDown: 0.25,

    //DOT Effect
    //3 turns, 2 1 0 = 3
    KodokuPoisonTurn: 5,
    KodokuPoisonPercent: 0.05,
    HeadCrushBleedingTurn: 4,
    HeadCrushBleedingPercent: 0.02,
    QuickenSpeedTurn: 5,
    VitalStrikeDefenceBreakDownTurn: 8,
    BowlingBashSlowClockTurn: 10,
    BowlingBashSlowPercent: 0.25,
    MagnumBreakAccuracyPercent: 1.1,
    MagnumBreakFireWeaponTurn: 3,
    MagnumBreakBurningTurn: 4,
    MagnumBreakBurningPercent: 0.01,
    MagnumBreakFireAdditionalDamage: 1.1,

    //Level Up
    LevelUpFirstAidFlatHeal: 30,
    JobPoints: 99,
    TotalJobPoints: 99
}


const skillCapChartReducer = (state = Fn, action) => {
    switch(action.type){
        case 'FirstAidSkillLevelFn':
            return{
                ...state,
                FirstAidSkillLevel: state.FirstAidSkillLevel + 1,
                FirstAidFlatHeal: state.FirstAidFlatHeal + state.LevelUpFirstAidFlatHeal,
                JobPoints: state.JobPoints - 1,
            }
        case 'BashSkillLevelFn':
            return{
                ...state,
                BashSkillLevel:state.BashSkillLevel + 1,
                // BashBaseDamage: state.BashBaseDamage + action.BashBaseDamage,
                JobPoints: state.JobPoints - 1,
            }
        case 'MammoniteSkillLevelFn':
            return{
                ...state,
                MammoniteSkillLevel: state.MammoniteSkillLevel + 1,
                // MammoniteBaseDamage: state.MammoniteBaseDamage + action.MammoniteBaseDamage,
                JobPoints: state.JobPoints - 1,
            }
        case 'KodokuSkillLevelFn':
            return{
                ...state,
                KodokuSkillLevel: state.KodokuSkillLevel + 1,
                JobPoints: state.JobPoints - 1,
            }
        case 'MagnumBreakSkillLevelFn':
            return{
                ...state,
                MagnumBreakSkillLevel: state.MagnumBreakSkillLevel + 1,
                // MagnumBreakBaseDamage: state.MagnumBreakBaseDamage + action.MagnumBreakBaseDamage,
                JobPoints: state.JobPoints - 1,
            }
        case 'HeadCrushSkillLevelFn':
            return{
                ...state,
                HeadCrushSkillLevel: state.HeadCrushSkillLevel + 1,
                JobPoints: state.JobPoints - 1,
            }
        case 'QuickenSkillLevelFn':
            return{
                ...state,
                QuickenSkillLevel: state.QuickenSkillLevel + 1,
                JobPoints: state.JobPoints - 1,
            }
        case 'VitalStrikeSkillLevelFn':
            return{
                ...state,
                VitalStrikeSkillLevel: state.VitalStrikeSkillLevel + 1,
                JobPoints: state.JobPoints - 1,
            }
        case 'BowlingBashSkillLevelFn':
            return{
                ...state,
                BowlingBashSkillLevel: state.BowlingBashSkillLevel + 1,
                JobPoints: state.JobPoints - 1,
            }
        case 'UserLevelUpFn':
            return{
                ...state,
                JobPoints: state.TotalJobPoints + 1,
            }
        case 'ResetMySkillPointsFn':
            return{
                ...state,
                FirstAidSkillLevel: 1,
                BashSkillLevel: 1,
                MammoniteSkillLevel: 1,
                KodokuSkillLevel: 1,
                MagnumBreakSkillLevel: 1,
                HeadCrushSkillLevel: 1,
                QuickenSkillLevel: 1,
                VitalStrikeSkillLevel: 1,
                BowlingBashSkillLevel: 1,
                JobPoints: state.TotalJobPoints
            }
        case 'UserJobLevelUpFn':
            return{
                ...state,
                JobPoints: state.JobPoints + action.Points,
                TotalJobPoints: state.TotalJobPoints + action.Points
            }
        default:
            return state;
    }
}

export default skillCapChartReducer;