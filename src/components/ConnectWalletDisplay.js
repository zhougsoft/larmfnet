import styled from 'styled-components'
import { FullPageCentered } from './Shared'

const Wrapper = styled.div`
	text-align: center;
	margin-bottom: 4rem;
`

const JackInButton = styled.button`
	cursor: pointer;
	border: none;
	font-size: 10rem;
	letter-spacing: -0.1em;
	color: white;
	background: red;
	padding: 1.5rem 3rem;

	&:hover {
		color: red;
		background: white;
		outline: 0.15rem solid red;
		box-shadow: -1rem 4rem 5rem 0 rgba(0, 0, 0, 0.5);
		transform: skew(-3deg) translate(0, -0.5rem) scale(1.15);
	}
`

const SubText = styled.div`
	font-size: 2rem;

	span {
		font-size: 3rem;
		font-weight: bold;
		font-style: italic;
	}
`

const ConnectWalletDisplay = ({ connectWallet }) => {
	return (
		<FullPageCentered>
			<Wrapper>
				<JackInButton onClick={() => connectWallet()}>JACK IN</JackInButton>
				<SubText>
					to <span>LARMFNET</span>
				</SubText>
			</Wrapper>
		</FullPageCentered>
	)
}

export default ConnectWalletDisplay
