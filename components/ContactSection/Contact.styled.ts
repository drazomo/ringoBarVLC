import styled from 'styled-components'

export const MapImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		width: 100%;
		margin-top: 2em;
		cursor: pointer;
	}
`

export const ContactGrid = styled.div`
	display: flex;
	flex-direction: column;

	button {
		text-transform: uppercase;
		width: 100%;
		a {
			margin-top: 5px;
		}
	}

	@media (min-width: 901px) {
		display: grid;
		grid-template-columns: 50% 50%;

		button {
			width: 50%;
		}
	}
`
export const DirectionsDiv = styled.div`
	display: flex;
	flex-direction: column;

	h5 {
		text-align: left;
		font-size: 1.5em;
		margin-top: 1em;
	}

	p {
		margin-top: 1em;
		text-align: left;
		padding-left: 5px;
	}
`

export const LlamarDiv = styled.div`
	display: flex;
	flex-direction: column;

	h5 {
		text-align: left;
		font-size: 1.5em;
		margin-top: 1em;
	}
`