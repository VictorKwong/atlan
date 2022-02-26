const Fn = {
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
    BonusHeadGearStr: 0,
    BonusHeadGearAgi: 0,
    BonusHeadGearVit: 0,
    BonusHeadGearInt: 0,
    BonusHeadGearDex: 0,
    BonusHeadGearLuk: 0,
    Points: 48, //48
    TotalPoints: 48
}

const userAttributeReducer = (state = Fn, action) => {
    switch(action.type){
        case 'STRPointsFn':
            return {
                ...state,
                str: state.str + 1,
                agi: state.agi,
                vit: state.vit,
                int: state.int,
                dex: state.dex,
                luk: state.luk,
                Points: state.Points - action.ReqPoints
            }
        case 'AGIPointsFn':
            return {
                ...state,
                str: state.str,
                agi: state.agi + 1,
                vit: state.vit,
                int: state.int,
                dex: state.dex,
                luk: state.luk,
                Points: state.Points - action.ReqPoints
            }
        case 'VITPointsFn':
            return {
                ...state,
                str: state.str,
                agi: state.agi,
                vit: state.vit + 1,
                int: state.int,
                dex: state.dex,
                luk: state.luk,
                Points: state.Points - action.ReqPoints
            }
        case 'INTPointsFn':
            return {
                ...state,
                str: state.str,
                agi: state.agi,
                vit: state.vit,
                int: state.int + 1,
                dex: state.dex,
                luk: state.luk,
                Points: state.Points - action.ReqPoints
            }
        case 'DEXPointsFn':
            return {
                ...state,
                str: state.str,
                agi: state.agi,
                vit: state.vit,
                int: state.int,
                dex: state.dex + 1,
                luk: state.luk,
                Points: state.Points - action.ReqPoints
            }
        case 'LUKPointsFn':
            return {
                ...state,
                str: state.str,
                agi: state.agi,
                vit: state.vit,
                int: state.int,
                dex: state.dex,
                luk: state.luk + 1,
                Points: state.Points - action.ReqPoints
            }
        case 'UserLevelUpFn':
        case 'GetStatsPointFn':
            return{
                ...state,
                Points: state.Points + action.Points,
                TotalPoints: state.Points + action.Points
            }
        case 'ResetMyPointsFn':
            return {
                ...state,
                str: 1,
                agi: 1,
                vit: 1,
                int: 1,
                dex: 1,
                luk: 1,
                Points: state.TotalPoints
            }
        default:
            return {...state};
    }
}

export default userAttributeReducer;