import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authorLogoFn } from './actions';
import StartMenu from './StartMenu';
import Footer from './Footer'
// import useSound from 'use-sound';
import audioStartUpGame from './audio/audioStartUpGame.mp3'



function App(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    // const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    useEffect(() => {
      const audio = new Audio(audioStartUpGame);
      audio.volume = 0.15;
      let playPromise = audio.play(); 
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // audio.loop = true;
          audio.play()
        })
        .catch(error => {
          // Auto-play was prevented
        });
      }


      setTimeout(() => {dispatch(authorLogoFn())}, 6400);
      //happens
    }, [dispatch]);
    
    return(
      <div className="logoBackground">
        <div className="wrapper pageFix">
            <div className="allWrapping">
            {screenControlRoom.authorLogo ? <StartMenu/> :
            <div className="logoBox">
              <div className="logoLine1"></div>
              <div className="logoLine2"></div>
              <div className="logoLine3"></div>
              <div className="logoLine4"></div>
              <span className="logoLetter1">L</span>
              <span className="logoLetter2">e</span>
              <span className="logoLetter3">m</span>
              <span className="logoLetter4">o</span>
              <span className="logoLetter5">n</span>
              <span className="logoLetter6">e</span>
              <span className="logoLetter7">k</span>
              <span className="logoLetter8">k</span>
              <span className="logoLetter9">o</span>
              <span className="logoLetter10">🍋</span>
            </div>
            }
            </div>
            <Footer />
        </div>
      </div>
    );
}

export default App;