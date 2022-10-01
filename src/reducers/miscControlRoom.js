const Fn = {
    WorldMap: 2500,
    WorldChangeMap: 1500,
    MiniMap: 1000,
    MiniChangeMap: 500,
    LoadingScreen: 1000,
}

const miscControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return {
                ...state,
                }
    }
}
export default miscControlRoomReducer;