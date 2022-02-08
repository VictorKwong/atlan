const Fn = [
    0,10,26,52,91,150,240,360,550,880
]

//state[1] = 10
//Total Exp calculator, 160%, x = x + x*1.6

const baseEXPChartReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default baseEXPChartReducer;