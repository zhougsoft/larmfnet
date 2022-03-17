import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
import StylesProvider from './styles/StylesProvider'
import { Web3Provider } from './context/Web3Context'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<StylesProvider>
			<Web3Provider>
				<App />
			</Web3Provider>
		</StylesProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
