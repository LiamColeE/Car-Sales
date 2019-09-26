import React from 'react';
import { connect } from 'react-redux';

import { addFeature, removeFeature } from './actions/actions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';



const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    console.log("Remove feature");
    props.removeFeature(item)
  };
  console.log(props.state);
  const buyItem = item => {
    // dipsatch an action here to add an item
    console.log("add feature");
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={props.state.store} addFeature={buyItem}/>
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App)
