const footerEasterEggReducer = (state = false, action) => {
    switch(action.type){
        case 'easterEggFn':
            return !state;
        default:
            return state;
    }
}
export default footerEasterEggReducer;