const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false
}

const screenControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'authorLogoFn':
            return {
                authorLogo: !state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen
            }
        case 'startGameFn':
            return {
                authorLogo: state.authorLogo,
                startGame: !state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen
            }
        case 'gameTitleOptionScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen
            }
        case 'returnToTitleScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen
            }
        default:
            return state;
    }
}
export default screenControlRoomReducer;