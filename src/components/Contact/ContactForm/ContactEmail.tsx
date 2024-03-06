import {VStack, Text, Heading, Box} from "@chakra-ui/react";

function ContactEmail() {
	return (
		<>
			<VStack
				px={10} w={"100%"}
				maxW={"490px"} alignItems={"flex-start"}>
				<Text fontFamily={"body"}  fontWeight={500}>Or Send an email to:</Text>
				<Heading
					fontFamily={'"Montserrat Subrayada", "sans-serif"'}
					size={"2xl"} as={"h2"} fontWeight={600}>
					<Box as={"a"}  href={"mailto:itscarlosisaac@gmail.com"} lineHeight={"90%"}>
						<Box whiteSpace={"nowrap"}>Itscarlosisaac</Box>
						<Box>@gmail.com</Box>
					</Box>
				</Heading>
			</VStack>
		</>
	)
}

export default ContactEmail
