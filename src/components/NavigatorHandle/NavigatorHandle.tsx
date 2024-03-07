import {Box, Flex} from "@chakra-ui/react";
import {motion} from "framer-motion";

function NavigatorHandle() {
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
				</motion.div>
			</Flex>
		</>
	)
}

export default NavigatorHandle
