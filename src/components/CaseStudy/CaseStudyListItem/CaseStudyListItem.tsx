import {HStack} from "@chakra-ui/react";
import {useRef} from "react";
import {useScroll, motion} from "framer-motion";
import useParallax from "../../../hooks/animations/useParallax.ts";
import ParallaxSection from "../../Parallax/ParallaxSection.tsx";

function CaseStudyListItem({id}) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);
	
	return (
		<>
			<ParallaxSection>
				<HStack
					maxHeight={"90vh"}
					justifyContent={"center"}
					alignItems={"center"}
					as={"article"}>
					<h2>Case Study Title</h2>
					<p>Case Study Description</p>
					<p>Case Study Footer</p>
					<motion.h2 style={{y}}>{`#00${id}`}</motion.h2>
				</HStack>
			</ParallaxSection>
		</>
	)
}

export default CaseStudyListItem
