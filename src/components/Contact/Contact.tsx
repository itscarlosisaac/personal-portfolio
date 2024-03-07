import ParallaxSection from "../Parallax/ParallaxSection.tsx";
import ContactFormContainer from "./ContactForm/ContactFormContainer.tsx";
import DynamicSvgPath from "../Background/DynamicSvgPath.tsx";
import {Box, Text, VStack} from "@chakra-ui/react";
import {useEffect, useRef} from "react";
import {useInView} from "framer-motion";
import {eventBus} from "../../EventBus/EventBus.ts";

function Contact() {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: false})
	
	const resume_url = "https://drive.google.com/file/d/1GRuViLviqBEhaNqR_n22Ty6yedSXRlkE/view?usp=sharing"
	
	const resumeMessage = <>
		<VStack gap={0} fontSize={16}>
			<Text >Need my resume?</Text>
			<Text as={"a"} href={resume_url} color={"#56C9C2"} fontWeight={"bold"}>
				Download it here.
			</Text>
		</VStack>
	</>
	
	useEffect(() => {
		if (isInView) {
			eventBus.emit('contact-in-view', resumeMessage);
		}else {
			eventBus.emit('contact-out-of-view', null);
		}
	}, [isInView]);
	
	return (
		<>
			<ParallaxSection
				containerProps={{
					id: "contact",
				}}
			>
				<Box ref={ref}>
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
				</Box>
			</ParallaxSection>
		</>
	)
}

export default Contact
