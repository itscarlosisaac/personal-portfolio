import { extendTheme } from '@chakra-ui/react'

const overwrites = {
	components: {
		Heading: {
			baseStyle: {
				fontFamily:'"Montserrat", sans-serif',
				fontWeight: "200",
			},
		},
		Text: {
			baseStyle: {
				fontFamily:'"Roboto", sans-serif',
				fontWeight: "400",
				lineHeight: "1.8",
			}
		}
	}
}

export default extendTheme((overwrites))