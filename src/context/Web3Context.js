import React, { useState, useEffect, createContext, useContext } from 'react'
import { CHAIN_ID } from '../config'

const Web3Context = createContext({})

export const useWeb3Context = () => useContext(Web3Context)

export const Web3Provider = ({ children }) => {
	const [web3IsAvailable, setWeb3IsAvailable] = useState(false)
	const [activeAccount, setActiveAccount] = useState()

	// Check if the browser supports wallet on-mount
	useEffect(() => {
		if (!!window && !!window.ethereum) {
			setWeb3IsAvailable(true)
		} else {
			alert('Heads up! you need to install Metamask to use this app')
		}
	}, [])

	const connectWallet = async () => {
		if (web3IsAvailable) {
			try {
				const accounts = await window.ethereum.request({
					method: 'eth_requestAccounts',
				})

				if (parseInt(window.ethereum.networkVersion) !== CHAIN_ID) {
					alert(
						'Invalid chain detected - must connect to the Ethereum Mainnet!'
					)

					return
				}

				if (accounts.length > 0) {
					setActiveAccount(accounts[0])
					window.ethereum.on('accountsChanged', () => window.location.reload())
					window.ethereum.on('chainChanged', () => window.location.reload())
				} else {
					alert('No valid Ethereum addresses found!')
				}
			} catch (error) {
				console.error(error)
				alert('Error connecting wallet! Are you logged in to MetaMask?')
			}
		}
	}

	return (
		<Web3Context.Provider
			value={{ web3IsAvailable, activeAccount, connectWallet }}
		>
			{children}
		</Web3Context.Provider>
	)
}
