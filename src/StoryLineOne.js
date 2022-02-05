import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { finishStoryLineOneFn, typeWritterEffectFn, GotoWorldMapFn } from './actions';
import WorldMap from './WorldMap'
import './css/storyLine.css'
import $ from 'jquery'
// import useSound from 'use-sound';
// import audioStartUpGame from './audio/audioStartUpGame.mp3'



function StartMenu(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const storyLineOne = useSelector(state => state.storyLineOne)
    const textReadAndSpeed = useSelector(state => state.textReadAndSpeed)
    
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();
    let i = 0;

    const typeWrite = () => {


      switch(true){
        // Read text
        case(i < (storyLineOne[textReadAndSpeed.count].text).length):
          $('.storySpeech').append(`${(storyLineOne[textReadAndSpeed.count].text).charAt(i)}`);
          console.log((storyLineOne[textReadAndSpeed.count].text).charAt(i))
          console.log(i)
          console.log(storyLineOne[textReadAndSpeed.count].text.length)
          i++;
          setTimeout(() => {typeWrite()}, textReadAndSpeed.speed);
          return ;
        // Finish Reading, Not ending, Able to click Next
        case(i === (storyLineOne[textReadAndSpeed.count].text).length):
          console.log(storyLineOne.length);
          $('.nextLine').prop("disabled", false);
          return ;
        }

      }
      // End StoryLineOne
      // if(storyLineOne.length < textReadAndSpeed.count)

      const nextLine = () => {
        $('.nextLine').prop("disabled", true);
        $('.storySpeech').html('');
        $('.storyCharacter').html(`${storyLineOne[textReadAndSpeed.count].name}`)
        setTimeout(() => {typeWrite()}, 0);
        dispatch(typeWritterEffectFn());
      }

    // window.onclick = (e) =>{
    //     e.preventDefault();
    //     $('.storySpeech').html('');
    //     $('.storyCharacter').html(`${storyLineOne[textReadAndSpeed.count].name}`)
    //     // *minor fix
    //     setTimeout(() => {test()}, 0);
    //     i = 0;
    //     dispatch(typeWritterEffectFn());

    //     console.log('Here')
    //     // dispatch(resetTypeWritterEffectFn());
    //   };

    
    useEffect(() => {
        document.addEventListener('keypress', (e) => {
            e.preventDefault();
            console.log(e.code)
            console.log(`this is ${e.key}`)
            //KeyZ
        })
    }, [])

    return(
      <div>
        {screenControlRoom.storyLineOne ? <WorldMap  /> :
        <div>
          <div className="storyScreen">
            <h1>Screen</h1>
          </div>
          <fieldset className="storyChat">
          <legend className="storyCharacter">???</legend>
          <p className="storySpeech">......</p>
            { (storyLineOne.length === textReadAndSpeed.count) ?
              <div>
                <button className="nextLine" onClick={() => {dispatch(finishStoryLineOneFn()); dispatch(GotoWorldMapFn());}}>Continue</button>
              </div>
            :
            <div>
              <button className="nextLine" onClick={() => nextLine()}>Next</button>
            </div>
            }
        
          </fieldset>
        </div>
        }
      </div>
    );
}

export default StartMenu;