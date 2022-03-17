import { useEffect, useState } from 'react'

import SpriteSection from './SpriteSection'
import StatSection from './StatSection'

// TODO: setup a more intuitive theming system to scale for each larmf card type

// defaults - currently applying to all "common" larmfs
const DEFAULT_ACCENT_DEFAULT = 'lightgoldenrodyellow'
const SPRITE_BG_COLOR_DEFAULT = 'white'

// card border accent gradient
const ACCENT_COLOR_ALIEN = 'darkturquoise'
const ACCENT_COLOR_APE = 'peru'
const ACCENT_COLOR_ZOMBIE = 'olivedrab'
const ACCENT_COLOR_GOLD = 'goldenrod'
const ACCENT_COLOR_CHROME = 'silver'

// tinted sprite background
const SPRITE_BG_COLOR_ALIEN = 'rgba(0, 200, 255, 0.1)'
const SPRITE_BG_COLOR_APE = 'rgba(255, 125, 0, 0.1)'
const SPRITE_BG_COLOR_ZOMBIE = 'rgba(100, 150, 0, 0.1)'
const SPRITE_BG_COLOR_GOLD = 'rgba(255, 255, 0, 0.1)'
const SPRITE_BG_COLOR_CHROME = 'rgba(150, 200, 250, 0.1)'

const LarmfCard = ({ larmf }) => {
	const [cardAccentColor, setCardAccentColor] = useState(DEFAULT_ACCENT_DEFAULT)
	const [spriteBgColor, setSpriteBgColor] = useState(SPRITE_BG_COLOR_DEFAULT)

	// set trait-specific UI state on-mount
	useEffect(() => {
		switch (larmf.type) {
			case 'Alien':
				setCardAccentColor(ACCENT_COLOR_ALIEN)
				setSpriteBgColor(SPRITE_BG_COLOR_ALIEN)
				break
			case 'Ape':
				setCardAccentColor(ACCENT_COLOR_APE)
				setSpriteBgColor(SPRITE_BG_COLOR_APE)
				break
			case 'Zombie':
				setCardAccentColor(ACCENT_COLOR_ZOMBIE)
				setSpriteBgColor(SPRITE_BG_COLOR_ZOMBIE)
				break
			case 'Gold':
				setCardAccentColor(ACCENT_COLOR_GOLD)
				setSpriteBgColor(SPRITE_BG_COLOR_GOLD)
				break
			case 'Chrome':
				setCardAccentColor(ACCENT_COLOR_CHROME)
				setSpriteBgColor(SPRITE_BG_COLOR_CHROME)
				break
			default:
				return
		}
	}, [larmf])

	return (
		<div
			style={{
				width: '250px',
				outline: '0.15rem solid #111',
				padding: '1rem 1rem 1.25rem 1rem',
				background: `linear-gradient(ivory, ${cardAccentColor})`,
				boxShadow: '-0.4rem 0.4rem 0.25rem 0 rgba(0, 0, 0, 0.5)',
				overflow: 'hidden',
			}}
		>
			{/* CARD HEADER */}
			<h3
				style={{
					fontSize: '1.1rem',
					fontWeight: 'bold',
					marginBottom: '0.25rem',
				}}
			>{`#${larmf.id}`}</h3>

			{/* CARD BODY */}
			<div style={{ background: 'white' }}>
				<SpriteSection larmf={larmf} bgColor={spriteBgColor} />
				<StatSection larmf={larmf} />
			</div>
		</div>
	)
}

export default LarmfCard
