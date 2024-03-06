import {CopyIcon} from "@chakra-ui/icons";
import {Flex} from "@chakra-ui/react";

function Logo() {
	return (
		<>
			<Flex justifyContent={"center"} alignItems={"center"} w={"100%"} h={"100%"}>
				<CopyIcon
					cursor={"pointer"}
					onClick={() => {
						document.querySelector("#hero-banner")?.scrollIntoView({ behavior: 'smooth' });
					}}
					boxSize={23} />
			</Flex>
		</>
	)
}

export default Logo
