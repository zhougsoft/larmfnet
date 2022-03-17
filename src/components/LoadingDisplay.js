import styled, { keyframes, css } from 'styled-components'
import { FullPageCentered } from './Shared'

const spinKeyframes = keyframes`
	from {
		transform: rotate(359deg);
	}
`

const scaleKeyframes = keyframes`
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

const spin = css`
	${spinKeyframes} 1s ease infinite
`

const scale = css`
	${scaleKeyframes} 1s ease infinite
`

const ScaleAnimation = styled.div`
	animation: ${scale};
`

const SpinningLarmf = styled.img`
	animation: ${spin};
`

const LoadingDisplay = () => {
	return (
		<FullPageCentered>
			<ScaleAnimation>
				<SpinningLarmf src="/images/simon.png" />
			</ScaleAnimation>
		</FullPageCentered>
	)
}

export default LoadingDisplay
