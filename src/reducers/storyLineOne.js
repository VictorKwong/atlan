
const Fn = [
    {
        name:'Altan',
        text:'I see you'
    },
    {
        name:'Ruthless',
        text:'No, you are not...'
    }
]

const storyLineOneReducer = (state = Fn, action) => {
    switch(action.type){
        default:
            return state;
    }
}
export default storyLineOneReducer;