import {Box, Grid} from "@chakra-ui/react";
import NavigationMenuList from "./NavigationMenuList.tsx";
import Logo from "../Logo/Logo.tsx";

function NavigationContainer() {
	return (
		<Grid
			p={5}
			background={"white"}
			boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px, rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
			gridTemplateRows={"80px 1fr"}
			h={"100vh"} top={"0"} left={"0"}
			w={"80px"} position={"sticky"}  zIndex={120}>
			<Box w={"40px"} h={"40px"}>
				<Logo />
			</Box>
			<NavigationMenuList />
		</Grid>
	)
}

export default NavigationContainer
