import {Text} from "@chakra-ui/react";
import {CaseStudy} from "../../types/case.study.types.ts";
function NavigationMenuListItem({caseStudy}: {caseStudy: CaseStudy}) {
	const handleScroll = () => {
		const slug = `#case-study-${caseStudy.slug}`;
		document.querySelector(slug)?.scrollIntoView({ behavior: 'smooth' });
	}
	
	return (
		<>
			<Text
				cursor={"pointer"}
				fontWeight={"700"}
				onClick={handleScroll}
				fontFamily={"Montserrat"}
				transition={"all easeIn 0.4s"}
				sx={{
					_hover: {
						color: "#86EDC3"
					}
				}}
			>
				{caseStudy.id.toString().padStart(2, "0")}
			</Text>
		</>
	)
}

export default NavigationMenuListItem
