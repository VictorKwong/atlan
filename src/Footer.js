import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { easterEggFn , supportOnceFn} from './actions';
import firebase from './firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';

import banana from './img/Footer/banana.png'

let Update = 0;
function App(){
    const footerEasterEgg = useSelector(state => state.footerEasterEgg)
    const dispatch = useDispatch();
    useEffect(() => {
        // create a variable that holds our database details
        const database = getDatabase(firebase)
        
        // we then create a variable that makes reference to our database
        const dbRef = ref(database)
        const userId = `-MBlboEQaOw7kXBs1I8y`;
        // add an event listener to that variable that will fire
        // from the database, and call that data 'response'.
        onValue(dbRef, (response) => {
           // here we use Firebase's .val() method to parse our database info the way we want it
          Update = response.val().Count[userId] + 1;
        })
        
      }, [])
    const EasterEgg = () => {
        // create a variable that holds our database details
        const database = getDatabase(firebase);
    
        return set(ref(database, `Count/`), {'-MBlboEQaOw7kXBs1I8y': Update})
}
    return(
        <footer className="footerPosition">
        {!footerEasterEgg.trigger ? <p className="footerClick" onClick={
            footerEasterEgg.Support ?
            () => {dispatch(easterEggFn());} : 
            () => {dispatch(easterEggFn()); EasterEgg(); dispatch(supportOnceFn());} }>Copyright ⓒ 2022 Victor Wong - Support</p>
        : <p className="footerClick" onClick={() => dispatch(easterEggFn())}>Thanks for your support <img src={banana} alt="banana" />{Update - 1}<img src={banana} alt="banana" />!^^ <a href="https://github.com/VictorKwong/atlan" target="_blank" rel="noopener noreferrer">MyGitHub</a></p>}
        </footer>
    );
}

export default App;

