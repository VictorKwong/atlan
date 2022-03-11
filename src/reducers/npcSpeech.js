
const Fn = {    
    KafraEmployee:[{
            name: 'KafraEmployee',
            text: 'Hi Atlan, how can I help you today?'
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
            text: 'Hi Atlan, how are you today? :)'
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
            text: 'Hi Atlan! Nice to see you :)'
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
    }],
    SoldierGuard1:[{
            name: 'SoldierGuard',
            text: 'Welcome to Prontera! This is the Porntera Castle Enterance.'
        }],
    SoldierGuard2:[{
            name: 'SoldierGuard',
            text: 'My duty is to protect Prontera.'
        }],
    PronteraKing:[{
            name: 'Prontera King',
            text: 'Atlan, you need to collect all four important items to seal the chaos gate. Please hurry!'
        }],
    PronteraAssistant:[{
            name: 'PronteraAssistant',
            text: 'I`m doing a research now, please don`t distrub me.'
        }],
    RoyalGuard1:[{
            name: 'RoyalGuard',
            text: 'Royal guard is different than soldier guard, mainly we are more well trained to protect our king.'
        }],
    RoyalGuard2:[{
            name: 'RoyalGuard',
            text: 'I will serve my Prontera King.'
        }],
    RestingGirl:[{
            name: 'RestingGirl',
            text: 'Rumors saids there is a hidden passage near by here...hmm where is it?'
        }],
    MightyGuy:[{
            name: 'MightyGuy',
            text: 'I`m here because I can train you to be a stronger knight. Select your training and I see if you can pass the test.'
        },{
            name: 'MightyGuy',
            text: 'Master yourself, master the enemy'
        }]
}

const npcSpeechReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default npcSpeechReducer;