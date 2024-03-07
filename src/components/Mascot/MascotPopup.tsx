import {Box, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {ReactNode, useEffect, useState} from "react";
import {eventBus} from "../../EventBus/EventBus.ts";

const initialState = <>
	<Text textAlign={"center"} lineHeight={1.4} fontWeight={"500"} position={"relative"} zIndex={2}>
		Welcome to my site! :)
	</Text>
</>

function MascotPopup() {
	
	const [currentBubble, setCurrentBubble] = useState<ReactNode>(initialState)
	const deno_popup_variants = {
		init: {
			scale: 0,
			y:60
		},
		animate: {
			scale: 1.01,
			y:60,
			transition: {
				duration: 0.5,
				bounce: 0.1,
				type: "spring",
				delay: 2,
				ease: "anticipate"
			},
		},
	}
	const bubble_styles = {
		transformOrigin: "bottom right",
		_after: {
			content: "''",
			position: "absolute",
			width: "30px",
			height: "30px",
			right: 0,
			backgroundColor: "white",
			borderRadius: "70px",
			boxShadow: `
				-28px -6px 0 -2px white,
				-24px 17px 0 -6px white,
				-5px 25px 0 -10px white;`
		}
	}
	
	useEffect(() => {
		eventBus.on('contact-in-view', (data: ReactNode) => {
			setCurrentBubble(data)
		})
		eventBus.on('contact-out-of-view', () => setCurrentBubble(initialState))
		return () => {
			eventBus.off('contact-in-view', () => {})
			eventBus.off('contact-out-of-view', () => {})
		}
	}, [setCurrentBubble]);
	
	
	return (
		<>
			<motion.div
				variants={deno_popup_variants}
				initial={"init"}
				animate={"animate"}
			>
				<Box
					sx={bubble_styles}
					bg={"white"}
					maxWidth={"220px"} px={8} py={4} minWidth={"250px"}
					right={"85%"} borderRadius={"70px"}
					position={"absolute"} bottom={"90%"}>
					{currentBubble}
				</Box>
			</motion.div>
		</>
	)
}

export default MascotPopup
