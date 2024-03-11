import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import {Container, Grid, Heading, HStack, Image, Text, VStack} from '@chakra-ui/react';
import SocialMenu from "../SocialMenu/SocialMenu.tsx";
function AboutSection() {
	return (
		<>
			<ParallaxSection
				containerProps={{
					id:"about",
					maxW: {base: "100vw", md: "1600px"},
					px: {base: "20px", md: "40px"},
				}}
			>
				<Container maxW='6xl' w={"100%"}>
					<Grid
						gap={{base: 10, md: 15, lg: 30}}
						gridTemplateColumns={{base: "1fr", lg: "1fr 1fr"}}
					>
						<VStack
							alignItems={"flex-start"}
							justifyContent={"center"}
						>
							<Heading as={"h3"}>
								I'm Carlos, simplifying complex problems with creative solutions.
							</Heading>
							<Text>
								Passionate front-end developer with 8+ years of experience, proficient in HTML, CSS, and JavaScript, using the latest web technologies, such as React, Node, Vue, Ember and more. I specialize in writing simple, scalable, and reusable code, following best engineering practices such as data structures, algorithms, unit testing, code reviews, documentation, debugging, and agile development.
							</Text>
							<Text>
								I'm all about learning new technologies and pushing the boundaries of web development to create even cooler stuff. If you want to know more about me or just chat about your favorite dinosaur mosasaurus, shoot me an email at <Text color={"#EA937A"} as={"a"} href={"mailto:itscarlosisaac@gmail.com"}>itscarlosisaac@gmail.com</Text>. Let's connect and make the web a more awesome place together!
							</Text>
							<SocialMenu />
						</VStack>
						<HStack>
							<Image src={"/profile.png"} />
						</HStack>
					</Grid>
				</Container>
			</ParallaxSection>
		</>
	)
}

export default AboutSection
