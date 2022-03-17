import styled from 'styled-components'
import { FullPageCentered } from './Shared'

const NoWalletMsg = styled.h1`
	font-size: 6rem;
	font-style: bold;
	letter-spacing: -0.1em;
`

const NoWalletDisplay = () => {
	return (
		<FullPageCentered>
			<NoWalletMsg>
				please install{' '}
				<a href="https://metamask.io" target="_blank" rel="noreferrer">
					metamask
				</a>
			</NoWalletMsg>
		</FullPageCentered>
	)
}

export default NoWalletDisplay
