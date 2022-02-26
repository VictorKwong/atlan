const Fn = {
    //Kill 3 Poring 500z +20exp
    //1. Kill 3 Poring 500z +20exp
    //2. Kill 3 Lunatic +1000z +60xp
    //{ num: "123456" }
    // -1 reuturns nothing, >= 0 good returns
    ClearPoringQuest: false,
    CompleteClearPoringQuest: false,
    QuestDialog: "",
    CompleteQuestDialog: "",
    ProgressQuestDialog: "",
}

const questControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
        case 'AcceptClearPoringQuestFn':
            return{
                ...state,
                ClearPoringQuest: true
            }
        case 'ReturnClearPoringQuestFn':
            return{
                ...state,
                ClearPoringQuest: false,
                CompleteClearPoringQuest: true
            }
        case 'AcceptQuestDialogFn':
            return{
                ...state,
                QuestDialog: state.QuestDialog + action.Number
            }
        case 'ReturnQuestDialogFn':
            return{
                ...state,
                QuestDialog: (state.QuestDialog).replace(action.Number, ""),
                CompleteQuestDialog: state.CompleteQuestDialog + action.Number,
                //case sensetive
                //First letter has to be Uppercase
                //Poring, Santaporing
                //Poring & Poringking should be avoid
                ProgressQuestDialog: (state.ProgressQuestDialog).replaceAll(action.Number, "")
            }
        case 'ProgressQuestDialogFn':
            return{
                ...state,
                ProgressQuestDialog: state.ProgressQuestDialog + action.Number
            }
        default:
            return state;
    }
}
export default questControlRoomReducer;