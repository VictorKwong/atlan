
const Fn = {    
    storyLineOne:[{
        name:'Maiya',
        text:'...'
    // },{
    //     name:'Maiya',
    //     text:'Altan...I`m sorry...'
    // },{
    //     name:'Atlan',
    //     text:'No..Nonono!'
    // },{
    //     name:'?????',
    //     text:'AhhAHAHA!! A foolish person summon me.'
    // },{
    //     name:'?????',
    //     text:'Let me cleanse the world!'
    // },{
    //     name:'?????',
    //     text:'...(Teleportation)'
    // },{
    //     name:'Atlan',
    //     text:'Mayai!!!!!'
    // },{
    //     name:'Atlan',
    //     text:'......'
    // },{
    //     name:'Atlan',
    //     text:'...'
    }],
    storyLineTwo:[{
        name:'Lunatic',
        text:'♪(┌・。・)┌♪♪'
    },{
        name:'Lunatic',
        text:'ヽ(*ﾟｰﾟ*)ﾉ'
    },{
        name:'Eclipse',
        text:'( ง `ω´ )۶!'
    },{
        name:'Lunatic',
        text:'( ง `ω´ )۶!!!'
    },{
        name:'Eclipse',
        text:'(ﾒ｀ﾛ´)/!!!!'
    }],
}

const storyLineOneReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default storyLineOneReducer;