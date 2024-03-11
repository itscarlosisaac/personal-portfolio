import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import {HStack, Heading, Container, Text, VStack, Divider, Center, Grid} from "@chakra-ui/react";
import ReactIcon from "../Icons/ReactIcon.tsx";
import {
	ChakraIcon,
	JestIcon,
	NodeIcon,
	ReduxIcon,
	SassIcon,
	TSIcon,
	ViteIcon,
	TailwindIcon
} from "../Icons";
import ReactQueryIcon from "../Icons/ReactQueryIcon.tsx";
function HeroBanner() {
	return (
		<>
			<ParallaxSection containerProps={
				{
					id: "hero-banner",
					w: "100%",
					bg: 'url("/bg.svg")',
					maxW: {base: "100vw", md: "1600px"},
					px: {base: "20px", md: "40px"},
					bgSize: "cover",
					bgPosition: "center",
					position: "relative",
					_after: {
						content: "''",
						display:'block',
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						background: "rgba(255,255,255,.3)",
					}
				}
			}>
				<Container maxW='6xl' w={"100%"} pos={"relative"} zIndex={2}>
					<Grid
						gap={{base: 10, md: 15, lg: 30}}
						gridTemplateColumns={{base: "1fr", lg: "1fr 1fr"}}
					>
						<VStack
							justifyContent={"center"}
							alignItems={"flex-start"} gap={2}>
							<Text
								mb={-3} textTransform={"uppercase"}
								fontSize={"md"} color={"#474A51"}
								fontWeight={"400"} >
								Hi There!
							</Text>
							<Heading as="h1" fontWeight={"700"} size="xl">
								Frontend React Developer
							</Heading>
							<Text>
								Frontend developer with a passion for creating beautiful and functional web applications. I specialize in React, but I'm always learning new technologies and improving my skills.
							</Text>
							<Grid
								gridTemplateColumns={{ base: "1fr", md: "110px 1fr"}}>
								<HStack mb={{base:3, md: "none"}}>
									<Text fontWeight={600}>Tech Stack</Text>
									<Center display={{base: "none", md: "block"}} height='30px' mx={1}>
										<Divider orientation='vertical' borderColor={"#474A51"}/>
									</Center>
								</HStack>
								<HStack gap={4} flexWrap={"wrap"}>
									<ReactIcon boxSize={7} />
									<ChakraIcon  boxSize={7} />
									<NodeIcon  boxSize={7} />
									<ReactQueryIcon  boxSize={7} />
									<ReduxIcon  boxSize={7} />
									<SassIcon  boxSize={7} />
									<TSIcon  boxSize={7} />
									<ViteIcon  boxSize={7} />
									<TailwindIcon boxSize={7} />
									<JestIcon boxSize={7} />
								</HStack>
							</Grid>
						</VStack>
					</Grid>
				</Container>
			</ParallaxSection>
		</>
	)
}

export default HeroBanner

