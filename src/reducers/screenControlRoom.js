const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    storyLineOne: false,
    WorldMap: false,
    BattlePoringIslandMap: false,
    Prontera: false,
    PronteraToolDealer: false,
    PronteraSouth: false,
    PoringIsland: false,
    AntHell: false,
}

const screenControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'authorLogoFn':
            return {
                ...state,
                authorLogo: !state.authorLogo,
            }
        case 'startGameFn':
            return {
                ...state,
                startGame: !state.startGame,
                
            }
        case 'gameTitleOptionScreenFn':
            return {
                ...state,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,

            }
        case 'returnToTitleScreenFn':
            return {
                ...state,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,

            }
        case 'finishStoryLineOneFn':
            return {
                ...state,
                storyLineOne: !state.storyLineOne,
            }
        case 'GotoPronteraFn':
            return {
                ...state,
                WorldMap: false,
                BattlePoringIslandMap: false,
                Prontera: !state.Prontera,
                PronteraToolDealer: false,
                PronteraSouth: false,
                PoringIsland: false,
                AntHell: false,
            }
            case 'GotoPoringIslandFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraToolDealer: false,
                    PronteraSouth: false,
                    PoringIsland: !state.PoringIsland,
                    AntHell: false,
                }
            case 'GotoWorldMapFn':
                return {
                    ...state,
                    WorldMap: !state.WorldMap,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraToolDealer: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
            case 'GotoBattlePoringIslandMapFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: !state.BattlePoringIslandMap,
                    Prontera: false,
                    PronteraToolDealer: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
            case 'GotoAntHellFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraToolDealer: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: !state.AntHell,
                }
            case 'GotoPronteraToolDealerFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraToolDealer: !state.PronteraToolDealer,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
        default:
            return state;
    }
}
export default screenControlRoomReducer;