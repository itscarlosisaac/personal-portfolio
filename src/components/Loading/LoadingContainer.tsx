import {Box, Image} from "@chakra-ui/react";
import {motion, useAnimation} from "framer-motion";
import LoadingParticles from "./LoadingParticles.tsx";
import LoadingCloud from "./LoadingCloud.tsx";


const parentVariant = {
	anim: {
		rotate: [-.4, .3, -.4],
		x: [2, 1, 1],
		y: [2, 1, 1],
		transition: {
			duration: .2,
			delay: 0.5,
			repeat: 4,
			repeatType: "reverse",
			when: "beforeChildren",
		}
	}
}

const childVariant = {
	anim: {
		rotate: [-.4, .3, -.4],
		y: "-70vh",
		transition: {
			duration: .8,
			delay: 0.5,
			ease: "easeIn",
			mass: 10,
			damping: 10,
		}
	}
}

function LoadingContainer() {
	return (
		<>
			<Box w={"100vw"} h={"100vh"} pos={"relative"}>
				<LoadingCloud />
				<Box
					position={"absolute"}
					bottom={"0"}
					left={"0"}
					right={"0"}
					margin={"auto"}
					w={"fit-content"}
				>
					
					<motion.div
						variants={parentVariant}
						animate={"anim"}
					>
						
						<motion.div variants={childVariant}>
							<Image maxW={"50px"} src={"/rocket.png"} alt={"Rocket"}/>
						</motion.div>
					</motion.div>
				</Box>
			</Box>
		</>
	)
}

export default LoadingContainer
