import {Box, Grid, VStack} from "@chakra-ui/react";
import CaseStudyContainer from "../components/CaseStudy/CaseStudyContainer.tsx";
import NavigationContainer from "../components/Navigation/NavigationContainer.tsx";
import HeroBanner from "../components/HeroBanner/HeroBanner.tsx";
import Contact from "../components/Contact/Contact.tsx";
import MascotContainer from "../components/Mascot/MascotContainer.tsx";
import NavigatorHandle from "../components/NavigatorHandle/NavigatorHandle.tsx";
import SocialMenu from "../components/SocialMenu/SocialMenu.tsx";

function HomeView() {

	return (
		<Grid w={"100vw"} gridTemplateColumns={{base: "0px 1fr", md: "80px 1fr"}} position={"relative"}>
			<NavigationContainer />
			<NavigatorHandle />
			<SocialMenu />
			<VStack >
				<HeroBanner />
				<CaseStudyContainer />
				<Contact />
			</VStack>
			<MascotContainer />
		</Grid>
	)
}

export default HomeView
