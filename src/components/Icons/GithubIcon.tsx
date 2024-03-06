import { createIcon } from '@chakra-ui/react'
const GithubIcon = createIcon({
	displayName: 'GithubIcon',
	viewBox: '0 0 200 200',
	// path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
	path: (
		<>
			<g fill="none">
				<path
					d="M125 183.333V150C126.159 139.561 123.166 129.084 116.667 120.833C141.667 120.833 166.667 104.167 166.667 75C167.333 64.5833 164.417 54.3333 158.333 45.8333C160.667 36.25 160.667 26.25 158.333 16.6666C158.333 16.6666 150 16.6666 133.333 29.1666C111.333 25 88.6667 25 66.6667 29.1666C50 16.6666 41.6667 16.6666 41.6667 16.6666C39.1667 26.25 39.1667 36.25 41.6667 45.8333C35.599 54.299 32.654 64.6065 33.3334 75C33.3334 104.167 58.3334 120.833 83.3334 120.833C80.0834 124.917 77.6667 129.583 76.25 134.583C74.8334 139.583 74.4167 144.833 75 150V183.333"
					stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M75 150C37.4166 166.667 33.3333 133.333 16.6666 133.333" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
			</g>
		
		</>
	),
})
export default GithubIcon