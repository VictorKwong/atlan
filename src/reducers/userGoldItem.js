const Fn = {
    Zeny: 9000000,
    //Items
    RedPotion: 10,
    YellowPotion: 5,
    //Weapons
    Katana: 1,
    BastardSword: 1,
    GaiaSword: 1,
    TwinEdgeofNaghtSieger: 1,
    VioletFear: 1,
    //Armor
    CottonShirt: 0,
    AdventureSuit: 0,
    WoodenMail: 0,
    Coat: 0,
    PaddedArmor: 0,
    ChainMail: 0,
    FullPlate: 0,
    //HeadGear
    LordKahosHorn: 1,
    TeddybearHat: 1,
    Crown: 1,
    Helm: 1,
    PandaHat: 1,
    ChefHat: 1,
    SantaPoringHat: 1,

    //Etc
    Jellopy: 0,
    EmptyBottle: 0,
    StickyMucus: 0,
    Clover: 0,
    Feather: 0,
    GrasshoppersLeg: 0,

}



const userGoldItemReducer = (state = Fn, action) => {
    switch(action.type){
        //Items Shop
        case 'BuyRedPotionFn':
            return{
                ...state,
                Zeny: state.Zeny - 50,
                RedPotion: state.RedPotion + 1,
            }
        case 'BuyYellowPotionFn':
            return{
                ...state,
                Zeny: state.Zeny - 200,
                YellowPotion: state.YellowPotion + 1,
            }
        case 'SellRedPotionFn':
            return{
                ...state,
                Zeny: state.Zeny + 40,
                RedPotion: state.RedPotion - 1,
            }
        case 'SellYellowPotionFn':
            return{
                ...state,
                Zeny: state.Zeny + 160,
                YellowPotion: state.YellowPotion - 1,
            }
        //Weapons Shop
        case 'BuyKatanaFn':
            return{
                ...state,
                Zeny: state.Zeny - 100,
                Katana: state.Katana + 1,
            }
        case 'SellKatanaFn':
            return{
                ...state,
                Zeny: state.Zeny + 80,
                Katana: state.Katana - 1,
            }
        case 'BuyBastardSwordFn':
            return{
                ...state,
                Zeny: state.Zeny - 300,
                BastardSword: state.BastardSword + 1,
            }
        case 'SellBastardSwordFn':
            return{
                ...state,
                Zeny: state.Zeny + 240,
                BastardSword: state.BastardSword - 1,
            }
        case 'BuyGaiaSwordFn':
            return{
                ...state,
                Zeny: state.Zeny - 800,
                GaiaSword: state.GaiaSword + 1,
            }
        case 'SellGaiaSwordFn':
            return{
                ...state,
                Zeny: state.Zeny + 640,
                GaiaSword: state.GaiaSword - 1,
            }
        case 'BuyTwinEdgeofNaghtSiegerFn':
            return{
                ...state,
                Zeny: state.Zeny - 2000,
                TwinEdgeofNaghtSieger: state.TwinEdgeofNaghtSieger + 1,
            }
        case 'SellTwinEdgeofNaghtSiegerFn':
            return{
                ...state,
                Zeny: state.Zeny + 1600,
                TwinEdgeofNaghtSieger: state.TwinEdgeofNaghtSieger - 1,
            }
        case 'BuyVioletFearFn':
            return{
                ...state,
                Zeny: state.Zeny - 4880,
                VioletFear: state.VioletFear + 1,
            }
        case 'SellVioletFearFn':
            return{
                ...state,
                Zeny: state.Zeny + 3904,
                VioletFear: state.VioletFear - 1,
            }
        //Armors Shop
        case 'BuyCottonShirtFn':
            return{
                ...state,
                Zeny: state.Zeny - 10,
                CottonShirt: state.CottonShirt + 1,
            }
        case 'SellCottonShirtFn':
            return{
                ...state,
                Zeny: state.Zeny + 8,
                CottonShirt: state.CottonShirt - 1,
            }
        case 'BuyAdventureSuitFn':
            return{
                ...state,
                Zeny: state.Zeny - 1000,
                AdventureSuit: state.AdventureSuit + 1,
            }
        case 'SellAdventureSuitFn':
            return{
                ...state,
                Zeny: state.Zeny + 800,
                AdventureSuit: state.AdventureSuit - 1,
            }
        case 'BuyWoodenMailFn':
            return{
                ...state,
                Zeny: state.Zeny - 5500,
                WoodenMail: state.WoodenMail + 1,
            }
        case 'SellWoodenMailFn':
            return{
                ...state,
                Zeny: state.Zeny + 4400,
                WoodenMail: state.WoodenMail - 1,
            }
        case 'BuyCoatFn':
            return{
                ...state,
                Zeny: state.Zeny - 22000,
                Coat: state.Coat + 1,
            }
        case 'SellCoatFn':
            return{
                ...state,
                Zeny: state.Zeny + 17600,
                Coat: state.Coat - 1,
            }
        case 'BuyPaddedArmorFn':
            return{
                ...state,
                Zeny: state.Zeny - 48000,
                PaddedArmor: state.PaddedArmor + 1,
            }
        case 'SellPaddedArmorFn':
            return{
                ...state,
                Zeny: state.Zeny + 38400,
                PaddedArmor: state.PaddedArmor - 1,
            }
        case 'BuyChainMailFn':
            return{
                ...state,
                Zeny: state.Zeny - 65000,
                ChainMail: state.ChainMail + 1,
            }
        case 'SellChainMailFn':
            return{
                ...state,
                Zeny: state.Zeny + 52000,
                ChainMail: state.ChainMail - 1,
            }
        case 'BuyFullPlateFn':
            return{
                ...state,
                Zeny: state.Zeny - 80000,
                FullPlate: state.FullPlate + 1,
            }
        case 'SellFullPlateFn':
            return{
                ...state,
                Zeny: state.Zeny + 64000,
                FullPlate: state.FullPlate - 1,
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
        case 'UseYellowPotionFn':
            return{
                ...state,
                YellowPotion: state.YellowPotion - 1,
            }
        //WIN Etc Items
        case 'WinJellopyFn':
            return{
                ...state,
                Jellopy: state.Jellopy + 1
            }
        case 'WinEmptyBottleFn':
            return{
                ...state,
                EmptyBottle: state.EmptyBottle + 1
            }
        case 'WinStickyMucusFn':
            return{
                ...state,
                StickyMucus: state.StickyMucus + 1
            }
        case 'WinCloverFn':
            return{
                ...state,
                Clover: state.Clover + 1
            }
        case 'WinFeatherFn':
            return{
                ...state,
                Feather: state.Feather + 1
            }
        case 'WinGrasshoppersLegFn':
            return{
                ...state,
                GrasshoppersLeg: state.GrasshoppersLeg + 1
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