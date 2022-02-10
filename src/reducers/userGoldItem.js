const Fn = {
    Zeny: 90000,
    //Items
    RedPotion: 10,
    YellowPotion: 5,
    //Weapons
    Katana: 0,
    BastardSword: 0,
    GaiaSword: 0,
    TwinEdgeofNaghtSieger: 0,
    VioletFear: 0,
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