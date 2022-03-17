import styled from 'styled-components'

// link that safely navigates to a new tab
export const ExtLink = ({ children, ...props }) => (
	<a {...props} target="_blank" rel="noreferrer noopener">
		{children}
	</a>
)

export const Container = styled.div`
	max-width: 100%;
	padding-right: 2rem;
	padding-left: 2rem;
	margin-right: auto;
	margin-left: auto;
	@media (min-width: ${({ theme }) => theme.breakpoint.sm}px) {
		max-width: ${({ theme }) => theme.breakpoint.sm * 0.94}px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoint.md}px) {
		max-width: ${({ theme }) => theme.breakpoint.md * 0.94}px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoint.lg}px) {
		max-width: ${({ theme }) => theme.breakpoint.lg * 0.94}px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoint.xl}px) {
		max-width: ${({ theme }) => theme.breakpoint.xl * 0.94}px;
	}
`

export const FullPageCentered = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
