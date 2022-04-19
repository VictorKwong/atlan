const Fn = {

    trigger: false,
    Support: false,
}


const footerEasterEggReducer = (state = Fn, action) => {
    switch(action.type){
        case 'easterEggFn':
            return {
                ...state,
                trigger: !state.trigger
            }
        case 'supportOnceFn':
            return {
                ...state,
                Support: true,
            }
        default:
            return state;
    }
}
export default footerEasterEggReducer;