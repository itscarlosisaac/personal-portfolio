import {Box, Flex} from "@chakra-ui/react";
import {ArrowDownIcon} from "@chakra-ui/icons";
import {motion} from "framer-motion";

function NavigatorHandle() {
	
	const animation_variant = {
		init: {
			y:0
		},
		animate: {
			y: -20,
		}
	}
	
	return (
		<>
			<Flex
				zIndex={1000}
				h={"60px"}
				w={"40px"}
				borderRadius={"100px"}
				border={"2px solid"}
				borderColor={"white"}
				position={"fixed"}
				bottom={6}
				left={"50%"}
				justifyContent={"center"}
				alignItems={"flex-end"}
			>
				<motion.div
					transition={{
						yoyo: true,
						duration: 4,
						ease: "easeInOut",
						repeat: Infinity
					}}
					animate={{
						y: [-5,-20,-5],
					}}>
					<Box
						opacity={1}
						w={"8px"} h={"16px"} borderRadius={"100px"} bg={"white"} />
					{/*<ArrowDownIcon color={"#0175A2"} boxSize={5} />*/}
				</motion.div>
			</Flex>
		</>
	)
}

export default NavigatorHandle
