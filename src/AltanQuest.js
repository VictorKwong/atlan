import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoAltanQuestFn } from './actions';
import $ from 'jquery'
import Prontera from './Prontera'
import './css/mapAltanEquipment.css'
// import useSound from 'use-sound';

const QuestBox = [
  {id: 0, num: "0", acceptName: "Clear Poring", acceptDescription: "Kill 3 Poring in PoringIsland", totalNum: "3"},
  {id: 1, num: "1", acceptName: "Clear Lunatic", acceptDescription: "Kill 3 Lunatic in PoringIsland", totalNum: "5test"}
]

// AudioCurrentTimeSaverFn
function StartMenu(){
    console.log('rerender')
    const questControlRoom = useSelector(state => state.questControlRoom)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    return(
      <div className="AltanEquipmentMap">
                <ul>
                  {QuestBox.map(Quest => {
                    return (
                      <li key={Quest.id}>
                        {/* Quest Accept, Not Repeat / track*/}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) > -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? 
                        <div>
                          <p>{Quest.acceptName} + {Quest.acceptDescription}: {(questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll(Quest.num,"").length} / {Quest.totalNum}</p>
                        </div> : null}
                      </li>
                    )
                  })}
                </ul>
        <button className="altanEquipment" onClick={() =>{dispatch(GotoAltanQuestFn());}}>back</button>
      </div>
    );
}

export default StartMenu;