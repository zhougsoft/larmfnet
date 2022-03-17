import styled from 'styled-components'
import LarmfCard from '../LarmfCard'
import DashboardHeader from './DashboardHeader'

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 12rem;
`

const Showcase = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2.5rem;
	padding: 0 2rem;
`

const LarmfDashboard = ({ larmfs }) => {
	return (
		<Wrapper>
			<DashboardHeader larmfs={larmfs} />

			<Showcase>
				{larmfs.map(larmf => (
					<LarmfCard
						key={`${larmf.id}-${Date.now() * Math.random()}`}
						larmf={larmf}
					/>
				))}
			</Showcase>
		</Wrapper>
	)
}

export default LarmfDashboard
