const Fn = {
    Zeny: 20000,
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
    //FootGear
    Sandals:1,
    Shoes:1,
    Boots:1,
    Greaves:1,
    BunnySlipper:1,
    TidalShoes:1,
    SiegeBoots:1,
    SiegeGreaves:1,
    VidarsBoots:1,
    VitalTreeShoes:1,
    VariantShoes:1,
    Sleipnir:1,
    //Garment
    Hood:1,
    Muffler:1,
    Manteau:1,
    FalconMuffler:1,
    ValisManteau:1,
    ValkyrianManteau:1,
    WoolScarf:1,
    FallenAngelWing:1,
    CloakofGray:1,
    ElementalCape:1,
    Asprika:1,
    //Accessory
    Clip:1,
    Rosary:1,
    VesperCore02:1,
    BradiumEarring:1,
    GloriousRing:1,
    SprintRing:1,
    DiabolusRing:1,
    MedalofHonor:1,
    BakonawaAgimatTattoo:1,
    Brisingamen:1,
    Megingjard:1,
    //Etc
    PoringIslandMap: 1,
    PayonCaveMap:1,
    GeffenDungeonMap:1,
    //MISC
    Lamp:88,
    //Mission
    SpiritOfEclipse: 1,
    SpiritOfWolyafa: 1,
    SpiritOfDoppelganger: 1,
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
    SkelBone:7,
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
    GoldenHair:1,
    RedGemstone:2,
    CursedRuby:10,
    Diamond:3,
    EyeOfHellion:1,
    //ChallengeTower
    Gold:1,
    Amethyst:1,
    Tongue:1,
    AntJaw:1,
    MysticFrozen:1,
    Aquamarine:1,
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
        case 'SpiritOfDoppelgangerFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SpiritOfDoppelganger: state.SpiritOfDoppelganger + action.Item,
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
        //FootGear Shop
        case 'SandalsFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Sandals: state.Sandals + action.Item,
            }
        case 'ShoesFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Shoes: state.Shoes + action.Item,
            }
        case 'BootsFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Boots: state.Boots + action.Item,
        }
        case 'GreavesFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Greaves: state.Greaves + action.Item,
            }
        case 'BunnySlipperFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                BunnySlipper: state.BunnySlipper + action.Item,
            }
        case 'TidalShoesFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                TidalShoes: state.TidalShoes + action.Item,
            }
        case 'SiegeBootsFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SiegeBoots: state.SiegeBoots + action.Item,
            }
        case 'SiegeGreavesFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SiegeGreaves: state.SiegeGreaves + action.Item,
            }
        case 'VidarsBootsFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                VidarsBoots: state.VidarsBoots + action.Item,
            }
        case 'VitalTreeShoesFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                VitalTreeShoes: state.VitalTreeShoes + action.Item,
            }
        case 'VariantShoesFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                VariantShoes: state.VariantShoes + action.Item,
            }
        case 'SleipnirFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Sleipnir: state.Sleipnir + action.Item,
            }
        //GARMENT
        case 'HoodFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Hood: state.Hood + action.Item,
            }
        case 'MufflerFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Muffler: state.Muffler + action.Item,
            }
        case 'ManteauFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Manteau: state.Manteau + action.Item,
            }
        case 'FalconMufflerFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                FalconMuffler: state.FalconMuffler + action.Item,
            }
        case 'ValisManteauFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                ValisManteau: state.ValisManteau + action.Item,
            }
        case 'ValkyrianManteauFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                ValkyrianManteau: state.ValkyrianManteau + action.Item,
            }
        case 'WoolScarfFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                WoolScarf: state.WoolScarf + action.Item,
            }
        case 'FallenAngelWingFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                FallenAngelWing: state.FallenAngelWing + action.Item,
            }
        case 'CloakofGrayFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                CloakofGray: state.CloakofGray + action.Item,
            }
        case 'ElementalCapeFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                ElementalCape: state.ElementalCape + action.Item,
            }
        case 'AsprikaFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Asprika: state.Asprika + action.Item,
            }
        //Accessory
        case 'ClipFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Clip: state.Clip + action.Item,
            }
        case 'RosaryFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Rosary: state.Rosary + action.Item,
            }
        case 'VesperCore02Fn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                VesperCore02: state.VesperCore02 + action.Item,
            }
        case 'BradiumEarringFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                BradiumEarring: state.BradiumEarring + action.Item,
            }
        case 'GloriousRingFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                GloriousRing: state.GloriousRing + action.Item,
            }
        case 'SprintRingFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                SprintRing: state.SprintRing + action.Item,
            }
        case 'DiabolusRingFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                DiabolusRing: state.DiabolusRing + action.Item,
            }
        case 'MedalofHonorFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                MedalofHonor: state.MedalofHonor + action.Item,
            }
        case 'BakonawaAgimatTattooFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                BakonawaAgimatTattoo: state.BakonawaAgimatTattoo + action.Item,
            }
        case 'BrisingamenFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Brisingamen: state.Brisingamen + action.Item,
            }
        case 'MegingjardFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Megingjard: state.Megingjard + action.Item,
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
        case 'WinGoldenHairFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                GoldenHair: state.GoldenHair + action.Number,
            }
        case 'WinRedGemstoneFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                RedGemstone: state.RedGemstone + action.Number,
            }
        case 'WinCursedRubyFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                CursedRuby: state.CursedRuby + action.Number,
            }
        case 'WinDiamondFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Diamond: state.Diamond + action.Number,
            }
        case 'WinEyeOfHellionFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                EyeOfHellion: state.EyeOfHellion + action.Number,
            }
        case 'WinResultFn':
            return{
                ...state,
                Zeny: state.Zeny + action.enemyZeny
            }
        case 'WinGoldFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Gold: state.Gold + action.Number,
            }
        case 'WinAmethystFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Amethyst: state.Amethyst + action.Number,
            }

        case 'WinTongueFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Tongue: state.Tongue + action.Number,
            }
        case 'WinAntJawFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                AntJaw: state.AntJaw + action.Number,
            }
        case 'WinMysticFrozenFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                MysticFrozen: state.MysticFrozen + action.Number,
            }
        case 'WinAquamarineFn':
            return{
                ...state,
                Zeny: state.Zeny + action.Zeny,
                Aquamarine: state.Aquamarine + action.Number,
            }
        //Combat
        case 'UserSkillMammoniteEnemyFn':
            return{
                ...state,
                Zeny: state.Zeny + Math.floor(action.DamageCalculation*0.2)
            }
        default:
            return state;
    }
}
export default userGoldItemReducer;