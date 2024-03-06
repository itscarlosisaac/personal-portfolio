import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import {HStack, Heading} from "@chakra-ui/react";

function Hero() {
	return (
		<>
			<ParallaxSection containerProps={
				{
					w: "100%",
					px: 20,
					justifyContent: "flex-start",
				}
			}>
				<HStack w={"100%"}>
					<Heading as='h1' size='2xl' noOfLines={3} fontFamily={'"Montserrat Subrayada", "sans-serif"'}>
						Elevating User <br/>Experience through <br/>Crafted Code.
					</Heading>
				</HStack>
			</ParallaxSection>
		</>
	)
}

export default Hero