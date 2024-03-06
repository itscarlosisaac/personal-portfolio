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
				h={"60px"}
				w={"40px"}
				borderRadius={"100px"}
				border={"2px solid"}
				borderColor={"#86EDC3"}
				position={"fixed"}
				bottom={14}
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
						opacity={.4}
						w={"8px"} h={"16px"} borderRadius={"100px"} bg={"#0175A2"} />
					{/*<ArrowDownIcon color={"#0175A2"} boxSize={5} />*/}
				</motion.div>
			</Flex>
		</>
	)
}

export default NavigatorHandle
