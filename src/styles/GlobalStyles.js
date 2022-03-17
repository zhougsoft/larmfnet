import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@font-face {
		font-family: 'JetBrainsMono';
		src: url('/fonts/JetBrainsMono.ttf');
	}

	body {
		font-size: 16px;
		font-family: ${({ theme }) => theme.font.primary};
		color: ${({ theme }) => theme.color.text};
		background-color: ${({ theme }) => theme.color.background};

		font-smooth: never;
-webkit-font-smoothing : none;

		// Increase global font size on larger viewports
		@media (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
			font-size: 1.25em;
		}
	}

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.color.link};
		&:visited {
			color: ${({ theme }) => theme.color.link};
		}
		&:hover {
			opacity: 0.75;
		}
	}
`
