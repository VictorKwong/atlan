import { SET_CURRENT_SCREEN } from '../actions/types.js';

const Fn = {
    authorLogo: false,
    startGame: false,
    gameTitleOptionScreen: false,
    //Open
    storyLineTalent: false,
    storyLineOne: false,
    //EclipseBoss
    storyLineTwo: false,
    cutsceneTwo: false,
    //Wolyafa
    storyLineThree: false,
    cutsceneThree: false,
    //Doppelganger
    storyLineFour: false,
    cutsceneFour: false,
    storyLineFive: false,
    cutsceneFive: false,
    //Baphomet
    storyLineSix: false,
    cutsceneSix: false,
    storyLineSeven: false,
    cutsceneSeven: false,
    //End
    storyLineEnd: false,
    cutsceneEnd: false,
    WorldMap: false,
    Prontera: false,
    PronteraSouth: false,
    PoringIsland: false,
    Geffen: false,
    PayonCave1F: false,
    GeffenDungeon1F: false,
    GeffenDungeon2F: false,
    GeffenDungeon3F: false,
    GeffenDungeon4F: false,
    
    //PORING ISLAND BATTLE
    BattlePoringIslandMap: false,
    BattlePoringIslandMapMonsterID: 0,
    BattlePoringIslandMapMonsterIDTwo: 0,
    BattlePoringIslandMapMonsterIDThree: 0,
    //Loading Screen
    BattleLoadingScreen: false,
    NextMapLoadingScreen: false,
    NextWorldMapLoadingScreen: false,
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
    PoringIslandPath8: false,
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
    PayonCave1FPath2Hidden: true,
    PayonCave1FPath3Hidden: true,
    PayonCave2FPath1: true,
    PayonCave2FPath2: true,
    PayonCave2FPath3: true,
    PayonCave2FPath4: true,
    PayonCave2FPath5: true,
    PayonCave2FPath6: true,
    PayonCave2FPath7: true,
    PayonCave2FPath8: true,
    PayonCave2FPath9Hidden: true,
    PayonCave2FPath10Hidden: true,
    PayonCave3FPath1: true,
    PayonCave3FPath2: true,
    PayonCave3FPath3: true,
    PayonCave3FPath4: true,
    //Geffen Dungeon PATH
    GeffenDungeon1FPath1: true,
    GeffenDungeon1FPath2: true,
    GeffenDungeon1FPath3: true,
    GeffenDungeon1FPath4: true,
    GeffenDungeon2FPath1: true,
    GeffenDungeon2FPath2: true,
    GeffenDungeon2FPath3: true,
    GeffenDungeon2FPath4: true,
    GeffenDungeon2FPath5: true,
    GeffenDungeon2FPath6: true,
    GeffenDungeon2FPath7Hidden: true,
    GeffenDungeon3FPath1: true,
    GeffenDungeon3FPath2: true,
    GeffenDungeon3FPath3: true,
    GeffenDungeon3FPath4: true,
    GeffenDungeon3FPath5Hidden: true,
    GeffenDungeon4FPath1: true,
    //Final Boss
    FinalBossPath: false,
    //ChallengeTower
    ChallengeTowerPath1: true,
    ChallengeTowerPath2: true,
    ChallengeTowerPath3: true,
    //UserUnlockPath 0-8, 5-8 hidden
    UserUnlockPath: "Path0",
    //Mini Screen (StoryMap)
    AltanEquipment: false,
    AltanStats: false,
    AltanItem: false,
    AltanQuest: false,
    AltanSkills: false,
    //Mini Screen (Shop)
    PronteraHeadGearDealer: false,
    PronteraToolDealer: false,
    PronteraWeaponArmorDealer: false,
    PronteraCastle:false,
    GeffenAccessoriesDealer: false,
    //Mini Screen (StoryChat)
    WeaponEquipmentChoice: false,
    ArmorEquipmentChoice: false,
    HeadGearEquipmentChoice: false,
    FootGearEquipmentChoice: false,
    GarmentEquipmentChoice: false,
    AccessoryOneEquipmentChoice: false,
    AccessoryTwoEquipmentChoice: false,
    ImageEquipment:0,
    ItemChoice: false,
    EquipChoice: false,
    ETCChoice: false,
    StatsChoice: false,
    GiftChoice: false,
    GuildChoice: false,
    //SkillTrainingFn
    FirstAidTraining: false,
    BashTraining: false,
    MammoniteTraining: false,
    KodokuTraining: false,
    MagnumBreakTraining: false,
    HeadCrushTraining: false,
    QuickenTraining: false,
    VitalStrikeTraining: false,
    BowlingBashTraining: false,
    //Challenge Tower Late Game
    UnlockChallengeTower:false,
    currentScreen: 'opening'
}

const screenControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case SET_CURRENT_SCREEN:
            return {
              ...state,
              currentScreen: action.screen,
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
        case 'storyLineTalentFn':
            return {
                ...state,
                storyLineTalent: action.walkthrough
            }
        case 'finishStoryLineOneFn':
            return {
                ...state,
                storyLineOne: true,
            }
        case 'cutsceneTwoFn':
            return {
                ...state,
                cutsceneTwo: !state.cutsceneTwo,
                PoringIsland: false,
            }
        case 'finishStoryLineTwoFn':
            return {
                ...state,
                cutsceneTwo: false,
                storyLineTwo: true,
            }
        case 'cutsceneThreeFn':
            return {
                ...state,
                cutsceneThree: !state.cutsceneThree,
                PayonCave1F: false,
                PayonCave2F: false,
                PayonCave3F: false,
            }
        case 'finishStoryLineThreeFn':
            return {
                ...state,
                cutsceneThree: false,
                storyLineThree: true,
            }
        case 'cutsceneFourFn':
            return {
                ...state,
                cutsceneFour: !state.cutsceneFour,
                GeffenDungeon3F: false,
            }
        case 'finishStoryLineFourFn':
            return {
                ...state,
                cutsceneFour: false,
                storyLineFour: true,
            }
        case 'cutsceneFiveFn':
            return {
                ...state,
                cutsceneFive: !state.cutsceneFive,
                BattlePoringIslandMap: false,
            }
        case 'finishStoryLineFiveFn':
            return {
                ...state,
                cutsceneFive: false,
                storyLineFive: true,
            }
        case 'cutsceneSixFn':
            return {
                ...state,
                cutsceneSix: !state.cutsceneSix,
                WorldMap: false,
            }
        case 'finishStoryLineSixFn':
            return {
                ...state,
                cutsceneSix: false,
                storyLineSix: true,
            }
        case 'cutsceneSevenFn':
            return {
                ...state,
                cutsceneSeven: !state.cutsceneSeven,
                BattlePoringIslandMap: false,
            }
        case 'finishStoryLineSevenFn':
            return {
                ...state,
                cutsceneSeven: false,
                storyLineSeven: true,
            }
        case 'cutsceneEndFn':
            return {
                ...state,
                cutsceneEnd: !state.cutsceneEnd,
            }
        case 'finishStoryLineEndFn':
            return {
                ...state,
                cutsceneEnd: false,
                storyLineEnd: true,
            }
        // Mini Screen
        case 'GotoAltanEquipmentFn':
            return {
                ...state,
                AltanEquipment: !state.AltanEquipment,
                AltanStats: false,
                AltanItem: false,
                AltanQuest: false,
                AltanSkills: false,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                //Skills
                FirstAidTraining: false,
                BashTraining: false,
                MammoniteTraining: false,
                KodokuTraining: false,
                MagnumBreakTraining: false,
                HeadCrushTraining: false,
                QuickenTraining: false,
                VitalStrikeTraining: false,
                BowlingBashTraining: false,
            }
        case 'GotoAltanStatsFn':
            return {
                ...state,
                AltanEquipment: false,
                AltanStats: !state.AltanStats,
                AltanItem: false,
                AltanQuest: false,
                AltanSkills: false,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                StatsChoice: true,
                GiftChoice: false,
                GuildChoice: false,
                //Skills
                FirstAidTraining: false,
                BashTraining: false,
                MammoniteTraining: false,
                KodokuTraining: false,
                MagnumBreakTraining: false,
                HeadCrushTraining: false,
                QuickenTraining: false,
                VitalStrikeTraining: false,
                BowlingBashTraining: false,
                
            }
        case 'GotoAltanItemFn':
            return {
                ...state,
                AltanEquipment: false,
                AltanStats: false,
                AltanItem: !state.AltanItem,
                AltanQuest: false,
                AltanSkills: false,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                ItemChoice: true,
                EquipChoice: false,
                ETCChoice: false,
                //Skills
                FirstAidTraining: false,
                BashTraining: false,
                MammoniteTraining: false,
                KodokuTraining: false,
                MagnumBreakTraining: false,
                HeadCrushTraining: false,
                QuickenTraining: false,
                VitalStrikeTraining: false,
                BowlingBashTraining: false,
            }
        case 'GotoAltanQuestFn':
            return {
                ...state,
                AltanEquipment: false,
                AltanStats: false,
                AltanItem: false,
                AltanQuest: !state.AltanQuest,
                AltanSkills: false,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                //Skills
                FirstAidTraining: false,
                BashTraining: false,
                MammoniteTraining: false,
                KodokuTraining: false,
                MagnumBreakTraining: false,
                HeadCrushTraining: false,
                QuickenTraining: false,
                VitalStrikeTraining: false,
                BowlingBashTraining: false,
            }
        case 'GotoAltanSkillsFn':
            return {
                ...state,
                AltanEquipment: false,
                AltanStats: false,
                AltanItem: false,
                AltanQuest: false,
                AltanSkills: !state.AltanSkills,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                //Skills
                FirstAidTraining: false,
                BashTraining: false,
                MammoniteTraining: false,
                KodokuTraining: false,
                MagnumBreakTraining: false,
                HeadCrushTraining: false,
                QuickenTraining: false,
                VitalStrikeTraining: false,
                BowlingBashTraining: false,
            }
        case 'GotoWeaponEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: true,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                ImageEquipment:0,
            }
        case 'GotoArmorEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: true,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                ImageEquipment:0,
            }
        case 'GotoHeadGearEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: true,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                ImageEquipment:0,
            }
        case 'GotoFootGearEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: true,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                ImageEquipment:0,
            }
        case 'GotoGarmentEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: true,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: false,
                ImageEquipment:0,
            }
        case 'GotoAccessoryOneEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: true,
                AccessoryTwoEquipmentChoice: false,
                ImageEquipment:0,
            }
        case 'GotoAccessoryTwoEquipmentChoiceFn':
            return {
                ...state,
                WeaponEquipmentChoice: false,
                ArmorEquipmentChoice: false,
                HeadGearEquipmentChoice: false,
                FootGearEquipmentChoice: false,
                GarmentEquipmentChoice: false,
                AccessoryOneEquipmentChoice: false,
                AccessoryTwoEquipmentChoice: true,
                ImageEquipment:0,
            }
        case 'GotoImageEquipmentFn':
            return{
                ...state,
                ImageEquipment:action.ImageEquipment
            }
        case 'STRPointsFn':
        case 'AGIPointsFn':
        case 'VITPointsFn':
        case 'INTPointsFn':
        case 'DEXPointsFn':
        case 'LUKPointsFn':
            return{
                ...state,
                ImageEquipment:0,
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
                GiftChoice: false,
                GuildChoice: false,
            }
        case 'GotoGiftChoiceFn':
            return {
                ...state,
                StatsChoice: false,
                GiftChoice: true,
                GuildChoice: false,
            }
        case 'GotoGuildChoiceFn':
            return {
                ...state,
                StatsChoice: false,
                GiftChoice: false,
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
        case 'ReturnFootGearEquipmentChoiceFn':
            return {
                ...state,
                FootGearEquipmentChoice: false,
            }
        case 'ReturnGarmentEquipmentChoiceFn':
            return {
                ...state,
                GarmentEquipmentChoice: false,
            }
        case 'ReturnAccessoryOneEquipmentChoiceFn':
            return {
                ...state,
                AccessoryOneEquipmentChoice: false,
            }
        case 'ReturnAccessoryTwoEquipmentChoiceFn':
            return {
                ...state,
                AccessoryTwoEquipmentChoice: false,
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
        case 'GotoGeffenAccessoriesDealerFn':
            return {
                ...state,
                GeffenAccessoriesDealer: !state.GeffenAccessoriesDealer,
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
                Geffen: false,
                GeffenDungeon1F: false,
                GeffenDungeon2F: false,
                GeffenDungeon3F: false,
                GeffenDungeon4F: false,
                PayonCave1F: false,
                PayonCave2F: false,
                ChallengeTower: false,
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
                    Geffen: false,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    ChallengeTower: false,
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
                    Geffen: false,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    UserLocation: "Path0",
                    ChallengeTower: false,
                }
            case 'GotoChallengeTowerFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    Geffen: false,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    UserLocation: "Path0",
                    ChallengeTower: true,
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
                    Geffen: false,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    ChallengeTower: false,
                }
            case 'GotoBattlePoringIslandMapFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: !state.BattlePoringIslandMap,
                    BattlePoringIslandMapMonsterID: action.num,
                    BattlePoringIslandMapMonsterIDTwo: action.numTwo,
                    BattlePoringIslandMapMonsterIDThree: action.numThree,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    Geffen: false,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    ChallengeTower: false,
                    UserUnlockPath: action.Path
                }
            case 'GotoGeffenFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    Geffen: true,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    UserLocation: "",
                    ChallengeTower: false,
                }
            case 'GotoGeffenDungeon1FFn':
                return {
                    ...state,
                    WorldMap: false,
                    BattlePoringIslandMap: false,
                    Prontera: false,
                    PronteraCastle: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    Geffen: false,
                    GeffenDungeon1F: true,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    PayonCave1F: false,
                    PayonCave2F: false,
                    UserLocation: "",
                    ChallengeTower: false,
                }
            case 'GotoGeffenDungeon2FFn':
                return {
                    ...state,
                    GeffenDungeon1F: true,
                    GeffenDungeon2F: true,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    BattlePoringIslandMap: false,
                    UserLocation: ""
                }
            case 'GotoGeffenDungeon3FFn':
                return {
                    ...state,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: true,
                    GeffenDungeon4F: false,
                    BattlePoringIslandMap: false,
                    UserLocation: ""
                }
            case 'GotoGeffenDungeon4FFn':
                return {
                    ...state,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: true,
                    GeffenDungeon4F: true,
                    BattlePoringIslandMap: false,
                    UserLocation: ""
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
                    Geffen: false,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    PayonCave1F: true,
                    PayonCave2F: false,
                    UserLocation: "PayonCavePath0",
                    ChallengeTower: false,
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
            //GEFFEN TOWER
            case 'GotoGeffenDungeon1FPath1Fn':
                return{
                    ...state,
                    GeffenDungeon1FPath1: true,
                }
            case 'GotoGeffenDungeon1FPath2Fn':
                return{
                    ...state,
                    GeffenDungeon1FPath2: true,
                }
            case 'GotoGeffenDungeon1FPath3Fn':
                return{
                    ...state,
                    GeffenDungeon1FPath3: true,
                }
            case 'GotoGeffenDungeon1FPath4Fn':
                return{
                    ...state,
                    GeffenDungeon1FPath4: true,
                }
            //Split 0
            case 'GotoGeffenDungeon2FPath1Fn':
                return{
                    ...state,
                    GeffenDungeon2FPath1: true,
                }
            case 'GotoGeffenDungeon2FPath2Fn':
                return{
                    ...state,
                    GeffenDungeon2FPath2: true,
                }
            case 'GotoGeffenDungeon2FPath3Fn':
                return{
                    ...state,
                    GeffenDungeon2FPath3: true,
                }
            //Split 1
            case 'GotoGeffenDungeon2FPath4Fn':
                return{
                    ...state,
                    GeffenDungeon2FPath4: true,
                }
            case 'GotoGeffenDungeon2FPath5Fn':
                return{
                    ...state,
                    GeffenDungeon2FPath5: true,
                }
            case 'GotoGeffenDungeon2FPath6Fn':
                return{
                    ...state,
                    GeffenDungeon2FPath6: true,
                }
            case 'GotoGeffenDungeon2FPath7HiddenFn':
                return{
                    ...state,
                    GeffenDungeon2FPath7Hidden: true,
                }
            case 'GotoGeffenDungeon3FPath1Fn':
                return{
                    ...state,
                    GeffenDungeon3FPath1: true,
                }
            case 'GotoGeffenDungeon3FPath2Fn':
                return{
                    ...state,
                    GeffenDungeon3FPath2: true,
                }
            case 'GotoGeffenDungeon3FPath3Fn':
                return{
                    ...state,
                    GeffenDungeon3FPath3: true,
                }
            case 'GotoGeffenDungeon3FPath4Fn':
                return{
                    ...state,
                    GeffenDungeon3FPath4: true,
                }
            case 'GotoGeffenDungeon3FPath5HiddenFn':
                return{
                    ...state,
                    GeffenDungeon3FPath5Hidden: true,
                }
            case 'GotoGeffenDungeon4FPath1Fn':
                return{
                    ...state,
                    GeffenDungeon4FPath1: true,
                }
            case 'ReturnGeffenDungeonPathFn':
                return {
                    ...state,
                    GeffenDungeon1FPath1: false,
                    GeffenDungeon1FPath2: false,
                    GeffenDungeon1FPath3: false,
                    GeffenDungeon1FPath4: false,
                    GeffenDungeon2FPath1: false,
                    GeffenDungeon2FPath2: false,
                    GeffenDungeon2FPath3: false,
                    GeffenDungeon2FPath4: false,
                    GeffenDungeon2FPath5: false,
                    GeffenDungeon2FPath6: false,
                    GeffenDungeon2FPath7Hidden: false,
                    GeffenDungeon3FPath1: false,
                    GeffenDungeon3FPath2: false,
                    GeffenDungeon3FPath3: false,
                    GeffenDungeon3FPath4: false,
                    GeffenDungeon3FPath5Hidden: false,
                    GeffenDungeon4FPath1: false,
                }
            //Challenge Tower
            case 'GotoChallengeTowerPath1Fn':
                return{
                    ...state,
                    ChallengeTowerPath1: true,
                }
            case 'GotoChallengeTowerPath2Fn':
                return{
                    ...state,
                    ChallengeTowerPath2: true,
                }
            case 'GotoChallengeTowerPath3Fn':
                return{
                    ...state,
                    ChallengeTowerPath3: true,
                }
            case 'ReturnChallengeTowerPathFn':
                return{
                    ...state,
                    ChallengeTowerPath1: false,
                    ChallengeTowerPath2: false,
                    ChallengeTowerPath3: false,
                }
            case 'FinalBossPathFn':
                return{
                    ...state,
                    FinalBossPath: true,
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
            //nextMap
            case 'NextMapLoadingScreenFn':
                return{
                    ...state,
                    NextMapLoadingScreen: !state.NextMapLoadingScreen
                }
            case 'NextWorldMapLoadingScreenFn':
                return{
                    ...state,
                    NextWorldMapLoadingScreen: !state.NextWorldMapLoadingScreen
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
            //SkillTraining
            case 'FirstAidTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: !state.FirstAidTraining,
                    BashTraining: false,
                    MammoniteTraining: false,
                    KodokuTraining: false,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: false,
                    QuickenTraining: false,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: false,
                }
            case 'BashTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: !state.BashTraining,
                    MammoniteTraining: false,
                    KodokuTraining: false,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: false,
                    QuickenTraining: false,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: false,
                }
            case 'MammoniteTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: false,
                    MammoniteTraining: !state.MammoniteTraining,
                    KodokuTraining: false,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: false,
                    QuickenTraining: false,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: false,
                }
            case 'KodokuTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: false,
                    MammoniteTraining: false,
                    KodokuTraining: !state.KodokuTraining,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: false,
                    QuickenTraining: false,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: false,
                }
            case 'MagnumBreakTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: false,
                    MammoniteTraining: false,
                    KodokuTraining: false,
                    MagnumBreakTraining: !state.MagnumBreakTraining,
                    HeadCrushTraining: false,
                    QuickenTraining: false,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: false,
                }
            case 'HeadCrushTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: false,
                    MammoniteTraining: false,
                    KodokuTraining: false,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: !state.HeadCrushTraining,
                    QuickenTraining: false,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: false,
                }
            case 'QuickenTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: false,
                    MammoniteTraining: false,
                    KodokuTraining: false,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: false,
                    QuickenTraining: !state.QuickenTraining,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: false,
                }
            case 'VitalStrikeTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: false,
                    MammoniteTraining: false,
                    KodokuTraining: false,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: false,
                    QuickenTraining: false,
                    VitalStrikeTraining: !state.VitalStrikeTraining,
                    BowlingBashTraining: false,
                }
            case 'BowlingBashTrainingFn':
                return{
                    ...state,
                    FirstAidTraining: false,
                    BashTraining: false,
                    MammoniteTraining: false,
                    KodokuTraining: false,
                    MagnumBreakTraining: false,
                    HeadCrushTraining: false,
                    QuickenTraining: false,
                    VitalStrikeTraining: false,
                    BowlingBashTraining: !state.BowlingBashTraining,
                }
            case 'ResetGameFn':
                return{
                    ...state,
                    authorLogo: true,
                    startGame: false,
                    gameTitleOptionScreen: false,
                    //Open
                    storyLineOne: false,
                    //EclipseBoss
                    storyLineTwo: false,
                    cutsceneTwo: false,
                    //Wolyafa
                    storyLineThree: false,
                    cutsceneThree: false,
                    //Doppelganger
                    storyLineFour: false,
                    cutsceneFour: false,
                    storyLineFive: false,
                    cutsceneFive: false,
                    //Baphomet
                    storyLineSix: false,
                    cutsceneSix: false,
                    storyLineSeven: false,
                    cutsceneSeven: false,
                    //End
                    storyLineEnd: false,
                    cutsceneEnd: false,
                    WorldMap: false,
                    Prontera: false,
                    PronteraSouth: false,
                    PoringIsland: false,
                    Geffen: false,
                    PayonCave1F: false,
                    GeffenDungeon1F: false,
                    GeffenDungeon2F: false,
                    GeffenDungeon3F: false,
                    GeffenDungeon4F: false,
                    //PORING ISLAND BATTLE
                    BattlePoringIslandMap: false,
                    BattlePoringIslandMapMonsterID: 0,
                    BattlePoringIslandMapMonsterIDTwo: 0,
                    BattlePoringIslandMapMonsterIDThree: 0,
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
                    UnlockChallengeTower: true,
                }
                case 'returnToTitleScreenFn':
                    return {
                        ...state,
                        gameTitleOptionScreen: !state.gameTitleOptionScreen,
                }
                
        default:
            return state;
    }
}
export default screenControlRoomReducer;