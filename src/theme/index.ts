import { extendTheme } from '@chakra-ui/react'

/*/
Downy #56C9C2

Apricot #EA937A

Haiti #08061C

Abbey #474A51
 */
const overwrites = {
	components: {
		Button: {
			baseStyle: {
				borderRadius: 0,
				h: "42px",
				textTransform: "uppercase",
				letterSpacing: "1px",
			}
		},
		Heading: {
			baseStyle: {
				fontFamily:'"Montserrat", sans-serif',
				fontWeight: "200",
			},
		},
		Text: {
			baseStyle: {
				color: "#08061C",
				fontFamily:'"Roboto", sans-serif',
				fontWeight: "400",
				lineHeight: "1.8",
			}
		}
	}
}

export default extendTheme((overwrites))