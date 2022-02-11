const Fn = {
    EnemyOnHit: false,
    UserAttack: false,
    UserOnHit: false,
    UserIsDying: false,
    UserIsDead: false,
    UserIsDefend: false,
    UserChannel: false,
    UserWeaponImg: null,
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
                UserWeaponBattleImg: action.WeaponBattleImg,
                UserWeaponAttackImg: action.WeaponAttackImg,
                UserWeaponDefendImg: action.WeaponDefendImg
            }
        default:
            return {
                ...state,
                }
    }
}
export default ImageControlRoomReducer;