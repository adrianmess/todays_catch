import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func
  };

  authHandler = async authData => {
    // 1. look up the current store in the firebase database
    // fetch will return promise, if we want the STORE instead of PROMISE put AWAIT in front.
    const store = await base.fetch(this.props.storeId, {context : this})
    console.log(store);
    // 2. claim it if there is no owner (if were the first person to login then we're likely the owner
    // and can claim the store as our own). Save this to firebase database
     if(!store.owner){
       // save it as our own (push/push data) ->
       await base.post(`${this.props.storeId}/owner`, {
         //this comes from the user payload we get from github or w/e
         // can use email address instead of UID
         data: authData.user.uid
       });
     }
    // 3. Set the state of the inventory component to reflect the current user
     this.setState({
       //determine who is the current logged in user
       uid: authData.user.uid,
       //who is the owner of the store by .owner or .uid
       owner: store.owner || authData.user.uid
     })
    console.log(authData);
    //{user: Lk, credential: Hf, additionalUserInfo: xf, operationType: "signIn"}
  };
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    //connect to Auth portion of firebase and pass it the authprovider. THEN pass to authHandler function
    // so when someone does sign-in, then what are we going to do after they sign-in.
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    return <Login authenticate={this.authenticate} />;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/* //for each fish render out an edit fish tag, convert to array first before mapping */}
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
