import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBkkVZ7T4B6Ce_npncs2s27FiYAUDKy850',
      authDomain: 'manager-ba79b.firebaseapp.com',
      databaseURL: 'https://manager-ba79b.firebaseio.com',
      storageBucket: 'manager-ba79b.appspot.com',
      messagingSenderId: '192725551357'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
