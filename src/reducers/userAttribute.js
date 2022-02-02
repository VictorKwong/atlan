const Fn = {
    str: 1,
    agi: 1,
    vit: 1,
    int: 1,
    dex: 1,
    luk: 1
}

const userAttributeReducer = (state = Fn, action) => {
    switch(action.type){
        case 'testrara':
            return {
                str: ++state.str,
                agi: 1,
                vit: 1,
                int: 1,
                dex: 1,
                luk: 1
            }
        default:
            return state;
    }
}

export default userAttributeReducer;