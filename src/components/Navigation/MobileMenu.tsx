import {
	Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay,
	HStack, Text,
	useDisclosure, VStack
} from "@chakra-ui/react";
import { HamburgerIcon} from "@chakra-ui/icons";
import useNavigationLinks from "./useNavigationLinks.tsx";


function MobileMenu() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { navigationLinks, handleScroll } = useNavigationLinks()
	
	const handleScrollAndClose = (to: string) => {
		onClose()
		handleScroll(to)
	}
	return (
		<>
			<HStack
				display={{base: "flex", md: "none"}}
				h={"100%"}
				alignItems={"center"}
				justifyContent={"flex-end"}
				textTransform={"uppercase"}
				letterSpacing={"1px"}
				gap={10}
				fontSize={"14px"}
			>
				<HamburgerIcon boxSize={7}  onClick={onOpen} />
				<Drawer
					isOpen={isOpen}
					placement='right'
					onClose={onClose}
					size={"full"}
					
				>
					<DrawerOverlay />
					<DrawerContent mt={"60px"}>
						<DrawerCloseButton />
						<DrawerBody>
							<VStack gap={6} py={10}>
								{
									navigationLinks.map((link) => {
										return (
											<Text
												fontSize={"20px"}
												textAlign={"center"}
												sx={{_hover:{color: "#56C9C2"}}}
												cursor={"pointer"} fontWeight={500}
												key={link.url}
												onClick={() => handleScrollAndClose(`#${link.url}`)}
											>{link.label}</Text>
										)
									})
								}
							</VStack>
						</DrawerBody>
					
					</DrawerContent>
				</Drawer>
				
			</HStack>
		</>
	)
}

export default MobileMenu
