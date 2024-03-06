import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import {HStack, Heading} from "@chakra-ui/react";
function HeroBanner() {
	return (
		<>
			<ParallaxSection containerProps={
				{
					w: "100%",
					px: 20,
					justifyContent: "flex-start",
					bg: 'url("/bg.svg")',
					bgSize: "cover",
					bgPosition: "center",
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

export default HeroBanner

