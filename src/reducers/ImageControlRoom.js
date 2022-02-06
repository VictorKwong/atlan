const Fn = {
    EnemyOnHit: false,
    UserAttack: false,
    UserOnHit: false,
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
        default:
            return {
                ...state,
                }
    }
}
export default ImageControlRoomReducer;