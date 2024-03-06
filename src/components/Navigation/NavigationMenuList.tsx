import NavigationMenuListItem from "./NavigationMenuListItem.tsx";
import {VStack, Text} from "@chakra-ui/react";
import case_studies_list from "../../data/CaseStudy.tsx";
import MailIcon from "../Icons/MailIcon.tsx";

function NavigationMenuList() {
	
	return (
		<VStack
			mt={"-30px"}
			alignItems={"center"}
			justifyContent={"center"}
			h={"100%"}
		>
		{
			case_studies_list.map((caseStudy) =>
				<NavigationMenuListItem
					caseStudy={caseStudy}
					key={caseStudy.id} />
			)
		}
			<Text
				onClick={() => {
					document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth' });
				}}
				cursor={"pointer"}
				fontWeight={"700"}
				fontFamily={"Montserrat"}
				transition={"all easeIn 0.4s"}
				sx={{
					_hover: {
						color: "#86EDC3"
					}
				}}
			>
				<MailIcon boxSize={6} />
			</Text>
		</VStack>
	)
}

export default NavigationMenuList
