import {Grid, VStack} from "@chakra-ui/react";
import CaseStudyContainer from "../components/CaseStudy/CaseStudyContainer.tsx";
import NavigationContainer from "../components/Navigation/NavigationContainer.tsx";
import Hero from "../components/Hero/Hero.tsx";
import Contact from "../components/Contact/Contact.tsx";

function HomeView() {
	return (
		<Grid w={"100vw"} bg="red" gridTemplateColumns={"80px 1fr"}>
			<NavigationContainer />
			<VStack bg="red">
				<Hero />
				<CaseStudyContainer />
				<Contact />
			</VStack>
		</Grid>
	)
}

export default HomeView
