const Fn = {
    BattleSkillScreen: false,
    UserTurn: false,
    EnemyTurn: false,
}

const SkillControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'UserInSelectSkillFn':
            return {
                ...state,
                BattleSkillScreen: true
                }
        case 'ReturnUserInSelectSkillFn':
            return {
                ...state,
                BattleSkillScreen: false
                }
        case 'UserTurnFn':
            return {
                ...state,
                UserTurn: true
                }
        case 'ResetUserTurnFn':
            return {
                ...state,
                UserTurn: false,
                }
        case 'EnemyTurnFn':
            return {
                ...state,
                EnemyTurn: true
                }
        case 'ResetEnemyTurnFn':
            return {
                ...state,
                EnemyTurn: false,
                }        
        default:
            return {
                ...state,
                }
    }
}
export default SkillControlRoomReducer;