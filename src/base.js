import Rebase from 're-base';
import firebase from 'firebase';
import config from './config';

console.log(config)
const firebaseApp = firebase.initializeApp(config)

//##### Removed API Key for github #############
// const firebaseApp = firebase.initializeApp({
//   apiKey: "################################",
//   authDomain: "todays-catch-market.firebaseapp.com",
//   databaseURL: "https://todays-catch-market.firebaseio.com",
// })

//create firebase bindings
const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is the default export

export default base;
