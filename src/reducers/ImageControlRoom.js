const Fn = {
    EnemyOnHit: false,
}

const ImageControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'EnemyOnHitAnimationFn':
            return {
                EnemyOnHit: !state.EnemyOnHit
                }
        case 'ResetEnemyOnHitAnimationFn':
            return {
                EnemyOnHit: false,
            }  
        default:
            return {
                ...state,
                }
    }
}
export default ImageControlRoomReducer;