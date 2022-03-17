import { truncateEthAddress } from '../utils'

const PROFILE_LINK_ZHOUG = 'https://twitter.com/zhoug0x'
const PROFILE_LINK_IMP = 'https://twitter.com/the_imp0ster'

const Header = ({ activeAccount }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				gap: '1rem',
				padding: '0.75rem 2rem',
				borderBottom: `0.15rem solid ${!!activeAccount ? 'red' : 'black'}`,
			}}
		>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
				<h1
					style={{
						fontSize: '1.5rem',
						fontWeight: 'bold',
						letterSpacing: '-0.03em',
					}}
				>
					LARMFNET
				</h1>
				<div
					style={{
						fontSize: '0.75rem',
						fontStyle: 'italic',
						lineHeight: '1.5rem',
					}}
				>
					a{' '}
					<a
						href={PROFILE_LINK_ZHOUG}
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: 'dodgerblue' }}
					>
						zhoug
					</a>{' '}
					&amp;{' '}
					<a
						href={PROFILE_LINK_IMP}
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: 'dodgerblue' }}
					>
						imp0ster
					</a>{' '}
					joint
				</div>
			</div>

			<div
				style={{
					fontSize: '0.9rem',

					alignSelf: 'flex-end',
					marginBottom: '0.2rem',
				}}
			>
				{activeAccount ? (
					<>
						jacked in:{' '}
						<span style={{ fontWeight: 'bold', color: 'red' }}>
							{truncateEthAddress(activeAccount)}
						</span>{' '}
					</>
				) : (
					'not connected'
				)}
			</div>
		</div>
	)
}

export default Header
