import { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import useSpriteAnimation from '../hooks/useSpriteAnimation'
import {
	getLarmfSpriteUrl,
	getLarmfCutoutMinifiedIPFS,
} from '../services/larmf.service'

// ------------------------------------------ ANIMATION STUFF
const innerSpeed = 1
const outerSpeed = 1

const keyframesInner = keyframes`
		from {
			transform: rotate(359deg);
		}
		`

const keyframesOuter = keyframes`
		0% { 
			transform: scale(0.2);
		}
		
		50% {
			transform: scale(1);
		}
		
		100% { 
			transform: scale(0.2);
		}
	`

const inner = css`
	${keyframesInner} ${innerSpeed}s ease infinite
`

const outer = css`
	${keyframesOuter} ${outerSpeed}s ease infinite
`
// ------------------------------------------ ^ ANIMATION STUFF

const SpriteWrapper = styled.div`
	width: ${({ width }) => width};
	animation: ${({ animation }) => animation};
`

const SpriteImg = styled.img`
	width: 100%;
	height: auto;
	overflow: hidden;
	animation: ${({ animation }) => animation};
`

const LarmfSprite = ({
	larmfId,
	animation,
	onLoad,
	onError,
	lazyLoad = true,
}) => {



	// WIP - recieve inner and outer animation state from this hook
	const result = useSpriteAnimation(animation)


	

	const [imgUrl, setImgUrl] = useState()
	const [innerAnimation, setInnerAnimation] = useState()
	const [outerAnimation, setOuterAnimation] = useState()

	// fetch sprite image resource
	useEffect(() => {
		if (!!larmfId) {
			getLarmfSpriteUrl(larmfId)
				.then(result => {
					setImgUrl(result)
				})
				.catch(() => {
					console.warn(
						`Error fetching img for id #${larmfId} - setting IPFS fallback`
					)
					setImgUrl(getLarmfCutoutMinifiedIPFS(larmfId))
				})
		} else {
			console.warn(
				'invalid larmfId passed to sprite - expected number, recieved ',
				typeof larmfId
			)
		}
	}, [larmfId])

	// parse & set animation type
	useEffect(() => {
		// switch (animation) {
		// 	case 'wiggle':
		// 		setInnerAnimation(inner)
		// 		setOuterAnimation(outer)
		// 		break
		// 	default:
		// 		setInnerAnimation('')
		// 		setOuterAnimation('')
		// }

		if (animation) {
			setInnerAnimation(inner)
			setOuterAnimation(outer)
		}
	}, [animation])

	if (!imgUrl) return <></>

	return (
		<SpriteWrapper animation={outerAnimation} width={'150px'}>
			<SpriteImg
				src={imgUrl}
				alt={`larva mfer #${larmfId}`}
				animation={innerAnimation}
				loading={lazyLoad ? 'lazy' : ''}
				onLoad={!!onLoad ? onLoad : null}
				onError={!!onError ? onError : null}
			/>
		</SpriteWrapper>
	)
}

export default LarmfSprite
