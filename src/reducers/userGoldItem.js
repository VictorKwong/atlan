const Fn = {
    Zeny: 9000000,
    //Items
    RedPotion: 10,
    OrangePotion: 5,
    YellowPotion: 3,
    WhitePotion: 1,
    AnniversaryCake: 1,
    MastelaFruit: 1,
    BluePotion: 1,
    YggdrasilBerry: 10,
    //Weapons
    Katana: 1,
    BastardSword: 1,
    GaiaSword: 1,
    TwinEdgeofNaghtSieger: 1,
    VioletFear: 1,
    //Armor
    CottonShirt: 1,
    AdventureSuit: 1,
    WoodenMail: 1,
    Coat: 1,
    PaddedArmor: 1,
    ChainMail: 1,
    FullPlate: 1,
    //HeadGear
    LordKahosHorn: 1,
    TeddybearHat: 1,
    Crown: 1,
    Helm: 1,
    PandaHat: 1,
    ChefHat: 1,
    SantaPoringHat: 1,

    //Etc
    PoringIslandMap: 1,
    PayonCaveMap:1,
    GeffenDungeonMap:1,
    //MISC
    Lamp:88,
    //Mission
    SpiritOfEclipse: 0,
    SpiritOfWolyafa: 0,
    //PORING ISLAND
    Jellopy: 3,
    EmptyBottle: 5,
    StickyMucus: 5,
    Clover: 6,
    Feather: 1,
    GrasshoppersLeg: 1,
    SnailsShell: 1,
    Shell:1,
    Garlet:1,
    Emperium:1,
    Fabric:1,
    FourLeafClover:1,
    GlassBead:1,
    Opal:1,
    //PayonCave
    DecayedNail:1,
    SkelBone:1,
    Daenggie:1,
    ShortDaenggie:1,
    OldPortrait:1,
    BlackHair:1,
    AuthoritativeBadge:1,
    NineTails:1,
    //GeffenDungeon
    PoisonSpore:1,
    MushroomSpore:1,
    Karvodailnirol:1,
    JackPumpkin:1,
    Zargon:1,
    HorrendousMouth:1,
    Memento:1,



}



const userGoldItemReducer = (state = Fn, action) => {
    switch(action.type){
        //Items Shop
        case 'RedPotionFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                RedPotion: state.RedPotion + action.Item,
            }
        case 'OrangePotionFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                OrangePotion: state.OrangePotion + action.Item,
            }
        case 'YellowPotionFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                YellowPotion: state.YellowPotion + action.Item,
            }
        case 'WhitePotionFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                WhitePotion: state.WhitePotion + action.Item,
            }
        case 'AnniversaryCakeFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                AnniversaryCake: state.AnniversaryCake + action.Item,
            }
        case 'MastelaFruitFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                MastelaFruit: state.MastelaFruit + action.Item,
            }
        case 'BluePotionFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                BluePotion: state.BluePotion + action.Item,
            }
        case 'YggdrasilBerryFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                YggdrasilBerry: state.YggdrasilBerry + action.Item,
            }
        //ETC important
        case 'PoringIslandMapFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                PoringIslandMap: state.PoringIslandMap + action.Item,
            }
        case 'PayonCaveMapFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                PayonCaveMap: state.PayonCaveMap + action.Item,
            }
        case 'GeffenDungeonMapFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                GeffenDungeonMap: state.GeffenDungeonMap + action.Item,
            }

        //MISC
        case 'LampFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Lamp: state.Lamp + action.Item,
            }
        //MISSION
        case 'SpiritOfEclipseFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SpiritOfEclipse: state.SpiritOfEclipse + action.Item,
            }
        case 'SpiritOfWolyafaFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SpiritOfWolyafa: state.SpiritOfWolyafa + action.Item,
            }        
        //Weapons Shop
        case 'KatanaFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Katana: state.Katana + action.Item,
            }
        case 'BastardSwordFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                BastardSword: state.BastardSword + action.Item,
            }
        case 'GaiaSwordFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                GaiaSword: state.GaiaSword + action.Item,
            }
        case 'TwinEdgeofNaghtSiegerFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                TwinEdgeofNaghtSieger: state.TwinEdgeofNaghtSieger + action.Item,
            }
        case 'VioletFearFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                VioletFear: state.VioletFear + action.Item,
            }
        //Armors Shop
        case 'CottonShirtFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                CottonShirt: state.CottonShirt + action.Item,
            }
        case 'AdventureSuitFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                AdventureSuit: state.AdventureSuit + action.Item,
            }
        case 'WoodenMailFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                WoodenMail: state.WoodenMail + action.Item,
            }
        case 'CoatFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Coat: state.Coat + action.Item,
            }
        case 'PaddedArmorFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                PaddedArmor: state.PaddedArmor + action.Item,
            }

        case 'ChainMailFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                ChainMail: state.ChainMail + action.Item,
            }
        case 'FullPlateFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                FullPlate: state.FullPlate + action.Item,
            }
        //HeadGear Shop
        case 'LordKahosHornFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                LordKahosHorn: state.LordKahosHorn + action.Item,
            }
        case 'TeddybearHatFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                TeddybearHat: state.TeddybearHat + action.Item,
            }
        case 'CrownFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Crown: state.Crown + action.Item,
            }
        case 'HelmFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Helm: state.Helm + action.Item,
            }
        case 'PandaHatFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                PandaHat: state.PandaHat + action.Item,
            }
        case 'ChefHatFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                ChefHat: state.ChefHat + action.Item,
            }
        case 'SantaPoringHatFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SantaPoringHat: state.SantaPoringHat + action.Item,
            }
        //Battle USEAGE
        case 'UseRedPotionFn':
            return{
                ...state,
                RedPotion: state.RedPotion - 1,
            }
        case 'UseOrangePotionFn':
            return{
                ...state,
                OrangePotion: state.OrangePotion - 1,
            }
        case 'UseYellowPotionFn':
            return{
                ...state,
                YellowPotion: state.YellowPotion - 1,
            }
        case 'UseWhitePotionFn':
            return{
                ...state,
                WhitePotion: state.WhitePotion - 1,
            }
        case 'UseAnniversaryCakeFn':
            return{
                ...state,
                AnniversaryCake: state.AnniversaryCake - 1,
            }
        case 'UseMastelaFruitFn':
            return{
                ...state,
                MastelaFruit: state.MastelaFruit - 1,
            }
        case 'UseBluePotionFn':
            return{
                ...state,
                BluePotion: state.BluePotion - 1,
            }
        case 'UseYggdrasilBerryFn':
            return{
                ...state,
                YggdrasilBerry: state.YggdrasilBerry - 1,
            }


        //WIN Etc Items
        //PORING
        case 'WinJellopyFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Jellopy: state.Jellopy + action.Number
            }
        case 'WinEmptyBottleFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                EmptyBottle: state.EmptyBottle + action.Number
            }
        case 'WinStickyMucusFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                StickyMucus: state.StickyMucus + action.Number
            }
        //LUNATIC
        case 'WinCloverFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Clover: state.Clover + action.Number
            }
        case 'WinFeatherFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Feather: state.Feather + action.Number
            }
        //ROCKER
        case 'WinGrasshoppersLegFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                GrasshoppersLeg: state.GrasshoppersLeg + action.Number
            }
        //AMBERNITE
        case 'WinSnailsShellFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SnailsShell: state.SnailsShell + action.Number
            }
        case 'WinShellFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Shell: state.Shell + action.Number
            }
        case 'WinGarletFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Garlet: state.Garlet + action.Number
            }
        //GHOSTRING
        case 'WinEmperiumFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Emperium: state.Emperium + action.Number
            }
        case 'WinFabricFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Fabric: state.Fabric + action.Number
            }
        //ECLIPSE
        case 'WinFourLeafCloverFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                FourLeafClover: state.FourLeafClover + action.Number
            }
        case 'WinGlassBeadFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                GlassBead: state.GlassBead + action.Number
            }
        case 'WinOpalFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Opal: state.Opal + action.Number
            }
        case 'WinDecayedNailFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                DecayedNail: state.DecayedNail + action.Number,
            }
        case 'WinSkelBoneFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SkelBone: state.SkelBone + action.Number,
            }
        case 'WinDaenggieFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Daenggie: state.Daenggie + action.Number,
            }
        case 'WinShortDaenggieFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                ShortDaenggie: state.ShortDaenggie + action.Number,
            }
        case 'WinOldPortraitFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                OldPortrait: state.OldPortrait + action.Number,
            }
        case 'WinBlackHairFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                BlackHair: state.BlackHair + action.Number,
            }
        case 'WinAuthoritativeBadgeFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                AuthoritativeBadge: state.AuthoritativeBadge + action.Number,
            }
        case 'WinNineTailsFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                NineTails: state.NineTails + action.Number,
            }
        case 'WinPoisonSporeFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                PoisonSpore: state.PoisonSpore + action.Number,
            }
        case 'WinMushroomSporeFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                MushroomSpore: state.MushroomSpore + action.Number,
            }
        case 'WinKarvodailnirolFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Karvodailnirol: state.Karvodailnirol + action.Number,
            }
        case 'WinJackPumpkinFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                JackPumpkin: state.JackPumpkin + action.Number,
            }
        case 'WinZargonFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Zargon: state.Zargon + action.Number,
            }
        case 'WinHorrendousMouthFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                HorrendousMouth: state.HorrendousMouth + action.Number,
            }
        case 'WinMementoFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Memento: state.Memento + action.Number,
            }
        case 'WinResultFn':
            return{
                ...state,
                Zeny: state.Zeny + action.enemyZeny
            }

        default:
            return state;
    }
}
export default userGoldItemReducer;