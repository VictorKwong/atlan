import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authorLogoFn } from './actions';
import StartMenu from './StartMenu';
import Footer from './Footer'
import useSound from 'use-sound';
import audioStartUpGame from './audio/audioStartUpGame.mp3'



function App(){
    const authorLogo = useSelector(state => state.authorLogo)
    const [play] = useSound(audioStartUpGame, {volume: 0.2, interrupt: true});
    const dispatch = useDispatch();

    useEffect(() => {
      const audio = new Audio(audioStartUpGame);
      audio.volume = 0.15;
      audio.play();
      setTimeout(() => {
        dispatch(authorLogoFn())}, 6000);
    }, []);
    
    return(
      <div className="wrapper pageFix">
          <div className="allWrapping">
          {authorLogo ? <StartMenu/> :
          <div>
            <h1>Lemoneko</h1>
          </div>
          }
          </div>
          <Footer />
      </div>
    );
}

export default App;