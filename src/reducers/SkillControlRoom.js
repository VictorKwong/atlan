//State['User'].UserTurn
const Fn = {
    User:{
        BattleSkillScreen: false,
        BattleItemScreen: false,
        UserTurn: false,
        UserBlock: false,
        //userClock Status
        userClockQuicken: 0,
        //Stable Skills
        UserLearnDoubleAttack: false,
        UserLearnReflectAttack: true,
        UserLearnLifeStealAttack: false,
        UserLearnMasterItem: true,
        //Stable Skills Scale
        UserDoubleAttackScale: 0.2,
        UserReflectAttackScale: 0.5,
        UserLifeStealAttack: 0.3,
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
        case 'UserSkillQuickenFn':
            return{
                ...state,
                User:{
                    ...state['User'],
                    userClockQuicken: 6
            }
        }
        case 'UserSkillQuickenClockTickFn':
            return{
                ...state,
                User:{
                    ...state['User'],
                    userClockQuicken: state['User'].userClockQuicken - 1
                }
            }
        case 'ResetUserSkillQuickenClockFn':
            return{
                ...state,
                User:{
                    ...state['User'],
                    userClockQuicken: 0
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
        case 'UserLearnDoubleAttackFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserLearnDoubleAttack: action.learn
                }
            }
        case 'UserLearnReflectAttackFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserLearnReflectAttack: action.learn
                }
            }
        case 'UserLearnLifeStealAttackFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserLearnLifeStealAttack: action.learn
                }
            }
        case 'UserLearnMasterItemFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserLearnMasterItem: action.learn
                }
            }
        default:
            return {
                    ...state
                }
            }
    }
export default SkillControlRoomReducer;