import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGameFn } from './actions';
import Main from './Main';
import Footer from './Footer'

function App(){
    const startGame = useSelector(state => state.startGame)
    const dispatch = useDispatch();
    return(
      <div className="wrapper pageFix">
          <div className="allWrapping">
          {startGame ? <Main /> : 
          <div>
            <h1>Atlan Adventure</h1>
            <button onClick={() => dispatch(startGameFn())}>Start</button>
          </div>
          }
          </div>
          <Footer />
      </div>
    );
}

export default App;