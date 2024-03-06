import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import ContactFormContainer from "./ContactForm/ContactFormContainer.tsx";
import DynamicSvgPath from "../Background/DynamicSvgPath.tsx";
import {Box} from "@chakra-ui/react";

function Contact() {
	return (
		<>
			<ParallaxSection>
				<ContactFormContainer />
				<Box zIndex={-1} position={"absolute"} left={"0"} bottom="0" w="100%" h="100vh" pointerEvents={"none"}>
					<DynamicSvgPath
						start={{x:0, y: 0}}
						points={
							[
								{ type: 'V', y: 400},
								{ type: 'H', x: 20 },
								{ type: 'V', y: 200 }
							]
						}
						end={{x:0, y: 400}}
						color={"rgb(30,22,91)"}
					/>
				</Box>
			</ParallaxSection>
		</>
	)
}

export default Contact
