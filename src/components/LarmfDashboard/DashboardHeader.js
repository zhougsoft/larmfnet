import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
	ETHERSCAN_LINK,
	OPENSEA_LINK,
	LOOKSRARE_LINK,
	WHALE_BALANCE_THRESHOLD,
} from '../../config'
import { ExtLink } from '../Shared'

const WHALE_TEXT_IMG_URL = '/images/whale-alert.svg'

const Wrapper = styled.div`
	margin: 2rem 0 4rem 4rem;

	h3 {
		font-size: 4rem;
		font-style: italic;
		letter-spacing: -0.1em;
		margin-bottom: 1.25rem;

		& > span {
			color: red;
		}
	}

	p {
		font-size: 0.8rem;
		line-height: 1.5rem;

		letter-spacing: -0.05em;
		padding-left: 0.5rem;
	}
`

const WhaleAlert = styled.div`
	position: fixed;
	top: 5rem;
	right: 8rem;
	z-index: 999;
	width: 25rem;
	transform: rotate(25deg);

	background: red;
	padding: 3rem;

	outline: 0.1rem solid black;
	border: 0.5rem dotted white;
	border-radius: 2rem;

	box-shadow: -1rem 2rem 0.75rem 0 rgba(0, 0, 0, 0.3);

	& > div {
		position: relative;

		img {
			width: 100%;
		}

		button {
			cursor: pointer;
			position: absolute;

			top: 10.5rem;
			right: 18.5rem;

			width: 5rem;
			height: 5rem;

			font-size: 3rem;
			background: white;
			border: none;
			border-radius: 50%;
			outline: 0.2rem dotted #111;

			&:hover {
				transform: scale(125%) rotate(-18deg);
				color: red;
				box-shadow: -0.5rem 1rem 0.5rem 0 rgba(0, 0, 0, 0.25);
			}
		}
	}
`

const DashboardHeader = ({ larmfs }) => {
	const [showWhaleAlert, setShowWhaleAlert] = useState(false)

	useEffect(() => {
		if (!!larmfs && larmfs.length >= WHALE_BALANCE_THRESHOLD) {
			setShowWhaleAlert(true)
		}
	}, [larmfs])

	return (
		<>
			<Wrapper>
				<h3>
					u have <span>{larmfs.length}</span> larmf
					{larmfs.length === 1 ? '' : 's'}:
				</h3>
				<p>
					the mischievous little larva mfers hatched from this{' '}
					<ExtLink href={ETHERSCAN_LINK}>this erc721 contract</ExtLink>.
				</p>
				<p>
					looking to expand the family? peep some wigglers on the{' '}
					<ExtLink href={OPENSEA_LINK}>opensea</ExtLink> or{' '}
					<ExtLink href={LOOKSRARE_LINK}>looksrare</ExtLink> secondary markets!
				</p>
			</Wrapper>
			{showWhaleAlert && (
				<WhaleAlert>
					<div>
						<img src={WHALE_TEXT_IMG_URL} alt="Whale alert!" />
						<button onClick={() => setShowWhaleAlert(false)}>X</button>
					</div>
				</WhaleAlert>
			)}
		</>
	)
}

export default DashboardHeader
