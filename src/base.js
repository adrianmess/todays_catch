import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAsHW5eL-umK9vSxKHLJd-5xMqa_xSlKdE",
    authDomain: "todays-catch-market.firebaseapp.com",
    databaseURL: "https://todays-catch-market.firebaseio.com"
})

//create firebase bindings
const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is the default export

export default base;
