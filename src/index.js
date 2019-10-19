import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbconfig from './config/fbconfig'
import firebase from 'firebase/app'
import 'materialize-css/dist/css/materialize.min.css'

const store = createStore(rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(fbconfig),
      reactReduxFirebase(firebase, { attachAuthIsReady: true })
    )
  )

store.firebaseAuthIsReady.then(() => ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')))