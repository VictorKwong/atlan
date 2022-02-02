const Fn = {
    authorLogo: false,
    startGame: false,
}

const screenControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'authorLogoFn':
            return {
                authorLogo: !state.authorLogo,
                startGame: state.startGame,
            }
        case 'startGameFn':
            return {
                authorLogo: state.authorLogo,
                startGame: !state.startGame,
            }
        default:
            return state;
    }
}
export default screenControlRoomReducer;