import { ThemeProvider } from 'styled-components'
import theme from './theme'
import GlobalStyles from './GlobalStyles'

const StylesProvider = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	)
}

export default StylesProvider
