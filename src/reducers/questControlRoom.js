const Fn = {
    //Kill 3 Poring 500z +20exp
    //1. Kill 3 Poring 500z +20exp
    //2. Kill 3 Lunatic +1000z +60xp
    //{ QuestDialog: "PoringLunaticJellopyEmptybottle" }
    // -1 reuturns nothing, >= 0 good returns
    QuestDialog: "",
    CompleteQuestDialog: "",
    ProgressQuestDialog: "",
}

const questControlRoomReducer = (state = Fn, action) => {
    switch(action.type){
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
        case 'ReturnSpecialQuestDialogFn':
            return{
                ...state,
                QuestDialog: (state.QuestDialog).replace(action.Story, ""),
                CompleteQuestDialog: state.CompleteQuestDialog + action.Story,
                //case sensetive
                //First letter has to be Uppercase
                //Poring, Santaporing
                //Poring & Poringking should be avoid
                ProgressQuestDialog: (((state.ProgressQuestDialog).replaceAll(action.Number1, "")).replaceAll(action.Number2, "")).replaceAll(action.Number3, "")
            }
        case 'ProgressQuestDialogFn':
            return{
                ...state,
                ProgressQuestDialog: state.ProgressQuestDialog + action.Number
            }
        case 'ResetGameFn':
            return{
                ...state,
                QuestDialog: "",
                CompleteQuestDialog: "",
                ProgressQuestDialog: "",
            }
        default:
            return state;
    }
}
export default questControlRoomReducer;