import styled from 'styled-components'

export const FooterDiv = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5em;
	width: 100%;
	background-color: ${({ theme }) => theme.color.ringoRed};

	h4 {
		font-family: ${({ theme }) => theme.fonts[1]};
		font-size: ${({ theme }) => theme.fontSize.medium};
		color: ${({ theme }) => theme.color.ringoWhite};
		margin: 0;
		font-weight: normal;
	}
`
