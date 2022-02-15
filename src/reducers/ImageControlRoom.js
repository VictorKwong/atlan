const Fn = {
    EnemyOnHit: false,
    EnemyAttack:false,
    EnemyDead: false,
    UserAttack: false,
    UserOnHit: false,
    UserIsDying: false,
    UserIsDead: false,
    UserIsDefend: false,
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
        case 'EnemyAttackUserAnimationFn':
            return {
                ...state,
                EnemyOnHit: false,
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