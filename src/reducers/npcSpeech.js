
const Fn = {    
    KafraEmployee:[{
            name: 'KafraEmployee',
            text: 'Hi Altan, how can I help you today?'
        },{
            name: 'KafraEmployee',
            text: 'Sure! You are fully recovered! :)'
        },{
            name: 'KafraEmployee',
            text: 'You already look healthy, please coming again next time !^^'
    }],
    //talk, buy, buy success, buy failure, sell, sell success, sell failure
    ToolDealer:[{
            name: 'ToolDealer',
            text: 'Welcome, today is a shinny day~~~'
        },{
            name: 'ToolDealer',
            text: 'We`re selling the best potion in Prontera!'
        },{
            name: 'ToolDealer',
            text: 'Thank you $_$'
        },{
            name: 'ToolDealer',
            text: 'Hmm...You don`t have enough Zeny T_T'
        },{
            name: 'ToolDealer',
            text: 'What do you want to trade for ^^?'
        },{
            name: 'ToolDealer',
            text: 'Thanks! Here is your Zeny!'
        },{
            name: 'ToolDealer',
            text: '...You can`t sell this item -_-'
    }],
    //Welcome
    WeaponArmorDealer:[{
        name: '',
        text: 'Enter the Weapon and armor shop in Proterna'
    }],
    //talk, buy, buy success, buy failure, sell, sell success, sell failure
    WeaponDealer:[{
            name: 'WeaponDealer',
            text: 'Our shop sell the best weapon in Prontera, what can I get for you?'
        },{
            name: 'WeaponDealer',
            text: 'The swords are all well forged!'
        },{
            name: 'WeaponDealer',
            text: 'Thank you. Nice to do business with you.'
        },{
            name: 'WeaponDealer',
            text: 'You don`t have enough Zeny.'
        },{
            name: 'WeaponDealer',
            text: 'Huhh? What kind of equipment did you wanna sell?'
        },{
            name: 'WeaponDealer',
            text: 'Trading your weapons, here is your Zeny'
        },{
            name: 'WeaponDealer',
            text: 'This item is unique, I can`t take it @@'
    }],
    ArmorDealer:[{
            name: 'ArmorDealer',
            text: 'Hi Altan, how are you today? :)'
        },{
            name: 'ArmorDealer',
            text: 'Here and take a look!'
        },{
            name: 'ArmorDealer',
            text: 'Nice Purchase xD'
        },{
            name: 'ArmorDealer',
            text: 'Your pocket doesn`t have enough Zeny. x_x'
        },{
            name: 'ArmorDealer',
            text: 'You want to sell something?'
        },{
            name: 'ArmorDealer',
            text: 'Ohh Great!! I`ll pay for all the armors'
        },{
            name: 'ArmorDealer',
            text: 'This item is unique, I can`t take it -.-'
    }],
    //Welcome, talk, buy, buy success, buy failure, sell, sell success, sell failure
    //talk, buy, buy success, buy failure, sell, sell success, sell failure
    HeadGearDealer:[{
            name: 'HeadGearDealer',
            text: 'Hi Altan! Nice to see you :)'
        },{
            name: 'HeadGearDealer',
            text: 'What do you want to buy?'
        },{
            name: 'HeadGearDealer',
            text: 'Here is your item ^^!'
        },{
            name: 'HeadGearDealer',
            text: 'You don`t have enough Zeny. ><'
        },{
            name: 'HeadGearDealer',
            text: 'What do you want to sell?'
        },{
            name: 'HeadGearDealer',
            text: 'Sure~ Here is your Zeny :D'
        },{
            name: 'HeadGearDealer',
            text: 'This item is not for sale =.='
    }]


}

const npcSpeechReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default npcSpeechReducer;