import {Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Textarea} from "@chakra-ui/react";
import RocketIcon from "../../Icons/RocketIcon.tsx";
import {FormEvent, useState} from "react";
import * as yup from 'yup';
import { useToast } from '@chakra-ui/react'

function ContactForm() {
	
	const [ errors, setErrors ]= useState<Record<string, string>>({})
	const [ formState, setFormState ] = useState<"idle" | "loading" | "success" | "error">( "idle" )
	const chakra_toast = useToast({
		variant: "toast",
	})
	
	const schema = yup.object().shape({
		message: yup.string().required("message:Please enter a message").min(10, "message:Message must be at least 10 characters"),
		email: yup.string().required("email:Please enter an email").email(),
		subject: yup.string().required("subject:Please enter a subject").min(4),
		name: yup.string().required("name:Please enter a name").min(3),
	});
	
	async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const name = data.get("name")
		const email = data.get("email")
		const subject = data.get("subject")
		const message = data.get("message")
		
		setFormState("loading")
		try {
			const validated_data = await schema.validate({
				name: name,
				email: email,
				subject: subject,
				message: message
			})
			const response = await fetch("/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(validated_data)
			})
			if( !response.ok ) {
				throw new Error("global:There was an error sending the message")
			}
			await new Promise((resolve) => {
				setTimeout(resolve, 1000)
			})
			setFormState("success")
			
			chakra_toast({
				title: 'Message Sent',
				description: "Your message has been sent. I'll get back to you soon!",
				status: 'success',
				duration: 3000,
				isClosable: true,
			})
			const form =  document.querySelector("#contact-form") as HTMLFormElement
			form.reset()
		} catch (err) {
			const error = err as Error;
			const [key, value] = error.message.split(":")
			setErrors({[key]: value})
			setFormState("error")
		} finally {
			setTimeout(() => {
				setFormState("idle")
			}, 3000)
		}
	}
	
	
	
	return (
		<>
			<Box
				m={{base: 2, md: 4}}
			>
				<form
					style={{
						flexDirection: "column",
						width: "100%",
						display: "flex",
						gap: "1rem",
					}}
					id={"contact-form"}
					onSubmit={handleFormSubmit} >
					<Flex gap={{base: 2, md:4}}>
						<FormControl isInvalid={!!errors["name"]}>
							<FormLabel fontSize={{base: "sm", md: "md"}}>Name</FormLabel>
							<Input
								name={"name"}
								size={{base: "sm", md: "md"}}
								type='text' placeholder={"John Hammond"} />
							<FormErrorMessage>{errors["name"]}</FormErrorMessage>
						</FormControl>
						<FormControl isInvalid={!!errors["subject"]}>
							<FormLabel fontSize={{base: "sm", md: "md"}}>Subject</FormLabel>
							<Input
								name={"subject"}
								size={{base: "sm", md: "md"}} type='text' placeholder={"Park breakout"} />
							<FormErrorMessage>{errors["subject"]}</FormErrorMessage>
						</FormControl>
					</Flex>
					<FormControl isInvalid={!!errors["email"]}>
						<FormLabel fontSize={{base: "sm", md: "md"}}>Email address</FormLabel>
						<Input name={"email"}
							size={{base: "sm", md: "md"}} type='email' placeholder={"jonh.hammond@jpark.com"} />
						<FormErrorMessage>{errors["email"]}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={!!errors["message"]}>
						<FormLabel fontSize={{base: "sm", md: "md"}}>Message</FormLabel>
						<Textarea name={"message"}
							size={{base: "sm", md: "md"}} resize={"none"} placeholder={"Life find its way."} />
						<FormErrorMessage>{errors["message"]}</FormErrorMessage>
					</FormControl>
					<FormControl isInvalid={!!errors["global"]}>
						<Button
							w={"full"}
							h={{base: "36px", md: "48px"}}
							fontSize={{base: "12px", md: "md"}}
							mt={{base: 2, md: 4}}
							gap={4}
							colorScheme='teal'
							type='submit' isLoading={formState === "loading"}
							bg={"#56C9C2"}
							sx={{_hover: { bg: '#3d918d' }}}
						>
							<span>Send Message</span>
							<RocketIcon boxSize={8} color={"white"} />
						</Button>
						<FormErrorMessage>{errors["global"]}</FormErrorMessage>
					</FormControl>
				</form>
			</Box>
		</>
	)
}

export default ContactForm
