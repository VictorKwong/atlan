import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { easterEggFn } from './actions';

function App(){
    const footerEasterEgg = useSelector(state => state.footerEasterEgg)
    const dispatch = useDispatch();
    return(
        <footer className="footerPosition">
        {!footerEasterEgg ? <p onClick={() => dispatch(easterEggFn())}>Copyright ⓒ 2022 Victor Wong</p>
        : <p onClick={() => dispatch(easterEggFn())}>Thanks for Playing!^^ <a href="https://github.com/VictorKwong/atlan">GitHub</a></p>}
        </footer>
    );
}

export default App;

