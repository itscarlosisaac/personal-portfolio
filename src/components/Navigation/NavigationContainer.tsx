import {Box, Grid} from "@chakra-ui/react";
import NavigationMenuList from "./NavigationMenuList.tsx";

function NavigationContainer() {
	return (
		<Grid
			p={5}
			gridTemplateRows={"80px 1fr"}
			h={"100vh"} top={"0"} left={"0"}
			w={"80px"} position={"sticky"} bg={"yellow"} zIndex={3}>
			<Box w={"40px"} h={"40px"} bg={"green"}></Box>
			<NavigationMenuList />
		</Grid>
	)
}

export default NavigationContainer
