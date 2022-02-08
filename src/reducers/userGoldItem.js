const Fn = {
    Gold: 2000,
    RedPotion: 10,
    YellowPotion: 5,
}

const userGoldItemReducer = (state = Fn, action) => {
    switch(action.type){
        case 'BuyRedPotionFn':
            return{
                ...state,
                Gold: state.Gold - 50,
                RedPotion: state.RedPotion + 1,
            }
        case 'BuyYellowPotionFn':
            return{
                ...state,
                Gold: state.Gold - 200,
                YellowPotion: state.YellowPotion + 1,
            }
        case 'SellRedPotionFn':
            return{
                ...state,
                Gold: state.Gold + 40,
                RedPotion: state.RedPotion - 1,
            }
        case 'SellYellowPotionFn':
            return{
                ...state,
                Gold: state.Gold + 160,
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
        default:
            return state;
    }
}
export default userGoldItemReducer;