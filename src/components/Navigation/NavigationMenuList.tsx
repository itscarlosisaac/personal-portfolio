import NavigationMenuListItem from "./NavigationMenuListItem.tsx";
import {VStack} from "@chakra-ui/react";

function NavigationMenuList() {
	
	return (
		<VStack
			mt={"-30px"}
			alignItems={"center"}
			justifyContent={"center"}
			h={"100%"}
		>
		{
			[0,1,2,3,4].map(() => <NavigationMenuListItem />)
		}
		</VStack>
	)
}

export default NavigationMenuList
