import {Box} from "@chakra-ui/react";
import Mascot from "./Mascot.tsx";

function MascotContainer() {
	
	const responsive_styles = {
		transform: {base: "scale(0.7)", md: "none"},
		position: {base: "fixed", md : "none"},
		right: {base: "0", md : "none"},
		bottom: {base: "-50px", md : "none"},
		width: {base: "100px", md : "none"}
	}
	
	return (
		<>
			<Box
				sx={responsive_styles}>
				<Mascot />
			</Box>
		</>
	)
}

export default MascotContainer
