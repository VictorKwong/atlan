const Fn = {
    EnemyOnHit: false,
    EnemyAttack:false,
    EnemyDead: false,
    EnemyDodge: false,
    EnemyOnCrit: false,
    EnemyOnHitDouble:false,
    EnemyOnReflectNumber:false,
    UserOnLifeStealAnimation:false,
    UserOnSPHealAnimation: false,
    UserAttack: false,
    UserOnHit: false,
    UserIsDying: false,
    UserIsDead: false,
    UserIsDefend: false,
    UserIsDodge: false,
    UserIsCrit: false,
    UserChannel: false,
    UserPickUp: false,
    UserBattleImg: null,
    UserAttackImg: null,
    UserDefendImg: null,
    UserOnHitImg: null,
    UserDyingImg: null,
    UserDeadImg: null,
    UserChannelImg: null,
    UserPickUpImg: null,
}

const ImageControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'UserAttackAnimationFn':
            return {
                ...state,
                UserAttack: true,
                }
        case 'ResetUserAttackAnimationFn':
            return {
                ...state,
                UserAttack: false,
                }
        case 'UserOnHitAnimationFn':
            return {
                ...state,
                UserOnHit: true,
                }
        case 'ResetUserOnHitAnimationFn':
            return {
                ...state,
                UserOnHit: false,
                }
        case 'UserIsDyingAnimationFn':
            return {
                ...state,
                UserIsDying: true,
                }
        case 'ResetUserIsDyingAnimationFn':
            return {
                ...state,
                UserIsDying: false,
                }
        case 'UserIsDeadAnimationFn':
            return {
                ...state,
                UserIsDead: true,
                }
        case 'ResetUserIsDeadAnimationFn':
            return {
                ...state,
                UserIsDead: false,
                }
        case 'UserIsDodgeAnimationFn':
            return {
                ...state,
                UserIsDodge: action.animation,
                }
        case 'UserIsCritAnimationFn':
            return {
                ...state,
                UserIsCrit: action.animation,
                }
        case 'EnemyOnHitAnimationFn':
            return {
                ...state,
                EnemyOnHit: true,
                }
        case 'ResetEnemyOnHitAnimationFn':
            return {
                ...state,
                EnemyOnHit: false,
            }
        case 'EnemyDodgeAnimationFn':
            return {
                ...state,
                EnemyDodge: action.animation,
                }
        case 'EnemyOnCritAnimationFn':
            return {
                ...state,
                EnemyOnCrit: action.animation,
                }
        case 'EnemyOnHitDoubleAnimationFn':
            return {
                ...state,
                EnemyOnHitDouble: action.animation,
            }
        case 'EnemyOnReflectNumberFn':
            return {
                ...state,
                EnemyOnReflectNumber: action.animation,
            }
            
        case 'EnemyAttackUserAnimationFn':
            return {
                ...state,
                EnemyOnHit: false,
            }
        case 'UserOnLifeStealAnimationFn':
            return {
                ...state,
                UserOnLifeStealAnimation: action.animation,
            }
        case 'UserOnSPHealAnimationFn':
            return {
                ...state,
                UserOnSPHealAnimation: action.animation,
            }
        case 'UserIsBlockAnimationFn':
            return {
                ...state,
                UserIsDefend: true,
                }
        case 'ResetUserIsBlockAnimationFn':
            return {
                ...state,
                UserIsDefend: false,
                }
        case 'UserChannelAnimationFn':
            return {
                ...state,
                UserChannel: true,
                }
        case 'ResetUserChannelAnimationFn':
            return {
                ...state,
                UserChannel: false,
                }
        case 'UserWeaponImgFn':
            return {
                ...state,
                UserBattleImg: action.WeaponBattleImg,
                UserAttackImg: action.WeaponAttackImg,
                UserDefendImg: action.WeaponDefendImg,
                UserOnHitImg: action.WeaponOnHitImg,
                UserDyingImg: action.WeaponDyingImg,
                UserDeadImg: action.WeaponDeadImg,
                UserChannelImg: action.WeaponChannelImg,
                UserPickUpImg: action.WeaponPickUpImg,
            }
        case 'UserPickUpAnimationFn':
            return{
                ...state,
                UserPickUp: action.Turn
            }
        case 'EnemyAttackAnimationFn':
            return{
                ...state,
                EnemyAttack: action.Turn
            }
        case 'EnemyDeadAnimationFn':
            return{
                ...state,
                EnemyDead: action.Turn
            }
        default:
            return {
                ...state,
                }
    }
}
export default ImageControlRoomReducer;