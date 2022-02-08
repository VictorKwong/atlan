//State['User'].UserTurn
const Fn = {
    User:{
        BattleSkillScreen: false,
        BattleItemScreen: false,
        UserTurn: false,
        UserBlock: false,
    },
    Enemy:{
        EnemyTurn: false,
        EnemyBlock: false,
    }
    
}

const SkillControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'UserInSelectSkillFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    BattleSkillScreen: true,
                    
                }
        }
        case 'ReturnUserInSelectSkillFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    BattleSkillScreen: false,
                    
                }
        }
        case 'UserInSelectItemFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    BattleItemScreen: true,
                    
                }
        }
        case 'ReturnUserInSelectItemFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    BattleItemScreen: false,
                    
                }
        }
        case 'UserTurnFn':
            return {
                    ...state,
                    User:{
                        ...state['User'],
                        UserTurn: true,
                    }
            }
        case 'ResetUserTurnFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserTurn: false,
                }
        }
        case 'UserTurnBlockFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserBlock: true,
                }
        }
        case 'ResetUserTurnBlockFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserBlock: false,
                }
        }
        case 'EnemyTurnFn':
            return {
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyTurn: true,
                    
                }
            }
        case 'ResetEnemyTurnFn':
            return {
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyTurn: false,
                    
                }
            }
        case 'EnemyTurnBlockFn':
            return {
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyBlock: true,
                }
            }
        case 'ResetEnemyTurnBlockFn':
            return {
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyBlock: false,
                }
            }
        default:
            return {
                    ...state
                }
            }
    }
export default SkillControlRoomReducer;