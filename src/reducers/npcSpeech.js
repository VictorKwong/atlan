
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
    }]

}

const npcSpeechReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default npcSpeechReducer;