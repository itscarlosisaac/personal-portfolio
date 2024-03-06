import {ReactNode, useRef} from 'react'
import {useScroll} from "framer-motion";
import useParallax from "../../hooks/animations/useParallax.ts";
import {Grid} from "@chakra-ui/react";
import DynamicSvgPath from "../Background/DynamicSvgPath.tsx";
function ParallaxSection({children, containerProps}: {children: ReactNode, containerProps?: any}) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);
	
	return (
		<>
			<Grid
				w={"100%"}
				h={"100vh"}
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
