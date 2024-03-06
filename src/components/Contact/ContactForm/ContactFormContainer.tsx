import {VStack, Text, Grid} from "@chakra-ui/react";
import ContactForm from "./ContactForm.tsx";
import ContactEmail from "./ContactEmail.tsx";

function ContactFormContainer() {
	return (
		<>
			<Grid
				gridTemplateColumns={"1fr 1fr"}
				alignItems={"center"}
				w={"100%"}>
				<VStack flexGrow={2}>
					<Text>Send a Message</Text>
					<ContactForm />
				</VStack>
				<ContactEmail />
			</Grid>
		</>
	)
}

export default ContactFormContainer
