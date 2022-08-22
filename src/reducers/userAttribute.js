const Fn = {
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1,
    BonusStr: 0,
    BonusAgi: 0,
    BonusVit: 0,
    BonusInt: 0,
    BonusDex: 0,
    BonusLuk: 0,
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
        case 'TrainingSTRFn':
            return{
                ...state,
                BonusStr: state.BonusStr + action.num,
            }
        case 'TrainingAGIFn':
            return{
                ...state,
                BonusAgi: state.BonusAgi + action.num,
            }
        case 'TrainingVITFn':
            return{
                ...state,
                BonusVit: state.BonusVit + action.num,
            }
        case 'TrainingINTFn':
            return{
                ...state,
                BonusInt: state.BonusInt + action.num,
            }    
        case 'TrainingDEXFn':
            return{
                ...state,
                BonusDex: state.BonusDex + action.num,
            }
        case 'TrainingLUKFn':
            return{
                ...state,
                BonusLuk: state.BonusLuk + action.num,
            }
        case 'BonusEquipPointsFn':
            return{
                ...state,
                BonusStr: state.BonusStr + action.STRPoint,
                BonusAgi: state.BonusAgi + action.AGIPoint,
                BonusVit: state.BonusVit + action.VITPoint,
                BonusInt: state.BonusInt + action.INTPoint,
                BonusDex: state.BonusDex + action.DEXPoint,
                BonusLuk: state.BonusLuk + action.LUKPoint,
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