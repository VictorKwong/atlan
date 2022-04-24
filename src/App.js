import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authorLogoFn } from './actions';
import StartMenu from './StartMenu';
import Footer from './Footer'
import audioStartUpGame from './audio/audioStartUpGame.mp3'
const audioBGM = new Audio(audioStartUpGame);

function App(){
    const screenControlRoom = useSelector(state => state.screenControlRoom)
    const audioControlRoom = useSelector(state => state.audioControlRoom)
    const dispatch = useDispatch();

    useEffect(() => {
      audioBGM.volume = 0.1;
      audioBGM.play();
      setTimeout(() => {dispatch(authorLogoFn())}, 6400);
      //happens
      //Not Depend on audioControlRoom
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
              <span className="logoLetter6">E</span>
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