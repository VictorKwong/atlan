const Fn = {
    Zeny: 2000,
    RedPotion: 10,
    YellowPotion: 5,
}

const userGoldItemReducer = (state = Fn, action) => {
    switch(action.type){
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