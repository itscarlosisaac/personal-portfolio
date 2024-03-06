import { createIcon } from '@chakra-ui/react'
const MailIcon = createIcon({
	displayName: 'MailIcon',
	viewBox: '0 0 200 200',
	// path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
	path: (
		<>
			<g fill="none">
				<path
					d="M183.333 104.167V50C183.333 45.5798 181.577 41.3405 178.452 38.2149C175.326 35.0893 171.087 33.3334 166.667 33.3334H33.3333C28.913 33.3334 24.6738 35.0893 21.5482 38.2149C18.4226 41.3405 16.6666 45.5798 16.6666 50V150C16.6666 159.167 24.1666 166.667 33.3333 166.667H95.8333"
					stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
				<path
					d="M183.333 58.3334L108.583 105.833C106.011 107.445 103.036 108.3 100 108.3C96.964 108.3 93.9894 107.445 91.4166 105.833L16.6666 58.3334"
					stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
				<path
					d="M150 175C156.63 175 162.989 172.366 167.678 167.678C172.366 162.989 175 156.63 175 150C175 143.37 172.366 137.011 167.678 132.322C162.989 127.634 156.63 125 150 125C143.37 125 137.011 127.634 132.322 132.322C127.634 137.011 125 143.37 125 150C125 156.63 127.634 162.989 132.322 167.678C137.011 172.366 143.37 175 150 175Z"
					stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
				<path
					d="M150 175C163.807 175 175 163.807 175 150C175 136.193 163.807 125 150 125C136.193 125 125 136.193 125 150C125 163.807 136.193 175 150 175Z"
					stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M183.333 183.333L170.833 170.833" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
			</g>
		
		</>
	),
})
export default MailIcon