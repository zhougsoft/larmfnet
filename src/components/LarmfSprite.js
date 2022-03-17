import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
	getLarmfSpriteUrl,
	getLarmfCutoutMinifiedIPFS,
} from '../services/larmf.service'
import useSpriteAnimation from '../hooks/useSpriteAnimation'

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
	const { innerAnimation, outerAnimation } = useSpriteAnimation(animation)
	const [imgUrl, setImgUrl] = useState()

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
