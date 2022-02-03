const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    storyLineOne: false,
    WorldMap: false,
    Prontera: false,
    PronteraSouth: false,
}

const screenControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'authorLogoFn':
            return {
                authorLogo: !state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
            }
        case 'startGameFn':
            return {
                authorLogo: state.authorLogo,
                startGame: !state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
                
            }
        case 'gameTitleOptionScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
            }
        case 'returnToTitleScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
            }
        case 'finishStoryLineOneFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: !state.storyLineOne,
                WorldMap: state.WorldMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
            }
        case 'GotoPronteraFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                Prontera: !state.Prontera,
                PronteraSouth: false,
            }
            case 'GotoPronteraSouthGateFn':
                return {
                    authorLogo: state.authorLogo,
                    startGame: state.startGame,
                    gameTitleOptionScreen: state.gameTitleOptionScreen,
                    storyLineOne: state.storyLineOne,
                    WorldMap: state.WorldMap,
                    Prontera: false,
                    PronteraSouth: !state.PronteraSouth,
                }
        default:
            return state;
    }
}
export default screenControlRoomReducer;