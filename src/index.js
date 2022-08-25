import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {createStore} from 'redux';
import {Provider } from 'react-redux';
import { contactReducer } from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store=createStore(contactReducer,composeWithDevTools());

export const notifySuccess=(message)=>{
  toast.success(message,{
    position:'top-right'
  });
}

export const notifyError=(message)=>{
  toast.error(message,{
    position:'top-right'
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
      <ToastContainer />
    </Provider>
    
  </React.StrictMode>
);

reportWebVitals();
