import {Grid, VStack} from "@chakra-ui/react";
import CaseStudyContainer from "../components/CaseStudy/CaseStudyContainer.tsx";
import NavigationContainer from "../components/Navigation/NavigationContainer.tsx";
import HeroBanner from "../components/HeroBanner/HeroBanner.tsx";
import Contact from "../components/Contact/Contact.tsx";

function HomeView() {
	return (
		<Grid w={"100vw"} gridTemplateColumns={"80px 1fr"}>
			<NavigationContainer />
			<VStack maxWidth={"1600px"} margin={"0 auto"}>
				<HeroBanner />
				<CaseStudyContainer />
				<Contact />
			</VStack>
		</Grid>
	)
}

export default HomeView
