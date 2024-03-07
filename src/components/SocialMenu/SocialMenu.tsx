import {Flex} from "@chakra-ui/react";
import GithubIcon from "../Icons/GithubIcon.tsx";
import LinkedInIcon from "../Icons/LinkedInIcon.tsx";

function SocialMenu() {
	
	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/itscarlosisaac",
			icon: <GithubIcon _hover={{color: "#56C9C2"}} color="#cecece" boxSize={7} />
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/cisaacmb/",
			icon: <LinkedInIcon  _hover={{color: "#57C9C2"}} color="#cecece" boxSize={6} />
		},
	]
	
	return (
		<>
			<Flex>
				{
					socialLinks.map((link, index) => {
						return (
							<Flex
								as={"a"}
								href={link.url}
								target={"_blank"}
								cursor={"pointer"}
								key={index}
								w={"36px"}
								h={"36px"}
								justifyContent={"center"}
								alignItems={"center"} mx={2}
								transition={"0.3s"}
							>
								{link.icon}
							</Flex>
						)
					})
				}
			</Flex>
		</>
	)
}

export default SocialMenu
