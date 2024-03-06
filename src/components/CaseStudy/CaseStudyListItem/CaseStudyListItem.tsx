import {HStack, VStack, Text, Heading, Divider, Grid, Image, Button, Flex, Box} from "@chakra-ui/react";
import {useRef} from "react";
import {useScroll} from "framer-motion";
import useParallax from "../../../hooks/animations/useParallax.ts";
import ParallaxSection from "../../Parallax/ParallaxSection.tsx";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {CaseStudy} from "../../../types/case.study.types.ts";
import CaseStudyTags from "./CaseStudyTags.tsx";

function CaseStudyListItem({caseStudy}: {caseStudy: CaseStudy}) {
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({ target: ref });
	// const y = useParallax(scrollYProgress, 300);
	
	return (
		<>
			<ParallaxSection containerProps={{
				id: `case-study-${caseStudy.slug}`,
			}}>
				<Grid gridTemplateColumns={"1fr minmax(300px,500px)"} px={10} gap={20} maxHeight={"90vh"}>
					<VStack
						maxW={"700px"} w={"100%"}
						justifyContent={"center"}
						alignItems={"flex-start"}
						as={"article"}>
						<HStack>
							<VStack  fontWeight={"900"} alignItems={"center"}>
								<Heading
									fontSize={"14px"} fontWeight={"800"} letterSpacing={"0.18em"}
									textTransform={"uppercase"}>Case Study</Heading>
								<Heading fontSize={"120px"} lineHeight="80px" fontWeight={"700"} >
									{caseStudy.id.toString().padStart(2, "0")}
								</Heading>
							</VStack>
							<VStack maxWidth={"450px"} pt={7}>
								<Heading
									fontWeight={"700"} fontSize={"40px"} lineHeight={"90%"} letterSpacing={"0.01em"}
									textTransform={"uppercase"} >
									{caseStudy.title}
								</Heading>
							</VStack>
						</HStack>
						<Divider w={"70px"} my={5} opacity={1} border={"2px solid"} borderColor={caseStudy.color}/>
						<VStack as={"article"} alignItems={"flex-start"} gap={5}>
							<Text>{caseStudy.description}</Text>
							<CaseStudyTags tags={caseStudy.tags} />
							<Button
								href={caseStudy.url} target={"_blank"} rel={"noopener noreferrer"}
								justifyContent={"space-between"}
								as={"a"} borderRadius={"0"} size={"md"} p={0}
								pl={4} h={"44px"} fontSize={"14px"}
								minW={"160px"} cursor={"pointer"}>
								<span>view project </span>
								<Flex
									ml={4}  bg={"#08061C"}
									justifyContent={"center"} alignItems={"center"} h={"100%"} w={"40px"}>
									<ArrowForwardIcon boxSize={"20px"} color={"white"} />
								</Flex>
							</Button>
						</VStack>
					</VStack>
					<VStack>
						<Image
							boxShadow={"rgba(0, 0, 0, 0.2) 0px 25px 20px -20px;"}
							src={caseStudy.image} alt={caseStudy.imageDescription}/>
					</VStack>
				</Grid>
				<Box zIndex={-1} position={"absolute"} left={"0"} bottom="0" w="100%" h="100vh" pointerEvents={"none"}>
					{caseStudy.render()}
				</Box>
			</ParallaxSection>
		</>
	)
}

export default CaseStudyListItem
