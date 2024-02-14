import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
// import { Platform,View, Text } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import appReducer from './src/reducers';
import Screens from './src/Screens';

const store = createStore(appReducer, applyMiddleware(thunk));

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Screens />
      </Provider>
    );
  }
}

export default App;