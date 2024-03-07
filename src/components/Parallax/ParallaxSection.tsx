import {ReactNode} from 'react'
import {Grid} from "@chakra-ui/react";
function ParallaxSection({children, containerProps}: {children: ReactNode, containerProps?: Record<string, unknown>}) {

	
	return (
		<>
			<Grid id={"ARA"}
				w={"100%"}
				minH={"100vh"}
				h={{base: "auto", md: "100vh"}}
				sx={{
					"scroll-snap-align": "center",
					"perspective": "500px"
				}}
				overflow={{base: "visible", md: "hidden"}}
				alignContent={"center"}
				justifyContent={"center"}
				as={"section"}
				position={"relative"}
				{...containerProps}
			>
				{children}
			</Grid>
		</>
	)
}

export default ParallaxSection
