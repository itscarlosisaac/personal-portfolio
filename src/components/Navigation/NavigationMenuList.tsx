import {Text, HStack} from "@chakra-ui/react";

function NavigationMenuList() {
	
	const handleScroll = (to: string) => {
		document.querySelector(to)?.scrollIntoView({ behavior: 'smooth' });
	}
	
	const links = [
		{
			url: "about",
			label: "About",
		},
		{
			url: "case-studies",
			label: "Projects",
		},
		{
			url: "contact",
			label: "Contact",
		},
	]
	
	return (
		<HStack
			h={"100%"}
			alignItems={"center"}
			justifyContent={"flex-end"}
			textTransform={"uppercase"}
			letterSpacing={"1px"}
			gap={10}
			fontSize={"14px"}
		>
			{
				links.map((link) => {
					return (
						<Text cursor={"pointer"} fontWeight={500}
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
