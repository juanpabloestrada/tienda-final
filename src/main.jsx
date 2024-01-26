import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
