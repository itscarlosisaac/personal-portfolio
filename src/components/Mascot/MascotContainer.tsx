import {Box, Image} from "@chakra-ui/react";
import {motion, useMotionValue, useMotionValueEvent} from "framer-motion";
import MascotPopup from "./MascotPopup.tsx";
import {useState} from "react";

function MascotContainer() {
	
	const yPosition = useMotionValue(70)
	const variants = {
		init: { scale: 0},
		animate: {
			transition: {
				delay: 0.5,
				duration: 0.8,
				bounce: 0.4,
				type: "spring",
				repeat: 1,
				repeatType: "reverse"
			},
			scale: 1
		}
	}
	const deno_variants = {
		init: { y: -200},
		animate: {
			transition: {
				duration: 0.5,
				bounce: 0.1,
				type: "spring",
				delay: 1.05,
				ease: "anticipate"
			},
			y: yPosition.get()
		},
	}
	
	const [bubbleProps, setBubbleProps] = useState<Record<string, string>>({
		overflow: "hidden",
		height: "250px"
	})
	
	useMotionValueEvent(yPosition, "animationComplete", () => {
		setBubbleProps({
			overflow: "visible",
		})
	})

	return (
		<>
			<Box >
				<motion.div style={
					{
						position: "fixed",
						bottom: "200px",
						right: "-10px",
					}}>
					<motion.div
						variants={variants}
						initial={"init"}
						animate={"animate"}
					>
						<Box
							backgroundImage={"url('/stars.png')"}
							backgroundSize={"cover"}
							borderRadius={"50%"} display={"block"}
							h={"80px"}
							w={"200px"}></Box>
					</motion.div>
					<motion.div
						style={{
							borderTopLeftRadius: "25%",
							borderTopRightRadius: "25%",
							position: "fixed",
							bottom: "20px",
							right: "20px",
							height: "250px",
							...bubbleProps
						}}>
						<MascotPopup />
						<Box>
							<motion.div
								style={{y: yPosition}}
								variants={deno_variants}
								initial={"init"}
								animate={"animate"}
							>
								<Image
									w={"150px"}
									src={"/deno.png"} alt="mascot"/>
							</motion.div>
						</Box>
					</motion.div>
				</motion.div>
			</Box>
		</>
	)
}

export default MascotContainer
