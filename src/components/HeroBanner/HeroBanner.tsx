import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import {HStack, Heading} from "@chakra-ui/react";
function HeroBanner() {
	return (
		<>
			<ParallaxSection containerProps={
				{
					id: "hero-banner",
					w: "100%",
					px: 20,
					justifyContent: "flex-start",
					bg: 'url("/bg.svg")',
					bgSize: "cover",
					bgPosition: "center",
				}
			}>
				<HStack w={"100%"}>
					<Heading
						as='h1'
						noOfLines={{base: 5, md: 3}}
						fontSize={{ base: "xl", sm:"4xl", md: "5xl"}}
						fontFamily={'"Montserrat Subrayada", "sans-serif"'}>
						Elevating User <br/>Experience through <br/>Crafted Code.
					</Heading>
				</HStack>
			</ParallaxSection>
		</>
	)
}

export default HeroBanner

