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
      {id: 2, num: "Lunatic", acceptName: "Clear Lunatic", acceptDescription: "Kill 3 Lunatic in PoringIsland", totalNum: "3"},
      {id: 3, num: "Rocker", acceptName: "Clear Rocker", acceptDescription: "Kill 3 Rocker in PoringIsland", totalNum: "3"}
    ]
    const QuestItemBox = [
      {id: 4, num: "Jellopy", acceptName: "Request Item", acceptDescription: "Need 3 Jellopy", totalNum: "3", currentNum:userGoldItem.Jellopy, Img:Jellopy},
      {id: 5, num: "Emptybottle", acceptName: "Request Item", acceptDescription: "Need 5 Empty Bottle", totalNum: "5", currentNum:userGoldItem.EmptyBottle, Img:EmptyBottle}
    ]
    const QuestSpecialBox = [
      {id: 6, num: "Lemonstory", acceptName: "Hidden Story - Lemon", acceptDescription1: "Find out hidden story from Lemon in PayonCave (1/3)", acceptDescription2: "Find out hidden story from Lemon in Geffen Dungeon (2/3)", acceptDescription3: "Find out all hidden story (3/3) - Talk to Lemon in Prontera", condition1:"Lemonstorytwo", condition2:"Lemonstorythree"}
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
                          <p>{Quest.id}. {Quest.acceptName} - {Quest.acceptDescription}: {Math.floor((questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll(Quest.num,"").length)/Quest.num.length} / {Quest.totalNum}</p>
                        </div> : 
                        questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0 ?
                        <div>
                          <p>- Complete Quest {Quest.id} {Quest.acceptName} -</p>
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
                          <p>{Quest.id}. {Quest.acceptName} - {Quest.acceptDescription} <img src={Quest.Img} alt={Quest.num} />: {Quest.currentNum} / {Quest.totalNum}</p>
                        </div> : 
                        questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0 ?
                        <div>
                          <p>- Complete Quest {Quest.id} {Quest.acceptName} -</p>
                        </div> :
                        null}
                      </li>
                    )
                  })}
                  {QuestSpecialBox.map(Quest => {
                    return (
                      <li key={Quest.id} className="questList">
                        {/* Quest Accept, Not Repeat / track*/}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) > -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1 && (questControlRoom.ProgressQuestDialog).indexOf(Quest.condition1) > -1 && (questControlRoom.ProgressQuestDialog).indexOf(Quest.condition2) > -1) && !(questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0) ? 
                        <div>
                          <p>{Quest.id}. {Quest.acceptName} - {Quest.acceptDescription3}</p>
                        </div> : 
                        ((questControlRoom.QuestDialog).indexOf(Quest.num) > -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1 && (questControlRoom.ProgressQuestDialog).indexOf(Quest.condition1) > -1 ) && !(questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0) ? 
                        <div>
                          <p>{Quest.id}. {Quest.acceptName} - {Quest.acceptDescription2}</p>
                        </div> : 
                        ((questControlRoom.QuestDialog).indexOf(Quest.num) > -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) && !(questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0) ? 
                        <div>
                          <p>{Quest.id}. {Quest.acceptName} - {Quest.acceptDescription1}</p>
                        </div> : 
                        questControlRoom.CompleteQuestDialog.indexOf(Quest.num) >= 0 ?
                        <div>
                          <p>- Complete Quest {Quest.id} {Quest.acceptName} -</p>
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