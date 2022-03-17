import styled from 'styled-components'
import { BASE_LARMF_STAT_CAP } from '../../config'

// TODO: this is duped in SpriteSection, create one source-of-truth
const BORDER_WEIGHT = '0.2rem'

const SLIME_EMOJI = '🦠' // alts: 🧪 ⚗️
const SPEED_EMOJI = '⚡'
const SPICE_EMOJI = '🌶️'
const STEALTH_EMOJI = '🤫'
const STINK_EMOJI = '💩'

const EmojiString = styled.span`
	font-family: ${({ theme }) => theme.font.secondary};
`

const renderEmojiStats = (statName, statVal) => {
	const makeStr = emoji => new Array(statVal).fill(emoji).join('')
	switch (statName) {
		case 'slime':
			return (
				<EmojiString
					role="img"
					alt={`slime - ${statVal} of ${BASE_LARMF_STAT_CAP}`}
				>
					{makeStr(SLIME_EMOJI)}
				</EmojiString>
			)
		case 'speed':
			return (
				<EmojiString
					role="img"
					alt={`speed - ${statVal} of ${BASE_LARMF_STAT_CAP}`}
				>
					{makeStr(SPEED_EMOJI)}
				</EmojiString>
			)
		case 'spice':
			return (
				<EmojiString
					role="img"
					alt={`spice - ${statVal} of ${BASE_LARMF_STAT_CAP}`}
				>
					{makeStr(SPICE_EMOJI)}
				</EmojiString>
			)
		case 'stealth':
			return (
				<EmojiString
					role="img"
					alt={`stealth - ${statVal} of ${BASE_LARMF_STAT_CAP}`}
				>
					{makeStr(STEALTH_EMOJI)}
				</EmojiString>
			)
		case 'stink':
			return (
				<EmojiString
					role="img"
					alt={`stink - ${statVal} of ${BASE_LARMF_STAT_CAP}`}
				>
					{makeStr(STINK_EMOJI)}
				</EmojiString>
			)

		default:
			return <></>
	}
}

const StatRow = ({ statName, statVal }) => (
	<tr>
		<td style={{ padding: '0.1rem 0' }}>
			{' '}
			<span
				style={{
					fontSize: '0.7rem',
					fontWeight: 'bold',
					letterSpacing: '-0.06em',
				}}
			>
				{statName}
			</span>
		</td>

		<td style={{ paddingLeft: '0.75rem', fontSize: '0.8rem' }}>
			{renderEmojiStats(statName, statVal)}
		</td>
	</tr>
)

const StatSection = ({ larmf }) => {
	return (
		<div
			style={{
				background: 'white',
				border: `${BORDER_WEIGHT} dashed #111`,
				padding: '0.5rem 1rem 1.25rem 1rem',
			}}
		>
			{/* TYPE DISPLAY */}
			<div
				style={{
					marginBottom: '0.75rem',
					lineHeight: '1.1rem',
				}}
			>
				<span
					style={{
						fontSize: '0.75rem',
						fontWeight: 'bold',
						letterSpacing: '-0.06em',
					}}
				>
					type:
				</span>
				<p
					style={{
						fontSize: '1.25rem',
						fontStyle: 'italic',
						letterSpacing: '0.04em',
					}}
				>
					{larmf.type}
				</p>
			</div>
			{/* /TYPE DISPLAY */}

			{/* STAT TABLE */}

			<table style={{ tableLayout: 'fixed' }}>
				<tbody>
					<StatRow statName={'slime'} statVal={larmf.slime} />
					<StatRow statName={'speed'} statVal={larmf.speed} />
					<StatRow statName={'spice'} statVal={larmf.spice} />
					<StatRow statName={'stealth'} statVal={larmf.stealth} />
					<StatRow statName={'stink'} statVal={larmf.stink} />
				</tbody>
			</table>

			{/* /STAT TABLE */}
		</div>
	)
}

export default StatSection
