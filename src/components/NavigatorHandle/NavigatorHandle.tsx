import {Box, Flex} from "@chakra-ui/react";
import {motion} from "framer-motion";

function NavigatorHandle() {
	return (
		<>
			<Flex
				zIndex={1000}
				h={{base: "30px", md: "60px"}}
				w={{base: "20px", md: "40px"}}
				borderRadius={"100px"}
				border={"2px solid"}
				borderColor={"white"}
				position={"fixed"}
				bottom={6}
				left={"50%"}
				justifyContent={"center"}
				alignItems={"flex-end"}
				bg={{base: "rgba(8,6,28,0.2)", md: "transparent"}}
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
						w={{base: "4px", md: "8px"}}
						h={{base: "8px", md: "16px"}}
						borderRadius={"100px"} bg={"white"} />
				</motion.div>
			</Flex>
		</>
	)
}

export default NavigatorHandle
