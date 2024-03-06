import { createIcon } from '@chakra-ui/react'
const LinkedInIcon = createIcon({
	displayName: 'LinkedInIcon',
	viewBox: '0 0 200 200',
	// path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
	path: (
		<>
			<g fill="none">
				<path
					d="M133.333 66.6666C146.594 66.6666 159.312 71.9345 168.689 81.3113C178.065 90.6881 183.333 103.406 183.333 116.667V175H150V116.667C150 112.246 148.244 108.007 145.118 104.882C141.993 101.756 137.754 100 133.333 100C128.913 100 124.674 101.756 121.548 104.882C118.423 108.007 116.667 112.246 116.667 116.667V175H83.3333V116.667C83.3333 103.406 88.6011 90.6881 97.9779 81.3113C107.355 71.9345 120.072 66.6666 133.333 66.6666Z"
					stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M50 75H16.6666V175H50V75Z" stroke="currentColor" strokeWidth="14" strokeLinecap="round"
				      strokeLinejoin="round"/>
				<path
					d="M33.3333 50C42.538 50 50 42.538 50 33.3333C50 24.1285 42.538 16.6666 33.3333 16.6666C24.1285 16.6666 16.6666 24.1285 16.6666 33.3333C16.6666 42.538 24.1285 50 33.3333 50Z"
					stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
			</g>
		
		</>
	),
})
export default LinkedInIcon