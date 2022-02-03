const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    storyLineOne: false,
}

const screenControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'authorLogoFn':
            return {
                authorLogo: !state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
            }
        case 'startGameFn':
            return {
                authorLogo: state.authorLogo,
                startGame: !state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
            }
        case 'gameTitleOptionScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
            }
        case 'returnToTitleScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
            }
        case 'finishStoryLineOneFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: !state.storyLineOne,
            }
        default:
            return state;
    }
}
export default screenControlRoomReducer;