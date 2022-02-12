const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    storyLineOne: false,
    WorldMap: false,
    BattlePoringIslandMap: false,
    Prontera: false,
    PronteraToolDealer: false,
    WeaponArmorDealer: false,
    PronteraSouth: false,
    PoringIsland: false,
    AntHell: false,
    //Mini Screen (StoryMap)
    AltanEquipment: false,
    AltanStats: false,
    AltanItem: false,
    AltanQuest: false,
    //Mini Screen (StoryChat)
    WeaponEquipmentChoice: false,
    ArmorEquipmentChoice: false,
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
                ItemChoice: true,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoWeaponEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: !state.WeaponEquipmentChoice,
                ArmorEquipmentChoice: false,
                ItemChoice: false,
                EquipChoice: false,
                ETCChoice: false,
            }
        case 'GotoArmorEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: !state.ArmorEquipmentChoice,
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

        // WORLD MAP
        case 'GotoPronteraFn':
            return {
                ...state,
                WorldMap: false,
                BattlePoringIslandMap: false,
                Prontera: !state.Prontera,
                PronteraToolDealer: false,
                WeaponArmorDealer: false,
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
                    WeaponArmorDealer: false,
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
                    WeaponArmorDealer: false,
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
                    WeaponArmorDealer: false,
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
                    WeaponArmorDealer: false,
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
                    WeaponArmorDealer: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
            case 'GotoWeaponArmorDealerFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraToolDealer: false,
                    WeaponArmorDealer: !state.WeaponArmorDealer,
                    PronteraSouth: false,
                    PoringIsland: false,
                    AntHell: false,
                }
            
        default:
            return state;
    }
}
export default screenControlRoomReducer;