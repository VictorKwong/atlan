import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanQuestFn } from './actions';
import './css/mapAltanQuest.css'
// import useSound from 'use-sound';

const QuestBox = [
  {id: 1, num: "0", acceptName: "Clear Poring", acceptDescription: "Kill 3 Poring in PoringIsland", totalNum: "3"},
  {id: 2, num: "1", acceptName: "Clear Lunatic", acceptDescription: "Kill 3 Lunatic in PoringIsland", totalNum: "3"}
]

function StartMenu(){
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanQuestMap">
        <h2 className="altanQuestTitle">Quest</h2>
                <ul>
                  {QuestBox.map(Quest => {
                    return (
                      <li key={Quest.id}>
                        {/* Quest Accept, Not Repeat / track*/}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) > -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? 
                        <div>
                          <p>{Quest.acceptName} + {Quest.acceptDescription}: {(questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll(Quest.num,"").length} / {Quest.totalNum}</p>
                        </div> : 
                        questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0 ?
                        <div>
                          <p>Complete Quest {Quest.id}</p>
                        </div> :
                        null}
                      </li>
                    )
                  })}
                </ul>
        <div className="questBackPosition">
          <button className="altanQuestButton questBackButtonPosition" onClick={() =>{dispatch(GotoAltanQuestFn());}}>back</button>
        </div>
      </div>
    );
}

export default StartMenu;