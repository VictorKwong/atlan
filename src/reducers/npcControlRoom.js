const Fn = {
    //Mini Talk
    Fountain: false,
    KafraEmployee: false,
    QuestBoard: false,
    SoldierGuard1: false,
    SoldierGuard2: false,
    PronteraKing: false,
    RoyalGuard1: false,
    RoyalGuard2: false,
    PronteraAssistant: false,
    PronteraAssistantContinue: false,
    PronteraAssistantLearned: false,
    Kiwi:false,
    Lemon:false,
    Chocolate:false,
    IWantToJoinGuild:false,
    KiwiGuild:false,
    LemonGuild:false,
    ChocolateGuild:false,
    LemonResponse:false,
    LemonComplete:false,
    //Shop Talk
    WeaponDealer: false,
    ArmorDealer: false,
    GarmentDealer: false,
    ShoesDealer: false,
    HeadGearDealer: false,
    ToolDealer: false,
    //Shop Trade Fn
    DealerBuy: false,
    DealerSell: false,
    DealerBuySuccess: false,
    DealerBuyFailure: false,
    DealerSellSuccess: false,
    DealerSellFailure: false,
    //Training Rate Fn
    TrainingSuccess: false,
    TrainingFailure: false,
    TrainingMaterial: "",
    //Heal & Rest Fn
    KafraEmployeeHealState: false,
    ResetStatsPoint: false,
    ResetSkillPoint: false,
    //Geffen
    GeffenGoblinYulaNPC:false,
    GeffenGoblinYulaNPCInterest:false,
    GeffenGoblinYulaNPCLearned:false,
    GeffenCitizenNPC:false,
    GeffenCitizenNPCContinue:false,
    GeffenTimerNPC: false,
    GeffenGrandmaNPC: false,
    GeffenAccessoriesDealer: false,
    //PoringIsland Dungeon
    Chest1: false,
    Chest1VisitRepeat: false,
    Chest2: false,
    Chest2VisitRepeat: false,
    ChestBoss1: false,
    ChestBoss1VisitRepeat: false,
    PoringIslandBridgeNPC: false,
    PoringIslandBridgeNPCSelectOne: false,
    PoringIslandBridgeNPCSelectTwo: false,
    PoringIslandFairyNPC1:false,
    PoringIslandFairyNPC2:false,
    PoringIslandFairyNPCSelectOne: false,
    PoringIslandFairyNPCSelectTwo: false,
    BossEclipseDefeat: false,
    //PayonCave1F Dungeon
    PayonCaveChest3: false,
    PayonCaveChest3VisitRepeat: false,
    PayonCaveChest4: false,
    PayonCaveChest4VisitRepeat: false,
    PayonCaveChest5: false,
    PayonCaveChest5VisitRepeat: false,
    PayonCaveChest6: false,
    PayonCaveChest6VisitRepeat: false,
    ChestBoss2: false,
    ChestBoss2VisitRepeat: false,
    BossWolyafaDefeat: false,
    PayonCave1FSelfNPCHidden: false,
    PayonCave2FSelfNPC: false,
    PayonCave2FSelfNPCHidden: false,
    PayonCave2FCaveNPC: false,
    PayonCave3FCaveNPC: false,
    //GeffenDungeon
    GeffenDungeonChest1: false,
    GeffenDungeonChest1VisitRepeat: false,
    GeffenDungeonChest2: false,
    GeffenDungeonChest2VisitRepeat: false,
    GeffenDungeonChest3: false,
    GeffenDungeonChest3VisitRepeat: false,
    GeffenDungeonChest4: false,
    GeffenDungeonChest4VisitRepeat: false,
    ChestBoss3: false,
    ChestBoss3VisitRepeat: false,
    BossDoppelgangerDefeat: false,
    GeffenDungeon1FSelfNPC: false,
    GeffenDungeon1FNiaNPC: false,
    GeffenDungeon2FSelfNPC: false,
    GeffenDungeon2FRekiNPC: false,
    GeffenDungeon2FSelfNPCHidden: false,
    GeffenDungeon3FNiaNPC: false,
    BossBaphometDefeat:false,

}

const npcControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'TalktoKafraEmployeeFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: true,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                KafraEmployeeHealState: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,

            }
        case 'TalktoFountainFn':
            return {
                ...state,
                Fountain: true,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoQuestBoardFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: true,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoSoldierGuard1Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: true,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoSoldierGuard2Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: true,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoPronteraKingFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: true,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoRoyalGuard1Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: true,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoRoyalGuard2Fn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: true,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoPronteraAssistantFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: true,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoPronteraAssistantContinueFn':
            return {
                ...state,
                PronteraAssistantContinue: true,
            }
        case 'TalktoPronteraAssistantLearnedFn':
            return {
                ...state,
                PronteraAssistantLearned: true,
            }
        case 'TalktoKiwiFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:true,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoLemonFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:true,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoChocolateFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:true,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoIWantToJoinGuildFn':
            return {
                ...state,
                IWantToJoinGuild:true,
            }
        case 'TalktoKiwiGuildFn':
            return {
                ...state,
                KiwiGuild:true,
            }
        case 'TalktoChocolateGuildFn':
            return {
                ...state,
                ChocolateGuild:true,
            }
        case 'TalktoLemonGuildFn':
            return {
                ...state,
                LemonGuild:true,
            }
        case 'TalktoLemonResponseFn':
            return {
                ...state,
                LemonResponse:true,
                LemonComplete:false,
            }
        case 'TalktoLemonCompleteFn':
            return {
                ...state,
                LemonResponse:false,
                LemonComplete:true,
            }
        case 'ResetTalktoFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoWeaponDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: true,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoArmorDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: true,
                GarmentDealer: false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoGarmentDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: true,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoShoesDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer: true,
                HeadGearDealer: false,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoHeadGearDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: true,
                ToolDealer: false,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'TalktoToolDealerFn':
            return {
                ...state,
                Fountain: false,
                KafraEmployee: false,
                QuestBoard: false,
                SoldierGuard1: false,
                SoldierGuard2: false,
                PronteraKing: false,
                RoyalGuard1: false,
                RoyalGuard2: false,
                PronteraAssistant: false,
                PronteraAssistantContinue: false,
                WeaponDealer: false,
                ArmorDealer: false,
                GarmentDealer: false,
                ShoesDealer:false,
                HeadGearDealer: false,
                ToolDealer: true,
                DealerBuy: false,
                DealerSell: false,
                ResetStatsPoint: false,
                ResetSkillPoint: false,
                Kiwi:false,
                Lemon:false,
                Chocolate:false,
                IWantToJoinGuild:false,
                LemonResponse:false,
                LemonComplete:false,
            }
        case 'DealerBuyFn':
            return {
                ...state,
                DealerBuy: true,
                DealerSell: false,
                DealerBuySuccess: false,
                DealerBuyFailure: false,
                DealerSellSuccess: false,
                DealerSellFailure: false,
            }
        case 'DealerSellFn':
            return {
                ...state,
                DealerBuy: false,
                DealerSell: true,
                DealerBuySuccess: false,
                DealerBuyFailure: false,
                DealerSellSuccess: false,
                DealerSellFailure: false,
            }
        //Geffen
        case 'GeffenTimerNPCFn':
            return{
                ...state,
                GeffenGoblinYulaNPC: false,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: false,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC: true,
                GeffenGrandmaNPC: false,
                GeffenQuestBoard: false,
                GeffenSoldierNPC: false,
                GeffenAccessoriesDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case 'GeffenGoblinYulaNPCFn':
            return{
                ...state,
                GeffenGoblinYulaNPC: true,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: false,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC: false,
                GeffenGrandmaNPC: false,
                GeffenQuestBoard: false,
                GeffenSoldierNPC: false,
                GeffenAccessoriesDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case 'GeffenGoblinYulaNPCInterestFn':
            return{
                ...state,
                GeffenGoblinYulaNPCInterest: true,
            }
        case 'GeffenGoblinYulaNPCLearnedFn':
            return{
                ...state,
                GeffenGoblinYulaNPCLearned: true,
            }
        case 'GeffenGoblinYulaNPCLearnedFn':
            return{
                ...state,
                GeffenGoblinYulaNPCLearned: true,
            }
        case "GeffenCitizenNPCContinueFn":
            return{
                ...state,
                GeffenCitizenNPCContinue: true,
            }
        case "GeffenCitizenNPCFn":
            return {
                ...state,
                GeffenGoblinYulaNPC: false,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: true,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC:false,
                GeffenGrandmaNPC: false,
                GeffenQuestBoard: false,
                GeffenSoldierNPC: false,
                GeffenAccessoriesDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case "GeffenGrandmaNPCFn":
            return {
                ...state,
                GeffenGoblinYulaNPC: false,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: false,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC:false,
                GeffenGrandmaNPC: true,
                GeffenQuestBoard: false,
                GeffenSoldierNPC: false,
                GeffenAccessoriesDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case "GeffenQuestBoardFn":
            return {
                ...state,
                GeffenGoblinYulaNPC: false,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: false,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC: false,
                GeffenGrandmaNPC: false,
                GeffenQuestBoard: true,
                GeffenSoldierNPC: false,
                GeffenAccessoriesDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case "GeffenSoldierNPCFn":
            return {
                ...state,
                GeffenGoblinYulaNPC: false,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: false,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC:false,
                GeffenGrandmaNPC: false,
                GeffenQuestBoard: false,
                GeffenSoldierNPC: true,
                GeffenAccessoriesDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }
        case "GeffenAccessoriesDealerFn":
            return {
                ...state,
                GeffenGoblinYulaNPC: false,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: false,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC:false,
                GeffenGrandmaNPC: false,
                GeffenQuestBoard: false,
                GeffenSoldierNPC: false,
                GeffenAccessoriesDealer: true,
                DealerBuy: false,
                DealerSell: false,
            }
        case 'ResetGeffenNPCFn':
            return{
                ...state,
                GeffenGoblinYulaNPC: false,
                GeffenGoblinYulaNPCInterest: false,
                GeffenCitizenNPC: false,
                GeffenCitizenNPCContinue:false,
                GeffenTimerNPC: false,
                GeffenGrandmaNPC: false,
                GeffenQuestBoard: false,
                GeffenSoldierNPC: false,
                GeffenAccessoriesDealer: false,
                DealerBuy: false,
                DealerSell: false,
            }   
        //Inside BuySell Fn
        case 'DealerBuySuccessFn':
            return {
                ...state,
                DealerBuySuccess: true,
                DealerBuyFailure: false,
            }
        case 'DealerBuyFailureFn':
            return {
                ...state,
                DealerBuySuccess: false,
                DealerBuyFailure: true,
            }
        case 'DealerSellSuccessFn':
            return {
                ...state,
                DealerSellSuccess: true,
                DealerSellFailure: false,
            }
        case 'DealerSellFailureFn':
            return {
                ...state,
                DealerSellSuccess: false,
                DealerSellFailure: true,
            }
        //HEAL
        case 'KafraEmployeeHealStateFn':
            return{
                ...state,
                KafraEmployeeHealState: true,
            }
        //RESET STATS POINT
        case 'ResetStatsPointFn':
            return{
                ...state,
                ResetStatsPoint: true,
                ResetSkillPoint: false,
            }
        case 'ResetSkillPointFn':
            return{
                ...state,
                ResetStatsPoint: false,
                ResetSkillPoint: true,
            }
        case 'ResetDealerBuySellHealFn':
            return {
                ...state,
                DealerBuy: false,
                DealerSell: false,
                DealerBuySuccess: false,
                DealerBuyFailure: false,
                DealerSellSuccess: false,
                DealerSellFailure: false,
                KafraEmployeeHealState: false,
                ResetStatsPoint: false,
            }
        // Training Fn
        case 'TrainingSuccesFn':
            return {
                ...state,
                TrainingSuccess: true,
                TrainingFailure: false,
                TrainingMaterial: action.name,
                TrainingLevel: action.level
            }
        case 'TrainingFailureFn':
            return {
                ...state,
                TrainingSuccess: false,
                TrainingFailure: true,
                TrainingMaterial: action.name,
                TrainingLevel: action.level
            }
        case 'ResetTrainingRateFn':
            return {
                ...state,
                TrainingSuccess: false,
                TrainingFailure: false,
            }
        // DUNGEON
        case 'OpenChest1Fn':
            return {
                ...state,
                Chest1: true
            }
        case 'Chest1VisitRepeatFn':
            return {
                ...state,
                Chest1VisitRepeat: true
            }
        case 'OpenChest2Fn':
            return {
                ...state,
                Chest2: true
            }
        case 'Chest2VisitRepeatFn':
            return {
                ...state,
                Chest2VisitRepeat: true
            }
        case 'OpenChestBoss1Fn':
            return {
                ...state,
                ChestBoss1: true
            }
        case 'ChestBoss1VisitRepeatFn':
            return {
                ...state,
                ChestBoss1VisitRepeat: true
            }
        case 'BossEclipseDefeatFn':
            return {
                ...state,
                BossEclipseDefeat: true
            }
        case 'PoringIslandBridgeNPCFn':
            return {
                ...state,
                PoringIslandFairyNPC1: false,
                PoringIslandFairyNPC2: false,
                PoringIslandFairyNPCSelectOne:false,
                PoringIslandFairyNPCSelectTwo:false,
                PoringIslandBridgeNPC: true,
                PoringIslandBridgeNPCSelectOne: false,
                PoringIslandBridgeNPCSelectTwo: false,
                PoringIslandBridgeNPCSelectThree: false,
            }
        case 'PoringIslandFairyNPCSelectOneFn':
            return {
                ...state,
                PoringIslandFairyNPCSelectOne: true,
            }
        case 'PoringIslandFairyNPCSelectTwoFn':
            return {
                ...state,
                PoringIslandFairyNPCSelectTwo: true,
            }
        case 'PoringIslandBridgeNPCSelectOneFn':
            return {
                ...state,
                PoringIslandBridgeNPCSelectOne: true,
            }
        case 'PoringIslandBridgeNPCSelectTwoFn':
            return {
                ...state,
                PoringIslandBridgeNPCSelectTwo: true,
            }
        case 'PoringIslandBridgeNPCSelectThreeFn':
            return {
                ...state,
                PoringIslandBridgeNPCSelectThree: true,
            }
        case 'PoringIslandFairyNPC1Fn':
            return {
                ...state,
                PoringIslandFairyNPC1: true,
                PoringIslandFairyNPC2: false,
                PoringIslandFairyNPCSelectOne: false,
                PoringIslandFairyNPCSelectTwo: false,
                PoringIslandBridgeNPC: false,
                PoringIslandBridgeNPCSelectOne: false,
                PoringIslandBridgeNPCSelectTwo: false,
                PoringIslandBridgeNPCSelectThree: false,
            }
        case 'PoringIslandFairyNPC2Fn':
            return {
                ...state,
                PoringIslandFairyNPC1: false,
                PoringIslandFairyNPC2: true,
                PoringIslandFairyNPCSelectOne: false,
                PoringIslandFairyNPCSelectTwo: false,
                PoringIslandBridgeNPC: false,
                PoringIslandBridgeNPCSelectOne: false,
                PoringIslandBridgeNPCSelectTwo: false,
                PoringIslandBridgeNPCSelectThree: false,
            }
        case 'ResetPoringIslandNPCFn':
            return {
                ...state,
                PoringIslandFairyNPC1: false,
                PoringIslandFairyNPC2: false,
                PoringIslandFairyNPCSelectOne: false,
                PoringIslandFairyNPCSelectTwo: false,
                PoringIslandBridgeNPC: false,
                PoringIslandBridgeNPCSelectOne: false,
                PoringIslandBridgeNPCSelectTwo: false,
                PoringIslandBridgeNPCSelectThree: false,
            }
        //PayonCave
        case 'OpenPayonCaveChest3Fn':
            return {
                ...state,
                PayonCaveChest3: true
            }
        case 'PayonCaveChest3VisitRepeatFn':
            return {
                ...state,
                PayonCaveChest3VisitRepeat: true
            }
        case 'OpenPayonCaveChest4Fn':
            return {
                ...state,
                PayonCaveChest4: true
            }
        case 'PayonCaveChest4VisitRepeatFn':
            return {
                ...state,
                PayonCaveChest4VisitRepeat: true
            }
        case 'OpenPayonCaveChest5Fn':
            return {
                ...state,
                PayonCaveChest5: true
            }
        case 'PayonCaveChest5VisitRepeatFn':
            return {
                ...state,
                PayonCaveChest5VisitRepeat: true
            }
        case 'OpenPayonCaveChest6Fn':
            return {
                ...state,
                PayonCaveChest6: true
            }
        case 'PayonCaveChest6VisitRepeatFn':
            return {
                ...state,
                PayonCaveChest6VisitRepeat: true
            }
        case 'OpenChestBoss2Fn':
            return {
                ...state,
                ChestBoss2: true
            }
        case 'ChestBoss2VisitRepeatFn':
            return {
                ...state,
                ChestBoss2VisitRepeat: true
            }
        case 'BossWolyafaDefeatFn':
            return {
                ...state,
                BossWolyafaDefeat: true
            }
        case 'PayonCave1FSelfNPCHiddenFn':
            return {
                ...state,
                PayonCave1FSelfNPCHidden: true,
                PayonCave2FSelfNPC: false,
                PayonCave2FFairyNPC1: false,
                PayonCave2FSelfNPCHidden: false,
                PayonCave2FCaveNPC: false,
                PayonCave3FCaveNPC: false,
            }
        case 'PayonCave2FSelfNPCFn':
            return {
                ...state,
                PayonCave1FSelfNPCHidden: false,
                PayonCave2FSelfNPC: true,
                PayonCave2FFairyNPC1: false,
                PayonCave2FSelfNPCHidden: false,
                PayonCave2FCaveNPC: false,
                PayonCave3FCaveNPC: false,
            }
        case 'PayonCave2FFairyNPC1Fn':
            return {
                ...state,
                PayonCave1FSelfNPCHidden: false,
                PayonCave2FSelfNPC: false,
                PayonCave2FFairyNPC1: true,
                PayonCave2FSelfNPCHidden: false,
                PayonCave2FCaveNPC: false,
                PayonCave3FCaveNPC: false,
            }
        case 'PayonCave2FSelfNPCHiddenFn':
            return {
                ...state,
                PayonCave1FSelfNPCHidden: false,
                PayonCave2FSelfNPC: false,
                PayonCave2FFairyNPC1: false,
                PayonCave2FSelfNPCHidden: true,
                PayonCave2FCaveNPC: false,
                PayonCave3FCaveNPC: false,
            }
        case 'PayonCave2FCaveNPCFn':
            return {
                ...state,
                PayonCave1FSelfNPCHidden: false,
                PayonCave2FSelfNPC: false,
                PayonCave2FFairyNPC1: false,
                PayonCave2FSelfNPCHidden: false,
                PayonCave2FCaveNPC: true,
                PayonCave3FCaveNPC: false,
            }
        case 'PayonCave3FCaveNPCFn':
            return {
                ...state,
                PayonCave1FSelfNPCHidden: false,
                PayonCave2FSelfNPC: false,
                PayonCave2FFairyNPC1: false,
                PayonCave2FSelfNPCHidden: false,
                PayonCave2FCaveNPC: false,
                PayonCave3FCaveNPC: true,
            }   
        case 'ResetPayonCaveNPCFn':
            return {
                ...state,
                PayonCave1FSelfNPCHidden: false,
                PayonCave2FSelfNPC: false,
                PayonCave2FFairyNPC1: false,
                PayonCave2FSelfNPCHidden: false,
                PayonCave2FCaveNPC: false,
                PayonCave3FCaveNPC: false,
            }
        case 'GeffenDungeon1FSelfNPCFn':
            return {
                ...state,
                GeffenDungeon1FSelfNPC: true,
                GeffenDungeon1FNiaNPC: false,
                GeffenDungeon2FSelfNPC: false,
                GeffenDungeon2FRekiNPC: false,
                GeffenDungeon2FSelfNPCHidden: false,
            }
        case 'GeffenDungeon1FNiaNPCFn':
            return {
                ...state,
                GeffenDungeon1FSelfNPC: false,
                GeffenDungeon1FNiaNPC: true,
                GeffenDungeon2FSelfNPC: false,
                GeffenDungeon2FRekiNPC: false,
                GeffenDungeon2FSelfNPCHidden: false,
            }
        case 'GeffenDungeon2FSelfNPCFn':
            return {
                ...state,
                GeffenDungeon1FSelfNPC: false,
                GeffenDungeon1FNiaNPC: false,
                GeffenDungeon2FSelfNPC: true,
                GeffenDungeon2FRekiNPC: false,
                GeffenDungeon2FSelfNPCHidden: false,
            }
        case 'GeffenDungeon2FRekiNPCFn':
            return {
                ...state,
                GeffenDungeon1FSelfNPC: false,
                GeffenDungeon1FNiaNPC: false,
                GeffenDungeon2FSelfNPC: false,
                GeffenDungeon2FRekiNPC: true,
                GeffenDungeon2FSelfNPCHidden: false,
            }
        case 'GeffenDungeon2FSelfNPCHiddenFn':
            return {
                ...state,
                GeffenDungeon1FSelfNPC: false,
                GeffenDungeon1FNiaNPC: false,
                GeffenDungeon2FSelfNPC: false,
                GeffenDungeon2FRekiNPC: false,
                GeffenDungeon2FSelfNPCHidden: true,
            }
        case 'GeffenDungeon3FNiaNPCFn':
            return {
                ...state,
                GeffenDungeon3FNiaNPC: true,
            }
        case 'ResetGeffenDungeonNPCFn':
            return {
                ...state,
                GeffenDungeon1FSelfNPC: false,
                GeffenDungeon1FNiaNPC: false,
                GeffenDungeon2FSelfNPC: false,
                GeffenDungeon2FRekiNPC: false,
                GeffenDungeon2FSelfNPCHidden: false,
                GeffenDungeon3FNiaNPC: false,
            }
        case 'OpenGeffenDungeonChest1Fn':
            return {
                ...state,
                GeffenDungeonChest1: true
            }
        case 'GeffenDungeonChest1VisitRepeatFn':
            return {
                ...state,
                GeffenDungeonChest1VisitRepeat: true
            }
        case 'OpenGeffenDungeonChest2Fn':
            return {
                ...state,
                GeffenDungeonChest2: true
            }
        case 'GeffenDungeonChest2VisitRepeatFn':
            return {
                ...state,
                GeffenDungeonChest2VisitRepeat: true
            }
        case 'OpenGeffenDungeonChest3Fn':
            return {
                ...state,
                GeffenDungeonChest3: true
            }
        case 'GeffenDungeonChest3VisitRepeatFn':
            return {
                ...state,
                GeffenDungeonChest3VisitRepeat: true
            }
        case 'OpenGeffenDungeonChest4Fn':
            return {
                ...state,
                GeffenDungeonChest4: true
            }
        case 'GeffenDungeonChest4VisitRepeatFn':
            return {
                ...state,
                GeffenDungeonChest4VisitRepeat: true
            }
        case 'OpenChestBoss3Fn':
            return {
                ...state,
                ChestBoss3: true
            }
        case 'ChestBoss3VisitRepeatFn':
            return {
                ...state,
                ChestBoss3VisitRepeat: true
            }
        case 'BossDoppelgangerDefeatFn':
            return {
                ...state,
                BossDoppelgangerDefeat: true
            }
        case 'BossBaphometDefeatFn':
            return {
                ...state,
                BossBaphometDefeat: true
            }
        case 'ResetGameFn':
            return{
                ...state,
                LemonResponse:false,
                LemonComplete:false,
                //PoringIsland Dungeon
                Chest1: false,
                Chest1VisitRepeat: false,
                Chest2: false,
                Chest2VisitRepeat: false,
                ChestBoss1: false,
                ChestBoss1VisitRepeat: false,
                BossEclipseDefeat: false,
                //PayonCave1F Dungeon
                PayonCaveChest3: false,
                PayonCaveChest3VisitRepeat: false,
                PayonCaveChest4: false,
                PayonCaveChest4VisitRepeat: false,
                PayonCaveChest5: false,
                PayonCaveChest5VisitRepeat: false,
                PayonCaveChest6: false,
                PayonCaveChest6VisitRepeat: false,
                ChestBoss2: false,
                ChestBoss2VisitRepeat: false,
                BossWolyafaDefeat: false,
                //GeffenDungeon
                GeffenDungeonChest1: false,
                GeffenDungeonChest1VisitRepeat: false,
                GeffenDungeonChest2: false,
                GeffenDungeonChest2VisitRepeat: false,
                GeffenDungeonChest3: false,
                GeffenDungeonChest3VisitRepeat: false,
                GeffenDungeonChest4: false,
                GeffenDungeonChest4VisitRepeat: false,
                ChestBoss3: false,
                ChestBoss3VisitRepeat: false,
                BossDoppelgangerDefeat: false,
                BossBaphometDefeat:false,
            }
        default:
            return state;
    }
}
export default npcControlRoomReducer;