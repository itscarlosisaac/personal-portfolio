import {ReactNode} from 'react'
// import {useScroll} from "framer-motion";
// import useParallax from "../../hooks/animations/useParallax.ts";
import {Grid} from "@chakra-ui/react";
function ParallaxSection({children, containerProps}: {children: ReactNode, containerProps?: Record<string, unknown>}) {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({ target: ref });
	// const y = useParallax(scrollYProgress, 300);
	
	return (
		<>
			<Grid
				w={"100%"}
				minH={"100vh"}
				h={{base: "fit-content", md: "100vh"}}
				sx={{
					"scroll-snap-align": "center",
					"perspective": "500px"
				}}
				overflow={"hidden"}
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
