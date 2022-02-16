import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GotoWorldMapFn , GotoPronteraToolDealerFn, GotoPronteraWeaponArmorDealerFn, GotoPronteraHeadGearDealerFn } from './actions';
import { AudioCurrentTimeSaverFn } from './actions';

import { TalktoKafraEmployeeFn, TalktoFountainFn , TalktoQuestBoardFn, ResetTalktoFn} from './actions';

//New Function
import { TalktoHeadGearDealerFn , TalktoToolDealerFn, ResetDealerBuySellHealFn, DealerBuyFn, DealerSellFn } from './actions';

//Npc Function
import { KafraEmployeeHealStateFn } from'./actions';

//Function
import { AcceptQuestDialogFn, ReturnQuestDialogFn , KafraEmployeeHealFn, ResetMyPointsFn } from './actions'

import WorldMap from './WorldMap'
import PronteraToolDealer from './PronteraToolDealer'
import ProternaWeaponArmorDealer from './ProternaWeaponArmorDealer'
import PronteraHeadGearDealer from './PronteraHeadGearDealer'
import './css/mapProntera.css'
import $ from 'jquery'
import audioThemeOfProntera from './audio/108ThemeOfProntera.mp3'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'
const audioBGM = new Audio(audioThemeOfProntera);

//QUEST
const QuestBox = [
  {id: 0, num: "0", acceptName: "Clear Poring", acceptDescription: "Kill 3 Poring in PoringIsland", finishName: "Clear Poring xD",  finishText: "Received +100Exp +1000z"},
  {id: 1, num: "1", acceptName: "Clear Lunatic", acceptDescription: "Kill 3 Lunatic in PoringIsland", finishName: "Clear Lunatic xD", finishText: "Received +200Exp +2000z"}
]

function StartMenu(){
    const baseEXPChart = useSelector(state => state.baseEXPChart)
    const userStats = useSelector(state => state.userStats)
    const userGoldItem = useSelector(state => state.userGoldItem)
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const npcControlRoom = useSelector(state => state.npcControlRoom)
    const questControlRoom = useSelector(state => state.questControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const npcSpeech = useSelector(state => state.npcSpeech)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    //define



    useEffect(() => {
      audioBGM.volume = 0.15;
      let playPromise = audioBGM.play(); 
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          audioBGM.loop = true;
          audioBGM.play()
        })
        .catch(error => {
          // Auto-play was prevented
        });
      }
    }, [])
    const changeMapFadeAudio = () => {
      let i = 0;
      const fadeAudio = setInterval(() => {
          if (audioBGM.volume === 0.15){
            i = i + 1;
          }
          if (audioBGM.volume !== 0) {
            audioBGM.volume -= 0.002
            audioBGM.volume = audioBGM.volume.toFixed(4)
          }
          if (audioBGM.volume < 0.002) {
              audioBGM.pause();
              console.log(audioBGM.currentTime)
              dispatch(AudioCurrentTimeSaverFn(audioBGM.currentTime))
              audioBGM.currentTime = 0;
            clearInterval(fadeAudio);
          }else if (i >= 2){
            audioBGM.volume = 0.15
            clearInterval(fadeAudio);
          }
          $('.toolDealerNPC').on('click', function(event) {
            event.preventDefault();
              audioBGM.volume = 0.15;
              clearInterval(fadeAudio);
          })
        }, 10);
    }

    const changePlaceFadeAudio = () => {
      const fadeAudioOut = setInterval(() => {
        if (audioBGM.volume > 0.01) {
          audioBGM.volume -= 0.004
          audioBGM.volume = audioBGM.volume.toFixed(4)
        }
          if (audioBGM.volume === 0.01) {
            audioBGM.volume = 0.15;
            clearInterval(fadeAudioOut);
          }
      }, 10);
  }

  //NPC Speech
  useEffect(() => {
      switch(true){
        //HEAD GEAR SHOP
        //Talk message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && (npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false)):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][0].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['HeadGearDealer'][0].name}</p>`)
          break;
        //Buy Success message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerBuySuccess):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][2].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['HeadGearDealer'][2].name}</p>`)
          break;
        //Buy Failure message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerBuyFailure):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][3].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['HeadGearDealer'][3].name}</p>`)
          break;
        //Sell Success message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerSellSuccess):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][5].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['HeadGearDealer'][5].name}</p>`)
          break;
        //Buy message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerBuy):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][1].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['HeadGearDealer'][1].name}</p>`)
          break;
        //Sell message
        case(screenControlRoom.PronteraHeadGearDealer && npcControlRoom.HeadGearDealer && npcControlRoom.DealerSell):
          $('.storySpeech').html(`<p>${npcSpeech['HeadGearDealer'][4].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['HeadGearDealer'][4].name}</p>`)
          break;
        //TOOL SHOP
        //Talk message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][0].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][0].name}</p>`)
            break;
        //Buy Success message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuySuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][2].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][2].name}</p>`)
            break;
        //Buy Failure message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuyFailure):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][3].name}</p>`)
            break;
        //Sell Success message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerSellSuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][5].name}</p>`)
            break;
        //Buy message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerBuy):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][1].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][1].name}</p>`)
            break;
        //Sell message
          case(screenControlRoom.PronteraToolDealer && npcControlRoom.ToolDealer && npcControlRoom.DealerSell):
            $('.storySpeech').html(`<p>${npcSpeech['ToolDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ToolDealer'][4].name}</p>`)
            break;
      //WEAPON & ARMOR SHOP
      //Welcome message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer === false && npcControlRoom.ArmorDealer === false && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponArmorDealer'][0].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['WeaponArmorDealer'][0].name}</p>`)
          break;
      //WEAPON SHOP
      //Talk message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
        $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][0].text}</p>`)
        $('.storyCharacter').html(`<p>${npcSpeech['WeaponDealer'][0].name}</p>`)
        break;
      //Buy Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuySuccess):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][2].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['WeaponDealer'][2].name}</p>`)
          break;
      //Buy Failure message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuyFailure):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][3].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['WeaponDealer'][3].name}</p>`)
          break;
      //Sell Success message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerSellSuccess):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][5].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['WeaponDealer'][5].name}</p>`)
          break;
      //Buy message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerBuy):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][1].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['WeaponDealer'][1].name}</p>`)
          break;
      //Sell message
        case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.WeaponDealer && npcControlRoom.DealerSell):
          $('.storySpeech').html(`<p>${npcSpeech['WeaponDealer'][4].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['WeaponDealer'][4].name}</p>`)
          break;
        //ARMOR SHOP
        //Talk message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuy === false && npcControlRoom.DealerSell === false):
          $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][0].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['ArmorDealer'][0].name}</p>`)
          break;
        //Buy Success message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuySuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][2].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ArmorDealer'][2].name}</p>`)
            break;
        //Buy Failure message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuyFailure):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][3].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ArmorDealer'][3].name}</p>`)
            break;
        //Sell Success message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerSellSuccess):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][5].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ArmorDealer'][5].name}</p>`)
            break;
        //Buy message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerBuy):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][1].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ArmorDealer'][1].name}</p>`)
            break;
        //Sell message
          case(screenControlRoom.PronteraWeaponArmorDealer && npcControlRoom.ArmorDealer && npcControlRoom.DealerSell):
            $('.storySpeech').html(`<p>${npcSpeech['ArmorDealer'][4].text}</p>`)
            $('.storyCharacter').html(`<p>${npcSpeech['ArmorDealer'][4].name}</p>`)
            break;
        //Kafra Employee
        case(npcControlRoom.KafraEmployee && npcControlRoom.KafraEmployeeHealState && userStats.currentHealth === userStats.maxHealth && userStats.currentSP === userStats.maxSP):
          $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][2].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['KafraEmployee'][2].name}</p>`)
          dispatch(KafraEmployeeHealFn());
          break;
        case(npcControlRoom.KafraEmployee && npcControlRoom.KafraEmployeeHealState):
          $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][1].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['KafraEmployee'][1].name}</p>`)
          dispatch(KafraEmployeeHealFn());
          break;
        case(npcControlRoom.KafraEmployee):
          $('.storySpeech').html(`<p>${npcSpeech['KafraEmployee'][0].text}</p>`)
          $('.storyCharacter').html(`<p>${npcSpeech['KafraEmployee'][0].name}</p>`)
          break;
        // reset
          default:
            $('.storySpeech').html('')  
            $('.storyCharacter').html(`Altan`)
            break;
      }
  //userState,screenControRoom not included
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [npcControlRoom, npcSpeech])


    return(
      <div>
        {
        screenControlRoom.WorldMap ? <WorldMap/> :
        <div>
          <div className="storyMapScreen">
            {screenControlRoom.PronteraHeadGearDealer ? 
            <div className="ReturnParent">
              <PronteraHeadGearDealer />
              <button className="ReturnHUD" onClick={() =>{dispatch(GotoPronteraHeadGearDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>x</button>
            </div>:
            screenControlRoom.PronteraToolDealer ? 
            <div className="ReturnParent">
              <PronteraToolDealer />
              <button className="ReturnHUD" onClick={() =>{dispatch(GotoPronteraToolDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>x</button>
            </div>:
            screenControlRoom.PronteraWeaponArmorDealer ? 
            <div className="ReturnParent">
              <ProternaWeaponArmorDealer />
              <button className="ReturnHUD" onClick={() =>{dispatch(GotoPronteraWeaponArmorDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>x</button>
            </div>:
            <div className="PronteraMap">
              <h3>Prontera</h3>
              <button className="toolDealerNPC" onClick={() =>{dispatch(GotoPronteraToolDealerFn()); dispatch(TalktoToolDealerFn()); changePlaceFadeAudio();}}>ToolDealer</button>
              <button className="weaponArmorDealerNPC" onClick={() =>{dispatch(GotoPronteraWeaponArmorDealerFn()); dispatch(ResetTalktoFn()); changePlaceFadeAudio();}}>WeaponArmorShop</button>
              <button className="pronteraSouthGate" onClick={() => {dispatch(GotoWorldMapFn()); changeMapFadeAudio(); dispatch(ResetTalktoFn());}}>PronteraSouthGate</button>
              <button className="kafraEmployee" onClick={() => dispatch(TalktoKafraEmployeeFn())}>Kafra Employee</button>
              <button className="pronteraFountain" onClick={() => {dispatch(TalktoFountainFn());}}>Fountain</button>
              <button className="questBoard" onClick={() => {dispatch(TalktoQuestBoardFn());}}>Quest Board</button> 
              <button className="headGearDealerNPC" onClick={() => {dispatch(GotoPronteraHeadGearDealerFn()); dispatch(TalktoHeadGearDealerFn()); changePlaceFadeAudio();}}>HeadGearShop</button> 
            </div>}
            <div className="StoryHUD">
              <p className="basicStatsHUD">Basic Info</p>
              <p className="nameStatsHUD destextHUD">Altan</p>
              <p className="destextHUD classTitle">Knight</p>
                <div className="HUDBox">
                  <p className="hptextHUD">HP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentHealth/userStats.maxHealth)*100} max="100" title={userStats.currentHealth + "/" + userStats.maxHealth}/>
                  <p className="hpPerHUD">{((userStats.currentHealth/userStats.maxHealth)*100).toFixed(0) + "%"}</p>
                </div>
                <div className="HUDBox">
                  <p className="sptextHUD">SP</p>
                  <progress className="BarBasicHUD" value={(userStats.currentSP/userStats.maxSP)*100} max="100" title={userStats.currentSP + "/" + userStats.maxSP}/>
                  <p className="spPerHUD">{((userStats.currentSP/userStats.maxSP)*100).toFixed(0) + "%"}</p>
                </div>

                <div className="leveltextHUD">
                    <p className="destextHUD leveltext">Base Lv. {userStats.Level}</p>
                    {/* <p>Player Attack {userStats.attack}</p>
                    <p>Player Defence {userStats.defence}</p>
                    <p>Player Speed {userStats.speed}</p>
                    <p>Player Hit Rate {userStats.hitRate}</p>
                    <p>Player Dodge Rate {userStats.dodgeRate}</p>
                    <p>Player Crit Rate {userStats.critRate}</p>
                    <p>Player Exp {userStats.Experience}</p> */}
                    {userStats.Level >= 10 ? null : <progress className="BarBasicHUD expBarBasicHUD" value={(userStats.Experience - baseEXPChart[userStats.Level - 1])/(baseEXPChart[userStats.Level] - baseEXPChart[userStats.Level - 1])*100} max="100" title={userStats.Experience + "/" + baseEXPChart[userStats.Level]}></progress>}
                    {/* <button className="toWorldMap" onClick={() =>{dispatch(GotoPoringIslandFn()); dispatch(ResetEnemyCurrentHealthFn()); changeMapFadeAudio(); resetClockButton();}}>Press to Continue</button> */}
                </div>
                <p className="zenytextHUD">Zeny {(userGoldItem.Zeny).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
            </div>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter"></legend>
          <p className="storySpeech">TestMap</p>
              {npcControlRoom.Fountain ? <button onClick={() =>{dispatch(ResetMyPointsFn());}}>Reset my Status Point</button> : null }
              {npcControlRoom.KafraEmployee ? <button className="kafraEmployeeHeal" onClick={() => dispatch(KafraEmployeeHealStateFn())}>Heal</button> : null}
              {/* QUEST */}
              {npcControlRoom.QuestBoard ? 
              <div>
                {/* index -1 means not found, > -1 means found */}
                {((questControlRoom.QuestDialog).indexOf("0") === -1 && questControlRoom.CompleteQuestDialog.indexOf("0") === -1) ? <button className="questBoard" onClick={() => {dispatch(AcceptQuestDialogFn("1"));}}>Killing Poring</button> : 
                // Quest Accept && Kill more than 3 monster
                (questControlRoom.QuestDialog).indexOf("0") > -1  && ((questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll("0","").length) >= 3 ? <button className="questBoard" onClick={() => {dispatch(ReturnQuestDialogFn("0"));}}>Finish Killing Poring</button> : null }
                <ul>
                  {QuestBox.map(Quest => {
                    return (
                      <li key={Quest.id}>
                        {/* index -1 means not found, > -1 means found */}
                        {((questControlRoom.QuestDialog).indexOf(Quest.num) === -1 && questControlRoom.CompleteQuestDialog.indexOf(Quest.num) === -1) ? <button className="questBoard" onClick={() => {dispatch(AcceptQuestDialogFn(Quest.num));}}>{Quest.acceptName} + {Quest.acceptDescription}</button> : 
                        // Quest Accept && Kill more than 3 monster
                        (questControlRoom.QuestDialog).indexOf(Quest.num) > -1  && ((questControlRoom.ProgressQuestDialog).length - (questControlRoom.ProgressQuestDialog).replaceAll(Quest.num,"").length) >= 3 ? <button className="questBoard" onClick={() => {dispatch(ReturnQuestDialogFn(Quest.num));}}>{Quest.finishName} + {Quest.finishText} </button> : null }
                      </li>
                    )
                  })}
                </ul>
              </div> : null}
              {/* BUY SELL FN */}
              {screenControlRoom.PronteraHeadGearDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn());}}>Buy</button>
                  <button onClick={() =>{dispatch(DealerSellFn());}}>Sell</button>
                  <button onClick={() => {dispatch(GotoPronteraHeadGearDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave HeadGearShop</button>
                </div> :
              screenControlRoom.PronteraToolDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn())}}>Buy</button>
                  <button onClick={() =>{dispatch(DealerSellFn())}}>Sell</button>
                  <button onClick={() => {dispatch(GotoPronteraToolDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave ToolShop</button>
                </div> :
              npcControlRoom.WeaponDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn())}}>Buy Weapon</button>
                  <button onClick={() =>{dispatch(DealerSellFn())}}>Sell Weapon</button>
                  <button onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
                </div> :
              npcControlRoom.ArmorDealer ?
                <div>
                  <button onClick={() =>{dispatch(DealerBuyFn())}}>Buy Armor</button>
                  <button onClick={() =>{dispatch(DealerSellFn())}}>Sell Armor</button>
                  <button onClick={() =>{dispatch(ResetTalktoFn())}}>Back</button>
                </div> :
              screenControlRoom.PronteraWeaponArmorDealer ?
                <div>
                  <button onClick={() => {dispatch(GotoPronteraWeaponArmorDealerFn()); dispatch(ResetTalktoFn()); dispatch(ResetDealerBuySellHealFn()); changePlaceFadeAudio();}}>Leave ToolShop</button>
                </div>
              : null}
          {/* <button onClick={() => {dispatch(GotoPronteraFn()); dispatch(ResetDealerBuySellHealFn());}}>Leave</button> */}


          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;