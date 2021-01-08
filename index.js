import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { name as appName } from './app.json'
import axios from 'axios'

import App from './src/App'
import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL='https://desafiosimplifica-default-rtdb.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux)
