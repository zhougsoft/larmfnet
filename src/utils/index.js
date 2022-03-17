/**
 * truncates an ethereum address to the format 0x0000…0000
 * @param address string - full ETH 0x address to truncate
 * @returns string - truncated address
 */
export const truncateEthAddress = address => {
	// gets first 6 and last 4 digits
	const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
	const match = address.match(truncateRegex)
	if (!match) return address
	return `${match[1]}…${match[2]}`
}
