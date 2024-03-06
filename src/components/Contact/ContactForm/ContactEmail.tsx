import {VStack, Text, Heading} from "@chakra-ui/react";

function ContactEmail() {
	return (
		<>
			<VStack
				px={10} w={"100%"}
				maxW={"490px"} alignItems={"flex-start"}>
				<Text>Or Send an email to:</Text>
				<Heading
					fontFamily={'"Montserrat Subrayada", "sans-serif"'}
					size={"2xl"} as={"h2"}>
					<Text as={"a"}  href={"mailto:itscarlosisaac@gmail.com"} lineHeight={"90%"}>
						<Text whiteSpace={"nowrap"}>Itscarlosisaac</Text>
						<Text>@gmail.com</Text>
					</Text>
				</Heading>
			</VStack>
		</>
	)
}

export default ContactEmail
