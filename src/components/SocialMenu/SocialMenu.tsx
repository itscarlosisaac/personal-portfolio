import {Flex} from "@chakra-ui/react";
import GithubIcon from "../Icons/GithubIcon.tsx";
import LinkedInIcon from "../Icons/LinkedInIcon.tsx";

function SocialMenu() {
	
	const socialLinks = [
		{name: "GitHub", url: "https://github.com/itscarlosisaac", icon: <GithubIcon color="white" boxSize={4} />},
		{name: "LinkedIn", url: "https://www.linkedin.com/in/cisaacmb/", icon: <LinkedInIcon color="white" boxSize={4} />},
	]
	
	return (
		<>
			<Flex position={"fixed"} top={"20px"} right={"15px"} zIndex={90}>
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
								borderRadius={"100px"}
								bg={"#EA937A"}
								justifyContent={"center"}
								alignItems={"center"} mx={2}
								transition={"0.3s"}
								sx={{
									_hover: {
										bg: "#8c543a"
									}
								}}
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
