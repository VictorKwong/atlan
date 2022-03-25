import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanQuestFn } from './actions';
import './css/mapAltanQuest.css'
// import useSound from 'use-sound';

//Quest Item
import Jellopy from './img/Etc/Poring_Jellopy70.gif'
import EmptyBottle from './img/Etc/Poring_EmptyBottle15.gif'

function StartMenu(){
    const questControlRoom = useSelector(state => state.questControlRoom)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)

    //QUEST
    const QuestBox = [
      {id: 1, num: "Poring", acceptName: "Clear Poring", acceptDescription: "Kill 3 Poring in PoringIsland", totalNum: "3"},
      {id: 2, num: "Lunatic", acceptName: "Clear Lunatic", acceptDescription: "Kill 3 Lunatic in PoringIsland", totalNum: "3"}
    ]
    const QuestItemBox = [
      {id: 3, num: "Jellopy", acceptName: "Request Item", acceptDescription: "Need 3 Jellopy", totalNum: "3", currentNum:userGoldItem.Jellopy, Img:Jellopy},
      {id: 4, num: "EmptyBottle", acceptName: "Request Item", acceptDescription: "Need 5 Empty Bottle", totalNum: "5", currentNum:userGoldItem.EmptyBottle, Img:EmptyBottle}
    ]
    const QuestSpecialBox = [
      {id: 3, num: "Lemon", acceptDescription1: "Find out all hidden story from Lemon in PayonCave (1/2)", acceptDescription2: "Find out all hidden story from Lemon in PayonCave (2/2) - Talk to Lemon in Prontera"}
    ]


    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanQuestMap">
        <h2 className="altanQuestTitle">Quest</h2>
                <ul className="questBox">
                  {QuestBox.map(Quest => {
                    return (
                      <li key={Quest.id} className="questList">
                        {/* Quest Accept, Not Repeat / track*/}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) > -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? 
                        <div>
                          <p>{Quest.id}. {Quest.acceptName} + {Quest.acceptDescription}: {(questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll(Quest.num,"").length} / {Quest.totalNum}</p>
                        </div> : 
                        questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0 ?
                        <div>
                          <p>- Complete Quest {Quest.id} -</p>
                        </div> :
                        null}
                      </li>
                    )
                  })}
                  {QuestItemBox.map(Quest => {
                    return (
                      <li key={Quest.id} className="questList">
                        {/* Quest Accept, Not Repeat / track*/}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) > -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? 
                        <div>
                          <p>{Quest.id}. {Quest.acceptName} + {Quest.acceptDescription} <img src={Quest.Img} alt={Quest.num} />: {Quest.currentNum} / {Quest.totalNum}</p>
                        </div> : 
                        questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0 ?
                        <div>
                          <p>- Complete Quest {Quest.id} -</p>
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