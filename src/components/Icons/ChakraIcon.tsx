import { createIcon } from '@chakra-ui/react'
const ChakraIcon = createIcon({
	displayName: 'ChakraIcon',
	viewBox: '0 0 100 100',
	// path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
	path: (
		<>
			<g clipPath="url(#clip0_751_8058)">
				<path
					d="M100 50.0005C100 22.3863 77.6142 0.000488281 50 0.000488281C22.3858 0.000488281 0 22.3863 0 50.0005C0 77.6147 22.3858 100 50 100C77.6142 100 100 77.6147 100 50.0005Z"
					fill="url(#paint0_linear_751_8058)"/>
				<path
					d="M27.0654 52.1348L61.1479 18.2865C61.7845 17.6546 62.8094 18.4239 62.3795 19.2118L49.6942 42.4616C49.411 42.9799 49.7865 43.6126 50.3771 43.6126H72.2993C73.0055 43.6126 73.3464 44.4776 72.83 44.9597L34.4145 80.8126C33.7258 81.4554 32.7005 80.5495 33.2534 79.7869L51.4386 54.7001C51.8114 54.1857 51.4441 53.4651 50.8086 53.4651H27.6141C26.9191 53.4651 26.5725 52.6242 27.0654 52.1348Z"
					fill="white"/>
			</g>
			<defs>
				<linearGradient id="paint0_linear_751_8058" x1="50" y1="0.000488281" x2="50" y2="100" gradientUnits="userSpaceOnUse">
					<stop stopColor="#7BCBD4"/>
					<stop offset="1" stopColor="#29C6B7"/>
				</linearGradient>
				<clipPath id="clip0_751_8058">
					<rect width="100" height="100" fill="white" transform="translate(0 0.000488281)"/>
				</clipPath>
			</defs>
		</>
	),
})
export default ChakraIcon