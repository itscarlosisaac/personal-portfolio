import {VStack, Grid, Heading, Divider, Box} from "@chakra-ui/react";
import ContactForm from "./ContactForm.tsx";
import ContactEmail from "./ContactEmail.tsx";

function ContactFormContainer() {
	return (
		<>
			<Grid
				zIndex={2}
				position={"relative"}
				gridTemplateColumns={{base: "1fr", md: "1fr 1fr"}}
				alignItems={"center"}
				w={"100%"}>
				<VStack
					p={10} borderRadius={10}
					alignItems={"flex-start"}
					bg={"white"}
					boxShadow={`
						rgba(0, 0, 0, 0.1) 0px 4px 12px,
						rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
						rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
					`}
					flexGrow={2}>
					<Heading
						as={"h4"} fontWeight={500} fontFamily={"body"}
						fontSize={"xl"}>Send a Message</Heading>
					<Divider borderWidth={2} maxWidth={"80px"} my={3} borderColor={"#56C9C2"}/>
					<ContactForm />
				</VStack>
				<Box order={{base: -1, md: 2}}>
					<ContactEmail />
				</Box>
			</Grid>
		</>
	)
}

export default ContactFormContainer
