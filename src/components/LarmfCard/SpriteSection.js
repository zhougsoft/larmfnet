import { useState } from 'react'
import styled from 'styled-components'
import LarmfSprite from '../LarmfSprite'

// TODO: this is duped in StatSection, create one source-of-truth
const BORDER_WEIGHT = '0.2rem'

const LOADING_IMG_URL = '/images/sprite-loading.png'
const ERROR_IMG_URL = '/images/sprite-error.png'

const PlaceholderDisplay = styled.img`
	width: 150px;
	height: 150px;
	margin-bottom: -1rem;
`

const SpriteWrapper = styled.div`
	min-height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${({ bgColor }) => bgColor};
	border-top: ${BORDER_WEIGHT} dashed #111;
	border-left: ${BORDER_WEIGHT} dashed #111;
	border-right: ${BORDER_WEIGHT} dashed #111;
	padding: 0.5rem 1rem 0.75rem 1rem;
	margin-bottom: -1rem;
`

const SpriteSection = ({ larmf, bgColor }) => {
	const [spriteIsLoading, setSpriteIsLoading] = useState(true)
	const [spriteHasError, setSpriteHasError] = useState(false)

	const handleSpriteLoad = () => {
		setSpriteHasError(false)
		setSpriteIsLoading(false)
	}

	const handleSpriteError = () => {
		setSpriteHasError(true)
	}

	const renderSprite = () => {
		if (spriteHasError) return <PlaceholderDisplay src={ERROR_IMG_URL} />

		return (
			<>
				{spriteIsLoading && <PlaceholderDisplay src={LOADING_IMG_URL} />}
				<LarmfSprite
					larmfId={larmf.id}

					// TODO: add switch type
					// animation={true}

					onLoad={handleSpriteLoad}
					onError={handleSpriteError}
				/>
			</>
		)
	}

	return <SpriteWrapper bgColor={bgColor}>{renderSprite()}</SpriteWrapper>
}

export default SpriteSection
