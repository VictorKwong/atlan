
const Fn = {    
    KafraEmployee:[{
            name: 'KafraEmployee',
            text: 'Hi Altan, how can I help you today?'
        },{
            name: 'KafraEmployee',
            text: 'Sure! You are fully recovered! :)'
    }]


}

const npcSpeechReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default npcSpeechReducer;