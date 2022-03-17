import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { getLarmfsInWallet, getLarmf } from './services/larmf.service'
import { useWeb3Context } from './context/Web3Context'

import Header from './components/Header'
import LoadingDisplay from './components/LoadingDisplay'
import NoWalletDisplay from './components/NoWalletDisplay'
import ConnectWalletDisplay from './components/ConnectWalletDisplay'
import LarmfDashboard from './components/LarmfDashboard'

// debug mode will bypass the chain call for token ids and use the hardcoded DEBUG_IDS array
const DEBUG_MODE = false
const DEBUG_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function App() {
	const { web3IsAvailable, activeAccount, connectWallet } = useWeb3Context()

	const [isLoading, setIsLoading] = useState(false)
	const [larmfs, setLarmfs] = useState([])

	// fetch larmfs once account is available
	useEffect(() => {
		if (!!activeAccount) {
			setIsLoading(true)

			if (DEBUG_MODE) {
				setLarmfs(DEBUG_IDS.map(larmfId => getLarmf(larmfId)))
				setIsLoading(false)
			} else {
				const provider = new ethers.providers.Web3Provider(window.ethereum)
				getLarmfsInWallet(provider, activeAccount).then(results => {
					const parsedLarmfs = results.map(larmfId => getLarmf(larmfId))
					setLarmfs(parsedLarmfs)
					setIsLoading(false)
				})
			}
		}
	}, [activeAccount])

	const renderContent = () => {
		if (!web3IsAvailable) {
			return <NoWalletDisplay />
		}

		if (isLoading) {
			return <LoadingDisplay />
		}

		if (!activeAccount) {
			return <ConnectWalletDisplay connectWallet={connectWallet} />
		}

		return <LarmfDashboard larmfs={larmfs} />
	}

	return (
		<>
			<Header activeAccount={activeAccount} />
			<>{renderContent()}</>
		</>
	)
}

export default App
