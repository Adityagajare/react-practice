import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import Store from './redux toolkit/Store/Store'
import { Provider } from 'react-redux'
createRoot(document.getElementById("root")).render(
<Provider store={Store}>
<App/>
</Provider>
)