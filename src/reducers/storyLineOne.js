
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
    storyLineThree:[{
        name:'Wolyafa',
        text:'...Now you have reach to me'
    },{
        name:'Wolyafa',
        text:'I will serve Baphomet, and I will destory you!'
    },{
        name:'Wolyafa',
        text:'Let the evil monster reign in the world! ヽ(｀⌒´メ)ノ'
    },{
        name:'Wolyafa',
        text:'Prepare to DIE..!!'
    }],
}

const storyLineOneReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default storyLineOneReducer;