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