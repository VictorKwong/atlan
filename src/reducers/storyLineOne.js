
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
    storyLineFour:[{
        name:'Doppelganger',
        text:'Once apon a time, we study together and become friends.'
    },{
        name:'Doppelganger',
        text:'Friends, close friends, and we always do our mission together.'
    },{
        name:'Doppelganger',
        text:'One day, when Baphomet offers a gifts to us, you decline his gracious kindness..'
    },{
        name:'Doppelganger',
        text:'I was right to chose HIS side, the dark power is stronger than you thought.'
    },{
        name:'Doppelganger',
        text:'Sorry Atlan, but  your story ENDS today..'
    },{
        name:'Doppelganger',
        text:'Consume by my darkness and join our side!!'
    }],
    storyLineFive:[{
        name:'Doppelganger',
        text:'I was wrong Atlan..'
    },{
        name:'Doppelganger',
        text:'I hope you can stop Baphomet, he controls the chaos gate'
    },{
        name:'Doppelganger',
        text:'You need to stop him before the gates are open..'
    },{
        name:'Doppelganger',
        text:'I hope we could see each other again..'
    },{
        name:'Doppelganger',
        text:'when we are close friends, just like... old days.....'
    }],
    storyLineSix:[{
        name:'Baphomet',
        text:'The time that we sacrifice, to create OUR world!'
    },{
        name:'Baphomet',
        text:'Now the chaos gate is almost complete...'
    },{
        name:'Baphomet',
        text:'Foolish Human won`t be able to resist our forces anymore.'
    },{
        name:'Baphomet',
        text:'All of my units, Eclipse - Wolyafa - Doppelganger will reborn once again.'
    },{
        name:'Baphomet',
        text:'Let`s end this battle, shall we ... Atlan?'
    }],
}

const storyLineOneReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default storyLineOneReducer;