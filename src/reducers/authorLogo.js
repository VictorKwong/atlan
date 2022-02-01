
const authorLogoReducer = (state = false, action) => {
    switch(action.type){
        case 'authorLogoFn':
            return !state;

        default:
            return state;
    }
}
export default authorLogoReducer;