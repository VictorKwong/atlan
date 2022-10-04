const Fn = {
    //Buy
    LordKahosHornBuy: 100,
    TeddybearHatBuy: 100,
    CrownBuy: 100,
    HelmBuy: 100,
    PandaHatBuy: 100,
    ChefHatBuy: 100,
    SantaPoringHatBuy: 100,
    //Sell
    LordKahosHornSell: 80,
    TeddybearHatSell: 80,
    CrownSell: 80,
    HelmSell: 80,
    PandaHatSell: 80,
    ChefHatSell: 80,
    SantaPoringHatSell: 80,
}

const itemPriceChartReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return {
                ...state,
                }
    }
}
export default itemPriceChartReducer;