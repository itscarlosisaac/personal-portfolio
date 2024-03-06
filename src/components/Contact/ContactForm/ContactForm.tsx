import {Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack} from "@chakra-ui/react";
import RocketIcon from "../../Icons/RocketIcon.tsx";

function ContactForm() {
	return (
		<>
			<VStack
				as={"form"} w={"100%"} >
				<Flex gap={4}>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input type='text' placeholder={"John Hammond"} />
					</FormControl>
					<FormControl>
						<FormLabel>Subject</FormLabel>
						<Input type='text' placeholder={"Park breakout"} />
					</FormControl>
				</Flex>
				<FormControl>
					<FormLabel>Email address</FormLabel>
					<Input type='email' placeholder={"jonh.hammond@jpark.com"} />
					<FormErrorMessage>Email is required.</FormErrorMessage>
				</FormControl>
				<FormControl>
					<FormLabel>Message</FormLabel>
					<Textarea resize={"none"} placeholder={"Life find its way."} />
				</FormControl>
				<Button
					w={"full"}
					h={"48px"}
					mt={4}
					gap={4}
					colorScheme='teal'
					type='submit'
					bg={"#56C9C2"}
					sx={{_hover: { bg: '#3d918d' }}}
				>
					<span>Send Message</span>
					<RocketIcon boxSize={8} color={"white"} />
				</Button>
			</VStack>
		</>
	)
}

export default ContactForm
