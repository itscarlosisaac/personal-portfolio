import {Box, Grid} from "@chakra-ui/react";
import NavigationMenuList from "./NavigationMenuList.tsx";
import Logo from "../Logo/Logo.tsx";
import MobileMenu from "./MobileMenu.tsx";

function NavigationContainer() {
	return (
		<Grid
			px={10}
			py={2}
			background={"white"}
			boxShadow={" rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}
			gridTemplateColumns={{base: "120px 1fr"}}
			h={"60px"} top={"0"} left={"0"}
			w={"100vw"} position={"sticky"} zIndex={120} >
			<Box w={"40px"} h={"40px"}>
				<Logo />
			</Box>
			<Box>
				<MobileMenu />
				<NavigationMenuList />
			</Box>
		</Grid>
	)
}

export default NavigationContainer
