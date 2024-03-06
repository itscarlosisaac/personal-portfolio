import {Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack} from "@chakra-ui/react";

function ContactForm() {
	return (
		<>
			<VStack as={"form"} w={"100%"}>
				<FormControl>
					<FormLabel>Name</FormLabel>
					<Input type='name' />
				</FormControl>
				<FormControl>
					<FormLabel>Email address</FormLabel>
					<Input type='email' />
					<FormErrorMessage>Email is required.</FormErrorMessage>
				</FormControl>
				<FormControl>
					<FormLabel>Message</FormLabel>
					<Textarea placeholder={"Message"} />
				</FormControl>
				<Button
					mt={4}
					colorScheme='teal'
					type='submit'
				>
					Send Message
				</Button>
			</VStack>
		</>
	)
}

export default ContactForm
