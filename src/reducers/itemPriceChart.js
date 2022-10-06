const Fn = {
    //Buy
    //HEAD GEAR
    LordKahosHornBuy: 100,
    TeddybearHatBuy: 100,
    CrownBuy: 100,
    HelmBuy: 100,
    PandaHatBuy: 100,
    ChefHatBuy: 100,
    SantaPoringHatBuy: 100,
    //ACCESSORY
    ClipBuy: 100,
    RosaryBuy: 100,
    VesperCore02Buy: 100,
    BradiumEarringBuy: 100,
    GloriousRingBuy: 100,
    SprintRingBuy: 100,
    DiabolusRingBuy: 100,
    MedalofHonorBuy: 100,
    BakonawaAgimatTattooBuy: 100,
    BrisingamenBuy: 100,
    MegingjardBuy: 100,
    //WEAPON
    KatanaBuy: 100,
    BastardSwordBuy: 300,
    GaiaSwordBuy: 800,
    TwinEdgeofNaghtSiegerBuy: 3000,
    VioletFearBuy: 4880,
    //Sell
    //HEAD GEAR
    LordKahosHornSell: 80,
    TeddybearHatSell: 80,
    CrownSell: 80,
    HelmSell: 80,
    PandaHatSell: 80,
    ChefHatSell: 80,
    SantaPoringHatSell: 80,
    //ACCESSORY
    ClipSell: 100,
    RosarySell: 100,
    VesperCore02Sell: 100,
    BradiumEarringSell: 100,
    GloriousRingSell: 100,
    SprintRingSell: 100,
    DiabolusRingSell: 100,
    MedalofHonorSell: 100,
    BakonawaAgimatTattooSell: 100,
    BrisingamenSell: 100,
    MegingjardSell: 100,
    //WEAPON
    KatanaSell: 80,
    BastardSwordSell: 240,
    GaiaSwordSell: 640,
    TwinEdgeofNaghtSiegerSell: 1600,
    VioletFearSell: 3904,
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