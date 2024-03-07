import {Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea, VStack} from "@chakra-ui/react";
import RocketIcon from "../../Icons/RocketIcon.tsx";

function ContactForm() {
	return (
		<>
			<VStack
				gap={{base: 2, md:4}}
				as={"form"} w={"100%"} >
				<Flex gap={{base: 2, md:4}}>
					<FormControl>
						<FormLabel fontSize={{base: "sm", md: "md"}}>Name</FormLabel>
						<Input
							size={{base: "sm", md: "md"}}
							type='text' placeholder={"John Hammond"} />
					</FormControl>
					<FormControl>
						<FormLabel fontSize={{base: "sm", md: "md"}}>Subject</FormLabel>
						<Input
							size={{base: "sm", md: "md"}} type='text' placeholder={"Park breakout"} />
					</FormControl>
				</Flex>
				<FormControl>
					<FormLabel fontSize={{base: "sm", md: "md"}}>Email address</FormLabel>
					<Input
						size={{base: "sm", md: "md"}} type='email' placeholder={"jonh.hammond@jpark.com"} />
					<FormErrorMessage>Email is required.</FormErrorMessage>
				</FormControl>
				<FormControl>
					<FormLabel fontSize={{base: "sm", md: "md"}}>Message</FormLabel>
					<Textarea
						size={{base: "sm", md: "md"}} resize={"none"} placeholder={"Life find its way."} />
				</FormControl>
				<Button
					w={"full"}
					h={{base: "36px", md: "48px"}}
					fontSize={{base: "12px", md: "md"}}
					mt={{base: 2, md: 4}}
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
