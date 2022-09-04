//State['User'].UserTurn
const Fn = {
    User:{
        BattleSkillScreen: false,
        BattleItemScreen: false,
        UserTurn: false,
        UserBlock: false,
        //userClock Status
        userClockQuicken: -1,
        userClockFireAttackAttributes: -1,
        //Stable Skills
        UserLearnDoubleAttack: false,
        UserLearnReflectAttack: true,
        UserLearnLifeStealAttack: false,
        UserLearnMasterItem: true,
        UserLearnAmuletRecovery: true,
        UserFirstGift: false,
        UserSecondGift: false,
        UserLearnMagnificat: false,
        //UserTriggerMasterItem
        UserTriggerMasterItem: true,
        //Stable Skills Scale
        UserDoubleAttackScale: 0.2,
        UserReflectAttackScale: 0.5,
        UserLifeStealAttack: 0.3,
    },
    Enemy:{
        EnemyTurn: false,
        EnemyBlock: false,
        EnemyPoison: -1,
        EnemyBurning: -1,
        EnemyBleeding: -1,
        EnemyDefenceBreak: -1,
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
                    userClockQuicken: action.QuickenSpeedTurn
            }
        }
        case 'UserClockFireAttackAttributesFn':
            return{
                ...state,
                User:{
                    ...state['User'],
                    userClockFireAttackAttributes: action.MagnumBreakFireWeaponTurn
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
        case 'UserSkillKodokuFn':
            return{
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyPoison: action.KodokuPoisonTurn,
                }
            }
        case 'UserSkillVitalStrikeFn':
            return{
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyDefenceBreak: action.VitalStrikeDefenceBreakDownTurn
                }
            }
        case 'UserSkillMagnumBreakFn':
            return{
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyBurning: 2,
                }
            }
        case 'UserSkillHeadCrushFn':
            return{
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyBleeding: action.HeadCrushBleedingTurn,
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
        case 'UserLearnAmuletRecoveryFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserLearnAmuletRecovery: action.learn
                }
            }
        case 'UserTriggerMasterItemFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserTriggerMasterItem: action.trigger
                }
            }
        case 'ResetAllBattleMapFn':
            return {
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyBlock: false,
                    EnemyTurn: false,
                    EnemyPoison: -1,
                    EnemyBurning: -1,
                    EnemyBleeding: -1,
                    EnemyDefenceBreak: -1,
                },
                User:{
                    ...state['User'],
                    userClockQuicken: -1,
                    userClockFireAttackAttributes: -1,
                    UserBlock: false,
                    BattleItemScreen: false,
                    BattleSkillScreen: false,
                    UserTurn: false,
                    UserTriggerMasterItem: true,
                }
            }
        case 'UserBattleStatsFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserBlock: false,
                    BattleSkillScreen: false,
                    BattleItemScreen: false,
                    userClockQuicken: state['User'].userClockQuicken - 1,
                    userClockFireAttackAttributes: state['User'].userClockFireAttackAttributes - 1
                },
                Enemy:{
                    ...state['Enemy'],
                    EnemyPoison: state['Enemy'].EnemyPoison - 1,
                    EnemyBurning: state['Enemy'].EnemyBurning - 1,
                    EnemyBleeding: state['Enemy'].EnemyBleeding - 1,
                    EnemyDefenceBreak: state['Enemy'].EnemyDefenceBreak -1,
                }
        }
        case 'EnemyBattleStatsFn':
            return{
                ...state,
                Enemy:{
                    ...state['Enemy'],
                    EnemyBlock: false,
                    EnemyTurn: true,
                    EnemyPoison: state['Enemy'].EnemyPoison - 1,
                    EnemyBurning: state['Enemy'].EnemyBurning - 1,
                    EnemyBleeding: state['Enemy'].EnemyBleeding - 1,
                    EnemyDefenceBreak: state['Enemy'].EnemyDefenceBreak -1,
            }
        }
        case 'UserFirstGiftFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserFirstGift: action.trigger,
                }
            }
        case 'UserSecondGiftFn':
            return {
                ...state,
                User:{
                    ...state['User'],
                    UserSecondGift: action.trigger,
                }
            }
        case 'GiftTwoFn':
            switch(true){
                case(action.Two === 8):
                    return{
                            ...state,
                            User:{
                                ...state['User'],
                                UserLearnMagnificat: true,
                            }
                        }
                default:
                    return {...state};
            }
        default:
            return {
                    ...state
                }
            }
    }
export default SkillControlRoomReducer;