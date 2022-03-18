import { useState, useEffect } from 'react'
import { css } from 'styled-components'
import {
	bounceInner,
	bounceOuter,
	danceInner,
	danceOuter,
	wiggleInner,
} from './keyframes'

const createAnimation = (keyframes, duration) =>
	css`
		${keyframes} ${duration}s ease infinite
	`

const useSpriteAnimation = animation => {
	const [innerAnimation, setInnerAnimation] = useState('')
	const [outerAnimation, setOuterAnimation] = useState('')

	// parse and build correct animation string for name key - 'wiggle', 'bounce' etc
	useEffect(() => {
		if (!!animation) {
			switch (animation) {
				case 'bounce':
					setInnerAnimation(createAnimation(bounceInner, 1))
					setOuterAnimation(createAnimation(bounceOuter, 1))
					break
				case 'dance':
					setInnerAnimation(createAnimation(danceInner, 1))
					setOuterAnimation(createAnimation(danceOuter, 1))
					break
				case 'wiggle':
					setInnerAnimation(createAnimation(wiggleInner, 0.5))
					setOuterAnimation('')
					break
				default:
					return
			}
		}
	}, [animation])

	return { innerAnimation, outerAnimation }
}

export default useSpriteAnimation
