import {HStack, VStack, Heading, Grid, Image, Button, Flex, Box, Container} from "@chakra-ui/react";
import ParallaxSection from "../../Parallax/ParallaxSection.tsx";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import {CaseStudy} from "../../../types/case.study.types.ts";
import CaseStudyTags from "./CaseStudyTags.tsx";
function CaseStudyListItem({caseStudy}: {caseStudy: CaseStudy}) {

	
	return (
		<>
				<ParallaxSection
					containerProps={{
					id: `case-study-${caseStudy.slug}`,
					maxW: {base: "100vw"},
				}}>
					
					<Container maxW='6xl' w={"100%"}>
						<Grid
							py={{base: 6, md: 0 }}
							px={{base: 5, md: 0}}
							gap={{base: 4, md: 6, lg: 20}}
							maxHeight={{base: "none", md: "90vh", lg: "100vh"}}
							gridTemplateColumns={{base: "1fr", md:"1fr auto", lg: "1fr minmax(300px,500px)"}}
						>
							<VStack
								maxW={"700px"} w={"100%"}
								justifyContent={"center"}
								alignItems={"flex-start"}
								as={"article"}>
								<HStack mb={{base:2}}>
										<VStack maxWidth={"450px"} pt={7} alignItems={"flex-start"}>
											<Heading
												fontSize={{base: "7px", md: "10px", lg: "12px"}}
												fontWeight={"800"} opacity={0.7}
												letterSpacing={"0.18em"}
												textTransform={"uppercase"}>
												Case Study {caseStudy.id.toString().padStart(2, "0")}
											</Heading>
											<Heading
												maxW={"100%"}
												fontWeight={"700"}
												fontSize={{base: "24px", md: "30px", lg: "40px"}}
												lineHeight={1}
												letterSpacing={"0.01em"}
												textTransform={"uppercase"}>
												{caseStudy.title}
											</Heading>
										</VStack>
								</HStack>
								
								<VStack as={"article"} alignItems={"flex-start"} gap={5}>
									{caseStudy.description}
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
									w={{base: "80%", md: "90%", lg: "100%"}} h={"auto"}
									boxShadow={"rgba(0, 0, 0, 0.2) 0px 25px 20px -20px;"}
									src={caseStudy.image} alt={caseStudy.imageDescription}/>
							</VStack>
						</Grid>
					</Container>
					<Box zIndex={-1} position={"absolute"} left={"0"} bottom="0" w="100%" h="100vh" pointerEvents={"none"}>
						{caseStudy.render()}
					</Box>
				</ParallaxSection>
		</>
	)
}

export default CaseStudyListItem
