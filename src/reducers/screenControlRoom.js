const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    storyLineOne: false,
    WorldMap: false,
    Prontera: false,
    PronteraSouth: false,
    PoringIsland: false,
    AntHell: false,
    //PORING ISLAND BATTLE
    BattlePoringIslandMap: false,
    BattlePoringIslandMapTwo: false,
    BattlePoringIslandMapTwoSecret: false,
    BattlePoringIslandMapBoss: false,
    //BattleLoading Screen
    BattleLoadingScreen: false,
    //Mini Screen (TreasurePoringIsland)
    TreasurePoringIslandMap: false,
    TreasurePoringIslandMap2: false,
    TreasurePoringIslandMap3: false,
    //PORING ISLAND PATH
    PoringIslandPath1: false,
    PoringIslandPath2: false,
    PoringIslandPath3: false,
    PoringIslandPath4: false,
    //UserUnlockPath 0-8, 5-8 hidden
    UserUnlockPath: "Path0",
    //Mini Screen (StoryMap)
    AltanEquipment: false,
    AltanStats: false,
    AltanItem: false,
    AltanQuest: false,
    //Mini Screen (Shop)
    PronteraHeadGearDealer: false,
    PronteraToolDealer: false,
    PronteraWeaponArmorDealer: false,
    //Mini Screen (StoryChat)
    WeaponEquipmentChoice: false,
    ArmorEquipmentChoice: false,
    HeadGearEquipmentChoice: false,
    ItemChoice: false,
    EquipChoice: false,
    ETCChoice: false,

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
        // Mini Screen
        case 'GotoAltanEquipmentFn':
            return {
                ...state,
                AltanEquipment: !state.AltanEquipment,
                AltanStats: false,
                AltanItem: false,
                AltanQuest: false,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
            }
        case 'GotoAltanStatsFn':
            return {
                ...state,
                AltanEquipment: false,
                AltanStats: !state.AltanStats,
                AltanItem: false,
                AltanQuest: false,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
            }
        case 'GotoAltanItemFn':
            return {
                ...state,
                AltanEquipment: false,
                AltanStats: false,
                AltanItem: !state.AltanItem,
                AltanQuest: false,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                ItemChoice: true,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoAltanQuestFn':
            return {
                ...state,
                AltanEquipment: false,
                AltanStats: false,
                AltanItem: false,
                AltanQuest: !state.AltanQuest,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                ItemChoice: true,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoWeaponEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: !state.WeaponEquipmentChoice,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                ItemChoice: false,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoArmorEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: !state.ArmorEquipmentChoice,
                HeadGearEquipmentChoice: false,
                ItemChoice: false,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoHeadGearEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: !state.HeadGearEquipmentChoice,
                ItemChoice: false,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoItemChoiceFn':
            return {
                ...state,
                ItemChoice: true,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoEquipChoiceFn':
            return {
                ...state,

                ItemChoice: false,
                EquipChoice: true,
                ETCChoice: false,
            }
        case 'GotoETCChoiceFn':
            return {
                ...state,
                ItemChoice: false,
                EquipChoice: false,
                ETCChoice: true,
            }
        case 'ReturnWeaponEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
            }
        case 'ReturnArmorEquipmentChoiceFn':
            return {
                ...state,
                ArmorEquipmentChoice: false,
            }
        case 'ReturnHeadGearEquipmentChoiceFn':
            return {
                ...state,
                HeadGearEquipmentChoice: false,
            }
        // Mini Screen Shop
        case 'GotoPronteraHeadGearDealerFn':
            return {
                ...state,
                PronteraHeadGearDealer: !state.PronteraHeadGearDealer,
            }
        case 'GotoPronteraToolDealerFn':
            return {
                ...state,
                PronteraToolDealer: !state.PronteraToolDealer,
            }
        case 'GotoPronteraWeaponArmorDealerFn':
            return {
                ...state,
                PronteraWeaponArmorDealer: !state.PronteraWeaponArmorDealer,
            }
        // WORLD MAP
        case 'GotoPronteraFn':
            return {
                ...state,
                WorldMap: false,
                BattlePoringIslandMap: false,
                BattlePoringIslandMapTwo: false,
                BattlePoringIslandMapTwoSecret: false,
                BattlePoringIslandMapBoss: false,
                Prontera: !state.Prontera,
                PronteraSouth: false,
                PoringIsland: false,
                AntHell: false,
            }
            case 'GotoPoringIslandFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    BattlePoringIslandMapTwo: false,
                    BattlePoringIslandMapTwoSecret: false,
                    BattlePoringIslandMapBoss: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: !state.PoringIsland,
                    AntHell: false,
                    UserLocation: "Path0"
                }
            case 'GotoWorldMapFn':
                return {
                    ...state,
                    WorldMap: !state.WorldMap,
                    BattlePoringIslandMap: false,
                    BattlePoringIslandMapTwo: false,
                    BattlePoringIslandMapTwoSecret: false,
                    BattlePoringIslandMapBoss: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
            case 'GotoBattlePoringIslandMapFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: !state.BattlePoringIslandMap,
                    BattlePoringIslandMapTwo: false,
                    BattlePoringIslandMapTwoSecret: false,
                    BattlePoringIslandMapBoss: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                    UserUnlockPath: action.Path
                }
            case 'GotoBattlePoringIslandMapTwoFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    BattlePoringIslandMapTwo: !state.BattlePoringIslandMapTwo,
                    BattlePoringIslandMapTwoSecret: false,
                    BattlePoringIslandMapBoss: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                    UserUnlockPath: action.Path
                }
            case 'GotoBattlePoringIslandMapTwoSecretFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    BattlePoringIslandMapTwo: false,
                    BattlePoringIslandMapTwoSecret: !state.BattlePoringIslandMapTwoSecret,
                    BattlePoringIslandMapBoss: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                    UserUnlockPath: action.Path
                }
            case 'GotoBattlePoringIslandMapBossFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    BattlePoringIslandMapTwo: false,
                    BattlePoringIslandMapTwoSecret: false,
                    BattlePoringIslandMapBoss: !state.BattlePoringIslandMapBoss,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                    UserUnlockPath: action.Path
                }
            case 'GotoAntHellFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    BattlePoringIslandMapTwo: false,
                    BattlePoringIslandMapTwoSecret: false,
                    BattlePoringIslandMapBoss: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: !state.AntHell,
                }
            //Poring Island Mini Map
            case 'GotoTreasurePoringIslandMapFn':
                return {
                    ...state,
                    TreasurePoringIslandMap: !state.TreasurePoringIslandMap,
                }
            case 'GotoTreasurePoringIslandMap2Fn':
                return {
                    ...state,
                    TreasurePoringIslandMap2: !state.TreasurePoringIslandMap2,
                }
            case 'GotoTreasurePoringIslandMap3Fn':
                return {
                    ...state,
                    TreasurePoringIslandMap3: !state.TreasurePoringIslandMap3,
                }
            //Poring Island ALL Path
            case 'GotoPoringIslandPath1Fn':
                return {
                    ...state,
                    PoringIslandPath1: true,
                }
            case 'GotoPoringIslandPath2Fn':
                return {
                    ...state,
                    PoringIslandPath2: true,
                }
            case 'GotoPoringIslandPath3Fn':
                return {
                    ...state,
                    PoringIslandPath3: true,
                }
            case 'GotoPoringIslandPath4Fn':
                return {
                    ...state,
                    PoringIslandPath4: true,
                }
            case 'ReturnPoringIslandPathFn':
                return {
                    ...state,
                    PoringIslandPath1: false,
                    PoringIslandPath2: false,
                    PoringIslandPath3: false,
                }
            //BattleLoadingScreen
            case 'BattleLoadingScreenFn':
                return{
                    ...state,
                    BattleLoadingScreen: !state.BattleLoadingScreen
                }

        default:
            return state;
    }
}
export default screenControlRoomReducer;