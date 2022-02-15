
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
    ToolDealer:[{
            name: 'ToolDealer',
            text: 'Welcome, it`s a good day isn`t it? What do you want to buy?'
        },{
            name: 'ToolDealer',
            text: 'Have a look of our store.'
        },{
            name: 'ToolDealer',
            text: 'What do you want to sell?'
        },{
            name: 'ToolDealer',
            text: 'Thank you. Nice to do business with you.'
        },{
            name: 'ToolDealer',
            text: 'You don`t have enough Zeny.'
        },{
            name: 'ToolDealer',
            text: 'You don`t have enough Item to sell it.'
    }],
    WeaponArmorDealer:[{
            name: 'Dealer',
            text: 'Our shop sell best weapon and armor in Prontera, what can I get for you?'
        },{
            name: 'Dealer',
            text: 'The swords are all well forged!'
        },{
            name: 'Dealer',
            text: 'Huhh? What kind of equipment did you wanna sell?'
        },{
            name: 'Dealer',
            text: 'Thank you. Nice to do business with you.'
        },{
            name: 'Dealer',
            text: 'You don`t have enough Zeny.'
        },{
            name: 'Dealer',
            text: 'You don`t have enough Item to sell it.'
    }],
    //Welcome, talk, buy, buy success, buy failure, sell, sell success, sell failure
    HeadGearDealer:[{
            name: 'HeadGearDealer',
            text: 'Welcome To Protera headGear shop!'
        },{
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
            text: 'You don`t have the item to sell =.='
    }]


}

const npcSpeechReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default npcSpeechReducer;