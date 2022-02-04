const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    storyLineOne: false,
    WorldMap: false,
    BattlePoringIslandMap: false,
    Prontera: false,
    PronteraSouth: false,
    PoringIsland: false,
    AntHell: false,
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
                BattlePoringIslandMap: state.BattlePoringIslandMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
                PoringIsland: state.PoringIsland,
                AntHell: state.AntHell,
            }
        case 'startGameFn':
            return {
                authorLogo: state.authorLogo,
                startGame: !state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                BattlePoringIslandMap: state.BattlePoringIslandMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
                PoringIsland: state.PoringIsland,
                AntHell: state.AntHell,
                
            }
        case 'gameTitleOptionScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                BattlePoringIslandMap: state.BattlePoringIslandMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
                PoringIsland: state.PoringIsland,
                AntHell: state.AntHell,
            }
        case 'returnToTitleScreenFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: !state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: state.WorldMap,
                BattlePoringIslandMap: state.BattlePoringIslandMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
                PoringIsland: state.PoringIsland,
                AntHell: state.AntHell,
            }
        case 'finishStoryLineOneFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: !state.storyLineOne,
                WorldMap: state.WorldMap,
                BattlePoringIslandMap: state.BattlePoringIslandMap,
                Prontera: state.Prontera,
                PronteraSouth: state.PronteraSouth,
                PoringIsland: state.PoringIsland,
                AntHell: state.AntHell,
            }
        case 'GotoPronteraFn':
            return {
                authorLogo: state.authorLogo,
                startGame: state.startGame,
                gameTitleOptionScreen: state.gameTitleOptionScreen,
                storyLineOne: state.storyLineOne,
                WorldMap: false,
                BattlePoringIslandMap: false,
                Prontera: !state.Prontera,
                PronteraSouth: false,
                PoringIsland: false,
                AntHell: false,
            }
            case 'GotoPoringIslandFn':
                return {
                    authorLogo: state.authorLogo,
                    startGame: state.startGame,
                    gameTitleOptionScreen: state.gameTitleOptionScreen,
                    storyLineOne: state.storyLineOne,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: !state.PoringIsland,
                    AntHell: false,
                }
            case 'GotoWorldMapFn':
                return {
                    authorLogo: state.authorLogo,
                    startGame: state.startGame,
                    gameTitleOptionScreen: state.gameTitleOptionScreen,
                    storyLineOne: state.storyLineOne,
                    WorldMap: !state.WorldMap,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
            case 'GotoBattlePoringIslandMapFn':
                return {
                    authorLogo: state.authorLogo,
                    startGame: state.startGame,
                    gameTitleOptionScreen: state.gameTitleOptionScreen,
                    storyLineOne: state.storyLineOne,
                    WorldMap: false,
                    BattlePoringIslandMap: !state.BattlePoringIslandMap,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
            case 'GotoAntHellFn':
                return {
                    authorLogo: state.authorLogo,
                    startGame: state.startGame,
                    gameTitleOptionScreen: state.gameTitleOptionScreen,
                    storyLineOne: state.storyLineOne,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: !state.AntHell,
                }

        default:
            return state;
    }
}
export default screenControlRoomReducer;