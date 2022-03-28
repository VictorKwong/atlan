const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    storyLineOne: false,
    WorldMap: false,
    Prontera: false,
    PronteraSouth: false,
    PoringIsland: false,
    GeffenTower: false,
    PayonCave1F: false,
    
    //PORING ISLAND BATTLE
    BattlePoringIslandMap: false,
    BattlePoringIslandMapMonsterID: 0,
    //Loading Screen
    BattleLoadingScreen: false,
    TrainingLoadingScreen: false,
    TrainingLoadingScreenDelay: false,
    //Mini Screen (TreasurePoringIsland)
    TreasurePoringIslandMap: false,
    //Mini Screen (PayonCave 2F)
    PayonCave2F: false,
    PayonCave3F: false,
    //TreasureUnlockPath
    TreasurePath:"Path",
    PoringIslandHouseMap: false,
    //House Training Fn
    HouseTrainingSTR:false,
    HouseTrainingAGI:false,
    HouseTrainingVIT:false,
    HouseTrainingINT:false,
    HouseTrainingDEX:false,
    HouseTrainingLUK:false,
    //PORING ISLAND PATH
    // PoringIslandPath1: false,
    // PoringIslandPath2: false,
    // PoringIslandPath3: false,
    // PoringIslandPath4: false,
    // PoringIslandPath5: false,
    // PoringIslandPath6: false,
    // PoringIslandPath7: false,
    // PoringIslandPath8: false,
    PoringIslandPath1: true,
    PoringIslandPath2: true,
    PoringIslandPath3: true,
    PoringIslandPath4: true,
    PoringIslandPath5: true,
    PoringIslandPath6: true,
    PoringIslandPath7: true,
    PoringIslandPath8: true,
    //Payon Cave PATH
    // PayonCave1FPath1: false,
    // PayonCave1FPath2Hidden: false,
    // PayonCave2FPath1: false,
    // PayonCave2FPath2: false,
    // PayonCave2FPath3: false,
    // PayonCave2FPath4: false,
    // PayonCave2FPath5: false,
    // PayonCave2FPath6: false,
    // PayonCave2FPath7: false,
    // PayonCave2FPath8: false,
    PayonCave1FPath1: true,
    PayonCave1FPath2Hidden: false,
    PayonCave2FPath1: true,
    PayonCave2FPath2: true,
    PayonCave2FPath3: true,
    PayonCave2FPath4: true,
    PayonCave2FPath5: true,
    PayonCave2FPath6: true,
    PayonCave2FPath7: true,
    PayonCave2FPath8: true,
    PayonCave2FPath9Hidden: false,
    PayonCave2FPath10Hidden: false,
    PayonCave3FPath1: true,
    PayonCave3FPath2: true,
    PayonCave3FPath3: true,
    PayonCave3FPath4: true,
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
    PronteraCastle:false,
    //Mini Screen (StoryChat)
    WeaponEquipmentChoice: false,
    ArmorEquipmentChoice: false,
    HeadGearEquipmentChoice: false,
    ImageEquipment:false,
    ItemChoice: false,
    EquipChoice: false,
    ETCChoice: false,
    StatsChoice: false,
    SkillChoice: false,
    GuildChoice: false,

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
                StatsChoice: true,
                SkillChoice: false,
                GuildChoice: false,
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
            }
        case 'GotoWeaponEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: !state.WeaponEquipmentChoice,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                ImageEquipment:false,
            }
        case 'GotoArmorEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: !state.ArmorEquipmentChoice,
                HeadGearEquipmentChoice: false,
                ImageEquipment:false,
            }
        case 'GotoHeadGearEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: !state.HeadGearEquipmentChoice,
                ImageEquipment:false,
            }
        case 'GotoImageEquipmentFn':
            return{
                ...state,
                ImageEquipment:true
            }
        case 'STRPointsFn':
        case 'AGIPointsFn':
        case 'VITPointsFn':
        case 'INTPointsFn':
        case 'DEXPointsFn':
        case 'LUKPointsFn':
            return{
                ...state,
                ImageEquipment:false,
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
        case 'GotoStatsChoiceFn':
            return {
                ...state,
                StatsChoice: true,
                SkillChoice: false,
                GuildChoice: false,
            }
        case 'GotoSkillChoiceFn':
            return {
                ...state,
                StatsChoice: false,
                SkillChoice: true,
                GuildChoice: false,
            }
        case 'GotoGuildChoiceFn':
            return {
                ...state,
                StatsChoice: false,
                SkillChoice: false,
                GuildChoice: true,
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
                Prontera: !state.Prontera,
                PronteraCastle: false,
                PronteraSouth: false,
                PoringIsland: false,
                GeffenTower1F: false,
                PayonCave1F: false,
                PayonCave2F: false,
            }
            case 'GotoPronteraCastleFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: !state.PronteraCastle,
                    PronteraSouth: false,
                    PoringIsland: false,
                    GeffenTower1F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                }
            case 'GotoPoringIslandFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: !state.PoringIsland,
                    GeffenTower1F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    UserLocation: "Path0"
                }
            case 'GotoWorldMapFn':
                return {
                    ...state,
                    WorldMap: !state.WorldMap,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    GeffenTower1F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                }
            case 'GotoBattlePoringIslandMapFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: !state.BattlePoringIslandMap,
                    BattlePoringIslandMapMonsterID: action.num,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    GeffenTower1F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    UserUnlockPath: action.Path
                }
            case 'GotoGeffenTower1FFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    GeffenTower1F: true,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    UserLocation: "GeffenTower1FPath0"
                }
            case 'GotoPayonCave1FFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    GeffenTower1F: false,
                    PayonCave1F: true,
                    PayonCave2F: false,
                    UserLocation: "PayonCavePath0"
                }
            //careful PayonCave1F is base = true
            case 'GotoPayonCave2FFn':
                return {
                    ...state,
                    PayonCave2F: true,
                    PayonCave3F: false,
                    UserLocation: "PayonCave2FPath0"
                }
            case 'GotoPayonCave3FFn':
                return {
                    ...state,
                    PayonCave2F: false,
                    PayonCave3F: true,
                    UserLocation: "PayonCave3FPath0"
                }
            //Poring Island Mini Map
            case 'GotoTreasurePoringIslandMapFn':
                return {
                    ...state,
                    TreasurePoringIslandMap: !state.TreasurePoringIslandMap,
                    TreasurePath:action.Path,
                }
            case 'GotoPoringIslandHouseMapFn':
                return {
                    ...state,
                    PoringIslandHouseMap: !state.PoringIslandHouseMap,
                    HouseTrainingSTR:false,
                    HouseTrainingAGI:false,
                    HouseTrainingVIT:false,
                    HouseTrainingINT:false,
                    HouseTrainingDEX:false,
                    HouseTrainingLUK:false,
                }
            //House Training Fn
            case 'GotoHouseTrainingSTRFn':
                return{
                    ...state,
                    HouseTrainingSTR:true,
                    HouseTrainingAGI:false,
                    HouseTrainingVIT:false,
                    HouseTrainingINT:false,
                    HouseTrainingDEX:false,
                    HouseTrainingLUK:false,
                }
            case 'GotoHouseTrainingAGIFn':
                return{
                    ...state,
                    HouseTrainingSTR:false,
                    HouseTrainingAGI:true,
                    HouseTrainingVIT:false,
                    HouseTrainingINT:false,
                    HouseTrainingDEX:false,
                    HouseTrainingLUK:false,
                }
            case 'GotoHouseTrainingVITFn':
                return{
                    ...state,
                    HouseTrainingSTR:false,
                    HouseTrainingAGI:false,
                    HouseTrainingVIT:true,
                    HouseTrainingINT:false,
                    HouseTrainingDEX:false,
                    HouseTrainingLUK:false,
                }
            case 'GotoHouseTrainingINTFn':
                return{
                    ...state,
                    HouseTrainingSTR:false,
                    HouseTrainingAGI:false,
                    HouseTrainingVIT:false,
                    HouseTrainingINT:true,
                    HouseTrainingDEX:false,
                    HouseTrainingLUK:false,
                }
            case 'GotoHouseTrainingDEXFn':
                return{
                    ...state,
                    HouseTrainingSTR:false,
                    HouseTrainingAGI:false,
                    HouseTrainingVIT:false,
                    HouseTrainingINT:false, 
                    HouseTrainingDEX:true,
                    HouseTrainingLUK:false,
                }
            case 'GotoHouseTrainingLUKFn':
                return{
                    ...state,
                    HouseTrainingSTR:false,
                    HouseTrainingAGI:false,
                    HouseTrainingVIT:false,
                    HouseTrainingINT:false,
                    HouseTrainingDEX:false,
                    HouseTrainingLUK:true,
                }
            case 'ResetHouseTrainingFn':
                return{
                    ...state,
                    HouseTrainingSTR:false,
                    HouseTrainingAGI:false,
                    HouseTrainingVIT:false,
                    HouseTrainingINT:false,
                    HouseTrainingDEX:false,
                    HouseTrainingLUK:false,
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
            case 'GotoPoringIslandPath5Fn':
                return {
                    ...state,
                    PoringIslandPath5: true,
                }
            case 'GotoPoringIslandPath6Fn':
                return {
                    ...state,
                    PoringIslandPath6: true,
                }
            case 'GotoPoringIslandPath7Fn':
                return {
                    ...state,
                    PoringIslandPath7: true,
                }
            case 'GotoPoringIslandPath8Fn':
                return {
                    ...state,
                    PoringIslandPath8: true,
                }
            case 'ReturnPoringIslandPathFn':
                return {
                    ...state,
                    PoringIslandPath1: false,
                    PoringIslandPath2: false,
                    PoringIslandPath3: false,
                    PoringIslandPath4: false,
                    PoringIslandPath5: false,
                    PoringIslandPath6: false,
                    PoringIslandPath7: false,
                    PoringIslandPath8: false,
                }
            //PayonCave PATH
            case 'GotoPayonCave1FPath1Fn':
                return{
                    ...state,
                    PayonCave1FPath1: true,
                }
            case 'GotoPayonCave1FPath2HiddenFn':
                return{
                    ...state,
                    PayonCave1FPath2Hidden: true,
                }
            case 'GotoPayonCave1FPath3HiddenFn':
                return{
                    ...state,
                    PayonCave1FPath3Hidden: true,
                }
            case 'GotoPayonCave2FPath1Fn':
                return{
                    ...state,
                    PayonCave2FPath1: true,
                }
            case 'GotoPayonCave2FPath2Fn':
                return{
                    ...state,
                    PayonCave2FPath2: true,
                }
            case 'GotoPayonCave2FPath3Fn':
                return{
                    ...state,
                    PayonCave2FPath3: true,
                }
            case 'GotoPayonCave2FPath4Fn':
                return{
                    ...state,
                    PayonCave2FPath4: true,
                }
            case 'GotoPayonCave2FPath5Fn':
                return{
                    ...state,
                    PayonCave2FPath5: true,
                }
            case 'GotoPayonCave2FPath6Fn':
                return{
                    ...state,
                    PayonCave2FPath6: true,
                }
            case 'GotoPayonCave2FPath7Fn':
                return{
                    ...state,
                    PayonCave2FPath7: true,
                }
            case 'GotoPayonCave2FPath8Fn':
                return{
                    ...state,
                    PayonCave2FPath8: true,
                }
            case 'GotoPayonCave2FPath9HiddenFn':
                return{
                    ...state,
                    PayonCave2FPath9Hidden: true,
                }
            case 'GotoPayonCave2FPath10HiddenFn':
                return{
                    ...state,
                    PayonCave2FPath10Hidden: true,
                }
            case 'GotoPayonCave3FPath1Fn':
                return{
                    ...state,
                    PayonCave3FPath1: true,
                }
            case 'GotoPayonCave3FPath2Fn':
                return{
                    ...state,
                    PayonCave3FPath2: true,
                }
            case 'GotoPayonCave3FPath3Fn':
                return{
                    ...state,
                    PayonCave3FPath3: true,
                }
            case 'GotoPayonCave3FPath4Fn':
                return{
                    ...state,
                    PayonCave3FPath4: true,
                }
            case 'ReturnPayonCavePathFn':
                return {
                    ...state,
                    PayonCave1FPath1: false,
                    PayonCave1FPath2Hidden: false,
                    PayonCave2FPath1: false,
                    PayonCave2FPath2: false,
                    PayonCave2FPath3: false,
                    PayonCave2FPath4: false,
                    PayonCave2FPath5: false,
                    PayonCave2FPath6: false,
                    PayonCave2FPath7: false,
                    PayonCave2FPath8: false,
                    PayonCave2FPath9Hidden: false,
                    PayonCave2FPath10Hidden: false,
                    PayonCave3FPath1: false,
                    PayonCave3FPath2: false,
                    PayonCave3FPath3: false,
                    PayonCave3FPath4: false,
                }
            //debug
            case 'PayonCave2FSelfNPCFn':
                return{
                    ...state,
                    UserUnlockPath:"",
                }
            //BattleLoadingScreen
            case 'BattleLoadingScreenFn':
                return{
                    ...state,
                    BattleLoadingScreen: !state.BattleLoadingScreen
                }
            case 'TrainingLoadingScreenFn':
                return{
                    ...state,
                    TrainingLoadingScreen: !state.TrainingLoadingScreen
                }
            case 'TrainingLoadingScreenDelayFn':
                return{
                    ...state,
                    TrainingLoadingScreenDelay: !state.TrainingLoadingScreenDelay
                }
        default:
            return state;
    }
}
export default screenControlRoomReducer;