import {Text, HStack} from "@chakra-ui/react";
import useNavigationLinks from "./useNavigationLinks.tsx";

function NavigationMenuList() {
	
	const { navigationLinks, handleScroll } = useNavigationLinks()
	return (
		<HStack
			display={{base: "none", md: "flex"}}
			h={"100%"}
			alignItems={"center"}
			justifyContent={"flex-end"}
			textTransform={"uppercase"}
			letterSpacing={"1px"}
			gap={10}
			fontSize={"14px"}
		>
			{
				navigationLinks.map((link) => {
					return (
						<Text
							sx={{_hover:{color: "#56C9C2"}}}
							cursor={"pointer"} fontWeight={500}
							key={link.url}
							onClick={() => handleScroll(`#${link.url}`)}
						>{link.label}</Text>
					)
				})
			}
		</HStack>
	)
}

export default NavigationMenuList
